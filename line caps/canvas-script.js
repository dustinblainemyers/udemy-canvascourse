window.onload = function () {
  var canvas = document.getElementById("line-caps-canvas");
  var context = canvas.getContext("2d");

  //First line

  context.beginPath();
  context.strokeStyle = "red";
  context.lineWidth = 10;
  context.moveTo(100, 100);
  context.lineTo(300, 100);
  context.stroke();
};
