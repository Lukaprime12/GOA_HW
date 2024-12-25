let width = 8;
let height = prompt('Put any number from 1 to 100: ');
if (height < 1) {
    alert('Put number with value more than one');
}

else if (height > 100) {
    alert('less than 100');
}

console.log('Your rectangles area is' , width * height , 'cm');
alert('Your rectangles area is' , width * height , 'cm')