var firebaseConfig = {
  apiKey: "AIzaSyBgB6WA8fXuZXT6tALe1ow4b8ivsIvntfE",
  authDomain: "pruebaclase-bce4b.firebaseapp.com",
  projectId: "pruebaclase-bce4b",
  storageBucket: "pruebaclase-bce4b.appspot.com",
  messagingSenderId: "83939974179",
  appId: "1:83939974179:web:7cb94b52ada87f9a0de596"
};



  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "¡Te damos la bienvenida, " + user_name + "!";

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
       console.log("Nombre de la sala - " + Room_names);
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
