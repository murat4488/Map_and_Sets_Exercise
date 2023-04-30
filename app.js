new Set([1,1,2,2,3,4]);
// [1,2,3,4]

[...new Set("referee")].join("");
//'ref'

let m = new Map();

m.set([1,2,3], true);
m.set([1,2,3], false);
//{Array1:true, Array2:false}

function hasDuplicate(arr){
    const set = new Set(arr);
    if(arr.length === set.size){
        return false;
    }
    return true;
}


hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false


function vowelCount(str){
    const vowels = 'aeiou';
    const map = new Map();
    for(let word of [...str]){
    
        if([...vowels].includes(word)){
            
            map.set(word, (map.get(word) || 0) + 1);
        }   
    }
   
    return map;
}

console.log(vowelCount('awesome')) // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount('Colt')) // Map { 'o' => 1 }