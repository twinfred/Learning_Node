module.exports = function(){
    return {
        add: function(num1, num2){
            var answer = num1 + num2;
            console.log("Answer: " + answer);
        },
        multiply: function(num1, num2){
            var answer = num1 * num2;
            console.log("Answer: " + answer);
        },
        square: function(num){
            var answer = num * num;
            console.log("Answer: " + answer);
        },
        random: function(num1, num2){
            var span = num2 - num1;
            var answer = Math.floor(Math.random() * span) + num1;
            console.log("Random Number: " + answer);
        },
    }
}