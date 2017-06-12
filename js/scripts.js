//business logic
function Task(name, done) {
  this.name = name;
  this.done = done;
};

//user interface logic
$(document).ready(function() {
  $("form#task-list").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();
      console.log(inputtedTask);

    $("label").show();
    $("#task-item").show();

    // var isDone = $("input:checkbox[name=done]:checked").val();
    //   console.log(isDone);


    $("ul#task-list").append("<li>" + "<input type='checkbox' unchecked /> \t" + inputtedTask + "</li>");

    $("input#new-task").val("");
  });
});
