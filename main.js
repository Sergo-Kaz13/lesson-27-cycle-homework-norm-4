'use strict'

// ? Зацикли висновок днів тижня таким чином: «День тижня. Хочеш побачити наступний день? » і так до тих пір, поки користувач натискає OK.

const daysOfTheWeek = ['Понеділок', 'Вівторок', 'Середа', 'Четверг', 'Пятниця', 'Субота', 'Неділя'];

finish:
while (true) {
    for (const iterator of daysOfTheWeek) {
        let userChoice = confirm(`${iterator}\nХочеш побачити наступний день?`);
    
        if (!userChoice) {
            break finish;
        }
    }
}
