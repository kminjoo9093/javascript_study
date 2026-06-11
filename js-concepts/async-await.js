function getUser(userId) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        const user = userId === 1 ? { id: userId, name: "minjoo" } : null;
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

function runPromise() {
  getUser(1)
    .then((user) => {
      if (user) {
        console.log("user: ", user);
      } else {
        console.log("no user");
      }
    })
    .catch((err) => console.log(err));
}

// *** async 함수의 리턴 결과는 promise 객체이다 ***
async function runAsyncAwait() {
  try {
    const user = await getUser(1);
    const posts = await getPosts(user.id);
    const comments = await getComments(posts[0].id);
    console.log("user:", user);
    console.log("posts:", posts);
    console.log("comments:", comments);
  } catch (err) {
    console.log("err: ", err);
  }
}

// runPromise();
runAsyncAwait();
