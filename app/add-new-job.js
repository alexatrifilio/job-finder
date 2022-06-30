var formAddJob = document.getElementById('form-add-job');
addSelectOptions('select-location', createList('country'));
addSelectOptions('select-seniority', createList('seniority'));
addSelectOptions('select-category', createList('category'));
//fillOptions();
// add back button
var btnBack = document.createElement('a');
btnBack.classList.add('btn', 'secondary-btn');
btnBack.setAttribute('href', './index.html');
btnBack.setAttribute('id', 'btn-back');
btnBack.appendChild(document.createTextNode('Back'));
formAddJob.appendChild(btnBack);
// add submit button
var submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('class', 'btn primary-btn');
submitButton.appendChild(document.createTextNode('Add'));
formAddJob.appendChild(submitButton);
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
