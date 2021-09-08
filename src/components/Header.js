/*
  !global Header component....
*/

import "./Header.css";

function Header() {
  return (
    <header className="global-header">
      <div>
        <a href="/"><i class="fas fa-home"></i></a>
      </div>
      <div>
        <a
          href="https://github.com/soft-rahul"
          rel="noreferrer"
          target="_blank"
        >
        <i class="fab fa-github"></i>
        </a>
      </div>
    </header>
  );
}

export default Header;
