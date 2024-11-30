let students = [
  { id: "001", name: "alina", sports: "cricket" },
  { id: "002", name: "nashra", sports: "hockey" },
  { id: "003", name: "iram", sports: "basketball" },
  { id: "004", name: "anam", sports: "cricket" },
];
// students.filter((currentValue,index,array)=>{

// })
// const newArray = students.filter((currentValue) => {
//   if (currentValue.id % 2 == 0) return true; // divided by 2
//   else return false;
// });
// console.log("new array is here...")
// console.log(newArray)
const newArray = [];
for (let i = 0; i < students.length; i++) {
  if (students[i].id % 2 == 0) {
    newArray.push(students[i]);
  }
}
console.log(newArray);