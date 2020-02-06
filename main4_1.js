let str = " ";
let zvz = "*";
let rez = "";
let hight = 5;
let weight = (hight * 2);
for (let i = 0; i <= hight; i++) {
    for (let j = 0; j < weight; j++) {
        if (j > hight - i && j < hight + i) {
            rez += zvz;
        } else {
            rez += str;
        }
    }
    rez += "\n";
}
console.log(rez);

