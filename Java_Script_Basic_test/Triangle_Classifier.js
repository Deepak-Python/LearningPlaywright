let side_1=30;
let side_2=30;
let side_3=30;


if((typeof (side_1) ==="number" && typeof(side_2)==="number" && typeof(side_3)==="number") && (side_1 >0 && side_2 >0 && side_3 >0))
{

    if((!Number.isInteger(side_1)) || (!Number.isInteger(side_2)) || (!Number.isInteger(side_3)))
    {
        side1=Number.parseInt(side_1)
        side2=Number.parseInt(side_2)
        side3=Number.parseInt(side_3)
        console.log("Side 1 is:> ", +side_1 + " and Side2 is:> "+side_2+ " and Side3 is:> "+side_3)

    }    
   
        if (side_1 ===side_2 && side_1===side_3 && side_2===side_3)
        {
            console.log("equilateral triangle..!!!")
        }
        else if (side_1 ===side_2 || side_1 ===side_3 || side_2===side_3)
        {
            console.log("isosceles triangle..!!!")
        }
        else 
        {
            console.log("scalene triangle..!!!")
        }

        }
else{
    console.log("check your inputs and make sure it should be number and non negative as well..!!!")
}