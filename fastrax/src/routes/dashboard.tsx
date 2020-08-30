import React, { useState, ChangeEvent, useRef, useEffect } from 'react';
import Layout from '../components/layout';
import { DatePicker } from '@progress/kendo-react-dateinputs';
// import
import KGridMenuFilter from '../plugins/KGridMenuFilter';
import _ from 'lodash';
import { recurFilterString } from '../plugins/kendoGrid';
import {
     Grid,
     GridColumn as Column,
     GridColumnMenuFilter,
     GridProps
} from '@progress/kendo-react-grid';

import {
     Content,
     Banner,
     BannerHeader,
     ContentSidebar,
     Button as ButtonComp,
     Alert,
     RadialMenu,
     Input,
     Checkbox,
     Radio,
     CurrencyInput
} from '../components/common';
import products from '../json/products.json';
import { withAuth } from '../hoc/protect';

import { process, filterBy } from '@progress/kendo-data-query';
const anime = require('animejs').default;

export interface DashboardRouteProps {}

const { Toast } = Alert;

const Button = withAuth(ButtonComp);

export interface KGridProps {
     result: any;
     dataState: any;
}

const DashboardRoute: React.FC<DashboardRouteProps> = () => {
     const [isValue, setIsValue] = useState<any>(true);

     const [currencyNewVal, setcurrencyNewVal] = useState<any>('');

     //  const handleChange = (
     //       e: React.FormEvent<HTMLInputElement>,
     //       setIsValue: any
     //  ) => {
     //       console.log('wew');
     //       const { value } = e.currentTarget;
     //       //   console.log(value);
     //       setIsValue(value);
     //  };

     const handleChange = (e: any) => {
          setIsValue(!isValue);
     };

     const createAppState = (dataState: any) => {
          return {
               result: process(products, dataState),
               dataState: dataState
          };
     };

     const [paging, setPaging] = useState<KGridProps>(
          createAppState({
               take: 10,
               group: [{ field: 'Category.CategoryName' }]
          })
     );

     const dataStateChange = (event: any) => {
          setPaging(createAppState(event.data));
     };

     const expandChange = (event: any) => {
          event.dataItem[event.target.props.expandField] = event.value;
          setPaging({
               result: Object.assign({}, paging.result),
               dataState: paging.dataState
          });
     };

     const filterData = (filter: any) => {
          return filterBy(products, filter);
     };

     const filterChange = (event: any) => {
          const data = filterData(event.filter);
          console.log(
               recurFilterString(event.filter, gridRef.current?.columns)
          );

          //   console.log(gridRef.current?.columns);
          setPaging({
               result: data,
               dataState: paging.dataState
          });
     };

     const gridRef = useRef<Grid>(null);

     useEffect(() => {
          console.log(gridRef.current);

          setTimeout(() => {
               anime({
                    targets: '.k-grid-table .k-master-row',
                    translateY: [30, 0],
                    delay: anime.stagger(100) // increase delay by 100ms for each elements.
               });
          }, 100);
          return () => {};
     }, []);

     return (
          <Layout>
               <Banner>
                    <BannerHeader
                         title="Dashboard"
                         subTitle="Shows the dashboard"
                    />
               </Banner>
               <Content>
                    {/* <div style={{ maxWidth: 200 }}>
                         <CurrencyInput
                              rate={3.67}
                              value={55}
                              digits={4}
                              currencyCode="AED"
                              afterConvertedOrFormatted={setcurrencyNewVal}
                         />
                    </div>
                    <Button ripple permission="canDelete" rounded shadow>
                         Button
                    </Button>
                    <div>Checkbox</div>
                    <Checkbox
                         text="Checkbox 1"
                         checked={isValue}
                         onChange={handleChange}
                    />
                    <Checkbox text="Checkbox 2" />
                    <div>Radio Button</div>
                    <Radio text="Radio 1" />
                    <Radio text="Radio 2" />
                    <div>Date Picker</div>
                    <DatePicker
                         defaultValue={new Date()}
                         format="dd/MMM/yyyy"
                         weekNumber={true}
                    /> */}
                    <Grid
                         ref={gridRef}
                         style={{ height: '400px' }}
                         reorderable={true}
                         resizable
                         sortable={true}
                         pageable={{ pageSizes: true }}
                         data={paging.result}
                         onDataStateChange={dataStateChange}
                         {...paging.dataState}
                         onExpandChange={expandChange}
                         expandField="expanded"
                         onFilterChange={(e) => filterChange(e)}
                    >
                         <Column
                              field="ProductID"
                              filter={'numeric'}
                              title="ID"
                              width="40px"
                              columnMenu={KGridMenuFilter}
                         />
                         <Column
                              field="ProductName"
                              title="Name"
                              width="250px"
                              filter={'text'}
                              columnMenu={KGridMenuFilter}
                         />
                         <Column
                              field="Category.CategoryName"
                              title="CategoryName"
                              filter={'text'}
                              columnMenu={KGridMenuFilter}
                         />
                         <Column field="UnitPrice" title="Price" />
                         <Column field="UnitsInStock" title="In stock" />
                    </Grid>
               </Content>
               <ContentSidebar></ContentSidebar>
          </Layout>
     );
};

export default DashboardRoute;
