import React from 'react';
import style from '../../styles/Portfolio.module.css';

import Project from '../Project.jsx';

import img from '../../img/weather-app-img-2.png';


const ListOfProjects = [
    {   
        id: 1,
        imgUrl: img,
        title: 'El clima',
        info: 'Pagina web del clima, en este proyecto trabaje con la API openweathermap para obtener los pronosticos del tiempo. La web funciona por geolocalizacion y de muestra los datos del clima actual de la ciudad en la que te encuentras y el pronostico de la proxima semana. ',
        link: 'https://app-clima-jps.netlify.app/',
        repository: 'https://github.com/Juan-Pablo-Spiatta/Pagina-clima'
    },
]


const Portfolio = () => {
    return (
        <section className={ `${style.portfolio} wrapper` }>
            <div className={ style.container }>
                <h2 className={ style.title }> Portfolio </h2>
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
