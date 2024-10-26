import { Component, h, State, Element } from "@stencil/core";
import { AV_API_KEY } from "../global/global";

@Component({
  tag: "air-stock-price",
  styleUrl: "./stock-price.css",
  shadow: true,
})
export class StockPrice {
  stockInput: HTMLInputElement;
  @Element() el: HTMLElement;
  @State() fetchedPrice: number;
  @State() StockUserInput: string;
  @State() stockInputValid = false;

  onUserInput(event: Event) {
    this.StockUserInput = (event.target as HTMLInputElement).value;
    if (this.StockUserInput.trim() !== "") {
      this.stockInputValid = true;
    } else {
      this.stockInputValid = false;
    }
  }
  onFetchStockPrice(event: Event) {
    event.preventDefault();

    const stockSymbol = this.stockInput.value;

    // 使用 API 密钥正确地拼接 URL
    fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((parsedRes) => {
        const price = parsedRes["Global Quote"]?.["05. price"];
        if (price) {
          this.fetchedPrice = parseFloat(price);
        } else {
          console.error("Price data not found in response", parsedRes);
          this.fetchedPrice = NaN;
        }
      })
      .catch((err) => {
        console.log("Fetch error:", err);
      });
  }

  render() {
    return [
      <form onSubmit={this.onFetchStockPrice.bind(this)}>
        <input
          id="stock-symbol"
          ref={(el) => (this.stockInput = el)}
          value={this.StockUserInput}
          onInput={this.onUserInput.bind(this)}
        />
        <button type="submit" disabled={!this.stockInputValid}>
          Fetch
        </button>
      </form>,
      <div>
        <p>
          Price:{" "}
          {this.fetchedPrice ? `$${this.fetchedPrice.toFixed(2)}` : "N/A"}
        </p>
      </div>,
    ];
  }
}
