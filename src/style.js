export function updateVariableProperty(propertyName, data) {
    document.querySelector(":root").style.setProperty(propertyName, data);
}