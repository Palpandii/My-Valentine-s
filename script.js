const messages = [
    "Are you sure?🤩 ",
    "Really sure??😋",
    "Are you positive?😉",
    "Pookie please😣",
    "just think about it!🙄",
    "If you say no, I will be really sad...",
    " I will be very very sad...",
    "Okay fine😫, I Will stop asking...",
    "Just kidding, say YES please!"
    
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');


    noButton.textContent =
    messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    }


function handleYesClick() {
    window.location.href = "yes_page.html";
    }
