// Define a function getFirstSelector(selector), which accepts a selector and returns the first element that matches.

// Define a function nestedTarget() that pulls a .target out of #nested (# is used for IDs in selectors — but you knew that because you read the docs, right? :) ). (Note that in index.html #nested and .target just happen to be divs. This method should work with arbitrary elements.)

// Define a function increaseRankBy(n) that increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()

// Define a function deepestChild() that pulls out the most deeply nested child from div#grand-node. (Remember, you can iterate over elements and call querySelector() and querySelectorAll() on them. This is challenging to implement correctly, but not beyond your ability!)

// HINT 1: Your solution for deepestChild() does not need to be totally generic; we don't expect it to work in every case. For example, we know that div#grand-node has only one node at each level — for this lab, you can solve for that case, and not worry about a case where there are sibling nodes.

// HINT 2: Remember learning about breadth-first search? A similar technique might come in handy here.

const getFirstSelector = (selector) => document.querySelector(selector)

// const nestedTarget = (outter, inner) => document.querySelector(`#${outter} .${inner}`)
const nestedTarget = () => document.querySelector('#nested .target')

const increaseRankBy = (n) => {
  const nToInt = parseInt(n)
  const rankedListRanks = document.querySelectorAll(`.ranked-list li`)
  rankedListRanks.forEach(rank => rank.innerText = parseInt(rank.innerText) + n)
}

const deepestChild = () => {
  const grandNode = document.querySelector(`#grand-node`)

  const retrieveChild = (parent)=>{
    if (parent.children.length > 0) {
      // console.log('iterating through new child with parent:')
      // console.log(parent.children[0])
      return retrieveChild(parent.children[0])
    }else{
      console.log(parent)
      return parent
    }
  }

  return retrieveChild(grandNode)

}
