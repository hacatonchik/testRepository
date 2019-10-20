window.onload = function() {
//$(".chat-retail-form").load("chat.html");
};
var config = {
apiKey: "AIzaSyAl05TmTxUFYOfpnKov_BUgZUD090OrIFU",
authDomain: "disobeyparrot.firebaseapp.com",
databaseURL: "https://disobeyparrot.firebaseio.com",
storageBucket: "disobeyparrot.appspot.com"
};
firebase.initializeApp(config);

var ref = firebase.database().ref();


ref.child("test1").child("test2").once("value").then(function(snapshot) {
var test = snapshot.val();

$( "#textChange" ).text(test);

});

//$('.chat-retail-form').append('<p>***</p>');
//$( ".chat-retail-form" ).load( "chat.html" );



//$('.chat-retail-form__chat').show();
function button_hide_hide(){
$('.chat-retail-form__chat').hide();
$('.bshow').hide();
$('.bhide').show();
}


function button_hide_show(){
$('.chat-retail-form__chat').show();
$('.bshow').show();
$('.bhide').hide();
}

function enter_text(){
var text_pol = $(".text_input").val();
$(".text_input").val("");
$(".chat_windows_print").append("<span class=\"span_text\">Вы: " +text_pol+"</span>");
ref.child("test1").child(text_pol).once("value").then(function(snapshot) {
var test = snapshot.val();
if(test!=null){
$(".chat_windows_print").append("<span class=\"span_text\">Бот: " + test +"</span>");
}else{
  $(".chat_windows_print").append("<span class=\"span_text\">Бот: " + "Я не знаю что тебе ответить" +"</span>");
}
});





}

function searh(count){

}
