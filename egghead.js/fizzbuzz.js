/**
 * Write a program that prints the integers from 1 to 100 (inclusive).
 * But:
 *  - for multiples of three, print Fizz (instead of the number)
 *  - for multiples of five, print Buzz (instead of the number)
 *  - for multiples of both three and five, print FizzBuzz (instead of the number)
 *  - should render "Fizz","Buzz",number as string or number?
 *  - expect render
 * 1
 * 2
 * Fizz
 * 4
 * Buzz
 * ...
 * 14
 * FizzBuzz
 */ 
 
 fizzBuzz = () =>{
    let result = 'FizzBuzz results 1 thru 100'
    
    let mod = (i,n = 5) =>{
      return i % n === 0   
    } 
    
    for(let i = 1; i < 101; i++){

        
    mod(i,3) && mod(i)
    ? result += ('\nFizzBuzz')
    : mod(i,3)
            
    ? result += '\nFizz'
    : mod(i)
    
    ? result += '\nBuzz'
    : result += `\n${i}`

     }
     return result
 }
console.log(fizzBuzz())