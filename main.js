let array=[20,30,40,15,9,7,10,12,5,22];

console.log(array);

let evenArray=[];
let oddArray=[];

let b=0;
let c=0;

for(i=0; i<array.length; i++){
  if (i% 2 === 0) {
    evenArray[b]=array[i];
    b++;
  }
  else{
    oddArray[c]=array[i];
    c++;
  }
}

console.log(evenArray);
console.log(oddArray);