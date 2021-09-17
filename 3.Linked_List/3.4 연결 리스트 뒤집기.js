// 10 > 11 > 12 > 13 > None 을 뒤집어 출력하기

const input1 = 10;
const input2 = 11;
const input3 = 12;
const input4 = 13;
// const input5 = None;

class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}
class LinkedList{
    constructor(){
        this.head = null;
    }
        insert(element){
            let newNode = new Node(element);
            if (!this.head){
                this.head = newNode;
                return
            }

            let last = this.head;
            while(last.next){
                last = last.next
            }
            last.next = newNode
        }

        display(){
            let currNode = this.head;
            while(!(currNode == null)){
                console.log(currNode.element);
                currNode = currNode.next;
            }
        }
}


const reverseList = function(head) {
    
    if (head == null){
        return head
    }

    let stack = [];
    let curr = head;

    while(!(curr.next == null)){
        stack.push(curr);
        curr = curr.next;
    }

    first = curr;

    while (stack){
        curr.next = stack.pop();
        console.log(curr.next);
    }

    curr.next = null;

    return first
}

// reverseList(ll.head)


export {LinkedList};