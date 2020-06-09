import { timelineItems } from './timelineItems';
import LinkedList from './LinkedList.js';

class Items {
  constructor(){
    this.linkedLists = this.setSortedNodes();
    this.matrix = [];
  }

  setSortedNodes() {
    let arrayOfLinkedLists = []
    let succesfullyAdded;
    for (let i = 0; i < timelineItems.length; i++) {
      let j = 0
      succesfullyAdded = false
      while( !succesfullyAdded) {
        if (!arrayOfLinkedLists[j]) {
          arrayOfLinkedLists.push(new LinkedList())
        }

        let linkedList = arrayOfLinkedLists[j]
        succesfullyAdded = linkedList.insert(timelineItems[i])
        j++
      }
    }
    return arrayOfLinkedLists
  }

  getSortedItems(){
    let arrayOfItems = []
    this.linkedLists.forEach((linkedList) => {
      let node = linkedList.head
      while (node) {
        arrayOfItems.push(node.item)
        node = node.next
      }
    })
    return arrayOfItems
  }
}

export default Items
