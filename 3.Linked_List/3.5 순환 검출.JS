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
            while(!(currNode.next == null)){
                console.log(currNode.next.element);
                currNode = currNode.next;
            }
        }
}


const ll = new LinkedList();
ll.insert(11);
ll.insert(12);
ll.insert(13);
ll.insert(ll.head.nodeValue);

console.log(ll.head.next.next.next)
