
//functions to the use cases

 function display(value){
    document.getElementById("result").value += value;
}

function clearScreen(){
    document.getElementById("result").value = "";
}

function calculate(){
    let select = document.getElementById("result").value;
    let evaluate = eval(select);
    document.getElementById("result").value = "  ANS = " + evaluate;
}

function back(){
   let back= document.getElementById("result");
   back.value = back.value.slice(0,-1);


}
