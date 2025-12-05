import { getStockData } from "./fakeStockAPI.js";

setInterval(function () {
  const stockData = getStockData();
  renderStockTicket(stockData);
}, 1500);

let prevPrice = null;

function renderStockTicket(stockData) {
  const stockDisplayName = document.getElementById("stock-name");
  const stockDisplaySymbol = document.getElementById("stock-symbol");
  const stockDisplayPrice = document.getElementById("stock-price");
  const stockDisplayTime = document.getElementById("stock-time");

  const { name, sym, price, time } = stockData;

  const priceDirectionIcon =
    price > prevPrice ? "🔺" : price < prevPrice ? "🔻" : "🔹";

  stockDisplayName.innerText = name;
  stockDisplaySymbol.innerText = sym;
  stockDisplayPrice.innerText = price + " " + priceDirectionIcon;
  stockDisplayTime.innerText = time;

  prevPrice = price;
}
