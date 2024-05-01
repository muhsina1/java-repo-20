function oddSum(array){
    let sum =0

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if(element%2!=0){
            sum =sum+ element
            console.log(sum)
        }
       // else{
           // console.log("")
        //}
       
        
    }
    return sum;
}
const myNumber =[1, 8, 2, 7, 4, 9, 5, 3]
oddSum(myNumber)