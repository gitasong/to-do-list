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


    $("ul#task-listings").append("<li>" + "<input type='checkbox' class='new-done-box' unchecked /> \t" + inputtedTask + "</li>");

    $("input#new-task").val("");

    $("input.new-done-box").click(function() {
      $(this).remove();
      $("#task-listings").children(":first-child").remove();
      // $("#task-item").remove();
      // $("input.new-done-box").last().remove();
    });
  });
});
