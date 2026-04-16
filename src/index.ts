console.log("Webpack works with TypeScript!");

import "@fontsource/oswald/400.css";
import "@fontsource/oswald/500.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import "./css/style.css";
import "./css/example.less";

// TypeScript example
interface User {
  name: string;
  age: number;
}

const createUser = (name: string, age: number): User => {
  return { name, age };
};

const user: User = createUser("John", 30);
console.log("Created user:", user);
