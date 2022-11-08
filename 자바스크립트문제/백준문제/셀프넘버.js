
function isSelf(n) {
    let number = n;
    let result = 0;

    for (let i = 0; i < String(n).length; i++) {
        result += number % 10;
        number = Math.trunc(number / 10);
    }
    return n + result;
}

function solution(){
    let selfNumbers = Array(10001).fill(false);

    for (let i = 1; i <= 10000; i++) {
        selfNumbers[isSelf(i)] = true;
    }
    
    for (let i = 1; i <= 10000; i++) {
        if (!selfNumbers[i]) {
            console.log(i);
        }
    }
}

solution()