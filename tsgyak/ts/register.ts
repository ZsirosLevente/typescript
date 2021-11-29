function registratiton() {
  let email = (<HTMLInputElement>document.getElementById("email")).value;
  let telefonszam = (<HTMLInputElement>document.getElementById("telefonszam")).value;
  let password   = (<HTMLInputElement>document.getElementById("password")).value;

  const validateemail=new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  if (email === "" || telefonszam==="" || password === "") {
    alert("Írj be dolgokat");
    console.log("Írj be dolgokat  bajnok");
  }
  else if (!validateemail.test(email)) {
      alert("Írj be egy jó email címet bajnok");
      console.log("Írj be email címet bajnok");
  }
  else{
      alert("A regisztráció sikeres");
      console.log("Sikeres");
  }
}
