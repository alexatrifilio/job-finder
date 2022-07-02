console.log(parameters.toString());
var cardContainer = document.getElementById('card-container');
if (!window.location.href.includes('?')) {
    cardsCreator();
}
filterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    showLoader();
    setTimeout(function () {
        if (!parameters.toString().includes(locat)) {
            parameters.set('category', 'all');
            allLocations.setAttribute('selected', 'selected');
        }
        if (!parameters.toString().includes(seniority)) {
            parameters.set('category', 'all');
            allSeniorities.setAttribute('selected', 'selected');
        }
        if (!parameters.toString().includes(category)) {
            parameters.set('category', 'all');
            allCategories.setAttribute('selected', 'selected');
            //window.location.href = `${window.location.pathname}?${parameters.toString()}`
        }
        hideLoader();
    }, 1500);
    filter2();
});
// Filter //
// const filter2 = async () => {
//     showLoader()
//     const jobs = await getElements('jobs');
//     setTimeout(() =>{
//         const temporalResponse = jobs.filter(job => {
//             if(parameters.get('location') === 'all') return true;
//             return job.location.toLowerCase() === parameters.get('location')
//         });
//         const temporalResponse2 = temporalResponse.filter(job => {
//             if(parameters.get('seniority') === 'all') return true;
//             return job.seniority.toLowerCase() === parameters.get('seniority')
//         });
//         const finalResponse = temporalResponse2.filter( job => {
//             if(parameters.get('category') === 'all') return true;
//             if(parameters.get('category').includes('-')){
//                 const newCategory = parameters.get('category').replace(/-/g,' ');
//                 return job.category.toLowerCase() === newCategory
//             } else{
//                 return job.category.toLowerCase() === parameters.get('category')
//             }
//         });
//         finalResponse.forEach(job => {
//             cardCreator(job)
//         });
//         hideLoader()
//     },1500)
// }
