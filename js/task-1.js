const categories = document.querySelector('#categories');
const liElem = categories.children;
console.log(`Number of categories: ${liElem.length}`);
for (const liItem of liElem) {
    console.log(`Category: ${liItem.querySelector('h2').textContent}`);
    console.log(`Elements: ${liItem.querySelectorAll('li').length}`)
}

