"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var core_1 = require("@angular/core");
var groceries_routing_1 = require("./groceries.routing");
var groceries_component_1 = require("./groceries.component");
var grocery_list_component_1 = require("./grocery-list/grocery-list.component");
var item_status_pipe_1 = require("./grocery-list/item-status.pipe");
var GroceriesModule = /** @class */ (function () {
    function GroceriesModule() {
    }
    GroceriesModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                forms_1.NativeScriptFormsModule,
                groceries_routing_1.groceriesRouting
            ],
            declarations: [
                groceries_component_1.GroceriesComponent,
                grocery_list_component_1.GroceryListComponent,
                item_status_pipe_1.ItemStatusPipe
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], GroceriesModule);
    return GroceriesModule;
}());
exports.GroceriesModule = GroceriesModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyaWVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyb2Nlcmllcy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRkFBOEU7QUFDOUUsb0RBQXFFO0FBQ3JFLHNDQUEyRDtBQUMzRCx5REFBdUQ7QUFDdkQsNkRBQTJEO0FBQzNELGdGQUE2RTtBQUM3RSxvRUFBaUU7QUFlakU7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGVBQWU7UUFiM0IsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLHdDQUFrQjtnQkFDbEIsK0JBQXVCO2dCQUN2QixvQ0FBZ0I7YUFDakI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osd0NBQWtCO2dCQUNsQiw2Q0FBb0I7Z0JBQ3BCLGlDQUFjO2FBQ2Y7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csZUFBZSxDQUFHO0lBQUQsc0JBQUM7Q0FBQSxBQUEvQixJQUErQjtBQUFsQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgZ3JvY2VyaWVzUm91dGluZyB9IGZyb20gXCIuL2dyb2Nlcmllcy5yb3V0aW5nXCI7XG5pbXBvcnQgeyBHcm9jZXJpZXNDb21wb25lbnQgfSBmcm9tIFwiLi9ncm9jZXJpZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBHcm9jZXJ5TGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2dyb2NlcnktbGlzdC9ncm9jZXJ5LWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtU3RhdHVzUGlwZSB9IGZyb20gXCIuL2dyb2NlcnktbGlzdC9pdGVtLXN0YXR1cy5waXBlXCI7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgZ3JvY2VyaWVzUm91dGluZ1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBHcm9jZXJpZXNDb21wb25lbnQsXG4gICAgR3JvY2VyeUxpc3RDb21wb25lbnQsXG4gICAgSXRlbVN0YXR1c1BpcGVcbiAgXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIEdyb2Nlcmllc01vZHVsZSB7fVxuIl19