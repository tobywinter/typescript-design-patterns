// creating posts
// commenting posts
// sharing
// admin - 3
// regular - 2

interface PostCreator {
  createPost(): void;
}

interface CommentCreator {
  commentPost(): void;
}

interface PostSharer {
  sharePost(): void;
}

class AdminUser implements PostCreator, CommentCreator, PostSharer {
  createPost(): void {
    console.log("do createPost");
  }
  commentPost(): void {
    console.log("do commentPost");
  }
  sharePost(): void {
    console.log("do sharePost");
  }
}

class RegularUser implements PostSharer, CommentCreator {
  sharePost(): void {
    console.log("do sharePost");
  }
  commentPost(): void {
    console.log("do commentPost");
  }
}
