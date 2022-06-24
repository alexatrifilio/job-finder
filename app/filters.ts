

const locationSelect = document.getElementById('select-location') as HTMLSelectElement;
addOptions(getJobs('country'), locationSelect);

const senioritySelect = document.getElementById('select-seniority') as HTMLSelectElement;
addOptions(getJobs('seniority'), senioritySelect);

const categorySelect = document.getElementById('select-category') as HTMLSelectElement;
addOptions(getJobs('category'), categorySelect);