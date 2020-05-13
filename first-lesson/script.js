window.onload = function () {
  //Definitions
  const canvas = document.getElementById("hello-world-canvas");
  const context = canvas.getContext("2d");

  //Draw line steps

  context.beginPath(); // reset the context state
  context.moveTo(30, 30); // moveTo(x,y) -> starting point of line
  context.lineTo(80, 80); // line(x,y) -> end point of the line
  context.lineTo(200, 50);
  //   context.lineTo();
  context.stroke(); // draws the line
};
