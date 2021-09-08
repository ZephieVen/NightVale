let commentButtonPresent = false;
let username;
// username = "EmillyV"
let commentsList = [
    {
    name: "Violet",
    year: 2021,
    month: 09,
    day: 02,
    time: 1600,
    content: "This is nonesense"
  },
  {
    name: "Carlos",
    year: 2021,
    month: 09,
    day: 02,
    time: 1600,
    content: "I am a scientist, thus I know this information is misleading"
  },
  {
    name: "Cecil",
    year: 2021,
    month: 09,
    day: 02,
    time: 1600,
    content: "You are literally a five headed dragon"
  },
  {
    name: "John, you know, the farmer",
    year: 2021,
    month: 09,
    day: 02,
    time: 1600,
    content: "Come down to my farm and buy some apples! 100% free from damned souls and preservatives!"
  },
];


//Adds the comments made by the user
let del = $("#comment-input").val();
function userComment(){
  console.log("user comment function")
  // console.log(username == undefined)
  if(username == undefined ){
    signIn();
  }else{
    commentsList.unshift({
      name: username,
      year: 2021,
      month: 09,
      day: 02,
      time: 1600,
      content: $("#comment-input").val()
    })
    $("#comment-input").val("");
  }
  //Renders the comments so that you can see them as they are posted
  renderComments();
}

//Gets rid of comment button when is pressed
function cancel(){
  $("#button-cancel").toggleClass("hidden");
  $("#button-comment").toggleClass("hidden");
  commentButtonPresent = false;
}
function cancelEdit(){
  $("#comment-form-edit").remove();
}





$(".sign-in-button").click(function(){
  signIn();
})

function signIn(){
  console.log("sign in function")
  if(username == undefined){
    console.log("Sign in pop up has appeared");
    $(".pop-up").toggleClass("hidden");
    $("#username-input").focus();
  }else{
    username = undefined;
    $(".sign-in-button").text("Sign in");
  }
  console.log("username is: " + username);
}
function inputUsername(){
  username = $("#username-input").val();
  $(".username").text(username);
  $(".sign-in-button").text("Log Out");
  $(".pop-up").toggleClass("hidden");
}


function renderComments(){
  //CLEAR ALL COMMENTS
  $(".comments-list").empty()
  //APPEND COMMENTS
  for(let i = 0; i<commentsList.length; i++){
    $(".comments-list").append(
      `<div class="user-comment">
        <div class="user-info">
          <img src="images/headerImage.jpeg" alt="Profile pic" height="40px" width="40px;">
          <div class="">
            <h2>`+commentsList[i].name+`</h2>
            <p>4hrs ago</p>
          </div>
          <button type="button" class="edit hidden edit-comment" name="button">Edit</button>
          <button type="button" class="edit hidden del-comment" name="button">Delete</button>
          <button type="button" class="edit-button" name="button"><img src="images/edit-icon.svg" alt="edit icon" height="20px"> </button>
        </div>
        <p class="comment-content">`+commentsList[i].content+`</p>
        <form  class="comment-form-edit edit hidden" action="index.html" onsubmit="userComment(); return false" method="" autocomplete="off">
          <input class="comment-input-edit" contenteditable="true" type="text" value="" placeholder="Edit Comment">
          <button class="button-cancel-edit" type="button" name="button">Cancel</button>
          <button class="button-comment-edit" type="button" name="button">Edit</button>
        </form>
      </div>`
    )
    // console.log(commentsList)
  }
}
//Adds comment buttons
$("#comment-input").focusin(function(){
  if(!commentButtonPresent){
    $("#button-cancel").toggleClass("hidden");
    $("#button-comment").toggleClass("hidden");
    commentButtonPresent = true;
  }

});



//---Edit comments ---

//THREE DOTS BUTTON
$(document).on("click", ".edit-button", function(){
  console.log($(".edit-comment").outerHTML)
  $(this).parent().find(".del-comment").toggleClass("hidden");
  $(this).parent().find(".edit-comment").toggleClass("hidden");
});

//OPEN EDIT INPUT
$(document).on("click", ".edit-comment", function(event) {
  $(this).parent().parent().find(".comment-form-edit").toggleClass("hidden")
});
//DELETE
$(document).on("click", ".del-comment", function(event) {
  $(this).parent().parent().remove();
});
//EDIT
$(document).on("click", ".button-comment-edit", function(event) {
  $(this).parent().parent().find(".comment-content").text($(this).parent().find(".comment-input-edit").val());
});
//CANCEL EDIT
$(document).on("click", ".button-cancel-edit", function(event) {
  $(this).parent().parent().find(".comment-form-edit").toggleClass("hidden")
});



renderComments();












//EXTRA --- mayoral ads
let random = Math.floor(Math.random() * 2)
if(random == 0){
  $("#local-ads").attr("src", "images/Facelessformayor.jpg");
}else {
  $("#local-ads").attr("src", "images/Hiramformayor.jpg");
}
