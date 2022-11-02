const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

var bg = document.querySelector("html");
var colors = [
  "aqua",
  "azure",
  "beige",
  "bisque",
  "black",
  "blue",
  "brown",
  "chocolate",
  "coral",
  "crimson",
  "cyan",
  "fuchsia",
  "ghostwhite",
  "gold",
  "goldenrod",
  "gray",
  "green",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lime",
  "linen",
  "magenta",
  "maroon",
  "moccasin",
  "navy",
  "olive",
  "orange",
  "orchid",
  "peru",
  "pink",
  "plum",
  "purple",
  "red",
  "salmon",
  "sienna",
  "silver",
  "snow",
  "tan",
  "teal",
  "thistle",
  "tomato",
  "turquoise",
  "violet",
  "white",
  "yellow",
];
const grammar = `#JSGF V1.0; grammar colors; public <color> = ${colors.join(" | ")};`;
//radius (25 value) will be arbitrary - depending on user input
//function changeColor(color){
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.arc(300, 300, 25, 0, 2 * Math.PI);
    ctx.fill();
//}


const btn = document.getElementById("button");

// ✅ Change button text on click
btn.addEventListener("click", function runSpeechRecognition() {
    const initialText = "Speak";

    if (btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
        btn.textContent = "Stop";
    } else {
        btn.textContent = initialText;
        //recognition.abort();
    }

    // get output div reference
    if (!btn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
      var output = document.getElementById("output");
      // get action element reference
      var action = document.getElementById("action");
      // new speech recognition object
      var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
      var SpeechGrammarList = SpeechGrammarList || window.webkitSpeechGrammarList;

      var recognition = new SpeechRecognition();

      const speechRecognitionList = new SpeechGrammarList();
      speechRecognitionList.addFromString(grammar, 1);
      recognition.grammars = speechRecognitionList;
        recognition.continuous = false;
        recognition.lang = "en-US";
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;


      recognition.continuous = false;

      // This runs when the speech recognition service starts
      recognition.onstart = function () {
        action.innerHTML = "<small>listening, please speak...</small>";
        btn.textContent = "Stop";
      };

      recognition.onspeechend = function () {
        action.innerHTML =
          "<small>stopped listening, hope you are done...</small>";
        recognition.stop();
        btn.textContent = "Speak";
      };

      // This runs when the speech recognition service returns result
      recognition.onresult = function (event) {
        var color = event.results[0][0].transcript;
        output.innerHTML = "Result received: " + color + ".";
        document.getElementById("canvas").style.backgroundColor =  color ;
        //changeColor(color);
        //drawCircle(size, color);
        console.log("Confidence: " + event.results[0][0].confidence);
        // var transcript = event.results[0][0].transcript;
        // var confidence = event.results[0][0].confidence;
        // output.innerHTML =
        //   "<b>Text:</b> " +
        //   transcript +
        //   "<br/> <b>Confidence:</b> " +
        //   confidence * 100 +
        //   "%";
        // output.classList.remove("hide");
      };

      recognition.onnomatch = function (event) {
        output.innerHTML = "I didn't recognise that color.";
      };

      recognition.onerror = function (event) {
        output.innerHTML = "Error occurred in recognition: " + event.error;
      };
      // start recognition
      recognition.start();
    }else{
        recognition.abort();
    }
});
