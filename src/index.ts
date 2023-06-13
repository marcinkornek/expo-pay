import ExpoPayModule from "./ExpoPayModule";

interface DisplayItemType {
  label: string;
  amount: string;
}

export interface PaymentMethodDataType {
  merchantIdentifier?: string;
  supportedNetworks: string[];
  countryCode: string;
  currencyCode: string;
}

export interface PaymentDetailsType {
  id: string;
  displayItems?: DisplayItemType[];
  total: DisplayItemType;
}

export const pay = (
  methodData: PaymentMethodDataType,
  details: PaymentDetailsType
) => {
  return ExpoPayModule.pay(methodData, details);
};
