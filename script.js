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
    '๐๐๐ฃ๐๐ฆ๐ฃ๐ช',
    '๐ฅ๐ฎ๐ท๐พ๐ผ',
    '๐๐๐ก๐ฃ๐',
    '๐ผ๐ฐ๐๐',
    '๐น๐๐ฟ๐ธ๐๐ด๐',
    '๐ธโโโโโ๐ฆโโโโโ๐นโโโโโ๐บโโโโโ๐ทโโโโโ๐ณโโโโโ',
    'โโกโโโคโข',
    'โฒโฒโฒฃโฒง๐ตโฒโฒ',
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
