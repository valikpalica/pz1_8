let day = prompt("выбирите номер месяца");

switch (Number(day)) {

    case 1:
        console.log("Январь-зима");
        break;
    case 2:
        console.log("Февраль-зима");
        break;
    case 3:
        console.log("Март-весна");
        break;
    case 4:
        console.log("Апрель-весна");
        break;
    case 5:
        console.log("Май-весна");
        break;
    case 6:
        console.log("Июнь-лето");
        break;
    case 7:
        console.log("Июль-лето");
        break;
    case 8:
        console.log("Август-лето");
        break;
    case 9:
        console.log("Сентябрь-осень");
        break;
    case 10:
        console.log("Октябрь-осень");
        break;
    case 11:
        console.log("Ноябрь-осень");
        break;
    case 12:
        console.log("Декабрь-зима");
        break;
    default:
        console.log("Такого месяца не сушествует");
        break;
}
