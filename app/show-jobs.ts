console.log(parameters.toString());
const cardContainer: HTMLElement = document.getElementById('card-container') as HTMLDivElement;

if(!window.location.href.includes('?')){
    cardsCreator()
}

if(queryParams){
    showLoader()
}

filterForm.addEventListener( 'submit', (e) =>{
    e.preventDefault()

    showLoader()

    setTimeout(() => {
        if(!parameters.toString().includes(locat)){
            parameters.set('category', 'all');
            allLocations.setAttribute('selected', 'selected')
        }
        if(!parameters.toString().includes(seniority)){
            parameters.set('category', 'all');
            allSeniorities.setAttribute('selected', 'selected')
            
        }
        if (!parameters.toString().includes(category)){
            parameters.set('category', 'all');
            allCategories.setAttribute('selected', 'selected')
            //window.location.href = `${window.location.pathname}?${parameters.toString()}`
           
        } 
        hideLoader()
    }, 1500);
             
    
    
    filter2()
})




















