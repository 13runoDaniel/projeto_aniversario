AOS.init();

const birthday = new Date('Nov 10, 2024 11:00:00');
const timeStampBirthday = birthday.getTime();

const hourCounter = setInterval(function () {
    const now = new Date();
    const timeStampNow = now.getTime();

    const partyDay = timeStampBirthday - timeStampNow;

    const days = 1000 * 60 * 60 * 24;
    const hours = 1000 * 60 * 60;
    const minutes = 1000 * 60;
    const seconds = 1000;

    const birthdayMoment = Math.floor(partyDay / days);
    const hoursUntilBirthday = Math.floor((partyDay % days) / hours);
    const minutesUntilBirthday = Math.floor((partyDay % hours) / minutes);
    const secondsUntilBirthday = Math.floor((partyDay % minutes) / seconds);

    console.log(birthdayMoment);
    console.log(hoursUntilBirthday);
    console.log(minutesUntilBirthday);
    console.log(secondsUntilBirthday);

    document.getElementById(
        'counter'
    ).innerHTML = `<span class="src__kitty__cats src__kitty__cats--green-color">1</span> Faltam ${birthdayMoment} dias ${hoursUntilBirthday} horas ${minutesUntilBirthday} minutos ${secondsUntilBirthday} segundos. <span class="src__kitty__cats src__kitty__cats--red-color">i</span>`;

    if (partyDay < 0) {
        clearInterval(hourCounter);
        document.getElementById('counter').innerHTML =
            '<span class="src__kitty__cats src__kitty__cats--orange-color">k</span> Obrigado pela participação <span class="src__kitty__cats src__kitty__cats--pink-color">l</span>';
    }
}, 1000);
