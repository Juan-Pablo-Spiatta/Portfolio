var screenWidth = window.screen.width;

function framesLeft(){
    screenWidth = window.screen.width;
    const ul = document.querySelector("#techs");
    const ulAnimation = ul.animate([
        { transform: "TranslateX(0px)"},
        { transform: "TranslateX(-130px)"}
    ],
    {
        easing: "ease-in-out",
        iterations: 1,
        duration: 300
    }
    );

    const firstLi = document.querySelectorAll("#techs > li")[0];

    const firstLiAnimation = firstLi.animate([
        { 
            opacity: "30%",
            transform: "scale(1)"
        },
        { 
            opacity: 0,
            transform: "scale(.5)"
        },
    ],
        {
            easing: "ease-out",
            iterations: 1,
            duration: 300
        }
    )
    return ulAnimation.finished && firstLiAnimation.finished;
}

export function displaceLeft(){
    screenWidth = window.screen.width;
    const ul = document.querySelector("#techs");
    framesLeft()
        .then( response => {
            if( screenWidth > 1150 ){
                const lastLi = document.querySelectorAll("#techs > li")[0];
                lastLi.animate([
                    { 
                        opacity: 0,
                        transform: "scale(.5)",
                    },
                    { 
                        opacity: 1,
                        transform: "scale(1)",
                    },
                ],
                    {
                        easing: "ease-in",
                        iterations: 1,
                        duration: 300
                    }
                )        
            }
            else{
                if( screenWidth > 1000 ){
                    const lastLi = document.querySelectorAll("#techs > li")[5];
                    lastLi.animate([
                        { 
                            opacity: 0,
                            transform: "scale(.5)"
                        },
                        { 
                            opacity: 1,
                            transform: "scale(1)"
                        },
                    ],
                        {
                            easing: "ease-in",
                            iterations: 1,
                            duration: 300
                        }
                    )        
                }
                else{
                    if( screenWidth > 900 ){
                        const lastLi = document.querySelectorAll("#techs > li")[4];
                        lastLi.animate([
                            { 
                                opacity: 0,
                                transform: "scale(.5)"
                            },
                            { 
                                opacity: 1,
                                transform: "scale(1)"
                            },
                        ],
                            {
                                easing: "ease-in",
                                iterations: 1,
                                duration: 300
                            }
                        )        
                    }
                    else{
                        if( screenWidth > 700 ){
                            const lastLi = document.querySelectorAll("#techs > li")[3];
                            lastLi.animate([
                                { 
                                    opacity: 0,
                                    transform: "scale(.5)"
                                },
                                { 
                                    opacity: 1,
                                    transform: "scale(1)"
                                },
                            ],
                                {
                                    easing: "ease-in",
                                    iterations: 1,
                                    duration: 300
                                }
                            )        
                        }
                        else{
                            if( screenWidth > 650 ){
                                const lastLi = document.querySelectorAll("#techs > li")[2];
                                lastLi.animate([
                                    { 
                                        opacity: 0,
                                        transform: "scale(.5)"
                                    },
                                    { 
                                        opacity: 1,
                                        transform: "scale(1)"
                                    },
                                ],
                                    {
                                        easing: "ease-in",
                                        iterations: 1,
                                        duration: 300
                                    }
                                )        
                            }
                            else{
                                if( screenWidth > 500 ){
                                    const lastLi = document.querySelectorAll("#techs > li")[2];
                                    lastLi.animate([
                                        { 
                                            opacity: 0,
                                            transform: "scale(.5)"
                                        },
                                        { 
                                            opacity: 1,
                                            transform: "scale(1)"
                                        },
                                    ],
                                        {
                                            easing: "ease-in",
                                            iterations: 1,
                                            duration: 300
                                        }
                                    )        
                                }
                                else{
                                    const lastLi = document.querySelectorAll("#techs > li")[1];
                                    lastLi.animate([
                                        { 
                                            opacity: 0,
                                            transform: "scale(.5)"
                                        },
                                        { 
                                            opacity: 1,
                                            transform: "scale(1)"
                                        },
                                    ],
                                        {
                                            easing: "ease-in",
                                            iterations: 1,
                                            duration: 300
                                        }
                                    )  
                                }
                            }
                        }
                    }
                }
            }
            ul.append(document.querySelectorAll("#techs > li")[0])
        })
}



function framesRight(){
    screenWidth = window.screen.width;
    const ul = document.querySelector("#techs");
    const ulAnimation = ul.animate([
        { transform: "TranslateX(0px)"},
        { transform: "TranslateX(130px)"}
    ],
    {
        easing: "ease-in-out",
        iterations: 1,
        duration: 300
    }
    );
    

    var lastLi;
    if( screenWidth > 1150 ){
        lastLi = document.querySelectorAll("#techs > li")[5];
    }else{
        if( screenWidth > 1000 ){
            lastLi = document.querySelectorAll("#techs > li")[4];
        }else{
            if( screenWidth > 900 ){
                lastLi = document.querySelectorAll("#techs > li")[3];
            }else{
                if( screenWidth > 700 ){
                    lastLi = document.querySelectorAll("#techs > li")[2];
                }else{
                    if( screenWidth > 500 ){
                        lastLi = document.querySelectorAll("#techs > li")[1];
                    }else{
                        lastLi = document.querySelectorAll("#techs > li")[0];
                    }
                }
            }
        }
    }
    const lastLiAnimation = lastLi.animate([
        { 
            opacity: "30%",
            transform: "scale(1)"
        },
        { 
            opacity: 0,
            transform: "scale(.5)"
        },
    ],
        {
            easing: "ease-out",
            iterations: 1,
            duration: 300
        }
    )

    return ulAnimation.finished && lastLiAnimation.finished;
}

export function displaceRight(){
    screenWidth = window.screen.width;
    const ul = document.querySelector("#techs");

    framesRight()
    .then( response => {
        const firstLi = document.querySelectorAll(" #techs > li ")[5];
        firstLi.animate([
            { 
                opacity: 0,
                transform: "scale(.5)",
            },
            { 
                opacity: 1,
                transform: "scale(1)",
            },
        ],
            {
                easing: "ease-in",
                iterations: 1,
                duration: 300
            }
        )
        //cada tecnologia que agregues aunmenta en uno lo de abajo! :)
        ul.append(document.querySelectorAll("#techs > li")[0])
        ul.append(document.querySelectorAll("#techs > li")[0])
        ul.append(document.querySelectorAll("#techs > li")[0])
        ul.append(document.querySelectorAll("#techs > li")[0])
        ul.append(document.querySelectorAll("#techs > li")[0])
    })
}