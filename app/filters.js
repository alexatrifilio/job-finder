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
var button = document.getElementById('filter-btn');
var filterForm = document.getElementById('filter-form');
// Get query params from URL //
var parameters = new URLSearchParams(window.location.search);
var locat = parameters.get('location');
var seniority = parameters.get('seniority');
var category = parameters.get('category');
// Add options to select filter
var locationSelect = document.getElementById('select-location');
addOptions(getElements('country'), locationSelect, locat);
var senioritySelect = document.getElementById('select-seniority');
addOptions(getElements('seniority'), senioritySelect, seniority);
var categorySelect = document.getElementById('select-category');
addOptions(getElements('category'), categorySelect, category);
// Add query params to URL //
var queryParams = function (select, param) {
    select.addEventListener('change', function (e) {
        e.preventDefault();
        var target = (e.target.value);
        parameters.set(param, target);
        window.location.href = window.location.pathname + "?" + parameters.toString();
    });
};
queryParams(locationSelect, 'location');
queryParams(senioritySelect, 'seniority');
queryParams(categorySelect, 'category');
// Filter Jobs //
var filter2 = function () { return __awaiter(_this, void 0, void 0, function () {
    var jobs;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                showLoader();
                return [4 /*yield*/, getElements('jobs')];
            case 1:
                jobs = _a.sent();
                setTimeout(function () {
                    var temporalResponse = jobs.filter(function (job) {
                        if (parameters.get('location') === 'all')
                            return true;
                        return job.location.toLowerCase() === parameters.get('location');
                    });
                    var temporalResponse2 = temporalResponse.filter(function (job) {
                        if (parameters.get('seniority') === 'all')
                            return true;
                        return job.seniority.toLowerCase() === parameters.get('seniority');
                    });
                    var finalResponse = temporalResponse2.filter(function (job) {
                        if (parameters.get('category') === 'all')
                            return true;
                        if (parameters.get('category').includes('-')) {
                            var newCategory = parameters.get('category').replace(/-/g, ' ');
                            return job.category.toLowerCase() === newCategory;
                        }
                        else {
                            return job.category.toLowerCase() === parameters.get('category');
                        }
                    });
                    finalResponse.forEach(function (job) {
                        cardCreator(job);
                    });
                    hideLoader();
                }, 1500);
                return [2 /*return*/];
        }
    });
}); };
