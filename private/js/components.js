const uis = [
  {
    id: "dashboard",
    data: `      <section class="dashboard">
        <section>
          <div class="wallet">
            <b>Balance</b>
            <h1 class="balance">$ 40,000</h1>
            <div class="action-btn">
              <button><i class="fas fa-arrow-down"></i> Fund</button
              ><button><i class="fas fa-arrow-up"></i> Withdraw</button
              ><button><i class="fas fa-arrow-trend-up"></i> Trade</button>
            </div>
          </div>
          <div class="summary-con">
            <div class="summary">
              <i class="fas fa-arrow-trend-up"></i>
              <div>
                <p class="percent-profit">+ 39.21%</p>
                <p>Profit in the last 1 week</p>
              </div>
            </div>
            <div class="summary">
              <i class="fas fa-arrow-trend-down"></i>
              <div>
                <p class="percent-loss">- 5.21%</p>
                <p>Loss in the last 1 week</p>
              </div>
            </div>
          </div>
          <h2>Transaction History</h2>
          <ul class="trans-history">
            <li>
              <div class="wrap">
                <i class="fas fa-arrow-down"></i>
                <div><b>+ 2,000</b><small>Credit</small></div>
              </div>
              <p>13/10/2023</p>
            </li>
            <li>
              <div class="wrap">
                <i class="fas fa-arrow-up"></i>
                <div><b>- 50,000</b><small>Withdrawal</small></div>
              </div>
              <p>13/10/2023</p>
            </li>
          </ul>
        </section>
        <section class="left-section">
          <h2>Current Market</h2>
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
          <canvas id="chart" class="chart"></canvas>
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
      </section>`,
  },
  {
    id: "market",
    data: `<section class="market">
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
      </section>`,
  },
  {
    id: "trade",
    data: `      <section class="trade">
        <section>
          <div class="wallet">
            <b>Balance</b>
            <h1 class="balance">$ 40,000</h1>
            <div class="action-btn">
              <button><i class="fas fa-arrow-down"></i> Fund</button
              ><button><i class="fas fa-arrow-up"></i> Withdraw</button
              ><button><i class="fas fa-arrow-trend-up"></i> Trade</button>
            </div>
          </div>
          <div class="summary-con">
            <div class="summary">
              <i class="fas fa-arrow-trend-up"></i>
              <div>
                <p class="percent-profit">+ 39.21%</p>
                <p>Profit in the last 1 week</p>
              </div>
            </div>
            <div class="summary">
              <i class="fas fa-arrow-trend-down"></i>
              <div>
                <p class="percent-loss">- 5.21%</p>
                <p>Loss in the last 1 week</p>
              </div>
            </div>
          </div>
          <h2>Transaction History</h2>
          <ul class="trans-history">
            <li>
              <div class="wrap">
                <i class="fas fa-arrow-down"></i>
                <div><b>+ 2,000</b><small>Credit</small></div>
              </div>
              <p>13/10/2023</p>
            </li>
            <li>
              <div class="wrap">
                <i class="fas fa-arrow-up"></i>
                <div><b>- 50,000</b><small>Withdrawal</small></div>
              </div>
              <p>13/10/2023</p>
            </li>
          </ul>
        </section>
        <section class="order-book-and-market-pair">
          <h2>Market Pair</h2>
          <div class="market-pair-con">
            <div class="buy-con">
              <b>Buy</b>
              <div class="coin-wrap">
                <img src="/private/images/usdt-token.png" alt="" />
                <div>
                  <small>Current Price</small>
                  <p>N 807.00</p>
                </div>
              </div>
              <div class="coin-wrap">
                <img src="/private/images/usdc-coin.png" alt="" />
                <div>
                  <small>Current Price</small>
                  <p>N 807.00</p>
                </div>
              </div>
            </div>
            <div class="sell-con">
              <b>Sell</b>
              <div class="coin-wrap">
                <img src="/private/images/usdt-token.png" alt="" />
                <div class="pair-wrap">
                  <small>Current Price</small>
                  <div class="divider">
                    <p>N 807.00</p>
                    <div>
                      <small>Fees: <span class="fee">30%</span></small>
                    </div>
                  </div>
                </div>
              </div>
              <div class="coin-wrap">
                <img src="/private/images/usdc-coin.png" alt="" />
                <div class="pair-wrap">
                  <small>Current Price</small>
                  <div class="divider">
                    <p>N 807.00</p>
                    <small>Fees: <span class="fee">30%</span></small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2>Order Book</h2>
          <ul class="order-book-list">
            <li>
              <div><img src="/private/images/usdt-token.png" alt="" /></div>
              <div class="order-wrap">
                <div class="top-divider">
                  <small>Current Price</small
                  ><i class="fas fa-ellipsis-vertical"></i>
                </div>
                <div class="middle-divider">
                  <p>N 807.00</p>
                  <div>
                    <span class="date">17/10/2023</span>
                    <span class="time">19:08 PM</span>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
      </section>`,
  },
];
