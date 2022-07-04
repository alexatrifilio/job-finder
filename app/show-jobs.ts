// Job Finder script
// Language: Typescript 
// Authors: Vanessa Neira and Alejandra Trifilio
// Date 07-04-2022


const cardContainer: HTMLElement = document.getElementById('card-container') as HTMLDivElement;

// Show all jobs //

if(!window.location.href.includes('?')){
    cardsCreator()
}


// Show filtered jobs //


filterForm.addEventListener( 'submit', (e) =>{
    e.preventDefault()

        if(!parameters.toString().includes(locat)){
            parameters.set('location', 'all');
            allLocations.setAttribute('selected', 'selected')
        }
        if(!parameters.toString().includes(seniority)){
            parameters.set('seniority', 'all');
            allSeniorities.setAttribute('selected', 'selected')
            
        }
        if (!parameters.toString().includes(category)){
            parameters.set('category', 'all');
            allCategories.setAttribute('selected', 'selected')
           
        } 

        message.classList.add('hide')
             
    
    
    filter2()
})




















