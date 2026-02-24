// SHOP NOW BUTTON
function shopNow(){
    window.location.href="product.html";
}

// ACTIVE NAVBAR LINK
let navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link=>{
    link.addEventListener("click",function(){
        navLinks.forEach(nav=>nav.classList.remove("active"));
        this.classList.add("active");
    });
});

// STICKY NAVBAR
window.addEventListener("scroll",function(){
    let nav = document.querySelector("nav");
    nav.classList.toggle("sticky",window.scrollY>0);
});

// WELCOME POPUP
window.onload=function(){
    alert("Welcome to Beauty Haven 💖");
}

// HERO TEXT CHANGER
let texts=[
"Glow Like Never Before 💄",
"Beauty Begins Here ✨",
"Shine With Confidence 💋"
];

let i=0;
setInterval(()=>{
    document.getElementById("welcome-text").innerText=texts[i];
    i=(i+1)%texts.length;
},3000);