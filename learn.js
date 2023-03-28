 var number1= document.getElementById("num1");
 var number2= document.getElementById("num2");

 var resultField=document.getElementById("resultField");
 /**var Result=document.getElementById("result")
  Result=number1*100/number2

result.innerText=Result;**/

var form=document.getElementById("xIsWhatPercentofY");

var myCalculation= function(event){


    if(!num1.value || !num2.value){
        alert("Please enter the values in the field");
    }
    else{

        var x=parseFloat(num1.value);
        var y=parseFloat(num2.value);

        var re=x*100/y;
        
        
        resultField.innerHTML="Answer: "+re +"%";
        event.preventDefault();
    }
    

    
}

form.addEventListener('submit',myCalculation);