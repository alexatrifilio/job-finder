

const cardContainer: HTMLElement = document.getElementById('card-container') as HTMLDivElement;


const cardsCreator = async () => {

    showLoader()

    cardContainer.innerHTML = '';

    const jobs = await getElements('jobs');

    setTimeout(() => {

        jobs.forEach((element) => {
            cardCreator(element);
        } );
        hideLoader()

    }, 1500);
    
    
}


cardsCreator()



