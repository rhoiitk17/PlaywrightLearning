//print Hello

console.log('Hello');

// perform addition

let x = 20;
let y = 30;
let c = x+y;
let d = x*y;
console.log('the reuslt is:' +c);
console.log('the reuslt is:' +d);

// perform reverse

let str = "Hello World";
let reversed = str.split("").reverse().join("");

console.log(reversed);


// function

Function()
{
console.log('hello!! This is a funcion decalaration');
}

//

let j=5;
do{
    console.log(j*j);
    j++;
}
while(j<=5);


let i = [1,2,3,4,5];
console.log(i[3]);
console.log(typeof(i));


//

let person={

 pid: 10,
 pname: "Rohit",

}

for (let i in person)
{
    console.log(person[i]);
}

// launch URL


test('Launch URL', async ({ page }) => {
    await page.goto('https://www.google.com');
})


