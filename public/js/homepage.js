const buttonsSection = document.getElementById("buttons-section");
const editMedsButton = document.getElementById("edit-meds");
const editInfoButton = document.getElementById("edit-info");

buttonsSection.addEventListener("click", (event) => {
  const active = event.target;

  if (active === editMedsButton) {
    document.location.href = "/edit/medications";
  } else if (active === editInfoButton) {
    document.location.href = "/edit/information";
  }
});

// adding this to reload homepage while navigating back from edit pages
// so that the page refreshes with new content from server
const isReload = localStorage.getItem("isNavigationRequired");
if (isReload === "true") {
  localStorage.setItem("isNavigationRequired", "false");
  location.reload();
}
