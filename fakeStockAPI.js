function getStockData() {
  return {
    name: "FahadITEachAI",
    sym: "FTAI",
    price: (Math.random() * 3).toFixed(2),
    time: new Date().toLocaleDateString(),
  };
}
