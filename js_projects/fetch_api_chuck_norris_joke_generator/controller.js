class Controller {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'GET',
        // headers: {
        //   'Content-type': 'application/json',
        // },
        //body: JSON.stringify(data)
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }
}
