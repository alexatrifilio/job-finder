// Loading component //
var loader = document.getElementById('loader');
var showLoader = function () {
    loader.classList.add('loading');
};
var hideLoader = function () {
    loader.classList.remove('loading');
};
// Card Creator //
var cardCreator = function (job) {
    var cardContainer = document.getElementById('card-container');
    var card = document.createElement('div');
    card.classList.add('card');
    var cardTitle = document.createElement('h2');
    cardTitle.classList.add('title');
    cardTitle.appendChild(document.createTextNode(job.name));
    var cardDescription = document.createElement('p');
    cardDescription.classList.add('description');
    cardDescription.appendChild(document.createTextNode(job.description));
    var tagCont = document.createElement('div');
    tagCont.classList.add('tag-container');
    var locationTag = document.createElement('span');
    locationTag.classList.add('tag');
    locationTag.appendChild(document.createTextNode(job.location));
    var categoryTag = document.createElement('span');
    categoryTag.classList.add('tag');
    categoryTag.appendChild(document.createTextNode(job.category));
    var seniorityTag = document.createElement('span');
    seniorityTag.classList.add('tag');
    seniorityTag.appendChild(document.createTextNode(job.seniority));
    var btn = document.createElement('a');
    btn.classList.add('btn', 'primary-btn');
    btn.setAttribute('href', "./job-details.html?id=" + job.id);
    btn.appendChild(document.createTextNode('See Details'));
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    tagCont.appendChild(locationTag);
    tagCont.appendChild(categoryTag);
    tagCont.appendChild(seniorityTag);
    card.appendChild(tagCont);
    card.appendChild(btn);
    cardContainer.appendChild(card);
};
