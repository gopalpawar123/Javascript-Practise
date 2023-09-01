var str='';
var textBox= document.querySelector('#txt')
textBox.value=0;
function myfunc(curtd){
    console.log(curtd);
    console.log(curtd.innerText);

    str= str+curtd.innerText;
    console.log(str);

    textBox.value=str;
}

function myfunc2(){
    if(str!=''){
        var ans= eval(str);
        console.log(ans);
        textBox.value=ans;
        str=ans;
    }
}
function myfunc1(){
    str=''; textBox.value=0;
}