function createHashTable(size = 5) {
    const table = new Array(size);

    function hash(key) {
        let sum = 0;

        for (let i = 0; i < key.length; i++) {
            sum += key.charCodeAt(i);
        }

        return sum % size;
    }

    function insert(key, value) {
        const index = hash(key);

        if (!table[index]) {
            table[index] = [];
        }

        table[index].push([key, value]);
    }

    function search(key) {
        const index = hash(key);

        if (!table[index]) {
            return null;
        }

        for (let i = 0; i < table[index].length; i++) {
            const [k, v] = table[index][i];

            if (k === key) {
                return v;
            }
        }

        return null;
    }

    function remove(key) {
        const index = hash(key);

        if (!table[index]) {
            return false;
        }

        for (let i = 0; i < table[index].length; i++) {
            const [k, v] = table[index][i];

            if (k === key) {
                table[index].splice(i, 1);
                return true;
            }
        }

        return false;
    }

    function print() {
        console.log(table);
    }

    return {
        insert,
        search,
        remove,
        print,
    };
}

// Example usage:
const hashTable = createHashTable(5);

hashTable.insert('apple', 2);
hashTable.insert('banana', 4);
hashTable.insert('cherry', 6);

console.log(hashTable.search('apple')); // 2
console.log(hashTable.search('banana')); // 4
console.log(hashTable.search('cherry')); // 6

hashTable.remove('banana');

hashTable.print(); // [null, [['apple', 2]], [['cherry', 6]], null, null]
