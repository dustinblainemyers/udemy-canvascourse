window.onload = function () {
  //Definitions
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");

  //First line

  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 10;
  context.moveTo(100, 100);
  context.lineTo(300, 100);
  context.stroke();

  //Second line

  context.beginPath();
  context.strokeStyle = "blue";
  context.lineWidth = 10;
  context.moveTo(100, 125);
  context.lineTo(300, 125);
  context.stroke();

  //Third Line

  context.beginPath();
  context.strokeStyle = "green";
  context.lineWidth = 10;
  context.moveTo(100, 150);
  context.lineTo(300, 150);
  context.stroke();
};
