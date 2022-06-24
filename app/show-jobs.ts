
// add options to select element //

const locationSelect = document.getElementById('select-location') as HTMLSelectElement;
addOptions(getJobs('country'), locationSelect);

const senioritySelect = document.getElementById('select-seniority') as HTMLSelectElement;
addOptions(getJobs('seniority'), senioritySelect);

const categorySelect = document.getElementById('select-category') as HTMLSelectElement;
addOptions(getJobs('category'), categorySelect);

// Add query params to URL //

const parameters = new URLSearchParams(window.location.search);

// ¿Cómo hacer para que se mantengan en el option?

const queryParams = async(select: HTMLSelectElement, param: string) => {
    
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

// Filter //

const locat = parameters.get('location');
const seniority = parameters.get('seniority');
const category = parameters.get('category');


const filter = async () => {

    const jobs = await getJobs('jobs');

    if(window.location.search.includes('?')){
        cardContainer.innerHTML = '';
        for (const job of jobs){ 
            const locationLC = job.location.toLowerCase()
            const seniorityLC = job.seniority.toLowerCase()
            const categoryLC = job.category.toLowerCase()


            if(locat && !seniority && !category){
                console.log('solo location');
                if (locationLC === locat){
                    cardCreator(job)
                }
            } else if (locat && seniority && !category){
                console.log('location y seniority');
                if (locationLC === locat && seniorityLC === seniority){
                    cardCreator(job)
                }
            } else if (locat && seniority && category){
                console.log('los tres')
                if (locationLC === locat && seniorityLC === seniority && categoryLC === category){
                    cardCreator(job)
                }
            } else if (!locat && seniority && !category){
                console.log('solo seniority');
                if (seniorityLC === seniority){
                    cardCreator(job)
                }
            } else if (!locat && seniority && category){
                console.log('seniority y category')
                if (seniorityLC === seniority && categoryLC === category){
                    cardCreator(job)
                }
            } else if (locat && !seniority && category){
                console.log('location y category')
                if (locationLC === locat && categoryLC === category){
                    cardCreator(job)
                }
            } else if(!location && !seniority && category){
                console.log('solo category');
                if (categoryLC === category){
                    cardCreator(job)
                }
                
            }
             
            
        }
    } else{
        
       cardsCreator()
    }
}

filter()

