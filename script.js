const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = Array(256).join(1).split('');
let intervalId = null;

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
};

const stopAnimation = () => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas when stopping the animation
  }
};

canvas.addEventListener('mouseover', stopAnimation);
canvas.addEventListener('mouseout', startAnimation);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

startAnimation(); // Start the animation initially
