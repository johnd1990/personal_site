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


// this code uses DOM manipulation and will alert the user of successfull submission.
const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://httpbin.org/post';


form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
       alert('Success!', response)
       submitButton.disabled = false
      })
    .catch(error => {
    alert('Error!', error.message)
      submitButton.disabled = false

    }
    )
})