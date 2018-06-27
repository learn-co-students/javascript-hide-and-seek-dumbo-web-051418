function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector("#nested .target");
}

function increaseRankBy(n){
  let elements = document.querySelectorAll(".ranked-list");
  for(const element of elements){
    element.innerHTML = parseInt(element.innerHTML) + 1;
  }
}

function deepestChild(){
  const div = document.querySelector("div#grand-node");
  let child = div.children[0];
  while(child.children[0]){
    child = child.children[0];
  }
  return child;
}
