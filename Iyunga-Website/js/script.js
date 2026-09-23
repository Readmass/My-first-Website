const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

    form.reset();
});



const form = document.querySelector(".AT");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = new FormData(form);

    const name = data.get("FullName");
    const date = data.get("date");
    const gender = data.get("gender");
    const studentClass = data.get("class");
    const previous = data.get("previous");
    const parent = data.get("parentname");
    const phone = data.get("Phone");
    const address = data.get("Address");

    if (!name || !date || !gender || !studentClass ||
        !previous || !parent || !phone || !address) {
        alert("Please fill in all required fields.");
        return;
    }

    if (phone.length < 10) {
        alert("Please enter a valid phone number.");
        return;
    }

    const application = {
        FullName: name,
        date: date,
        gender: gender,
        class: studentClass,
        previous: previous,
        parentname: parent,
        Phone: phone,
        Address: address
    };

    console.log(application);

    alert("Application information is ready to be submitted.");
});

