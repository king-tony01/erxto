/**
 * This function return the dashboard UI with the user's data and the necessary dasboard data
 * @param {object} Object
 * @returns
 */

export function dashboard(data) {
  return `<section class="dashboard">
        <section>
          <div class="wallet">
            <b>Balance</b>
            <h1 class="balance">$ 40,000</h1>
            <div class="action-btn">
              <button data-btn="fund" class="dashboard-btn"><i class="fas fa-arrow-down"></i> Fund</button
              ><button data-btn="withdraw" class="dashboard-btn"><i class="fas fa-arrow-up"></i> Withdraw</button
              ><button data-btn="trade" class="dashboard-btn"><i class="fas fa-arrow-trend-up"></i> Trade</button>
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
      </section>`;
}
