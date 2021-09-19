wrapper.style.display = "none";
// use vercel dev to spin up the serverless function
const API_URL =
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
    ? "http://localhost:3000/api/status"
    : "https://ghstatusfn.vercel.app/api/status";

function getData() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((json) => {
      loading.style.display = "none";
      wrapper.style.display = "";
      description.textContent = json.description;
      const statuses = json.components;
      for (let i = 0; i < 8; i++) {
        switch (i) {
          case 0:
            gitopsStatus.textContent = statuses[i].status;
            break;
          case 1:
            apireqStatus.textContent = statuses[i].status;
            break;
          case 2:
            webhooksStatus.textContent = statuses[i].status;
            break;
          case 4:
            issuesStatus.textContent = statuses[i].status;
            break;
          case 5:
            actionsStatus.textContent = statuses[i].status;
            break;
          case 6:
            packagesStatus.textContent = statuses[i].status;
            break;
          case 7:
            pagesStatus.textContent = statuses[i].status;
            break;
          default:
            break;
        }
      }
    });
}
getData();

refreshbtn.addEventListener("click", (e) => {
  description.textContent = "";
  loading.style.display = "";
  wrapper.style.display = "none";
  getData();
});
