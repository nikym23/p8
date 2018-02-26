"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
require("rxjs/add/operator/map");
var shared_1 = require("../../shared");
var grocery_model_1 = require("./grocery.model");
var GroceryService = /** @class */ (function () {
    function GroceryService(http, zone) {
        this.http = http;
        this.zone = zone;
        this.items = new BehaviorSubject_1.BehaviorSubject([]);
        this.allItems = [];
        this.baseUrl = shared_1.BackendService.baseUrl + "appdata/" + shared_1.BackendService.appKey + "/Groceries";
    }
    GroceryService.prototype.load = function () {
        var _this = this;
        var params = new http_1.URLSearchParams();
        params.append("sort", "{\"_kmd.lmt\": -1}");
        return this.http.get(this.baseUrl, {
            headers: this.getCommonHeaders(),
            params: params
        })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            data.forEach(function (grocery) {
                _this.allItems.push(new grocery_model_1.Grocery(grocery._id, grocery.Name, grocery.Done || false, grocery.Deleted || false));
                _this.publishUpdates();
            });
        })
            .catch(this.handleErrors);
    };
    GroceryService.prototype.add = function (name) {
        var _this = this;
        return this.http.post(this.baseUrl, JSON.stringify({ Name: name }), { headers: this.getCommonHeaders() })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            _this.allItems.unshift(new grocery_model_1.Grocery(data._id, name, false, false));
            _this.publishUpdates();
        })
            .catch(this.handleErrors);
    };
    GroceryService.prototype.setDeleteFlag = function (item) {
        var _this = this;
        item.deleted = true;
        return this.put(item)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            item.done = false;
            _this.publishUpdates();
        });
    };
    GroceryService.prototype.unsetDeleteFlag = function (item) {
        var _this = this;
        item.deleted = false;
        return this.put(item)
            .map(function (res) { return res.json(); })
            .map(function (data) {
            item.done = false;
            _this.publishUpdates();
        });
    };
    GroceryService.prototype.toggleDoneFlag = function (item) {
        item.done = !item.done;
        this.publishUpdates();
        return this.put(item)
            .map(function (res) { return res.json(); });
    };
    GroceryService.prototype.permanentlyDelete = function (item) {
        var _this = this;
        return this.http
            .delete(this.baseUrl + "/" + item.id, { headers: this.getCommonHeaders() })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var index = _this.allItems.indexOf(item);
            _this.allItems.splice(index, 1);
            _this.publishUpdates();
        })
            .catch(this.handleErrors);
    };
    GroceryService.prototype.put = function (grocery) {
        return this.http.put(this.baseUrl + "/" + grocery.id, JSON.stringify({
            Name: grocery.name,
            Done: grocery.done,
            Deleted: grocery.deleted
        }), { headers: this.getCommonHeaders() })
            .catch(this.handleErrors);
    };
    GroceryService.prototype.publishUpdates = function () {
        var _this = this;
        // Make sure all updates are published inside NgZone so that change detection is triggered if needed
        this.zone.run(function () {
            // must emit a *new* value (immutability!)
            _this.items.next(_this.allItems.slice());
        });
    };
    GroceryService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", "Kinvey " + shared_1.BackendService.token);
        return headers;
    };
    GroceryService.prototype.handleErrors = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error);
    };
    GroceryService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, core_1.NgZone])
    ], GroceryService);
    return GroceryService;
}());
exports.GroceryService = GroceryService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZ3JvY2VyeS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1EO0FBQ25ELHNDQUEwRjtBQUMxRiw4Q0FBNkM7QUFDN0Msd0RBQXVEO0FBQ3ZELGlDQUErQjtBQUUvQix1Q0FBOEM7QUFDOUMsaURBQTBDO0FBRzFDO0lBS0Usd0JBQW9CLElBQVUsRUFBVSxJQUFZO1FBQWhDLFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBSnBELFVBQUssR0FBb0MsSUFBSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pELGFBQVEsR0FBbUIsRUFBRSxDQUFDO1FBQ3RDLFlBQU8sR0FBRyx1QkFBYyxDQUFDLE9BQU8sR0FBRyxVQUFVLEdBQUcsdUJBQWMsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO0lBRTdCLENBQUM7SUFFekQsNkJBQUksR0FBSjtRQUFBLGlCQXVCQztRQXRCQyxJQUFJLE1BQU0sR0FBRyxJQUFJLHNCQUFlLEVBQUUsQ0FBQztRQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO1FBRTVDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pDLE9BQU8sRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDaEMsTUFBTSxFQUFFLE1BQU07U0FDZixDQUFDO2FBQ0QsR0FBRyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFWLENBQVUsQ0FBQzthQUN0QixHQUFHLENBQUMsVUFBQSxJQUFJO1lBQ1AsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE9BQU87Z0JBQ25CLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNoQixJQUFJLHVCQUFPLENBQ1QsT0FB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QUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEdBQUcsdUJBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRSxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ2pCLENBQUM7SUFFTyxxQ0FBWSxHQUFwQixVQUFxQixLQUFlO1FBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUF4SFUsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQU1lLFdBQUksRUFBZ0IsYUFBTTtPQUx6QyxjQUFjLENBeUgxQjtJQUFELHFCQUFDO0NBQUEsQUF6SEQsSUF5SEM7QUF6SFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UsIFJlc3BvbnNlT3B0aW9ucywgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9PYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqcy9CZWhhdmlvclN1YmplY3RcIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWRcIjtcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi9ncm9jZXJ5Lm1vZGVsXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcm9jZXJ5U2VydmljZSB7XG4gIGl0ZW1zOiBCZWhhdmlvclN1YmplY3Q8QXJyYXk8R3JvY2VyeT4+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG4gIHByaXZhdGUgYWxsSXRlbXM6IEFycmF5PEdyb2Nlcnk+ID0gW107XG4gIGJhc2VVcmwgPSBCYWNrZW5kU2VydmljZS5iYXNlVXJsICsgXCJhcHBkYXRhL1wiICsgQmFja2VuZFNlcnZpY2UuYXBwS2V5ICsgXCIvR3JvY2VyaWVzXCI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkgeyB9XG5cbiAgbG9hZCgpIHtcbiAgICBsZXQgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xuICAgIHBhcmFtcy5hcHBlbmQoXCJzb3J0XCIsIFwie1xcXCJfa21kLmxtdFxcXCI6IC0xfVwiKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHRoaXMuYmFzZVVybCwge1xuICAgICAgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCksXG4gICAgICBwYXJhbXM6IHBhcmFtc1xuICAgIH0pXG4gICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAubWFwKGRhdGEgPT4ge1xuICAgICAgZGF0YS5mb3JFYWNoKChncm9jZXJ5KSA9PiB7XG4gICAgICAgIHRoaXMuYWxsSXRlbXMucHVzaChcbiAgICAgICAgICBuZXcgR3JvY2VyeShcbiAgICAgICAgICAgIGdyb2NlcnkuX2lkLFxuICAgICAgICAgICAgZ3JvY2VyeS5OYW1lLFxuICAgICAgICAgICAgZ3JvY2VyeS5Eb25lIHx8IGZhbHNlLFxuICAgICAgICAgICAgZ3JvY2VyeS5EZWxldGVkIHx8IGZhbHNlXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gIH1cblxuICBhZGQobmFtZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgdGhpcy5iYXNlVXJsLFxuICAgICAgSlNPTi5zdHJpbmdpZnkoeyBOYW1lOiBuYW1lIH0pLFxuICAgICAgeyBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9XG4gICAgKVxuICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLm1hcChkYXRhID0+IHtcbiAgICAgIHRoaXMuYWxsSXRlbXMudW5zaGlmdChuZXcgR3JvY2VyeShkYXRhLl9pZCwgbmFtZSwgZmFsc2UsIGZhbHNlKSk7XG4gICAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgfSlcbiAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICB9XG5cbiAgc2V0RGVsZXRlRmxhZyhpdGVtOiBHcm9jZXJ5KSB7XG4gICAgaXRlbS5kZWxldGVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5wdXQoaXRlbSlcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAubWFwKGRhdGEgPT4ge1xuICAgICAgICBpdGVtLmRvbmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgICAgfSk7XG4gIH1cblxuICB1bnNldERlbGV0ZUZsYWcoaXRlbTogR3JvY2VyeSkge1xuICAgIGl0ZW0uZGVsZXRlZCA9IGZhbHNlO1xuICAgIHJldHVybiB0aGlzLnB1dChpdGVtKVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC5tYXAoZGF0YSA9PiB7XG4gICAgICAgIGl0ZW0uZG9uZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnB1Ymxpc2hVcGRhdGVzKCk7XG4gICAgICB9KTtcbiAgfVxuXG5cbiAgdG9nZ2xlRG9uZUZsYWcoaXRlbTogR3JvY2VyeSkge1xuICAgIGl0ZW0uZG9uZSA9ICFpdGVtLmRvbmU7XG4gICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgIHJldHVybiB0aGlzLnB1dChpdGVtKVxuICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSk7XG4gIH1cblxuICBwZXJtYW5lbnRseURlbGV0ZShpdGVtOiBHcm9jZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmRlbGV0ZShcbiAgICAgICAgdGhpcy5iYXNlVXJsICsgXCIvXCIgKyBpdGVtLmlkLFxuICAgICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpIH1cbiAgICAgIClcbiAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAubWFwKGRhdGEgPT4ge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmFsbEl0ZW1zLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIHRoaXMuYWxsSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5wdWJsaXNoVXBkYXRlcygpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gIH1cblxuICBwcml2YXRlIHB1dChncm9jZXJ5OiBHcm9jZXJ5KSB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wdXQoXG4gICAgICB0aGlzLmJhc2VVcmwgKyBcIi9cIiArIGdyb2NlcnkuaWQsXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIE5hbWU6IGdyb2NlcnkubmFtZSxcbiAgICAgICAgRG9uZTogZ3JvY2VyeS5kb25lLFxuICAgICAgICBEZWxldGVkOiBncm9jZXJ5LmRlbGV0ZWRcbiAgICAgIH0pLFxuICAgICAgeyBoZWFkZXJzOiB0aGlzLmdldENvbW1vbkhlYWRlcnMoKSB9XG4gICAgKVxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gIH1cblxuICBwcml2YXRlIHB1Ymxpc2hVcGRhdGVzKCkge1xuICAgIC8vIE1ha2Ugc3VyZSBhbGwgdXBkYXRlcyBhcmUgcHVibGlzaGVkIGluc2lkZSBOZ1pvbmUgc28gdGhhdCBjaGFuZ2UgZGV0ZWN0aW9uIGlzIHRyaWdnZXJlZCBpZiBuZWVkZWRcbiAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgIC8vIG11c3QgZW1pdCBhICpuZXcqIHZhbHVlIChpbW11dGFiaWxpdHkhKVxuICAgICAgdGhpcy5pdGVtcy5uZXh0KFsuLi50aGlzLmFsbEl0ZW1zXSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldENvbW1vbkhlYWRlcnMoKSB7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJLaW52ZXkgXCIgKyBCYWNrZW5kU2VydmljZS50b2tlbik7XG4gICAgcmV0dXJuIGhlYWRlcnM7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICB9XG59Il19