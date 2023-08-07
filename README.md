## expo-app-info

Native module created using [Expo Modules](https://docs.expo.dev/modules/overview/).

## This simple module exposes [Apple Pay](https://developer.apple.com/documentation/passkit/apple_pay/setting_up_apple_pay) popup with method:
* pay(methodData: PaymentMethodDataType, details: PaymentDetailsType)

### Parameters:
* Payment Method Data - object with the following properties: 
  * [merchantIdentifier](https://developer.apple.com/documentation/passkit/apple_pay/setting_up_apple_pay#3735191) - example: 'merchant.com.your-app.namespace',
  * supportedNetworks: eg. ['visa', 'mastercard', 'amex'],
  * countryCode: eg. 'US',
  * currencyCode: eg. 'USD'

* Payment Details - object with the following properties: 
  * id - identifier of the payment,
  * displayItems - array of objects with the following properties:
    * label - name of the item,
    * amount - price of the item,
  * total - object with the following properties:
    * label - name of the total,
    * amount - price of the total,

### Running the example app:
* Install dependencies:
```bash
$ yarn
```

* Navigate to the example folder:
```bash
$ cd example
```

* Run the app on iOS:
``` bash
$ npx expo run:ios
```

* Run the app on Android:
``` bash
$ npx expo run:android
```

### Debugging
Navigate to the module directory and then open the Android and/or iOS example project by running the following commands:
```bash
$ npm run open:android # opens Android Studiu
$ npm run open:ios # opens Xcode
```
