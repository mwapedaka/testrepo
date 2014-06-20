/*
 * Tax Calculator
 * Version 1.0
 * 20/06/2014 11:51 AM
 * Author: Mwape Daka
 *
 *
 * Parameters:
 * gross: Gross income value,
 * bandArray: Array of tax bands i.e. [{rate: <rate out of 100>, above: <applies for amount above this>}, ...]
 * allowableTaxFree: Pension allowed tax free amount
 */

function calculateTax(gross, bandArray, allowableTaxFree) {
	function calculateTaxInBand(gross, taxBand) {
		if(gross > taxBand.above) {
			gross -= taxBand.above;
			return {gross: taxBand.above, net: (gross - (gross * ( taxBand.rate / 100 )))};
		}
		return {gross: gross, net: gross};
	}

	var net = 0,
	allowableTaxFree = allowableTaxFree || 0;

	// Validate
	if(typeof allowableTaxFree !== "number")
		throw new Error("Invalid value for 'allowableTaxFree' (number is required).")
	if(typeof gross !== "number")
		throw new Error("Invalid value for 'gross' (number is required).");
	if(!Array.isArray(bandArray))
		throw new Error("An array of taxBands is required");
	for(j=0; j<bandArray.length; j++) {
		if(typeof bandArray[j] !== "object")
			throw new Error("Invalid value for 'gross' (number is required).");
		if(typeof bandArray[j].rate !== "number")
			throw new Error("Invalid value for 'rate' (number is required).");
		if(typeof bandArray[j].above !== "number")
			throw new Error("Invalid value for 'above' (number is required).");
	}

	gross -= allowableTaxFree;
	bandArray = bandArray.sort(function(a, b) { return (b.above - a.above); });

	for(i=0; i<bandArray.length; i++) {
		var result = calculateTaxInBand(gross, bandArray[i]);
		gross = result.gross;
		net += result.net;
	}
	return net + gross + allowableTaxFree;
}
