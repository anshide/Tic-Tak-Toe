let boxes = document.querySelectorAll(".box");
let rst = document.querySelector("#reset");

let turn0 = true;

const win = [
    [0,1,2],
    [0,3,6],
    [0,3,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turn0){
            box.innerText = "X";
            turn0=false;
        }
        else{
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;

        winner();
    })
})

const winner = () =>{
    for( let patter of win){
       let pat1val = boxes[patter[0]].innerText;
       let pat2val = boxes[patter[1]].innerText;
       let pat3val = boxes[patter[2]].innerText;
    

    if (pat1val != "" && pat2val != "" && pat3val != ""){
        if (pat1val === pat2val && pat2val === pat3val){
            console.log("Winner");
        }
    }
}
};