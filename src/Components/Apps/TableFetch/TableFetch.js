import { useEffect, useState } from "react";

export default function tableFrtch() {
  const [posts, setPosts] = useState([]);

  const fetching = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    setPosts(data);
  };
  useEffect(() => {
    fetching();
  }, []);

  const itemList = posts.map((post) => {
    return (
      <tr key={post.id}>
        <td>{post.id}</td>
        <td> {post.title} </td>
        <td> {post.body} </td>
      </tr>
    );
  });
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>{itemList}</tbody>
      </table>
    </div>
  );
}
