const input = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const resultHolder = document.getElementById('result-holder');
const clearBtn = document.getElementById('clear-btn');

const formats = [
  /^\d{3}[\s-]?\d{3}[\s-]?\d{4}$/,
  /^\(\d{3}\)[\s-]?\d{3}[\s-]?\d{4}$/,
  /^1[\s-]?\d{3}[\s-]?\d{4}$/,
  /^1[\s]?\(\d{3}\)[\s-]?\d{3}[\s-]?\d{4}$/,
]

const resulting = (bol, text) => {
  return bol ? `<div id="results-div" style="color: rgb(62, 255, 62);">Valid US Number: ${text}</div>` :
  `<div id="results-div" style="color: rgb(255, 65, 65);">Invalid US Number: ${text}</div>`;
}

const checking = (event) => {
  event.preventDefault();
  const number = input.value;
  const filtered = number.replace(/\s+/g, ' ').trim();
  const nakedNumber = number.replace(/\D+/g, '');

  if(!filtered || filtered == ' ') {
    alert("Please provide a phone number");
  } else {
    if(nakedNumber.length == 10) {
      resultHolder.insertAdjacentHTML('afterbegin', resulting(formats[0].test(filtered) || formats[1].test(filtered), filtered));
    } else if(nakedNumber.length == 11) {
      resultHolder.insertAdjacentHTML('afterbegin', resulting(formats[2].test(filtered) || formats[3].test(filtered), filtered));
    } else {
      resultHolder.insertAdjacentHTML('afterbegin', resulting(false, filtered));
    }
  }
}

const clearing = () => {
  resultHolder.innerHTML = "";
}

clearBtn.addEventListener('click', clearing);
checkBtn.addEventListener('click', checking);
