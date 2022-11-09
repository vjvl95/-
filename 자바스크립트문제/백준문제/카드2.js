const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : __dirname+"/input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
 
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this._size = 0;
    }
 
    add(value) {
        const newNode = new Node(value);
 
        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
 
        this.tail = newNode;
        this._size++;
 
        return newNode;
    }
 
    getHead() {
        return this.head.value;
    }
 
    removeHead() {
        this.head = this.head.next;
        this.head.prev = null;
        this._size--;
    }
 
    getSize() {
        return this._size;
    }
}

function solution(){
    const cards=new LinkedList();
    let num=+input[0]

    for(let i=1;i<=num;i++){
        cards.add(i)
    }
    while(cards.getSize()!==1){
        cards.removeHead()
        cards.add(cards.getHead())
        cards.removeHead()
    }
    console.log(cards.getHead())
}

solution()