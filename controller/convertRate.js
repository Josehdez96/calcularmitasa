const interestRate = 0.02;
const kindRate = 'MV'; // Dependiendo del tipo de tasa se corre una u otra función

//Convierte de EA a MV
const convertAnnualEfectiveRate = (rate) => {
  const convertedRate = ((1 + rate) ** (30 / 360) - 1) * 100;
  const monthlyRate = `${convertedRate.toFixed(5)}%`;
  //console.log(monthlyRate);
  return monthlyRate;
};

//Convierte de MV a EA
const convertMonthlyOverdueRate = (rate) => {
  const convertedRate = ((1 + rate) ** (360 / 30) - 1) * 100;
  const AnnualRate = `${convertedRate.toFixed(5)}%`;
  //console.log(AnnualRate);
  return AnnualRate;
};

convertMonthlyOverdueRate(interestRate);
