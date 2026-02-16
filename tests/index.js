import { group } from "k6";
import login from "./login.js";
import { getUsers } from "./users.js";

export function smokeFlow() {
  group("SMOKE - Login", () => {
    login(); 
  });

  group("SMOKE - Users", () => {
    getUsers(); 
  });
}

