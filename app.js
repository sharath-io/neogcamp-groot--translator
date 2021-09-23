var btnTranslate = document.querySelector("#btn-Translate");
var txt = document.querySelector("#txt-Id");

function clickEventHandler()
{
    console.log("Clicked");
    console.log("input", txt.value);
}

btnTranslate.addEventListener("click",clickEventHandler);