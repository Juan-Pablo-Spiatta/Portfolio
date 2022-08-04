import React from 'react';
import style from '../../styles/Home.module.css';

//icons imports
import codePen from '../../img/networks-icons/codepen-icon.svg';
import gitHub from '../../img/networks-icons/github-icon-2.svg';
import linkedIn from '../../img/networks-icons/linkedin-icon-2.svg';

const Home = () => {
    return (
        <section className={ style.home }>
            <div className={ style.top }>
                <h1 className={ style.name }>JUAN PABLO SPIATTA</h1>
            </div>
            <div className={ style.bottom }>
                <h1 className={ style.profession }>Frontend Developer</h1>
                <ul className={ style.networksContainer }>
                    <li className={ style.networks }><img src={codePen} alt="codepen" /></li>
                    <li className={ style.networks }><img src={gitHub} alt="github" /></li>
                    <li className={ style.networks }><img src={linkedIn} alt="linkedin" /></li>
                </ul>
            </div>
        </section>
    );
}

export default Home;
