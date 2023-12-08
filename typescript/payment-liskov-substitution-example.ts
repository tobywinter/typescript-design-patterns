interface PaymentMethod {
  processPayment(amount: number): string;
}

class CreditCard implements PaymentMethod {
  processPayment(amount: number): string {
    return "Credit Payment of " + amount + " processed.";
  }
}

class DebitCard implements PaymentMethod {
  processPayment(amount: number): string {
    return "Debit Payment of " + amount + " processed.";
  }
}

class Paypal implements PaymentMethod {
  processPayment(amount: number): string {
    return "Paypal Payment of " + amount + " processed.";
  }
}

class PaymentProcessor {
  paymentMethod: PaymentMethod;

  constructor(paymentMethod: PaymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  processPayment(amount: number): string {
    return this.paymentMethod.processPayment(amount);
  }
}
