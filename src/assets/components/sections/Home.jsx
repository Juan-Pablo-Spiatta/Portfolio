import React from 'react';
import style from '../../styles/Home.module.css';

//icons imports
import codePen from '../../img/networks-icons/codepen-icon.svg';
import gitHub from '../../img/networks-icons/github-icon-2.svg';
import linkedIn from '../../img/networks-icons/linkedin-icon-2.svg';

const Home = () => {
    return (
        <section id='home' className={ style.home }>
            <div className={ style.top }>
                <h1 className={ style.name }>JUAN PABLO SPIATTA</h1>
            </div>
            <div className={ style.bottom }>
                <h2 className={ style.profession }>Frontend Developer</h2>
                <ul className={ style.networksContainer }>
                    <li>
                        <a 
                            className={ style.networks } 
                            href="https://codepen.io/juan-pablo-spiatta"
                            rel='norefferer'
                            target='_blank'>
                                <img src={codePen} alt="codepen" />
                        </a>
                    </li>
                    <li>
                        <a 
                            className={ style.networks } 
                            href="https://github.com/Juan-Pablo-Spiatta" 
                            rel="noopener"
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
            </div>
        </section>
    );
}

export default Home;
