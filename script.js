(function (document) {
    const topbutton = document.getElementById("hamburger");
    
    window.onscroll = function () {
        if (document.body.scrollTop > 220 || document.documentElement.scrollTop > 220) {
            topbutton.style.opacity = "1";
            topbutton.style.cursor = "pointer";
        } else {
            topbutton.style.opacity = "0";
            topbutton.style.cursor = "initial";
        }
    };
    })(document);