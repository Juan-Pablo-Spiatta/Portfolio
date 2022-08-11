import React from 'react';
import  style from '../../styles/About.module.css';

//picture import
import myPicture from '../../img/my-picture.jpg';

const About = () => {
    return (
        <section id='about' className={ `${ style.about } wrapper` }>
            <div className={ style.container }>
                <h2 className={ style.title }> Sobre mi </h2>
                <p className={ style.paragraph }>
                    <span className={ style.pictureContainer }>
                        <img className={ style.picture } src={ myPicture } alt="foto perfil spiatta" />
                    </span>
                    👋 Hola! Mi nombre es Juan Pablo, soy estudiante de sistemas y estoy capacitándome como desarrollador Frontent. Tengo 27 años y soy un fanático de la tecnología. Programar es algo que encuentro muy entretenido y siento que es un gran ejercicio mental, es por eso que decidí que esto es a lo que quiero dedicarme. Mis pasatiempos son los videojuegos, la guitarra y el ejercicio.
                    <br />
                    <br />
                    Mi objetivo profesional es ser desarrollador full-stack, estoy empezando por el frontend y con el tiempo me adentraré más en el backend. Todavía tengo mucho que aprender y espero poder llegar a ser parte de un equipo de trabajo que me incentive a seguir creciendo.
                    <br />
                    <br />
                    Si te interesa contactarte conmigo, por favor pasate por la sección de <a href="#contact">contacto</a> y dejame un mensajito. Gracias!😄
                </p>
            </div>
        </section>
    );
}

export default About;
