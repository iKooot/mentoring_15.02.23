function createStack() {
    let stack = {};

    let top = -1;
    let capacity = 0;

    function push(value) {
        if (capacity === 0 || top < capacity - 1) {
            top++;
            stack[top] = value;
        } else {
            throw new Error("Stack overflow");
        }
    }

    function pop() {
        if (top === -1) {
            throw new Error("Stack underflow");
        } else {
            const value = stack[top];
            delete stack[top];
            top--;
            return value;
        }
    }

    function peek() {
        if (top === -1) {
            throw new Error("Stack is empty");
        } else {
            return stack[top];
        }
    }

    function isEmpty() {
        return top === -1;
    }

    function isFull() {
        return capacity > 0 && top === capacity - 1;
    }

    function getSize() {
        return top + 1;
    }

    function getCapacity() {
        return capacity;
    }

    function setCapacity(newCapacity) {
        if (newCapacity < capacity) {
            throw new Error("New capacity is less than current size of stack");
        }
        capacity = newCapacity;
    }

    function toArray() {
        const arr = [];
        for (let i = top; i >= 0; i--) {
            arr.push(stack[i]);
        }
        return arr;
    }

    return {
        push,
        pop,
        peek,
        isEmpty,
        isFull,
        getSize,
        getCapacity,
        setCapacity,
        toArray
    };
}

// Example usage:
const stack = createStack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
console.log(stack.peek()); // 2

stack.setCapacity(5);
console.log(stack.getCapacity()); // 5

stack.push(4);
stack.push(5);
stack.push(6); // Throws "Stack overflow" error
