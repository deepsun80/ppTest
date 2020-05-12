export const CLEAR_LOAN = "CLEAR_LOAN";
export const SET_LOAN_MERCHANT = "SET_LOAN_MERCHANT";
export const SET_LOAN_PERSONAL = "SET_LOAN_PERSONAL";
export const SET_LOAN_ADDRESS = "SET_LOAN_ADDRESS";
export const SET_LOAN_EMPLOYMENT = "SET_LOAN_EMPLOYMENT";
export const SET_LOAN_AMOUNT = "SET_LOAN_AMOUNT";
export const SET_LOAN_PURPOSE = "SET_LOAN_PURPOSE";
export const SET_LOAN_PRODUCT = "SET_LOAN_PRODUCT";
export const SET_LOAN_INCOME = "SET_LOAN_INCOME";
export const SET_LOAN_CREDIT = "SET_LOAN_CREDIT";
export const SET_LOAN_LEGAL = "SET_LOAN_LEGAL";
export const SET_LOAN_USER_INFO = "SET_LOAN_USER_INFO";

export const clearLoan = () => ({
  type: CLEAR_LOAN
});

export const setLoanMerchant = info => ({
  type: SET_LOAN_MERCHANT,
  payload: info
});

export const setLoanPersonal = info => ({
  type: SET_LOAN_PERSONAL,
  payload: info
});

export const setLoanProduct = info => ({
  type: SET_LOAN_PRODUCT,
  payload: info
});

export const setLoanAddress = info => ({
  type: SET_LOAN_ADDRESS,
  payload: info
});

export const setLoanEmployment = info => ({
  type: SET_LOAN_EMPLOYMENT,
  payload: info
});

export const setLoanAmount = info => ({
  type: SET_LOAN_AMOUNT,
  payload: info
});

export const setLoanPurpose = info => ({
  type: SET_LOAN_PURPOSE,
  payload: info
});

export const setLoanIncome = info => ({
  type: SET_LOAN_INCOME,
  payload: info
});

export const setLoanCredit = info => ({
  type: SET_LOAN_CREDIT,
  payload: info
});

export const setLoanLegal = info => ({
  type: SET_LOAN_LEGAL,
  payload: info
});

export const setLoanUserInfo = info => ({
  type: SET_LOAN_USER_INFO,
  payload: info
});
