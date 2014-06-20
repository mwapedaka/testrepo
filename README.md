HOW TO USE
===============
1. Include 'taxcalculator.min.js' in your project;
2. create variable to save gross pay
3. create array containing tax bands (objects). i.e. [{rate: number<taxRate>, above: amount<tax rate applies above this value>}, ...]
4. create variable for untaxable / pension reserved value [optional]
5. call 'calculateTax' passing argumennts i.e. calculateTax(gross, taxBandArray, [untaxable]);
6. The function returns your net pay


NOTE:
==============================
This is a Zambian PAYE taxing system and may not apply to other countries
