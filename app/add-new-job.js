// add new job funtion
var job = {
    name: "FrontEnd Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus turpis in eu mi bibendum neque.",
    location: "United States",
    category: "Development",
    seniority: "Junior"
};
console.log(document.getElementById('form-add-job'));
// -- input field creator --//
function createInputField(formId, type, name, fielTitle, placeholder, required) {
    var form = document.getElementById(formId);
    var inputContainer = document.createElement('div');
    var label = document.createElement('label');
    var input = document.createElement('input');
    inputContainer.classList.add('d-flex', 'flex-column', 'mb-3');
    label.setAttribute('for', fielTitle);
    label.appendChild(document.createTextNode(fielTitle));
    label.classList.add('mb-1');
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('placeholder', placeholder);
    input.setAttribute('required', required);
    input.setAttribute('id', "input-".concat(name));
    inputContainer.appendChild(label);
    inputContainer.appendChild(input);
    form.appendChild(inputContainer);
}
// -- Select field creator --//
function createSelectField(formId, name, fieldTitle, options) {
    var form = document.getElementById(formId);
    var selectContainer = document.createElement('div');
    var label = document.createElement('label');
    var select = document.createElement('select');
    var option = document.createElement('option');
    selectContainer.classList.add('d-flex', 'flex-column', 'mb-3');
    label.setAttribute('for', fieldTitle);
    label.classList.add('mb-1');
    label.appendChild(document.createTextNode(fieldTitle));
    select.setAttribute('name', name);
    option.appendChild(document.createTextNode('Seleccione una opción'));
    select.appendChild(option);
    select.setAttribute('id', "select-".concat(name));
    for (var i in options) {
        var option_1 = document.createElement('option');
        option_1.appendChild(document.createTextNode(options[i]));
        select.appendChild(option_1);
    }
    selectContainer.appendChild(label);
    selectContainer.appendChild(select);
    form.appendChild(selectContainer);
}
function createTextAreaField(formId, name, fieldTitle, placeholder) {
    var form = document.getElementById(formId);
    var textAreaContainer = document.createElement('div');
    var label = document.createElement('label');
    var textArea = document.createElement('textarea');
    textAreaContainer.classList.add('d-flex', 'flex-column', 'mb-3');
    label.setAttribute('for', fieldTitle);
    label.classList.add('mb-1');
    label.appendChild(document.createTextNode(fieldTitle));
    textArea.setAttribute('name', name);
    textArea.setAttribute('placeholder', placeholder);
    textArea.setAttribute('id', "textarea-".concat(name));
    textAreaContainer.appendChild(label);
    textAreaContainer.appendChild(textArea);
    form.appendChild(textAreaContainer);
}
createInputField('form-add-job', 'text', 'name', 'Job title', 'Title of the job', 'required');
createTextAreaField('form-add-job', 'description', 'Description', 'Job description');
createInputField('form-add-job', 'text', 'location', '', 'Location', 'required');
createInputField('form-add-job', 'text', 'seniority', '', 'Seniority', 'required');
createInputField('form-add-job', 'text', 'category', '', 'Category', 'required');
// add submit button
var submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('class', 'btn btn-primary');
submitButton.appendChild(document.createTextNode('Add'));
document.getElementById('form-add-job').appendChild(submitButton);
// add event listener to submit button
submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    var form = document.getElementById('form-add-job');
    var formData = new FormData(form);
    var formDataJson = {};
    formData.forEach(function (value, key) {
        formDataJson[key] = value;
    });
    //console.log(formDataJson);
    //console.log(JSON.stringify(formDataJson));
    postJob(formDataJson);
});
