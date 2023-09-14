describe("Utilities test (with setup and tear-down", function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
  });

  it("should return the total of 'tipAmt'", function () {
    expect(sumPaymentTotal("tipAmt")).toEqual(20);

    billAmtInput.value = 150;
    tipAmtInput.value = 30;
    submitPaymentInfo();

    expect(sumPaymentTotal("tipAmt")).toEqual(50);
  });

  it("should return the total of 'billAmt'", function () {
    expect(sumPaymentTotal("billAmt")).toEqual(100);

    billAmtInput.value = 150;
    tipAmtInput.value = 30;
    submitPaymentInfo();

    expect(sumPaymentTotal("billAmt")).toEqual(250);
  });

  it("should return the total of 'tipPercent'", function () {
    expect(sumPaymentTotal("tipPercent")).toEqual(20);

    billAmtInput.value = 250;
    tipAmtInput.value = 50;
    submitPaymentInfo();

    expect(sumPaymentTotal("tipPercent")).toEqual(70);
  });

  it("should return the percentage of the tip against a bill amount", function () {
    expect(calculateTipPercent(100, 20)).toEqual(20);
    expect(calculateTipPercent(80, 16)).toEqual(20);
  });

  afterEach(function () {
    billAmtInput.value = "";
    tipAmtInput.value = "";
  });
});
