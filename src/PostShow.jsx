export function PostShow(props) {
  console.log(props.post);
  return (
    <div>
      <p>{props.post.title}</p>
      <p>{props.post.body}</p>
    </div>
  );
}
