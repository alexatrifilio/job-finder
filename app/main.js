// Loading component //
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
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
    card.setAttribute('id', "card-" + job.id);
    var cardTitle = document.createElement('h2');
    cardTitle.classList.add('title');
    cardTitle.appendChild(document.createTextNode(job.name));
    var cardDescription = document.createElement('p');
    cardDescription.classList.add('description', 'min-description');
    cardDescription.appendChild(document.createTextNode(job.description));
    cardDescription.setAttribute('id', 'card-description');
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
    var btnDetails = document.createElement('a');
    btnDetails.classList.add('btn', 'primary-btn');
    btnDetails.setAttribute('href', "./job-details.html?id=" + job.id);
    btnDetails.setAttribute('id', 'btn-details');
    btnDetails.appendChild(document.createTextNode('See Details'));
    var btnsCont = document.createElement('div');
    var btnEdit = document.createElement('a');
    btnEdit.appendChild(document.createTextNode('Edit'));
    btnEdit.setAttribute('id', 'btn-edit');
    btnEdit.classList.add('hide');
    var btnDelete = document.createElement('a');
    btnDelete.appendChild(document.createTextNode('Delete'));
    btnDelete.setAttribute('id', 'btn-delete');
    btnDelete.classList.add('hide');
    card.appendChild(cardTitle);
    card.appendChild(cardDescription);
    tagCont.appendChild(locationTag);
    tagCont.appendChild(categoryTag);
    tagCont.appendChild(seniorityTag);
    btnsCont.appendChild(btnEdit);
    btnsCont.appendChild(btnDelete);
    card.appendChild(tagCont);
    card.appendChild(btnDetails);
    card.appendChild(btnsCont);
    cardContainer.appendChild(card);
};
// Params //
var params = new URLSearchParams(window.location.search);
var id = params.get('id');
// Form Functions //
function createInputField(formId, type, name, fielTitle, placeholder, required) {
    var form = document.getElementById(formId);
    var inputContainer = document.createElement('div');
    var label = document.createElement('label');
    var input = document.createElement('input');
    inputContainer.classList.add('d-flex', 'flex-column', 'mb-3');
    label.setAttribute('for', fielTitle);
    label.appendChild(document.createTextNode(fielTitle));
    label.classList.add('mb-1');
    input.setAttribute('type', type);
    input.setAttribute('name', name);
    input.setAttribute('placeholder', placeholder);
    input.setAttribute('required', required);
    input.setAttribute('id', "input-" + name);
    inputContainer.appendChild(label);
    inputContainer.appendChild(input);
    form.appendChild(inputContainer);
}
function createSelectField(formId, name, fieldTitle, options) {
    var form = document.getElementById(formId);
    var selectContainer = document.createElement('div');
    var label = document.createElement('label');
    var select = document.createElement('select');
    var option = document.createElement('option');
    selectContainer.classList.add('d-flex', 'flex-column', 'mb-3');
    label.setAttribute('for', fieldTitle);
    label.classList.add('mb-1');
    label.appendChild(document.createTextNode(fieldTitle));
    select.setAttribute('name', name);
    option.appendChild(document.createTextNode('Seleccione una opción'));
    select.appendChild(option);
    select.setAttribute('id', "select-" + name);
    for (var i in options) {
        var option_1 = document.createElement('option');
        option_1.appendChild(document.createTextNode(options[i]));
        select.appendChild(option_1);
    }
    selectContainer.appendChild(label);
    selectContainer.appendChild(select);
    form.appendChild(selectContainer);
}
function createTextAreaField(formId, name, fieldTitle, placeholder) {
    var form = document.getElementById(formId);
    var textAreaContainer = document.createElement('div');
    var label = document.createElement('label');
    var textArea = document.createElement('textarea');
    textAreaContainer.classList.add('d-flex', 'flex-column', 'mb-3');
    label.setAttribute('for', fieldTitle);
    label.classList.add('mb-1');
    label.appendChild(document.createTextNode(fieldTitle));
    textArea.setAttribute('name', name);
    textArea.setAttribute('placeholder', placeholder);
    textArea.setAttribute('id', "textarea-" + name);
    textAreaContainer.appendChild(label);
    textAreaContainer.appendChild(textArea);
    form.appendChild(textAreaContainer);
}
var createList = function (endpoint) { return __awaiter(_this, void 0, void 0, function () {
    var list, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                list = [];
                return [4 /*yield*/, getElements(endpoint)];
            case 1:
                data = _a.sent();
                data.forEach(function (element) {
                    list.push(element.name);
                });
                return [2 /*return*/, list];
        }
    });
}); };
// Adding options to select elements //
var addOptions = function (options, append) { return __awaiter(_this, void 0, void 0, function () {
    var elements, _i, elements_1, element, options_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, options];
            case 1:
                elements = _a.sent();
                for (_i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                    element = elements_1[_i];
                    options_1 = document.createElement('option');
                    options_1.appendChild(document.createTextNode(element.name));
                    options_1.setAttribute('value', element.slug);
                    append.appendChild(options_1);
                }
                return [2 /*return*/];
        }
    });
}); };
var addSelectOptions = function (id, options) { return __awaiter(_this, void 0, void 0, function () {
    var select, elements, i, option;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                select = document.getElementById(id);
                return [4 /*yield*/, options];
            case 1:
                elements = _a.sent();
                for (i in elements) {
                    option = document.createElement('option');
                    option.appendChild(document.createTextNode(elements[i]));
                    select.appendChild(option);
                }
                return [2 /*return*/];
        }
    });
}); };
