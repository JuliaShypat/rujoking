const button = document.querySelector('.myButton');
const jokeDiv = document.querySelector('.joke');

button.addEventListener('click', handleClick);

async function handleClick() {
  const { joke } = await getJoke();
  jokeDiv.textContent = joke;
}

async function getJoke() {
  const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      Accept: 'application/json',
    },
  });
  const data = await response.json();
  return data;
}
