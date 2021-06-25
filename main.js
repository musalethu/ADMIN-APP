
  var selectedRow = null
var form=[]

var formData = readformData();
  if (
     formData.name !== "" &&
     formData.surname !== "" &&
     formData.position !== "" &&
     formData.IDnumber !== "" &&
     formData.salaryAnnually !== "" &&
     formData.Monthlysalary !== ""
  )
  {
    insertNewRecords(formData);
  }
  form = [...form, formData];
  
  updateRecord(formData);
  resertForm();
    function readformData() {
      var formData = {};

      formData["name"] = document.getElementById("name").value;
      formData["surname"] = document.getElementById("surname").value;
      formData["position"] = document.getElementById("position").value;
      formData["idnumber"] = document.getElementById("ID number").value;
      formData["annually"] = document.getElementById("salaryAnnually").value;
      formData["salary"] = document.getElementById("Monthlysalary").value;
      return formData;
    }

function insertNewRecords(data) {
  var table = document.getElementById("Records-list").getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.name;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.surname;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.position;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.IDnumber;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.salaryAnnually;
   cell6 = newRow.insertCell(5);
   cell6.innerHTML = data.Monthlysalary; 
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = `<a onClick=" onEDIT(this)">EDIT</a> `;



 let resertForm = document.getElementById("name").value = "";
//  let resertForm =document.getElementById("surname").value = "";
//  let resertForm = document.getElementById("position").value = "";
//  let resertForm = document.getElementById("ID number").value = "";
//   let resertForm = document.getElementById("salaryAnnually").value = "";
//  let resertForm = document.getElementById("Monthlysalary").value ="";
  selectedRow = null;
}
function onEDIT(td) {
  selectedRow = td.parentElement.parentElement;
  // document.getElementById("name").value = selectedRow.cells[0].innerHTML;
  // document.getElementById("surname").value = selectedRow.cells[1].innerHTML;
  document.getElementById("position").value = selectedRow.cells[2].innerHTML;
   document.getElementById("IDnumber;").value = selectedRow.cells[3].innerHTML;
    document.getElementById("salaryAnnually").value =
      selectedRow.cells[4].innerHTML;
     document.getElementById("Monthlysalary").value =
       selectedRow.cells[5].innerHTML;
     
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.name;
  selectedRow.cells[1].innerHTML = formData.surname;
  selectedRow.cells[2].innerHTML = formData.position;
  selectedRow.cells[3].innerHTML = formData.IDnumber;
  selectedRow.cells[4].innerHTML = formData.salaryAnnually;
  selectedRow.cells[5].innerHTML = formData.Monthlysalary;
}
                  
  function calcSalary() {
    var salary_element = document.getElementById("Monthlysalary");
    var salary = parseInt(salary_element.value);
    var annually_element = document.getElementById("salaryAnnually");
    var annually = parseInt(annually_element.value);
    
    var calculate = salary * annually * 12;
    document.getElementById("results").innerHTML = calculate;
  }
  function validateID() {
    var cb = document.forms["pleasevalidateID"]["idnumber"].checked;
    if (cb) {
      var ex =
        /^(((\d{2}((0[13578]|1[02])(0[1-9]|[12]\d|3[01])|(0[13456789]|1[012])(0[1-9]|[12]\d|30)|02(0[1-9]|1\d|2[0-8])))|([02468][048]|[13579][26])0229))(( |-)(\d{4})( |-)(\d{3})|(\d{7}))/;
    } else {
       
      var ex = /^[0-9]{1,}$/;
    }
    
    var theIDnumber = document.form["pleasevalidateme"]["idnumber"].value;
    if (ex.test(theIDnumber) == false) {
      
      alert("Please supply a valid ID number");
      return false;
    }
    alert(theIDnumber + " a valid ID number");
    
    return false;
  }
  //     employeeList.push(employee);
  // } else {
  //   alert(`You need to write something `);
  // }
  // let form = document.getElementById('container');
  // let name = document.getElementById('name');
  // let surname = document.getElementById("surname");
  // let position = document.getElementById('postion');
  // let IDnumber = document.getElementById("ID number");
  // let salaryAnnually = document.getElementById("salaryAnnually");
  // let Monthlysalary = document.getElementById("Monthlysalary");
  // let button = document.getElementById("calcSalary");
  // let submit = document.getElementById('submit');
  // let p = document.getElementById('results')

  // var employeeList = [];
  // var employeeIndex = 0;
  // form.addEventListener("submit", (e) => {
  //   e.preventDefault();
  //   let name = document.getElementById("name").value;
  //   let surname = document.getElementById("surname").value;
  //   let position = document.getElementById("position").value;
  //   let IDnumber = document.getElementById("ID number").value;
  //   let salaryAnnually = document.getElementById("salaryAnnually").value;
  //   let Monthlysalary = document.getElementById("Monthlysalary").value;
  //   let employee = {
  //     name,
  //     surname,
  //     position,
  //     IDnumber,
  //     salaryAnnually,
  //     Monthlysalary,
  //   };
      
  // function displaysEmployee() {
  //   var table = document.getElementById("Records-list").getElementsByTagName("tbody")[0];
  //   var newRow = table.insertRow(table.length);
  //   `<li>
  //     <h1>${employeeList[i].name}</h1>
  //     <h2>${employeeList[i].surname}</h2>
  //     <h3>${employeeList[i].position}</h3>
  //     <h4>${employeeList[i].IDnumber} </h4>
  //     <h5>${employeeList[i].salaryAnnually} </h5>
  //     <h6>${employeeList[i].Monthlysalary} </h6>
  //     <button onclick="editEmployee(${i})">Edit</button>
  //     </li>`;
