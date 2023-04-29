const form = document.querySelector("form");
    const table = document.querySelector("#tab");

    form.addEventListener("submit",event=>{
event.preventDefault();
const fname=document.getElementById("Fname").value;
const lname=document.getElementById("Lname").value;
const address=document.getElementById("Address").value;
const pin=document.getElementById("Pincode").value;
const gender=document.getElementById("Gender").value;
const food=document.getElementById("foodtab").value;
const state=document.getElementById("State").value;
const country=document.getElementById("Country").value;

const row=`<tr><td>${fname}</td><td>${lname}</td><td>${address}</td><td>${pin}</td><td>${gender}</td><td>${food}</td><td>${state}</td><td>${country}</td></tr>`;
table.innerHTML += row;

document.getElementById("Fname").value="";
document.getElementById("Lname").value="";
document.getElementById("Address").value="";
document.getElementById("Pincode").value="";
document.getElementById("Gender").value="";
document.getElementById("foodtab").value="";
document.getElementById("State").value="";
document.getElementById("Country").value="";
    })