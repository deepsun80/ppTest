import * as actions from "../actions";

const initState = {
  purpose: "",
  credit_score: "",
  agree: true,
  personal: {},
  address: {},
  employment: {},
  income: {},
  verify_email: true
};

export default (loanInfo = initState, action) => {
  switch (action.type) {
    case actions.CLEAR_LOAN:
      return { ...initState };
    case actions.SET_LOAN_MERCHANT:
      return { ...loanInfo, merchant: action.payload };
    case actions.SET_LOAN_PERSONAL:
      loanInfo.personal = action.payload;
      return { ...loanInfo };
    case actions.SET_LOAN_PRODUCT:
      loanInfo.product = action.payload;
      return { ...loanInfo };
    case actions.SET_LOAN_ADDRESS:
      loanInfo.address = action.payload;
      return { ...loanInfo };
    case actions.SET_LOAN_EMPLOYMENT:
      loanInfo.employment = action.payload;
      return { ...loanInfo };
    case actions.SET_LOAN_AMOUNT:
      loanInfo.amount = action.payload;
      return { ...loanInfo };
    case actions.SET_LOAN_PURPOSE:
      loanInfo.purpose = action.payload;
      return { ...loanInfo };
    case actions.SET_LOAN_INCOME:
      loanInfo.income = action.payload;
      return { ...loanInfo };
    case actions.SET_LOAN_CREDIT:
      loanInfo.credit_score = action.payload;
      return { ...loanInfo };
    case actions.SET_LOAN_LEGAL:
      loanInfo.agree = action.payload;
      return { ...loanInfo };
    default:
      return loanInfo;
  }
};
