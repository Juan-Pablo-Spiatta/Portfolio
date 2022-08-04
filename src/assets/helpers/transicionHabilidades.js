const ul = document.querySelector("#technologyContainer");
var izquierda = document.getElementById("arrowLeft");
var derecha = document.getElementById("arrowRight")
//const centro = document.querySelectorAll("ul > li > #habilidad-1");


function framesLeft(){
    const animacionUl = ul.animate([
        { transform: "TranslateX(0px)"},
        { transform: "TranslateX(-125px)"},
    ],{
        easing: "linear",
        iterations: 1,
        duration: 200
    });

    const li = document.querySelectorAll("#technologyContainer > li")[0]
    const animacionLi = li.animate([
        { opacity: "100%"},
        { opacity: "1%"},
    ],{
        easing: "linear",
        iterations: 1,
        duration: 200
    });


    return animacionUl.finished && animacionLi.finished;
}

function displaceLeft(){
    framesLeft()
    .then((_res)=>{
        if(screen.width > 870){
            ul.appendChild(document.querySelectorAll("#technologyContainer > li")[0])
    
            const ultimoLi = document.querySelectorAll("#technologyContainer > li")[4]
            ultimoLi.animate([
                { opacity: "0%"},
                { opacity: "100%"},
            ],{
                easing: "linear",
                iterations: 1,
                duration: 200
            });
        }
        else{
            if(screen.width > 600){
            ul.appendChild(document.querySelectorAll("#technologyContainer > li")[0])
    
            const ultimoLi = document.querySelectorAll("#technologyContainer > li")[2]
            ultimoLi.animate([
                { opacity: "0%"},
                { opacity: "100%"},
            ],{
                easing: "linear",
                iterations: 1,
                duration: 200
            });
            }
            else{
            ul.appendChild(document.querySelectorAll("#technologyContainer > li")[0])
    
            const ultimoLi = document.querySelectorAll("#technologyContainer > li")[0]
            ultimoLi.animate([
                { opacity: "0%"},
                { opacity: "100%"},
            ],{
                easing: "linear",
                iterations: 1,
                duration: 200
            });
            }
        }
    })
}

function framesRight(){
    const animacionUl = ul.animate([
        { transform: "TranslateX(0px)"},
        { transform: "TranslateX(125px)"}
    ],{
        easing: "linear",
        iterations: 1,
        duration: 200
    });
    
    const li = document.querySelectorAll("#technologyContainer > li")[4]
    const animacionLi = li.animate([
        { opacity: "100%"},
        { opacity: "1%"},
    ],{
        easing: "linear",
        iterations: 1,
        duration: 200
    });
    


    return animacionUl.finished && animacionLi.finished;
}

function displaceRight(){
    framesRight()
    .then((_res)=>{
        ul.appendChild(document.querySelectorAll("#technologyContainer > li")[0])
        ul.appendChild(document.querySelectorAll("#technologyContainer > li")[0])
        ul.appendChild(document.querySelectorAll("#technologyContainer > li")[0])
        ul.appendChild(document.querySelectorAll("#technologyContainer > li")[0])
        ul.appendChild(document.querySelectorAll("#technologyContainer > li")[0])

        const primerLi = document.querySelectorAll("#technologyContainer > li")[0]
        primerLi.animate([
            { opacity: "0%"},
            { opacity: "100%"},
        ],{
            easing: "linear",
            iterations: 1,
            duration: 200
        });
    })
}

derecha.addEventListener("click", displaceLeft);
izquierda.addEventListener("click", displaceRight);

//setInterval(() => {
//    displaceRight();
//}, 3000);