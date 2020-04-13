// format integers
function formatInt(num) {
  num = num.toString();

  const numArr = num.split('');

  for (let i = numArr.length; i > 0; i--) {

    if (i % 3 === 0 && i !== numArr.length) {
      numArr.splice(-i, 0, ',');
    }
  }
  return numArr.join('');
}

//format integers and decimals
function formatNumber(num) {

  num = num.toString();

  if (num.indexOf('.') !== -1) {

    //split into decimal and integer parts
    const numInt = num.split('.')[0];
    const numDec = num.split('.')[1];

    //format the integer part
    const numIntFormatted = formatInt(numInt);

    //return integer plus decimal part
    return numIntFormatted + '.' + numDec;

  } else {
    return formatInt(num);
  }

}

// console.log(formatNumber(1000));
// console.log(formatNumber(100000));
// console.log(formatNumber(1000000));
// console.log(formatNumber(123456.78));


//select button element
let btn = document.getElementsByTagName('button')[0];
let input = document.getElementById('number');

input.addEventListener('click', () => {
  document.getElementsByTagName('input')[0].value = '';
});

//bind click event to button

btn.addEventListener('click', () => {

  let val = document.getElementsByTagName('input')[0].value;

  // select input value
  let formatNum = formatNumber(val);

  let li = document.createElement('li');

  li.textContent = formatNum;

  document.getElementById('numList').appendChild(li);

});