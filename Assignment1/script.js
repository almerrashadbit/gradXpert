function updateFunction(){

    let formText = document.querySelectorAll('input');

    isEmpty = false;
    
    formText.forEach(input => {
        if (input.value === '') {
            isEmpty = true;
        }
      });

      // Display a message based on the check result
    if (isEmpty) {
        alert('Please fill in all the fields.');
        location.reload();
    } else {
        alert("Profile updated")
    };

    const nama = document.getElementById("nama");
    const role = document.getElementById("role");
    const availability = document.getElementById("availability");
    const usia = document.getElementById("usia");
    const lokasi = document.getElementById("lokasi");
    const yearsexp = document.getElementById("yearsexp");
    const exampleInputEmail1 = document.getElementById("exampleInputEmail1");
    const formInput = document.getElementById("formInput");


    
    document.getElementById("avail_profile").innerHTML = availability.value;
    document.getElementById("usia_profile").innerHTML = usia.value;
    document.getElementById("lokasi_profile").innerHTML = lokasi.value;
    document.getElementById("pengalaman_profile").innerHTML = yearsexp.value;
    document.getElementById("email_profile").innerHTML = exampleInputEmail1.value;
    document.getElementById("nama_profile").innerHTML = nama.value;
    document.getElementById("role_profile").innerHTML = role.value;

    formInput.remove();
}

