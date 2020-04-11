let release = Date.parse('04/18/2020 15:00:00 EST');
let reveal = Date.parse('11 Apr 2020 14:00:00 EST');
let date = "APRIL 18th 2020";

if (now >= reveal && now <= release) {
    document.getElementById('post').hidden = true; // hide the post if it's past the reveal date
    document.getElementById('og').hidden = true;

    document.getElementById('date').textContent = date;

    document.getElementById('timer').hidden = false;
    document.getElementById('date-reveal').hidden = false;

    setInterval(() => {
        let now = Date.now();

        if (now >= release) {
            return;
        }


        let distance = release - now;

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);


        let timerText = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

        document.getElementById('timer-text').textContent = timerText;
    }, 250, 1000);
}