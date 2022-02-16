import "./index.css";

import Img from "./warning.png";
import hello from "./hello";
hello();

console.log("Img: ", Img);

class Author {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  info = () => {
    return {
      name: this.name,
      age: this.age,
      email: this.email,
    };
  };
}

const author1 = new Author("任均阳", 21, "renjunyang@qq.com");
console.log("author1: ", author1.info());
