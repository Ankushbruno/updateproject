var index = 0;

var questions=[
		["What's Your First name?<br>"],
		["What's Your Last name?"],
		["Your Email Address?"],
		["Your Roll Number?"],
		["Your Institute name?"],
		["Your Date of Birth?"],
		["Enter Your password."],
		["Reenter Your password." ], 
		["DONE"],
		];

var answers=[];
var a1,a2,a3,a4,a5,a6,a7;

var placeholders = [
			"First Name",
			"Last Name",
			"Email",
			"Roll Number",
			"Institute Name",
			"Date of Birth (YYYY-MM-DD)",
			"Password",
			"Confirm Password"
];


function askQuestion(i){
	if(typeof(questions[index]) == 'undefined') {

	}
    else {
		setTimeout(function() {
			$(".chatbox").append('<div id="bot-chat"> <img class="botimg" src="img/a.png"><br><br>' +
				'<span class="bot_message"> '+questions[i]+'</span> </div>');

			if(index < 8) {
				$("#input").prop("placeholder", placeholders[i]);
			} else {
				$("#input").prop("placeholder", "Your Account Was Created.");
				$("#input").prop("disabled", true);
				$(".button").prop("disabled", true);
				buttonchange();
			}

			$(".chatbox").scrollTop($(".chatbox").prop('scrollHeight'));
	
		},300);
	}
 }
	 
askQuestion(index);

document.querySelector("#input").addEventListener('keypress', function(e){
	var key = e.keycode || e.which;
	if (key==13) {
		send();	
	}
});


function send()
{
	var input;
        var i=document.getElementById("input").value;

	if(i == '') 
    {
            alert("Please fill the credential");
            input=NULL;
	} 
    else 
    {
		if(index == 6 || index == 7)
        {
			input = "Password is hidden for Security Purpose.";
        } 
        else 
        { 
            if(index==0||index==1||index==4)
            {
                   var f= /^[A-Za-z]+$/;
                   if(!i.match(f))
                   {
                                alert("Please use alphabets");
                                input=NULL; 
                                $(".chatbox").append('<div id="umsg-area"> <div id="user-chat">' +
		                '<img class="userimg" src="img/stu.png"></img>' +
                                '</div> <div id="a"> </div>' +
	                        '<div class="user_message">' +
		                input +
                                '</div> <div>');


	                        $(".chatbox").scrollTop($(".chatbox").prop('scrollHeight'));
                                askQuestion(index);
	                        i.val('');
	                        i.focus();
                    }
                    else
                    {
                        input=i;
                    }
            }

                        else if(index==2)
                        {
                           var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                           if(i.match(mailformat))
                           {  
                               input=i;
                           }
                           else
                           {
                               alert("You have entered an invalid email address!");
                               input=NULL;
                               $(".chatbox").append('<div id="umsg-area"> <div id="user-chat">' +
		               '<img class="userimg" src="img/stu.png"></img>' +
		               '</div> <div id="a"> </div>' +
	                  	'<div class="user_message">' +
		                input +
		               '</div> <div>');


	                        $(".chatbox").scrollTop($(".chatbox").prop('scrollHeight'));
                        	askQuestion(index);
	                        i.val('');
	                        i.focus();	
                           }
                        }
 
                        else
                        {
                               if(index==5)
                               {
                                  var d = /^\d{4}-\d{2}-\d{2}$/;
                                  if(!i.match(d))
                                  {
                                        alert("Invalid Date Format");
                                        input=NULL; 
                                        $(".chatbox").append('<div id="umsg-area"> <div id="user-chat">' +
		                        '<img class="userimg" src="img/stu.png"></img>' +
		                        '</div> <div id="a"> </div>' +
	                  	        '<div class="user_message">' +
		                        input +
		                        '</div> <div>');


	                                $(".chatbox").scrollTop($(".chatbox").prop('scrollHeight'));
                        	        askQuestion(index);
	                                i.val('');
	                                i.focus();
                                  }
                                  else
                                  {
                                     input=i;
                                  }
                               }
                        }
                     input=i;
                        
	        }
	}
	
	$(".chatbox").append('<div id="umsg-area"> <div id="user-chat">' +
		'<img class="userimg" src="img/stu.png"></img>' +
		'</div> <div id="a"> </div>' +
		'<div class="user_message">' +
		input +
		'</div> <div>');


	$(".chatbox").scrollTop($(".chatbox").prop('scrollHeight'));
	index++;
	askQuestion(index);
	if(index<8)
	{
	    for(k=0;k<7;k++)
	    {
	    	$("#input").prop("answers", answers[k]);
       	    $("input").val('');
	        $("input").focus();	
	    }
    }
}


function save()
{
   $.ajax({
   url:"submit.php",
   type:"POST",
   data: {a1:answers[0],a2:answers[1],a3:answers[2],a4:answers[3],a5:answers[4],a6:answers[5],a7:answers[6]},
   success:function(data) {
     alert(data);
   }
  })
}
 

function buttonchange()
{

document.getElementById("send").style.visibility = 'hidden';
document.getElementById("confirm").style.visibility = 'visible';
}