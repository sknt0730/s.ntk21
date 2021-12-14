function calcBmi() {
    var x =document.getElementById('weight').value;
    var y =document.getElementById('height').value;
    
    alert(Number(x)/(Number(y))**2) ;
    var bmi =(Number(x)/(Number(y))**2) ;
    if(bmi<18.5) {
        alert('低体重');
    } else if(bmi>=18.5&&bmi<=25){
        alert('普通');
         } else {
             alert('肥満');
         }
        }
