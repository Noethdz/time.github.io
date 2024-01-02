function startTime() {

    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;

    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay + ", " + curDay + " " + curMonth + " " + curYear;
    document.getElementById("date").innerHTML = date;

    en = document.getElementById("button");

    if (en.value == "ESP") {
        t2 = 1000;

        var todays = new Date();
        var hr = todays.getHours();
        var min = todays.getMinutes();
        var sec = todays.getSeconds();
        ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
        hr = (hr == 0) ? 12 : hr;
        hr = (hr > 12) ? hr - 12 : hr;
        hr = checkTime(hr);
        min = checkTime(min);
        sec = checkTime(sec);
        document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;

        var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Deciembre'];
        var days = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];

        var curWeekDays = days[todays.getDay()];
        var curDays = todays.getDate();
        var curMonths = months[todays.getMonth()];
        var curYears = todays.getFullYear();
        var dates = curWeekDays + ", " + curDays + " de " + curMonths + " de " + curYears;
        document.getElementById("date").innerHTML = dates;

        var times = setTimeout(function() { startTime() }, t2);

    } else {
        t = 1000;
        var time = setTimeout(function() { startTime() }, t);
    }

}
contarClick = 0;

function cambiarLan() {
    contarClick += 1;

    en = document.getElementById("button");

    if (contarClick % 2 == 1) {

        en.innerHTML = "INGLES";
        en.value = "ESP";
        title = document.getElementById("title");
        title.style.lineHeight = "1.2em";
        title.innerHTML = ">>ESPAÑOL";
        title.setAttribute("data-text", ">>ESPAÑOL");

    } else {

        en.innerHTML = "ESPAÑOL";
        en.value = "INGLES";
        title = document.getElementById("title");
        title.style.lineHeight = "0.9em";
        title.innerHTML = ">>INGLES<<";
        title.setAttribute("data-text", ">>INGLES<<");

    }
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}