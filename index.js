//program to find largest marks of student from given array.

const marks = [89 , 79 , 22 , 67 , 97];

let large_marks = marks [0];

for(let i = 0 ; i<= large_marks ; i++)
{
    if(marks[i] > large_marks)
    {
        large_marks = marks[i];
    }
}

console.log(`The largest marks of a student are ${large_marks}`)