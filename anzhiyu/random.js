var posts=["2024/05/01/hello-world/","2024/05/03/music/","2024/05/01/搭建我的博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };