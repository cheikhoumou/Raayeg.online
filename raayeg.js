const sheetId = '1JIpJgzg8nqDzEN96ENvyG_h5StHB6AEguwtCsPmvk4E';
const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
const sheetName = 'DATA';
const query = encodeURIComponent('Select *')
const url = `${base}&sheet=${sheetName}&tq=${query}`
const data = []
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
                data.push(row);
            })
        })
}

function LoadData(){
    if (typeof(Storage) !== "undefined") {
      document.getElementById("username").value=localStorage.getItem("userRaayeg");
      document.getElementById("password").value =localStorage.getItem("passRaayeg");
      document.getElementById("course").value =localStorage.getItem("course1");
    }
    if(username!="" && password!=""){
      for(var i = 0; i < data.length; i++)  {
      if(data[i].usarname == username ){return}
      }
      localStorage.clear
    }
  }
  
  function LoginUser()  {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var course =document.getElementById("course").value
      if(username!="" && password!=""){
      for(var i = 0; i < data.length; i++)  {
      if(data[i].usarname == username && 
        data[i].password == password){
          if (typeof(Storage) !== "undefined") {
            localStorage.setItem("userRaayeg", username);
            localStorage.setItem("passRaayeg", password);
            localStorage.setItem("course1", course);
          }
          document.getElementById("displayusername").innerHTML = username;
          document.getElementById("page1_id1").className = "page1_class1-off";
          document.getElementById("page4_id1").className = "page4_id1";  
          return
        }else {
        document.getElementById("errorMessage").innerHTML = " البيانات غير متطابقة اذا لم يكن لديك حساب تواصل معنا "; 
        }
      }
    }    
  }    
  function function3(){ 
  document.getElementById("page3_id1").className = "page3_id1-off";
  document.getElementById("page1_id1").className = "page1_id1"; 
  }
