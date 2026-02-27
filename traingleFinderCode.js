
let side1=22.89;
let side2=29;
let side3=26.86;   

if((typeof (side1) ==="number") && (typeof (side2) ==="number") && (typeof (side3) ==="number"))
{

if((!Number.isInteger(side1)) || (!Number.isInteger(side2)) || (!Number.isInteger(side3)))
{
    side1=Number.parseInt(side1)
    side2=Number.parseInt(side2)
    side3=Number.parseInt(side3)
    console.log("Side 1 is:> ", +side1 + " and Side2 is:> "+side2+ " and Side3 is:> "+side3)

}

if(side1===side2 && side1===side3 && side2===side3)
{
    console.log("This is equilateral traingle...!!!")
}
else if ((side1===side2 && side1!==side3)|| (side1===side3 && side1!==side2)|| (side2===side3 && side2 !==side1))
{
    console.log("This is isosceles traingle...!!!")
}
else if(side1!==side2 && side1!==side3)
{
    console.log("This is scalene traingle...!!!")
}
else
{
    console.log("Please check the input for sides of traingle provided...!!!")
}
}else
{
    console.log("Entered input for all sides is not numeric...!!!")
}