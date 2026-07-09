export const sampleData = {
  "1M": [
    { value: 4900 },
    { value: 4980 },
    { value: 5100 },
    { value: 5200 },
  ],
  "3M": [
    { value: 4600 },
    { value: 4650 },
    { value: 4580 },
    { value: 4720 },
    { value: 4680 },
    { value: 4750 },
    { value: 4820 },
    { value: 4780 },
    { value: 4900 },
    { value: 4950 },
    { value: 5050 },
    { value: 5200 },
  ],
  "6M": [
    { value: 4200 },
    { value: 4350 },
    { value: 4280 },
    { value: 4450 },
    { value: 4900 },
    { value: 5200 },
  ],
  "12M": [
    { value: 3800 },
    { value: 3950 },
    { value: 4100 },
    { value: 4050 },
    { value: 4200 },
    { value: 4350 },
    { value: 4280 },
    { value: 4450 },
    { value: 4600 },
    { value: 4750 },
    { value: 4900 },
    { value: 5200 },
  ],
};

export type PeriodRange = keyof typeof sampleData;

export const periodRanges = Object.keys(sampleData) as PeriodRange[];
