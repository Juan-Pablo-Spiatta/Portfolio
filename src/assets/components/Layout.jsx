import React, { Fragment, useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from './Loading';

import style from '../styles/Layout.module.css';

//icons imports
import codePen from '../img/networks-icons/codepen-icon.svg';
import gitHub from '../img/networks-icons/github-icon-2.svg';
import linkedIn from '../img/networks-icons/linkedin-icon-2.svg';

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
                            <div className={ style.container }>
                                <h1 className={ style.name }>JUAN PABLO SPIATTA</h1>
                                <ul className={ style.networksContainer }>
                                    <li>
                                        <a 
                                            className={ style.networks } 
                                            href="https://codepen.io/juan-pablo-spiatta"
                                            rel='noopener'
                                            target='_blank'>
                                                <img src={codePen} alt="codepen" />
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            className={ style.networks } 
                                            href="https://github.com/Juan-Pablo-Spiatta" 
                                            rel='noopener'
                                            target='_blank'>
                                                <img src={gitHub} alt="github" />
                                        </a>
                                    </li>
                                    <li>
                                        <a 
                                            className={ style.networks } 
                                            href="https://www.linkedin.com/in/juan-pablo-spiatta/" 
                                            rel='noopener'
                                            target='_blank'>
                                                <img src={linkedIn} alt="linkedin" />
                                        </a>
                                    </li>
                                </ul>
                                <h5 className={ style.copyright }>
                                    &copy; Copyright 2022 - Todos los derechos reservados
                                </h5>
                                <h5 className={ style.desing }>
                                    Diseño por <a href="#home">Juan Pablo Spiatta</a>
                                </h5>
                            </div>
                        </footer>
                    </Fragment>
            }
        </Fragment>
    );
}

export default Layout;
