function tchek2(){
  if(localStorage.getItem('userRaayegc1') == null || localStorage.getItem('passRaayegc1') == null || localStorage.getItem('course2') == null){
  console.log('logout'); 
  localStorage.clear();
  document.querySelector('.loging').style = `display: flex;`;
  document.querySelector('.user.claynt').style = `display: none !important;`; 
}else{
  document.querySelector('.user.claynt').style = `display: block !important;`; 
  document.querySelector('.loging').style = `display: none;`;
  console.log('login');
}}tchek2();
document.querySelector('input.log').onclick = function(){
tchek2();
document.querySelector('.listus p.nameus').innerHTML = localStorage.getItem('userRaayegc1');
}
document.querySelector('div#nav div#HTML6 .widget-content button').onclick = function(){
localStorage.clear();
window.location = 'https://raayegcrypto.blogspot.com/';
}
//code
if (document.querySelectorAll('.date-posts-row .post-outer').length == 1){
document.querySelector('.loging').style = `display: flex;`;
}
