import "/style.css";
import data from "/data.js"

const posts = data.map

document.querySelector("#app").innerHTML = `
<header class="header">
<div class="container">
  <div class="header-imgs">
    <img src="images/logo.png" alt="Oldgram Logo" class="logo" />
    <img src="images/user.jpeg" alt="Profile Image" class="prof-pic" />
  </div>
</div>
</header>
<section>
<div class="container">
  <div class="prof-info">
    <div>
      <img
        src="images/avatar-vangogh.jpg"
        alt="Van Gogh profile pic"
        class="prof-pic"
      />
    </div>
    <div>
      <h1>Vincent Van Gogh</h1>
      <h2 class="light-text">Zudert, Netherlands</h2>
    </div>
  </div>
  <img
    src="images/post-vangogh.jpg"
    alt="Van Gogh Post of Van Gogh image"
    class="post-img"
  />
  <div>
    <img
      src="images/icon-heart.png"
      alt="Heart Icon to like post"
      class="post-icon"
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
  <h2>51,333 likes</h2>
  <h3>
    Knight_Starry
    <span class="light-text"
      >Drawing inspiration from the shrooms I just ate. psychedelics
      aerodynamics, wuoooooh!</span
    >
  </h3>
</div>
</section>
`;
