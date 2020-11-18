import { HeaderData } from "sharedTypes";

export const createHeaderDataObject = (res: any): HeaderData => ({
  balance: res.balance,
  nextPayout: res.next_payout,
  currency: res.currency,
});
