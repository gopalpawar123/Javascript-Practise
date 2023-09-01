// lets apply  events through javascript event handler.

var litag = document.querySelector('.xyz')
//  console.log(litag); 
// event handling via javascript.
litag.onclick = function () {
    //  console.log('test');
    this.style.background = '#ccc';
    this.nextElementSibling.style.background = '#567';
    this.previousElementSibling.style.background = '#567';
    this.parentElement.style.border = 'solid 5px red'
}
var btn = document.querySelector('button');
btn.onclick = function () {
    var ultag = document.querySelector('ul')
    // console.log(ultag);
    ultag.firstElementChild.style.background='#456';
    ultag.lastElementChild.style.background='#786';

    ultag.children[1].style.background='red';

}   