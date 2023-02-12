const medicationForm = document.getElementById("medication-form");

// getting elements for the add form so that we can update the contents based on add or update functionality
const medicationHeaderEl = document.getElementById("medication-header");
const medicationButtonEl = document.getElementById("add-medication");
const medicationNameEl = document.getElementById("medication-name");
const medicationDosageEl = document.getElementById("medication-dosage");
const medicationNotesEl = document.getElementById("medication-notes");

// adding a variable mode to track if user is adding a new medication or updating an existing one
let mode = "add";

// adding a variable to track medication id that we would need while calling the PUT endpoint
let medicationId;

// function that handles form submission, will perform POST or PUT to medications endpoint
// based on if user is adding a new one or updating a medication.
async function addorUpdateMedication(event) {
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

  // variable to store method and url
  let method;
  let url;

  // based on the mode, if we are adding a new medication or updating an existing one
  // assign method to POST or PUT
  // and update url accordingly
  if (mode === "add") {
    method = "POST";
    url = "/api/medications";
  } else {
    method = "PUT";
    url = `/api/medications/${medicationId}`;
  }

  try {
    if (medicationName && medicationDosage && medicationNotes) {
      const medicationData = {
        name: medicationName,
        dosage: medicationDosage,
        notes: medicationNotes,
        user_id: userId,
      };

      const response = await fetch(url, {
        method: method,
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

/**
 * when the user cancels from update form, reset the medication form to show
 * add medication information.
 */
function resetAddForm() {
  mode = "add";
  medicationId = undefined;
  medicationHeaderEl.innerText = "Add Your New Medication";
  medicationButtonEl.innerText = "Add medication";
  medicationNameEl.value = "";
  medicationDosageEl.value = "";
  medicationNotesEl.value = "";

  // hide the cancel button as we do not want to show it for add mode
  document.getElementById("cancel-update-medication").classList.add("d-none");
}

/**
 * when the user wants to edit an existing medication, update the medication form to show the
 * medication information name, dosage, notes and also set the medicationId variable to used
 * when the update form is submitted.
 */
function updateEditForm(name, dosage, notes, medId) {
  mode = "update";
  medicationId = medId;
  medicationHeaderEl.innerText = "Edit Your Medication";
  medicationButtonEl.innerText = "Update Medication";
  medicationNameEl.value = name;
  medicationDosageEl.value = dosage;
  medicationNotesEl.value = notes;

  // show the cancel button which is hidden for add medication
  // clicking on cancel will reset to the form back to add mode
  document
    .getElementById("cancel-update-medication")
    .classList.remove("d-none");
}

async function deleteMedication(medicationId) {
  try {
    const response = await fetch(`/api/medications/${medicationId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      location.reload();
    }
  } catch (error) {
    alert("Failed to delete medication, please try again");
  }
}

// checkUser should be defined before it is used
medicationForm.addEventListener("submit", addorUpdateMedication);

// set a true flag so that homepage reloads while navigating back
localStorage.setItem("isNavigationRequired", "true");
