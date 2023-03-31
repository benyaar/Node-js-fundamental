 let obj1 = {name: "name"}
 let obj2 = obj1

 obj1 = {name: "Vasya"}

 // console.log(obj2)

 function brackets(str) {
    const stack = []
     const obj ={
        "{": "}",
        "(": ")",
        "[": "]",
     }

     for (let i = 0; i < str.length ; i++) {
         if (str[i] === '(' || str[i] === '[' || str[i] === '{' ){
             stack.push(str[i])
         } else {
             const last = stack.pop()
             console.log('str', str[i])
             console.log('last', obj[last])
             if(str[i] !== obj[last]) return false
         }
     }
     if(stack.length) return false
     return true
 }
 //console.log(brackets("{()}"))

 function withoutRepeat(arr) {
    const newArray = []
     for (let i = 0; i < arr.length; i++) {
         let count = 0
         for (let j = 0; j < arr.length ; j++) {
             if(arr[i] === arr [j]){
                 count++
             }
         }
         if(count === 1){
             newArray.push(arr[i])
         }
     }
     return newArray
 }

 //console.log(withoutRepeat([1,1,1,3,4,5,4,4,4,3,3,6,9,2]))

 function withoutRepeat2(arr) {
     const newArray = []
     const obj = {}

     for (let i = 0; i < arr.length; i++) {
         const currentEl = arr[i]
         if(!(currentEl in obj)){
             obj[currentEl] = 1
         } else {
             obj[currentEl] +=1
         }
     }
     Object.keys(obj).forEach(el => {
        if(obj[el] === 1 )  newArray.push(el)
     })

     return newArray
 }

 console.log(withoutRepeat2([1,1,1,3,4,5,4,4,4,3,3,6,9,2]))



