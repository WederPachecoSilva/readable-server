import connection from "./db";
import v4 from "uuid";

const date = new Date();
const timestamp = date.toLocaleString();

const categoryId1 = v4();
const categoryId2 = v4();
const postId1 = v4();
const postId2 = v4();
const commentId1 = v4();
const commentId2 = v4();

let queries: string[] = [];

queries.push(
  `INSERT INTO categories VALUES (
        "${categoryId1}", 
        "react", 
        "react", 
        "${timestamp}", 
        "0"
    );`
);

queries.push(
  `INSERT INTO categories VALUES (
        "${categoryId2}", 
        "redux", 
        "redux", 
        "${timestamp}", 
        "0"
    );`
);

queries.push(
  `INSERT INTO posts VALUES (
        "${postId1}", 
        "${timestamp}", 
        "Udacity is the best place to learn React", 
        "thingone",
        "Just kidding. It takes more than 10 minutes to learn technology.",
        "3", 
        "5", 
        "0", 
        "${categoryId1}", 
        "0"
    );`
);

queries.push(
  `INSERT INTO posts VALUES (
        "${postId2}", 
        "${timestamp}", 
        "Learn Redux in 10 minutes!", 
        "thingtwo",
        "Everyone says so after all.",
        "13", 
        "5", 
        "0", 
        "${categoryId2}", 
        "2"
    );`
);

queries.push(
  `INSERT INTO comments VALUES (
        "${commentId1}", 
        "${postId2}", 
        "${timestamp}", 
        "Hi there! I am a COMMENT.", 
        "thingtwo", 
        "6", 
        "5", 
        "0"
    );`
);

queries.push(
  `INSERT INTO comments VALUES (
        "${commentId2}", 
        "${postId2}", 
        "${timestamp}", 
        "Comments. Are. Cool.", 
        "thingone", 
        "5", 
        "12", 
        "0"
    );`
);

queries.forEach(query => {
  connection.query(query, (err, result) => {
    if (err) {
      return console.log(err.stack);
    }
    console.log(result);
  });
});

connection.end();
