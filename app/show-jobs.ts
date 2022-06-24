

const cardContainer: HTMLElement = document.getElementById('card-container') as HTMLDivElement;


const cardsCreator = async () => {

    showLoader()

    cardContainer.innerHTML = '';

    const jobs = await getJobs('jobs');

    setTimeout(() => {

        jobs.forEach((element) => {
            cardCreator(element);
        } );
        hideLoader()

    }, 1500);
    
    
}


cardsCreator()



