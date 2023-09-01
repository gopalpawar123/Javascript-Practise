document.querySelector('.heading').onclick=function(){
    // alert()
    // console.log(this);
    // h1 tag (current)
    // console.log(this.nextElementSibling);
    // next p tag

    // var ans=this.nextElementSibling.style.display;
    // console.log(ans);

    // if(ans=='none'){
    //     this.nextElementSibling.style.display='block';
    // }else{
    //     this.nextElementSibling.style.display='none';

    // }

    // conditional operator

    this.nextElementSibling.style.display=( this.nextElementSibling.style.display=='none')?'block':'none';

}