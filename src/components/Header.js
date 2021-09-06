
/*
  !global Header component....
*/


import './Header.css';



function Header() {
    return (
        <header className="global-header" >
            <div>
                <a href="/">Home</a>
            </div>
            <div>
               <a href="https://github.com/soft-rahul" rel="noreferrer" target='_blank'>
                   GitHub
               </a>
            </div>
        </header>
    );
}


export default Header;