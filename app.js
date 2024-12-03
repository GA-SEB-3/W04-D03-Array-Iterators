
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

const filteredNums = nums.find((element, index)=>{


            return element <100

})

console.log(filteredNums)

const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'blue', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
  ];



  function findCar(value){
    
  }
  const whiteCar = cars.findIndex((element)=>{

    return element.color === "blue"
  })
  

  console.log(whiteCar)

  const haveOldCar = cars.some((element)=>{

    return element.year < 2000
  })

  console.log(haveOldCar)