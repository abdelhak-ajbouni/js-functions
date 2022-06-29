const fetch = require("node-fetch");

const delay = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));
const retryFetch = (
  url,
  fetchOptions = {},
  retries = 3,
  retryDelay = 1000,
  timeout
) => {
  return new Promise((resolve, reject) => {
    // check for timeout
    if (timeout) {
      setTimeout(() => reject("error: timeout"), timeout);
    }

    const wrapper = (n) => {
      console.log('fetching ...')
      fetch(url, fetchOptions)
        .then((res) => resolve(res))
        .catch(async (err) => {
          if (n > 0) {
            console.log('failed - error: ' + err)
            await delay(retryDelay);
            wrapper(--n);
          } else {
            reject(err);
          }
        });
    };
    wrapper(retries);
  });
};

const url = "https://dog.ceo/api/breeds/image/random"
async function getDog() {
  const response = await retryFetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }, 3, 600)
  return await response.json()
}

getDog()
  .then(response => console.log('retryFetch response =========================', response))
  .catch(error => {
    console.log('failed - final error ==============================================')
    console.log(error)
  })

