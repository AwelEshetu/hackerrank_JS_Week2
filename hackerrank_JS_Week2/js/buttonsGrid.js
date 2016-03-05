 function addButtons(){
      //create new buttons inside the container
      var containerDiv=document.getElementById('btns');
      for(var i=1;i<10;i++){
          //create new buttons
          var newButtons=document.createElement('button');
          //set btn id
          var btnID='btn'+i;
          newButtons.id=btnID;
          //set btn class
          newButtons.className='btn';
          newButtons.innerHTML=i;
          newButtons.value=i; //insert value in the button
          
          containerDiv.appendChild(newButtons); //append the new buttons to the container
      }

 }
 addButtons();
var btn=document.getElementById('btn5');
btn.onclick=function()
    {
    

var temp=document.getElementById("btn1").value;
var working = document.getElementById("btn4").value;
document.getElementById("btn1").innerHTML=working;
document.getElementById("btn1").value=working;
working = document.getElementById("btn7").value;
document.getElementById("btn4").innerHTML=working;
document.getElementById("btn4").value=working;
working = document.getElementById("btn8").value;
document.getElementById("btn7").innerHTML=working;
document.getElementById("btn7").value=working;
working = document.getElementById("btn9").value;
document.getElementById("btn8").innerHTML=working;
document.getElementById("btn8").value=working;
working = document.getElementById("btn6").value;
document.getElementById("btn9").innerHTML=working;
document.getElementById("btn9").value=working;
working = document.getElementById("btn3").value;
document.getElementById("btn6").innerHTML=working;
document.getElementById("btn6").value=working;
working = document.getElementById("btn2").value;
document.getElementById("btn3").innerHTML=working;
document.getElementById("btn3").value=working;
document.getElementById("btn2").innerHTML=temp; 
document.getElementById("btn2").value=temp; 
     }
