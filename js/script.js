var testResults = function(one, two , three ,four , five ){
    return one + two + three + four + five ;
    }
    $(document).ready(function(){
      $(".begin").click(function(){
        $("#form").fadeToggle("slow");
      });
      $("form#form").submit(function(event){
        var bt1 = parseInt($("input:radio[name=bt1]:checked").val());
        var bt2 = parseInt($("input:radio[name=bt2]:checked").val());
        var bt3 = parseInt($("input:radio[name=bt3]:checked").val());
        var bt4 = parseInt($("input:radio[name=bt4]:checked").val());
        var bt5= parseInt($("input:radio[name=bt5]:checked").val());
 
        var result = testResults(bt1,bt2,bt3,bt4,bt5);
 
        $("#display").text("Your score is:" + result);
 
       /* event.preventDefault();
        $(".fl").show();*/
      });
    