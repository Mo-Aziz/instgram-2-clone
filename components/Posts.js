import Post from "./post";

const posts = [
  {
    id: "123",
    username: "Mad_Max",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "Subscribe and smash that like button ",
  },
  {
    id: "123",
    username: "Mad_Max",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "Subscribe and smash that like button ",
  },
  {
    id: "123",
    username: "Mad_Max",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "Subscribe and smash that like button ",
  },
  {
    id: "123",
    username: "Mad_Max",
    userImg: "https://links.papareact.com/3ke",
    img: "https://links.papareact.com/3ke",
    caption: "Subscribe and smash that like button ",
  },
];
function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;