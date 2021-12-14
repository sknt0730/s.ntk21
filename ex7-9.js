function year() {
    var x=document.getElementById('year').value;
    if(x%4==0&&x%100!=0) {
        alert('閏年です。');
    
    }
         else {
             alert('平年です。');
         }
}