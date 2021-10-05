var ctmnts = 0;
var ctsecs = 0;
var startchr = 0;
function tick() {

  if(startchr == 0 && document.getElementById('time') && document.getElementById('sec')) {
    // makes sure the script uses integer numbers
    ctmnts = parseInt(document.getElementById('time').value) + 0;
    ctsecs = parseInt(document.getElementById('sec').value) * 1;

    // if data not a number, sets the value to 0
    if(isNaN(ctmnts)) ctmnts = 0;
    if(isNaN(ctsecs)) ctsecs = 0;

    // rewrite data in form fields to be sure that the fields for minutes and seconds contain integer number
    document.getElementById('time').value = ctmnts;
    document.getElementById('sec').value = ctsecs;
    startchr = 1;
    document.getElementById('start').setAttribute('disabled', 'disabled');     // disable the button
  }

  // if minutes and seconds are 0, sets $startchr to 0, and return false
  if(ctmnts==0 && ctsecs==0) {
    startchr = 0;
    document.getElementById('start').removeAttribute('disabled');     // remove "disabled" to enable the button

    /* HERE YOU CAN ADD TO EXECUTE A JavaScript FUNCTION WHEN COUNTDOWN TIMER REACH TO 0 */

    return false;
  }
  else {
    // decrease seconds, and decrease minutes if seconds reach to 0
    ctsecs--;
    if(ctsecs < 0) {
      if(ctmnts > 0) {
        ctsecs = 59;
        ctmnts--;
      }
      else {
        ctsecs = 0;
        ctmnts = 0;
      }
    }
  }

  // display the time in page, and auto-calls this function after 1 seccond
  document.getElementById('showmns').innerHTML = ctmnts;
  document.getElementById('shwosec').innerHTML = ctsecs;
  setTimeout('tick()', 1000);
   document.getElementById('time').value="";
   document.getElementById('sec').value="";
}