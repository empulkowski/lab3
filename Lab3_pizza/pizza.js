$(document).ready(function () {
    $("button").on("click", calculate);
});

function calculate()
{
//gather all input

//Ask user for number of Pizzas
//convert to number type
    let totalPizzas = parseFloat( $("#numberOfPizzas").val() );

//Ask user number of toppings
//convert to number type
    let toppings = parseFloat( $("#numberOfToppings").val() );

//Ask user for number of employees
//convert to number type
    let employees = parseFloat( $("#numberOfPeople").val() );

//do some math...

//multiply total number of pizzas by 15.00 to get cheese pizza cost
    let pizzaCost = totalPizzas * 15.00;

//multiply number of toppings by 1.25 to get extra topping cost
    let toppingCost = toppings * 1.25;

//add cheese pizza cost and extra topping cost to get total cost
    let totalCost = pizzaCost + toppingCost;

//divide total cost by number of people to find individual cost
    let costPerPerson = totalCost / employees;


// OUTPUT!

// alert the cost for each person
}
$("span#costPerPerson").text(totalCost.toFixed(2));

$(".output").show();