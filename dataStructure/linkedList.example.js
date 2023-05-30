function createLinkedList() {
    let head = null;
    let tail = null;
    let size = 0;

    function Node(value, next = null) {
        return {
            value,
            next,
        };
    }

    function append(value) {
        // Создаём новый узел.
        const node = Node(value);

        // Если нет tail, делаем новым узлом head и tail.
        if (tail === null) {
            head = node;
            tail = node;
        } else {
            // Присоединяем новый узел к концу связного списка.
            // Берём последний узел и указываем, что его next будет новым узлом.
            tail.next = node;

            // Переназначаем tail на новый узел.
            tail = node;
        }

        size++;
    }

    function prepend(value) {
        // Создаём новый узел, который будет новым head,
        // при создании передаем второй аргумент, который указывает
        // что его "next" будет текущий head,
        // так как новый узел будет стоять перед текущем head.
        const node = Node(value, head);

        // Переназначаем head на новый узел
        head = node;

        // Если ещё нет tail, делаем новый узел tail.
        if (tail === null) {
            tail = node;
        }

        size++;
    }

    function remove(value) {
        // Если нет head значит список пуст.
        if (head === null) {
            throw new Error("List is empty");
        }

        // Если head должен быть удален, то делаем следующий узел новым head.
        if (head.value === value) {

            // Переназначаем следующий за head узел на новый head.
            head = head.next;

            if (head === null) {
                tail = null;
            }

            size--;
            return;
        }

        let current = head;

        // Если следующий узел должен быть удален,
        // делаем узел через один, следующим для проверки.
        // Перебираем все узлы и удаляем их, если их значение равно указанному.
        while (current.next !== null && current.next.value !== value) {
            current = current.next;
        }

        if (current.next === null) {
            throw new Error("Value not found");
        }

        // Перезаписываем, чтобы узел через один стал следующим узлом.
        current.next = current.next.next;

        // Проверяем, должен ли tail быть удален.
        // Так как, если в цикле мы удаляем последний узел,
        // то с предпоследнего узла убираем только ссылку на него.
        // Поэтому делаем проверку на его удаление с "tail".
        if (current.next === null) {
            tail = current;
        }

        size--;
    }

    function find(callback) {
        let current = head;
        // Перебираем все узлы в поиске значения.
        while (current !== null) {
            // Если указано значение, пробуем сравнить его по значению.
            if (callback(current.value)) {
                return current.value;
            }
            // Перематываем на один узел вперед.
            current = current.next;
        }

        return null;
    }

    function toArray() {
        const result = [];
        let current = head;

        // Перебираем все узлы и добавляем в массив.
        while (current !== null) {
            result.push(current.value);
            current = current.next;
        }

        return result;
    }

    function getSize() {
        return size;
    }

    function isEmpty() {
        return size === 0;
    }

    return {
        append,
        prepend,
        remove,
        find,
        toArray,
        getSize,
        isEmpty,
    };
}

// Example usage:
const linkedList = createLinkedList();

console.log(linkedList.toArray());

linkedList.append(1);
linkedList.remove(1);
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);
linkedList.remove(2);

console.log(linkedList.toArray());
console.log(linkedList.getSize());

const foundValue = linkedList.find(value => value === 1);
console.log(foundValue); // 1

const notFoundValue = linkedList.find(value => value === 2);
console.log(notFoundValue); // null
