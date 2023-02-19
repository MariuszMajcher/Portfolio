const button = document.getElementById("button")

const avoid = () =>  {
    const rand = Math.floor(Math.random() * 30)
    button.style.bottom =  `${rand}rem`};



button.addEventListener("mouseenter",  avoid)



