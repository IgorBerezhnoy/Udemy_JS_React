window.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tabheader__item');
    const tabsContent = document.querySelectorAll('.tabcontent');
    const tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent() {
        tabsContent.forEach(el => {
            el.style.display = 'none';
        });
        tabs.forEach(el => {
            el.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');

    }

    hideTabContent();
    showTabContent();
    tabsParent.addEventListener('click', (e) => {
        debugger
        const target = e.target;
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((el, i) => {
                if (el === target) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    const deadLine = '2024-05-11';

    function getTimeRemaining(endTime) {
        const t = new Date(endTime) - new Date();
        let days = 0,
            hours = 0,
            minutes = 0,
            seconds = 0;
        if (t > 0) {
            days = Math.floor(t / (1000 * 60 * 60 * 24));
            hours = Math.floor((t / (1000 * 60 * 60) % 24));
            minutes = Math.floor((t / (1000 / 60) % 60));
            seconds = Math.floor((t / (1000) % 60));
        }
        return {total: t, days, hours, minutes, seconds};
    }

    function setClock(selector, endTime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(() => {
                updateClock();
            }, 1000);
        updateClock();


        function updateClock() {
            const getZero = (num) => {
                return num >= 10 ? num : '0' + num;
            };
            const t = getTimeRemaining(endTime);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadLine);
});
//
// window.addEventListener('DOMContentLoaded', () => {
//     const tabs = document.querySelectorAll('.tabheader__item');
//     const tabsContent = document.querySelectorAll('.tabcontent');
//     const tabsParent = document.querySelector('.tabheader__items');
//
//
//     function hideTabContent() {
//         tabsContent.forEach(el => {
//             el.classList.add("hide")
//             el.classList.remove("show", "fade")
//         });
//         tabs.forEach(el => {
//             el.classList.remove('tabheader__item_active');
//         });
//     }
//
//     function showTabContent(i = 0) {
//         tabsContent[i].classList.add("show", "fade")
//         tabsContent[i].classList.remove("hide")
//         tabs[i].classList.add('tabheader__item_active');
//
//     }
//
//     hideTabContent();
//     showTabContent();
//     tabsParent.addEventListener('click', (e) => {
//         const target=e.target
//         if (target&&target.classList.contains("tabheader__item")){
//             tabs.forEach((el,i)=>{
//                 if (el===target){
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             })
//         }
//     });
//
// });