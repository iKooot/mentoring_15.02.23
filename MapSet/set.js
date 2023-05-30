const set = new Set([1, 2, 3, 3, 3, 4, 5, 5, 6])

set.add(7).add(7).add(8)

console.log(set)
console.log(set.has(7))
console.log(set.has(30))
console.log(set.size)
console.log(set.delete(8))
console.log(set.size)

console.log(set.values())
console.log(set.keys())
console.log(set.entries())

for ( let key of set) {
    console.log(key)
}

set.clear()
console.log(set.size)

function uniqueValues(array) {
    // return Array.from(new Set(array))
    return [...new Set(array)]
}

console.log(uniqueValues([1,1,1,1,1,1,2,2,2,2,2,2]))

// =========================

const users = [{ name: "Elena" }, { name: "Sergey" }];

const visits = new WeakSet();

visits.add(users[0]).add(users[1])

console.log(visits.has(users[0]))
console.log(visits.has(users[1]))

users.splice(1, 1)

console.log(visits.has(users[0]))
console.log(visits.has(users[1]))

