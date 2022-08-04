import React, { useState } from 'react';
import style from '../../styles/Contact.module.css'

import formSubmitFetch from '../../helpers/formSubmitFetch';

const Contact = () => {
    const [form, setForm] = useState({name: "", email: "", affair: "", message: ""});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        formSubmitFetch();
    }

    return (
        <section className={ `${ style.contact } wrapper` }>
            <div className={ style.container }>
                <h2 className={ style.title }> Contacto </h2>
                <div className={ style.formContainer }>
                    <div className={ style.contactData }>

                    </div>
                    <form className={ style.form } onSubmit={ handleSubmit } autoComplete="off" >
                        <label htmlFor="name">
                            Nombre
                            <input 
                                type="text" 
                                id='name' 
                                name='name' 
                                placeholder='Nombre' 
                                value={ form.name } 
                                onChange={ handleChange }
                            />
                        </label>
                        <label htmlFor="email">
                            Correo
                            <input 
                                type="text" 
                                id='email' 
                                name='email' 
                                value={ form.email }
                                onChange={ handleChange }
                            />
                        </label>
                        <label htmlFor="affair">
                            Asunto
                            <input 
                                type="text" 
                                id='affair' 
                                name='affair' 
                                value={ form.affair }
                                onChange={ handleChange }
                            />
                        </label>
                        <label htmlFor="message">
                            Mensaje
                            <textarea 
                            className={ style.message }
                            name="message" 
                            id="message" 
                            cols="30" 
                            rows="10" 
                            maxLength={ 2000 } 
                            value={ form.message }
                            onChange={ handleChange }
                            />
                        </label>
                        <label htmlFor="">
                            <input className={ style.submitButton } type="submit" />    
                        </label>    
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
