(function(){
  
  const config = {
    apiKey: "AIzaSyCM5ZXGc7Bm0Q-gSV_1tEHEhR_ELVuYiKE",
    authDomain: "porfolio-11567.firebaseapp.com",
    databaseURL: "https://porfolio-11567.firebaseio.com",
    projectId: "porfolio-11567",
    storageBucket: "porfolio-11567.appspot.com",
    messagingSenderId: "646073247042",
    appId: "1:646073247042:web:050c187302cb77970114db",
    measurementId: "G-T1MNKRX5XN"

  };

  firebase.initializeApp(config);
  firebase.analytics();

  const preObject = document.getElementById('object');
  const list = document.getElementById('list');

  const dbRefObject = firebase.database().ref().child('object');
  const dbRefList = dbRefObject.child('hobbies');
  const storageRef = firebase.storage().ref().child('fitnes.jpg');
  const storageRef2 = firebase.storage().ref();
  let image;


  dbRefObject.on('value', snap => {
    console.log(snap.val())
    preObject.innerHTML = snap.val();
  });

  dbRefList.on('child_added', snap => {
    console.log(snap.val());
    const li = document.createElement('li');
    li.innerText = snap.val();
    li.id = snap.key;
    list.appendChild(li)
  });

  dbRefList.on('child_changed', snap => {
    console.log(snap.val());
    const liChanged = document.getElementById(snap.key);
    liChanged.innerText = snap.val();
  });

  dbRefList.on('child_removed', snap => {
    console.log(snap.val());
    const liToRemove = document.getElementById(snap.key);
    liToRemove.remove();
  });

  storageRef.getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
  
    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  
    // Or inserted into an <img> element:
    var img = document.getElementById('img');
    img.src = url;
  }).catch(function(error) {
    console.log(error);
  });
  

}())
function uploadFile(files) {
  const storageRef = firebase.storage().ref();
  const yoga = storageRef.child('yoga.jpg');

  const file = files.item(0);

  const task = yoga.put(file);

  yoga.getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
  
    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  
    // Or inserted into an <img> element:
    var img = document.getElementById('img');
    img.src = url;
  }).catch(function(error) {
    // Handle any errors
  });

 
}

function download(){
  storageRef.child('images/stars.jpg').getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
  
    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
    };
    xhr.open('GET', url);
    xhr.send();
  
    // Or inserted into an <img> element:
    var img = document.getElementById('myimg');
    img.src = url;
  }).catch(function(error) {
    // Handle any errors
  });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJhcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7XHJcbiAgXHJcbiAgY29uc3QgY29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiBcIkFJemFTeUNNNVpYR2M3Qm0wUS1nU1ZfMXRFSEVoUl9FTFZ1WWlLRVwiLFxyXG4gICAgYXV0aERvbWFpbjogXCJwb3Jmb2xpby0xMTU2Ny5maXJlYmFzZWFwcC5jb21cIixcclxuICAgIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vcG9yZm9saW8tMTE1NjcuZmlyZWJhc2Vpby5jb21cIixcclxuICAgIHByb2plY3RJZDogXCJwb3Jmb2xpby0xMTU2N1wiLFxyXG4gICAgc3RvcmFnZUJ1Y2tldDogXCJwb3Jmb2xpby0xMTU2Ny5hcHBzcG90LmNvbVwiLFxyXG4gICAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjQ2MDczMjQ3MDQyXCIsXHJcbiAgICBhcHBJZDogXCIxOjY0NjA3MzI0NzA0Mjp3ZWI6MDUwYzE4NzMwMmNiNzc5NzAxMTRkYlwiLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogXCJHLVQxTU5LUlg1WE5cIlxyXG5cclxuICB9O1xyXG5cclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcbiAgZmlyZWJhc2UuYW5hbHl0aWNzKCk7XHJcblxyXG4gIGNvbnN0IHByZU9iamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvYmplY3QnKTtcclxuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKTtcclxuXHJcbiAgY29uc3QgZGJSZWZPYmplY3QgPSBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigpLmNoaWxkKCdvYmplY3QnKTtcclxuICBjb25zdCBkYlJlZkxpc3QgPSBkYlJlZk9iamVjdC5jaGlsZCgnaG9iYmllcycpO1xyXG4gIGNvbnN0IHN0b3JhZ2VSZWYgPSBmaXJlYmFzZS5zdG9yYWdlKCkucmVmKCkuY2hpbGQoJ2ZpdG5lcy5qcGcnKTtcclxuICBjb25zdCBzdG9yYWdlUmVmMiA9IGZpcmViYXNlLnN0b3JhZ2UoKS5yZWYoKTtcclxuICBsZXQgaW1hZ2U7XHJcblxyXG5cclxuICBkYlJlZk9iamVjdC5vbigndmFsdWUnLCBzbmFwID0+IHtcclxuICAgIGNvbnNvbGUubG9nKHNuYXAudmFsKCkpXHJcbiAgICBwcmVPYmplY3QuaW5uZXJIVE1MID0gc25hcC52YWwoKTtcclxuICB9KTtcclxuXHJcbiAgZGJSZWZMaXN0Lm9uKCdjaGlsZF9hZGRlZCcsIHNuYXAgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc25hcC52YWwoKSk7XHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBsaS5pbm5lclRleHQgPSBzbmFwLnZhbCgpO1xyXG4gICAgbGkuaWQgPSBzbmFwLmtleTtcclxuICAgIGxpc3QuYXBwZW5kQ2hpbGQobGkpXHJcbiAgfSk7XHJcblxyXG4gIGRiUmVmTGlzdC5vbignY2hpbGRfY2hhbmdlZCcsIHNuYXAgPT4ge1xyXG4gICAgY29uc29sZS5sb2coc25hcC52YWwoKSk7XHJcbiAgICBjb25zdCBsaUNoYW5nZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzbmFwLmtleSk7XHJcbiAgICBsaUNoYW5nZWQuaW5uZXJUZXh0ID0gc25hcC52YWwoKTtcclxuICB9KTtcclxuXHJcbiAgZGJSZWZMaXN0Lm9uKCdjaGlsZF9yZW1vdmVkJywgc25hcCA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhzbmFwLnZhbCgpKTtcclxuICAgIGNvbnN0IGxpVG9SZW1vdmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzbmFwLmtleSk7XHJcbiAgICBsaVRvUmVtb3ZlLnJlbW92ZSgpO1xyXG4gIH0pO1xyXG5cclxuICBzdG9yYWdlUmVmLmdldERvd25sb2FkVVJMKCkudGhlbihmdW5jdGlvbih1cmwpIHtcclxuICAgIC8vIGB1cmxgIGlzIHRoZSBkb3dubG9hZCBVUkwgZm9yICdpbWFnZXMvc3RhcnMuanBnJ1xyXG4gIFxyXG4gICAgLy8gVGhpcyBjYW4gYmUgZG93bmxvYWRlZCBkaXJlY3RseTpcclxuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XHJcbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgdmFyIGJsb2IgPSB4aHIucmVzcG9uc2U7XHJcbiAgICB9O1xyXG4gICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XHJcbiAgICB4aHIuc2VuZCgpO1xyXG4gIFxyXG4gICAgLy8gT3IgaW5zZXJ0ZWQgaW50byBhbiA8aW1nPiBlbGVtZW50OlxyXG4gICAgdmFyIGltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWcnKTtcclxuICAgIGltZy5zcmMgPSB1cmw7XHJcbiAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICB9KTtcclxuICBcclxuXHJcbn0oKSlcclxuZnVuY3Rpb24gdXBsb2FkRmlsZShmaWxlcykge1xyXG4gIGNvbnN0IHN0b3JhZ2VSZWYgPSBmaXJlYmFzZS5zdG9yYWdlKCkucmVmKCk7XHJcbiAgY29uc3QgeW9nYSA9IHN0b3JhZ2VSZWYuY2hpbGQoJ3lvZ2EuanBnJyk7XHJcblxyXG4gIGNvbnN0IGZpbGUgPSBmaWxlcy5pdGVtKDApO1xyXG5cclxuICBjb25zdCB0YXNrID0geW9nYS5wdXQoZmlsZSk7XHJcblxyXG4gIHlvZ2EuZ2V0RG93bmxvYWRVUkwoKS50aGVuKGZ1bmN0aW9uKHVybCkge1xyXG4gICAgLy8gYHVybGAgaXMgdGhlIGRvd25sb2FkIFVSTCBmb3IgJ2ltYWdlcy9zdGFycy5qcGcnXHJcbiAgXHJcbiAgICAvLyBUaGlzIGNhbiBiZSBkb3dubG9hZGVkIGRpcmVjdGx5OlxyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcclxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICB2YXIgYmxvYiA9IHhoci5yZXNwb25zZTtcclxuICAgIH07XHJcbiAgICB4aHIub3BlbignR0VUJywgdXJsKTtcclxuICAgIHhoci5zZW5kKCk7XHJcbiAgXHJcbiAgICAvLyBPciBpbnNlcnRlZCBpbnRvIGFuIDxpbWc+IGVsZW1lbnQ6XHJcbiAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ltZycpO1xyXG4gICAgaW1nLnNyYyA9IHVybDtcclxuICB9KS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgLy8gSGFuZGxlIGFueSBlcnJvcnNcclxuICB9KTtcclxuXHJcbiBcclxufVxyXG5cclxuZnVuY3Rpb24gZG93bmxvYWQoKXtcclxuICBzdG9yYWdlUmVmLmNoaWxkKCdpbWFnZXMvc3RhcnMuanBnJykuZ2V0RG93bmxvYWRVUkwoKS50aGVuKGZ1bmN0aW9uKHVybCkge1xyXG4gICAgLy8gYHVybGAgaXMgdGhlIGRvd25sb2FkIFVSTCBmb3IgJ2ltYWdlcy9zdGFycy5qcGcnXHJcbiAgXHJcbiAgICAvLyBUaGlzIGNhbiBiZSBkb3dubG9hZGVkIGRpcmVjdGx5OlxyXG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJztcclxuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICB2YXIgYmxvYiA9IHhoci5yZXNwb25zZTtcclxuICAgIH07XHJcbiAgICB4aHIub3BlbignR0VUJywgdXJsKTtcclxuICAgIHhoci5zZW5kKCk7XHJcbiAgXHJcbiAgICAvLyBPciBpbnNlcnRlZCBpbnRvIGFuIDxpbWc+IGVsZW1lbnQ6XHJcbiAgICB2YXIgaW1nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215aW1nJyk7XHJcbiAgICBpbWcuc3JjID0gdXJsO1xyXG4gIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAvLyBIYW5kbGUgYW55IGVycm9yc1xyXG4gIH0pO1xyXG59Il0sImZpbGUiOiJhcHAuanMifQ==
