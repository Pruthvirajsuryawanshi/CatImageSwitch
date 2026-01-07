function switchOff() {
    document.getElementById("switchOff").style.backgroundColor = "red";
    document.getElementById("switchOn").style.backgroundColor = "green"
    document.getElementById("switchOff").textContent = "Swithched Off"
    document.getElementById("switchOn").textContent = "Swithch On"
    document.getElementById("bulb-go-on-img").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png"
    document.getElementById("catImage").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png"

}

function switchOn() {
    document.getElementById("switchOn").style.backgroundColor = "green"
    document.getElementById("switchOff").style.backgroundColor = "red";
    document.getElementById("switchOff").textContent = "Swithch Off"
    document.getElementById("switchOn").textContent = "Swithched On"
    document.getElementById("bulb-go-on-img").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png"
    document.getElementById("catImage").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
}