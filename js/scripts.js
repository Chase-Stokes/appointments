$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    const name = $("#name").val()
    const description = $("#description").val();
    const date = $("#appDate").val();
    const start = $("#startTime").val();
    const end = $("#endTime").val();
    $(".outputName").text(name);
    $(".outputDescription").text(description);
    $(".outputDate").text(date);
    $(".outputStart").text(start);
    $(".outputEnd").text(end);
    $(".page-two").show();
    $(".page-one").hide();
  });
  $("#return").submit(function(event){
    event.preventDefault();
    $(".page-two").hide();
    $(".page-one").show();
  })
})