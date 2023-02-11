const buttonsSection = document.getElementById("buttons-section");
const editMedsButton = document.getElementById("edit-meds");
const editInfoButton = document.getElementById("edit-info");

buttonsSection.addEventListener("click", (event) => {
    const active = event.target

    if (active === editMedsButton) {
        document.location.href = "/edit/medications"
    } else if (active === editInfoButton) {
        document.location.href = "/edit/information"
    }
})
