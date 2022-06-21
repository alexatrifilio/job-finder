type Job = {
    name: string,
    description: string,
    location: string,
    category: string,
    seniority: string,
    id: number
}


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