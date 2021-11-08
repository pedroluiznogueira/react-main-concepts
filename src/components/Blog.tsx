function Blog(props: any) {
    const sidebar = (
      <ul>
        {props.posts.map((post: any) =>
          <li key={post.id}>
            {post.id}
          </li>
        )}
      </ul>
    );
    const content = props.posts.map((post: any) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
}

export default Blog;