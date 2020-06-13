import React, { Suspense } from "react";

export const withSuspenseComponent = (Component) => {
    return (props) => {
        return<Suspense fallback={<div>Loading...</div>}> 
        <Component {...props} /> 
    </Suspense>
    }
     
}