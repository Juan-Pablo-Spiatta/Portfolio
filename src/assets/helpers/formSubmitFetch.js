function formSubmitFetch(){
    let error = false;
    const $form = document.querySelector("form");
    const $loadingContainer = document.querySelector("#loadingContainer");
    $loadingContainer.classList.add("visible")
    fetch("https://formsubmit.co/ajax/spiattajuanpablodesarrollador@gmail.com", {
        method: "POST",
        body: new FormData($form)
    })
    .then(res => res.ok ? res.json() : Promise.reject(res))
    .catch(err => {
        let mensaje = err.statusText || "Ocurrio un error, por favor intentelo nuevamente";
        alert(`Error: ${err.status}: ${mensaje}`);
        error = true;
    })
    .finally(() => setTimeout(() => {
        $loadingContainer.classList.remove("visible");
    }, 500));

    return error;
}

export default formSubmitFetch
