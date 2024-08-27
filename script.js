
const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const cpuResult = document.querySelector(".cpu_result img");
const result = document.querySelector(".End_result");
const optionImages = document.querySelectorAll(".Options_Img");

// Create an object with all possible outcomes
const outcomes = {
    RR: "Draw",
    RP: "Cpu",
    RS: "User",
    PP: "Draw",
    PR: "User",
    PS: "Cpu",
    SS: "Draw",
    SR: "Cpu",
    SP: "User"
};

// Create an array of CPU image options
const cpuImages = [
    "/Font-Awesome-icons/hand-back-fist-regular(1).svg",
    "/Font-Awesome-icons/hand-regular (1).svg",
    "/Font-Awesome-icons/scissors-solid.svg"
];

// Create an array of values corresponding to Rock, Paper, Scissors
const values = ["R", "P", "S"];

// Loop through each option image element
optionImages.forEach((image, index) => {
    // Add a click event listener to each image
    image.addEventListener("click", (e) => {
        // Toggle the "active" class for the clicked image and remove it from others
        optionImages.forEach((img, idx) => {
            img.classList.toggle("active", idx === index);
        });

        // Set initial state images and result text
        userResult.src = cpuResult.src = "/Font-Awesome-icons/hand-back-fist-regular(1).svg";
        result.textContent = "Wait...";
        gameContainer.classList.add("start");

        // Set a timeout to delay the result calculation
        setTimeout(() => {
            // Remove the start class after delay
            gameContainer.classList.remove("start");

            // Get the source of the clicked option image
            let imageSrc = e.target.querySelector("img").src;

            // Set the user image to the clicked option image
            userResult.src = imageSrc;

            // Generate a random number between 0 and 2 for CPU choice
            let randomNumber = Math.floor(Math.random() * 3);

            // Set the CPU image to a random option from the array
            cpuResult.src = cpuImages[randomNumber];

            // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
            let cpuValue = values[randomNumber];

            // Assign a letter value to the clicked option (based on index)
            let userValue = values[index];

            // Look up the outcome value based on user and CPU options
            let outComeValue = outcomes[userValue + cpuValue];

            // Display the result
            result.textContent = userValue === cpuValue ? "Match Draw" : `${outComeValue} Won!!`;
        }, 2500);
    });
});


