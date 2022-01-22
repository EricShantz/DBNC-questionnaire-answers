
/*To refactor this code I replaced the if statements and nested ternary operator with a 
switch statement to cover all conditions. I also renamed some of the variables to be 
more descriptive to improve readability*/

switch(recipe){
  case "SPANISH":
    fudgeType = SPANISH_FUDGE
  case "FRENCH":
    fudgeType = FRENCH_FUDGE
  case "FRENCH":
    fudgeType = FRENCH_FUDGE
    chocolate = 7
  default:
    fudgeType = 1;
    totalCost = basePrice;
}
  totalCost = basePrice * fudgeType;
  sugar = 2 * bottom(totalCost) + top(totalCost) * 1.17;
