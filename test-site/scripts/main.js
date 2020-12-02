/*
 * @Author: your name
 * @Date: 2020-12-02 16:01:48
 * @LastEditTime: 2020-12-02 19:46:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \web-projects\test-site\scripts\main.js
 */

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/图片1.jpg') {
      myImage.setAttribute('src', 'images/图片2.jfif');
    } else {
      myImage.setAttribute('src', 'images/图片1.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'JOJO 酷毙了，'+myName;
  }
}
myButton.onclick = function() {
  setUserName();
}