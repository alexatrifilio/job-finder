// Loading component //
var loader = document.getElementById('loader');
var showLoader = function () {
    loader.classList.add('loading');
};
var hideLoader = function () {
    loader.classList.remove('loading');
};
// Card Creator //
var cardCreator = function (job) {
    var cardContainer = document.getElementById('card-container');
    var card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('id', "card-".concat(job.id));
    var cardTitle = document.createElement('h2');
    cardTitle.classList.add('title');
    cardTitle.appendChild(document.createTextNode(job.name));
    var cardDescription = document.createElement('p');
    cardDescription.classList.add('description', 'min-description');
    cardDescription.appendChild(document.createTextNode(job.description));
    cardDescription.setAttribute('id', 'card-description');
    var tagCont = document.createElement('div');
    tagCont.classList.add('tag-container');
    var locationTag = document.createElement('span');
    locationTag.classList.add('tag');
    locationTag.appendChild(document.createTextNode(job.location));
    var categoryTag = document.createElement('span');
    categoryTag.classList.add('tag');
    categoryTag.appendChild(document.createTextNode(job.category));
    var seniorityTag = document.createElement('span');
    seniorityTag.classList.add('tag');
    seniorityTag.appendChild(document.createTextNode(job.seniority));
    var btnDetails = document.createElement('a');
    btnDetails.classList.add('btn', 'primary-btn');
    btnDetails.setAttribute('href', "./job-details.html?id=".concat(job.id));
    btnDetails.setAttribute('id', 'btn-details');
    btnDetails.appendChild(document.createTextNode('See Details'));
    var btnsCont = document.createElement('div');
    var btnEdit = document.createElement('a');
    btnEdit.appendChild(document.createTextNode('Edit'));
    btnEdit.setAttribute('id', 'btn-edit');
    btnEdit.classList.add('hide');
    var btnDelete = document.createElement('a');
    btnDelete.appendChild(document.createTextNode('Delete'));
    btnDelete.setAttribute('id', 'btn-delete');
    btnDelete.classList.add('hide');
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    tagCont.appendChild(locationTag);
    tagCont.appendChild(categoryTag);
    tagCont.appendChild(seniorityTag);
    btnsCont.appendChild(btnEdit);
    btnsCont.appendChild(btnDelete);
    card.appendChild(tagCont);
    card.appendChild(btnDetails);
    card.appendChild(btnsCont);
    cardContainer.appendChild(card);
};
// Params //
var params = new URLSearchParams(window.location.search);
var id = params.get('id');
// Form Functions //
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
