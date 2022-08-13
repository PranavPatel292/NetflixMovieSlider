let head = null;
let tempNode = null;

class Node {
  constructor(val) {
    this.data = val;
    this.next = null;
    this.prev = null;
  }
}

const insert = (val, currentIndex, limit) => {
  let newNode = new Node(val);

  // if the link list is empty
  if (head === null) {
    head = newNode;
    tempNode = head;
  }

  // if the index is not the last index
  else if (currentIndex !== limit) {
    tempNode.next = newNode;
    newNode.prev = tempNode;
    tempNode = tempNode.next;
  }

  // if index is last index
  else if (currentIndex === limit) {
    tempNode.next = newNode;
    newNode.next = head;
    newNode.prev = tempNode;
    head.prev = newNode;
  }
};

const makeLinkList = (array) => {
  array.forEach((element, index) => {
    insert(element, array.length - 1, index);
  });

  return head;
};

const getNextNNode = (node, noOfEle) => {
  let temp = [];
  while (noOfEle !== 0) {
    temp.push(node.data);
    node = node.next;
    noOfEle -= 1;
  }

  return temp;
};

const getBackNNode = (node, noOfEle) => {
  let temp = [];
  while (noOfEle !== 0) {
    temp.push(node.data);
    node = node.prev;
    noOfEle -= 1;
  }

  return temp.reverse();
};

const getShowNNode = (
  node,
  direction,
  noOfEle,
  startNodeForBackN,
  startNodeForNextN
) => {
  let temp = [];
  if (direction === "NEXT") {
    startNodeForBackN = startNodeForNextN;

    while (noOfEle !== 0) {
      temp.push(node.data);
      node = node.next;
      noOfEle -= 1;
    }

    startNodeForNextN = node;
  } else if (direction === "BACK") {
    startNodeForNextN = startNodeForBackN;

    while (noOfEle !== 0) {
      temp.push(node.prev.data);
      node = node.prev;
      noOfEle -= 1;
    }

    startNodeForBackN = node;
  }
  return [temp, startNodeForBackN, startNodeForNextN];
};
export { makeLinkList, getBackNNode, getNextNNode, getShowNNode };
