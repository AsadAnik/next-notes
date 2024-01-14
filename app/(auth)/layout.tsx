import React from 'react';
import Header from '@/components/header';

const layout = ({ children }: { children: React.ReactDOM }) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default layout