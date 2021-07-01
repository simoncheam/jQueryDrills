
// use ID to get value
const btn = $('#btnSubmit');
const $body = $(document.body);
const $textInput = $('#textInput');

const $textDiv = $('<div></div>');
$($body).append($textDiv); //append text div from the start
const $textUl = $('<ul></ul>');

//fire button click event function 
btn.click(function(event){   
    
    // must create new H2, then append to $textDiv
   // const $textHeader2=$('<h2></h2>');   ///commented out for #13
    const $textHeader2=$('<ul></ul>');   ///commented out for #13
    
    // comment out h2 above and create a list instead
    const $li = $('<li></li>');
    
    event.preventDefault();
    console.log(event.target);  // log click target
    
    const textValueFromJQuery = $($textInput).val(); // calls jquery value
    
    if ( textValueFromJQuery !== ""){  //check if NOT blank
        
        $($textHeader2).text(textValueFromJQuery);
        //$($textDiv).append($textHeader2); 

        $($li).text(textValueFromJQuery);
        $($textUl).append($li);
        $($textDiv).append($textUl); 

        //Add hover rules /// H2
        $($textHeader2).hover( 
            function() {
                $($textHeader2).removeClass('bg-light');
                $($textHeader2).addClass('bg-danger');
                $($textHeader2).addClass('rounded-pill');
        
            },
            function() {
                $($textHeader2).removeClass('bg-light');
                $($textHeader2).removeClass('rounded-pill');
            })


        // click on li elem >>> assign random color
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);

        // single click assigns color
        $li.click(function(event){
            $($li).css('color','rgb(' + r + ', ' + g + ', ' + b + ')');
        });
        

        // dblclick on li elem >>> remove item
        $li.dblclick(function(event){
            $($li).remove();
        });

        
    } else {

        //disabled test 0 // this one works
                $('#btnSubmit').prop( "disabled", true );

                const form = $('.form-group')[0];
                const reloadBtn = $('<button class="btn btn-outline-danger"> Reload? </button>');
                $(form).append(reloadBtn);

                alert("Yo asshole you need to enter a value. Gotta hit reload and use your brain though:)");

                //reload button function
                $(reloadBtn).click(function(event) {
                    event.preventDefault()

                    //nested confirm statements
                    const userWantsToReload = confirm('Are you sure you want to reload?');
                    if(userWantsToReload) {

                        const userReallyWantsToReload = confirm('Are you REALLY sure you want to reload?');
                        if(userReallyWantsToReload) {
                        

                        window.location.reload();
                        }
                    }


                });





                // console.log("disabled: reload page and enter some text this time!!");
                // alert("disabled: reload page and enter some text this time!!");
            
                
            }
            
            
    
          
          //append div to body ///REDUNDANT CODE
          
        
          
});

// mouse over h2 elem >>> sign new bg color and border radius


    



;


///END



// difference between bt.on("click",notify) vs. btn.
// btn.on("click", notify);

// function notify(){
//    alert("clicked");

    // need to alert value of the text input
    // alert(Submit.val());
    // console.log(textInput.val());
// }

