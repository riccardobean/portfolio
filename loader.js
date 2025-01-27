function detectDevice() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) {
        window.location.href = "https://google.com/";
    }
    else if (screenWidth >= 600 && screenWidth <= 1200) {
        window.location.href = "https://riccardobean.github.io/portfolio/about";
    }
    else if (screenWidth > 1200){
        window.location.href = "https://riccardobean.github.io/portfolio/contact";
    }
}

setTimeout(() => {
    detectDevice();
}, 2000);
