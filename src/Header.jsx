import { Logout } from "./Logout";

export function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a> |{" "}
      {localStorage.jwt === undefined ? (
        <>
          <a href="#signup">SignUp</a> |<a href="#login">Login</a>
        </>
      ) : (
        <a href="#logout">Logout</a>
      )}
    </header>
  );
}
