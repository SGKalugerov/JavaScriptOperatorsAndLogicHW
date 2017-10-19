function identFood (food) {
  let fruit = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach']
  let vegetable = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley']
  if (fruit.indexOf(food) !== -1) {
    console.log('fruit')
  } else if (vegetable.indexOf(food) !== -1) {
    console.log('vegetable')
  } else {
    console.log('unknown')
  }
}

identFood('kiwi')
