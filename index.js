//theme-buttom id is stored in the themebutton variable
const themeButton = document.getElementById("theme-button");
themeButton.textContent = "Toggle Light Mode";

//A callback function
const toggleMode = () => {
    let lightMode = document.querySelector("body");
    lightMode.classList.toggle("light-mode");
    return lightMode;
}
//Added Event
themeButton.addEventListener("click", toggleMode);

//RSVP form
const callBtn = document.querySelector("form button");

function addParticipant(person) {
    // event.preventDefault();
    // let name = document.querySelector("#name").value;
    // let location = document.querySelector("#pickup-loc").value;

    bookInfo = `✅ Ride booked by ${person.name} at ${person.location}`;
    const rsvpParticipant = document.createElement("p");
    rsvpParticipant.textContent = bookInfo;
    const participant = document.querySelector(".rsvp-participants");
    participant.appendChild(rsvpParticipant);
    totalNumber();
}

//RSVP Count
let count = 3;
function totalNumber() {
    count += 1;
    let additionalCount = `🎉 ${count} students booked a ride`;
    const rsvpCount = document.querySelector("#rsvp-count");
    rsvpCount.textContent = additionalCount;
}

// callBtn.addEventListener("click", addParticipant);

//Form validation
// let containsErrors = false;
function validateForm(event) {
    event.preventDefault();
    let containsErrors = false;

    let rsvpInputs = document.querySelector("form").elements;
    const person = {
        name: rsvpInputs[0].value,
        location: rsvpInputs[1].value,
        email: rsvpInputs[3].value,
    }
    for (let i = 0; i < rsvpInputs.length; i++) {
        const input = rsvpInputs[i];
        if (input.tagName === "INPUT") {
            if (person.name.length < 2) {
                containsErrors = true;
                input.classList.add("error");
            } else {
                input.classList.remove("error");
            }
        }
    }

    //Email validation
    const emailInvalid = document.querySelector("#email");
    if (!emailInvalid.value.includes("@")) {
        containsErrors = true;
        emailInvalid.classList.add("error");
    } else {
        emailInvalid.classList.remove("error");
    }

    if (containsErrors === false) {
        addParticipant(person);
        toggleModal(person);
        for (let i = 0; i < rsvpInputs.length; i++) {
            const input = rsvpInputs[i];
            if (input.tagName === "INPUT") {
                input.value = "";
            }
        }
    }

}
//Event listener added to callBtn
callBtn.addEventListener("click", validateForm);


//Modal function
function toggleModal(person) {
    let modal = document.querySelector("#success-modal");
    let modalContent = document.querySelector(".modal-container #modal-item1");
    let newP = document.createElement("p");
    modalContent.appendChild(newP);
    modal.style.display = "flex";
    newP.textContent = `Thanks for booking, ${person.name}!. Will be at ${person.location} to pick you up soon.`;


    let interValid = setInterval(animateImage, 500);

    setTimeout(() => {
        modal.style.display = "none";
        clearInterval(interValid);
    }, 5000);
    // mode();
}


//Animation
let rotatefactor = 0;
const modalImage = document.querySelector("#modal-image");
function animateImage() {
    // rotatefactor += 10; // Keep increasing the angle
    // modalImage.style.transform = `rotate(${rotatefactor}deg)`;
    if (!allowMotion) return;
    if (rotatefactor === 0) {
        rotatefactor = -10;
    } else {
        rotatefactor = 0;
    }
    return modalImage.style.transform = `rotate(${rotatefactor}deg)`;

}


//Modal Button
let modalButton = document.querySelector("#modal-btn");
function mode() {
    let modal = document.querySelector("#success-modal");
    modal.style.display = "none";
}
modalButton.addEventListener("click", mode);

//Reduce Motion function
const rMotion = document.querySelector("#reduce-motion");
let allowMotion = true;
function reduceMotion() {
    allowMotion = !allowMotion;
    if (!animateImage) {
        rMotion.textContent = "Enable Motion";
    } else {
        rMotion.textContent = "Reduce Motion";
    }
}
rMotion.addEventListener("click", reduceMotion);











// /*** You will not need this file until Unit 5 ***/
// //theme-buttom id is stored in the themebutton variable
// const themeButton = document.getElementById("theme-button");
// themeButton.textContent = "Toggle Light Mode";

// //A callback function
// const toggleMode = () => {
//     let lightMode = document.querySelector("body");
//     lightMode.classList.toggle("light-mode");
//     return lightMode;
// }
// //Added Event
// themeButton.addEventListener("click", toggleMode);

// //RSVP form
// const callBtn = document.querySelector("form button");
// function addParticipant() {
//     // event.preventDefault();
//     let name = document.querySelector("#name").value;
//     let location = document.querySelector("#pickup-loc").value;
//     bookInfo = `✅ Ride booked by ${name} at ${location}`;
//     const rsvpParticipant = document.createElement("p");
//     rsvpParticipant.textContent = bookInfo;
//     const participant = document.querySelector(".rsvp-participants");
//     participant.appendChild(rsvpParticipant);
//     totalNumber();
// }

// //RSVP Count
// let count = 3;
// function totalNumber() {
//     count += 1;
//     let additionalCount = `🎉 ${count} students booked a ride`;
//     const rsvpCount = document.querySelector("#rsvp-count");
//     rsvpCount.textContent = additionalCount;
// }

// // callBtn.addEventListener("click", addParticipant);

// //Form validation
// // let containsErrors = false;
// function validateForm(event) {
//     event.preventDefault();
//     let containsErrors = false;
//     let rsvpInputs = document.querySelector("form").elements;
//     for (let i = 0; i < rsvpInputs.length; i++) {
//         const input = rsvpInputs[i];
//         if (input.tagName === "INPUT") {
//             if (input.value.trim().length < 2) {
//                 containsErrors = true;
//                 input.classList.add("error");
//             } else {
//                 input.classList.remove("error");
//             }
//         }
//     }

//     //Email validation
//     const emailInvalid = document.querySelector("#email");
//     if (!emailInvalid.value.includes("@")) {
//         containsErrors = true;
//         emailInvalid.classList.add("error");
//     } else {
//         emailInvalid.classList.remove("error");
//     }

//     if (containsErrors === false) {
//         addParticipant();
//         for (let i = 0; i < rsvpInputs.length; i++) {
//             const input = rsvpInputs[i];
//             if (input.tagName === "INPUT") {
//                 input.value = "";
//             }
//         }
//     }

// }
// //Event listener added to callBtn
// callBtn.addEventListener("click", validateForm);