function showAboutPopup2(){
    frame = document.getElementById("container2").style.display = "flex"; 
}
function closePopup2(){
    frame = document.getElementById("container2").style.display = "none"; 
}

function showPopup3(){
    frame = document.getElementById("container3").style.display = "flex"; 
}
function closePopup3(){
    frame = document.getElementById("container3").style.display = "none"; 
}
function showPopup4(){
    frame = document.getElementById("container4").style.display = "flex"; 
}
function closePopup4(){
    frame = document.getElementById("container4").style.display = "none"; 
}
function showPopup5() {
    // Show the container
    document.getElementById("container5").style.display = "flex";

    // Typewriting effect
    const logText = document.querySelector("#container5 .logText");
    const messages = ["LOADING PROJECTS .", "LOADING PROJECTS ..", "LOADING PROJECTS ..."];
    let index = 0;
    const intervalId = setInterval(() => {
        logText.textContent = messages[index];
        index = (index + 1) % messages.length;
    }, 500);

    // Delayed message change
    setTimeout(() => {
        clearInterval(intervalId);
        logText.textContent = "PROJECTS LOADED!";
        logText.classList.add("green");

        // Display the "PROJECTS LOADED!" text
        setTimeout(() => {
            logText.style.display = "flex";
            
            // Display the project boxes
            const projectBoxes = document.querySelectorAll(".projectBox");
            projectBoxes.forEach(box => {
                box.style.display = "block";
            });
        }, 200); // Delay this action for 500 milliseconds after showing "PROJECTS LOADED!"
    }, 3000);
}
function closePopup5() {
    // Hide the container
    document.getElementById("container5").style.display = "none";

    // Reset the text content of logText to "LOADING PROJECTS ..."
    const logText = document.querySelector("#container5 .logText");
    logText.textContent = "LOADING PROJECTS ...";

    // Remove the "green" style
    logText.classList.remove("green");

    // Reset the display of project boxes to none
    const projectBoxes = document.querySelectorAll(".projectBox");
    projectBoxes.forEach(box => {
        box.style.display = "none";
    });
}


function showContact(){
    frame = document.getElementById("containerContact").style.display = "flex"; 
}
function closePopupContact(){
    frame = document.getElementById("containerContact").style.display = "none"; 
}