import ExpoModulesCore
import PassKit

struct PaymentMethodData: Record {
    @Field
    var merchantIdentifier: String
    
    @Field
    var countryCode: String
    
    @Field
    var currencyCode: String
}

struct DisplayItem: Record {
    @Field
    var label: String
    
    @Field
    var amount: String
}

struct PaymentDetails: Record {
    @Field
    var id: String
    
    @Field
    var displayItems: [DisplayItem]
    
    @Field
    var total: DisplayItem
}

public class ExpoPayModule: Module {
    public func definition() -> ModuleDefinition {
        Name("ExpoPay")
        
        AsyncFunction("pay") { (
            paymentMethodData: PaymentMethodData,
            paymentDetails: PaymentDetails,
            promise: Promise
        ) -> Void in
            payPromise = promise
            pay(paymentMethodData: paymentMethodData, paymentDetails: paymentDetails)
        }
    }
    
    private var expoPayDelegate = ExpoPayDelegate()
    private func handleDismissPay() {
        if let payPromise {
            payPromise.resolve("dismissed")
        }
    }
    private var payPromise: Promise? = nil
    
    private func pay(
        paymentMethodData: PaymentMethodData,
        paymentDetails: PaymentDetails
    ) {
        let supportedNetworks: [PKPaymentNetwork] = [
            .amex,
            .discover,
            .masterCard,
            .visa
        ]
        
        var paymentSummaryItems: [PKPaymentSummaryItem] = []
        for item in paymentDetails.displayItems {
            paymentSummaryItems.append(PKPaymentSummaryItem(label: item.label, amount: NSDecimalNumber(string: item.amount), type: .final))
        }
        let total = PKPaymentSummaryItem(label: paymentDetails.total.label, amount: NSDecimalNumber(string: paymentDetails.total.amount), type: .final)
        paymentSummaryItems.append(total)
        
        let paymentRequest = PKPaymentRequest()
        paymentRequest.paymentSummaryItems = paymentSummaryItems
        paymentRequest.merchantIdentifier = paymentMethodData.merchantIdentifier
        paymentRequest.merchantCapabilities = .capability3DS
        paymentRequest.countryCode = paymentMethodData.countryCode
        paymentRequest.currencyCode = paymentMethodData.currencyCode
        paymentRequest.supportedNetworks = supportedNetworks
        // paymentRequest.shippingType = .
        // paymentRequest.shippingMethods = shippingMethodCalculator()
        // paymentRequest.requiredShippingContactFields = [.name, .postalAddress]
        
        let applePayController = PKPaymentAuthorizationController(paymentRequest: paymentRequest)
        applePayController.delegate = expoPayDelegate
        expoPayDelegate.onDismiss = {
            self.handleDismissPay()
        }
        applePayController.present(completion: { isCompleted in
            print(isCompleted)
        })
    }
}

class ExpoPayDelegate: NSObject, PKPaymentAuthorizationControllerDelegate {
    public var onDismiss: (() -> Void)? = nil
    
    func paymentAuthorizationControllerDidFinish(_ controller: PKPaymentAuthorizationController) {
        controller.dismiss {
            if let onDismiss = self.onDismiss {
                onDismiss()
            }
        }
    }
}
