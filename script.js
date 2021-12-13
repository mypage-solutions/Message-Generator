const randomNumber = (num) => {
  return Math.floor(Math.random() * num);
};

const object = {
  colors: ['red', 'green', 'yellow', 'black', 'white', 'purple', 'orange'],
  fortunes: [
    'You will become very rich!',
    'You will fall into a big hole!',
    'You will find a worm in your next apple!',
    'You will lose your umbrella!',
    'You will dig up some treasure at the beach!',
    'You will turn into a newt!',
    'You will get no homework tomorrow!',
    'You will get eaten by a dragon!',
  ],
  planets: [
    '𝕄𝕖𝕣𝕔𝕦𝕣𝕪',
    '𝓥𝓮𝓷𝓾𝓼',
    '🅔🅐🅡🅣🅗',
    '🄼🄰🅁🅂',
    '🅹🆄🅿🅸🆃🅴🆁',
    '🇸​​​​​🇦​​​​​🇹​​​​​🇺​​​​​🇷​​​​​🇳​​​​​',
    'Ⓤⓡⓐⓝⓤⓢ',
    'Ⲛⲉⲣⲧ𐌵ⲛⲉ',
  ],
};

const arr = [];

for (const key in object) {
  randomValue = randomNumber(object[key].length);

  switch (key) {
    case 'colors':
      arr.push(`Your color is ${object.colors[randomNumber(randomValue)]}.`);
      break;
    case 'fortunes':
      arr.push(object.fortunes[randomNumber(randomValue)]);
      break;
    case 'planets':
      arr.push(`Your sign is ${object.planets[randomNumber(randomValue)]}.`);
      break;
    default:
      arr.push(`:)`);
      break;
  }
}

const format = (value) => {
  console.log(arr.join('\n'));
};

format(arr);
