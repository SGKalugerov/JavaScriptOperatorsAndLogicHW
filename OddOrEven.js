function isOdd (num) {
  if (Math.floor(num) !== num) {
    console.log('INVALID')
  } else {
    if (num % 2 > 0) {
      console.log('odd')
    } else {
      console.log('even')
    }
  }
}
isOdd(58.234)
