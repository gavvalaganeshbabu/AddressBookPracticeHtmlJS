let contacts = [];

function addContact() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let address = document.getElementById("address").value;
  let city = document.getElementById("city").value;
  let state = document.getElementById("state").value;
  let zip = document.getElementById("zip").value;
  let phone = document.getElementById("phone").value;
  let email = document.getElementById("email").value;

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