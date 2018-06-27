function getFirstSelector(s) {
  return document.querySelector(s)
}

function nestedTarget() {
  return document.querySelector("#nested .target")
}

function deepestChild() {
  let node = document.getElementById("grand-node")
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}

function increaseRankBy (n) {
  const rankedLists = document.querySelectorAll(".ranked-list")

  for (let a = 0, l = rankedLists.length; a < l; a++) {
    let children = rankedLists[a].children

    for (let b = 0, i = children.length; b < i; b++) {
      children[b].innerHTML = parseInt(children[b].innerHTML) + n
    }
  }
}
