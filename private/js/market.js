/**
 * The parameter MarketData is an object or array that need to be passed to the function, the function then dynamically processes the data and returns the market page
 * @param {MarketData} Object
 * @returns
 */

export function market(data) {
  return `<section class="market">
        <section class="left-section">
          <canvas id="chart" class="chart"></canvas>
          <div class="wrap">
            <div>
              <small>USDT/NGN</small>
              <b>1 USDT = 807 NGN</b>
            </div>
            <div>
              <p class="market-price-percent">
                <i class="fas fa-arrow-down"></i>- 3.6 %
              </p>
              <p>Last 24Hrs</p>
            </div>
          </div>
          <h2>Price in the last 24Hrs</h2>
          <ul class="price-list">
            <li>
              <div><b>N 807</b><span> = $1 </span></div>
              <div>
                <p class="increase"><i class="fas fa-arrow-down"></i>- 0.4 %</p>
                <p>22:00 PM</p>
              </div>
            </li>
          </ul>
        </section>
        <section class="market-news">
          <h2>Market News</h2>
          <ul class="market-news-list">
            <li>
              <div class="image">
                <img src="/private/images/tether-2.jpeg" alt="" />
              </div>
              <div class="market-info">
                <strong
                  >USDT Continues to Dominate Stablecoin Market, with Over 70%
                  Share, Despite Regulatory Scrutiny</strong
                >
                <div class="bottom">
                  <a class="source" href="">CryptoNews.com</a
                  ><span class="time">October 16, 2023</span>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </section>`;
}
