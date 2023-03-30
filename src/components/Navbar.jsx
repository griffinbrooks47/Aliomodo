import './styles/navbar-top.css';

export const Navbar = () => {
    return (
        <nav class="navbar-top">
            <div class="nav-top-left">
                <div class="logo-div">
                    <p class="co-name">Aliomodo</p>
                </div>
                <ul class="nav-top-buttons">
                    <li><a>Buy</a></li>
                    <li><a>Sell</a></li>
                    <li><a>Trade</a></li>
                </ul>
            </div>
            <div class="nav-top-right">
                <ul class="nav-top-buttons">
                    <li><a>Portfolio</a></li>
                    <li><a>Account</a></li>
                </ul>
            </div>
        </nav>
    );
};