export const recreateNode = (element, withChildren) => {
    if (withChildren) {
        element.parentNode.replaceChild(element.cloneNode(true), element);
    }
    else {
        var newElement = element.cloneNode(false);
        while (element.hasChildNodes()) newElement.appendChild(element.firstChild);
        element.parentNode.replaceChild(newElement, element);
    }
}

export const randomString = () => {
    return Math.random().toString(36).substring(2);
}

export const formatYens = (value) => {
    return parseFloat(value).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

export const formatNumber = (value) => {
    return value.toString().replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}