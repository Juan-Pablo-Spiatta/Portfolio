
async function formSubmitFetch( {name, email, affair, message} ){
    const Form = new FormData()
    Form.append("Nombre", name)
    Form.append("Correo", email)
    Form.append("Asunto", affair)
    Form.append("Mensaje", message)

    fetch("https://formsubmit.co/ajax/spiattajuanpablodesarrollador@gmail.com", {
        method: "POST",
        body: Form
    })
    .then(res => res.ok 
        ? res.json()
        : Promise.reject(res))
    .catch(err => {
        alert("Algo salio mal, intentalo nuevamente")
    })
}

export default formSubmitFetch
