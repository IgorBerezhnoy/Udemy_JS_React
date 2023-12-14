//102. Webpack. Собираем наш проект
function myModule() {
  this.hello = function () {
    console.log('hello');
  };
  this.goodbye = function () {
    console.log('bye!');
  };
}

module.exports = myModule;