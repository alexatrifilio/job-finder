const formAddJob = document.getElementById('form-add-job') as HTMLFormElement;

addSelectOptions('select-location', createList('country'));
addSelectOptions('select-seniority', createList('seniority'));
addSelectOptions('select-category', createList('category'));



// add submit button

const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('class', 'btn primary-btn');
submitButton.appendChild(document.createTextNode('Add'));
formAddJob.appendChild(submitButton);


// add back button

const btnBack = document.createElement('a');
btnBack.classList.add('btn','secondary-btn');
btnBack.setAttribute('href', './index.html');
btnBack.setAttribute('id', 'btn-back');
btnBack.appendChild(document.createTextNode('Back'));
formAddJob.appendChild(btnBack);


// add event listener to submit button

submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        const form = document.getElementById('form-add-job') as HTMLFormElement;
        const formData = new FormData(form);
        const formDataJson = {};
        formData.forEach((value, key) => {
            formDataJson[key] = value;
        }
        );
        postElement(formDataJson, 'jobs');

        
        alert('Job added successfully');
        window.location.href = './index.html';
        
    }
);


