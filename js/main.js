$(document).ready(function(){

  $('.write-text-chat-bot').mouseenter(function(){


});
$('.write-text-chat-bot').mouseleave(function(){


});

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
      $('.input-text-chat-bot').val(null);

    }
  });

var indArr = 0;
let arrQuestions = ["Работа, связанная с учетом и контролем, – это интересно?",
                    "Ты предпочтешь заниматься финансовыми операциями, а не, например, музыкой?",
                    "Ты можешь расчитать сколько времени уйдет на дорогу до работы?",
                    "Обычно ты не рискуешь?",
                    "Тебя раздражает беспорядок?",
                    "Ты охотно почитал(а) бы на досуге о последних достижениях в различных областях науки?",
                    "Записи, которые ты делаешь, структурированы и организованы?",
                    "Ты предпочитешь разумно распределять деньги, а не тратить все сразу?",
                    "У тебя на столе вещи расположены аккуратно?",
                    "Тебя привлекает работа, где необходимо действовать согласно инструкции или четко заданному алгоритму?",
                    "Если бы ты что-то собирал(а), ты бы постарался(ась) привести в порядок коллекцию, все разложить по папочкам и полочкам?",
                    "Ты любишь наводить порядок и систематизировать что бы то ни было?",
                    "Тебе нравится работать на компьютере – оформлять или просто набирать тексты, производить расчеты?",
                    "Прежде чем действовать, надо продумать все детали?",
                    "На твой взгляд, графики и таблицы – очень удобный и информативный способ предоставления информации?",
                    "Тебе нравятся игры, в которых ты можешь точно рассчитать шансы на успех и сделать осторожный, но точный ход?",
                    "При изучении иностранного языка ты предпочитаешь начинать с грамматики, а не получать разговорный опыт без знания грамматических основ?",
                    "Сталкиваясь с какой-либо проблемой, ты пытаешься всесторонне ее изучить (ознакомиться с соответствующей литературой, поискать нужную информацию в интернете, поговорить со специалистами)?",
                    "Если ты выражаешь свои мысли на бумаге, тебе важна логичность текста?",
                    "У тебя есть ежедневник, в который ты записываешь важную информацию на несколько дней вперед?",
                    "Ты с удовольствием смотришь новости политики и экономики?",
                    "Ты бы хотел(а), чтобы твоя будущая профессия была скорее спокойной и стабильной, чем с порцией адреналина?",
                    "Ты делаешь работу вовремя?",
                    "Взяв книгу, ты всегда ставишь ее на место?",
                    "Когда ты ложишься спать, то уже знаешь, что будешь делать завтра?",
                    "В своих словах и поступках ты следуешь пословице «Семь раз отмерь, один – отрежь»?",
                    "Перед ответственными делами ты всегда составляешь план их выполнения?",
                    "После вечеринки мытье посуды ты откладываешь до утра?",
                    "Ты серьезно отношусишься к своему здоровью?",
                    "Когда у тебя что-то не получается, ты терпеливо стараешься найти решение?"];
$('#start-test').click(function(){
  $('#start-test').hide();
  $('#what-can-you-do').hide();
  $('.input-text-chat').hide();
  $('.enter-text-chat-bot').hide();
  $('#first-answer').show();
  $('#second-answer').show();
  $('#third-answer').show();
  $('#end-test').show();
  $('.write-text-chat-bot').append($("<div class='output-chat-bot-text'><span class='output-chat-bot-text-span'>" +arrQuestions[indArr]+ "</span></div>"));
});

var countPoints = 0;
$('#first-answer').click(function(){
  countPoints += 2;
  nextQuestion(countPoints,"Да");
});
$('#second-answer').click(function(){
  countPoints++;
  nextQuestion(countPoints,"Затрудняюсь ответить");
});
$('#third-answer').click(function(){

  nextQuestion(countPoints,"Нет");
});

$('#end-test').click(function(){
  endTest();
});

function endTest(){
  $('#start-test').show();
  $('#what-can-you-do').show();
  $('.input-text-chat').show();
  $('.enter-text-chat-bot').show();
  $('#first-answer').hide();
  $('#second-answer').hide();
  $('#third-answer').hide();
  $('#end-test').hide();
  countPoints = 0;
  indArr = 0;
}

function nextQuestion(countPoints,answer){
  $('.write-text-chat-bot').stop().animate({
  scrollTop: $('.write-text-chat-bot')[0].scrollHeight
}, 800);
  if(indArr < 29) {
    indArr++;
    $('.write-text-chat-bot').append($("<div class='output-users-text'><span class='output-users-text-span'>"+answer+"</span></div>"));
    $('.write-text-chat-bot').append($("<div class='output-chat-bot-text'><span class='output-chat-bot-text-span'>" +arrQuestions[indArr]+ "</span></div>"));
  }else{
    $('.write-text-chat-bot').append($("<div class='output-users-text'><span class='output-users-text-span'>"+answer+"</span></div>"));

    if(countPoints <= 12) {
      $('.write-text-chat-bot').append($("<div class='output-chat-bot-text'><span class='output-chat-bot-text-span'>" +"Вы цените в жизни сюрпризы и импровизацию. Скорее всего, вы относитесь к людям творческим, ненавидящим работу по алгоритму, монотонную, связанную с «сидением на одном месте». Ваша склонность к импровизации, нестандартности, нерегламентированности может быть уместна для представителей творческих профессий, а также при работе в условиях неопределенности, частых командировок и т.д. Вам подойдет группа профессий представляющая собой различные виды художественно-творческого труда, например литература, музыка, театр, изобразительное искусство"+ "</span></div>"));
    }
    if(countPoints > 12 && countPoints <=24) {
      $('.write-text-chat-bot').append($("<div class='output-chat-bot-text'><span class='output-chat-bot-text-span'>" +"Скорее всего, вы относитесь к людям более-менее творческим, не любящим монотонную работу по алгоритму. Вам подойдут все виды профессий, предполагающих взаимодействие людей, например политика, религия, педагогика, психология, медицина, торговля, право."+ "</span></div>"));
    }
    if(countPoints > 24 && countPoints <=36) {
      $('.write-text-chat-bot').append($("<div class='output-chat-bot-text'><span class='output-chat-bot-text-span'>" +"Вам подойдут профессии, в которых человек имеет дело с различными явлениями неживой и живой природы, например биолог, географ, геолог, математик, физик, химик и другие профессии, относящиеся к разряду естественных наук."+ "</span></div>"));
    }
    if(countPoints > 36 && countPoints <=48) {
      $('.write-text-chat-bot').append($("<div class='output-chat-bot-text'><span class='output-chat-bot-text-span'>" +"Вам подойдут профессии трудовой деятельности, в которых человек имеет дело с техникой, её использованием или конструированием, например профессия инженера, оператора, машиниста, механизатора, сварщика и т.п."+ "</span></div>"));
    }
    if(countPoints > 48 && countPoints <=60) {
      $('.write-text-chat-bot').append($("<div class='output-chat-bot-text'><span class='output-chat-bot-text-span'>" +"Вы показали высокий интерес к знаковым системам – это условные знаки, цифры, коды, естественные и искусственные языки. Вы могли бы найти себя в профессиях, связанных с созданием и оформлением документов, делопроизводством, анализом текстов и их преобразованием, перекодированием (корректор, секретарь-референт, технический редактор, таможенный декларатор, архивариус, нотариус); числами, количественными соотношениями (экономист, программист, бухгалтер, статистик, демограф, математик), системами условных знаков, схематическими отображениями объектов (чертежник, картограф)."+ "</span></div>"));
    }
    countPoints = 0;
    indArr = 0;
    endTest();
  }

}

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


}
