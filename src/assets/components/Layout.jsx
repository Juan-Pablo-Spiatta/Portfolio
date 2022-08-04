import React, { Fragment, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from './Loading';

const Layout = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);
    return (
        <Fragment>
            {
                loading ? 
                    <Loading /> 
                : 
                    <Fragment>
                        <header> 
                        
                        </header>
                        <main>
                            <Outlet /> 
                        </main>
                        <footer>
                            
                        </footer>
                    </Fragment>
            }
        </Fragment>
    );
}

export default Layout;
