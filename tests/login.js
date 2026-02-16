import http from "k6/http";
import { check } from "k6";

export default function login() {
  const res = http.get("https://test.k6.io");

  check(res, {
    "login status 200": (r) => r.status === 200,
  });
}

