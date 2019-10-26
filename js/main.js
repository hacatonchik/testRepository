$(document).ready(function(){
  $('.write-text-chat-bot').mouseenter(function(){

});
$('.write-text-chat-bot').mouseleave(function(){

});

//многоточие
$('#what-can-you-do').click( function(){
  if($('#start-test').css('display') == 'none'){
  $('#start-test').show();
  $('#korp-2').hide();
  $('#korp-3').hide();
  $('#korp-1').hide();
  $('#korp-10').hide();
  $('#how-to-proceed').hide();
  $('#ranked-list').hide();
  $('#selection-committee').hide();



} else {
$('#start-test').hide();
$('#korp-2').show();
$('#korp-3').show();
$('#korp-1').show();
$('#korp-10').show();
$('#how-to-proceed').show();
$('#ranked-list').show();
$('#selection-committee').show();

}


});

$('#korp-1').click( function(){
  AddSpan(1,"Покажи адрес первого корпуса");
  enterMap1();
});
$('#korp-2').click( function(){
  AddSpan(1,"Покажи адрес второго корпуса");
  enterMap2();
});
$('#korp-3').click( function(){
  AddSpan(1,"Покажи адрес третьего корпуса");
  enterMap3();
});
$('#korp-10').click( function(){
  AddSpan(1,"Покажи адрес десятого корпуса");
  enterMap10();
});
$('#how-to-proceed').click( function(){
  AddSpan(1,"Как поступить");
  getAnswerBot("поступить");
});
$('#ranked-list').click( function(){
  AddSpan(1,"Рейтинг листы");
  getAnswerBot("рейтинг");
});
$('#selection-committee').click( function(){
  AddSpan(1,"Адрес приёмной комиссии");
  getAnswerBot("приёмная");
});






  $('.open-chat-bot').click( function(){
    $('.close-chat-bot').show();
    $('.open-chat-bot').hide();
    $('.structure-chat-bot').show();
  });
  $('.close-chat-bot').click( function(){
    $('.close-chat-bot').hide();
    $('.open-chat-bot').show();
    $('.structure-chat-bot').hide();
  });
  $('.enter-text-chat-bot').click( function(){
    onUpdate();
  });
  $(document).on('keypress',function(e) {
    if(e.which == 13) {
      $('textarea.input-text-chat-bot').blur();
      onUpdate();
    }
  });
$('#start-test').click(function(){
  $('#start-test').hide();
  $('#what-can-you-do').hide();
  $('.editor-chat-bot').hide();
  $('#first-answer').show();
  $('#second-answer').show();
  $('#third-answer').show();
  $('#end-test').show();
  $('.write-text-chat-bot').append($("<div class='output-chat-bot-text'><span class='output-chat-bot-text-span'>" +arrQuestions[indArr]+ "</span></div>"));
});

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

});

var countPoints = 0;
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
var config = {
apiKey: "AIzaSyAl05TmTxUFYOfpnKov_BUgZUD090OrIFU",
authDomain: "disobeyparrot.firebaseapp.com",
databaseURL: "https://disobeyparrot.firebaseio.com",
storageBucket: "disobeyparrot.appspot.com"
};
firebase.initializeApp(config);

var ref = firebase.database().ref();

function endTest(){
  $('#start-test').show();
  $('#what-can-you-do').show();
  $('.editor-chat-bot').show();
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

var countAnswerCheck=0;

function onUpdate(){

  var textareaText=$("textarea.input-text-chat-bot").val();

  let wordsAnswer = WordsArray(textareaText);
  if(wordsAnswer.length!=0){
    AddSpan(1,textareaText);
  }
  var countAnswer = "";
  countAnswerCheck = wordsAnswer.length;
  for(var i=0;i<wordsAnswer.length;i++){
    if(countAnswer!=wordsAnswer[i]){
    getAnswerBot(wordsAnswer[i]);
  }else{
    countAnswerCheck--;
  }

countAnswer=wordsAnswer[i];
  }

  $('.write-text-chat-bot').stop().animate({
  scrollTop: $('.write-text-chat-bot')[0].scrollHeight
}, 800);
  $('textarea.input-text-chat-bot').val('');
}



function getAnswerBot(keys){
  ref.child("chatBot").child(keys).child("answer").once("value").then(function(snapshot) {
    var result = snapshot.val();
      if(result!=null){
        dbAnswer(result);
        checkAnswer = true;
      }else{
        countAnswerCheck--;
        if(countAnswerCheck==0){
          AddSpan(0,"Извини, я сейчас не знаю, что тебе ответить");
        }
      }
  });
}

function dbAnswer(answer){
  AddSpan(0,answer);

}


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

function enterMap2(){
  AddSpan(0,"<iframe src=\"https://yandex.ru/map-widget/v1/?um=constructor%3A9c2a512da70f805dbe87bef228475a2d64f2b1ac0267d86a9b4cf408285aaf09&amp;source=constructor\" width=\"290\" height=\"290\" frameborder=\"0\"></iframe>");
}
function enterMap1(){
  AddSpan(0,"<iframe src=\"https://yandex.ru/map-widget/v1/?um=constructor%3Adaf66d032fb906a2655ec7fc3080379c39aa7d9a278bc55ee1d824f20dd93dc5&amp;source=constructor\" width=\"290\" height=\"290\" frameborder=\"0\"></iframe>");
}
function enterMap3(){
  AddSpan(0,"<iframe src=\"https://yandex.ru/map-widget/v1/?um=constructor%3Aa1016013ad9249fb967f4697ae6342489fb446f81a06b1d3a29e89dfbf80e8bf&amp;source=constructor\" width=\"290\" height=\"290\" frameborder=\"0\"></iframe>");
}
function enterMap10(){
  AddSpan(0,"<iframe src=\"https://yandex.ru/map-widget/v1/?um=constructor%3A4f26a9c706c64d9a59663c76adfe9e5efc685c695dcdfdaeb416564714bff620&amp;source=constructor\" width=\"290\" height=\"290\" frameborder=\"0\"></iframe>");
}

function AddSpan(number, inputString){
  inputString[0] = inputString[0].toUpperCase();
  if(number == 1){
    $('.write-text-chat-bot').append($("<div class='output-users-text'><span class='output-users-text-span'>"+inputString+"</span></div>"));
  }
  if(number == 0){
    $('.write-text-chat-bot').append($("<div class='output-chat-bot-text'><span class='output-chat-bot-text-span'>"+ inputString+"</span></div>"));
  }
  $('.write-text-chat-bot').stop().animate({
  scrollTop: $('.write-text-chat-bot')[0].scrollHeight
}, 800);
}
