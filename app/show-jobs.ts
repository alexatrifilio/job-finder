console.log(parameters.toString());
const cardContainer: HTMLElement = document.getElementById('card-container') as HTMLDivElement;

if(!window.location.href.includes('?')){
    cardsCreator()
}



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
            //window.location.href = `${window.location.pathname}?${parameters.toString()}`
           
        } 

        message.classList.add('hide')
             
    
    
    filter2()
})




















