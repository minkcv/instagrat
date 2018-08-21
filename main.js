function post() {
    document.getElementById('numbers').style.display = "block";
    document.getElementById('post').style.display = "none";
    document.getElementById('posted').style.display = "block";
    document.getElementById('posted-text').innerHTML = document.getElementById('post-text').value;
    if (picture)
        document.getElementById('posted-image').style.display = "block";
    setTimeout(serotonin, 200);
}

var likes = 0;
var shares = 0;
var shares2 = 0;
var favorites = 0;
var stars = 0;
var friends = 1;
var notifications = 1;
var chats = 1;

var comments = [
    'Great', 'Looking good', 'Agree completely', 'Perfection', 
    'Absolutely true', 'The way it should be', 'Never back down', 'The world needs to see this',
    'Truly blessed', 'Thank you!', 'Everyone should see this', 'Deserves more likes'
];

var picture = false;

function serotonin() {
    likes += Math.floor(Math.random() * 30);
    shares += Math.floor(Math.random() * 3);
    shares2 += Math.floor(Math.random() * 3);
    favorites += Math.floor(Math.random() * 3);
    stars += Math.floor(Math.random() * 3);
    friends += Math.floor(Math.random() * 3);
    notifications += Math.floor(Math.random() * 3);
    chats += Math.floor(Math.random() * 3);
    document.getElementById('likes').innerHTML = likes;
    document.getElementById('shares').innerHTML = shares;
    document.getElementById('shares2').innerHTML = shares2;
    document.getElementById('favorites').innerHTML = favorites;
    document.getElementById('stars').innerHTML = stars;
    document.getElementById('friends').innerHTML = "<div class='count'>" + friends + "</div>";
    document.getElementById('notifications').innerHTML = "<div class='count'>" + notifications + "</div>";
    document.getElementById('chats').innerHTML = "<div class='count'>" + chats + "</div>";

    var commentThisTime = Math.random() > 0.5;
    if (commentThisTime) {
        var comment = document.createElement('div');
        comment.className = 'comment';
        comment.innerHTML = comments[Math.floor(Math.random() * comments.length)] + "<div><img src='img/like.png'/> " + Math.floor(1 + Math.random() * 8) + "</div>";
        document.getElementById('comments').appendChild(comment);
    }

    var wait = Math.floor(Math.random() * 100) + 500;
    setTimeout(serotonin, wait);
}

// from mdn
function previewFile(){
    var preview = document.getElementById('posted-image');
    var file    = document.querySelector('input[type=file]').files[0];
    var reader  = new FileReader();
    
    reader.onloadend = function () {
        preview.src = reader.result;
    }
    
    if (file) {
        picture = true;
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
}