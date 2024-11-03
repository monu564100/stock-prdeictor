export const fetchPredictions = async (stockSymbol) => {
    const predictions = [];
    const today = new Date();
    for (let i = 1; i <= 7; i++) {
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + i);
        const dateString = futureDate.toISOString().split('T')[0];
        predictions.push({
            date: dateString,
            predictedPrice: Math.random() * 100 + 100, 
        });
    }
    return predictions;
};
