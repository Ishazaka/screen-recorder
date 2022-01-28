

let btn = document.querySelector('button');
btn.addEventListener('click',async function(){
  let stream = await navigator.mediaDevices.getDisplayMedia({
    video:true
    
  })
