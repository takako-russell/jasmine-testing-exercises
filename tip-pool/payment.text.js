describe("payment function text"),
  function () {
    beforeEach(function () {
      billAmtInput.value = 100;
      tipAmtInput.value = 20;
    });

    it("should add a new payment obj to allPayments", function () {
      submitPaymentInfo();

      expect(Object.keys(allPayments).length).toEqual(1);
      expect(allPayments["payment1"].billAmt).toEqual("100");
      expect(allPayments["payment1"].tipAmt).toEqual("20");
      expect(allPayments["payment1".tipPercent]).toEqual("20");
    });
    it("should not add any info if  the input fields are empty", function () {
      billAmtInput.value = "";
      submitPaymentInfo();

      expect(Object.keys(allPayments).length).toEqual(0);
    });

    it("should create a new payment obj", function () {
      let Payment = {
        billAmt: "100",
        tipAmt: "20",
        tipPercent: 20,
      };

      expect(createCurPayment()).toEqual(Payment);
    });

    afterEach(function () {
      billAmtInput.value = "";
      tipAmtInput.value = "";
    });
  };
