var firebaseConfig = {
  apiKey: "AIzaSyDzEVTLc9bT6fjzALEuCR4DiwRq4s6_OUU",
  authDomain: "adv-c100clase-dcf24.firebaseapp.com",
  databaseURL: "https://adv-c100clase-dcf24-default-rtdb.firebaseio.com",
  projectId: "adv-c100clase-dcf24",
  storageBucket: "adv-c100clase-dcf24.appspot.com",
  messagingSenderId: "581572338296",
  appId: "1:581572338296:web:8b9d99cacfd22e3ee3c38d"
  };
  
  
  
    firebase.initializeApp(firebaseConfig);
  
  user_name = localStorage.getItem("user_name");
  
  document.getElementById("user_name").innerHTML = "¡Bienvenido, " + user_name + "!";
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "agregando el nombre de la sala"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "kwitter_page.html";
  }
  
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Nombre de la sala: " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
      window.location = "index.html";
  }
