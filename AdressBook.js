let contacts = [];
<table id="contactTable">
		<tr>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Address</th>
			<th>City</th>
			<th>State</th>
			<th>Zip</th>
			<th>Phone</th>
			<th>Email</th>
		</tr>
	</table>

function addContact() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let zip = document.getElementById("zip").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;
  let nameRegex = /^[A-Z][a-z]{2,}$/;
  let addressRegex = /^[A-Za-z0-9\s,'-]*$/;
  let cityRegex = /^[A-Za-z\s]{4,}$/;
  let stateRegex = /^[A-Za-z\s]{4,}$/;
  let zipRegex = /^\d{5}$/;
  let phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
  let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!nameRegex.test(firstName)) {
    throw new Error("Invalid first name. First name should start with capital and have minimum 3 characters.");
  }
  if (!nameRegex.test(lastName)) {
    throw new Error("Invalid last name. Last name should start with capital and have minimum 3 characters.");
  }
  if (!addressRegex.test(address)) {
    throw new Error("Invalid address. Address should have minimum 4 characters and only contain letters, numbers, spaces, apostrophes, commas, and dashes.");
  }
  if (!cityRegex.test(city)) {
    throw new Error("Invalid city. City should have minimum 4 characters and only contain letters and spaces.");
  }
  if (!stateRegex.test(state)) {
    throw new Error("Invalid state. State should have minimum 4 characters and only contain letters and spaces.");
  }
  if (!zipRegex.test(zip)) {
    throw new Error("Invalid zip code. Zip code should be 5 digits.");
  }
  if (!phoneRegex.test(phone)) {
    throw new Error("Invalid phone number. Phone number should be in the format xxx-xxx-xxxx.");
  }
  if (!emailRegex.test(email)) {
    throw new Error("Invalid email. Email should be in the format xxx@yyy.zzz.");
  }
  var table = document.getElementById("contactTable");
			var newRow = table.insertRow(table.length);
			
			// Add the values to the new row
			var cell1 = newRow.insertCell(0);
			var cell2 = newRow.insertCell(1);
			var cell3 = newRow.insertCell(2);
			var cell4 = newRow.insertCell(3);
			var cell5 = newRow.insertCell(4);
			var cell6 = newRow.insertCell(5);
			var cell7 = newRow.insertCell(6);
			var cell8 = newRow.insertCell(7);
			cell1.innerHTML = firstName;
			cell2.innerHTML = lastName;
			cell3.innerHTML = address;
			cell4.innerHTML = city;
			cell5.innerHTML = state;
			cell6.innerHTML = zip;
			cell7.innerHTML = phone;
			cell8.innerHTML = email;
  let contact = {
    firstName: firstName,
    lastName: lastName,
    address: address,
    city: city,
    state: state,
    zip: zip,
    phone: phone,
    email: email
  };

  contacts.push(contact);
  displayContacts();
}

function displayContacts() {
  let addressBook = document.getElementById("addressBook");
  addressBook.innerHTML = "";

  for (let i = 0; i < contacts.length; i++) {
    let contact = contacts[i];
    let contactString = contact.firstName + " " + contact.lastName + "<br>" + contact.address + "<br>" + contact.city + ", " + contact.state + " " + contact.zip + "<br>" + contact.phone + "<br>" + contact.email + "<br><br>";
    addressBook.innerHTML += contactString;
  }
}