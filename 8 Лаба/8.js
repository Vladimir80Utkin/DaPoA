function BlackBGVersion() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}
function WhiteBGVersion() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}
function BlueBGVersion() {
    document.body.style.backgroundColor = "blue";
    document.body.style.color = "red";
}
function HideOrUnhideImages() {
    let images = document.getElementsByTagName('img');
    for(let i = 0; i < images.length; i++) {
        if (images[i].style.display === 'none') {
            images[i].style.display = '';
        } 
        else {
            images[i].style.display = 'none';
        }
    }
}
function FontSize18() {
    let p = document.getElementById('par');
    p.style.fontSize = '18px';
}
function FontSize20() {
    let p = document.getElementById('par');
    p.style.fontSize = '20px';
}
function FontSize22() {
    let p = document.getElementById('par');
    p.style.fontSize = '22px';
}
