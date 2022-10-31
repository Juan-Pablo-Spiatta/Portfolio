// Libraries
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
// Helpers
import formSubmitFetch from '../../helpers/formSubmitFetch'
// Style
import style from '../../styles/Contact.module.css';
// Media and icons
import wspIcon from '../../img/usual-icons/wsp-icon.svg';
import mailIcon from '../../img/usual-icons/mail-icon.svg';

const Contact = () => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")

    const initialValues = {
        name: "",
        email: "",
        affair: "",
        message: ""
    }

    let validationSchema = yup.object().shape({
        email: yup.string().email("*Ingresar correo con formato valido").required("*Este campo es obligatorio - Ingresar correo"),
        name: yup.string().required("*Este campo es obligatorio - Ingresa nombre")
    })

    const handleFetch = async ( data ) => {
        let response;
        formSubmitFetch( data )
            ? response = true
            : response = false
        return response
    }

    const onSubmit = async () => {
        setLoading(true)
        setMessage("")
        const data = {
            name: values.name,
            email: values.email,
            affair: values.affair,
            message: values.message
        }
        let res = handleFetch(data)
        setTimeout(() => {
            setLoading(false)
            res? setMessage("Mensaje enviado!") : setMessage("")
        }, 1000); 
        formik.resetForm()
    }
    
    const formik = useFormik({initialValues, validationSchema, onSubmit})
    const { handleBlur, handleChange, handleSubmit, values, errors, touched} = formik
    
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
                            Nombre *
                            <input
                                spellCheck="false"
                                type="text" 
                                id='name' 
                                name='name' 
                                value={ values.name } 
                                onChange={ handleChange }
                            />
                            { errors.name && touched.name && <span className={ style.emailOK }> { errors.name } </span> }
                        </label>
                        <label htmlFor="email">
                            Correo *
                            <input
                                spellCheck="false"
                                type="text" 
                                id='email' 
                                name='email' 
                                value={ values.email }
                                onChange={ handleChange }
                                onBlur={ handleBlur }
                            />

                            { errors.email && touched.email && <span className={ style.emailOK }>{ errors.email }</span> }

                        </label>
                        <label htmlFor="affair">
                            Asunto
                            <input 
                                spellCheck="false"
                                type="text" 
                                id='affair' 
                                name='affair' 
                                value={ values.affair }
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
                            value={ values.message }
                            onChange={ handleChange }
                            />
                        </label>
                        <div className={ style.submitSection }>
                            <div className={ style.buttonContainer }>
                                {
                                    loading
                                        ?<div className={ style.loading }></div>
                                        :<button className={ style.submitButton } type="submit">
                                            <h4>Enviar</h4>
                                        </button>
                                }
                            </div>
                        </div>
                        { message? <span className={ style.submitOk }> { message } </span> : <></> }    
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
