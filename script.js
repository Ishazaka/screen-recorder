

let btn = document.querySelector('button');
btn.addEventListener('click',async function(){
  let stream = await navigator.mediaDevices.getDisplayMedia({
    video:true
    
  })

  // const mime =MediaRecorder.isTypeSupported("video/webm; codecs=vp9")? "video/webm; codecs=vp9":"video/webm"


let mediaRecorder = new MediaRecorder(stream,{
  // mimeType:mime
});
