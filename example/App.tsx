import * as ExpoPay from "expo-pay";
import { Button, View } from "react-native";

export default function App() {
  const pay = async () => {
    const paymentMethodData = {
      merchantIdentifier: "merchant.expo.modules.marcinkornek.pay.example",
      supportedNetworks: ["visa", "mastercard", "amex"],
      countryCode: "US",
      currencyCode: "USD",
    };

    const paymentDetails = {
      id: "basic-example",
      displayItems: [
        {
          label: "Movie Ticket",
          amount: "10.00",
        },
        {
          label: "Popcorn",
          amount: "5.00",
        },
      ],
      total: {
        label: "Total",
        amount: "15.00",
      },
    };

    const result = await ExpoPay.pay(paymentMethodData, paymentDetails);

    console.log("result", result);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pay" onPress={pay} />
    </View>
  );
}
