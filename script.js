function susceptance(re, im, resistance) {  // Реактивная полная проводимость
  return ( -2 * im ) / ( (1 + re) ** 2 + im ** 2) / resistance ;
}

function conductance(re, im, resistance) {  // Активная полная проводимость
  return (1 - re ** 2 - im ** 2) / ( (1 + re ) ** 2 + im ** 2 ) / resistance ;
}

let rRem = document.getElementById('r-rem');
let rIm = document.getElementById('r-im');
let rR = document.getElementById('r-r');
let rBtn = document.getElementsByClassName('r-btn');

let aRem = document.getElementById('a-rem');
let aIm = document.getElementById('a-im');
let aR = document.getElementById('a-r');
let aBtn = document.getElementsByClassName('a-btn');


function showSusceptance() {
  rem = +rRem.value;
  im = +rIm.value;
  r = +rR.value;
  alert(susceptance(rem, im, r));
}

function showConductance() {
  rem = +aRem.value;
  im = +aIm.value;
  r = +aR.value;
  alert(conductance(rem, im, r));
}

