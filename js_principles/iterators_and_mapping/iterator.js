function arrayIterator(array) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < array.length
        ? { value: array[nextIndex++], done: false }
        : { done: true };
    },
  };
}

console.log('---------- Mapping Through an Array ----------');

const namesArr = ['John', 'Doe', 69];

console.log(namesArr);

namesArr.map(function (value, index) {
  console.log(`At ${index} we have ${value} in my Array`);
});

console.log('---------- Mapping Through an Object ----------');

const profileObject = {
  name: 'John Doe',
  age: 32,
  speak: function () {
    console.log('Hello!');
  },
};

console.log(profileObject);

Object.keys(profileObject).map(function (index) {
  value = profileObject[index];
  console.log(`At ${index} we have ${value} in my Object`);
});

console.log('---------- Mapping Through a Set ----------');

let randomsSet = new Set();
randomsSet.add(100);
randomsSet.add('string');
randomsSet.add(true);
randomsSet.add(100);
randomsSet.add('trollollo');

randomsSet.delete('trollollo');

console.log(randomsSet);

[...randomsSet].map(function (value, index) {
  console.log(`At ${index} we have ${value} in my Set`);
});

console.log('---------- Custom Array Iterator ----------');

console.log(namesArr);

const names = arrayIterator(namesArr);

console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());
