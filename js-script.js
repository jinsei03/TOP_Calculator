//does the operations
function operate(operation, num1, num2)
{
    if(operation === "+")
    {
        return num1 + num2;
    }
    else if(operation == "-")
    {
        return num1 - num2;
    }
    else if(operation === "*")
    {
        return num1 * num2;
    }
    else if(operation === "/")
    {
        //cannot divide by 0
        if(num2 == 0)
        {
            num = [];
            num1 = [];
            num2 = [];
            operating = false;
            index = 0;
            total = 0;
            solved = true;
            return "ERROR! HIT CA!";
        }
        else
        {
            return num1/num2;
        }
        
    }
}

//variables
let num = [];
let num1 = [];
let num2 = [];
let index = 0;
let operating = false;
let solved = false;

//grabs html
const btn = document.querySelectorAll("button");
const input = document.querySelector("input");

//listens to every button
for(let i = 0; i < btn.length; i++)
{
    btn[i].addEventListener("click",() => {
        //resets value if it was solved or if an extra operation needs to be performed
        if(solved == true)
        {
            input.value = "0";
            solved = false;
        }

        //prevents user from inputting too many zeros as a starting number
        if(btn[i].textContent === "CA")
        {
            input.value = "0";
        }
        if(btn[i].textContent === "0" && input.value === "0")
        {
            input.value = "0";
        }

        //takes in input and stores it into an array
        if(Number.isNaN(parseFloat(btn[i].textContent)) !== true)
        {
            if(input.value === "0")
            {
                input.value = "";
            }
            input.value += btn[i].textContent;
            num.push(btn[i].textContent);//stores into array
        }
        else if(btn[i].textContent != "CA" && btn[i].textContent != "=")
        {
            input.value = "";
            if(operating == false)
            {
                num.push(btn[i].textContent);//stores operation
                index = num.indexOf(btn[i].textContent);//grabs index of operation
                operating = true;//turns on to check if more operations are performed
            }
            //occurs when more operations are performed
            else
            {
                //solves and makes a new array
                num1 = num.slice(0, index);
                num1 = num1.join("");
                num1 = parseFloat(num1);

                num2 = num.slice(index + 1);
                num2 = num2.join("");
                num2 = parseFloat(num2);
               
                total = operate(num[index], num1, num2);
                input.value = total;

                num = [];//resets array
                solved = true;
                num.push(total);

                num.push(btn[i].textContent);
                index = num.indexOf(btn[i].textContent);
                //resets values
                total = 0;
                num1 = [];
                num2 = [];
            }
        }

        //solves remaining number or final operation
        if(btn[i].textContent === "=")
        {
            num1 = num.slice(0, index);
            num1 = num1.join("");
            num1 = parseFloat(num1);

            num2 = num.slice(index + 1);
            num2 = num2.join("");
            num2 = parseFloat(num2);

            total = operate(num[index], num1, num2);

            //checks for errors
            if(isNaN(total) == true || total == undefined)
            {
                input.value = "ERROR!";
            }
            else
            {
                input.value = total;//displays value
            }
            
            console.log(`${num1}, ${num2}, ${total}`);

            //resets everything
            num = [];
            num1 = [0];
            num2 = [];
            operating = false;
            index = 0;
            total = 0;
            solved = true;
        }
    });
}






