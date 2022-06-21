

const cardContainer: HTMLElement = document.getElementById('card-container') as HTMLDivElement;


const cardsCreator = async () => {

    const jobs: Job []  = await getJobs ();

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

