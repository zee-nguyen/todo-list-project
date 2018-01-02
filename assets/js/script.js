//Check off specific todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        //passing the callback function into fadeOut will make sure that .remove() occurs after fadeOut
        //keyword this here refer to clicked span's parent, aka li
        $(this).remove();
    });
    event.stopPropagation();
});

//add new todo
$("input[type='text']").keypress(function(event){
   if (event.which === 13) {
       //extract the input text
        var todoText = $(this).val();
       //make new li and append to ul
       $("ul").append("<li><span>X</span> " + todoText + " </li>");
       //clear input
       $(this).val("");
   }
});