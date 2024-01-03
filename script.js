let pass = document.querySelector('.password'),
  lenText = document.getElementById('lentext'),
  len = document.getElementById('len'),
  inputUpperCase = document.getElementById('uppercase'),
  inputLowerCase = document.getElementById('lowercase'),
  inputNumber = document.getElementById('num'),
  inputSpecial = document.getElementById('spec');

const lowercase = 'abcdefghijklmnopqrstuvwxyz',
  numbers = '0123456789',
  special = '!^#+$%½&/{([])}=?*-_£<>@.,;';

const generate = (len, lcase = true, ucase = true, num = true, spec = false) => {
  let chars = '';

  if (lcase) {
      chars += lowercase;
  }

  if (ucase) {
      chars += lowercase.toUpperCase();
  }

  if (num) {
      chars += numbers;
  }

  if (spec) {
      chars += special;
  }

  let result = '';

  if (chars.length > 0) {
      for (let i = 0; i < len; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
  }

  return result;
}

const update = () => pass.innerHTML = generate(len.value, inputLowerCase.checked, inputUpperCase.checked, inputNumber.checked, inputSpecial.checked);

const updateLen = (text) => {
  lenText.innerHTML = '<b>' + text + '</b>';
  update();
}

len.addEventListener('change', () => updateLen(len.value));
len.addEventListener('input', () => updateLen(len.value));
inputLowerCase.addEventListener('change', () => update())
inputUpperCase.addEventListener('change', () => update())
inputNumber.addEventListener('change', () => update())
inputSpecial.addEventListener('change', () => update())

len.value = 16
updateLen(len.value);

pass.innerHTML = generate(16);