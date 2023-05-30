function creatLikedList() {
    let head = null;
    let tail = null;
    let size = 0;

    function Node(value, next = null) {
        return {
            value,
            next,
        }
    }

    function append(value) {
        // Создать новую ноду
        const node = Node(value);

        // Если нету tail, делаем новый узел и присваеваем head & tail
        if (tail === null) {
            head = node;
            tail = node;
        } else {
            // Присоединяем новый узел к концу связанного списка
            // next будет новым узлом
            tail.next = node;

            // переопределяет tail
            tail = node;
        }

        size++
    }

    function prepend(value) {
        const node = Node(value, head);

        head = node

        if ( tail === null ) {
            tail = node
        }

        size++
    }

    function remove(value) {
        if (head === null) throw new Error('List is empty');

        if (value === head.values) {
            head = head.next;

            if ( head === null ) {
                tail = null
            }

            size--
            return;
        }

        let current = head

        while (current.next !== null && current.next.value !== value) {
            current = current.next;
        }

        if (current.next === null) throw new Error('Value not found');
        // Перезаписываем, чтобы узел через один стал последующим узлом. Идем вглубь.
        current.next = current.next.next;

        if ( current.next === null ) {
            tail = current;
        }

        size--;
    }

    function find(callback) {
        let current = head;

        while (current !== null) {
            if (callback(current.value)) {
                return current.value
            }

            current = current.next
        }

        return null
    }

    function getSize() {
        return size
    }

    return {
        append,
        prepend,
        remove,
        getSize,
        find
    }
}

const list = creatLikedList()

list.append(1);
console.log(list.getSize());
list.append(2);
console.log(list.getSize());
list.append(3);
console.log(list.getSize());

const findValue = list.find( value => value === 2 )
console.log(findValue) // 2
