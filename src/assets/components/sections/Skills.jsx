import React, { useEffect } from 'react';
import style from '../../styles/Skills.module.css';

import htmlIcon from '../../img/technologys-icons/html.svg';
import cssIcon from '../../img/technologys-icons/css.svg';
import jsIcon from '../../img/technologys-icons/javascript.svg';
import gitIcon from '../../img/technologys-icons/git.svg';
import reactIcon from '../../img/technologys-icons/react.svg';
import vscIcon from '../../img/technologys-icons/visual-studio.svg';

import { displaceLeft, displaceRight } from '../../helpers/skillsTransitions.js'

const Skills = () => {
    useEffect(() => {
    }, []);
    return (
        <section className={ `${style.skills} wrapper` }>
            <div className={ style.container }>
                <h2 className={ style.title }> Habilidades </h2>
                <p className={ style.paragraph }> 
                    Tengo conocimientos en HTML, CSS, JavaScript y React.js, para gestionar mis proyectos uso Git y GitHub, y como entorno de desarrollo estoy usando visual studio code. 
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quisquam ea ducimus voluptatem? Facilis doloremque pariatur porro illum temporibus tempora minus voluptates repellendus impedit animi excepturi molestias distinctio, sequi nesciunt?
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium pariatur ducimus tenetur corporis dolorum architecto amet! Expedita sit nobis alias facere illum cum fuga, sapiente, placeat hic perferendis doloremque!

                </p>
                <div className={ style.technologyContainer }>
                    <div className={ style.arrow } onClick= { displaceLeft } >
                        <div id={ style.arrowLeft } > </div>
                    </div>
                    <ul className={ style.techs } id="techs" >
                        <li className={ `${ style.technology } technology ` }>
                            <img className={ style.technologyIcon } src={ htmlIcon } alt="html-icon" />
                            <img className={ style.technologyIconShadow } src={ htmlIcon } alt="html-icon" />
                            <span>HTML</span>
                        </li>
                        <li className={ `${ style.technology } technology `}>
                            <img className={ style.technologyIcon } src={ cssIcon } alt="css-icon" />
                            <img className={ style.technologyIconShadow} src={ cssIcon } alt="css-icon" />
                            <span>CSS</span>
                        </li>
                        <li className={ `${ style.technology } technology ` }>
                            <img className={ style.technologyIcon } src={ jsIcon } alt="js-icon" />
                            <img className={ style.technologyIconShadow } src={ jsIcon } alt="js-icon" />
                            <span>JavaScript</span>
                        </li>
                        <li className={ `${ style.technology } technology ` }>
                            <img className={ style.technologyIcon } src={ gitIcon } alt="git-icon" />
                            <img className={ style.technologyIconShadow } src={ gitIcon } alt="git-icon" />
                            <span>Git</span>
                        </li>
                        <li className={ `${ style.technology } technology ` }>
                            <img className={ style.technologyIcon } src={ reactIcon } alt="react-icon" />
                            <img className={ style.technologyIconShadow } src={ reactIcon } alt="react-icon" />
                            <span>React</span>
                        </li>
                        <li className={ `${ style.technology } technology ` }>
                            <img className={ style.technologyIcon } src={ vscIcon } alt="vsc-icon" />
                            <img className={ style.technologyIconShadow } src={ vscIcon } alt="vsc-icon" />
                            <span>VS Code</span>
                        </li>
                    </ul>
                    <div className={ style.arrow } onClick= { displaceRight } >
                        <div id={ style.arrowRight } ></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;
