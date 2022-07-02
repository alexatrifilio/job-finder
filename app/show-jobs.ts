// Get query params from URL //
const parameters = new URLSearchParams(window.location.search);

const locat = parameters.get('location');
let seniority = parameters.get('seniority');
const category = parameters.get('category');

// Add options to select filter

const locationSelect = document.getElementById('select-location') as HTMLSelectElement;
addOptions(getElements('country'), locationSelect, locat);

const senioritySelect = document.getElementById('select-seniority') as HTMLSelectElement;
addOptions(getElements('seniority'), senioritySelect, seniority);

const categorySelect = document.getElementById('select-category') as HTMLSelectElement;
addOptions(getElements('category'), categorySelect, category);


// Add query params to URL //



const queryParams = (select: HTMLSelectElement, param: string) => {
    
    select.addEventListener('submit', (e) => {
        e.preventDefault()
        const target = (e.target.value);       
        parameters.set(param, target);
        window.location.href = `${window.location.pathname}?${parameters.toString()}`;
    })

    
    
}

queryParams(locationSelect, 'location')
queryParams(senioritySelect, 'seniority')
queryParams(categorySelect, 'category')



const allLocations:HTMLElement = document.getElementById('all-locations') as HTMLOptionElement;
const allSeniorities:HTMLElement = document.getElementById('all-seniorities') as HTMLOptionElement;
const allCategories:HTMLElement = document.getElementById('all-categories') as HTMLOptionElement;

const cardContainer: HTMLElement = document.getElementById('card-container') as HTMLDivElement;




// Filter //

const filter2 = async () => {

    const jobs = await getElements('jobs');

    const temporalResponse = jobs.filter(job => {

        if(parameters.get('location') === 'all') return true;

        return job.location.toLowerCase() === parameters.get('location')
    })

    

    const temporalResponse2 = temporalResponse.filter(job => {
        if(parameters.get('seniority') === 'all') return true;
        return job.seniority.toLowerCase() === parameters.get('seniority')
    })


    const finalResponse = temporalResponse2.filter( job => {
        if(parameters.get('category') === 'all') return true;
        return job.category.toLowerCase() === parameters.get('category')
    })

    finalResponse.forEach(job => {
        cardCreator(job)
    })
    
}

filter2()




