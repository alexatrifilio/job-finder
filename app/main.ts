// Job Finder script
// Language: Typescript 
// Authors: Vanessa Neira and Alejandra Trifilio
// Date 07-04-2022


// Search Messages //

const message = document.getElementById('message') as HTMLSpanElement;
const noJobMessage = document.getElementById('no-job-message') as HTMLSpanElement;


// Loading component //

const loader: HTMLElement = document.getElementById('loader') as HTMLDivElement;

const showLoader = () => {
    loader.classList.add('loading');
}

const hideLoader = () => {
    loader.classList.remove('loading');
}



// Hamburger Menu //

const primaryNav = document.getElementById('nav-list') as HTMLUListElement;
const navToggle = document.getElementById('mobile-nav-toggle') as HTMLButtonElement;
const hamburger = document.getElementById('hamburger') as HTMLDivElement;
const hamburgerLayers = document.querySelectorAll('.hamburger span');

navToggle.addEventListener('click', () =>{
    const visibility = primaryNav.getAttribute('data-visible');
    if(visibility === 'false'){
        primaryNav.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');
    } else {
        primaryNav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
    }
    hamburgerLayers.forEach(layer => layer.classList.toggle('active'));

    
})



// Card Creator //


const cardCreator = (job: Job) => {


    message.classList.add('hide')


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

// Multiple Card Creator //

const cardsCreator = async () => {

    showLoader()

    cardContainer.innerHTML = '';

    const jobs = await getElements('jobs');

    setTimeout(() => {

        jobs.forEach((element) => {
            cardCreator(element);
        } );
        hideLoader()

    }, 1500);
    
    
}


// Params //

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

// Form Functions //


const createList = async(endpoint): Promise<string[]> => {
    const list=[]
    const data = await getElements(endpoint);
    data.forEach(element => {
        list.push(element.name);
    });
    return list;
}


// 'All' option capture //

const allLocations:HTMLElement = document.getElementById('all-locations') as HTMLOptionElement;
const allSeniorities:HTMLElement = document.getElementById('all-seniorities') as HTMLOptionElement;
const allCategories:HTMLElement = document.getElementById('all-categories') as HTMLOptionElement;

// Adding options to select elements //

const addOptions = async (options: Tag [], append: HTMLElement, selected:string) => {

    const elements = await options

    for (let element of elements){

        const opt = document.createElement('option');
        opt.appendChild(document.createTextNode(element.name));
        opt.setAttribute('value', element.slug);
        if(selected === element.slug){
            opt.setAttribute('selected', 'selected');
        }
        append.appendChild(opt);
    }

    if (selected === 'all'){
        if(locat === 'all'){
            allLocations.setAttribute('selected', 'selected')
        } else if(seniority === 'all'){
            allSeniorities.setAttribute('selected', 'selected')
        }else if(category === 'all'){
            allCategories.setAttribute('selected', 'selected')
        }
    }


}

const addSelectOptions = async (id: string, options: Promise<string[]>) => {
    
    const select: HTMLSelectElement = document.getElementById(id) as HTMLSelectElement;
    const elements = await options;
    
    for (let element in elements){
        const option = document.createElement('option');
        option.appendChild(document.createTextNode(elements[element]));
        select.appendChild(option);
    }


}
