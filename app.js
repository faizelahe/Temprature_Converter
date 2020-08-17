const dropBtn = document.querySelector('.dropbtn');
const convertBtn = document.querySelector('.convertbtn');
const hiddenItems = document.querySelector('.output');
const output = document.querySelector('#tempratureOutput');
const selected = document.querySelector('.dropdown-content');
const input = document.querySelector('#tempratureInput');

dropBtn.addEventListener('click', dropdown);
selected.addEventListener('click', changeBtnValue);
convertBtn.addEventListener('click', function () {
    if (input.value === '') {
        alert('Please Enter The Temprature');
    } else if (dropBtn.textContent === 'Unit') {
        alert('Please Select A Unit Temprature');
    } else {
        hiddenItems.style.display = 'block';
        if (dropBtn.textContent === 'Fahrenheit (ºF)') {
            output.textContent = `Converted Temprature: ${Math.round((Number(input.value) - 32) * (5 / 9))}ºC`
        } else if (dropBtn.textContent === 'Celcius (ºC)') {
            output.textContent = `Converted Temprature: ${Math.round((Number(input.value) * 9 / 5) + 32)}ºF`
        }
    }

    setTimeout(displayNone, 4000)
});

function dropdown(e) {
    document.getElementById("myDropdown").classList.toggle("show");
};

window.onclick = function () {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            };
        };
    };
};

function changeBtnValue(e) {
    dropBtn.textContent = e.target.textContent
};

function displayNone() {
    hiddenItems.style.display = 'none';
}