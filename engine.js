let divNew = document.createElement("div");
let htmlStyles = window.getComputedStyle(document.querySelector("html"));
const rowNum = parseInt(htmlStyles.getPropertyValue("--rowNum"));
const colNum = parseInt(htmlStyles.getPropertyValue("--colNum"));
let x = 0;
let y = 0;
y = window.prompt("gib number 1-64");

function setGrid()
{
    
    document.documentElement.style.setProperty("--rowNum", y);
    document.documentElement.style.setProperty("--colNum", y);
}

function input()
{
    if (y >= 65)
    {
        window.prompt("NUBAH TOO BIG");
        y = 0;
    }

    y = y * y;
    return y;
    
}

setGrid();
input();


for (x=0; x<y; x++)
{
    divNew = document.createElement("div");
    divNew.className = "divKek";

    document.getElementById("main").appendChild(divNew);
}
