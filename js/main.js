$(document).ready(function(){
  $('.open-chat-bot').click( function(){
    $('.close-chat-bot-item').show();
    $('.open-chat-bot').hide();
    $('.structure-chat-bot').show();
  });
  $('.close-chat-bot-item').click( function(){
    $('.close-chat-bot-item').hide();
    $('.open-chat-bot').show();
    $('.structure-chat-bot').hide();
  });
  $('.enter-text-chat-bot').click( function(){
    onUpdate();
  });
  $(document).on('keypress',function(e) {
    if(e.which == 13) {
      onUpdate();
    }
});

var config = {
apiKey: "AIzaSyAl05TmTxUFYOfpnKov_BUgZUD090OrIFU",
authDomain: "disobeyparrot.firebaseapp.com",
databaseURL: "https://disobeyparrot.firebaseio.com",
storageBucket: "disobeyparrot.appspot.com"
};
firebase.initializeApp(config);
var ref = firebase.database().ref();

function onUpdate(){
  var textareaText=$("textarea.input-text-chat-bot").val();
  //jQuery('textarea').blur();
  //jQuery('textarea').focus();
  let wordsAnswer = WordsArray(textareaText);
  if(wordsAnswer.length!=0){
    AddSpan(1,textareaText);
  }
  var countAnswer = "";
  for(var i=0;i<wordsAnswer.length;i++){
    if(countAnswer!=wordsAnswer[i]){
    getAnswerBot(wordsAnswer[i]);
  }
countAnswer=wordsAnswer[i];
  }
  $('.write-text-chat-bot').stop().animate({
  scrollTop: $('.write-text-chat-bot')[0].scrollHeight
}, 800);
}

function getAnswerBot(keys){
  ref.child("chatBot").child(keys).child("answer").once("value").then(function(snapshot) {
    var result = snapshot.val();
      if(result!=null){

        dbAnswer(result);
      }
  });
}

function dbAnswer(answer){
  AddSpan(0,answer);

}

});
function WordsArray(keyString){
  let words = new Array();
  keyString = keyString.toLowerCase();
  keyString+=" ";
  var stringKey = "";
  for(var i=0;i<keyString.length;i++){
    if(keyString[i] != keyString[i].toUpperCase()){
      stringKey+=keyString[i];
    }else if(i!=0 && keyString[i-1] != keyString[i-1].toUpperCase()){
      words.push(stringKey);
      stringKey="";
    }
  }
  return words;
}


function AddSpan(number, inputString){
  inputString[0] = inputString[0].toUpperCase();
  if(number == 1){
    $('.write-text-chat-bot').append($("<div class='output-users-text'><span class='output-users-text-span'>"+inputString+"</span></div>"));
  }
  if(number == 0){
    $('.write-text-chat-bot').append($("<div class='output-chat-bot-text'><span class='output-chat-bot-text-span'>"+ inputString+"</span></div>"));
  }

  $('.input-text-chat-bot').val("");
}
