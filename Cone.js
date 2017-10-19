function calcVolume (r, h) {
  let l = Math.sqrt(r ** 2 + h ** 2)
  let area = Math.PI * r * (r + l)
  let b = Math.PI * (r ** 2)
  let volume = (b * h) / 3

  console.log(volume)
  console.log(area)
}
calcVolume(3, 5)
