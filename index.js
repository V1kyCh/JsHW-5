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