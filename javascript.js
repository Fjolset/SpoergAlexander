var gladAlex = document.getElementById("glad");
var normalAlex = document.getElementById("normal");
var svar = document.getElementById("svar");


function spoergAlex()
{
    
    function getRandomInt(max)
    {
        return Math.floor(Math.random() * Math.floor(max))
    }
    
    if (getRandomInt(2) == 1)
    {
        console.log("ALEX SIGER JA")
        
        gladAlex.style.visibility = "visible";
        
        normalAlex.style.visibility = "hidden";
        
        svar.innerHTML = "ALEX SIGER JA!";
        svar.style.visibility = "visible";
    }
    else
    {
        console.log("ALEX SIGER NEJ")
        
        normalAlex.style.visibility = "visible";
        
        gladAlex.style.visibility = "hidden";
        
        svar.innerHTML = "ALEX SIGER NEJ!";
        svar.style.visibility = "visible";
    }
              

    
}