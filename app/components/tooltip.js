const tooltip = () => {
    closeTooltip();
    const elements = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elements);
}

const closeTooltip = () => {
    const elements = document.querySelectorAll('.tooltipped');
    if (elements.length) {
        const instances = M.Tooltip.getInstance(elements);
        //instances.destroy();
        console.log(instances);
    }
}

export default tooltip;