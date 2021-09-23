var btnTranslate = document.querySelector("#btn-Translate");
var txt = document.querySelector("#txt-Id");
var div_var = document.querySelector("#output");

function clickEventHandler()
{
    div_var.innerText = txt.value;
    
}

btnTranslate.addEventListener("click",clickEventHandler);