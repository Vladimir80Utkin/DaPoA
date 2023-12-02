// Дана последовательность N целых чисел. Вычислить произведение только положительных и только отрицательных элементов. Сравнить произведения 
// по модулю. Вывести наибольший.

let numbersArray = [];
function addNumber() {
    const numberInput = document.getElementById("numberInput");

    const inputValue = parseFloat(numberInput.value);

    if (!isNaN(inputValue)) {
        numbersArray.push(inputValue);
        numberInput.value = "";
        displayNumbers();
    } else {
        alert("Введите корректное число!");
    }
}

function showResult() {
    let pos_numbersArray = [];
    let neg_numbersArray = [];

    for (let i = 0; i < numbersArray.length; i++) {
        if (numbersArray[i] > 0) {
            pos_numbersArray.push(numbersArray[i]);
        }
        else if (numbersArray[i] < 0) {
            neg_numbersArray.push(numbersArray[i]);
        }
    }

    let prod_of_pos_numbers = 1;
    let prod_of_neg_numbers = 1;

    for (let i = 0; i < pos_numbersArray.length; i++) {
        prod_of_pos_numbers *= pos_numbersArray[i];
    }
    for(let i = 0; i < neg_numbersArray.length; i++) {
        prod_of_neg_numbers *= neg_numbersArray[i];
    }
    alert(pos_numbersArray.length + "\n" + neg_numbersArray.length);

    if ((neg_numbersArray.length === 0 && pos_numbersArray.length > 0) || (Math.abs(prod_of_neg_numbers) < prod_of_pos_numbers && pos_numbersArray.length > 0)) {
        alert("Текущий массив: " + numbersArray.join(", ") +
            "\nПроизведение положительных чисел наибольшее: " + prod_of_pos_numbers);
    } 
    else if ((pos_numbersArray.length === 0 && neg_numbersArray.length > 0) || (Math.abs(prod_of_neg_numbers) > prod_of_pos_numbers && neg_numbersArray.length > 0)) {
        alert("Текущий массив: " + numbersArray.join(", ") +
            "\nПроизведение отрицательных чисел наибольшее: " + prod_of_neg_numbers);
    }
    else {
        alert("Текущий массив: " + numbersArray.join(", ") +
            "\nПроизведения равны");
    }
}