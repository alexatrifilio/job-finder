console.log(parameters.toString());
var cardContainer = document.getElementById('card-container');
if (!window.location.href.includes('?')) {
    cardsCreator();
}
if (queryParams) {
    showLoader();
}
filterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!parameters.toString().includes(locat)) {
        parameters.set('location', 'all');
        allLocations.setAttribute('selected', 'selected');
    }
    if (!parameters.toString().includes(seniority)) {
        parameters.set('seniority', 'all');
        allSeniorities.setAttribute('selected', 'selected');
    }
    if (!parameters.toString().includes(category)) {
        parameters.set('category', 'all');
        allCategories.setAttribute('selected', 'selected');
        //window.location.href = `${window.location.pathname}?${parameters.toString()}`
    }
    message.classList.add('hide');
    filter2();
});
