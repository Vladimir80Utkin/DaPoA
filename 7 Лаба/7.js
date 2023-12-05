function ChangeBackgroundColor() {
    let currentBackgroundColor = document.body.style.backgroundColor;
    let newBackgroundColor = document.getElementById("backgroundColorValue").value;
    if (currentBackgroundColor == newBackgroundColor ) {
        alert("Данный цвет фона уже установлен!");
    }
    else{document.body.style.backgroundColor = newBackgroundColor;}
    document.getElementById("backgroundColorValue").value = "";
}

function ChangeTextColor() {
    let currentTextColor = document.body.style.color;
    let newTextColor = document.getElementById("textColorValue").value;
    if (currentTextColor == newTextColor ) {
        alert("Данный цвет текста уже установлен!");
    }
    else{document.body.style.color = newTextColor;}
    document.getElementById("textColorValue").value = "";
}

function ChangeLinkValue() {
    let currentLink = document.getElementById("link");
    let newLinkValue = document.getElementById("newLinkValue").value;

    if (currentLink.href == newLinkValue) {
        alert("Данное значение ссылки уже установлено!");
    }
    else {
        currentLink.href = newLinkValue;
        currentLink.textContent = newLinkValue.replace(/https\:\/\//, "");
    }
}