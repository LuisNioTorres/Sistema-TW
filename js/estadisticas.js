const counter = document.getElementById("studentsCounter");

const finalValue = 300;

let current = 0;

const duration = 2000;

const increment = Math.ceil(finalValue / (duration / 16));

function animateCounter(){

    current += increment;

    if(current >= finalValue){
        current = finalValue;
        counter.textContent = "+" + current;
        return;
    }

    counter.textContent = "+" + current;

    requestAnimationFrame(animateCounter);

}

animateCounter();
