"use strict";
let body = document.querySelector("body")

let check0 = document.querySelector("#check-0")
let check1 = document.querySelector("#check-1")
let check2 = document.querySelector("#check-2")
let check3 = document.querySelector("#check-3")
let check4 = document.querySelector("#check-4")

let img0 = document.querySelector("#img0")
let img1 = document.querySelector("#img1")
let img2 = document.querySelector("#img2")
let img3 = document.querySelector("#img3")
let img4 = document.querySelector("#img4")
check0.onclick = enter0
function enter0(){
  img0.style.transition = "3s"
  img0.style.opacity = "100%"
  img1.style.opacity = "0%"
  img2.style.opacity = "0%"
  img3.style.opacity = "0%"
  img4.style.opacity = "0%"
}
check1.onclick = enter1
function enter1(){
  img1.style.transition = "3s"
  img1.style.opacity = "100%"
  img0.style.opacity = "0%"
  img2.style.opacity = "0%"
  img3.style.opacity = "0%"
  img4.style.opacity = "0%"
}
check2.onclick = enter2
function enter2(){
  img2.style.transition = "3s"
  img2.style.opacity = "100%"
  img0.style.opacity = "0%"
  img1.style.opacity = "0%"
  img3.style.opacity = "0%"
  img4.style.opacity = "0%"
}
check3.onclick = enter3
function enter3(){
  img3.style.transition = "3s"
  img3.style.opacity = "100%"
  img0.style.opacity = "0%"
  img1.style.opacity = "0%"
  img2.style.opacity = "0%"
  img4.style.opacity = "0%"
}
check4.onclick = enter4
function enter4(){
  img4.style.transition = "3s"
  img4.style.opacity = "100%"
  img0.style.opacity = "0%"
  img1.style.opacity = "0%"
  img2.style.opacity = "0%"
  img3.style.opacity = "0%"
}
let contactPage = document.querySelector("#contactPage")
let contact = document.querySelector("#contact")
contact.onclick = enter5
function enter5(){
  contactPage.style.display = "block" 
}
let prev = document.querySelector("#prev")
prev.onclick = enter6
function enter6(){
  contactPage.style.display = "none"
}