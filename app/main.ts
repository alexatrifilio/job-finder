
// Loading component //

const loader: HTMLElement = document.getElementById('loader') as HTMLDivElement;

const showLoader = () => {
    loader.classList.add('loading');
}

const hideLoader = () => {
    loader.classList.remove('loading');
}


// Card Creator //


const cardCreator = (job: Job) => {
    const cardContainer: HTMLElement = document.getElementById('card-container') as HTMLDivElement;
    const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('id', `card-${job.id}`)
        const cardTitle = document.createElement('h2');
        cardTitle.classList.add('title');
        cardTitle.appendChild(document.createTextNode(job.name));
        const cardDescription = document.createElement('p');
        cardDescription.classList.add('description', 'min-description');
        cardDescription.appendChild(document.createTextNode(job.description));
        cardDescription.setAttribute('id', 'card-description');
        const tagCont = document.createElement('div');
        tagCont.classList.add('tag-container');
        const locationTag = document.createElement('span');
        locationTag.classList.add('tag');
        locationTag.appendChild(document.createTextNode(job.location));
        const categoryTag = document.createElement('span');
        categoryTag.classList.add('tag');
        categoryTag.appendChild(document.createTextNode(job.category));
        const seniorityTag = document.createElement('span');
        seniorityTag.classList.add('tag');
        seniorityTag.appendChild(document.createTextNode(job.seniority));
        const btnDetails = document.createElement('a');
        btnDetails.classList.add('btn','primary-btn');
        btnDetails.setAttribute('href', `./job-details.html?id=${job.id}`);
        btnDetails.setAttribute('id', 'btn-details');
        btnDetails.appendChild(document.createTextNode('See Details'));
        const btnsCont = document.createElement('div');
        const btnEdit = document.createElement('a');
        btnEdit.appendChild(document.createTextNode('Edit'));
        btnEdit.setAttribute('id', 'btn-edit');
        btnEdit.classList.add('hide');
        const btnDelete = document.createElement('a');
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
}


// Params //

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

// Form Functions //

function createInputField(
    formId: string, 
    type: string, 
    name: string, 
    fielTitle: string, 
    placeholder: string, 
    required: string): void {
    const form = document.getElementById(formId) as HTMLFormElement;
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

function createSelectField(
    formId: string, 
    name: string, 
    fieldTitle: string, 
    options: object): void {
    const form = document.getElementById(formId) as HTMLFormElement;
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
    const form = document.getElementById(formId) as HTMLFormElement;
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

const createList = async(endpoint): Promise<string[]> => {
    const list=[]
    const data = await getElements(endpoint);
    data.forEach(element => {
        list.push(element.name);
    });
    return list;
}


// Adding options to select elements //

const addOptions = async (options: Tag [], append: HTMLElement) => {

    const elements = await options
    
    console.log(options);
    
    for (let i of elements){

        const options = document.createElement('option');
        options.appendChild(document.createTextNode(i.name));
        append.appendChild(options);
    }
}

const addSelectOptions = async (id: string, options: Promise<string[]>) => {
    
    const select: HTMLSelectElement = document.getElementById(id) as HTMLSelectElement;
    const elements = await options;
    
    for (let i in elements){
        const option = document.createElement('option');
        option.appendChild(document.createTextNode(elements[i]));
        select.appendChild(option);
    }


}
