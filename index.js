const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('Regular!');
// Interpolated
console.log('Hello, I am %s string', 'interpolated')
// Styled
console.log('%c I am some red cursive text!', 'font-size: 50px;color:red;font-family:cursive;')
// warning!
console.warn('This is a warning!')
// Error :|
console.error('This is an error!')
// Info
console.info('This is an info log')
// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('thing'), 'Class not found on element')
// clearing
console.clear();
// Viewing DOM Elements
console.log(p);
// At my time of doing this exercise both of .log and .dir actually let you look at all of the
// information about an element instead of having to use .dir
console.dir(p);
// Grouping together
console.clear()
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`)
    console.log(`This is the info for ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`)
    console.log(`That is ${dog.name * 7} in dog years`)
    console.groupEnd(`${dog.name}`);
})
// counting
console.count('Nicholas')
console.count('Trent')
console.count('Nicholas')
console.count('Nicholas')
console.count('Nicholas')
console.count('Nicholas')
console.count('Trent')
console.count('Trent')
console.count('Nicholas')
console.count('Nicholas')
console.count('Nicholas')
console.count('Trent')
// timing
console.time('Fetching data')
fetch('https://api.github.com/users/thenootlinja')
    .then(data => data.json())
    .then(data => {
        console.log(data)
        console.timeEnd('Fetching data');
    })