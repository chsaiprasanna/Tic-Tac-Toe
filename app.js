//access btns
let b=document.querySelectorAll(".box");
let msgContainer=document.querySelector(".message-container");
let msg=document.querySelector("#msg");

let turn=true;//x

/*let f=()=>{
    if(turn){
        bo.innerText="X"
        turn=false
    }
    else{
        bo.innerText="Y"
        turn=true;
    }
}*/

b.forEach((bo)=>
{
    bo.addEventListener("click",()=>{
        if(turn){
            bo.innerText="X";
            turn=false;
            
        }
        else{
            bo.innerText="O";
            turn=true;
        } 
        bo.disabled=true;
        checkwinner();    
    });
    
});

const d=(winner)=>{
    msg.innerText=`Congratulations,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    for(let bo of b){
        bo.disabled=true
    }
}

const checkwinner=()=>{
    for(let i of win){
        //console.log(i[0],i[1],i[2]);
        //console.log(b[i[0]].innerText,b[i[1]].innerText,b[i[2]].innerText);

        let p1=b[i[0]].innerText;
        let p2=b[i[1]].innerText;
        let p3=b[i[2]].innerText;

        if(p1!=""&& p2!=""&&p3!=""){
            if(p1==p2&&p2==p3){
                console.log("winner",p1)
                d(p1)
            }
            
        }


    }

}

const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
