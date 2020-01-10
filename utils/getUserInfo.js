import firebase from 'firebase';

function getUserInfo() {

  var deviceName='비로그인';
  var user = firebase.auth().currentUser;
  uid = user.uid;

  firebase.database().ref('/users/' + uid).on('value',
  function a(snapshot) 
  {
    deviceName = (snapshot.val() && snapshot.val().name) || '비로그인';
  }
  );
  return{deviceName}
}

export default getUserInfo;
