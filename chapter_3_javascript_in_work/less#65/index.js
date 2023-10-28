const btn = document.querySelector('.btn');
let timerId;
let i = 0;
btn.addEventListener("click", ()=>{
    myAnimation()
})
function myAnimation(){
    const elem=document.querySelector(".box")
    let pos=0
    let id=setInterval(frame, 10)

    function frame(){
        if (pos===300){
            clearInterval(id)
        }else {
            pos++
            elem.style.top=pos+"px"
            elem.style.left=pos+"px"
        }
    }
}

// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 1000);
// });
//
//
// function logger() {
//     if (i > 3) {
//         clearInterval(timerId);
//         console.log('Таймер удален');
//
//     }
//     console.log('text');
//     i++;
// }
//
// const id = setTimeout(function log() {
//     console.log('hello');
//     id = setTimeout(log, 1000);
// });