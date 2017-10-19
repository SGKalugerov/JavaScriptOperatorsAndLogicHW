function checkYear (year) {
  if ((year % 4 === 0 && (year % 100 > 0)) || year % 400 === 0) {
    console.log('leap')
  } else {
    console.log('not leap')
  }
}
checkYear(2000)
