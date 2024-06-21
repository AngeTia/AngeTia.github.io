const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = Array(256).join(1).split('');
let intervalId = null;
let timeoutId = null;
const animationDuration = 60000; // 1 minute in milliseconds
const intervalBetweenAnimations = 10000; // 10 seconds in milliseconds

const draw = () => {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#0f0';
  letters.map((y_pos, index) => {
    const text = String.fromCharCode(65 + Math.random() * 33);
    const x_pos = index * 10;
    ctx.fillText(text, x_pos, y_pos);
    letters[index] = y_pos > 758 + Math.random() * 1e4 ? 0 : y_pos + 10;
  });
};

const startAnimation = () => {
  if (!intervalId) {
    intervalId = setInterval(draw, 33);
  }
  // Stop animation after the specified duration
  timeoutId = setTimeout(stopAnimation, animationDuration);
};

const stopAnimation = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas when stopping the animation
  // Restart the animation after a pause
  setTimeout(startAnimation, intervalBetweenAnimations);
};

canvas.addEventListener('mouseover', stopAnimation);
canvas.addEventListener('mouseout', startAnimation);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Start the animation initially
startAnimation();
