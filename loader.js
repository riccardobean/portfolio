function detectDevice() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 600) {
        window.location.href = "https://riccardobean.github.io/portfolio/";
    }
    else if (screenWidth >= 600 && screenWidth <= 1200) {
        window.location.href = "https://riccardobean.github.io/portfolio/";
    }
    else if (screenWidth > 1200){
        window.location.href = "https://riccardobean.github.io/portfolio/";
    }
}

setTimeout(() => {
    detectDevice();
}, 2000);
