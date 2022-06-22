// add new job funtion

let job={
    name: "FrontEnd Developer",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus turpis in eu mi bibendum neque.",
    location: "United States",
    category: "Development",
    seniority: "Junior",
}

createInputField('form-add-job', 'text', 'name', 'Job title', 'Title of the job', 'required');
createTextAreaField('form-add-job', 'description', 'Description', 'Job description');
createInputField('form-add-job', 'text', 'location', '', 'Location', 'required');
createInputField('form-add-job', 'text', 'seniority', '', 'Seniority', 'required');
createInputField('form-add-job', 'text', 'category', '', 'Category', 'required');

// add back button
const btnBack = document.createElement('a');
btnBack.classList.add('btn','primary-btn');
btnBack.setAttribute('href', './index.html');
btnBack.setAttribute('id', 'btn-back');
btnBack.appendChild(document.createTextNode('Back'));
document.getElementById('form-add-job').appendChild(btnBack);


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
        postJob(formDataJson);

        
        alert('Job added successfully');
        window.location.href = './index.html';
        
    }
);


