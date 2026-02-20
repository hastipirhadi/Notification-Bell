const notificationIconEl = document.getElementById("notification");
const notificationListEl = document.getElementById("notification-list");
const countEl = document.getElementById("count");
const message1El = document.getElementById("message1");
const message2El = document.getElementById("message2");
const message3El = document.getElementById("message3");
const message4El = document.getElementById("message4");
const cleanEl=document.getElementById("clear");
notificationIconEl.addEventListener("click",()=>{
notificationListEl.classList.toggle("show");

})