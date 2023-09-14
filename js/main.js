
// select landing pad Element
let backgroundImage = document.getElementById("parantPage");

// det array of img 
let arrayOfImg = ["02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg"];
// get random num 
setInterval(() => {
    let randomNum = Math.floor(Math.random() * arrayOfImg.length)
    // change background img url
    backgroundImage.style.backgroundImage = 'url("/image/' + arrayOfImg[randomNum] + '")';
}, 10000);
