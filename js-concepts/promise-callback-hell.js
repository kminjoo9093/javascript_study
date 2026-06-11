function getUser(userId) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const user = { id: userId, name: "minjoo" };
        // callback(user);
        resolve(user);
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
}

function getPosts(userId) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const posts = [
          { id: 1, title: "Post 1" },
          { id: 2, title: "Post 2" },
        ];
        // callback(posts);
        resolve(posts);
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
}

function getComments(postId) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const comments = [
          { id: 1, text: "comment 1" },
          { id: 2, text: "comment 2" },
          { id: 3, text: "comment 3" },
        ];
        // callback(comments);
        resolve(comments);
      }, 1000);
    } catch (error) {
      reject(error);
    }
  });
}

// getUser(1, (user) => {
//   console.log("user: ", user);
//   getPosts(user.id, (posts) => {
//     console.log("posts: ", posts);
//     getComments(posts[0].id, (comments) => {
//       console.log(comments);
//     });
//   });
// });

getUser(1)
  .then((user) => {
    console.log("user: ", user);
    return getPosts(user.id);
  })
  .then((posts) => {
    console.log("posts: ", posts);
    return getComments(posts[0].id);
  })
  .then((comments) => {
    console.log("comments: ", comments);
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("finally"));
