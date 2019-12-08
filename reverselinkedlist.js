//  function ListNode(val){
//     this.val = val
//     this.next = null
// }
// This is how to create a linkedlist in js.

class ListNode{
    constructor(val){
        this.val = val
        this.next = null
    }
}

const listNode = new ListNode(1)
listNode.next = new ListNode(2)
listNode.next.next = new ListNode(3)
listNode.next.next.next = new ListNode(4)
listNode.next.next.next.next = new ListNode(5)

console.log(listNode)


function reverseList  (head){
    if (!head) return head
    let newHead;

    ( function reverse(currentNode,previousNode){
        if (currentNode.next) {
            reverse(currentNode.next,currentNode)
        }else{
            newHead = currentNode
        }
        currentNode.next = previousNode

    })(head,null)

    return newHead

}

console.log(reverseList(listNode))
// reverse the linkedlist recursively

