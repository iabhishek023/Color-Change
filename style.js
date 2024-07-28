
const starting=document.getElementById('start')
const ending=document.getElementById('stop')

const randomcolor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}

 let interval
const startChangingColor=function(){
    if(!interval){
        interval=setInterval(changecolor,1000)
    }


    function changecolor(){
        document.body.style.backgroundColor=randomcolor();
    }
    
}

const stopChangingColor=function(){

    clearInterval(interval)
    interval=null;
}

starting.addEventListener('click',startChangingColor)
ending.addEventListener('click',stopChangingColor)

