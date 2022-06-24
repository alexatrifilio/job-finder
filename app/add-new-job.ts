// add new job funtion

createInputField('form-add-job', 'text', 'name', 'Job title', 'Title of the job', 'required');
createTextAreaField('form-add-job', 'description', 'Description', 'Job description');
createInputField('form-add-job', 'text', 'location', '', 'Location', 'required');
createInputField('form-add-job', 'text', 'seniority', '', 'Seniority', 'required');
createInputField('form-add-job', 'text', 'category', '', 'Category', 'required');

const addJob = document.getElementById('form-add-job') as HTMLFormElement;

// add submit button
const submitButton = document.createElement('button');
submitButton.setAttribute('type', 'submit');
submitButton.setAttribute('class', 'btn btn-primary');
submitButton.appendChild(document.createTextNode('Add'));
addJob.appendChild(submitButton);

// add back button

const btnBack = document.createElement('a');
btnBack.classList.add('btn','primary-btn');
btnBack.setAttribute('href', './index.html');
btnBack.setAttribute('id', 'btn-back');
btnBack.appendChild(document.createTextNode('Back'));
addJob.appendChild(btnBack);

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
        postJob(formDataJson, 'jobs');

        
        alert('Job added successfully');
        window.location.href = './index.html';
        
    }
);


