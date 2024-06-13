const chooseDrink = prompt("Оберіть що ви хочете пити: чай, кава, сік?");
const selectDrink = chooseDrink.toLowerCase();
switch (selectDrink) {
  case "кава":
    alert("Ви обрали каву");
    break;

  case "чай":
    alert("Ви обрали чай");
    break;

  case "сік":
    alert("Ви обрали сік");
    break;
}

const chooseDay = prompt("Введіть день тижня:");
const selectDay = chooseDay.toLowerCase();
switch (selectDay) {
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "п'ятниця": {
        alert("Це робочий день тижня");
        break;
    }

    case 'субота':
    case 'неділя': {
        alert('Це вихідний')
        break;
    }

    default:
        alert("Це не день тижня");
        break;
}

const chooseMounth = prompt("Оберіть місяць:");
const selectMounth = chooseMounth.toLowerCase();
switch (selectMounth) {
  case "грудень":
  case "січень":
  case "лютий":
    alert("Цей місяць входить в пору року зима");
    break;

  case "березень":
  case "квітень":
  case "травень":
    alert("Цей місяць входить в пору року весна");
    break;

  case "червень":
  case "липень":
  case "серпень":
    alert("Цей місяць входить в пору року літо");
    break;

  case "вересень":
  case "жовтень":
  case "листопад":
    alert("Цей місяць входить в пору року осінь");
    break;

  default:
    alert("Такого місяця не існує");
}

const pickMounth = prompt("Оберіть місяць:");
const pickedMounth = pickMounth.toLowerCase();
switch (pickedMounth) {
    case 'червень':
    case 'квітень':
    case 'вересень':
    case 'листопад':
        alert('У цьому місяці 30 днів');
        break;

    case 'січень':
    case 'березень':
    case 'травень':
    case 'липень':
    case 'серпень':
    case 'жовтень':
    case 'грудень':
        alert('У цьому місяці 31 день')
        break;

    case 'лютий':
        alert('Єдиний місяць, що налічує 28 днів у звичайні роки і 29 днів у високосні.')

    default:
        alert("Такого місяця не існує");
}

const chooseColor = prompt("Оберіть колір:");
const selectColor = chooseColor.toLowerCase();
switch (selectColor) {
    case "червоний":
        alert("Стояти!");
        break;

    case "зелений":
        alert("Йди!");
        break;

    case "жовтий":
        alert("Чекати...");
        break;

    default:
        alert("Для інших кольорів не знаю дій");
        break;
}

const chooseNumber1 = prompt("Оберіть перше число:");
const chooseNumber2 = prompt("Оберіть друге число:");
const chooseAction = prompt("Оберіть дію над числами (ви також можете поділити на 0): +, -, *, /");
const number1 = Number(chooseNumber1);
const number2 = Number(chooseNumber2);
let action;
switch (chooseAction) {
    case "+":
        action = number1 + number2;
        alert(`Сума чисел = ${action}`);
        break;

    case "-":
        action = number1 - number2;
        alert(`Віднімання чисел = ${action}`);
        break;

    case "*":
        action = number1 * number2;
        alert(`Множення чисел = ${action}`);
        break;

    case "/":
        action = number1 / number2;
        alert(`Ділення чисел = ${action}`);
        break;

    default:
        alert("Ви неправильно обрали(");
        break;
}