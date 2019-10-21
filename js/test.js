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
function WordsArray(str){
  let words = new Array();
  var text1 = str.toLowerCase();
  var separator = ' ';
  words = text1.split(separator);
  var bufStr;
    for(var i=0;i<words.length;i++){
      bufStr = words[i];
      for(var j=0;j<bufStr.length;j++){
        if(bufStr[j] == bufStr[j].toUpperCase()){
          if(j == 0 || j ==  bufStr.length-1) words[i] = words[i].split(bufStr[j]).join('');
          else{
            let bufArr = new Array();
            words[i] = words[i].split(bufStr[j]).join(' ');
            bufArr = words[i].split(separator);
            words[i] = bufArr[0];
            for(var l=1;l<bufArr.length;l++)
              words.push(bufArr[l]);
          }
        }
      }
      if(words[i] == words[i].toUpperCase()) words.splice(i, 1);
    }
    for(var i=0;i<words.length;i++){
      if(words[i] == words[i].toUpperCase()) words.splice(i, 1);
    }
  for(var i=0;i<words.length;i++) console.log(words[i]);
}
