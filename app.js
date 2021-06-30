
// use ID to get value
const btn = $('#btnSubmit');
const $h2ID = $('#h2');
const $textInput = $('#textInput');
const $textHeader2=$('<h2 id="h2"></h2>');
const $textDiv = $('<div></div>');

//const body
const $body = $('#bodyID')


$(document).ready(function() {


btn.click(function(){  //fire button click event function
    event.preventDefault();
    const textValueFromJQuery = $(textInput).val(); // calls jquery value
    
    if ( textValueFromJQuery !== ""){  //check if NOT blank
        
        console.log(textValueFromJQuery); //console logs value
        
       // alert(textValueFromJQuery);  //disabled alert to eval h2 append
        
        
        //append div to body
        $($textHeader2).append($textInput);
        $($textDiv).append($textHeader2); /// this is correct?
        $($body).append($textDiv);
        
        /// Q: why does the h2 not stay appended to the div? (page reloads after hitting okay)
        
        console.log("appended text div to body");
        
        
    } else {

        //disabled test 0 // this one works
                $('#btnSubmit').prop( "disabled", true );
                console.log("disabled: reload page and enter some text this time!!");
                

                // disabled test 1 //this one doesn't work...why?
                $('#btnSubmit').on('click',function() {
                    $('#btnSubmit').prop("disabled",true);

                    console.log("disabled: enter some text!");
                
                });
                
                
                
            }
            
            
            //test from stack overflow
        (function myLoop(i) {
            setTimeout(function() {
              console.log('hello'); //  your code here                
              if (--i) myLoop(i);   //  decrement i and call myLoop again if i > 0
            }, 3000)
          })(100);  //  pass the number of iterations as an argument

          
          //append div to body ///REDUNDANT CODE
          $($textHeader2).append($textInput);
          $($textDiv).append($textHeader2); /// this is correct?
          $($body).append($textDiv);
          
          /// Q: why does the h2 not stay appended to the div? (page reloads after hitting okay)
          
});


// mouse over h2 elem >>> sign new bg color and border radius


$($h2ID).hover( 
    function() {
        $($h2ID).addClass('bg-primary');
        $($h2ID).addClass('rounded-pill');

    },
    function() {
        $($h2ID).removeClass('bg-light');
        $($h2ID).removeClass('rounded-pill');
    
    
    })

    



});


///END



// difference between bt.on("click",notify) vs. btn.
// btn.on("click", notify);

// function notify(){
//    alert("clicked");

    // need to alert value of the text input
    // alert(Submit.val());
    // console.log(textInput.val());
// }

