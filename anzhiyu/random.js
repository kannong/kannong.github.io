var posts=["2024/05/14/yearsworks/xiye2020s/","2024/05/27/single_songs/2020/2020-02/","2024/05/27/single_songs/2020/2020-03/","2024/05/27/single_songs/2020/2020-04/","2024/05/27/single_songs/2020/2020-05/","2024/05/27/single_songs/2020/2020-06/","2024/05/27/single_songs/2020/2020-07/","2024/05/27/single_songs/2020/2020-08/","2024/05/27/single_songs/2020/2020-09/","2024/05/27/single_songs/2020/2020-10/","2024/05/27/single_songs/2020/2020-11/","2024/05/27/single_songs/2020/2020-12/","2024/05/27/single_songs/2020/2020-13/","2024/05/27/single_songs/2020/2020-14/","2024/05/27/single_songs/2020/2020-15/","2024/05/27/single_songs/2020/2020-16/","2024/05/27/single_songs/2020/2020-17/","2024/05/27/single_songs/2020/2020-18/","2024/05/27/single_songs/2020/2020-19/","2024/05/27/single_songs/2020/2020-20/","2024/05/27/single_songs/2020/2020-21/","2024/05/27/single_songs/2020/2020-22/","2024/05/26/single_songs/2021/2021-01/","2024/05/26/single_songs/2021/2021-02/","2024/05/26/single_songs/2021/2021-03/","2024/05/26/single_songs/2021/2021-04/","2024/05/26/single_songs/2021/2021-05/","2024/05/26/single_songs/2021/2021-06/","2024/05/26/single_songs/2021/2021-07/","2024/05/26/single_songs/2021/2021-08/","2024/05/26/single_songs/2021/2021-09/","2024/05/26/single_songs/2021/2021-10/","2024/05/26/single_songs/2021/2021-11/","2024/05/26/single_songs/2021/2021-12/","2024/05/26/single_songs/2021/2021-13/","2024/05/26/single_songs/2021/2021-14/","2024/05/26/single_songs/2021/2021-15/","2024/05/26/single_songs/2021/2021-16/","2024/05/26/single_songs/2021/2021-17/","2024/05/26/single_songs/2021/2021-18/","2024/05/24/single_songs/2022/2022-01/","2024/05/24/single_songs/2022/2022-02/","2024/05/24/single_songs/2022/2022-03/","2024/05/24/single_songs/2022/2022-04/","2024/05/24/single_songs/2022/2022-05/","2024/05/24/single_songs/2022/2022-06/","2024/05/24/single_songs/2022/2022-07/","2024/05/24/single_songs/2022/2022-08/","2024/05/24/single_songs/2022/2022-09/","2024/05/24/single_songs/2022/2022-10/","2024/05/24/single_songs/2022/2022-11/","2024/05/24/single_songs/2022/2022-12/","2024/05/24/single_songs/2022/2022-13/","2024/05/23/single_songs/2023/2023-01/","2024/05/23/single_songs/2023/2023-02/","2024/05/23/single_songs/2023/2023-03/","2024/05/23/single_songs/2023/2023-04/","2024/05/23/single_songs/2023/2023-05/","2024/05/23/single_songs/2023/2023-06/","2024/05/23/single_songs/2023/2023-07/","2024/05/23/single_songs/2023/2023-09/","2024/05/23/single_songs/2023/2023-08/","2024/05/23/single_songs/2023/2023-10/","2024/05/23/single_songs/2023/2023-11/","2024/05/22/single_songs/2024/2024-01/","2024/05/22/single_songs/2024/2024-02/","2024/05/22/single_songs/2024/2024-03/","2024/05/22/single_songs/2024/2024-04/","2024/05/22/single_songs/2024/2024-05/","2024/05/22/single_songs/2024/2024-06/","2024/05/23/song_lists/artists/xiye-Ivana/","2024/05/23/song_lists/artists/xiye-KayTse/","2024/05/23/song_lists/artists/xiye-LeoKu/","2024/05/23/song_lists/artists/xiye-TerenceLam/","2024/05/23/song_lists/attributes/xiye-Japan/","2024/05/23/song_lists/attributes/xiye-LGBT/","2024/05/23/song_lists/attributes/xiye-buddhist/","2024/05/23/song_lists/attributes/xiye-family/","2024/05/23/song_lists/attributes/xiye-friend/","2024/05/23/song_lists/attributes/xiye-life/","2024/05/23/song_lists/attributes/xiye-others/","2024/05/23/song_lists/attributes/xiye-romance/","2024/05/23/song_lists/attributes/xiye-selfcare/","2024/05/23/song_lists/attributes/xiye-social/","2024/05/23/song_lists/attributes/xiye-soundtrack/","2024/05/23/song_lists/attributes/xiye-view-of-love/","2024/05/23/song_lists/attributes/xiye-xiaohao/","2024/05/26/song_lists/composer/xiye-cc/","2024/05/27/song_lists/composer/xiye-chenhuiyang/","2024/05/27/song_lists/composer/xiye-wulecheng/","2024/06/12/yearsworks/xiye2010s/","2024/05/03/yearsworks/xiye2024/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };