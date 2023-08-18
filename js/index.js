const hex=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const container=document.querySelector('.container');
const shape1=document.querySelector('.shape1');
const shape2=document.querySelector('.shape2');
container.addEventListener('click',()=>{
    let Hexcolor="#";
    for(i=0;i<6;i++){
        Hexcolor+=hex[getRandome()]
    }
    container.style.background=Hexcolor
    container.style.boxShadow="-10px 10px 90px"+Hexcolor;
    shape1.style.background=Hexcolor
    shape1.style.boxShadow="-10px 10px 90px"+Hexcolor;
    shape2.style.background=Hexcolor
    shape2.style.boxShadow="-10px 10px 90px"+Hexcolor;
})
function getRandome(){
    return Math.floor(Math.random()*hex.length)
}