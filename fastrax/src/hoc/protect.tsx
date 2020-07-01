import React, { ComponentType } from 'react';

export interface AdditionalProps {
     permission: string | string[];
}

export default function ProtectHOC<P extends AdditionalProps>(
     requirement: any,
     WrappedComponent: any
): ComponentType<P> {
     return (props) => <WrappedComponent {...(props as any)} />;
}
