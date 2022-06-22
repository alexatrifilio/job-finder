// add new job funtion

let job={
    name: "FrontEnd Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus turpis in eu mi bibendum neque.",
    location: "United States",
    category: "Development",
    seniority: "Junior",
}

console.log(document.getElementById('form-add-job'));


// -- input field creator --//

function createInputField(
    formId: string, 
    type: string, 
    name: string, 
    fielTitle: string, 
    placeholder: string, 
    required: string): void {
    const form = document.getElementById(formId);
    const inputContainer =  document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');

    inputContainer.classList.add('d-flex', 'flex-column', 'mb-3')
    label.setAttribute('for', fielTitle);
    label.appendChild(document.createTextNode(fielTitle));
    label.classList.add('mb-1');
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('placeholder', placeholder);
    input.setAttribute('required', required);
    input.setAttribute('id', `input-${name}`);
    inputContainer.appendChild(label);
    inputContainer.appendChild(input);
    form.appendChild(inputContainer)
}

// -- Select field creator --//

function createSelectField(
    formId: string, 
    name: string, 
    fieldTitle: string, 
    options: string[]): void {
    const form = document.getElementById(formId);
    const selectContainer = document.createElement('div');
    const label = document.createElement('label');
    const select = document.createElement('select');
    const option = document.createElement('option');

    selectContainer.classList.add('d-flex', 'flex-column', 'mb-3')
    label.setAttribute('for', fieldTitle);
    label.classList.add('mb-1');
    label.appendChild(document.createTextNode(fieldTitle));
    select.setAttribute('name', name);
    option.appendChild(document.createTextNode('Seleccione una opción'));
    select.appendChild(option);
    select.setAttribute('id', `select-${name}`);
    for (let i in options){
        const option = document.createElement('option');
        option.appendChild(document.createTextNode(options[i]));
        select.appendChild(option);
    }
    selectContainer.appendChild(label);
    selectContainer.appendChild(select);
    form.appendChild(selectContainer)
}

function createTextAreaField(
    formId: string,
    name: string,
    fieldTitle: string,
    placeholder: string): void {
    const form = document.getElementById(formId);
    const textAreaContainer = document.createElement('div');
    const label = document.createElement('label');
    const textArea = document.createElement('textarea');

    textAreaContainer.classList.add('d-flex', 'flex-column', 'mb-3')
    label.setAttribute('for', fieldTitle);
    label.classList.add('mb-1');
    label.appendChild(document.createTextNode(fieldTitle));
    textArea.setAttribute('name', name);
    textArea.setAttribute('placeholder', placeholder);
    textArea.setAttribute('id', `textarea-${name}`);
    textAreaContainer.appendChild(label);
    textAreaContainer.appendChild(textArea);
    form.appendChild(textAreaContainer)
}


createInputField('form-add-job', 'text', 'name', 'Job title', 'Title of the job', 'required');
createTextAreaField('form-add-job', 'description', 'Description', 'Job description');
createInputField('form-add-job', 'text', 'location', '', 'Location', 'required');
createInputField('form-add-job', 'text', 'seniority', '', 'Seniority', 'required');
createInputField('form-add-job', 'text', 'category', '', 'Category', 'required');

// add submit button
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('class', 'btn btn-primary');
submitButton.appendChild(document.createTextNode('Add'));
document.getElementById('form-add-job').appendChild(submitButton);


// add event listener to submit button
submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const form = document.getElementById('form-add-job');
        const formData = new FormData(form);
        const formDataJson = {};
        formData.forEach((value, key) => {
            formDataJson[key] = value;
        }
        );
        //console.log(formDataJson);
        //console.log(JSON.stringify(formDataJson));
        postJob(formDataJson);
    }
);


