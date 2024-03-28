const firebaseConfig = {
    apiKey: "AIzaSyDB642NQqU9Mhm9PSfcQCfkBN-kNAW-xlY",
    authDomain: "portfolio-web-4fe83.firebaseapp.com",
    databaseURL: "https://portfolio-web-4fe83-default-rtdb.firebaseio.com",
    projectId: "portfolio-web-4fe83",
    storageBucket: "portfolio-web-4fe83.appspot.com",
    messagingSenderId: "294477759655",
    appId: "1:294477759655:web:c7ca85f917a8de0d3ac782"
  };
  
  //initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database
  var contactFormDB = firebase.database().ref('contactForm');

  document.getElementById('contactForm').addEventListener('submit', submitForm);



  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var subject = getElementVal('subject');
    var text = getElementVal('text');
    
    saveMessages(name, email, subject, text); 
    
     //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
  }

  const saveMessages = (name,email,subject,text) => {
    var newContactForm = contactFormDB.push();
      
    newContactForm.set({
      name: name,
      email: email,
      subject: subject,
      text: text,
    });
  }

  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }
