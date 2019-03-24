var myform = $("form#myform");
myform.submit(function(event){
	event.preventDefault();

  // Change to your service ID, or keep using the default service
  var service_id = "default_service";
  var template_id = "template_fsjGnZhY";

  myform.find("button").text("ENVOIE EN COURS");
  emailjs.sendForm(service_id,template_id,myform[0])
  	.then(function(){ 
    	alert("Votre message a bien été envoyé!");
       myform.find("button").text("ENVOYER");
    }, function(err) {
       alert("Votre message n'a pas été envoyé!\r\n Response:\n " + JSON.stringify(err));
       myform.find("button").text("ENVOYER");
    });
  return false;
});

/*$('#btnCourriel').click(function() {

        
        var body_message = document.getElementById('textarea').value;
        var subject = (document.getElementById('nomCourriel').value + ' ' + document.getElementById('prenomCourriel').value );
        $('#btnCourriel').attr('href', 'mailto:helo_sylvain@hotmail.com?subject='+subject+'&body='+body_message);
        
    

});*/