import http from "k6/http";
import { check } from "k6";

export function getUsers() {
  const res = http.get("https://test.k6.io/contacts.php");

  check(res, {
    "users status 200": (r) => r.status === 200,
  });
}
