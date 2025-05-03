let multiplier = 1.0;
let interval;
let plane = document.getElementById('plane');
let multiplierDisplay = document.getElementById('multiplier');
let resultDisplay = document.getElementById('result');
let startBtn = document.getElementById('startBtn');
let cashoutBtn = document.getElementById('cashoutBtn');
let crashed = false;
let leftPos = 0;

startBtn.onclick = () => {
  multiplier = 1.0;
  leftPos = 0;
  crashed = false;
  resultDisplay.textContent = '';
  multiplierDisplay.textContent = `${multiplier.toFixed(2)}x`;
  cashoutBtn.disabled = false;
  startBtn.disabled = true;

  interval = setInterval(() => {
    multiplier += 0.05;
    leftPos += 5;
    plane.style.left = `${leftPos}px`;
    multiplierDisplay.textContent = `${multiplier.toFixed(2)}x`;

    if (Math.random() < 0.01 || multiplier > 10) {
      crash();
    }
  }, 100);
};

cashoutBtn.onclick = () => {
  clearInterval(interval);
  resultDisplay.textContent = `💰 You cashed out at ${multiplier.toFixed(2)}x!`;
  cashoutBtn.disabled = true;
  startBtn.disabled = false;
};

function crash() {
  clearInterval(interval);
  crashed = true;
  resultDisplay.textContent = `💥 Crashed at ${multiplier.toFixed(2)}x!`;
  cashoutBtn.disabled = true;
  startBtn.disabled = false;
}
