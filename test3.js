const sheetId = '1721WD7x8DzZtZm-5VJC4Ab5sFIDLJJoX9K91SNAIQ8Q';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = 'DATA';
const query = encodeURIComponent('Select *')
const url = `${base}&sheet=${sheetName}&tq=${query}`
const cheikhoRaayeg1 = []
document.addEventListener('DOMContentLoaded', init)
function init() {
    fetch(url)
        .then(res => res.text())
        .then(rep => {
            const jsonData = JSON.parse(rep.substring(47).slice(0, -2));
            const colz = [];
            jsonData.table.cols.forEach((heading) => {
                if (heading.label) {
                    let column = heading.label;
                    colz.push(column);
                }
            })
            jsonData.table.rows.forEach((rowData) => {
                const row = {};
                colz.forEach((ele, ind) => {
                    row[ele] = (rowData.c[ind] != null) ? rowData.c[ind].v : '';
                })
                cheikhoRaayeg1.push(row);
            })
        })
}

function LoadData(){
    if (typeof(Storage) !== "undefined") {
      document.getElementById("username").value=localStorage.getItem("userRaayeg");
      document.getElementById("password").value =localStorage.getItem("passRaayeg");
      // test code
      if(document.getElementById("username").value == localStorage.getItem("userRaayeg") &&
    document.getElementById("password").value == localStorage.getItem("passRaayeg")){
    function butadd(){
    document.querySelector("#page1_id1 > input[type=button]:nth-child(6)").click();
    document.querySelector('input.log').click();
    }
    setTimeout(butadd, 3000);
}
     // test code
    }
    if(username!="" && password!=""){
      for(var i = 0; i < cheikhoRaayeg1.length; i++)  {
      if(cheikhoRaayeg1[i].usarname == username ){return}
      }
      localStorage.clear();
    }
  }
  
  function LoginUser()  {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
      if(username!="" && password!=""){
      for(var i = 0; i < cheikhoRaayeg1.length; i++)  {
      if(cheikhoRaayeg1[i].usarname == username && 
        cheikhoRaayeg1[i].password == password){
          if (typeof(Storage) !== "undefined") {
            localStorage.setItem("userRaayeg", username);
            localStorage.setItem("passRaayeg", password);
            localStorage.setItem("email", cheikhoRaayeg1[i].Email);
            localStorage.setItem("tel", cheikhoRaayeg1[i].phone);
            localStorage.setItem("course1", cheikhoRaayeg1[i].course);
          }
          document.getElementById("displayusername").innerHTML = username;
          document.getElementById("page1_id1").className = "page1_class1-off";
          document.getElementById("page4_id1").className = "page4_id1";  
          return
        }else {
        document.getElementById("errorMessage").innerHTML = " البيانات غير متطابقة اذا لم يكن لديك حساب تواصل معنا ";
        localStorage.clear();
        }
      }
    }    
  }  
   function function3(){ 
    document.getElementById("page3_id1").className = "page3_id1-off";
    document.getElementById("page1_id1").className = "page1_id1"; 
  }
    // logout
