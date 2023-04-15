const nameInput = document.getElementById("nameInput");
const profInput = document.getElementById("professionInput");
const ageInput = document.getElementById("ageInput");
const addButton = document.getElementById("addUserBtn");
const errorMsg = document.getElementById("errorMsg");
const empCountP = document.getElementById("employeeCount");
const allEmp = document.querySelector(".employeeContainer");
// const deleteBtn = document.querySelectorAll(".deleteBtn");

let employeeArray = [];
class Employee {
    constructor(id, name, prof, age) {
        this.id = id;
        this.name = name;
        this.prof = prof;
        this.age = age;
    }

    /**
     * @param {number} id
     */
    set setId(id){
        this.id = id;
    }
}

//add employee
addButton.addEventListener("click",()=>{
    errorMsg.style.display = "block";
    if(nameInput.value.trim()!=="" && profInput.value.trim()!=="" && ageInput.value.trim()!==""){
        errorMsg.style.color = "green";
        errorMsg.textContent = "Success : Employee Added!";
        const empObj = new Employee(employeeArray.length+1,nameInput.value,profInput.value,ageInput.value);
        employeeArray.push(empObj);
        //create employee div
        let empDetails = document.createElement("div");
        empDetails.classList.add("employeeList");
        //create ul
        let empUl = document.createElement("ul");
        empUl.classList.add("empDetails");
        //create li
        let idli = document.createElement("li");
        let nameli = document.createElement("li");
        let profli = document.createElement("li");
        let ageli = document.createElement("li");
        idli.classList.add("empli");
        nameli.classList.add("empli");
        profli.classList.add("empli");
        ageli.classList.add("empli");
        //cotent
        idli.textContent = empObj.id+".";
        nameli.textContent = "Name: "+empObj.name;
        profli.textContent = "Proffession: "+empObj.prof;
        ageli.textContent = "Age: "+empObj.age;
        //button
        let deleteButton = document.createElement("button");
        deleteButton.type = "submit";
        deleteButton.value = employeeArray.length-1;
        deleteButton.textContent  = "Delete User";
        deleteButton.classList.add("deleteBtn");
        //append child
        empUl.append(idli,nameli,profli,ageli);
        empDetails.appendChild(empUl);
        empDetails.appendChild(deleteButton);
        allEmp.appendChild(empDetails);
    }
    else{
        errorMsg.style.color = "red";
        errorMsg.textContent = "Error : Please Make sure All the fields are filled before adding in an employee !";
    }

    if(employeeArray.length>0){
        empCountP.style.display = "none";
    }
    else{
        empCountP.style.display = "block";
    }
})

//delete employee
allEmp.addEventListener("click", (event) => {
    if (event.target.classList.contains("deleteBtn")) {
      deleteEmp(event);
    }
});

function deleteEmp(e){
    const btn = e.target;
    const empId = btn.value;
    
    // Find the index of the employee object in the employeeArray
    const empIndex = employeeArray.findIndex(emp => emp.id == empId);
    
    // Remove the employee object from the employeeArray
    employeeArray.splice(empIndex, 1);
    
    // Remove the employee element from the UI
    const empElement = btn.parentElement;
    empElement.remove();

    if(employeeArray.length>0){
        empCountP.style.display = "none";
    }
    else{
        empCountP.style.display = "block";
    }
}