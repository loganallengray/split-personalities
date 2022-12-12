const originalDisorderFormat = 'Depression|$|Bipolar|$|Manic|$|Anxiety|$|Anorexia|$|Posttraumtic Stress|$|Seasonal Affective|$|Bulimia';

// split string by the separators
// join string wrapped in divs
// log it inbetween divs

newDisorderFormat = originalDisorderFormat.split('|$|').join('</div>\n<div>');

console.log(`<div>${newDisorderFormat}</div>`);