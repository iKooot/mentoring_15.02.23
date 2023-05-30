// create function(root, attribute: string => innerText | object => { key: value }) => node | null

const root = document.getElementById("root");

// function findElementByAttribute(root, attribute) {
//   if (typeof attribute === "string") {
//     // find by innerText
//     return deepSearchByInnerText(root, attribute);
//   } else if (typeof attribute === "object") {
//     // find by attributes
//     const [key, value] = Object.entries(attribute)[0];
//     return document.querySelector(`[${key}=${value}]`);
//   } else {
//     return null;
//   }
// }
//
// function deepSearchByInnerText(element, attribute) {
//   if (element.innerText === attribute) return element;
//
//   for (let child of element.children) {
//     const foundElement = deepSearchByInnerText(child, attribute);
//
//     if (foundElement) {
//       return foundElement;
//     }
//   }
//
//   return null;
// }
//
// const element = findElementByAttribute(root, { id: "first-el" });
// const element2 = findElementByAttribute(root, "Description");
//
// console.log(element);
// console.log(element2);

function findElementByAttribute(root, attribute) {
    if (typeof attribute === "string") {
        // find by innerText
        return findElementByInnerText(root, attribute)
    } else if (typeof attribute === "object") {
        // find by attributes
        const [key, value] = Object.entries(attribute)[0];
        return findElementByAttributeValue(root, key, value)
    } else {
        return null;
    }
}

function findElementByInnerText(element, text) {
    const elements = element.getElementsByTagName('*');

    for ( let i = 0; i < elements.length; i ++) {
        if (elements[i].innerText === text) {
            return elements[i]
        }
    }

    return null
}

function findElementByAttributeValue(element, attributeName, attributeValue) {
    const elements = element.getElementsByTagName('*');

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].hasAttribute(attributeName) && elements[i].getAttribute(attributeName) === attributeValue) {
            return elements[i]
        }
    }

    return null
}

const element = findElementByAttribute(root, { id: "first-el" });
const element2 = findElementByAttribute(root, "Description");

console.log(element);
console.log(element2);

// 1. Входящий параметры attribute можем включать много полей. Example: { key: value, key2: value2 } // or key or key2
// 2. Продумать негативные кейсы attribute = [], {}, false value // return null | throw new Error();
// 3. Реализовать логику возврата множественного значения;
