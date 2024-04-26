const postsArr = [
  {
    name: "Vincent van Gogh",
    username: "vincey1853",
    location: "Zundert, Netherlands",
    avatar: "images/avatar-vangogh.jpg",
    entry: "images/post-vangogh.jpg",
    comment:
      "Took a few shrooms and boy don't I feel creative. Pyschedelics mechanics wuoooh! 🤣🤣🤣",
    likes: 21,
  },
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    entry: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh... but again, TGIF 🍻",
    likes: 4,
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    entry: "images/post-ducreux.jpg",
    comment:
      "gm friends! Jus' bought some Shiba Inu. which coin are YOU stacking up today?? post below and WAGMI!😉",
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
        alt="User profile pic"
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
    alt="Post entry image"
    class="post-img"
  />
  <div class="icon-container">
    <span class="icons"> 
    <i class="fa-solid fa-heart post-icon"></i>
    </span>
    <span class="icons"> 
    <i class="fa-regular fa-comment post-icon"></i>
    </span>
    <img
      src="images/icon-dm.png"
      alt="DM icon to message user"
      class="post-icon post-icon-img"
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
