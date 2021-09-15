'strict mode'
/*
문제: 주어진 연결 리스트가 순환을 가지는지 판단하는 프로그램을 작성해보자.
순환이라 함은 특정 노드를 기점으로 이전 노드로 돌아가 순환이 생기는 경우라고 보면 된다.
*/

function Node(data){
    this.data = data;
    this.next = null;
}

function LinkedList(){
    this.head = null;
    this.length = 0;    
}

LinkedList.prototype.insertNode = function(data){
    const newNode = new Node(data);

    if(!this.head) //최초 등록한 노드가 없으면
        this.head = newNode; // 새로운 노드를 head에 삽입.
    else{
        let presentNode = this.head; //최초노드가 존재한다면
        
        while(presentNode.next){ // 현재노드의 다음값이 없을때까지 노드속으로 들어간다.
            presentNode = presentNode.next;
        }
        presentNode.next = newNode; // 다음값이 없는 마지막 노드에 새 노드를 넣는다
        
    }

    this.length++; // 길이증가
}

const isCircular = (linkedList)=>{
    
    if(linkedList.length>1){

        let presentNode = linkedList.head
        
        while(presentNode.next){
            if(presentNode.next === linkedList.head){
                return true;
            }
            presentNode = presentNode.next;
        }
        return false;
    }
}

const ll = new LinkedList();
ll.insertNode(10);
ll.insertNode(11);

console.log(isCircular(ll));
