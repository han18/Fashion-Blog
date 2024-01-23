import { ALink } from "../../styled";

function Nav() {
  return (
    <div>
      <nav>
        <ALink>
          <li>
            {" "}
            <a href="">Women's</a>
          </li>
          <li>
            {" "}
            <a href="">Men's</a>
          </li>
          <li>
            {" "}
            <a href="">On the Street</a>
          </li>
          <li>
            {" "}
            <a href="">The Catwalk</a>
          </li>
          <li>
            {" "}
            <a href="">AdWatch</a>
          </li>
          <li>
            {" "}
            <a href="">About</a>
          </li>
        </ALink>
      </nav>
    </div>
  );
}

export default Nav;
