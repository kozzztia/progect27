let div = document.querySelector('.div');
let push = document.querySelector('.push');
let input = document.querySelector('.input');
let cityName = document.querySelector('.cityName');
let price = document.querySelector('.price');
let clouds = document.querySelector('.clouds');
let icon = document.querySelector('.icon');

push.onclick = function () {
    let town = input.value;
    console.log(town)
    fetch(`http:/api.openweathermap.org/data/2.5/weather?q=${town},ua&appid=b10a1709279e52171ae6535fa8b02312`)
        .then(function (resp) { return resp.json() })
        .then(function (data) {
            console.log(data);
            cityName.innerHTML = data.name;
            price.innerHTML = `temperature = ${data.main.temp.toPrecision(2) - 273} &deg`;
            clouds.textContent = `weather = ${data.weather[0].description}`;
            let iconNumber = data.weather[0].icon;
            console.log(iconNumber)
            icon.innerHTML = `<img src = https:/openweathermap.org/img/wn/${iconNumber}@2x.png alt = "img">`;

        })
        .catch(function () {

        });
}
