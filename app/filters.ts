const button = document.getElementById('filter-btn') as HTMLButtonElement;
const filterForm = document.getElementById('filter-form') as HTMLButtonElement;


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
    
    select.addEventListener('change', (e) => {
        e.preventDefault()
        const target = (e.target.value);       
        parameters.set(param, target);
        window.location.href = `${window.location.pathname}?${parameters.toString()}`;
    
    }) 
     
}

queryParams(locationSelect, 'location')
queryParams(senioritySelect, 'seniority')
queryParams(categorySelect, 'category')


// Filter Jobs //

const filter2 = async () => {

    showLoader()

    const jobs = await getElements('jobs');

    setTimeout(() =>{
        const temporalResponse = jobs.filter(job => {

            if(parameters.get('location') === 'all') return true;
    
            return job.location.toLowerCase() === parameters.get('location')
        });
    
        const temporalResponse2 = temporalResponse.filter(job => {
            if(parameters.get('seniority') === 'all') return true;
            return job.seniority.toLowerCase() === parameters.get('seniority')
        });
    
    
        const finalResponse = temporalResponse2.filter( job => {
            if(parameters.get('category') === 'all') return true;
    
            if(parameters.get('category').includes('-')){
                const newCategory = parameters.get('category').replace(/-/g,' ');
                return job.category.toLowerCase() === newCategory
            } else{
    
                return job.category.toLowerCase() === parameters.get('category')
            }
        });
    
        finalResponse.forEach(job => {
            cardCreator(job)
        });
        hideLoader()

    },1500)

    
    
}