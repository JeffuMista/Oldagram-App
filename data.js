const postsArr = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    entry: "images/post-vangogh.jpg",
    comment: "just took a few mushrooms lol",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    entry: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    entry: "images/post-ducreux.jpg",
    comment:
      "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152,
  },
];
const Posts = document.getElementById("posts");

for (const post of postsArr) {
  const section = document.createElement("section");
  section.classList.add("section");
  section.innerHTML = `
    <div class="container">
  <div class="prof-info">
    <div>
      <img
        src="${post.avatar}"
        alt="Van Gogh profile pic"
        class="prof-pic"
      />
    </div>
    <div>
      <h1>${post.name}</h1>
      <h2 class="light-text">${post.location}</h2>
    </div>
  </div>
  <div class="post-entry">
  <img
    src="${post.entry}"
    alt="Van Gogh Post of Van Gogh image"
    class="post-img"
  />
  <div>
    <img
      src="images/icon-heart.png"
      alt="Heart Icon to like post"
      class="post-icon like"
    />
    <img
      src="images/icon-comment.png"
      alt="Comment Icon to comment on post"
      class="post-icon"
    />
    <img
      src="images/icon-dm.png"
      alt="DM icon to message user"
      class="post-icon"
    />
  </div>
  <h2>${post.likes} likes</h2>
  <h3>
  ${post.username}
    <span class="light-text"
      >${post.comment}</span
    >
  </h3>
  </div>
</div>
    `;
  Posts.appendChild(section);
}

// <span class="icons"> //
// <i class="fa-regular fa-heart"></i>//
// <i class="fa-regular fa-comment"></i>//
// </span>//
const likeBtn = document.getElementsByClassName("like");
console.log(likeBtn);

for (var i = 0; i < likeBtn.length; i++) {
  likeBtn[i].addEventListener("dblClick", changeColor);
}
function changeColor() {
  if ((likeBtn.style.color = "#F5F5F5" || "white")) {
    return (likeBtn.style.color = "red");
  } else {
    return (likeBtn.style.color = "#F5F5F5" || "white");
  }
}
changeColor();
