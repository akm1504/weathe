function reloaded(){
window.onload = function() {
  init();
  doSomethingElse();
  setTimeout(() => location.reload(), 25*60*1000)
};
  
}
module.exports = { reloaded };
