//////
let min = document.getElementById('min');
let sec = document.getElementById('sec');
let milsec = document.getElementById('milsec');
let countmilsec = 0;
let countsec = 0;
let countmin = 0;
let intervalID;

let btnstart = document.getElementById('start');
btnstart.addEventListener('click', function () {
  intervalID = setInterval(function () {
    countmilsec = countmilsec + 1;

    milsec.textContent = countmilsec;
    if (countmilsec == 60) {
      countsec = +countsec + 1;
      countmilsec = 0;
      if (countsec < 10) {
        countsec = '0' + countsec;
        sec.textContent = countsec;
      }

      sec.textContent = countsec;
    }

    if (countsec == 60) {
      countmin = countmin + 1;
      countsec = 0;

      min.textContent = countmin;
    }
  }, 1000 / 60);
});

let btnstop = document.getElementById('stop');
btnstop.addEventListener('click', function () {
  clearInterval(intervalID);
});

let btnreset = document.getElementById('reset');
btnreset.addEventListener('click', function () {
  clearInterval(intervalID);

  countmilsec = 0;
  countsec = 0;
  countmin = 0;
  milsec.innerText = '00';
  sec.innerText = '00';
  min.innerText = '00';
});
