window.onload = function () {
  const scrollText = document.getElementById('scroll-text');
  let text = 'Hello World! ';

  // repeat the text 10 times
  text = text.repeat(10);

  scrollText.textContent = text;
};
