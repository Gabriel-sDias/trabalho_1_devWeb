let tweet = true;
let tweetAndReplays = false;
let media = false;
let likes = false;
const avatar =
  "https://ih1.redbubble.net/image.229538263.0822/st,small,845x845-pad,1000x1000,f8f8f8.u2.jpg";
const likesAvatar="./patrick.png";
//conteudo das abas de navegação

let allTweets = [
  {
    avatar: avatar,
    tweet: "Choveu hoje",
    user: "@Bob",
    userName: "Bob",
  },
  {
    avatar: avatar,
    tweet: "Não choveu hoje",
    user: "@Bob",
    userName: "Bob",
  },
  {
    avatar: avatar,
    tweet: "Hoje quase Choveu",
    user: "@Bob",
    userName: "Bob",
  },
  {
    avatar: avatar,
    tweet: "Choveu hoje",
    user: "@Bob",
    userName: "Bob",
  },
];

let allLikes = [
  {
    avatar: likesAvatar,
    tweet: "Choveu hoje",
    user: "@Patrick",
    userName: "Patrick",
  },
  {
    avatar: likesAvatar,
    tweet: "Não choveu hoje",
    user: "@Patrick",
    userName: "Patrick",
  },
  {
    avatar:likesAvatar,
    tweet: "Hoje quase Choveu",
    user: "@Patrick",
    userName: "Patrick",
  },
  {
    avatar: likesAvatar,
    tweet: "Choveu hoje",
    user: "@Patrick",
    userName: "Patrick",
  },
];

/*FUNCIONALIDADES DO MODAL*/
var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


function handleModal() {
  modal.style.display = "block";
}


span.onclick = function () {
  modal.style.display = "none";
};
function closeModal() {
  modal.style.display = "none";
}


/*Funcionalidades do Menu*/
const $menu = document.getElementById('menu');
const $menuTrigger = document.getElementById('menu-trigger');
let state = $menu.dataset.aberto;

$menuTrigger.addEventListener('click', () => {
  if(state == "false") {
    state = "true";
  } else {
    state = "false";
  }
  
  $menu.dataset.aberto = state;
})


/*FUNCIONALIDADES DA BARRA DE NAVEGAÇÃO DO PERFIL*/
function handleTweetAndReplays() {
  tweet = false;
  tweetAndReplays = true;
  media = false;
  likes = false;

  document.getElementById("tweets").style.borderBottom = "none";
  document.getElementById("tweetsandreplays").style.borderBottom =
    "4px ridge rgb(29,161,242)";
  document.getElementById("media").style.borderBottom = "none";
  document.getElementById("likes").style.borderBottom = "none";

  document.getElementById("tweet1").innerHTML = `
  <div style="width:100%; display:flex; height:200px; margin-bottom:4px; background:#FFFF; flex-direction: column; align-items:center;">
    <b style="margin-top:40px; font-size:30px;">
      Luzes, câmera... anexos!
    </b>
    <p style="font-size:15px; color:gray;">
      Quando você repostar tweets, fotos ou vídeos, eles serão exibidos aqui. 
    </p>
  </div>
  `;
}

function handleMedia() {
  tweet = false;
  tweetAndReplays = false;
  media = true;
  likes = false;

  document.getElementById("tweets").style.borderBottom = "none";
  document.getElementById("tweetsandreplays").style.borderBottom = "none";
  document.getElementById("media").style.borderBottom =
    "4px ridge rgb(29,161,242)";
  document.getElementById("likes").style.borderBottom = "none";

  document.getElementById("tweet1").innerHTML = `
  <div style="width:100%; display:flex; height:200px; margin-bottom:4px; background:#FFFF; flex-direction: column; align-items:center;">
    <b style="margin-top:40px; font-size:30px;">
      Luzes, câmera... anexos!
    </b>
    <p style="font-size:15px; color:gray;">
      Quando você postar fotos ou vídeos, eles serão exibidos aqui. 
    </p>
  </div>
  `;
}

function handleLikes() {
  tweet = false;
  tweetAndReplays = false;
  media = false;
  likes = true;

  document.getElementById("tweets").style.borderBottom = "none";
  document.getElementById("tweetsandreplays").style.borderBottom = "none";
  document.getElementById("media").style.borderBottom = "none";
  document.getElementById("likes").style.borderBottom =
    "4px ridge rgb(29,161,242)";

  document.getElementById("tweet1").innerHTML = allLikes.map(
    (likes)=>
    `<div style="width:100%; display:flex; height:150px; flex-direction:column; border-bottom:1px ridge rgb(194, 198, 199); align-items:center; " >
    <div style="width:60%; display:flex; height:110px;  ">
      <div style="display:flex; align-items:center; height:100%; justify-content:center;">
        <img src=patrick.png style="width: 80px;
        height: 80px;
        object-fit: fill;
        border-radius: 80px"/>
      </div>
      <div  style="display:flex; align-items:center; margin-left:20px">
        <p>
          ${likes.userName} <span style="color:grey">${likes.user} </span><br/>${likes.tweet}
        </p>
      </div>
    </div>
    <div style="display:flex; height:20px; width:100%; justify-content:center; align-items:center;">
      <div style="display:flex; height:20px; width:50%; justify-content:space-evenly;">

        <button style="border:none; background-color:#FFFF;">
        <i class="fa fa-commenting-o" style="font-size:18px; color: rgb(175, 175, 179);"></i>
        </button>   
   
        <button style="border:none; background-color:#FFFF;">
          <i class="fa fa-retweet" style="font-size: 17px; color: rgb(175, 175, 179)"></i>
        </button>   
        
        <button style="border:none; background-color:#FFFF;">
          <i class="fa fa-heart" style="font-size: 18px; color: rgb(255,0,0)"></i>
        </button>   
        
        <button style="border:none; background-color:#FFFF; ">
          <i class="glyphicon glyphicon-tasks" style="font-size: 17px; color: rgb(175, 175, 179)"></i>
        </button>   
      </div>
    </div>
  </div>
  `
  ).join("");
}

function handleTweet() {
  tweet = true;
  tweetAndReplays = false;
  media = false;
  likes = false;
  document.getElementById("tweets").style.borderBottom =
    "4px ridge rgb(29,161,242)";
  document.getElementById("tweetsandreplays").style.borderBottom = "none";
  document.getElementById("media").style.borderBottom = "none";
  document.getElementById("likes").style.borderBottom = "none";

  document.getElementById("tweet1").innerHTML = allTweets
    .map(
      (tweet) =>
      `<div style="width:100%; display:flex; height:150px; flex-direction:column; border-bottom:1px ridge rgb(194, 198, 199); align-items:center; " >
        <div style="width:60%; display:flex; height:110px;  ">
          <div style="display:flex; align-items:center; height:100%; justify-content:center;">
            <img src=${tweet.avatar} style="width: 80px;
            height: 80px;
            object-fit: fill;
            border-radius: 80px"/>
          </div>
          <div  style="display:flex; align-items:center; margin-left:20px">
            <p>
              ${tweet.userName} <span style="color:grey">${tweet.user} </span><br/>${tweet.tweet}
            </p>
          </div>
        </div>
        <div style="display:flex; height:20px; width:100%; justify-content:center; align-items:center;">
          <div style="display:flex; height:20px; width:50%; justify-content:space-evenly;">
  
            <button style="border:none; background-color:#FFFF;">
            <i class="fa fa-commenting-o" style="font-size:18px; color: rgb(175, 175, 179);"></i>
            </button>   
       
            <button style="border:none; background-color:#FFFF;">
              <i class="fa fa-retweet" style="font-size: 17px; color: rgb(175, 175, 179)"></i>
            </button>   
            
            <button style="border:none; background-color:#FFFF;">
              <i class="fa fa-heart-o" style="font-size: 18px; color: rgb(175, 175, 179)"></i>
            </button>   
            
            <button style="border:none; background-color:#FFFF; ">
              <i class="glyphicon glyphicon-tasks" style="font-size: 17px; color: rgb(175, 175, 179)"></i>
            </button>   
            
          </div>
        </div>
      </div>
      `
    )
    .join("");
}

/*FUNCIONALIDADE TWEETAR*/
function tweetar() {
  const newTweet = document.getElementById("textAreaTweet").value;
  const data = {
    avatar: avatar,
    tweet: newTweet,
    user: "@Gabriel",
    userName: "Gabriel Silveira",
  };
  allTweets.unshift(data);

  closeModal();
  handleTweet();
}

handleTweet();
