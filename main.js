setInterval(() => {
    try {
        if (document.URL.includes("/shorts/")) {
        var video_tag = document.getElementsByTagName("video");
        video_tag[0].setAttribute("controls","controls");
        video_tag[1].setAttribute("controls","controls");
        document.getElementById("progress-bar").remove();
        }
    } catch {} 

}, 1000);
   

setInterval(() => {
    try {
        if (document.URL.includes("/shorts/")) {
        var info = document.createElement("img");
        info.style.cssText = "position:absolute; z-index:1000; width:25px; height:25px; top:15px; left:calc(50% - 25px); cursor:pointer;";
        info.src = "https://img.icons8.com/ios-filled/50/FFFFFF/info.png";
        info.className = "info_button";
        info.onclick = function(event) {
            event.stopPropagation();
            event.preventDefault();
            var titles = document.getElementsByClassName("title style-scope ytd-reel-player-header-renderer");
            for (x=0; x<titles.length; x++) {
                if (titles[x].style.visibility == "hidden") {
                    titles[x].style.visibility = "";
                } else {
                    titles[x].style.visibility = "hidden";
                }
            }
            var original1 = document.getElementsByTagName("ytd-reel-player-overlay-renderer");
            for (x=0; x<original1.length; x++) {
                if (original1[x].style.visibility == "hidden") {
                    original1[x].style.visibility = "";
                } else {
                    original1[x].style.visibility = "hidden";
                }
            }
        }
        var container = document.getElementsByClassName("html5-video-player ytp-hide-controls ytp-exp-bottom-control-flexbox ytp-modern-caption ytp-exp-ppp-update ytp-fit-cover-video ytp-bigboards ytp-hide-info-bar ytp-small-mode playing-mode ytp-autohide")[0];
        var check = false; 
        for (x = 0; x<container.children.length; x++) {
            if (container.children[x].className == "info_button") {
                check = true;
            }
        }
        if (check == false) {
            container.appendChild(info);
            container.addEventListener("mouseover",  ()=>{
                info.style.visibility = "";
            });
            container.addEventListener("mouseout",  ()=>{
                info.style.visibility = "hidden";
            });
            }
        }
    } catch {} 

}, 1000);
   

document.addEventListener("keydown", (e) => {
    if (e.key == "ArrowLeft"){
        document.getElementsByTagName("video")[0].currentTime -= 5;
        document.getElementsByTagName("video")[1].currentTime -= 5;
    }
    if (e.key == "ArrowRight"){
        document.getElementsByTagName("video")[0].currentTime += 5;
        document.getElementsByTagName("video")[1].currentTime += 5;
    } 
})