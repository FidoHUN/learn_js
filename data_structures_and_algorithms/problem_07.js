class ListNode {
  constructor(data) {
      this.data = data
      this.next = null                
  }
}

const node1 = new ListNode(1)
const node2 = new ListNode(2)
const node3 = new ListNode(3)
const node4 = new ListNode(4)
const node5 = new ListNode(5)

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

function iterate(head){
  console.log(head.data);
  if(head.next){
    iterate(head.next)
  }else{
    return
  }
}

iterate(node1)

/* 
Given a linked list. return it in reverse.
*/

var reverseList = function(head) {
  let prev = null;
  let current = head;
  
  while(current) {
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }
  
  return prev;
};

console.log(reverseList(node1));