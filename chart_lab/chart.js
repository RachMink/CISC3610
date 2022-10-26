const fruit = [
  {name: "Strawberry", quantity: 15, color: "red" },
  {name: "Peach", quantity: 10, color: "orange" },
  {name: "Banana", quantity: 25, color: "yellow"},
  {name: "Pear", quantity: 10, color: "green"},
  {name: "Grape", quantity: 20, color: "purple"}
];

function init(){
    let canvas = document.getElementById("chart_canvas");
    let ctx = canvas.getContext("2d");
    let xValue = 0;

    for(let i=0; i < fruit.length; i++){

      ctx.fillStyle = fruit[i].color;

      ctx.font = "30px Arial";
      ctx.fillText(fruit[i].name, xValue+26, 600);

      ctx.fillRect(xValue, 300 - fruit[i].quantity, 30, 500);
      xValue += 200;
      
    }

    ctx.fillStyle = "black";

    ctx.font = "30px Arial";
    ctx.fillText("Rachel Minkowitz", 10 ,30); 
}