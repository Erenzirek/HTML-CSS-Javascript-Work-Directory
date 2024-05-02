const box = document.querySelector('.box');
box.addEventListener('mousemove', e=>{
    // console.log(e);
    // console.log(e.offsetX,e.offsetY);
    box.textContent = `x coordinate: ${e.offsetX}  y coordinate: ${e.offsetY}`
})

document.addEventListener('wheel',e=>{
    console.log(e.pageX,e.pageY);
})