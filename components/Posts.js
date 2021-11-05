import Post from "./post";

const posts = [
  {
    id: "123",
    username: "Mad_Max",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsEF0tgFyRs-opfOdjKyegNCFoz0VYu2UgA&usqp=CAU",
    img: "https://links.papareact.com/3ke",
    caption: "Subscribe and smash that like button ",
  },
  {
    id: "123",
    username: "Mad_Max",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsEF0tgFyRs-opfOdjKyegNCFoz0VYu2UgA&usqp=CAU",
    img: "https://links.papareact.com/3ke",
    caption: "Subscribe and smash that like button ",
  },
  {
    id: "123",
    username: "Mad_Max",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsEF0tgFyRs-opfOdjKyegNCFoz0VYu2UgA&usqp=CAU",
    img: "https://links.papareact.com/3ke",
    caption: "Subscribe and smash that like button ",
  },
  {
    id: "123",
    username: "Mad_Max",
    userImg:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrsEF0tgFyRs-opfOdjKyegNCFoz0VYu2UgA&usqp=CAU",
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
