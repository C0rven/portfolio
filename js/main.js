$(document).ready(function(){
    $('#form').submit(function(){
        var name=$('#FName');
        var email=$('#FEmail');
        var message=$('#FMessage');
        if(!name.val()||!message.val()){
            alert("Заполните обязательные поля!");
            if(!name.val())name.css("border","1px solid #f44");
            if(!message.val())message.css("border","1px solid #f44");
        }
        else if(!regexes[name.attr('name')].test(name.val())||!regexes[email.attr('name')].test(email.val())){
            alert("Поля заполнены не правильно!");
        }
        else{
            $.ajax({
                type:"POST",
                url:'js/mail.php',
                data:$(this).serialize(),
                success:function(){
                    name.val('');
                    email.val('');
                    message.val('');
                    name.css("background-color","#fff");
                    email.css("background-color","#fff");
                    alert("Ваше сообщение отпрвлено!");
                },
                error:function(){
                    alert("Ваше сообщение не отпрвлено!");
                }
            });
        }
        return false;
    });var regexes={Email:/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,Name:/([А-Яа-я]+[\s]){1,5}/};$('input[type="text"]').on('focusout',function(){if(!($(this).val())&&!regexes[$(this).attr('name')].test($(this).val())){$(this).css("border","1px solid #f44");}else{$(this).css("border","1px solid #fff");}});});