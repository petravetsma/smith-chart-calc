function susceptance(re, im, resistance, check) {  // Реактивная проводимость
  if (check) {
    return ( -2 * im ) / ( (1 + re) ** 2 + im ** 2) * resistance ;
  }
  return ( -2 * im ) / ( (1 + re) ** 2 + im ** 2) / resistance ;
}

function conductance(re, im, resistance, check) {  // Активная проводимость
  if (check) {
    return (1 - re ** 2 - im ** 2) / ( (1 + re ) ** 2 + im ** 2 ) * resistance ;
  }
  return (1 - re ** 2 - im ** 2) / ( (1 + re ) ** 2 + im ** 2 ) / resistance ;
}

let rRem = document.getElementById('r-rem');
let rIm = document.getElementById('r-im');
let rR = document.getElementById('r-r');
let rCheck = document.getElementById('r-check');
let rBtn = document.getElementsByClassName('r-btn');

let aRem = document.getElementById('a-rem');
let aIm = document.getElementById('a-im');
let aR = document.getElementById('a-r');
let aCheck = document.getElementById('a-check');
let aBtn = document.getElementsByClassName('a-btn');


function showSusceptance() {
  rem = +rRem.value;
  im = +rIm.value;
  r = +rR.value;
  check = rCheck.checked;
  alert(susceptance(rem, im, r, check));
}

function showConductance() {
  rem = +aRem.value;
  im = +aIm.value;
  r = +aR.value;
  check = aCheck.checked;
  alert(conductance(rem, im, r, check));
}

