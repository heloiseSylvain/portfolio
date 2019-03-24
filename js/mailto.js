
$('#btnCourriel').click(function() {

        
        var body_message = document.getElementById('textarea').value;
        var email = 'helo_sylvain@hotmail.com';
        var subject = (document.getElementById('nomCourriel').value + ' ' + document.getElementById('prenomCourriel').value );

    var mailto_link = 'mailto:' + email + '?subject=' + subject + '&body=' + body_message;

    win = window.open(mailto_link, 'emailWindow');
    if (win && win.open && !win.closed) win.close();

});