import React from 'react';
import style from '../../styles/Portfolio.module.css';

import Project from '../Project.jsx';

import img from '../../img/weatherApp-img.png';
import img2 from '../../img/goScrum-img.png';


const ListOfProjects = [
    {   
        id: 1,
        imgUrl: img,
        title: 'El clima ⛅',
        info: 'Pagina web del clima, en este proyecto trabaje con la API openweathermap para obtener los pronosticos del tiempo. La web funciona por geolocalizacion y de muestra los datos del clima actual de la ciudad en la que te encuentras y el pronostico de la proxima semana. ',
        link: 'https://app-clima-jps.netlify.app/',
        repository: 'https://github.com/Juan-Pablo-Spiatta/Pagina-clima'
    },
    {   
        id: 2,
        imgUrl: img2,
        title: 'GoScrum 🗒',
        info: 'Pagina de creacion de tareas, estilo Trello. En este proyecto trabaje el Front-end y algo del Back-end. Para el Front tabaje con React.js y varias librerias mas como react-router, formik, yup, axios, skeleton, etc. En el back cree un servidor con Node.js y estoy en camino a crear una base de datos. Si queres ver mas detalles pasate por el repo! 😄',
        link: 'https://juan-pablo-spiatta.github.io/GoScrum/',
        repository: 'https://github.com/Juan-Pablo-Spiatta/GoScrum'
    },
]


const Portfolio = () => {
    return (
        <section id='portfolio' className={ `${style.portfolio} wrapper` }>
            <div className={ style.container }>
                <h2 className={ style.title }> Proyectos </h2>
                <ul className={ style.projectsContainer }>
                    {
                        ListOfProjects.map( (item)  => (
                            <Project key={ item.id } title={ item.title } imgUrl={ item.imgUrl } info={ item.info } webUrl={ item.link } repositoryUrl={ item.repository }/>
                        ))
                    }  
                </ul>
            </div>
        </section>
    );
}

export default Portfolio;
