(() => {
  const question1 = document.getElementById("question-1");
  question1.style.color = "blue";

  const question2 = document.querySelector(".question-2");
  question2.style.color = "red";

  const question3 = document.querySelectorAll(".question-3");
  console.log(question3);
  for (let element of question3) {
    element.style.color = "orange";
  }

  const question4 = document.querySelector("#question-4");
  question4.parentNode.style.backgroundColor = "purple";

  const question5 = document.getElementById("question-5");
  question5.style.display = "none";

  const question6a = document.querySelector("#subheading");
  question6a.classList.add("big-text");

  const question6b = document.querySelector("#subheading2");
  question6b.classList.remove("big-text");

  const question7 = document.getElementById("yourname");
  question7.innerText = "Sudha";
  question7.style.color = "red";

  const question8 = document.querySelector("#yourname2");
  question8.innerText = `Hello ${question7.innerText}`;
  question8.style.color = "red";

  // const question9 = document.querySelectorAll(".section");
  // console.log(question9);

  const array = ["Finish homework", "Did lunch", "Watch movie"];
  const question9Elements = document.querySelectorAll(".task");
  for (let i = 0; i < question9Elements.length; i++) {
    question9Elements[i].innerText = array[i];
  }
  console.log(array);
})();
