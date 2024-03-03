class CircularQueue{
    constructor(capacity){
        this.items = new Array(capacity);
        this.front = -1
        this.rear = -1
        this.capacity = capacity
        this.currentLength = 0
    }

    enqueue(element){
       if(!this.isFull()){
            this.rear = (this.rear+1) % this.capacity
            this.items[this.rear] = element
            this.currentLength += 1
            if(this.front == -1){
                this.front = this.rear;
            }
       }
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("Queue is empty")
        }
            const item = this.items[this.front];
            this.items[this.front] = null;
            this.currentLength -= 1;
            this.front = (this.front + 1) % this.capacity;
            if(this.isEmpty()){
                this.front = -1
                this.rear = -1
            }
            return item;
    }

    isFull(){
        return this.currentLength === this.capacity;
    }

    isEmpty(){
        return this.currentLength === 0;
    }

    peek(){
        if(this.isEmpty()){
            return null
        }
        return this.items[this.front]
    }

    size(){
        return this.items.length
    }

    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            let i = this.front;
            let str = '';
            
            while (true) {
                str += this.items[i] + ',';
                if (i === this.rear) break; 
                i = (i + 1) % this.capacity;
            }
            
            console.log(str);
        }
    }
    
}

const queue = new CircularQueue(5);
console.log(queue.size());

console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)

console.log(queue.isFull())
console.log(queue.print())