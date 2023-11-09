import React from 'react';
import Header from '@/components/header';
import Navigation from '@/components/navbar';

const layout = ({ children }: { children: React.ReactDOM }) => {
    return (
        <>
            <Header />
            <Navigation />
            {children}
        </>
    )
}

export default layout