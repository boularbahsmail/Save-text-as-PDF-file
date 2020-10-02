
// main function

const createPDF = () => {
	var name = document.getElementById("name").value;
	var lname = document.getElementById("lname").value;
	var email = document.getElementById("email").value;
	if(name == "" && email == "") {
		alert("Enter all fields");
	} else {
		var doc = new jsPDF();
		doc.text(15, 25,"First name : " + name);
		doc.text(15, 35,"Last name : " + lname);
		doc.text(15, 45,"E-mail : " + email);

		doc.save('example.pdf');
	}
}

