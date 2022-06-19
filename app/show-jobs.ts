type Job = {
    name: string,
    description: string,
    location: string,
    category: string,
    seniority: string,
    id: number
}

const cardContainer: HTMLElement = document.getElementById('card-container') as HTMLDivElement;
cardContainer.classList.add('card-container')

const cardCreator = async () => {
    const jobs: Job []  = await getJobs ();

    cardContainer.innerHTML = '';
    
    console.log(jobs[1].location);
    
    jobs.forEach(element => {

        const card = document.createElement('div');
        card.classList.add('card');
        const cardTitle = document.createElement('h2');
        cardTitle.classList.add('title');
        cardTitle.appendChild(document.createTextNode(element.name));
        const cardDescription = document.createElement('p');
        cardDescription.classList.add('description');
        cardDescription.appendChild(document.createTextNode(element.description));
        const tagCont = document.createElement('div');
        tagCont.classList.add('tag-container');
        const locationTag = document.createElement('span');
        locationTag.classList.add('tag');
        locationTag.appendChild(document.createTextNode(element.location));
        const categoryTag = document.createElement('span');
        categoryTag.classList.add('tag');
        categoryTag.appendChild(document.createTextNode(element.category));
        const seniorityTag = document.createElement('span');
        seniorityTag.classList.add('tag');
        seniorityTag.appendChild(document.createTextNode(element.seniority));
        const btn = document.createElement('a');
        btn.classList.add('btn','primary-btn');
        btn.setAttribute('href', '#');
        btn.appendChild(document.createTextNode('See Details'));


        card.appendChild(cardTitle);
        card.appendChild(cardDescription);
        tagCont.appendChild(locationTag);
        tagCont.appendChild(categoryTag);
        tagCont.appendChild(seniorityTag);
        card.appendChild(tagCont);
        card.appendChild(btn);
        
        cardContainer.appendChild(card);

    });
}

cardCreator();