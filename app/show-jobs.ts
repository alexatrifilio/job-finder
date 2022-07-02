// Get query params from URL //
const parameters = new URLSearchParams(window.location.search);

const locat = parameters.get('location');
let seniority = parameters.get('seniority');
const category = parameters.get('category');

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


const filter = async () => {

    if(locat !== 'all' || seniority !== 'all' || category !== 'all'){
        const jobsByLoc = await getElements('jobs', locat);
        const jobsBySen = await getElements('jobs', seniority);
        const jobsByCat = await getElements('jobs', category);
        
    } else{
        let jobs = await getElements('jobs');
        const jobsByAllLocations = jobs.filter(job => {
            if(locat === 'all'){
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

filter()

// Filter //

const filter2 = async () => {

    const jobs = await getJobs('jobs');

    const temporalResponse = jobs.filter(job => {

        if(parameters.get('location') === 'all') return true;

        return job.location === parameters.get('location')
    })

    const tempoarlResponse = temporalResponse.filter(job => job.seniority === parameters.get('seniority'))

    // if(window.location.search.includes('?')){
    //     cardContainer.innerHTML = '';

    //     if(locat === 'all'){
    //         allLocations.setAttribute('selected', 'selected');
    //     }
    //     if(seniority === 'all'){
    //         allSeniorities.setAttribute('select', 'select');
    //     }
    //     if(category === 'all'){
    //         allCategories.setAttribute('select', 'select');
    //     }

    //     for (const job of jobs){ 
    //         const locationLC = job.location.toLowerCase()
    //         const seniorityLC = job.seniority.toLowerCase()
    //         const categoryLC = job.category.toLowerCase()


    //         if(locat && !seniority && !category){
    //             // if(seniority === 'all'){
    //             //     console.log('hola');
                    
    //             // }
    //             if (locationLC === locat){
    //                 cardCreator(job)
    //             }
    //         } else if (locat && seniority && !category){
    //             console.log('location y seniority');
    //             if (locationLC === locat && seniorityLC === seniority){
    //                 cardCreator(job)
    //             }
    //         } else if (locat && seniority && category){
    //             console.log('los tres')
    //             if (locationLC === locat && seniorityLC === seniority && categoryLC === category){
    //                 cardCreator(job)
    //             }
    //         } else if (!locat  && seniority && !category){
    //             console.log('solo seniority');
    //             if(locat === 'all' || category === 'all'){
    //                 if (seniorityLC === seniority){
    //                     cardCreator(job)
    //                 }
    //             }
    //         } else if (!locat && seniority && category){
    //             console.log('seniority y category')
    //             if (seniorityLC === seniority && categoryLC === category){
    //                 cardCreator(job)
    //             }
    //         } else if (locat && !seniority && category){
    //             console.log('location y category')
    //             if (locationLC === locat && categoryLC === category){
    //                 cardCreator(job)
    //             }
    //         } else if(!locat  && !seniority && category){
    //             console.log('solo category');
    //             if (categoryLC === category){
    //                 cardCreator(job)
    //             }
                
    //         }
             
            
    //     }
    // } else{
        
    //    cardsCreator()
    // }
}

//filter()




