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
////////////////////////////////////////////////////////
  const deadLine = '2024-04-11';

  function getTimeRemaining(endTime) {
    const t = new Date(endTime) - new Date();
    let days = 0, hours = 0, minutes = 0, seconds = 0;
    if (t > 0) {
      days = Math.floor(t / (1000 * 60 * 60 * 24));
      hours = Math.floor((t / (1000 * 60 * 60) % 24));
      minutes = Math.floor((t / (1000 / 60) % 60));
      seconds = Math.floor((t / (1000) % 60));
    }
    return {total: t, days, hours, minutes, seconds};
  }

  function setClock(selector, endTime) {
    const timer = document.querySelector(selector), days = timer.querySelector('#days'),
      hours = timer.querySelector('#hours'), minutes = timer.querySelector('#minutes'),
      seconds = timer.querySelector('#seconds'), timeInterval = setInterval(() => {
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
  //////////////////////////////////////////////////

  const modalTrigger = document.querySelectorAll('.data-modal');
  const modal = document.querySelector('.modal');
  // const modalCloseBtn = document.querySelector('[data-close]');
  const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  };
  const openModal = () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
  };
  modal.classList.add('hide');
  modalTrigger.forEach(el => el.addEventListener('click', () => openModal()));
  // modalCloseBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') === '') {
      closeModal();
    }
  });
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.style.display === 'block') {
      closeModal();
    }
  });
  const modalTimerId = setTimeout(() => openModal(), 15000);

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }

  window.addEventListener('scroll', showModalByScroll);

  class MenuCard {
    constructor(title, text, price, srs, alt, parentSelector, ...classes) {
      this.title = title;
      this.text = text;
      this.price = price;
      this.classes = classes || ['menu__item'];
      this.srs = srs;
      this.alt = alt;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 27;
      this.changeToUAH();
    }

    changeToUAH() {
      this.price = this.price * this.transfer;
    }

    render() {
      const element = document.createElement('div');
      this.classes.forEach(el => element.classList.add(el));
      element.innerHTML = `
                    <img src=${this.srs} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.text}</div>
                    <div class="menu__item-divider"></div>
                   <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                   </div>`;
      this.parent.append(element);
    }
  }

  new MenuCard(
    'Меню "Фитнес',
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
    9,
    'img/tabs/vegy.jpg',
    'vegy',
    '.menu .container', 'menu__item'
  ).render();
  new MenuCard(
    'Меню “Премиум”',
    'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
    25,
    'img/tabs/elite.jpg',
    'elite',
    '.menu .container', 'menu__item'
  ).render();
  new MenuCard(
    'Меню "Постное"',
    'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков. ',
    18,
    'img/tabs/post.jpg',
    'post',
    '.menu .container', 'menu__item'
  ).render();
//84. Реализация скрипта отправки данных на сервер

  const forms = document.querySelectorAll('form');
  const message = {
    loading: 'img/form/spinner.svg',
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так...'
  };

  forms.forEach(item => {
    postData(item);
  });

  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('img');
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
      form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form);

      const object = {};
      formData.forEach(function(value, key){
        object[key] = value;
      });

      fetch('server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
      }).then(data => {
        console.log(data);
        showThanksModal(message.success);
        statusMessage.remove();
      }).catch(() => {
        showThanksModal(message.failure);
      }).finally(() => {
        form.reset();
      });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.style.display='none';
    openModal();

    const thanksModal = document.createElement('div');
    thanksModal.classList.add('modal__dialog');
    thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
    document.querySelector('.modal').append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.style.display='block';

      prevModalDialog.classList.remove('hide');
      closeModal();
    }, 4000);
  }
  fetch('http://localhost:3000/menu')
    .then(data=>data.json())
    .then(res=>console.log(res))
});
