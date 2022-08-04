import React, { useState } from 'react';
import style from '../../styles/Contact.module.css'

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
        fetch("https://formsubmit.co/ajax/spiattajuanpablodesarrollador@gmail.com", {
        method: "POST",
        body: "form"
        })
        .then( response => alert("enviado"))
    }

    return (
        <section className={ style.contact }>
            <div className={ `${ style.container } wrapper `}>
                <h2 className={ style.title }> Contacto </h2>
                <div className={ style.formContainer }>
                    <div className={ style.contactData }>

                    </div>
                    <form className={ style.form } onSubmit={ handleSubmit }>
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
                            <input type="submit" />    
                        </label>    
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
