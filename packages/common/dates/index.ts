export type DateInterval = '7D' | '15D' | '30D' | '6M';

export const IntervalsToDate: { [key in DateInterval]: number } = {
  '7D': 7,
  '15D': 15,
  '30D': 30,
  '6M': 182,
};
