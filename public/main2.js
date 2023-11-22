var digitSegments = [
    [1, 2, 3, 4, 5, 6],
    [2, 3],
    [1, 2, 7, 5, 4],
    [1, 2, 7, 3, 4],
    [6, 7, 2, 3],
    [1, 6, 7, 3, 4],
    [1, 6, 5, 4, 3, 7],
    [1, 2, 3],
    [1, 2, 3, 4, 5, 6, 7],
    [1, 2, 4, 7, 3, 6]
]
var setNumber = function (digit, number, on) {
    var segments = digit.querySelectorAll('.segment');
    var current = parseInt(digit.getAttribute('data-value'));

    // only switch if number has changed or wasn't set
    if (!isNaN(current) && current != number) {
        // unset previous number
        digitSegments[current].forEach(function (digitSegment, index) {
            setTimeout(function () {
                segments[digitSegment - 1].classList.remove('on');
            }, index * 45)
        });
    }

    if (isNaN(current) || current != number) {
        // set new number after
        setTimeout(function () {
            digitSegments[number].forEach(function (digitSegment, index) {
                setTimeout(function () {
                    segments[digitSegment - 1].classList.add('on');
                }, index * 45)
            });
        }, 250);
        digit.setAttribute('data-value', number);
    }
}
var Countdown = {
    target_date: new Date("2024-01-15 08:30:00").getTime(), // Target date: January 15, 2024

    init: function () {
        var seconds_remaining = Math.max(Math.floor((this.target_date - new Date().getTime()) / 1000), 0);
        var day_remaining = Math.floor(seconds_remaining / (24 * 3600));

        console.log("seconds_remaining=", seconds_remaining)
        var _hours = document.querySelectorAll('.hours');
        var _minutes = document.querySelectorAll('.minutes');
        var _seconds = document.querySelectorAll('.seconds');

        setInterval(function () {
            var date = new Date();
            var hours = day_remaining, minutes = date.getMinutes(), seconds = date.getSeconds();

            setNumber(_hours[0], Math.floor(hours / 10), 1);
            setNumber(_hours[1], hours % 10, 1);

            setNumber(_minutes[0], Math.floor(minutes / 10), 1);
            setNumber(_minutes[1], minutes % 10, 1);

            setNumber(_seconds[0], Math.floor(seconds / 10), 1);
            setNumber(_seconds[1], seconds % 10, 1);
        }, 1000);
    }
}

// Let's go !
Countdown.init();