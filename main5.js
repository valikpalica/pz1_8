let numb = 10000;
let result;
let counter;
for (counter = 0; counter < numb; counter++) {
    numb = numb / 2;
    if (numb < 50) {
        console.log(counter + 1);
        console.log(numb);
        break;
    }
}
