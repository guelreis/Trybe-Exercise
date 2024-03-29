var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var db = [];
var LocalDbModel = /** @class */ (function () {
    function LocalDbModel() {
        var _this = this;
        this.create = function (character) { return __awaiter(_this, void 0, void 0, function () {
            var lastId, newCharacter;
            return __generator(this, function (_a) {
                lastId = db.length > 0 ? db[db.length - 1].id : 0;
                newCharacter = __assign({ id: lastId + 1 }, character);
                db.push(newCharacter);
                return [2 /*return*/, newCharacter];
            });
        }); };
        this.findIndexById = function (id) {
            var index = db.findIndex(function (character) { return character.id === id; });
            if (index < 0)
                throw new Error('Character not found');
            return index;
        };
        this.update = function (id, character) { return __awaiter(_this, void 0, void 0, function () {
            var indexToUpdate;
            return __generator(this, function (_a) {
                indexToUpdate = this.findIndexById(id);
                db[indexToUpdate] = __assign(__assign({}, db[indexToUpdate]), character);
                return [2 /*return*/, db[indexToUpdate]];
            });
        }); };
        this["delete"] = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var indexToDelete, deletedItem;
            return __generator(this, function (_a) {
                indexToDelete = this.findIndexById(id);
                deletedItem = db.splice(indexToDelete, 1);
                if (deletedItem.length > 0)
                    return [2 /*return*/, true];
                return [2 /*return*/, false];
            });
        }); };
        this.getAll = function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/, db];
        }); }); };
        this.getById = function (id) { return __awaiter(_this, void 0, void 0, function () {
            var indexToGet;
            return __generator(this, function (_a) {
                indexToGet = this.findIndexById(id);
                return [2 /*return*/, db[indexToGet]];
            });
        }); };
    }
    return LocalDbModel;
}());
var CharacterService = /** @class */ (function () {
    function CharacterService(model) {
        this.model = model;
    }
    CharacterService.prototype.create = function (character) {
        return __awaiter(this, void 0, void 0, function () {
            var newCharacter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.create(character)];
                    case 1:
                        newCharacter = _a.sent();
                        return [2 /*return*/, ({ status: 201, data: newCharacter })];
                }
            });
        });
    };
    CharacterService.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allCharacter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.getAll()];
                    case 1:
                        allCharacter = _a.sent();
                        return [2 /*return*/, ({ status: 200, data: allCharacter })];
                }
            });
        });
    };
    return CharacterService;
}());
var MockDbModel = /** @class */ (function () {
    function MockDbModel() {
    }
    MockDbModel.prototype.create = function (character) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('character created');
                return [2 /*return*/, { id: 1, name: 'Peach', specialMove: 'Toad' }];
            });
        });
    };
    MockDbModel.prototype.update = function (id, character) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('character updated');
                return [2 /*return*/, { id: 1, name: 'Yoshi', specialMove: 'Egg Lay' }];
            });
        });
    };
    MockDbModel.prototype["delete"] = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('character deleted');
                return [2 /*return*/, true];
            });
        });
    };
    MockDbModel.prototype.getAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, [
                        { id: 1, name: 'Samus', specialMove: 'Charge Shot' },
                        { id: 2, name: 'Kirby', specialMove: 'Inhale' },
                    ]];
            });
        });
    };
    MockDbModel.prototype.getById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, { id: 1, name: 'Mario', specialMove: 'Fireball' }];
            });
        });
    };
    return MockDbModel;
}());
var A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);
var B = new CharacterService(new MockDbModel());
B.getAll().then(console.log);
