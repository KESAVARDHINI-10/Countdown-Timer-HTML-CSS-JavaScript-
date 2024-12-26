
const targetDate = new Date("Dec 27, 2024 00:11:00").getTime();

const timerElement = document.getElementById("timer");
const headingElement = document.getElementById("heading");
const countdown = setInterval(function() {
    
    const now = new Date().getTime();
    const remainigTime = targetDate - now;
    const days = Math.floor(remainigTime/ (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainigTime% (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainigTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainigTime% (1000 * 60)) / 1000);

    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    if ( remainigTime< 0) {
        clearInterval(countdown);
        timerElement.innerHTML = "HAPPY NEW YEAR";
        timerElement.style.color = "aqua";  
        timerElement.style.fontSize = "100px";  
        timerElement.style.fontWeight = "bold"; 
        timerElement.style.textShadow = "2px 2px 6px rgba(243, 217, 130, 0.8)";
        document.body.style.backgroundImage = 'url(images/image1.jpg)';
        document.body.style.backgroundSize = "cover";  
        document.body.style.backgroundPosition="center"; 
        headingElement.style.display = "none";
    }
}, 1000);

