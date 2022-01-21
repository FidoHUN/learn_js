// re = /^[A-Z][a-z]{2,10}$/;
// str = 'Frigyeslalal';
// re = /^[0-9]{4}$/;
// str = '6763';
// re = /^06[2357]0[0-9]{7}$/;
// str = '06303667338';
// re = /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/;
// str = 'vass.frigyes@gmail.com';
// result = re.test(str);
// console.log(result);

const validateName = function () {
  const nameInputValue = document.getElementById('name').value;
  let re = /^[A-Z][a-z]{2,10}$/;
  if (!re.test(nameInputValue)) {
    document.getElementById('name').classList.add('bad');
  } else {
    document.getElementById('name').classList.add('good');
  }
};

const validateEmail = function () {
  const emailInputValue = document.getElementById('email').value;
  let re = /^([a-z0-9_\-\.]+)@([a-z0-9_\-\.]+)\.([a-z]{2,5})$/;
  if (!re.test(emailInputValue)) {
    document.getElementById('email').classList.add('bad');
  } else {
    document.getElementById('email').classList.add('good');
  }
};

const validateZipcode = function () {
  const zipcodeInputValue = document.getElementById('zipcode').value;
  let re = /^[0-9]{4}$/;
  if (!re.test(zipcodeInputValue)) {
    document.getElementById('zipcode').classList.add('bad');
  } else {
    document.getElementById('zipcode').classList.add('good');
  }
};
const validatePhone = function () {
  const phoneInputValue = document.getElementById('phone').value;
  let re = /^06[2357]0[0-9]{7}$/;
  if (!re.test(phoneInputValue)) {
    document.getElementById('phone').classList.add('bad');
  } else {
    document.getElementById('phone').classList.add('good');
  }
};

document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('zipcode').addEventListener('blur', validateZipcode);
document.getElementById('phone').addEventListener('blur', validatePhone);
