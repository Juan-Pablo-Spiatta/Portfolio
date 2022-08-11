import React, { useState } from 'react';
import style from '../../styles/Contact.module.css';

import formSubmitFetch from '../../helpers/formSubmitFetch';
import { emailValidation } from '../../helpers/validations';

import wspIcon from '../../img/usual-icons/wsp-icon.svg';
import mailIcon from '../../img/usual-icons/mail-icon.svg';

const Contact = () => {
    const [form, setForm] = useState({name: "", email: "", affair: "", message: ""});
    const [errorText, setErrorText] = useState("");
    const [messageOK, setMessageOK] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(e.target.email.value === ""){
            setMessageOK("");
            setErrorText("Ingrese una direccion de correo - campo obligatorio *");
        }else{
            if(emailValidation(e.target.email.value)){
                setErrorText("");
                
                setMessageOK("Enviando");
                if(formSubmitFetch()){
                    setMessageOK("Ocurrio un error, intentelo nuevamente")
                }
                else{
                    setForm({name: "", email: "", affair: "", message: ""})
                    setMessageOK("Mensaje enviado!");
                };
                
            }
            else{
                setMessageOK("");
                setErrorText("Ingrese una direccion de correo valida");
            }
        }
    }

    return (
        <section id='contact' className={ `${ style.contact } wrapper` }>
            <div className={ style.container }>
                <h2 className={ style.title }> Contacto </h2>
                <div className={ style.formContainer }>
                    <div className={ style.contactData }>
                        <ul className={ style.contactList }>
                            <li className={ style.contactListItems }>
                                <div className={ style.imageContainer }>
                                    <img src={ mailIcon } alt="icono de mail" />
                                    <p>Email</p>
                                </div>
                                <span className={ style.email }>spiattajuanpablodesarrollador@gmail.com</span>
                            </li>
                            <li className={ style.contactListItems }>
                                <div className={ style.imageContainer }>
                                    <img src={ wspIcon } alt="icono de wsp" />
                                    <p>Whatsapp</p>
                                </div>
                                <span className={ style.mobileNumber }>+54-2477-220877</span>
                            </li>
                        </ul>
                    </div>
                    <form className={ style.form } onSubmit={ handleSubmit } autoComplete="off" action='' >
                        <label htmlFor="name">
                            Nombre
                            <input
                                spellCheck="false"
                                type="text" 
                                id='name' 
                                name='name' 
                                value={ form.name } 
                                onChange={ handleChange }
                            />
                        </label>
                        <label htmlFor="email">
                            Correo *
                            <input
                                spellCheck="false"
                                type="text" 
                                id='email' 
                                name='email' 
                                value={ form.email }
                                onChange={ handleChange }
                            />
                            <span className={ style.emailOK }> {errorText} </span>
                        </label>
                        <label htmlFor="affair">
                            Asunto
                            <input 
                                spellCheck="false"
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
                            spellCheck="false"
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
                        <div className={ style.buttonContainer }>
                            <button className={ style.submitButton } type="submit">
                                Enviar
                            </button>
                            <div id='loadingContainer' className={ style.loadingContainer }>
                                <div className={ style.loading }></div>
                            </div>
                        </div>
                        <span id='submitOK' className={ style.submitOK }> { messageOK }</span>      
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
