import React from 'react';
import style from '../styles/Loading.module.css';

const Loading = () => {
    return (
        <section className={ style.loading }>
            <div className={style.top}></div>
            <div className={style.container}>
                <div className={style.circle}></div>
            </div>
            <div className={style.bottom}></div>
        </section>
    )
}
export default Loading;
