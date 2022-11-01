
it('should calculate the monthly rate correctly', function () {
  const values = { principal: 100000, years: 10, rate: 4 }
  expect(calculateMonthlyPayment(values)).toBe('1012.45');
});


it("should return a result with 2 decimal places", function () {
  // ..
});

/// etc
