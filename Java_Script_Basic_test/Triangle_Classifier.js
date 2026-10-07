let side_1=30;
let side_2=30;
let side_3=30;
//&& ((side_1 && side_2 && side_3)>0))
//(typeof (side_1) ==="number" && typeof(side_2)==="number" && typeof(side_3)==="number") && 

if((typeof (side_1) ==="number" && typeof(side_2)==="number" && typeof(side_3)==="number") && (side_1 >0 && side_2 >0 && side_3 >0))
{
   
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
    console.log("check your inputs and make sure it should be number..!!!")
}