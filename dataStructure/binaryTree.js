function createNode(value) {
    return {
        value,
        left: null,
        right: null,
    };
}

function createBinaryTree() {
    let root = null;

    function insert(value) {
        const node = createNode(value);

        if (!root) {
            root = node;
        } else {
            let current = root;

            while (true) {
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = node;
                        break;
                    } else {
                        current = current.left;
                    }
                } else if (value > current.value) {
                    if (current.right === null) {
                        current.right = node;
                        break;
                    } else {
                        current = current.right;
                    }
                } else {
                    break;
                }
            }
        }
    }

    function search(value) {
        let current = root;

        while (current !== null) {
            if (value < current.value) {
                current = current.left;
            } else if (value > current.value) {
                current = current.right;
            } else {
                return current;
            }
        }

        return null;
    }

    function traverseInOrder(node, visit) {
        if (node !== null) {
            traverseInOrder(node.left, visit);
            visit(node.value);
            traverseInOrder(node.right, visit);
        }
    }

    function showTree() {
        traverseInOrder(root, console.log);
    }


    return {
        insert,
        search,
        showTree
    };
}

// Example usage:
const tree = createBinaryTree();

tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(1);
tree.insert(4);

console.log(tree.search(3)); // { value: 3, left: { value: 1, left: null, right: null }, right: { value: 4, left: null, right: null } }

console.log(tree.search(6)); // null
