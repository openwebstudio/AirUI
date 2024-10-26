import { Component, h, State, Event, EventEmitter } from "@stencil/core";
import { AV_API_KEY } from "../global/global";

@Component({
  tag: "air-stock-finder",
  styleUrl: "./stock-finder.css",
  shadow: true,
})
export class StockFinder {
  stockNameInput: HTMLInputElement;

  @State() searchResult: { symbol: string; name: string }[] = [];

  @Event({ bubbles: true, composed: true })
  airSymbolSelected: EventEmitter<string>;

  onFindStocks(event: Event) {
    event.preventDefault();
    const stockName = this.stockNameInput.value;
    fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${stockName}&apikey=${AV_API_KEY}`
    )
      .then((res) => res.json())
      .then((parsedRes) => {
        this.searchResult = parsedRes["bestMatches"].map((match) => {
          return { name: match["2. name"], symbol: match["1. symbol"] };
        });
        console.log(this.searchResult);
      })
      .catch((err) => {
        console.error("Error fetching stock data", err);
      });
  }

  onSelectSymbol(symbol: string) {
    this.airSymbolSelected.emit(symbol);
  }

  render() {
    return [
      <form onSubmit={this.onFindStocks.bind(this)}>
        <input
          id="stock-symbol"
          ref={(el) => (this.stockNameInput = el)}
        ></input>
        <button type="submit">find!</button>
      </form>,
      <ul>
        {this.searchResult.map((result) => (
          <li onClick={this.onSelectSymbol.bind(this,result.symbol)}>
            <strong> - {result.name}</strong>
          </li>
        ))}
      </ul>,
    ];
  }
}
