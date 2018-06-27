function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(nested){
  return document.querySelector('.target')
}

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')
    rankedLists.forEach(function(element){
      let children = element.children;
        for (let i = 0; i < children.length; i++){
          children[i].innerHTML = parseInt(children[i].innerHTML) + n;
        }
    })
}


function deepestChild(){
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];
    while(!!nextNode){
      node = nextNode;
      nextNode = node.children[0];
    }
  return node;
}
