"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var color_1 = require("color");
var connectivity_1 = require("connectivity");
var animation_1 = require("ui/animation");
var dialogs_1 = require("ui/dialogs");
var page_1 = require("ui/page");
var shared_1 = require("../shared");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        this.isAuthenticating = false;
        this.user = new shared_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    LoginComponent.prototype.submit = function () {
        if (!this.user.isValidEmail()) {
            shared_1.alert("Enter a valid email address.");
            return;
        }
        this.isAuthenticating = true;
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (connectivity_1.getConnectionType() === connectivity_1.connectionType.none) {
            shared_1.alert("Groceries requires an internet connection to log in.");
            return;
        }
        this.userService.login(this.user)
            .subscribe(function () {
            _this.isAuthenticating = false;
            _this.router.navigate(["/"]);
        }, function (error) {
            shared_1.alert("Unfortunately we could not find your account.");
            _this.isAuthenticating = false;
        });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        if (connectivity_1.getConnectionType() === connectivity_1.connectionType.none) {
            shared_1.alert("Groceries requires an internet connection to register.");
            return;
        }
        this.userService.register(this.user)
            .subscribe(function () {
            shared_1.alert("Your account was successfully created.");
            _this.isAuthenticating = false;
            _this.toggleDisplay();
        }, function (message) {
            // TODO: Verify this works
            if (message.match(/same user/)) {
                shared_1.alert("This email address is already in use.");
            }
            else {
                shared_1.alert("Unfortunately we were unable to create your account.");
            }
            _this.isAuthenticating = false;
        });
    };
    LoginComponent.prototype.forgotPassword = function () {
        var _this = this;
        dialogs_1.prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register for Groceries to reset your password.",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then(function (data) {
            if (data.result) {
                _this.userService.resetPassword(data.text.trim())
                    .subscribe(function () {
                    shared_1.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
                }, function () {
                    shared_1.alert("Unfortunately, an error occurred resetting your password.");
                });
            }
        });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        var mainContainer = this.mainContainer.nativeElement;
        mainContainer.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#301217"),
            duration: 200
        });
    };
    LoginComponent.prototype.startBackgroundAnimation = function (background) {
        background.animate({
            scale: { x: 1.0, y: 1.0 },
            duration: 10000
        });
    };
    LoginComponent.prototype.showMainContent = function () {
        var initialContainer = this.initialContainer.nativeElement;
        var mainContainer = this.mainContainer.nativeElement;
        var logoContainer = this.logoContainer.nativeElement;
        var formControls = this.formControls.nativeElement;
        var signUpStack = this.signUpStack.nativeElement;
        var animations = [];
        // Fade out the initial content over one half second
        initialContainer.animate({
            opacity: 0,
            duration: 500
        }).then(function () {
            // After the animation completes, hide the initial container and
            // show the main container and logo. The main container and logo will
            // not immediately appear because their opacity is set to 0 in CSS.
            initialContainer.style.visibility = "collapse";
            mainContainer.style.visibility = "visible";
            logoContainer.style.visibility = "visible";
            // Fade in the main container and logo over one half second.
            animations.push({ target: mainContainer, opacity: 1, duration: 500 });
            animations.push({ target: logoContainer, opacity: 1, duration: 500 });
            // Slide up the form controls and sign up container.
            animations.push({ target: signUpStack, translate: { x: 0, y: 0 }, opacity: 1, delay: 500, duration: 150 });
            animations.push({ target: formControls, translate: { x: 0, y: 0 }, opacity: 1, delay: 650, duration: 150 });
            // Kick off the animation queue
            new animation_1.Animation(animations, false).play();
        });
    };
    __decorate([
        core_1.ViewChild("initialContainer"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "initialContainer", void 0);
    __decorate([
        core_1.ViewChild("mainContainer"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "mainContainer", void 0);
    __decorate([
        core_1.ViewChild("logoContainer"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "logoContainer", void 0);
    __decorate([
        core_1.ViewChild("formControls"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "formControls", void 0);
    __decorate([
        core_1.ViewChild("signUpStack"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "signUpStack", void 0);
    __decorate([
        core_1.ViewChild("password"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "password", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "gr-login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
            styleUrls: ["./login-common.css", "./login.component.css"],
        }),
        __metadata("design:paramtypes", [router_1.Router,
            shared_1.LoginService,
            page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUN6QywrQkFBOEI7QUFDOUIsNkNBQWlFO0FBQ2pFLDBDQUF5QztBQUV6QyxzQ0FBb0M7QUFDcEMsZ0NBQStCO0FBRy9CLG9DQUFzRDtBQVF0RDtJQVlFLHdCQUFvQixNQUFjLEVBQ3hCLFdBQXlCLEVBQ3pCLElBQVU7UUFGQSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFjO1FBQ3pCLFNBQUksR0FBSixJQUFJLENBQU07UUFacEIsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFDbkIscUJBQWdCLEdBQUcsS0FBSyxDQUFDO1FBWXZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxhQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCwrQkFBTSxHQUFOO1FBQ0UsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM5QixjQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUM7UUFDVCxDQUFDO1FBRUQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM3QixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFD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QUF0QixnQkFBUyxDQUFDLFVBQVUsQ0FBQztrQ0FBVyxpQkFBVTtvREFBQztJQVZqQyxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSx1QkFBdUIsQ0FBQztTQUMzRCxDQUFDO3lDQWE0QixlQUFNO1lBQ1gscUJBQVk7WUFDbkIsV0FBSTtPQWRULGNBQWMsQ0F1SjFCO0lBQUQscUJBQUM7Q0FBQSxBQXZKRCxJQXVKQztBQXZKWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwiY29sb3JcIjtcbmltcG9ydCB7IGNvbm5lY3Rpb25UeXBlLCBnZXRDb25uZWN0aW9uVHlwZSB9IGZyb20gXCJjb25uZWN0aXZpdHlcIjtcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJ1aS9hbmltYXRpb25cIjtcbmltcG9ydCB7IFZpZXcgfSBmcm9tIFwidWkvY29yZS92aWV3XCI7XG5pbXBvcnQgeyBwcm9tcHQgfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuXG5pbXBvcnQgeyBhbGVydCwgTG9naW5TZXJ2aWNlLCBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZFwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZ3ItbG9naW5cIixcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vbG9naW4tY29tbW9uLmNzc1wiLCBcIi4vbG9naW4uY29tcG9uZW50LmNzc1wiXSxcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICB1c2VyOiBVc2VyO1xuICBpc0xvZ2dpbmdJbiA9IHRydWU7XG4gIGlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKFwiaW5pdGlhbENvbnRhaW5lclwiKSBpbml0aWFsQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwibWFpbkNvbnRhaW5lclwiKSBtYWluQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwibG9nb0NvbnRhaW5lclwiKSBsb2dvQ29udGFpbmVyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwiZm9ybUNvbnRyb2xzXCIpIGZvcm1Db250cm9sczogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZChcInNpZ25VcFN0YWNrXCIpIHNpZ25VcFN0YWNrOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKFwicGFzc3dvcmRcIikgcGFzc3dvcmQ6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBMb2dpblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICB9XG5cbiAgZm9jdXNQYXNzd29yZCgpIHtcbiAgICB0aGlzLnBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIHN1Ym1pdCgpIHtcbiAgICBpZiAoIXRoaXMudXNlci5pc1ZhbGlkRW1haWwoKSkge1xuICAgICAgYWxlcnQoXCJFbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IHRydWU7XG4gICAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgIHRoaXMubG9naW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaWduVXAoKTtcbiAgICB9XG4gIH1cblxuICBsb2dpbigpIHtcbiAgICBpZiAoZ2V0Q29ubmVjdGlvblR5cGUoKSA9PT0gY29ubmVjdGlvblR5cGUubm9uZSkge1xuICAgICAgYWxlcnQoXCJHcm9jZXJpZXMgcmVxdWlyZXMgYW4gaW50ZXJuZXQgY29ubmVjdGlvbiB0byBsb2cgaW4uXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKVxuICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9cIl0pO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2UgY291bGQgbm90IGZpbmQgeW91ciBhY2NvdW50LlwiKTtcbiAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIHNpZ25VcCgpIHtcbiAgICBpZiAoZ2V0Q29ubmVjdGlvblR5cGUoKSA9PT0gY29ubmVjdGlvblR5cGUubm9uZSkge1xuICAgICAgYWxlcnQoXCJHcm9jZXJpZXMgcmVxdWlyZXMgYW4gaW50ZXJuZXQgY29ubmVjdGlvbiB0byByZWdpc3Rlci5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgYWxlcnQoXCJZb3VyIGFjY291bnQgd2FzIHN1Y2Nlc3NmdWxseSBjcmVhdGVkLlwiKTtcbiAgICAgICAgICB0aGlzLmlzQXV0aGVudGljYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKTtcbiAgICAgICAgfSxcbiAgICAgICAgKG1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAvLyBUT0RPOiBWZXJpZnkgdGhpcyB3b3Jrc1xuICAgICAgICAgIGlmIChtZXNzYWdlLm1hdGNoKC9zYW1lIHVzZXIvKSkge1xuICAgICAgICAgICAgYWxlcnQoXCJUaGlzIGVtYWlsIGFkZHJlc3MgaXMgYWxyZWFkeSBpbiB1c2UuXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIlVuZm9ydHVuYXRlbHkgd2Ugd2VyZSB1bmFibGUgdG8gY3JlYXRlIHlvdXIgYWNjb3VudC5cIik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuaXNBdXRoZW50aWNhdGluZyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICApO1xuICB9XG5cbiAgZm9yZ290UGFzc3dvcmQoKSB7XG4gICAgcHJvbXB0KHtcbiAgICAgIHRpdGxlOiBcIkZvcmdvdCBQYXNzd29yZFwiLFxuICAgICAgbWVzc2FnZTogXCJFbnRlciB0aGUgZW1haWwgYWRkcmVzcyB5b3UgdXNlZCB0byByZWdpc3RlciBmb3IgR3JvY2VyaWVzIHRvIHJlc2V0IHlvdXIgcGFzc3dvcmQuXCIsXG4gICAgICBkZWZhdWx0VGV4dDogXCJcIixcbiAgICAgIG9rQnV0dG9uVGV4dDogXCJPa1wiLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJDYW5jZWxcIlxuICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChkYXRhLnJlc3VsdCkge1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlc2V0UGFzc3dvcmQoZGF0YS50ZXh0LnRyaW0oKSlcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KFwiWW91ciBwYXNzd29yZCB3YXMgc3VjY2Vzc2Z1bGx5IHJlc2V0LiBQbGVhc2UgY2hlY2sgeW91ciBlbWFpbCBmb3IgaW5zdHJ1Y3Rpb25zIG9uIGNob29zaW5nIGEgbmV3IHBhc3N3b3JkLlwiKTtcbiAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICBhbGVydChcIlVuZm9ydHVuYXRlbHksIGFuIGVycm9yIG9jY3VycmVkIHJlc2V0dGluZyB5b3VyIHBhc3N3b3JkLlwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHRvZ2dsZURpc3BsYXkoKSB7XG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICAgIGxldCBtYWluQ29udGFpbmVyID0gPFZpZXc+dGhpcy5tYWluQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbWFpbkNvbnRhaW5lci5hbmltYXRlKHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5pc0xvZ2dpbmdJbiA/IG5ldyBDb2xvcihcIndoaXRlXCIpIDogbmV3IENvbG9yKFwiIzMwMTIxN1wiKSxcbiAgICAgIGR1cmF0aW9uOiAyMDBcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXJ0QmFja2dyb3VuZEFuaW1hdGlvbihiYWNrZ3JvdW5kKSB7XG4gICAgYmFja2dyb3VuZC5hbmltYXRlKHtcbiAgICAgIHNjYWxlOiB7IHg6IDEuMCwgeTogMS4wIH0sXG4gICAgICBkdXJhdGlvbjogMTAwMDBcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dNYWluQ29udGVudCgpIHtcbiAgICBsZXQgaW5pdGlhbENvbnRhaW5lciA9IDxWaWV3PnRoaXMuaW5pdGlhbENvbnRhaW5lci5uYXRpdmVFbGVtZW50O1xuICAgIGxldCBtYWluQ29udGFpbmVyID0gPFZpZXc+dGhpcy5tYWluQ29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGV0IGxvZ29Db250YWluZXIgPSA8Vmlldz50aGlzLmxvZ29Db250YWluZXIubmF0aXZlRWxlbWVudDtcbiAgICBsZXQgZm9ybUNvbnRyb2xzID0gPFZpZXc+dGhpcy5mb3JtQ29udHJvbHMubmF0aXZlRWxlbWVudDtcbiAgICBsZXQgc2lnblVwU3RhY2sgPSA8Vmlldz50aGlzLnNpZ25VcFN0YWNrLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGV0IGFuaW1hdGlvbnMgPSBbXTtcblxuICAgIC8vIEZhZGUgb3V0IHRoZSBpbml0aWFsIGNvbnRlbnQgb3ZlciBvbmUgaGFsZiBzZWNvbmRcbiAgICBpbml0aWFsQ29udGFpbmVyLmFuaW1hdGUoe1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICB9KS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgLy8gQWZ0ZXIgdGhlIGFuaW1hdGlvbiBjb21wbGV0ZXMsIGhpZGUgdGhlIGluaXRpYWwgY29udGFpbmVyIGFuZFxuICAgICAgLy8gc2hvdyB0aGUgbWFpbiBjb250YWluZXIgYW5kIGxvZ28uIFRoZSBtYWluIGNvbnRhaW5lciBhbmQgbG9nbyB3aWxsXG4gICAgICAvLyBub3QgaW1tZWRpYXRlbHkgYXBwZWFyIGJlY2F1c2UgdGhlaXIgb3BhY2l0eSBpcyBzZXQgdG8gMCBpbiBDU1MuXG4gICAgICBpbml0aWFsQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcImNvbGxhcHNlXCI7XG4gICAgICBtYWluQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgICAgIGxvZ29Db250YWluZXIuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuXG4gICAgICAvLyBGYWRlIGluIHRoZSBtYWluIGNvbnRhaW5lciBhbmQgbG9nbyBvdmVyIG9uZSBoYWxmIHNlY29uZC5cbiAgICAgIGFuaW1hdGlvbnMucHVzaCh7IHRhcmdldDogbWFpbkNvbnRhaW5lciwgb3BhY2l0eTogMSwgZHVyYXRpb246IDUwMCB9KTtcbiAgICAgIGFuaW1hdGlvbnMucHVzaCh7IHRhcmdldDogbG9nb0NvbnRhaW5lciwgb3BhY2l0eTogMSwgZHVyYXRpb246IDUwMCB9KTtcblxuICAgICAgLy8gU2xpZGUgdXAgdGhlIGZvcm0gY29udHJvbHMgYW5kIHNpZ24gdXAgY29udGFpbmVyLlxuICAgICAgYW5pbWF0aW9ucy5wdXNoKHsgdGFyZ2V0OiBzaWduVXBTdGFjaywgdHJhbnNsYXRlOiB7IHg6IDAsIHk6IDAgfSwgb3BhY2l0eTogMSwgZGVsYXk6IDUwMCwgZHVyYXRpb246IDE1MCB9KTtcbiAgICAgIGFuaW1hdGlvbnMucHVzaCh7IHRhcmdldDogZm9ybUNvbnRyb2xzLCB0cmFuc2xhdGU6IHsgeDogMCwgeTogMCB9LCBvcGFjaXR5OiAxLCBkZWxheTogNjUwLCBkdXJhdGlvbjogMTUwIH0pO1xuXG4gICAgICAvLyBLaWNrIG9mZiB0aGUgYW5pbWF0aW9uIHF1ZXVlXG4gICAgICBuZXcgQW5pbWF0aW9uKGFuaW1hdGlvbnMsIGZhbHNlKS5wbGF5KCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==