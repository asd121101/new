const button = document.getElementById("toggle");
const body=document.querySelector("body");
const navbar=document.getElementById('navbar');
const h2=document.querySelector('h2');
const tot = document.getElementById("totalbill")
const bot = document.getElementById("bottombar")
const botitem=document.getElementById("bottombaritem")
const botitem2=document.getElementById("bottombaritem2")
const botitem3=document.getElementById("bottombaritem3")
const botitem4=document.getElementById("bottombaritem4")


button.onclick=function(){
    button.classList.toggle('dark');
    body.classList.toggle('dark');
    navbar.classList.toggle('dark');
    h2.classList.toggle('dark');
    bot.classList.toggle('dark');
    if (tot) {tot.classList.toggle('dark')}
    botitem.classList.toggle('dark');
    botitem2.classList.toggle('dark');
    botitem3.classList.toggle('dark');
    botitem4.classList.toggle('dark');

    
}