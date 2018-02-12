evens=[2,4,6,8,10,12]

odds  = evens.map(v=>v+1)
console.log(odds);
pairs=evens.map(v=>({odd:v+1,even:v}))
console.log(pairs)
nums  = evens.map((v, i) => {v + i;})
console.log(nums);