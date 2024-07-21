import Node from "./node";

export default class LinkedList {
    constructor(head = null, length = 0) {
        this.head = head;
        this.length = length;
    }

    // function 1
    append(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;

        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            this.length++;
        }
    }

    //function 2
    prepend(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.length++;
        }
        else {
            node.next = this.head;
            this.head = node;
            this.length++;
        }
    }

    // function 3
    size() {
        let count = 0;
        let current = this.head;

        while (current.next) {
            count++;
            current = current.next;
        }
        return count;
    }

    // function 4
    head() {
        return this.head;
    }

    // function 5
    tail() {
        let current = this.head;

        while (current.next) {
            current = current.next;
        }
        return current;
    }

    // function 6
    at(index) {
        let current = this.head;

        for (let i = 0; i < index; i++) {
            if (!current.next) {
                return "null";
            }
            current = current.next;
        }
        return current;
    }

    // function 7
    pop() {
        let current = this.head;
        while (current.next.next) {
            current = current.next;
        }
        current.next = null;
    }

    // function 8
    contains(value) {
        let current = this.head;

        while (current) {
            if (current.value = value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // function 9
    find(value) {
        let current = this.head;

        for (let i = 0; i <= this.length; i++) {
            if (current.value = value) {
                return i;
            }
            else if (!current.next) {
                return "null"
            }
            current = current.next;
        }
    }

    // function 10
    toString() {
        let string = "";
        let current = this.head;

        if (!this.head) {
            return "null";
        }
        else {
            string += `( ${current.value}) -> `;
            current = current.next;
        }
        string += 'null';
        return string;
    }
}