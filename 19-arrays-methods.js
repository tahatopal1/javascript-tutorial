
    // Methods on arrays

    // pop(): Removes last element on array and returns it
    var arr = new Array(10, 20, 30, 40, 50);
    var deletedItem = arr.pop();

    console.log("Removed item = " + deletedItem);
    console.log("Array after using pop(): " + arr);

    console.log("-------------------------------");

    // push(): Adds one or more elements to array and returns new lenght
    arr = new Array(1, 2, 3, 4, 5);
    console.log("Initial values of array: " + arr + ", length: " + arr.length);

    var length = arr.push(6);
    console.log("After using push() with one element: " + arr + ", new length: " + length);

    length = arr.push(7, 8, 9);
    console.log("After using push() with several element: " + arr + ", new length: " + length);

    // reverse(): Reverses the alignment of elements on array then returns the new array
    arr.reverse();
    console.log("After using reverse(): " + arr);

    // shift(): Removes the element in the first index and returns it
    arr.shift();
    console.log("After using shift(): " + arr);

    // unshift(): Adds one or more elements to top of the array and returns the new length
    arr.unshift(50,60,70);
    console.log("After using unshift() with several element: " + arr);

    // sort(): Sorts elements in array according to unicode eqiuvalent
    arr.sort();
    console.log("After using sort(): " + arr);

    function compareNumber1(a, b){
        return a-b;
    }

    function compareNumber2(a, b){
        return b-a;
    }

    // Sorting according numeric values
    arr.sort(compareNumber1);
    console.log("After using sort(compareNumber1): " + arr);

    arr.sort(compareNumber2);
    console.log("Reverse sorting with sort(compareNumber2): " + arr);

    // splice(): Removes and adds several item
    var splicedArr = arr.splice(0,3);
    console.log("After using splice: " + arr);
    console.log("Spliced array: " + splicedArr);

    splicedArr = arr.splice(4); // Removes every element after 4. index
    console.log("After using splice with one parameter: " + arr);
    console.log("Spliced array: " + splicedArr);

    splicedArr = arr.splice(1,2,10,15,2,4); // Removes 2 item after 1. index and adds other items (10,15,2,4)
    console.log("After using splice with several parameter: " + arr);
    console.log("Spliced array: " + splicedArr);

    splicedArr = arr.splice(2, 0, 12,14,16,18); // Using splice without removing
    console.log("After using splice without removing element: " + arr);
    console.log("Spliced array: " + splicedArr);

    // Some searching methods on arrays

    // indexOf(): Searches an element on array and returns the index of it (if not found, returns -1)

    console.log("Index of element 16: " + arr.indexOf(16));
    console.log("Index of element 16 starting from 5. index: " + arr.indexOf(16, 5)); // Not found, because searching starts from 5. index

    // lastIndexOf(): Searches an element on array and return last index of it (if not found, returns -1)
    arr.push(10, 12, 14, 16);
    console.log("Last index of element: " + arr.lastIndexOf(10));

    // Some iteration methods on arrays

    // forEach(): runs the function determined as a parameter on every elements

    var summary = 0;

    function multiply(element, index, array){
        array[index] = element*2;
    }

    function sum(element){
        summary += element;
    }

    arr.forEach(multiply);
    console.log("After multiplying array with 2 by using forEach(): " + arr);

    arr.forEach(sum);
    console.log("Summary of array by using forEach(): " + summary);

    // every(): runs the function determined as a parameter on every elements until function returns false

    var modular;

    function test(element, index){
        modular = index;
        return element % 3 !== 0;
    }

    arr.every(test);
    console.log("First element can be divided by 3: " + modular);

    // some(): runs the function determined as a parameter on every elements until function returns true

    function test2(element, index){
        modular = index;
        return element % 18 === 0;
    }

    arr.some(test2)
    console.log("First element can be divided by 18: " + modular);

    // filter(): runs the function determined as a parameter on every elements and returns the list of true results

    function testDivBy5(element){
        return element % 5 === 0;
    }

    var arr_divBy5 = arr.filter(testDivBy5);
    console.log("Elements can be divided by 5: " + arr_divBy5);

    // map(): runs the function determined as a parameter on every elements and returns the list of function results

    function testDivBy10(element){
        return (element % 10 === 0) ? "T" : "F";
    }

    var arr_divBy10 = arr.map(testDivBy10);
    console.log("Map of elements can be divided by 10: " + arr_divBy10);

    // Other methods on arrays

    // concat(): adds several items on array and returns it (but does not change the array)
    arr.concat(100, 200, 300);
    console.log(arr.toString()); // Array is still the same

    arr = arr.concat(200, 500, 700);
    console.log("After using concat: " + arr);

    // join(): adds seperator between elements
    console.log(arr.join("-"));

    // slice(): copies the range between parameters from the array and returns it
    console.log("Rest of the array after 2. index: " + arr.slice(2));
    console.log("Array between 5. and 10. indices: " + arr.slice(5, 10));
