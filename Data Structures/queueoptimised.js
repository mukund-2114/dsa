class Queue{
    constructor(){
        this.items = {}
        this.front = 0
        this.rear = 0
    }

    enqueue(element){
        this.items[this.rear] = element
        this.rear++
    }

    dequeue(){
        const item = this.items[this.front]
        delete this.items[this.front]
        this.front++
        return item
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    peek(){
        console.log(this.items[this.front])
    }

    size(){
        console.log(this.rear - this.front)
    }

    print(){
        console.log(this.items)
    }
}

const queue = new Queue()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)

queue.dequeue()
queue.print()
queue.size()
queue.peek()