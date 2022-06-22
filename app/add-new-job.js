// add new job funtion
var job = {
    name: "FrontEnd Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus turpis in eu mi bibendum neque.",
    location: "United States",
    category: "Development",
    seniority: "Junior"
};
createInputField('form-add-job', 'text', 'name', 'Job title', 'Title of the job', 'required');
createTextAreaField('form-add-job', 'description', 'Description', 'Job description');
createInputField('form-add-job', 'text', 'location', '', 'Location', 'required');
createInputField('form-add-job', 'text', 'seniority', '', 'Seniority', 'required');
createInputField('form-add-job', 'text', 'category', '', 'Category', 'required');
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
    postJob(formDataJson);
    alert('Job added successfully');
    window.location.href = './index.html';
});
