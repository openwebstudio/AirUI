import { Component, h, State, Element, Prop, Watch } from "@stencil/core";
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
  @State() error: string;

  @Prop({mutable:true,reflect:true}) stockSymbol: string;

  @Watch('stockSymbol')
  stockSymbolChanged(newValue: string,oldValue: string) {
    if(newValue!==oldValue) {
        this.StockUserInput = newValue;
        this.fetchStockPrice(newValue);
    }
  }

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
    this.stockSymbol = this.stockInput.value;
  }

  componentDidLoad() {
    if (this.stockSymbol) {
      this.StockUserInput = this.stockSymbol;
      this.stockInputValid = true;
      this.fetchStockPrice(this.stockSymbol);
    }
  }

  fetchStockPrice(stockSymbol: string) {
    fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`
    )
      .then((res) => {
        if (res.status !== 200) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((parsedRes) => {
        const price = parsedRes["Global Quote"]?.["05. price"];
        if (price) {
          this.fetchedPrice = parseFloat(price);
        } else {
          this.error = null;
          throw new Error("Invalid Symbol");
        }
      })
      .catch((err) => {
        this.error = err.message;
        this.fetchedPrice = undefined;
        console.error("Fetch failed:", err);
      });
  }
  render() {
    let dataContent = <p>Please enter a symbol</p>;
    if (this.error) {
      dataContent = <p>{this.error}</p>;
    }
    if (this.fetchedPrice) {
      dataContent = <p>Price:${this.fetchedPrice}</p>;
    }
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
        <p>{dataContent}</p>
      </div>,
    ];
  }
}
