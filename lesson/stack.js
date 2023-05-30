function createStack() {
    const stack = {};

    let top = -1;
    let capacity = 0;

    function push(value) {
        if(capacity === 0 || top < capacity - 1) {
            top++;
            stack[top] = value;
        } else {
            throw new Error('Stack overflow');
        }
    }

    function pop() {
        if (top === -1) {
            throw new Error('Stack underflow');
        } else {
            const value = stack[top];
            delete stack[top];
            top--;
            return value
        }
    }

    function peek() {
        if (top === -1) {
            throw new Error('Stack empty');
        } else {
            return stack[top]
        }
    }

    function getSize() {
        return top + 1
    }

    function setCapacity(newCapacity) {
        if (newCapacity < capacity)  throw new Error('New capacity is less than current capacity')
        capacity = newCapacity
    }

    function toArray() {
        const arr = [];

        for ( let i = top; i >= 0; i-- ) {
            arr[arr.length] = stack[i];
        }

        return arr;
    }

    return {
        push,
        pop,
        peek,
        getSize,
        setCapacity,
        toArray,
    }
}

const testStack = createStack();

testStack.setCapacity(2);

testStack.push(1)
testStack.push(1)
testStack.push(1)

