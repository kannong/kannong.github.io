var posts=["2024/05/01/hello-world/","2024/05/03/music/","2024/05/03/music_test/","2024/05/01/搭建我的博客/","2024/05/23/single_songs/2023/2023-01/","2024/05/23/single_songs/2023/2023-02/","2024/05/23/single_songs/2023/2023-03/","2024/05/23/single_songs/2023/2023-04/","2024/05/23/single_songs/2023/2023-05/","2024/05/23/single_songs/2023/2023-06/","2024/05/23/single_songs/2023/2023-07/","2024/05/23/single_songs/2023/2023-08/","2024/05/23/single_songs/2023/2023-09/","2024/05/23/single_songs/2023/2023-10/","2024/05/23/single_songs/2023/2023-11/","2024/05/22/single_songs/2024/2024-01/","2024/05/22/single_songs/2024/2024-02/","2024/05/22/single_songs/2024/2024-03/","2024/05/22/single_songs/2024/2024-04/","2024/05/22/single_songs/2024/2024-05/","2024/05/22/single_songs/2024/2024-06/","2024/05/23/song_lists/artists/xiye-TerenceLam/","2024/05/23/song_lists/attributes/xiye-Japan/","2024/05/23/song_lists/attributes/xiye-LGBT/","2024/05/23/song_lists/attributes/xiye-buddhist/","2024/05/23/song_lists/attributes/xiye-family/","2024/05/23/song_lists/attributes/xiye-life/","2024/05/23/song_lists/attributes/xiye-others/","2024/05/23/song_lists/attributes/xiye-romance/","2024/05/23/song_lists/attributes/xiye-selfcare/","2024/05/23/song_lists/attributes/xiye-xiaohao/","2024/05/23/song_lists/attributes/xiye-view-of-love/","2024/05/03/xiye2024/","2024/05/14/xiye2020s/","2024/05/26/song_lists/composer/xiye-cc/","2024/05/24/single_songs/2022/2022-01/","2024/05/24/single_songs/2022/2022-02/","2024/05/24/single_songs/2022/2022-03/","2024/05/24/single_songs/2022/2022-04/","2024/05/24/single_songs/2022/2022-06/","2024/05/24/single_songs/2022/2022-07/","2024/05/24/single_songs/2022/2022-05/","2024/05/24/single_songs/2022/2022-09/","2024/05/24/single_songs/2022/2022-10/","2024/05/24/single_songs/2022/2022-08/","2024/05/24/single_songs/2022/2022-11/","2024/05/24/single_songs/2022/2022-12/","2024/05/24/single_songs/2022/2022-13/","2024/05/23/song_lists/attributes/xiye-friend/","2024/05/23/song_lists/attributes/xiye-social/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };