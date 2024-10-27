export const highlightEconomicStations = (gasStations:any) => {
    const prices: number[] = gasStations.map(((feature: any) => feature.properties.price))
        .filter((price: number) => price > 0);
    const min_price = Math.min(...prices)

    const enhancedGasStations = gasStations.map((feature : any) => {
        feature.highlight = feature.properties.price == min_price;
        return feature
    });

    return enhancedGasStations
};
