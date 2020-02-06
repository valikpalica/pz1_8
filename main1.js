let i = 0;
do {
    if (i == 0) {
        console.log(i + "-равно нулю");
    } else if (i % 2 == 0) {
        console.log(i + " парне")
    } else if (i % 2 != 0) {
        console.log(i + " не парне")
    }
    i++;
} while (i <= 10);
