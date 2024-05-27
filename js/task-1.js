const categories = document.querySelector('#categories');
const liElems = categories.children;
console.log(`Number of categories: ${liElems.length}`);
for (const liItem of liElems) {
    console.log(`Category: ${liItem.querySelector('h2').textContent}`);
    console.log(`Elements: ${liItem.querySelectorAll('li').length}`)
}

