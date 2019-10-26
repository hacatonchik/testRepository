window.addEventListener('DOMContentLoaded', function(){
   getAnswerBot("hi");
});

var config = {
apiKey: "AIzaSyAl05TmTxUFYOfpnKov_BUgZUD090OrIFU",
authDomain: "disobeyparrot.firebaseapp.com",
databaseURL: "https://disobeyparrot.firebaseio.com",
storageBucket: "disobeyparrot.appspot.com"
};
firebase.initializeApp(config);
var ref = firebase.database().ref();

function tesst(t){
  console.log(t);
}

function getAnswerBot(keys){
  ref.child("chatBot").child("привет").child("answer").once("value").then(function(snapshot) {
    var result = snapshot.val();
    tesst(result);
  });
  ref.child("asd").child("dsa").once("value").then(function(snapshot) {
    var result = snapshot.val();
    tesst(result);
  });

}

function EnterSendValueDB() {
  let words =WordsArray($("textarea.admin-input-name").val());
  sendValueDB(words,$("textarea.admin-input-value").val(),$("textarea.admin-input-password").val());
}




function sendValueDB(keys,value,password){
  if(keys!=""||value!=""||password!=""){
    if(password == "qwerty"){
    for(var i =0;i<keys.length;i++){
      firebase.database().ref('chatBot').child(keys[i]).set({
        answer: value
      });
    }
    } else{
      alert("Неправильный пароль");
    }
  } else{
    alert("Введите все данные");
  }
}
