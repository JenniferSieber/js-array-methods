// JavaScript Array Methods

//  .flat()
console.log('.flat() flattens and array of arrays into all the elements in one array')
const arrOfArrays =  [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const flattenedArray = arrOfArrays.flat()
console.log(arrOfArrays, 'flattened array: ', flattenedArray)

// .concat()
console.log('.concat(): Joins two or more arrays, and returns a new array.')
const arrConcat1 = [1,2,3]
const arrConcat2 = [10,11,12]
const arrConcat3 = [20,21,22]
const concatenatedArr = arrConcat1.concat(arrConcat2.concat(arrConcat3))
console.log(arrConcat1, arrConcat2, arrConcat3, 'Concatenated three arrays', concatenatedArr)

// .join()
console.log('.join(): joins all elements of an array into a string with division between elements defined in join()')
const arrJoin =['Hello', 'JavaScript', 'Array', 'Methods']
const joined = arrJoin.join(' ')
console.log(arrJoin, 'Join array:  ', joined)

// .push()
console.log('.push(): Adds one or more elements to END of an Array')
const arrayPush = [1,2,3]
arrayPush.push(4,5,6)
console.log(arrayPush, '.push() Mutates an array')

// .pop()
console.log('.pop(): Removes the last element from an arran and returns that element ')
const arrayPop = [1,2,3,4,5]
const lastElement = arrayPop.pop()
console.log('orig array: [1,2,3,4,5]', arrayPop, '.pop() mutates array sends back element saved:', lastElement)

// .shift()
console.log('.shift() Removes the first element from an array and returns that element.')
const arrShift = [1,2,3,4,5]
const firstElement = arrShift.shift()
console.log('orig array: [1,2,3,4,5]', arrShift, 'first Element var', firstElement)

// .unshift()
console.log('.unshift(): Adds one or more elements to the beginning of an array. ')
const arrUnshift = [1,2,3,4,5]
arrUnshift.unshift('the beginning:', 0)
console.log('orig array: [1,2,3,4,5]', arrUnshift)

// .slice()
console.log('.slice() Extracts a section of an array and returns a NEW array')
const arrToSlice = ['Hello', '.slice()', 'is a', 'JavaScript', 'Method', 'World'] 
const slicedArr = arrToSlice.slice(1,5)
console.log('orig arr: ',arrToSlice, 'new arr: ',slicedArr)

// .indexOf()
console.log('.indexOf(): Returns the first index at which a given element can be found in the array OR -1 if element is not present in array')
const arrIndexOf = ['Hello', '.indexOf()', 'is a', 'JavaScript', 'Method', 'World'] 
const index = arrIndexOf.indexOf('JavaScript')
console.log('orig arr: ',arrIndexOf, 'index of JavaScript', index)

// .includes()
console.log('.includes(): Determines whether and array includes a certain Element-returns Boolean')
const arrIncludes = ['Hello', '.includes()', 'is a', 'JavaScript', 'Method', 'World'] 
const test = arrIncludes.includes('JavaScript')
const numTest = arrIncludes.includes(30)
console.log('original arr: ', arrIncludes, 'does arr include JavaScript: ', test, 'does arr include number 30:', numTest)

// .every()
console.log('.every(): Tests whether ALL elements in array pass the test implemented by provided function')
const everyArr = [2,6,10,22]
const allEven = everyArr.every(element => element % 2 === 0)
console.log('Testing array for all even numbers', everyArr, allEven)

// .some()
console.log('.some(): Tests whether at least one element in array passes test implemented by provided function')
const someArr = [1,3,7,21,13,0]
const testEven = someArr.some(element => element % 2 === 0)
console.log('testing org array to see if at least one is even', someArr, testEven)

// .find()
console.log('.find() returns the FIRST element in array that satisfies provided Test Function')
const findArr = [1,3,7,21,13,0]
const foundEven = findArr.find(element => element % 2 === 0)
console.log('find at least one even number in array:', findArr, foundEven)

// .filter() 
console.log('.filter(): Creates a new Array with all the elements that pass the Test implemented by the provided function')
const filterArr = [11,12,13,14,15,16,17,18,19,20, 0]
const evenNums = filterArr.filter(element => element % 2===0)
const oddNums = filterArr.filter(element => element % 2)
console.log('orig arr: ', filterArr, 'new arr using filter to return only EVEN numbers', evenNums, 'new arr using filter to return only ODD numbers', oddNums)

// .map()
console.log('.map(): Creates a new Array with results of calling a provided function on every element in an array')
const mapArr = [1,2,3,4,5,0]
const squaredArr = mapArr.map(element => element * element)
console.log('orig arr: ', mapArr, 'new array where each element was squared:', squaredArr)

// .forEach()
console.log('.forEach(): Calls a function for each element in an Array -doesnt return an array like map')
const forEachArr = [1,2,3,4,5,0]
forEachArr.forEach(element => console.log('Logging every element in [1,2,3,4,5,0]: ', element))

// .reduce()
console.log('.reduce(): Applies Function against an accumulator and each element in the array from left to right -to reduce to a single value')
const reduceArr = [1,2,3,4,5,0]
const sum = reduceArr.reduce((acc, cv) => acc + cv, 0)
console.log('orig arr: ', reduceArr, 'sum of the array:', sum)

// .sort()
console.log('.sort(): Sorts elements of array in place-Mutates array')
const sortArr = [2, 23,0, 1, 3, 33, 11, 44]
const sortArr1 = [2, 23,0, 1, 3, 33, 11, 44]
sortArr.sort()
sortArr1.sort((a,b) => a - b)
console.log('orig arr: [2, 23,0, 1, 3, 33, 11, 44]', 'sortArr.sort():',sortArr, 'sortArr1.sort((a,b) => a - b)', sortArr1)

// .reverse() 
console.log('.reverse(): reverses the elements of the array in place')
const reverseArr = [1,'a',2,3,'b',4,'c',5]
reverseArr.reverse()
console.log(`orig arr: [1,'a',2,3,'b',4,'c',5]`, reverseArr)

