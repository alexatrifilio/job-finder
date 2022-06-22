

const cardContainer: HTMLElement = document.getElementById('card-container') as HTMLDivElement;


const cardsCreator = async () => {

    const jobs = await getJobs ();

    cardContainer.innerHTML = '';
    
    jobs.forEach((element) => {
        cardCreator(element);
    } );
}


showLoader()


setTimeout(() => {
    cardsCreator();
    hideLoader()
}, 5000);

// loading(cardsCreator());

