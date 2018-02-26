"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_settings_1 = require("application-settings");
var tokenKey = "token";
var BackendService = /** @class */ (function () {
    function BackendService() {
    }
    BackendService.isLoggedIn = function () {
        return !!application_settings_1.getString("token");
    };
    Object.defineProperty(BackendService, "token", {
        get: function () {
            return application_settings_1.getString("token");
        },
        set: function (theToken) {
            application_settings_1.setString("token", theToken);
        },
        enumerable: true,
        configurable: true
    });
    BackendService.baseUrl = "https://baas.kinvey.com/";
    BackendService.appKey = "kid_Sk2j8rawz";
    BackendService.appUserHeader = "Basic a2lkX1NrMmo4cmF3ejo1ZDM2YzE0ODE2MWU0NWNlOTNmN2QwNjlkNzViM2E3OA==";
    BackendService.apiUrl = "";
    return BackendService;
}());
exports.BackendService = BackendService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2VuZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYmFja2VuZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsNkRBQTREO0FBRTVELElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQztBQUV6QjtJQUFBO0lBaUJBLENBQUM7SUFYUSx5QkFBVSxHQUFqQjtRQUNFLE1BQU0sQ0FBQyxDQUFDLENBQUMsZ0NBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBRUQsc0JBQVcsdUJBQUs7YUFBaEI7WUFDRSxNQUFNLENBQUMsZ0NBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixDQUFDO2FBRUQsVUFBaUIsUUFBZ0I7WUFDL0IsZ0NBQVMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDL0IsQ0FBQzs7O09BSkE7SUFYTSxzQkFBTyxHQUFHLDBCQUEwQixDQUFDO0lBQ3JDLHFCQUFNLEdBQUcsZUFBZSxDQUFDO0lBQ3pCLDRCQUFhLEdBQUcsd0VBQXdFLENBQUM7SUFDekYscUJBQU0sR0FBRyxFQUFFLENBQUM7SUFhckIscUJBQUM7Q0FBQSxBQWpCRCxJQWlCQztBQWpCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgZ2V0U3RyaW5nLCBzZXRTdHJpbmcgfSBmcm9tIFwiYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcblxuY29uc3QgdG9rZW5LZXkgPSBcInRva2VuXCI7XG5cbmV4cG9ydCBjbGFzcyBCYWNrZW5kU2VydmljZSB7XG4gIHN0YXRpYyBiYXNlVXJsID0gXCJodHRwczovL2JhYXMua2ludmV5LmNvbS9cIjtcbiAgc3RhdGljIGFwcEtleSA9IFwia2lkX1NrMmo4cmF3elwiO1xuICBzdGF0aWMgYXBwVXNlckhlYWRlciA9IFwiQmFzaWMgYTJsa1gxTnJNbW80Y21GM2VqbzFaRE0yWXpFME9ERTJNV1UwTldObE9UTm1OMlF3Tmpsa056VmlNMkUzT0E9PVwiO1xuICBzdGF0aWMgYXBpVXJsID0gXCJcIjtcblxuICBzdGF0aWMgaXNMb2dnZWRJbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISFnZXRTdHJpbmcoXCJ0b2tlblwiKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdG9rZW4oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0U3RyaW5nKFwidG9rZW5cIik7XG4gIH1cblxuICBzdGF0aWMgc2V0IHRva2VuKHRoZVRva2VuOiBzdHJpbmcpIHtcbiAgICBzZXRTdHJpbmcoXCJ0b2tlblwiLCB0aGVUb2tlbik7XG4gIH1cbn1cbiJdfQ==