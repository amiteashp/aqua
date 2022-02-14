let topbutton = document.getElementById("topbutton");
    
    window.onscroll = function () {
        if (document.body.scrollTop > 220 || document.documentElement.scrollTop > 220) {
            topbutton.style.opacity = "1";
            topbutton.style.cursor = "pointer";
        } else {
            topbutton.style.opacity = "0";
            topbutton.style.cursor = "initial";
        }
    };

    topbutton.addEventListener("click", function(){
        document.documentElement.scrollTop = 0;
        console.log("Click")
    });