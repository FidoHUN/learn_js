const button = document.getElementById('button');
button.addEventListener('click', getJokes);

function getJokes() {
  const howMany = Number(document.getElementById('input').value);
  const controller = new Controller();

  if (isNaN(howMany) || howMany <= 0 || howMany === '') {
    document.getElementById('error').innerHTML = 'The input data is wrong!';
    document.getElementById('error').classList.add('error');
    setTimeout(function () {
      document.getElementById('error').innerHTML = '';
    }, 3000);
  } else {
    const result = controller
      .get(`https://api.icndb.com/jokes/random/${howMany}`)
      .then((data) => data)
      .catch((err) => err);

    let output = '';

    result.then((res) => {
      if (res.type === 'success') {
        res.value.forEach((element) => {
          output += `<li>${element.joke}</li>`;
        });
        document.getElementById('jokes').innerHTML = output;
      } else {
        document.getElementById('error').innerHTML =
          'Something went wrong... :(';
        document.getElementById('error').classList.add('error');
        setTimeout(function () {
          document.getElementById('error').innerHTML = '';
        }, 3000);
      }
    });
  }
}
