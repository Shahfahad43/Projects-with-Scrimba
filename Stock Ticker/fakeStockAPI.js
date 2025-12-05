export function getStockData() {
  return {
    name: "QTechAI",
    sym: "QTAI",
    price: (Math.random() * 3).toFixed(2),
    time: new Date().toLocaleDateString(),
  };
}
