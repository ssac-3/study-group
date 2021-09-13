/*
단일 연결 리스트가 주어지면 이 연결 리스트를 역순으로 배치해보자. 예를들어 10 -> 11 -> 12 -> 13 -> None이 주어지면,
13 -> 12 -> 11 -> 10 -> None으로 배치하는 문제이다.
*/

function Node(data){
    this.data = data;
    this.next = null;
}

function LinkedList(){
    let _length = 0;
    let _head = null;
}

LinkedList.prototype.append = function(data){
    const node = new Node(data);
    let curr;

    if(this._head == null){
        this._head = node;
    }
    else{
        curr = this._head;

        while(curr.next){
            curr = curr.next;
        }

        curr.next = node;

    }
    this._length ++;

};

const generateQuestionList = (startNum,endNum)=>{
    const list = new LinkedList();

    for(let i = startNum ; i <= endNum ; i++){
        list.append(i);
    }

    return list;
}

const list = generateQuestionList(10,13);
console.log(list);

const reverseLink = function(linkedList){

    



    if(!this.next){
            this._head
        return 
    }
    

}