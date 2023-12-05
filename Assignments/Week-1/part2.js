let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];

// 1. Write a program prints all the even numbers in an array 

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
// 2. Write a program to print the biggest number in an arrya 
let maxi=arr[0];
for(let i=0;i<arr.length;i++){
   if(maxi<arr[i])
   {
    maxi=arr[i];
   }
}
console.log(maxi);

// 3. Write a program that prints all the male people’s first name given a complex object 

let people = [
    { name: 'Alice', gender: 'Female', age: 25 },
    { name: 'Bob', gender: 'Male', age: 30 },
    { name: 'Charlie', gender: 'Male', age: 22 },
    { name: 'Diana', gender: 'Female', age: 28 },
    { name: 'Eva', gender: 'Female', age: 35 },
    { name: 'Frank', gender: 'Male', age: 40 },
    { name: 'Grace', gender: 'Female', age: 20 },
    { name: 'Henry', gender: 'Male', age: 27 },
    { name: 'Ivy', gender: 'Female', age: 32 },
    { name: 'Jack', gender: 'Male', age: 24 }
];

for(let i=0;i<people.length;i++)
{
    if(people[i].gender=='Male')
    {
        console.log(people[i].name);
    }
}

// 4. Write a program that reverses all the elements of an array
let size=arr.length;
for(let i=0;i<arr.length/2;i++)
{

let temp = arr[i];
arr[i] = arr[size - i];
arr[size - i] = temp;

}

for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
