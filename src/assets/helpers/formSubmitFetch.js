function formSubmitFetch() {
    const form = document.querySelector("form");
    fetch("https://formsubmit.co/ajax/spiattajuanpablodesarrollador@gmail.com", {
        method: "POST",
        body: new FormData(form)
    })
}

export default formSubmitFetch
