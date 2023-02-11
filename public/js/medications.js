const medicationForm = document.getElementById("medication-form");

async function addMedication(event) {
  event.preventDefault();
  const medicationName = document
    .getElementById("medication-name")
    .value.trim();
  const medicationDosage = document
    .getElementById("medication-dosage")
    .value.trim();
  const medicationNotes = document
    .getElementById("medication-notes")
    .value.trim();
  const userId = document.getElementById("medication-user-id").value.trim();

  try {
    if (medicationName && medicationDosage && medicationNotes) {
      const medicationData = {
        name: medicationName,
        dosage: medicationDosage,
        notes: medicationNotes,
        user_id: userId,
      };

      const response = await fetch("/api/medications", {
        method: "POST",
        body: JSON.stringify(medicationData),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        location.reload();
      }
    }
  } catch (err) {
    alert("Failed to add medication, please try again");
  }
}

// checkUser should be defined before it is used
medicationForm.addEventListener("submit", addMedication);

// set a true flag so that homepage reloads while navigating back
localStorage.setItem("isNavigationRequired", "true");
