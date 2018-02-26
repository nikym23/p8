"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/catch");
var backend_service_1 = require("./backend.service");
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.register = function (user) {
        return this.http.post(backend_service_1.BackendService.baseUrl + "user/" + backend_service_1.BackendService.appKey, JSON.stringify({
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.email,
            email: user.email,
            password: user.password,
            city: user.city,
            county: user.county,
            state: user.state
        }), { headers: this.getCommonHeaders() })
            .catch(this.handleErrors);
    };
    LoginService.prototype.login = function (user) {
        return this.http.post(backend_service_1.BackendService.baseUrl + "user/" + backend_service_1.BackendService.appKey + "/login", JSON.stringify({
            username: user.email,
            password: user.password
        }), { headers: this.getCommonHeaders() })
            .map(function (response) { return response.json(); })
            .do(function (data) {
            backend_service_1.BackendService.token = data._kmd.authtoken;
        })
            .catch(this.handleErrors);
    };
    LoginService.prototype.logoff = function () {
        backend_service_1.BackendService.token = "";
    };
    LoginService.prototype.resetPassword = function (email) {
        return this.http.post(backend_service_1.BackendService.baseUrl + "rpc/" + backend_service_1.BackendService.appKey + "/" + email + "/user-password-reset-initiate", {}, { headers: this.getCommonHeaders() }).catch(this.handleErrors);
    };
    LoginService.prototype.getCommonHeaders = function () {
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Authorization", backend_service_1.BackendService.appUserHeader);
        return headers;
    };
    LoginService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Observable_1.Observable.throw(error);
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ2luLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0Msc0NBQXdEO0FBQ3hELDhDQUE2QztBQUM3QyxnQ0FBOEI7QUFDOUIsaUNBQStCO0FBQy9CLHFDQUFtQztBQUNuQyxtQ0FBaUM7QUFHakMscURBQW1EO0FBR25EO0lBQ0Usc0JBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQUksQ0FBQztJQUVuQywrQkFBUSxHQUFSLFVBQVMsSUFBVTtRQUNqQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLGdDQUFjLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxnQ0FBYyxDQUFDLE1BQU0sRUFDeEQsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNiLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ3BCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDLEVBQ0YsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FDckM7YUFDQSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCw0QkFBSyxHQUFMLFVBQU0sSUFBVTtRQUNkLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsZ0NBQWMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLGdDQUFjLENBQUMsTUFBTSxHQUFHLFFBQVEsRUFDbkUsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSztZQUNwQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxFQUNGLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQ3JDO2FBQ0EsR0FBRyxDQUFDLFVBQUEsUUFBUSxJQUFJLE9BQUEsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzthQUNoQyxFQUFFLENBQUMsVUFBQSxJQUFJO1lBQ04sZ0NBQWMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDN0MsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUNFLGdDQUFjLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsb0NBQWEsR0FBYixVQUFjLEtBQUs7UUFDakIsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixnQ0FBYyxDQUFDLE9BQU8sR0FBRyxNQUFNLEdBQUcsZ0NBQWMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRywrQkFBK0IsRUFDdkcsRUFBRSxFQUNGLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLENBQ3JDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRU8sdUNBQWdCLEdBQXhCO1FBQ0UsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLGdDQUFjLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDOUQsTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsbUNBQVksR0FBWixVQUFhLEtBQWU7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUEzRFUsWUFBWTtRQUR4QixpQkFBVSxFQUFFO3lDQUVlLFdBQUk7T0FEbkIsWUFBWSxDQTREeEI7SUFBRCxtQkFBQztDQUFBLEFBNURELElBNERDO0FBNURZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anMvT2JzZXJ2YWJsZVwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb2JzZXJ2YWJsZS90aHJvd1wiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvY2F0Y2hcIjtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4vYmFja2VuZC5zZXJ2aWNlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2dpblNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxuXG4gIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICBCYWNrZW5kU2VydmljZS5iYXNlVXJsICsgXCJ1c2VyL1wiICsgQmFja2VuZFNlcnZpY2UuYXBwS2V5LFxuICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICBmaXJzdE5hbWU6IHVzZXIuZmlyc3ROYW1lLFxuICAgICAgICBsYXN0TmFtZTogdXNlci5sYXN0TmFtZSxcbiAgICAgICAgdXNlcm5hbWU6IHVzZXIuZW1haWwsXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxuICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZCxcbiAgICAgICAgY2l0eTogdXNlci5jaXR5LFxuICAgICAgICBjb3VudHk6IHVzZXIuY291bnR5LFxuICAgICAgICBzdGF0ZTogdXNlci5zdGF0ZVxuICAgICAgfSksXG4gICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpIH1cbiAgICApXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuXG4gIGxvZ2luKHVzZXI6IFVzZXIpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICBCYWNrZW5kU2VydmljZS5iYXNlVXJsICsgXCJ1c2VyL1wiICsgQmFja2VuZFNlcnZpY2UuYXBwS2V5ICsgXCIvbG9naW5cIixcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlcm5hbWU6IHVzZXIuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXG4gICAgICB9KSxcbiAgICAgIHsgaGVhZGVyczogdGhpcy5nZXRDb21tb25IZWFkZXJzKCkgfVxuICAgIClcbiAgICAubWFwKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAuZG8oZGF0YSA9PiB7XG4gICAgICBCYWNrZW5kU2VydmljZS50b2tlbiA9IGRhdGEuX2ttZC5hdXRodG9rZW47XG4gICAgfSlcbiAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICB9XG5cbiAgbG9nb2ZmKCkge1xuICAgIEJhY2tlbmRTZXJ2aWNlLnRva2VuID0gXCJcIjtcbiAgfVxuXG4gIHJlc2V0UGFzc3dvcmQoZW1haWwpIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICBCYWNrZW5kU2VydmljZS5iYXNlVXJsICsgXCJycGMvXCIgKyBCYWNrZW5kU2VydmljZS5hcHBLZXkgKyBcIi9cIiArIGVtYWlsICsgXCIvdXNlci1wYXNzd29yZC1yZXNldC1pbml0aWF0ZVwiLFxuICAgICAge30sXG4gICAgICB7IGhlYWRlcnM6IHRoaXMuZ2V0Q29tbW9uSGVhZGVycygpIH1cbiAgICApLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29tbW9uSGVhZGVycygpIHtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQXV0aG9yaXphdGlvblwiLCBCYWNrZW5kU2VydmljZS5hcHBVc2VySGVhZGVyKTtcbiAgICByZXR1cm4gaGVhZGVycztcbiAgfVxuXG4gIGhhbmRsZUVycm9ycyhlcnJvcjogUmVzcG9uc2UpIHtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gIH1cbn1cbiJdfQ==