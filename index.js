function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('div#nested .target')
}

function increaseRankBy(n) {
  var nodeList = document.getElementById('app').querySelectorAll('ul.ranked-list li')
  for (var i = 0; i < nodeList.length; i++) {
    nodeList[i].innerHTML = (parseInt(nodeList[i].innerHTML) + n).toString()
  }
  return nodeList
}

function deepestChild() {
 //return document.querySelector('div#grand-node div div div div')
 var nodeList = document.querySelectorAll('div#grand-node')
 while (true) {
   if (nodeList.hasChildNodes) {
     nodeList = nodeList[0].firstElementChild
   } else {
     return nodeList
   }
 }
}