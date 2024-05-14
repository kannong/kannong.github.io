var posts=["2024/05/01/hello-world/","2024/05/03/music/","2024/05/03/music_test/","2024/05/03/xiye2024/","2024/05/01/搭建我的博客/","2024/05/14/xiye2020s/","2024/05/13/xiye-Terence/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };