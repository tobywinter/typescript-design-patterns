class BlogPost {
  title: string;
  content: string;
  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  createPost(): void {}

  updatePost(): void {}

  deletePost(): void {}
}

class RenderBlogPost {
  blog: BlogPost;
  constructor(blog: BlogPost) {
    this.blog = blog;
  }

  displayHTML(): void {
    console.log("Title: " + this.blog.title);
    console.log("Content: " + this.blog.content);
  }
}
