var getFirstSelector = function(selector) {
  return document.querySelector(selector)
}

var nestedTarget = function() {
 return document.querySelector('div.target')
}


var increaseRankBy = function(n) {
  var list = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < list.length; i++) {

    list[i].innerHTML = (parseInt(list[i].innerHTML, 10) + n).toString()
  }
}

var deepestChild = function() {
  var list = document.getElementById('app').querySelector('div.grand-node')
console.log(list)
}
