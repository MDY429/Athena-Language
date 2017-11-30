function validateForm(){

    var Student_Name    = document.forms["EnrollForm"]["entry.718823155"].value;
    var School          = document.forms["EnrollForm"]["entry.1413202787"].value;
    var Grade           = document.forms["EnrollForm"]["entry.877185134"].value;
    var Guardian_Name   = document.forms["EnrollForm"]["entry.2075336225"].value;
    var Phone           = document.forms["EnrollForm"]["entry.402803862"].value;
    var Tel             = document.forms["EnrollForm"]["entry.337328473"].value;

    alertify.set('notifier','position', 'top-center');
    if (Student_Name == "" ) {
        document.getElementById("name").focus();
        alertify.error('Please fill the Student Name.');
        return false;
    }
    else if(School == "" ){
        document.getElementById("school").focus();
        alertify.error('Please fill the School.');
        return false;
    }
    else if(Grade == ""){
        document.getElementById("grade").focus();
        alertify.error('Please fill the Grade.');
        return false;
    }
    else if(Guardian_Name == ""){
        document.getElementById("guardian").focus();
        alertify.error('Please fill the Guardian Name.');
        return false;
    }
    else if(Phone == "" ){
        document.getElementById("phone").focus();
        alertify.error('Please fill the Phone.');
        return false;
    }
    else if(Tel == "" ){
        document.getElementById("tel").focus();
        alertify.error('Please fill the Tel.');
        return false;
    }


    alertify.success('Thanks for your submit!!!');

}