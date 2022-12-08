const Countown =  document.getElementById('countown').innerHTML=countown;

const arrow = ()=>{
let countown = 10;
   document.getElementById('countown').innerHTML=countown;

setTimeout(()=>{
    countown--;
    document.getElementById('countown').innerHTML=countown;
},1000);

setTimeout(()=>{
    countown--;
    document.getElementById('countown').innerHTML=countown;
},2000);

setTimeout(()=>{
    countown--;
    document.getElementById('countown').innerHTML=countown;
},3000);

setTimeout(()=>{
    countown--;
    document.getElementById('countown').innerHTML=countown;
},4000);

setTimeout(()=>{
    countown--;
    document.getElementById('countown').innerHTML=countown;
},5000);

setTimeout(()=>{
    countown--;
    document.getElementById('countown').innerHTML=countown;
},6000);

setTimeout(()=>{
    countown--;
    document.getElementById('countown').innerHTML=countown;
},7000);

setTimeout(()=>{
    countown--;
    document.getElementById('countown').innerHTML=countown;
},8000);

setTimeout(()=>{
    countown--;
    document.getElementById('countown').innerHTML=countown;
},9000);

setTimeout(()=>{
    countown--;
    document.getElementById('countown').innerHTML=countown;
},10000)

};
arrow();

setTimeout(() => {
    Countown.remove();
    document.getElementById("developer").innerHTML = `HAPPY DEVELEPORS DAY`;
},12000);
