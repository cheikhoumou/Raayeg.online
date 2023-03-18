function tchek(){
        if(localStorage.getItem('userRaayeg') == null || localStorage.getItem('passRaayeg') == null || localStorage.getItem('course1') == null){
        console.log('logout'); 
        localStorage.clear();
        document.querySelector('.loging').style = `display: flex;`;
        document.querySelector('.user.claynt').style = `display: none !important;`; 
    }else{
        document.querySelector('.user.claynt').style = `display: block !important;`; 
        document.querySelector('.loging').style = `display: none;`;
        console.log('login');
    }}tchek();
document.querySelector('input.log').onclick = function(){
    tchek();
document.querySelector('.listus p.nameus').innerHTML = localStorage.getItem('userRaayeg');
}
document.querySelector('div#nav div#HTML6 .widget-content button').onclick = function(){
    localStorage.clear();
    window.location = 'https://tmm34.blogspot.com/';
}
//code
if (document.querySelectorAll('.date-posts-row .post-outer').length == 1){
document.querySelector('.loging').style = `display: flex;`;
}
