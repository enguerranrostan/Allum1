var input = document.getElementsByTagName("input")[0];
var output = document.getElementsByTagName("footer")[0].getElementsByTagName("div")[1];
var inputText;
var allumette = [];
var nombreAllumettes = 11;
var str;
var aiTour;

displayAllumettes(nombreAllumettes);

function getInput(){
  inputText = input.value;
}

function evalInput(str){
  if(isNaN(inputText)){
    output.innerHTML +=
    "<br>" + "Your turn" + "<br>" + "Matches:" + inputText + "<br>" + "Error: invalid input (positive number expected)";
  }
  else if(parseInt(inputText) < 0){
    output.innerHTML +=
    "<br>" + "Your turn" + "<br>" + "Matches:" + inputText + "<br>" + "Error: invalid input (positive number expected)";
  }
  else if(parseInt(inputText) == 0){
    output.innerHTML +=
    "<br>" + "Your turn" + "<br>" + "Matches:" + inputText + "<br>" + "Error: you have to remove at least one match";
  }
  else if(inputText == " "){
    output.innerHTML +=
    "<br>" + "Your turn" + "<br>" + "Matches:" + inputText + "<br>" + "Error: invalid input (positive number expected)";
  }
  else if(parseInt(inputText) > nombreAllumettes){
    output.innerHTML +=
    "<br>" + "Your turn" + "<br>" + "Matches:" + inputText + "<br>" + "not enough matches";
  }
  else if(parseInt(inputText) > 3){
    output.innerHTML +=
    "<br>" + "Your turn" + "<br>" + "Matches:" + inputText + "<br>" + "Error: invalid input (choose 1, 2 or 3)";
  }else{
    nombreAllumettes -= parseInt(inputText);

    if(nombreAllumettes > 0){
      output.innerHTML +=
      "<br>" + "Your turn" + "<br>" + "Matches:" + inputText + "<br>" + str + " removed " + inputText + " match(es)" + "<br>";
      displayAllumettes(nombreAllumettes);

      if(nombreAllumettes >= 3){
        aiTour = Math.ceil(Math.random() * 3);
        nombreAllumettes -= aiTour;
        if(nombreAllumettes > 0){
          output.innerHTML +=
          "<br>" + "AI's Turn" + "<br>" + "Matches:" + aiTour + "<br>" + "AI" + " removed " + aiTour + " match(es)" + "<br>";
          displayAllumettes(nombreAllumettes);
        }
        else{
          output.innerHTML +=
          "<br>" + "AI's Turn" + "<br>" + "Matches:" + aiTour + "<br>" + "AI" + " removed " + aiTour + " match(es)" + "<br>" + "You won! Congratulations!";
          displayAllumettes(nombreAllumettes);
        }
      }
      else if (nombreAllumettes >= 2) {
        aiTour = Math.ceil(Math.random() * 2);
        nombreAllumettes -= aiTour;
        if(nombreAllumettes > 0){
          output.innerHTML +=
          "<br>" + "AI's Turn" + "<br>" + "Matches:" + aiTour + "<br>" + "AI" + " removed " + aiTour + " match(es)" + "<br>";
          displayAllumettes(nombreAllumettes);
        }
        else{
          output.innerHTML +=
          "<br>" + "AI's Turn" + "<br>" + "Matches:" + aiTour + "<br>" + "AI" + " removed " + aiTour + " match(es)" + "<br>" + "You won! Congratulations!";
          displayAllumettes(nombreAllumettes);
        }
      }
      else if (nombreAllumettes == 1) {
        aiTour = 1;
        nombreAllumettes -= aiTour;
        output.innerHTML +=
        "<br>" + "AI's Turn" + "<br>" + "Matches:" + aiTour + "<br>" + "AI" + " removed " + aiTour + " match(es)" + "<br>" + "You won! Congratulations!";
        displayAllumettes(nombreAllumettes);
      }
    }else{
      output.innerHTML +=
      "<br>" + "Your turn" + "<br>" + "Matches:" + inputText + "<br>" + str + " removed " + inputText + " match(es)" + "<br>" + "You lost, too bad...";
      displayAllumettes(nombreAllumettes);
    }

  }
}

function displayAllumettes(nombreAllumettes){
  for (var i = 0; i < nombreAllumettes; i++) {
    allumette.push(" | ");
    output.innerHTML += allumette[i];
  }
}

input.addEventListener("keypress",function(e){
  if(e.key === "Enter"){
    tour();
  }
});

function tour(){
  getInput();
  evalInput("player");
}
