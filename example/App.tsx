import * as ExpoPay from "expo-pay";
import { Button, View } from "react-native";

export default function App() {
  const pay = async () => {
    const examplePaymentMethodData = {
      merchantIdentifier: "merchant.expo.modules.marcinkornek.pay.example",
      supportedNetworks: ["visa", "mastercard", "amex"],
      countryCode: "US",
      currencyCode: "USD",
    };

    const examplePaymentDetails = {
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

    try {
      const result = await ExpoPay.pay(
        examplePaymentMethodData,
        examplePaymentDetails
      );
      console.log("result", result);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Pay" onPress={pay} />
    </View>
  );
}
