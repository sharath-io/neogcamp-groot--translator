var btnTranslate = document.querySelector("#btn-Translate");
var txt = document.querySelector("#txt-Id");
var div_var = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(text) {
  return serverURL + "?" + "text=" + text
}

function errorhandler(error) {
  console.log("error occured", error);
}


function clickEventHandler() {
  var inputText = txt.value; //taking input

  //calling server for processing
  fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
      var translatedText = json.contents.translated;
      div_var.innerText = translatedText;
    }).catch(errorhandler);
};

btnTranslate.addEventListener("click", clickEventHandler);