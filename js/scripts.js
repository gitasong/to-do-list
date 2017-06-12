//business logic
function Task(name, done) {
  this.name = name;
  this.done = done;
};

//user interface logic
$(document).ready(function() {
  $("form#task-list").submit(function(event) {
    event.preventDefault();

    var isDone = $("input:checkbox[name=done]:checked").val();
      console.log(isDone);
    var inputtedTask = $("input#new-task").val();
      console.log(inputtedTask);

    $("#task-item").show();
    $("ul#task-list").append("<li>" + inputtedTask + "</li>");

    $("input:checkbox[name=done]:checked").attr("checked", false);
    $("input#new-task").val("");
  });
});
