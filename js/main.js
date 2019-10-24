$(document).ready(function(){
  $('.enter-text-chat-bot').click( function(){
    //WordsArray($('.input-text-chat-bot').val());
    AddSpan(1, $('.input-text-chat-bot').val());
  });
  $(document).on('keypress',function(e) {
    if(e.which == 13) {
        AddSpan(1, $('.input-text-chat-bot').val());
    }
});
  /*
    типо сюда сможешь указать класс твоего текст ареа и нужной тебе кнопки
  $('.enter-text-chat-bot').click( function(){
    WordsArray($('.input-text-chat-bot').val());
  });
  */
});
function WordsArray(keyString){
  let words = new Array();
  keyString = keyString.toLowerCase();
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
  if(number == 1){
    $('.write-text-chat-bot').append($("<div class='output-users-text'><span class='output-users-text-span'>"+inputString+"</span></div>"));
  }
  if(number == 0){
    $('.write-text-chat-bot').append($("<div class='output-chat-bot-text'><span class='output-chat-bot-text-span'>"+WordsArray(inputString)+"</span></div>"));
  }
  jQuery('textarea').blur();
  $('.input-text-chat-bot').val("");
}
