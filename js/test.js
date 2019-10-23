window.onload = function(){
  $('.enter-text-chat-bot').click( function(){
    WordsArray($('.input-text-chat-bot').val());
  });
  /*
    типо сюда сможешь указать класс твоего текст ареа и нужной тебе кнопки
  $('.enter-text-chat-bot').click( function(){
    WordsArray($('.input-text-chat-bot').val());
  });
  */
};
function WordsArray(keyString){
  let words = new Array();
  keyString = keyString.toLowerCase();
  var separator = ' ';
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
