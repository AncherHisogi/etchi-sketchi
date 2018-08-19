let divNew = document.createElement("div");
let htmlStyles = window.getComputedStyle(document.querySelector("html"));
const rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
const colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));
const buttonReset_div = document.getElementById("buttonReset");
const rgbBling_div = document.getElementById("rgbBling");
let x = 0;
let y = 0;




function setGrid()
{
    y = window.prompt("gib number 1-64");
    document.documentElement.style.setProperty("--rowNum", y);
    document.documentElement.style.setProperty("--colNum", y);
}

function input()
{
    if (y >= 65)
    {
        alert("NUBAH TOO BIG");
        y = 0;
    }
    
    y = y * y;
    return y;
    
}


function createDiv()
{
    for (x=0; x<y; x++)
    {
        divNew = document.createElement("div");
        divNew.classList = "divKek";

        document.getElementById("main").appendChild(divNew);
    }

}


buttonReset_div.addEventListener('click',function()
{
    $( "div" ).remove(".divKek");
    setGrid();
    input();
    createDiv();
    coloring();
})


function coloring() 
{
    const squares = document.querySelectorAll("#main");
    for(let i = 0; i < squares.length; i++)
    {
      squares[i].addEventListener("mouseover", function(e){
        e.target.style.cssText = "background-color: orange";
      });
    }
}

