let second_hand = document.querySelector('.second');
let minute_hand = document.querySelector('.minute');
let hour_hand = document.querySelector('.hour');
let back_button = document.querySelector('i')


let date = ()=>{
    return new Date()
}


 let inputValue = document.querySelector('input');


setInterval(()=>{
    let second = date().getSeconds();
    let minute = date().getMinutes();
    let hour = date().getHours()
   second_hand.style.transform = `rotate(${second*6}deg)`
   minute_hand.style.transform = `rotate(${minute*6}deg)`
   
   if (inputValue.checked) {
    document.body.style.backgroundColor = 'black'
       
       
}else{
    document.body.style.backgroundColor = 'white'
}
   
   
  
   if (hour < 12) {
       
       hour_hand.style.transform = `rotate(${hour*30}deg)`
       
    }
    else{
        let hourTime = hour-12
        hour_hand.style.transform = `rotate(${hourTime*30}deg)`
    }
    
},10)


back_button.addEventListener('click',()=>{
    window.history.back()
})
