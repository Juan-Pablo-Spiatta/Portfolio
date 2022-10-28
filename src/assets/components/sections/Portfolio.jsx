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
        info: `Página web del clima. Trabaje con HTML, CSS y JavaScrit, funciona por geolocalización. Hice uso de la API del clima de openweathermap. Dejo links a repositorio y de la web.` ,
        link: 'https://app-clima-jps.netlify.app/',
        repository: 'https://github.com/Juan-Pablo-Spiatta/Pagina-clima'
    },
    {   
        id: 2,
        imgUrl: img2,
        title: 'GoScrum 📝',
        info: 'Aplicación web de creación y gestión de tareas, no posee base de datos por lo que solo se guardan los cambios en memoria. Trabaje con React.js en el frontend y cree un servidor y una REST-API con Node.js. Dejo links a repositorio y de la web.',
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
