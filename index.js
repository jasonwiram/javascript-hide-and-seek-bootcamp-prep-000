function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function increaseRankBy(n) {
  let myList = document.querySelectorAll('ul li')
  for (let i = 0; i < myList.length; i++) {
    let current = parseInt(myList[i].innerHTML)
    myList[i].innerHTML = (current + n).toString();
  }
}

function deepestChild() {
  let nodes = document.getElementById('grand-node').querySelectorAll('div')
  return deepestNode[deep.length-1]
}