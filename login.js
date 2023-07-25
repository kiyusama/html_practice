"use strict";
let userName
let Password

userName = prompt("what's your name?","");
if (userName === "masa"){// ===とする点に注意
Password = prompt("Pls fill in your password.","");
   if (Password === "abc"){
    alert("welcome");
   } else if (Password === null || Password === ""){// キャンセルを押した場合と何も入力しなかった場合
    alert("canceled");
   } else {
    alert("Password is wrong");
   }
} else if (userName === null || userName === ""){
    alert("canceled");
} else {
    alert("I don't know you");
}
