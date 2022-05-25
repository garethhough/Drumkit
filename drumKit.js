//Detects buttons clicked

let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {


        //Takes the inner HTML of buttons and passes into makeSound function        
        let buttonInnerHTML = this.innerHTML.toLowerCase();

        makeSound(buttonInnerHTML);
    });

}

// Detecting keyboard press

//Takes keys pressed and passes into makeSound function
document.addEventListener("keypress", function (event) {
    makeSound(event.key.toLowerCase());
});


function makeSound(key) {
    switch (key) {
        case "a":
            let openhat = new Audio(src = "sounds/openhat.wav");
            openhat.play();
            break;

        case "s":
            let hihat = new Audio("sounds/hihat.wav");
            hihat.play();
            break;

        case "d":
            let kick = new Audio("sounds/kick.wav");
            kick.play();
            break;

        case "f":
            let boom = new Audio("sounds/boom.wav");
            boom.play();
            break;

        case "g":
            let snare = new Audio("sounds/snare.wav");
            snare.play();
            break;

        case "h":
            let ride = new Audio("sounds/ride.wav");
            ride.play();
            break;

        case "j":
            let tink = new Audio("sounds/tink.wav");
            tink.play();
            break;

        case "k":
            let tom = new Audio("sounds/tom.wav");
            tom.play();
            break;

        case "l":
            let clap = new Audio(src = "sounds/clap.wav");
            clap.play();
            break;

        default:
            console.log(buttonInnerHTML);
            break;
    }
}