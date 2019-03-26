"use strict";

const ADMIN_PASSWORD = "m4ng0h4ckz";
let message;
const pass = prompt("Enter password");

if (pass === null) {
  alert("Canceled by user!");
} else if (pass !== ADMIN_PASSWORD) {
  alert("Access denied, wrong password!");
} else {
  alert("Welcome!");
}
