import { timelineItems } from './timelineItems';
import LinkedList from './LinkedList.js';

class Items {
  static orgnanizeItems() {
    let matrix = [];
    let succesfullyAdded;
    for (let i = 0; i < timelineItems.length; i++) {
      let j = 0
      succesfullyAdded = false
      while( !succesfullyAdded) {
        if (!matrix[j]) { matrix.push(new LinkedList()) }
        let linkedList = matrix[j]
        succesfullyAdded = linkedList.insert(timelineItems[i])
        j++
      }
    }
    return matrix
  }
}

export default Items
