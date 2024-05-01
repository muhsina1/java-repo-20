function facto(number){
 
    let result = 1
    for(let i=1; i<number; i++){
       result =result*i
    }
return result
}

const res =facto(6)
console.log(res)