function hyoji() {
    var str="一文字ずつ表示します。";
    var cnt=document.timer.moji2.value.length;
    if(cnt<11) {
        document.timer.moji2.value=str.substring(0,cnt+1);
    }else{
        document.timer.moji2.value="";
    }
    setTimeout("hyoji2()",1000);
}