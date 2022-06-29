// let createCountryList = async (): Promise<object> => {
//     return await (await getElements('country')).map(country => country.name);
// }
// let createSeniorityList = async (): Promise<object> => {
//     return await getElements('seniority');
// }
// let createCategoryList = async (): Promise<object> => {
//     return await getElements('category');
// }
// console.log(createCountryList());
// console.log(createSeniorityList());
// console.log(createCategoryList());
// add new job funtion
// createInputField('form-add-job', 'text', 'name', 'Job title', 'Title of the job', 'required');
// createTextAreaField('form-add-job', 'description', 'Description', 'Job description');
// createSelectField('form-add-job', 'location', 'Location', ["Argentina", "Australia", "Brazil", "Colombia", "Czechia", "Denmark", "Finland", "France"]);
// createSelectField('form-add-job', 'seniority', 'Seniority', ["Entry Level", "Junior", "Senior", "Lead", "Manager"]);
// createSelectField('form-add-job', 'category', 'Category', ["Accounting", "Administration", "Advertising", "Architecture", "Art", "Automotive", "Banking"]);
var addJob = document.getElementById('form-add-job');
// add back button
var btnBack = document.createElement('a');
btnBack.classList.add('btn', 'primary-btn');
btnBack.setAttribute('href', './index.html');
btnBack.setAttribute('id', 'btn-back');
btnBack.appendChild(document.createTextNode('Back'));
addJob.appendChild(btnBack);
// add submit button
var submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('class', 'btn btn-primary');
submitButton.appendChild(document.createTextNode('Add'));
addJob.appendChild(submitButton);
// add event listener to submit button
submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    var form = document.getElementById('form-add-job');
    var formData = new FormData(form);
    var formDataJson = {};
    formData.forEach(function (value, key) {
        formDataJson[key] = value;
    });
    postElement(formDataJson, 'jobs');
    alert('Job added successfully');
    window.location.href = './index.html';
});
