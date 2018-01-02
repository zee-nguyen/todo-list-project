//Check off specific todos by clicking
$("li").click(function(){
    $(this).toggleClass("completed");
});

//click on X to delete todo
$("span").click(function(event){
    $(this).parent().fadeOut(500, function(){
        //passing the callback function into fadeOut will make sure that .remove() occurs after fadeOut
        //keyword this here refer to clicked span's parent, aka li
        $(this).remove();
    });
    event.stopPropagation();
});
