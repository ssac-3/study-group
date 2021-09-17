'strict mode'

/*
두 수 더하기
연결 리스트의 각 자리의 숫자 하나하나가  연결리스트의 노드로 구성되어 있고 이 숫자의 합을 구하는 문제이다.
이것은 단일 연결 리스트의 경우 첫 노드(head)를 기준으로 한 방향으로만 접근 및 이동을 한다는 제약을 이용한 문제이다.

문제: 주어진 2개의 연결 리스트로 표현되는 양의 정수의 합과 결과를 연결리스트로 반환해보자.
예를들어 1->2->3 과 4->5->6이 주어졌다면 5->7->9를 반환하면 된다.

*/
function Node(data){
    this.data = data;
    this.next = null;
}

function LinkedList(){
    this.head = null;
    this.length = 0;
}

LinkedList.prototype.insertNode= function(data){
    const newNode = new Node(data);
    let presentNode = this.head;

    if(!this.head){
        this.head = newNode;
    }else{
        while(presentNode.next)
            presentNode = presentNode.next;
        
        presentNode.next = newNode;
    }
    this.length++;
}

LinkedList.prototype.generateList = function (startNum, endNum){

    if(this.head){
        return;
    }
    for(let i = startNum ; i <= endNum ; i++){
        this.insertNode(i);
    }
}

const sumLinkedList = (list1,list2)=>{
    const newList = new LinkedList();
    let presentList1 = list1.head;
    let presentList2 = list2.head;
    let list1Str="";
    let list2Str="";
    let resultList;


    while(presentList1 || presentList2){

        if(presentList1){
            list1Str+= ""+presentList1.data;
            presentList1= presentList1.next;
        }else{
            list1Str+= ""+"0"
        }

        if(presentList2){
            list2Str+= ""+presentList2.data;
            presentList2= presentList2.next;
        }else{
            list2Str+= ""+"0"
        }
    }

    resultList = ""+(Number(list1Str)+Number(list2Str));

    for(let i = 0 ; i < resultList.length ; i++){
        newList.insertNode(resultList[i]);
    }

    return newList;
}

const listA = new LinkedList();
const listB = new LinkedList();

listA.generateList(7,9);
listB.generateList(4,6);

console.log(sumLinkedList(listA,listB));

