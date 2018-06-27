function getFirstSelector(selector) {
  return document.querySelector(`${selector}`)
};

function nestedTarget() {
  const nested = document.getElementById('nested')
  return nested.getElementsByClassName('target')[0]
};

function deepestChild() {
  const gNode = document.getElementById('grand-node')
  const els = gNode.getElementsByTagName('div')
  const l = els.length-1
  return els[l]
};

function increaseRankBy(n) {
  const rankList = document.getElementsByClassName('ranked-list')
  const firstChildren = rankList[0].children
  const secondChildren = rankList[1].children
  increaseRankLoop(firstChildren, n)
  increaseRankLoop(secondChildren, n)
};

function increaseRankLoop(array, n) {
  for (let i = 0; i < array.length; i++) {
    array[i].innerHTML = Number(array[i].innerHTML) + n
  }
};
