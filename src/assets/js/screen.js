var Cologne1 = document.getElementById("pageCol1");
var Cologne2 = document.getElementById("pageCol2");
var Cologne3 = document.getElementById("pageCol3");
var Cologne4 = document.getElementById("pageCol4");
var input = document.getElementById("input");
var sendChat = document.getElementById("sendChat");
var content = document.getElementById("content");
var chat2 = document.getElementById("chat2");

let monEcran = window.matchMedia("(max-width: 403px)");
let monEcran1 = window.matchMedia("(min-width: 403px)");

if(monEcran.matches)
{
    function changeScreen()
    {
        Cologne1.id="hidden";
        Cologne2.id="hidden";
        Cologne4.id="hidden";
        Cologne3.id="pageCol3Resposive";
        input.style.width = "160%";
        
    }

}else if(monEcran1.matches){
    
        Cologne1.id="pageCol1";
        Cologne2.id="pageCol2";
        Cologne4.id="pageCol4";
        Cologne3.id="pageCol3";
}

function getMessage()
{
    var chat1 = document.createElement("div");
    chat1.setAttribute("id","chat2");
    chat1.innerHTML="<div className='pdp'><img src='assets/img/img1.jpg' alt='pdp'></div><div className=soratra><p>"+sendChat.value+"</p><h4>12:34 PM</h4></div>"
    content.appendChild(chat1);
}
