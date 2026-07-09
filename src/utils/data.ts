export const sampleData = {
  "1M": [
    { value: 5050 },
    { value: 4780 },
    { value: 7120 },
    { value: 5200 },
  ],
  "3M": [
    { value: 4600 },
    { value: 4820 },
    { value: 4480 },
    { value: 4710 },
    { value: 5980 },
    { value: 4650 },
    { value: 4890 },
    { value: 5150 },
    { value: 4920 },
    { value: 5080 },
    { value: 4990 },
    { value: 5200 },
  ],
  "6M": [
    { value: 4200 },
    { value: 4620 },
    { value: 4050 },
    { value: 4380 },
    { value: 5080 },
    { value: 5200 },
  ],
  "12M": [
    { value: 3800 },
    { value: 4120 },
    { value: 4450 },
    { value: 4180 },
    { value: 3920 },
    { value: 4280 },
    { value: 4680 },
    { value: 4350 },
    { value: 4720 },
    { value: 5020 },
    { value: 4810 },
    { value: 5200 },
  ],
};

export type PeriodRange = keyof typeof sampleData;

export const periodRanges = Object.keys(sampleData) as PeriodRange[];
