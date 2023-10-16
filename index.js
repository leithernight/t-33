let arr = [];
const num = 10;

function randomElements(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        let max = 50;
        arr[i] = Math.floor(Math.random() * max);
    }
    return arr;
}

//1

function print(arr, num) {
    let ans = document.querySelector('.ans1');
    let txt = '';
    for (let i = 0; i < num; i++) {
        txt += arr[i] + ' ';
    }
    ans.innerHTML = txt;
}

//2

function printOdd(arr, num) {
    let ans = document.querySelector('.ans2');
    let txt = '';
    for (let i = 0; i < num; i++) {
        if (arr[i] % 2 == 0) {
            txt += arr[i] + ' ';
        }
    }
    ans.innerHTML = txt;
}

//3

function sum(arr, num) {
    let ans = document.querySelector('.ans3');
    let sum = 0;
    for (let i = 0; i < num; i++) {
        sum += arr[i];
    }
    ans.innerHTML = sum;
}

//4

function max(arr, num) {
    let ans = document.querySelector('.ans4');
    let max = 0;
    for (let i = 0; i < num; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    ans.innerHTML = max;
}


//buttons

document.querySelector('.bmain').onclick = () => {
    arr = randomElements(num);
    document.querySelector('.ansmain').innerHTML = '<br><br>Массив сгенерирован'
    document.querySelectorAll('.ans').forEach((item) => {
        item.innerHTML = '';
    });
}

document.querySelector('.b1').onclick = () => {
    print(arr, num);
}

document.querySelector('.b2').onclick = () => {
    printOdd(arr, num);
}

document.querySelector('.b3').onclick = () => {
    sum(arr, num);
}

document.querySelector('.b4').onclick = () => {
    max(arr, num);
}