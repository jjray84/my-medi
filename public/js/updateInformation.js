const updateButton = document.getElementById("update");

async function updateInformation(event) {
    event.preventDefault();
    const personal_number = document.getElementById("personal-number");
    const emergency_contact = document.getElementById("emergency-name");
    const emergency_number = document.getElementById("emergency-number");
    const blood_type = document.getElementById("blood-type");
    const allergies = document.getElementById("allergies");
    const transplants = document.getElementById("transplants");
    const devices = document.getElementById("devices");
    const notes = document.getElementById("notes")
    const userId = document.getElementById("medication-user-id").value.trim();
  
    const informationArray = [
      personal_number,
      emergency_contact,
      emergency_number,
      blood_type,
      allergies,
      transplants,
      devices,
      notes,
    ];
  
    const valueArray = informationArray.map((info) => {
      if (!info.value) {
        info.value == null;
      } else {
        return info.value;
      }
    });
  
    const information = {
      personal_number: valueArray[0],
      emergency_contact: valueArray[1],
      emergency_number: valueArray[2],
      blood_type: valueArray[3],
      allergies: valueArray[4],
      transplants: valueArray[5],
      devices: valueArray[6],
      notes: valueArray[7],
      user_id: userId,
    };
  
    const response = await fetch("/edit/information", {
      method: "PUT",
      body: JSON.stringify(information),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (response.ok) {
      alert("information updated");
      document.location.replace("/edit/information");
    } else {
      alert("Failed to add information");
    }
  }

  updateButton.addEventListener("click", updateInformation)
