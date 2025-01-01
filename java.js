let boxes = document.querySelectorAll(".box");
let rst = document.querySelector("#reset");

let turn0 = true;

let unoccupied = [0,1,2,3,4,5,6,7,8];

 function second_player(box_index){
    let box=boxes[box_index];
    box.innerText = "O";
    turn0 = true;
    box.disabled = true;
    remove(box_index);
}

function dumb_machine(){
    
    // alert ( "machine working " +unoccupied[0] );
    second_player(unoccupied[0]);
}

function random_machine(){
    
    const randomIndex = Math.floor(Math.random() * unoccupied.length);
    second_player(unoccupied[randomIndex]);
}

function remove(occupied){
    unoccupied = unoccupied.filter(item => item!= occupied);
}
const win = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click",(event) => {
        remove(event.target.id);
        if(turn0){
            box.innerText = "X";
            turn0=false;
            if(unoccupied.length>0){
                random_machine(); 
            }
            
        }
        else{  
                   
        }
        box.disabled = true;
        winner();
       
    })
})

const winner = () =>{
    for( let pattern of win){
       let pat1val = boxes[pattern[0]].innerText;
       let pat2val = boxes[pattern[1]].innerText;
       let pat3val = boxes[pattern[2]].innerText;
    

    if (pat1val != "" && pat1val === pat2val && pat2val === pat3val){
            alert("Winner");
        }
    
}
};