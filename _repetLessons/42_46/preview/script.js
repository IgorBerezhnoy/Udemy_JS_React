const btn = document.querySelector('#btn');
let count = 0;
btn.addEventListener('click', function () {
  console.log('click');
});
btn.addEventListener('click', function () {
  console.log('second click');
});
btn.addEventListener('click', a);

function a() {
  console.log('third click');
  console.log(count);
  count++;
  if (count > 3) {
    btn.removeEventListener('click', a);
  }
}
const link =document.querySelector("a")

link.addEventListener('click', function (event) {
  console.log("Отменили стандартное действие");
  event.preventDefault();
  console.log(event.target);
},)