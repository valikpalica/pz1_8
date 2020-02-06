let i = 0;
while (i < 100) {
    if (i == 0 || i == 1) {
        console.log(i);
        i++;
        continue;
    }
    let j = 2;
    while (j < 100) {
        if (i % j == 0) {
            break;
        }

        j++;
    }
    if (i == j) console.log(i);

    i++;
}
