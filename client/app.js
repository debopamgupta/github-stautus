const wrapper = document.getElementById("wrapper");
wrapper.style.display = "none";

const API_URL =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
    ? "http://localhost:3000/api/status"
    : "https://ghstatusfn.vercel.app/api/status";

function createStatusElement(status) {
  {
    if (status.name.toLowerCase().startsWith("visit")) return; // weird extra link element

    const holderDiv = document.createElement("div");
    holderDiv.classList.add("stat-div");

    const titleDiv = document.createElement("div");
    titleDiv.textContent = status.name;

    const statusDiv = document.createElement("div");
    statusDiv.textContent = status.status;
    statusDiv.classList.add("status");

    holderDiv.appendChild(titleDiv);
    holderDiv.appendChild(statusDiv);

    wrapper.appendChild(holderDiv);
  }
}

function getData() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((json) => {
      loading.style.display = "none";
      wrapper.style.display = "";
      description.textContent = json.description;
      const statuses = json.components;

      statuses.forEach((status) => {
        console.log(status);
        createStatusElement(status);
      });
    });
}
getData();

refreshbtn.addEventListener("click", (e) => {
  description.textContent = "";
  loading.style.display = "";
  wrapper.style.display = "none";
  getData();
});
