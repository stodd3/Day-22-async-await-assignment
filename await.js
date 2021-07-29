async function holdUp() {
  await new Promise(resolve => setTimeout(resolve, 500));

  return Math.round(Math.floor(Math.random() * (10 - 1 + 1) + 1));
}

function getRandomNumber() {
  // shows random number after 1/2 second
  holdUp().then(result => console.log(result));
}

getRandomNumber();
