function getFirstSelector(selector){
  return  document.querySelector(selector)
}


function nestedTarget(target){
  return document.querySelector('#nested .target')
}


function increaseRankBy(n){
 
  const rankedLists = document.querySelectorAll('.ranked-list')

    for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  } 
  
}


function deepestChild() {
  // sets the node of choice
  let node = document.getElementById('grand-node')
  // calls its children property for the first element
  let nextNode = node.children[0]

  // create an iterator that runs down the tree to the very node, like dominoes or a stair case
  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }
  
  // this will return the node at the very bottom of the tree.
  return node
}