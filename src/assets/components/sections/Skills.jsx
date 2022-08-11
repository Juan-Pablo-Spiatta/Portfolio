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
        <section id='skills' className={ `${style.skills} wrapper` }>
            <div className={ style.container }>
                <h2 className={ style.title }> Habilidades </h2>
                <p className={ style.paragraph }> 
                    Mis conocimientos como frontend son en <b>HTML</b>, <b>CSS</b> y <b>JavaScript</b>, estudie y practique durante bastante tiempo estos tres lenguajes básicos y luego me adentre en la librería de <b>React.js</b>. En cuanto a React, aprendí a utilizar componentes junto con sus props y tengo conocimiento en ciertos hooks como useState y useEffect que es lo que más utilice hasta el momento y también utilizo react-router para la navegación de las distintas secciones de mis proyectos.
                    <br />
                    <br />
                    Como estudiante de sistemas tengo conocimientos en otros lenguajes como <b>C++</b>, <b>Java</b> y <b>Phyton</b>, con estos aprendí distintos conceptos de programación y me ayudaron bastante al estudiar JavaScript. Junto con estos lenguajes aprendí <b>buenas prácticas</b> a la hora de escribir código, conceptos como la programación orientada a objetos (<b>{"POO"}</b>), estructuras de datos (<b>{"ED"}</b>), patrones de diseño (<b>{"design patterns"}</b>) y a escribir código <b>eficiente</b> y <b>eficaz</b>.
                    <br />
                    <br />
                    Como entorno de desarrollo utilizo <b>Visual Studio Code</b> y para gestionar mis proyectos <b>Git</b> y <b>Github</b>, donde alojo mi portfolio con gh-pages.

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
