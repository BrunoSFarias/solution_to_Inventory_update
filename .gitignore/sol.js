
function updateInventory(arr1, arr2) {
    
  // All inventory must be accounted for or you're fired!
  
  var inv = arr1.concat(arr2).reduce(function(acc, next){
    if(acc[next[1]]){
      acc[next[1]]+= next[0];
    } else {
acc[next[1]]= next[0];
    }
    return acc;
  },{});
    return Object.keys(inv).map(function(val){
      return[inv[val],val];
    }).sort(function(a,b){
        if([a]===[b]){
return 0;
} else {
  return (a[1]<b[1]) ? -1 : 1 ;   
     }
    
    });
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
