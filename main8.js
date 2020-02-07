

function dat() {
    let number = prompt("укажите число от 1-7");

    switch (Number(number)) {

        case 1:
            alert("Понеділок");
            break;
        case 2:
            alert("Вівторок");
            break;
        case 3:
            alert("Середа");
            break;
        case 4:
            alert("Четвер");
            break;
        case 5:
            alert("Пятниця");
            break;
        case 6:
            alert("Суббота");
            break;
        case 7:
            alert("Неділя");
            break;
        default:
            alert("Такого дня не має");
            dat();
            break;

    }
}

dat();
