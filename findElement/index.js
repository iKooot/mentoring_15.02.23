function findElementByAttribute(domElement, attribute) {
    if (typeof attribute === 'string') {
        return deepSearchByInnerText(domElement, attribute);
    } else if (typeof attribute === 'object') {
        const [key, value] = Object.entries(attribute)[0];
        return domElement.querySelector(`[${key}="${value}"]`);
    }
}

function deepSearchByInnerText(element, attribute) {
    if (element.innerText === attribute) {
        return element;
    }

    for (let child of element.children) {
        const foundElement = deepSearchByInnerText(child, attribute);
        if (foundElement) {
            return foundElement;
        }
    }

    return null;
}

function findElementByAttributeOld(domElement, attribute) {
    if (typeof attribute === 'string') {
        return findElementByInnerText(domElement, attribute);
    } else if (typeof attribute === 'object') {
        const [key, value] = Object.entries(attribute)[0];
        return findElementByAttributeValue(domElement, key, value);
    }
}

function findElementByInnerText(domElement, text) {
    const elements = domElement.getElementsByTagName('*');
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].innerText === text) {
            return elements[i];
        }
    }
    return null;
}

function findElementByAttributeValue(domElement, attributeName, attributeValue) {
    const elements = domElement.getElementsByTagName('*');
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].hasAttribute(attributeName) && elements[i].getAttribute(attributeName) === attributeValue) {
            return elements[i];
        }
    }
    return null;
}

const root = document.getElementById("root")
console.log(findElementByAttribute(root, "Button"))
console.log(findElementByAttribute(root, {id: "first-el"}))
// native
console.log(findElementByAttributeOld(root, "Description"))
console.log(findElementByAttributeOld(root, { class: "list" }))


