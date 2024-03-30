console.log("Hello world");

const projects = document.querySelector(".project");
console.log(projects);



let numberOfClicks = 0;
myName.addEventListener("click", function () {
  if (numberOfClicks % 2 == 0) {
    myName.style.color = "black";
  } else {
    myName.style.color = "blue";
  }
  numberOfClicks += 1;
});

const project1Btn = document.getElementById("project1Btn");
const project2Btn = document.getElementById("project2Btn");

project1Btn.addEventListener("click", function () {
  window.open("https://github.com/");
});

project2Btn.addEventListener("click", function () {
  window.open("https://github.com/");
});

hideBtn = document.getElementById("hide");
showBtn = document.getElementById("show");
const project_hidden = document.getElementsByClassName("project");

hideBtn.addEventListener("click", function () {
  for (p of project_hidden) {
    p.style.visibility = "hidden";
  }
});

showBtn.addEventListener("click", function () {
  for (p of project_hidden) {
    p.style.visibility = "visible";
  }
});

document.getElementById('imageUpload').addEventListener('change', function() {
  const reader = new FileReader();
  reader.onload = function(e) {
    const preview = document.getElementById('imagePreview');
    preview.src = e.target.result;
    preview.style.display = 'block';
  };
  reader.readAsDataURL(this.files[0]);
});
document.getElementById('schedule-preferences-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Example of retrieving input values
  const dayStart = document.getElementById('day-start').value;
  const dayEnd = document.getElementById('day-end').value;
  const studyHours = document.getElementById('study-hours').value;
  const freeTimeHours = document.getElementById('free-time-hours').value;

  console.log('Day starts at:', dayStart, ', ends at:', dayEnd, ', study hours:', studyHours, ', free time hours:', freeTimeHours);
  // Here, you'd typically do something with the data, like sending it to a server
});
const uploadFile = async (e) => {
  const file = e.target.files[0];
  if (file != null) {
    console.log("KSADKDKJHKJKHJKHKHKJHJKHKJ");
    const data = new FormData();
    data.append('file_from_react', file);

    let response = await fetch('/url_route',
      {
        method: 'post',
        body: data,
      }
    );
    let res = await response.json();
    if (res.status !== 1){
      alert('Error uploading file');
    }
  }
};