import "./styles.css";

document.getElementById("addBtn").addEventListener("click", displayData);
function displayData() {
  let txt = document.getElementById("inputTxt").value;
  let list = document.getElementById("list");
  if (txt === "") {
    alert("Invalid entry");
  }
  if (txt) {
    list.innerHTML = list.innerHTML + "<li>" + txt + "</li>";
  }
  document.getElementById("inputTxt").value = "";
}
