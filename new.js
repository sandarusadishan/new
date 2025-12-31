document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  document.getElementById("result").textContent = `Hello, ${name}!`;
  console.log("Sandaru Sadishan");
  
});
