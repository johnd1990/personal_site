const textElement = document.getElementById('text');
const speed = 5; // adjust speed here

let textWidth = textElement.offsetWidth;
let containerWidth = document.querySelector('.scroll-container').offsetWidth;
let transform = containerWidth;
let isScrolling = false;

// initialize position of text and start scrolling
textElement.style.transform = `translateX(${transform}px)`;
scrollText();

function scrollText() {
    isScrolling = true;
    transform -= speed;
    textElement.style.transform = `translateX(${transform}px)`;

    // if text is completely off-screen, move it to the end
    if (transform < -textWidth) {
        transform = containerWidth;
        textElement.style.transform = `translateX(${transform}px)`;
    }

    // immediately call the function again
    requestAnimationFrame(scrollText);
}

