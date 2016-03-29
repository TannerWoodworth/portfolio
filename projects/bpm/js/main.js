window.onload=genQuote();
var quoteNumber;
var fQuote;
var lQuote;
function genQuote() {
  quoteNumber = Math.floor(Math.random() * 2) + 1;
  console.log(quoteNumber);
  if (quoteNumber == 1){
    document.getElementById('quote1').innerHTML=("Doing the Bare Minimum");
    document.getElementById('quote2').innerHTML=("Since 2007");
  } else if (quoteNumber == 2){
    document.getElementById('quote1').innerHTML=("Born in Creativity,");
    document.getElementById('quote2').innerHTML=("Molded by Strategy.");
  };
};
function sendMessage(){
	document.getElementById('form-message').setAttribute("class", "animated fadeIn alert-success");
	document.getElementById('form-message').innerHTML="Thank You! Your message has been sent.";
}
