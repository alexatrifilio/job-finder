// add new job funtion
createInputField('form-add-job', 'text', 'name', 'Job title', 'Title of the job', 'required');
createTextAreaField('form-add-job', 'description', 'Description', 'Job description');
createInputField('form-add-job', 'text', 'location', '', 'Location', 'required');
createInputField('form-add-job', 'text', 'seniority', '', 'Seniority', 'required');
createInputField('form-add-job', 'text', 'category', '', 'Category', 'required');
var addJob = document.getElementById('form-add-job');
// add submit button
var submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('class', 'btn btn-primary');
submitButton.appendChild(document.createTextNode('Add'));
addJob.appendChild(submitButton);
// add back button
var btnBack = document.createElement('a');
btnBack.classList.add('btn', 'primary-btn');
btnBack.setAttribute('href', './index.html');
btnBack.setAttribute('id', 'btn-back');
btnBack.appendChild(document.createTextNode('Back'));
addJob.appendChild(btnBack);
// add event listener to submit button
submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    var form = document.getElementById('form-add-job');
    var formData = new FormData(form);
    var formDataJson = {};
    formData.forEach(function (value, key) {
        formDataJson[key] = value;
    });
    postJob(formDataJson, 'jobs');
    alert('Job added successfully');
    window.location.href = './index.html';
});
