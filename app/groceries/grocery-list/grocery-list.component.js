"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils = require("utils/utils");
var shared_1 = require("../shared");
var shared_2 = require("../../shared");
var GroceryListComponent = /** @class */ (function () {
    function GroceryListComponent(store) {
        this.loading = new core_1.EventEmitter();
        this.loaded = new core_1.EventEmitter();
        this.listLoaded = false;
        this.store = store;
    }
    GroceryListComponent.prototype.load = function () {
        var _this = this;
        this.loading.next("");
        this.store.load()
            .subscribe(function () {
            _this.loaded.next("");
            _this.listLoaded = true;
        }, function () {
            shared_2.alert("An error occurred loading your grocery list.");
        });
    };
    // The following trick makes the background color of each cell
    // in the UITableView transparent as it’s created.
    GroceryListComponent.prototype.makeBackgroundTransparent = function (args) {
        var cell = args.ios;
        if (cell) {
            // support XCode 8
            cell.backgroundColor = utils.ios.getter(UIColor, UIColor.clearColor);
        }
    };
    GroceryListComponent.prototype.imageSource = function (grocery) {
        if (grocery.deleted) {
            return "res://add";
        }
        return grocery.done ? "res://checked" : "res://unchecked";
    };
    GroceryListComponent.prototype.toggleDone = function (grocery) {
        if (grocery.deleted) {
            this.store.unsetDeleteFlag(grocery)
                .subscribe(function () { }, function () {
                shared_2.alert("An error occurred managing your grocery list.");
            });
        }
        else {
            this.store.toggleDoneFlag(grocery)
                .subscribe(function () { }, function () {
                shared_2.alert("An error occurred managing your grocery list.");
            });
        }
    };
    GroceryListComponent.prototype.delete = function (grocery) {
        var _this = this;
        this.loading.next("");
        var successHandler = function () { return _this.loaded.next(""); };
        var errorHandler = function () {
            shared_2.alert("An error occurred while deleting an item from your list.");
            _this.loaded.next("");
        };
        if (grocery.deleted) {
            this.store.permanentlyDelete(grocery)
                .subscribe(successHandler, errorHandler);
        }
        else {
            this.store.setDeleteFlag(grocery)
                .subscribe(successHandler, errorHandler);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], GroceryListComponent.prototype, "showDeleted", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GroceryListComponent.prototype, "row", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], GroceryListComponent.prototype, "loading", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], GroceryListComponent.prototype, "loaded", void 0);
    GroceryListComponent = __decorate([
        core_1.Component({
            selector: "gr-grocery-list",
            moduleId: module.id,
            templateUrl: "./grocery-list.component.html",
            styleUrls: ["./grocery-list.component.css"],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [shared_1.GroceryService])
    ], GroceryListComponent);
    return GroceryListComponent;
}());
exports.GroceryListComponent = GroceryListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyb2NlcnktbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0c7QUFDaEcsbUNBQXFDO0FBRXJDLG9DQUFvRDtBQUNwRCx1Q0FBcUM7QUFXckM7SUFTRSw4QkFBWSxLQUFxQjtRQU52QixZQUFPLEdBQUcsSUFBSSxtQkFBWSxFQUFFLENBQUM7UUFDN0IsV0FBTSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFDO1FBR3RDLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFHZixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBRUQsbUNBQUksR0FBSjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUU7YUFDZCxTQUFTLENBQ1I7WUFDRSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNyQixLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUN6QixDQUFDLEVBQ0Q7WUFDRSxjQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztRQUN4RCxDQUFDLENBQ0YsQ0FBQztJQUNOLENBQUM7SUFFRCw4REFBOEQ7SUFDOUQsa0RBQWtEO0lBQ2xELHdEQUF5QixHQUF6QixVQUEwQixJQUFJO1FBQzVCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDcEIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNULGtCQUFrQjtZQUNsQixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkUsQ0FBQztJQUNILENBQUM7SUFFRCwwQ0FBVyxHQUFYLFVBQVksT0FBTztRQUNqQixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDO1FBQ3JCLENBQUM7UUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztJQUM1RCxDQUFDO0lBRUQseUNBQVUsR0FBVixVQUFXLE9BQWdCO1FBQ3pCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQztpQkFDaEMsU0FBUyxDQUNSLGNBQVEsQ0FBQyxFQUNUO2dCQUNFLGNBQUssQ0FBQywrQ0FBK0MsQ0FBQyxDQUFDO1lBQ3pELENBQUMsQ0FDRixDQUFDO1FBQ04sQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO2lCQUMvQixTQUFTLENBQ1IsY0FBUSxDQUFDLEVBQ1Q7Z0JBQ0UsY0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7WUFDekQsQ0FBQyxDQUNGLENBQUM7UUFDTixDQUFDO0lBQ0gsQ0FBQztJQUVELHFDQUFNLEdBQU4sVUFBTyxPQUFnQjtRQUF2QixpQkFlQztRQWRDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLElBQUksY0FBYyxHQUFHLGNBQU0sT0FBQSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQztRQUNoRCxJQUFJLFlBQVksR0FBRztZQUNqQixjQUFLLENBQUMsMERBQTBELENBQUMsQ0FBQztZQUNsRSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUM7UUFFRixFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQztpQkFDbEMsU0FBUyxDQUFDLGNBQWMsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7aUJBQzlCLFNBQVMsQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDN0MsQ0FBQztJQUNILENBQUM7SUE5RVE7UUFBUixZQUFLLEVBQUU7OzZEQUFzQjtJQUNyQjtRQUFSLFlBQUssRUFBRTs7cURBQUs7SUFDSDtRQUFULGFBQU0sRUFBRTs7eURBQThCO0lBQzdCO1FBQVQsYUFBTSxFQUFFOzt3REFBNkI7SUFKM0Isb0JBQW9CO1FBUGhDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsK0JBQStCO1lBQzVDLFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO1lBQzNDLGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7eUNBVW1CLHVCQUFjO09BVHRCLG9CQUFvQixDQWdGaEM7SUFBRCwyQkFBQztDQUFBLEFBaEZELElBZ0ZDO0FBaEZZLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcblxuaW1wb3J0IHsgR3JvY2VyeSwgR3JvY2VyeVNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkXCI7XG5pbXBvcnQgeyBhbGVydCB9IGZyb20gXCIuLi8uLi9zaGFyZWRcIjtcblxuZGVjbGFyZSB2YXIgVUlDb2xvcjogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiZ3ItZ3JvY2VyeS1saXN0XCIsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiBcIi4vZ3JvY2VyeS1saXN0LmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9ncm9jZXJ5LWxpc3QuY29tcG9uZW50LmNzc1wiXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgR3JvY2VyeUxpc3RDb21wb25lbnQge1xuICBASW5wdXQoKSBzaG93RGVsZXRlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgcm93O1xuICBAT3V0cHV0KCkgbG9hZGluZyA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBwdWJsaWMgc3RvcmU6IEdyb2NlcnlTZXJ2aWNlO1xuICBsaXN0TG9hZGVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3Ioc3RvcmU6IEdyb2NlcnlTZXJ2aWNlKSB7XG4gICAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gIH1cblxuICBsb2FkKCkge1xuICAgIHRoaXMubG9hZGluZy5uZXh0KFwiXCIpO1xuICAgIHRoaXMuc3RvcmUubG9hZCgpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5sb2FkZWQubmV4dChcIlwiKTtcbiAgICAgICAgICB0aGlzLmxpc3RMb2FkZWQgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCBsb2FkaW5nIHlvdXIgZ3JvY2VyeSBsaXN0LlwiKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgfVxuXG4gIC8vIFRoZSBmb2xsb3dpbmcgdHJpY2sgbWFrZXMgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgZWFjaCBjZWxsXG4gIC8vIGluIHRoZSBVSVRhYmxlVmlldyB0cmFuc3BhcmVudCBhcyBpdOKAmXMgY3JlYXRlZC5cbiAgbWFrZUJhY2tncm91bmRUcmFuc3BhcmVudChhcmdzKSB7XG4gICAgbGV0IGNlbGwgPSBhcmdzLmlvcztcbiAgICBpZiAoY2VsbCkge1xuICAgICAgLy8gc3VwcG9ydCBYQ29kZSA4XG4gICAgICBjZWxsLmJhY2tncm91bmRDb2xvciA9IHV0aWxzLmlvcy5nZXR0ZXIoVUlDb2xvciwgVUlDb2xvci5jbGVhckNvbG9yKTtcbiAgICB9XG4gIH1cblxuICBpbWFnZVNvdXJjZShncm9jZXJ5KSB7XG4gICAgaWYgKGdyb2NlcnkuZGVsZXRlZCkge1xuICAgICAgcmV0dXJuIFwicmVzOi8vYWRkXCI7XG4gICAgfVxuICAgIHJldHVybiBncm9jZXJ5LmRvbmUgPyBcInJlczovL2NoZWNrZWRcIiA6IFwicmVzOi8vdW5jaGVja2VkXCI7XG4gIH1cblxuICB0b2dnbGVEb25lKGdyb2Nlcnk6IEdyb2NlcnkpIHtcbiAgICBpZiAoZ3JvY2VyeS5kZWxldGVkKSB7XG4gICAgICB0aGlzLnN0b3JlLnVuc2V0RGVsZXRlRmxhZyhncm9jZXJ5KVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgICgpID0+IHsgfSxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBhbGVydChcIkFuIGVycm9yIG9jY3VycmVkIG1hbmFnaW5nIHlvdXIgZ3JvY2VyeSBsaXN0LlwiKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc3RvcmUudG9nZ2xlRG9uZUZsYWcoZ3JvY2VyeSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAoKSA9PiB7IH0sXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCBtYW5hZ2luZyB5b3VyIGdyb2NlcnkgbGlzdC5cIik7XG4gICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZShncm9jZXJ5OiBHcm9jZXJ5KSB7XG4gICAgdGhpcy5sb2FkaW5nLm5leHQoXCJcIik7XG4gICAgbGV0IHN1Y2Nlc3NIYW5kbGVyID0gKCkgPT4gdGhpcy5sb2FkZWQubmV4dChcIlwiKTtcbiAgICBsZXQgZXJyb3JIYW5kbGVyID0gKCkgPT4ge1xuICAgICAgYWxlcnQoXCJBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBkZWxldGluZyBhbiBpdGVtIGZyb20geW91ciBsaXN0LlwiKTtcbiAgICAgIHRoaXMubG9hZGVkLm5leHQoXCJcIik7XG4gICAgfTtcblxuICAgIGlmIChncm9jZXJ5LmRlbGV0ZWQpIHtcbiAgICAgIHRoaXMuc3RvcmUucGVybWFuZW50bHlEZWxldGUoZ3JvY2VyeSlcbiAgICAgICAgLnN1YnNjcmliZShzdWNjZXNzSGFuZGxlciwgZXJyb3JIYW5kbGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdG9yZS5zZXREZWxldGVGbGFnKGdyb2NlcnkpXG4gICAgICAgIC5zdWJzY3JpYmUoc3VjY2Vzc0hhbmRsZXIsIGVycm9ySGFuZGxlcik7XG4gICAgfVxuICB9XG59XG5cbiJdfQ==