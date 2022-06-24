var locationSelect = document.getElementById('select-location');
addOptions(getJobs('country'), locationSelect);
var senioritySelect = document.getElementById('select-seniority');
addOptions(getJobs('seniority'), senioritySelect);
var categorySelect = document.getElementById('select-category');
addOptions(getJobs('category'), categorySelect);
