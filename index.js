const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const newArray = tutorials.map(toTitleCase)
  return newArray
}

const toTitleCase = function(element) {
  let newString = ``;
  for (let i = 0; i < element.length; i++) {
    if (i === 0 || (element.charAt(i-1) === ` ` && element.charAt(i).toUpperCase() !== element.charAt(i).toLowerCase())) {
      newString+= element.charAt(i).toUpperCase();
    } else {
      newString+= element.charAt(i);
    }
  }
  return newString;
}
