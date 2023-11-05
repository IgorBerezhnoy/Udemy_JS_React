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
  const modalCloseBtn = document.querySelector('[data-close]');
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
  modalCloseBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
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
    loading: 'loading',
    success: 'Thanks',
    failure: 'Error',
  };
  forms.forEach(el => {
    postData(el);
  });

  function postData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const statusMessage = document.createElement('div');
      statusMessage.classList.add('status');
      statusMessage.textContent = message.loading;
      form.append(statusMessage);
      const request = new XMLHttpRequest();
      request.open('POST', 'server.php');
      request.setRequestHeader('Content-type', 'application/json');
      const formData = new FormData(form);
      const obj = {};
      formData.forEach(function (value, key) {
        obj[key] = value;
      });
      const json=JSON.stringify(obj)
      request.send(json);
      request.addEventListener('load', () => {
        if (request.status === 200) {
          statusMessage.textContent = message.success;
          form.reset();
          setTimeout(() => {
            statusMessage.remove();
          }, 2000);
          console.log(request.response);
        } else {
          statusMessage.textContent = message.failure;
          console.log(request.response);
        }
      });
    });
  }

});
