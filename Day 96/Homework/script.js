// Task 0
let object = {
    Name: "Luka",
    Last_Name: "Mtchedlidze",
    Age: 13,
}
console.log(object.Name);
console.log("My Name Is " + object.Name , "My Last Name Is " + object.Last_Name , "My Name Is " + object["Name"] , "My Last Name Is " + object["Last_Name"] , "I Am " + object["Age"] + " Years Old");


// Task 1
const student = {
    name: "Luka Mtchedlidze",
    age: 21,
    faculty: "აიწიშნიკობა , პრაგრამისწიობა და ძიეველოპიერობა ტოოო", 
    course: 3,
    gpa: 3.8,
};
console.log("Student Object:", student);
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Faculty:", student.faculty);
console.log("Course:", student.course);
console.log("GPA:", student.gpa);
console.log("Name:", student["name"]);
console.log("Age:", student["age"]);
console.log("Faculty:", student["faculty"]);
console.log("Course:", student["course"]);
console.log("GPA:", student["gpa"]);