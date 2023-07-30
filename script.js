let input = document.getElementById('display-input');

let button = document.querySelectorAll('button');

let arr = Array.from(button);
let string = "";
arr.forEach(button => {
    button.addEventListener('click', (e) => {

        if (e.target.value == '=') {
            string = eval(string)
            input.value = string
        }
        else if (e.target.value == 'AC') {
            string = "";
            input.value = string;
        } else if (e.target.value == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else {
            string += e.target.value;
            input.value = string;
        }
    })
})