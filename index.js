function getFirstSelector(selector) {
  return document.querySelector(selector)
};


function nestedTarget() {
  return document.querySelector('#nested .target')
};


function deepestChild() {
  let grand = document.getElementById('grand-node')
  //returns tree section beginning with   <div id="grand-node">
  let nextNode = grand.children[0]
  //returns all the divs after div id ="grand-node"

  while(nextNode) {
    grand = nextNode
    nextNode = grand.children[0]
  }
  //keep iterating while divs remain

  return grand
};


function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')
  // returns NodeList

  for (let i = 0, l = rankedLists.length;  i < l; i++) {
    let children = rankedLists[i].children
  //iterate through NodeList to get HTML Collection, iterates based
  //on length of NodeList which in test is 2

  for (let c = 0, d = children.length; c < d; c++) {
    children[c].innerHTML = parseInt(children[c].innerHTML) + n
  // iterate through each HTML Collection (2 collections) to reach innerHTML for list #'s
  // use parseInt to convert to an Integer so can add n
  }
  }
};
