// Custom implementation of Array and String manipulation methods

// Custom Splice Function (named customSplice)
function customSplice(arr, start, deleteCount, ...items) {
    const result = [];
    let deletedItems = [];
  
    // Handle negative start index
    if (start < 0) {
      start = arr.length + start;
    }
  
    // Handle case when deleteCount is omitted
    if (deleteCount === undefined) {
      deleteCount = arr.length - start;
    }
  
    // Ensure start and deleteCount are within bounds
    start = Math.min(Math.max(start, 0), arr.length);
    deleteCount = Math.min(Math.max(deleteCount, 0), arr.length - start);
  
    // Copy elements before start index
    for (let i = 0; i < start; i++) {
      result.push(arr[i]);
    }
  
    // Copy elements to be deleted
    for (let i = start; i < start + deleteCount; i++) {
      deletedItems.push(arr[i]);
    }
  
    // Add new items
    for (let i = 0; i < items.length; i++) {
      result.push(items[i]);
    }
  
    // Copy elements after the deleted portion
    for (let i = start + deleteCount; i < arr.length; i++) {
      result.push(arr[i]);
    }
  
    // Modify the original array
    arr.length = 0;
    for (let i = 0; i < result.length; i++) {
      arr.push(result[i]);
    }
  
    // Return deleted items
    return deletedItems;
  }
  
  // Example usage of customSplice:
  const array1 = [1, 2, 3, 4, 5];
  const removedItems = customSplice(array1, 1, 2, 10, 11);
  console.log(array1); // Output: [1, 10, 11, 4, 5]
  console.log(removedItems); // Output: [2, 3]
  
  // Custom Slice Function (named customSlice)
  function customSlice(arr, start, end) {
    const result = [];
  
    // Handle negative indices
    if (start < 0) {
      start = arr.length + start;
    }
    if (end < 0) {
      end = arr.length + end;
    }
  
    // Set default values if end is undefined
    start = Math.min(Math.max(start, 0), arr.length);
    end = end === undefined ? arr.length : Math.min(Math.max(end, 0), arr.length);
  
    // Copy elements to result array
    for (let i = start; i < end; i++) {
      result.push(arr[i]);
    }
  
    return result;
  }
  
  // Example usage of customSlice:
  const array2 = [1, 2, 3, 4, 5];
  const slicedArray = customSlice(array2, 1, 3);
  console.log(slicedArray); // Output: [2, 3]
  
  // Custom Includes Function (named customIncludes)
  function customIncludes(arr, value) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return true;
      }
    }
    return false;
  }
  
  // Example usage of customIncludes:
  const array3 = [1, 2, 3, 4, 5];
  console.log(customIncludes(array3, 3)); // Output: true
  console.log(customIncludes(array3, 6)); // Output: false
  
  // Custom To Lower Case Function (named customToLowerCase)
  function customToLowerCase(str) {
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
  
      // Check if character is uppercase letter
      if (charCode >= 65 && charCode <= 90) {
        // Convert to lowercase by adding 32
        result += String.fromCharCode(charCode + 32);
      } else {
        result += str[i];
      }
    }
  
    return result;
  }
  
  // Example usage of customToLowerCase:
  console.log(customToLowerCase("Hello World!")); // Output: "hello world!"
  
  // Custom To Upper Case Function (named customToUpperCase)
  function customToUpperCase(str) {
    let result = "";
  
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
  
      // Check if character is lowercase letter
      if (charCode >= 97 && charCode <= 122) {
        // Convert to uppercase by subtracting 32
        result += String.fromCharCode(charCode - 32);
      } else {
        result += str[i];
      }
    }
  
    return result;
  }
  
  // Example usage of customToUpperCase:
  console.log(customToUpperCase("Hello World!")); // Output: "HELLO WORLD!"
  
  // Custom Push Function (named customPush)
  function customPush(arr, ...items) {
    const originalLength = arr.length;
  
    for (let i = 0; i < items.length; i++) {
      arr[originalLength + i] = items[i];
    }
  
    return arr.length;
  }
  
  // Example usage of customPush:
  const array4 = [1, 2, 3];
  console.log(customPush(array4, 4, 5)); // Output: 5 (new length of the array)
  console.log(array4); // Output: [1, 2, 3, 4, 5]
  
  // Custom Pop Function (named customPop)
  function customPop(arr) {
    if (arr.length === 0) {
      return undefined;
    }
  
    const lastElement = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return lastElement;
  }
  
  // Example usage of customPop:
  const array5 = [1, 2, 3];
  const lastElement = customPop(array5);
  console.log(lastElement); // Output: 3
  console.log(array5); // Output: [1, 2]