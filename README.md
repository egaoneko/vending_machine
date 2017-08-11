# Vending Machine

## Installation

```bash
npm install
npm run dev
```

## Test

```bash
npm run test
```

## Composition

### Model

* VendingMachine : 자판기 Model
    * Product : 상품 Model
        * Id : 구분값
        * Name : 이름
        * Price : 가격 (100~800)
        * Stock : 재고 (1~3)
    * MoneyBox : 돈통 Model
        * TotalAmount : 투입된 금액 (Max 3000)
        * MoneyTypeSizeMap : 투입된 금액 종류 수 (Max Bill 2)
* Wallet : 지갑 Model
    * TotalAmount : 보유 금액 (10000)
* Money : 금액 Model (50, 100, 500, 1000)
    * Type : 금액 종류 (Coin, Bill)
    * Amount : 금액

### Controller

* ProductDisplay : 상품전시 Controller
* MoneyInsertion : 금전투입 Controller
* Console : 콘솔 Controller

### View

* ProductDisplay : 상품전시 View
* MoneyInsertion : 금전투입 View
* Console : 콘솔 View

