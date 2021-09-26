var wine = 99
var word = 'bottles'

while (wine >= 1) {
  if (wine === 1) {
    word = 'bottle'
    console.log(wine + ' ' + word + ' of beer on the wall. ')
    console.log(+wine + ' ' + word + ' of beer.')
    console.log('Take one down and pass it around, ')
    console.log(+wine + ' ' + word + ' of beer on the wall.\n')
  }
  console.log(wine + ' ' + word + ' of beer on the wall, ')
  console.log(+wine + ' ' + word + ' of beer.')
  wine -= 1
  console.log('Take one down and pass it around')
    console.log(+wine + ' ' + word + ' of beer on the wall.')
    console.log("================================")

}
console.log('No more bottles of beer on the wall, no more bottles of beer.')
console.log('Go to the store and buy some more, 99 bottles of beer on the wall')
