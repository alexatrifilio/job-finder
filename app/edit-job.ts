
const editJobForm: HTMLElement = document.getElementById('form-edit-job') as HTMLFormElement;

addSelectOptions('select-location', createList('country'));
addSelectOptions('select-seniority', createList('seniority'));
addSelectOptions('select-category', createList('category'));

// fill form with job data from api

const populateForm = (job: Object) => {
    document.getElementById('input-name').value = job['name'];
    document.getElementById('textarea-description').value = job['description'];
    document.getElementById('select-location').value = job['location'];
    document.getElementById('select-seniority').value = job['seniority'];
    document.getElementById('select-category').value = job['category'];
}

const showForm = async () => {

    const job = await getElement(id, 'jobs');

    populateForm(job);

    // add submit button
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('class', 'btn primary-btn');
    submitButton.appendChild(document.createTextNode('Save'));
    editJobForm.appendChild(submitButton);
    
    // add back button
    const btnBack = document.createElement('a');
    btnBack.classList.add('btn','secondary-btn');
    btnBack.setAttribute('href', './index.html');
    btnBack.setAttribute('id', 'btn-back');
    btnBack.appendChild(document.createTextNode('Back'));
    editJobForm.appendChild(btnBack);

    // add event listener to submit button
    submitButton.addEventListener('click', (e) => {
            e.preventDefault();
            const form = document.getElementById('form-edit-job') as HTMLFormElement;
            const formData = new FormData(form);
            const formDataJson = {};
            formData.forEach((value, key) => {
                formDataJson[key] = value;
            }
            );
            editElement(id , formDataJson, 'jobs');

            
            alert('Job edited successfully');
            window.location.href = './index.html';
            
        }
    );
        
}


showForm()





