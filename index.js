// Your code here

const arr = [1, 2, 3, -9];
const mapToNegativize = arr.map(function(arr){
  for (var i = 0; i < arr.length; i++) {
      if(arr[i]<0){
        arr[-i] = arr[i]
      }
      else if(arr[i]<0){
        arr[i] = arr[-i]
      }
  }
})
console.log(mapToNegativize);
