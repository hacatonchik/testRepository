window.onload = function(){
  $('.enter-text-chat-bot').click( function(){
    pizda($('.input-text-chat-bot').val());
  });
  /*
  $('.enter-text-chat-bot').click( function(){
  
    типо сюда сможешь указать класс твоего текст ареа
    pizda($('.input-text-chat-bot').val());
  });
  */
};
function pizda(str){
  let words = new Array();
  var text1 = str.toLowerCase();
  var separator = ' ';
  words = text1.split(separator);
  var bufStr;
    for(var i=0;i<words.length;i++){
      bufStr = words[i];
      if(bufStr[0].toLowerCase() == bufStr[0].toUpperCase()){
        words[i] = words[i].split(bufStr[0]).join('');
      }
      if(bufStr[bufStr.length-1].toLowerCase() == bufStr[bufStr.length-1].toUpperCase()){
        words[i] = words[i].split(bufStr[bufStr.length-1]).join('');
      }
    }
  for(var i=0;i<words.length;i++){
    alert(words[i]);
  }
}
