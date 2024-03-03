class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size == 0;
    }

    getSize(){
        return this.size;
    }
    // O(1)
    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node
        }
        else{
            node.next = this.head;
            this.head = node
        }
        this.size++;
        // console.log("node",node)
    }

    insert(value,index){
        if(index < 0 || index > this.size){
            return
        }
        if(index === 0){
            this.prepend(value);
        }
        else{
            const node= new Node(value);
            let prev = this.head;
            for(let i=0;i< index-1;i++){
                prev = prev.next
            }
            node.next = prev.next;
            prev.next = node
            this.size++;
        }

    }

    print(){
        if(this.isEmpty()){
            console.log("List is empty")
        }
        else{
            let list = '';
            let curr = this.head;
            while(curr){
                list += curr.value+' ';
                curr = curr.next;
            }
            console.log(list)
        }
    }
    //O(n)
    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }
        else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    removeFrom(index){
        if(index < 0 || index>=this.size){
            return null
        }
        let removeNode;
        if(index === 0){
            removeNode = this.head
            this.head = this.head.next;
        }
        else{
            let prev= this.head;
            for(let i=0;i<index-1;i++){
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next
        }
        this.size--;
        return removeNode.value;
        
    }

    removeValue(value){
        if(this.isEmpty()){
            return null;
        }
        if(this.head.value === value){
            this.head = this.head.next;
            this.size--;
            return value;
        }
        else{
            let prev=this.head;
            while(prev.next && prev.next.value !== value){
                prev = prev.next;
            }
            if(prev.next){
                const removeNode = prev.next;
                prev.next = removeNode.next
                this.size--;
                return value;
            }
        return null;
     }
    }

    search(value){
        if(this.isEmpty()){
            return -1;
        }
        else{
            let cur = this.head;
            while(cur){
                if(cur.value === value){
                    return cur;
                }
                cur = cur.next;
            }
            return -1;
        }
    }


}

const list = new LinkedList();
console.log('List is Empty?', list.isEmpty());
console.log('List size is:', list.getSize());

// list.prepend(10)
// list.prepend(20)
// list.prepend(30)
// list.append(5)
// list.append(4)
// list.print();

list.insert(10,0)
list.insert(20,0)
list.insert(30,2)
list.insert(40,2)
list.print();
// console.log(list.getSize());


// console.log(list.removeFrom(85));
// console.log(list.removeFrom(2));
// console.log(list.removeFrom(85));
// console.log(list.removeValue(30))
// list.print();
// console.log(list.getSize())
console.log(list.search(20))