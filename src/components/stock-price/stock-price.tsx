import {
    Component,
    h,
    State,
    Element,
    Prop,
    Watch,
    Listen,
  } from "@stencil/core";
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
  
    @Prop({ mutable: true, reflect: true }) stockSymbol: string;
  
    @Watch("stockSymbol")
    stockSymbolChanged(newValue: string, oldValue: string) {
      if (newValue !== oldValue) {
        this.StockUserInput = newValue;
        this.stockInputValid = true;
        this.fetchStockPrice(newValue);
      }
    }
  
    componentWillLoad() {
      if (this.stockSymbol) {
        this.StockUserInput = this.stockSymbol;
        this.stockInputValid = true;
        this.fetchStockPrice(this.stockSymbol);
      }
    }
  
    onUserInput(event: Event) {
      this.StockUserInput = (event.target as HTMLInputElement).value;
      this.stockInputValid = this.StockUserInput.trim() !== "";
    }
  
    onFetchStockPrice(event: Event) {
      event.preventDefault();
      this.stockSymbol = this.stockInput.value;
    }
  
    @Listen("airSymbolSelected", { target: "body" })
    onStockSymbolSelected(event: CustomEvent) {
      if (event.detail && event.detail !== this.stockSymbol) {
        this.stockSymbol = event.detail;
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
          const price = parsedRes["Global Quote"]["05. price"];
          if (!price) {
            throw new Error("Invalid symbol!");
          }
          this.error = null;
          this.fetchedPrice = +price;
        })
        .catch((err) => {
          this.error = err.message;
        });
    }
  
    render() {
      let dataContent = <p>Please enter a symbol</p>;
      if (this.error) {
        dataContent = <p>{this.error}</p>;
      } else if (this.fetchedPrice) {
        dataContent = <p>Price: ${this.fetchedPrice}</p>;
      }
      return [
        <form onSubmit={(e) => this.onFetchStockPrice(e)}>
          <input
            id="stock-symbol"
            ref={(el) => (this.stockInput = el)}
            value={this.StockUserInput}
            onInput={(e) => this.onUserInput(e)}
          />
          <button type="submit" disabled={!this.stockInputValid}>
            Fetch
          </button>
        </form>,
        <div>{dataContent}</div>,
      ];
    }
  }
  