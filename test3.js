const readline=require('readline')
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
rl.question("Enter a number: ", function(num1){
    num1=parseInt(num1)

    rl.question("Enter another number: ", function(num2){
        num2=parseInt(num2)

        let num3=num1*num2
        console.log(num3)

        rl.close()
    })
})