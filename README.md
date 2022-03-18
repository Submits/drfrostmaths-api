# DrFrostMaths API
DrFrostMaths timestables API proxy that auto completes answers.

## Usage

On the Timestables game screen, press CTRL + SHIFT + I or F12 to bring up the console, and enter the following:

```js

start = function(){

     $("#instructions").hide();
   $.ajax({
      url: "https://absq.herokuapp.com/questions",
      context: document.body,
      dataType: "json",
      success: function(data, textStatus, jqXHR){
         ttaid = data.ttaid;
         questions = data.data;

         var apple = null!==navigator.userAgent.match(/(iPad|iPhone|iPod)/i);
         var android = null!==navigator.userAgent.match(/Android/i);
         if(apple || android)$("#calculator-display").prop("disabled", true);
         else $("#calculator-display").focus();
         startTimer();
         advanceQuestion(false);
      },
      error: function(jqXHR, textStatus, errorThrown){
         dfmAlert("There was an error starting this game:<br><br><strong>"+errorThrown+"</strong>");
      }
   });

}

```