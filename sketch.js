
function createGrid(Gridsize){
    const container=document.querySelector(".container");
    container.innerHTML="";
    // const squeersize= 700 / Gridsize;
    const squareSize = container.clientWidth / Gridsize ;


for (let i = 0; i < Gridsize*Gridsize; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor="#ffffff"
    div.classList.add("items");
    // let container = document.querySelector(".container");
    div.style.height=`${squareSize}px`;
    div.style.width=`${squareSize}px`;
    div.style.flexShrink = "0";
    container.appendChild(div);
    div.addEventListener("mouseover", function () {
        div.style.backgroundColor = getRandomColor();
    })

}
const resetbutton = document.querySelector("#buttonreset");
    resetbutton.addEventListener("click", function () {
        const squares = document.querySelectorAll(".items");
        squares.forEach(square => {
            square.style.backgroundColor = "#ffffff";  // Reset to white
        });
    });
}
    const buttonsize=document.getElementById("squeers");
    buttonsize.addEventListener("click",function(){
        const Gridsize=prompt("enter grid size under 100")
        if(Gridsize> 0 && Gridsize<=100 ){
            createGrid(Gridsize);
        }
        else{
            alert("Please enter a number under 100");
        }
    })

function getRandomColor() {
    let x1 = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += x1[Math.floor(Math.random() * 16)];
    }
    return color;
}

