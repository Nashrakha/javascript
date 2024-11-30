const myBody = document.body;
myBody.style.backgroundColor = "yellow";

// const box2 = document.getElementById("box-2");
// box2.style.backgroundColor = "red";
// box2.style.color="blue";
// box2.style.borderRadius = "50%";

// const boxes = document.querySelectorAll(".box");
// boxes.forEach((box) => {
//     box.style.color = "blue";
//     box.style.backgroundColor="red"
// });

const box1 = document.getElementById("box-1");
// box1.innerHTML="<h1>Nashra Khan</h1>";

const boxes = document.getElementsByClassName("box");
for (let i = 0; i < boxes.length; i++) {
  boxes[i].classList.add("round-border");
}
box1.classList.remove("round-border");

// creating new element
// const newPara = document.createElement("p");
// // newPara.classList.add("box");
// // newPara.classList.add("para");
// // container.appendChild(newPara);

const messages = [
  "Hello, my name is Nashra Khan. I am a frontend developer.",
  "Welcome to my portfolio website!",
  "I love creating responsive websites using HTML, CSS, and JavaScript.",
  "Feel free to connect with me for web development projects!",
];
const container = document.getElementById("container");

messages.forEach((messages) => {
  const newPara = document.createElement("p");
  newPara.innerText = messages;
  newPara.classList.add("box", "para");
  container.appendChild(newPara);
});

function myClick() {
  box1.style.backgroundColor = "red";
}
