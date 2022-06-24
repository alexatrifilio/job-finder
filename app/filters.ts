// // add options to select element //

// const locationSelect = document.getElementById('select-location') as HTMLSelectElement;
// addOptions(getJobs('country'), locationSelect);

// const senioritySelect = document.getElementById('select-seniority') as HTMLSelectElement;
// addOptions(getJobs('seniority'), senioritySelect);

// const categorySelect = document.getElementById('select-category') as HTMLSelectElement;
// addOptions(getJobs('category'), categorySelect);

// // Location filter //

// const filter = async(select: HTMLSelectElement, param: string) => {

//     const parameters = new URLSearchParams(window.location.search);
    
//     select.addEventListener('change', (e) => {
        
//         const target = (e.target.value).toLowerCase();
//         parameters.set(param, target);
//         window.location.href = `${window.location.pathname}?${parameters.toString()}`;
//     })
    
//     const location = parameters.get('location');
//     const seniority = parameters.get('seniority');
//     const category = parameters.get('category');

//     const jobs = await getJobs('jobs');
//     cardContainer.innerHTML = '';
//     for (let job of jobs){      
//         if((job.location).toLowerCase() === location){
//             cardCreator(job)  
//         }
        
//     }


// }

// filter(locationSelect, 'location')
// filter(senioritySelect, 'seniority')