import './styles/stocksList.css';

export const StocksList = (props) => {
    return (
        <div class="stocks-div">
            <main class="stocks-main">
                <div class="stocks-names">
                    <header class="stocks-names-header">
                        Name
                    </header>
                    <ul class="stocks-names-list">
                        <li>
                            <a>Google</a>
                        </li>
                    </ul>
                </div>
                <div class="stocks-data">
                    <header class="stocks-data-header">

                    </header>
                    <ul>

                    </ul>
                </div>
            </main>
        </div>
    );
};