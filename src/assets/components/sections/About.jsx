import React from 'react';
import  style from '../../styles/About.module.css';

//picture import
import myPicture from '../../img/my-picture.jpg';

const About = () => {
    return (
        <section className={ `${ style.about } wrapper` }>
            <div className={ style.container }>
                <h2 className={ style.title }> Sobre mi </h2>
                <p className={ style.paragraph }>
                    <span className={ style.pictureContainer }>
                        <img className={ style.picture } src={ myPicture } alt="foto-perfil" />
                    </span>
                    Hola! Mi nombre es Juan Pablo, soy estudiante de sistemas y estoy capacitandome como desarrollador Frontend. Mi objetivo actual es conseguir un trabajo como trainee o junior, busco tambien aprender sobre el backend para ampliar mis oportunidades, aunque actualmente me estoy enfocando solo en el front. Me gusta mucho el mundo de la tecnologia y el relax de escribir codigo es lo que mas disfruto de los momentos en los que estoy en mi pc. 
                    <br />
                    <br />
                    Espero poder llegar a ser parte de un equipo de trabajo y ampliar aun mas mis conocimientos. Pasate por la seccion de contacto y dejame un mensajito. Gracias! 😄
                </p>
            </div>
        </section>
    );
}

export default About;
