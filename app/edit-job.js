// add new job funtion
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
//const cardContainer: HTMLElement = document.getElementById('card-container') as HTMLDivElement;
var editJobForm = document.getElementById('form-edit-job');
//cardContainer.appendChild(editJobForm);
// fill form with job data from api
var populateForm = function (job) {
    document.getElementById('input-name').value = job['name'];
    document.getElementById('textarea-description').value = job['description'];
    document.getElementById('input-location').value = job['location'];
    document.getElementById('input-seniority').value = job['seniority'];
    document.getElementById('input-category').value = job['category'];
};
var showForm = function () { return __awaiter(_this, void 0, void 0, function () {
    var job, btnBack, submitButton;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                showLoader();
                return [4 /*yield*/, getElement(id, 'jobs')];
            case 1:
                job = _a.sent();
                createInputField('form-edit-job', 'text', 'name', 'Job title', 'Title of the job', 'required');
                createTextAreaField('form-edit-job', 'description', 'Description', 'Job description');
                createInputField('form-edit-job', 'text', 'location', '', 'Location', 'required');
                createInputField('form-edit-job', 'text', 'seniority', '', 'Seniority', 'required');
                createInputField('form-edit-job', 'text', 'category', '', 'Category', 'required');
                populateForm(job);
                btnBack = document.createElement('a');
                btnBack.classList.add('btn', 'primary-btn');
                btnBack.setAttribute('href', './index.html');
                btnBack.setAttribute('id', 'btn-back');
                btnBack.appendChild(document.createTextNode('Back'));
                editJobForm.appendChild(btnBack);
                submitButton = document.createElement('button');
                submitButton.setAttribute('type', 'submit');
                submitButton.setAttribute('class', 'btn btn-primary');
                submitButton.appendChild(document.createTextNode('Save'));
                editJobForm.appendChild(submitButton);
                // add event listener to submit button
                submitButton.addEventListener('click', function (e) {
                    e.preventDefault();
                    var form = document.getElementById('form-edit-job');
                    var formData = new FormData(form);
                    var formDataJson = {};
                    formData.forEach(function (value, key) {
                        formDataJson[key] = value;
                    });
                    editElement(id, formDataJson, 'jobs');
                    alert('Job edited successfully');
                    window.location.href = './index.html';
                });
                hideLoader();
                return [2 /*return*/];
        }
    });
}); };
showForm();
