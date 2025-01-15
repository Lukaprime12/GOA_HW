for (let i = 1; i <= 20; i++) {
    if (i === 7 || i === 13) {
      continue;
    }
    console.log(i);
  }




for (let i2 = 1; i <= 30; i++) {
    if (i2 % 2 !== 0) {
      continue;
    }
    console.log(i);
    if (i2 % 8 === 0) {
      break;
    }
}


for(let i3 = 1 ; i <= 30 ; i++) {
    if (i3 % 5 == 0){
        continue;
    }
    console.log(i3)
}