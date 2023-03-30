import './styles/navbar-bottom.css';

export const SubNavBar = () => {
    return (
        <nav class="navbar-bottom">
            <div class="nav-bottom-middle">
                <a class="search-button"></a>
                <input type="text" class="searchbar"/>
                <a>Sort By</a>
            </div>
        </nav>
    );
};
/**
<div class="nav-bottom-left">
    <ul class="nav-bottom-buttons">
        <li><a>All</a></li>
        <li><a>Stocks</a></li>
        <li><a>Futures</a></li>
        <li><a>ETF</a></li>
        <li><a>Commodities</a></li>
        <li><a>Index</a></li>
        <li><a>Currency</a></li>
    </ul>
</div>
<div class="nav-bottom-right">
    <ul class="nav-bottom-buttons">
        <li><a>Trending</a></li>
        <li><a>Change</a></li>
        <li><a>Price</a></li>
    </ul>
</div>
 */