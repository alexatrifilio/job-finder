
const showJob = async (id: string) => {
    const job = await getJob(id);

    cardCreator(job)
    const thisCard = document.getElementById(`card-${id}`) as HTMLDivElement;
    thisCard.classList.add('single-card', 'card-large');

    const fullDescription = document.getElementById('card-description') as HTMLParagraphElement;
    fullDescription.classList.remove('min-description');

    const unseeBtn = document.getElementById('btn-details') as HTMLAnchorElement;
    unseeBtn.classList.remove('btn', 'primary-btn');
    unseeBtn.classList.add('hide');

    const btnEdit = document.getElementById('btn-edit') as HTMLAnchorElement;
    btnEdit.classList.add('btn', 'primary-btn');
    btnEdit.setAttribute('href', `./edit-job.html?id=${id}`);

    const btnDel = document.getElementById('btn-delete') as HTMLAnchorElement;
    btnDel.classList.add('btn', 'secondary-btn');
}

showLoader()


setTimeout(() => {
    showJob(id);
    hideLoader()
}, 5000);


//loading(showJob(id));