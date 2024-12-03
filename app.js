
const myNumbers = [1,2,3,4,5]

// argument of forEach() is a function

let newArrayForEach = []

myNumbers.forEach((element)=>{
    console.log(element)
    newArrayForEach.push(element*2)
})

const newArray = myNumbers.map((element)=>{
    
    return element *2
    
})

console.log(newArray)
console.log(newArrayForEach)


const myNames = ["Hasan","Sara","Loai"]

const newNames =  myNames.map((element)=>{
    return element + " is in Software Engineering"
})

console.log(newNames)

console.log([1,2,3].map(()=>{

}))


const nums = [100,2,5,42,99]

const filteredNums = nums.filter((element, index)=>{


            return element <100

        
})

console.log(filteredNums)