/*
 * Goodyear Welt | Male Fashion Blog -- v1.0
 * Author: Tanner Woodworth
 */

var showing = false;
function displayMob (e){
  event.preventDefault();
  console.log(showing);
  if (showing == true){
    console.log("was true")
    document.getElementsByTagName("nav")[0].setAttribute("class", "hide");
    showing = false;
  } else if (showing == false){
    console.log("was false")
    document.getElementsByTagName("nav")[0].setAttribute("class", "show");
    showing = true;
  };
};
;
