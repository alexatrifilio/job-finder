// // add options to select element //
// const locationSelect = document.getElementById('select-location') as HTMLSelectElement;
// addOptions(getJobs('country'), locationSelect);
var locationSelect = document.getElementById('select-location');
addOptions(getElements('country'), locationSelect);
var senioritySelect = document.getElementById('select-seniority');
addOptions(getElements('seniority'), senioritySelect);
var categorySelect = document.getElementById('select-category');
addOptions(getElements('category'), categorySelect);
