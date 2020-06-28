import React, {
     useState,
     useEffect,
     useRef,
     MutableRefObject,
     MouseEvent
} from 'react';
import styled from 'styled-components';
import { Button } from '@progress/kendo-react-buttons';
import * as d3 from 'd3';
import { mouse } from 'd3';

interface IRadialListProps {
     title: String;
     icon: String;
     active: Boolean;
}

interface IRadialProps {
     listMenu?: Array<Object>;
     position?: 'bottom-left' | 'bottom-right';
     iconColor?: string;
     onClick?: (e: any) => void;
}

const RadialMenuStyled = styled.div<IRadialProps>``;

export const Index: React.FC<IRadialProps> = (props) => {
     //  const [mousePos, setMousePos] = useState({
     //       isDragging: false,
     //       posX: 20,
     //       posY: 20
     //  });

     //  const ondragStart = (a: MouseEvent<HTMLAnchorElement>) => {
     //       a.preventDefault();
     //       setMousePos({ ...mousePos, isDragging: true });
     //  };

     //  const ondragAction = (a: MouseEvent<HTMLAnchorElement>) => {
     //       a.preventDefault();
     //       if (mousePos.isDragging) {
     //            setMousePos({
     //                 ...mousePos,
     //                 posX: mousePos.posX + a.movementX,
     //                 posY: mousePos.posY + a.movementY
     //            });
     //       }
     //  };

     //  const ondragEnd = (a: MouseEvent<HTMLAnchorElement>) => {
     //       a.preventDefault();
     //       if (mousePos.isDragging)
     //            setMousePos({ ...mousePos, isDragging: false });
     //  };

     useEffect(() => {
          const setCenterData = (d: any) => {
               svg.selectAll('g.inner__center__group').remove();

               var innerCenterGrp = svg
                    .append('g')
                    .attr('class', 'inner__center__group')
                    .on('click', function () {
                         document.body.classList.remove('radial-open');
                    });

               innerCenterGrp
                    .append('circle')
                    .attr('r', radius * 0.47)
                    .attr('stroke', '#7392b3')
                    .attr('stroke-width', '5px')
                    .attr('fill', '#FFFFFF');

               innerCenterGrp
                    .append('text')
                    .attr('fill', `${props.iconColor || '#333'}`)
                    .attr('text-anchor', 'middle')
                    .attr('font-size', radius * 0.3)
                    .attr('y', -5)
                    .html(d.data.icon);

               var _count = d.data.title.split(' ');

               innerCenterGrp
                    .selectAll('text.center__text')
                    .data((c) => d.data.title.split(' '))
                    .enter()
                    .append('text')
                    .text((c) => c as any)
                    .attr('fill', `${props.iconColor || '#333'}`)
                    .attr('font-size', radius * 0.099)
                    .attr('text-anchor', 'middle')
                    .attr('x', 0)
                    .attr('y', (d, i) => {
                         return i * 15 + 25;
                    });
          };

          var size = 300;
          var width = size,
               height = size,
               radius = size / 2;
          var data: any = props.listMenu;

          var _percentage = 100 / data.length / 100,
               angle = 360 * _percentage,
               rotateAnge = angle / 2;

          var arc: any = d3
               .arc()
               .outerRadius(radius - 10)
               .innerRadius(0)
               .startAngle(function (d) {
                    return rotateAnge * 0.0174 - d.startAngle + Math.PI / 180;
               })
               .endAngle(function (d) {
                    return rotateAnge * 0.0174 - d.endAngle + Math.PI / 180;
               });

          var pie = d3.pie().sort(null).value(1);

          var svg = d3
               .select('body')
               .append('svg')
               .attr('width', width)
               .attr('height', height)
               .attr(
                    'class',
                    `radial-menu-svg radial-${
                         props.position || 'bottom-right'
                    }-aligned`
               )
               .append('g')
               .attr(
                    'transform',
                    'translate(' + width / 2 + ',' + height / 2 + ')'
               );

          // filters go in defs element
          var defs = svg.append('defs');

          var filter = defs.append('filter').attr('id', 'drop-shadow');

          filter
               .append('feGaussianBlur')
               .attr('in', 'SourceAlpha')
               .attr('stdDeviation', 10)
               .attr('result', 'blur');

          filter
               .append('feOffset')
               .attr('in', 'blur')
               .attr('dx', 2)
               .attr('dy', 5)
               .attr('result', 'offsetBlur');

          var feMerge = filter.append('feMerge');

          feMerge.append('feMergeNode').attr('in', 'offsetBlur');
          feMerge.append('feMergeNode').attr('in', 'SourceGraphic');

          // Circle Shadow
          svg.append('circle')
               .attr('r', radius)
               .attr('transform', 'scale(.85)')
               .style('filter', 'url(#drop-shadow)')
               .attr('fill', '#d3d3d3');

          var g = svg
               .selectAll('.arc')
               .data(pie(data))
               .enter()
               .append('g')
               .attr('class', 'pie__slice__group')
               .on('click', (d: any) => props.onClick && props.onClick(d))
               .on('mouseover', (d: any, i: any) => {
                    setCenterData(d);
               });

          g.append('path')
               .attr('d', arc)
               .attr('class', 'slicepath')
               .attr('stroke', '#E8E8E8')
               .attr('stroke-width', '1px')
               .style('fill', '#ffffff');

          g.append('text')
               .attr('transform', (d: any) => {
                    var _d = arc.centroid(d);
                    _d[0] *= 1.5; //multiply by a constant factor
                    _d[1] *= 1.5; //multiply by a constant factor
                    return 'translate(' + _d + ')';
               })
               .attr('font-size', radius * 0.17)
               .attr('fill', `${props.iconColor || '#333'}`)
               .attr('dy', '.50em')
               .style('text-anchor', 'middle')
               .html(function (d: any) {
                    return d.data.icon;
               });

          setCenterData(pie(data)[0]);
          return () => {};
     }, []);

     const handleAnchorClick = () => {
          document.body.classList.add('radial-open');
     };

     return (
          <RadialMenuStyled {...props}>
               <a
                    // style={{
                    //      position: 'absolute',
                    //      right: mousePos.posX,
                    //      bottom: mousePos.posY
                    // }}
                    // onMouseDown={ondragStart}
                    // onMouseMove={ondragAction}
                    // onMouseUp={ondragEnd}
                    // onMouseLeave={ondragEnd}
                    // onMouseEnter={ondragEnd}
                    onClick={handleAnchorClick}
                    className={`ellipsis radial-menu-nav radial-${
                         props.position || 'bottom-right'
                    }-aligned`}
               >
                    <i className="ams-radial-menu"></i>
               </a>
          </RadialMenuStyled>
     );
};

export default Index;
