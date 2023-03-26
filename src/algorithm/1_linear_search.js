const array = [1, 3, 5, 10, 2, 7, 4, 2, 3, 8, 7, 5]
let count = 0

function linearSearch(array, item){
    for (let i = 0; i < array.length; i++) {
        count += 1
        if(array[i] === item){
            return array[i]
        }
    }
    return null
}

console.log(linearSearch(array, 8))

console.log('count = ', count)
