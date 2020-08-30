const colors = [
    "#FFFFFF",
    "#2196F3",
    "#4CAF50",
    "#FF9800",
    "#009688",
    "#795548",
  ];
  let isActive = false;
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  let timerId = null;
  
  function changeColor() {
    timerId = setInterval(() => {
      bodyRef.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length)];
    }, 1000);
  }
  
  const bodyRef = document.querySelector("BODY");
  bodyRef.style.backgroundColor = null;
  const buttonStart = document.querySelector('button[data-action="start"]');
  const buttonStop = document.querySelector('button[data-action="stop"]');
  
  buttonStart.addEventListener("click", function (e) {
    if (!isActive) {
      changeColor();
      isActive = true;
    }
  });
  buttonStop.addEventListener("click", function (e) {
    if (isActive) {
      clearInterval(timerId);
      isActive = false;
    }
  });