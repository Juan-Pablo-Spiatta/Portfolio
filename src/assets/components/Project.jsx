import React from 'react';
import style from '../styles/Project.module.css';

import gitHubIcon from '../img/networks-icons/github-icon-2.svg';
import linkIcon from '../img/usual-icons/link-icon.svg';
// import infoIcon from '../img/usual-icons/info-icon.svg';
import folderIcon from '../img/usual-icons/folder-icon.svg';
 
const Project = ( { imgUrl, title, info, webUrl, repositoryUrl } ) => {
    return (
        <li className={ style.card }>
            <div className={style.content}>
                <img className={ style.image } src={ imgUrl } alt={ title } />
                <div className={ style.infoContainer }>
                    <div className={ style.titleContainer }>
                        <h2 className={ style.title }> { title } </h2>
                        <img className={ style.folderIcon } src={ folderIcon } alt='folder-icon' />
                    </div>
                    <p className={ style.paragraph }> { info } </p> 
                </div>
            </div>
            <div className={ style.contentInfo }>
                <a className={ style.links } href={ repositoryUrl } rel='noopener' target='_blank' >
                    <img className={ style.icon } src={ gitHubIcon } alt="github-icon" />
                    <h3 className={ style.subtitle }> Repositorio </h3>
                </a>
                <a className={ style.links } href={ webUrl } rel='noopener' target='_blank' >
                    <img className={ style.icon } src={ linkIcon } alt="link-icon" />
                    <h3 className={ style.subtitle }> Pagina </h3>
                </a>
                {/* <a className={ style.links } href={ webUrl } rel='noopener' target='_blank'>
                    <img className={ style.icon } src={ infoIcon } alt="info-icon" />
                    <h3 className={ style.subtitle }> Info </h3>
                </a> */}
            </div>
        </li>
    );
}

export default Project;
