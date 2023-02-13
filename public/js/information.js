const submitButton = document.getElementById("submit-new")

submitButton.addEventListener("click", addInformation)

async function addInformation (event) {
    event.preventDefault();
    const personal_number = document.getElementById('personal-number')
    const emergency_contact = document.getElementById('emergency-name')
    const emergency_number = document.getElementById('emergency-number')
    const blood_type = document.getElementById('blood-type')
    const allergies = document.getElementById('allergies')
    const transplants = document.getElementById('transplants')
    const devices = document.getElementById('devices')
    const userId = document.getElementById("medication-user-id").value.trim();

    const informationArray = [personal_number, emergency_contact, emergency_number, blood_type, allergies, transplants, devices]
    

    const valueArray = informationArray.map((info) => {
        if (!info.value) {
            info.value == null;
        } else {
            return info.value
        }
    })

    const information = {
        personal_number: valueArray[0],
        emergency_contact: valueArray[1],
        emergency_number: valueArray[2],
        blood_type: valueArray[3],
        allergies: valueArray[4],
        transplants: valueArray[5],
        devices: valueArray[6],
        user_id: userId,
      };

      console.log(information)

    const response = await fetch('/edit/information', {
      method: 'POST',
      body: JSON.stringify(information),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
        alert("information added")
      document.location.replace('/edit/information');
    } else {
      alert('Failed to add information');
    }
  }