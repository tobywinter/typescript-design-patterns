// customer intergface

interface Customer {
  giveDiscount(): number;
  addLoyaltyPoints(amountSpent: number): number;
}

class RegularCustomer implements Customer {
  giveDiscount(): number {
    return 10;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent;
  }
}
class PremiumCustomer implements Customer {
  giveDiscount(): number {
    return 20;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent * 2;
  }
}
class GoldCustomer implements Customer {
  giveDiscount(): number {
    return 30;
  }
  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent * 3;
  }
}

class Discount {
  constructor(public customer: Customer) {
    this.customer = customer;
  }
  giveDiscount(): number {
    return this.customer.giveDiscount();
  }
}
