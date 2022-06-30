// Get query params from URL //
const parameters = new URLSearchParams(window.location.search);

const locat = parameters.get('location');
let seniority = parameters.get('seniority');
const category = parameters.get('category');


// add options to select element //

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
        const target = (e.target.value).toLowerCase();       
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



// Filter //

const filter = async () => {

    let jobs = await getElements('jobs');

    
    
    if(locat !== 'all' || seniority !== 'all' || category !== 'all'){
        const jobsByLoc = await getElements('jobs', locat);
        const jobsBySen = await getElements('jobs', seniority);
        const jobsByCat = await getElements('jobs', category);
        
    } else{
        let jobs = await getElements('jobs');
        const jobsByAllLocations = jobs.filter(job => {
            if(locat === 'all'){
                ;
                
                return true
            }
        })
        const jobsByAllSeniorities = jobs.filter(job => {
            if(seniority === 'all'){
                return true
            }
        }) 
        const jobsByAllCategories = jobs.filter(job => {
            if(category === 'all'){
                return true
            }
        })
    }
    

    // jobs.forEach((job) =>{
    //     cardCreator(job)
    // })
    
    // console.log(jobs);
    
    
    // const jobsByLocation = jobs.filter(job => {
    //     if(parameters.get('location') === 'all'){
    //         return true
    //     }
    // })

    // jobsByLocation.forEach(job => {
    //     console.log(job);
        
    //     cardCreator(job)
    // } )

    // const jobsBySeniority = jobsByLocation.filter(job => {
    //     if(parameters.get('seniority') === 'all') return true;
    //     return job.seniority === parameters.get('seniority')
    // })

    // const jobsByCategory = jobsBySeniority.filter( job =>{
    //     console.log('by cat');
    //     if(parameters.get('category') === 'all') return true;
    //     return job.category === parameters.get('category')
        
    // })

    // jobsByCategory.forEach(job => {
    //     cardCreator(job)
    // })

   
}

//filter()


