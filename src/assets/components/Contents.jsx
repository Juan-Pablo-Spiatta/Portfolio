import React, { Fragment } from 'react';

import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';

const Contents = () => {
    return (
        <Fragment>
            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
        </Fragment>
    );
}

export default Contents;
