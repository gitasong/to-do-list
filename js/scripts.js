//business logic
function Task(name, done) {
  this.name = name;
  this.done = done;
};

Task.prototype.completed = function() {
  this.name.remove();
}

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


    $("ul#task-listings").append("<li class='item'>" + inputtedTask + "</li>");

    $("input#new-task").val("");

    $(".item").click(function() {
      $(this).remove();
    });

      // $("#task-item").remove();
      // $("input.new-done-box").last().remove();
  });
});
