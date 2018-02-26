"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_dev_appium_1 = require("nativescript-dev-appium");
var parser_1 = require("nativescript-dev-appium/lib/parser");
var chai_1 = require("chai");
var isSauceRun = parser_1.isSauceLab;
var isAndroid = parser_1.runType.includes("android");
describe("Groceries", function () {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        var driver, loginButtonText, email, password, fruit, recentButtonText, doneButtonText, logOffButtonText, invalidEmail, invalidEmailWarningText, okButtonText, cancelButtonText, signUpHereButtonText, signUpButtonText, backToLoginButtonText, forgotPasswordButtonText, forgotPasswordFormText;
        return __generator(this, function (_a) {
            loginButtonText = "Login";
            email = "groceries@mailinator.com";
            password = "123";
            fruit = "apple";
            recentButtonText = "Recent";
            doneButtonText = "Done";
            logOffButtonText = "Log Off";
            invalidEmail = "groceries@mailinator";
            invalidEmailWarningText = "valid email";
            okButtonText = "OK";
            cancelButtonText = "Cancel";
            signUpHereButtonText = "Sign up here";
            signUpButtonText = "Sign up";
            backToLoginButtonText = "Back to login";
            forgotPasswordButtonText = "Forgot";
            forgotPasswordFormText = "reset";
            before(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, nativescript_dev_appium_1.createDriver()];
                        case 1:
                            driver = _a.sent();
                            driver.defaultWaitTime = 15000;
                            return [2 /*return*/];
                    }
                });
            }); });
            after(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (isSauceRun) {
                                driver.sessionId().then(function (sessionId) {
                                    console.log("Report: https://saucelabs.com/beta/tests/" + sessionId);
                                });
                            }
                            return [4 /*yield*/, driver.quit()];
                        case 1:
                            _a.sent();
                            console.log("Driver quits!");
                            return [2 /*return*/];
                    }
                });
            }); });
            it("should log in", function () { return __awaiter(_this, void 0, void 0, function () {
                var loginButton, allFields, usernameField, passField, done, loginBtn, recentButton;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, driver.findElementByText(loginButtonText, 0 /* exact */)];
                        case 1:
                            loginButton = _a.sent();
                            return [4 /*yield*/, loginButton.click()];
                        case 2:
                            _a.sent();
                            if (!isAndroid) return [3 /*break*/, 8];
                            return [4 /*yield*/, driver.findElementsByClassName(driver.locators.getElementByName("textfield"))];
                        case 3:
                            allFields = _a.sent();
                            return [4 /*yield*/, allFields[0].sendKeys(email)];
                        case 4:
                            _a.sent();
                            return [4 /*yield*/, allFields[1].sendKeys(password)];
                        case 5:
                            _a.sent();
                            if (!parser_1.isSauceLab) return [3 /*break*/, 7];
                            return [4 /*yield*/, driver.driver.hideDeviceKeyboard("Done")];
                        case 6:
                            _a.sent();
                            _a.label = 7;
                        case 7: return [3 /*break*/, 15];
                        case 8: return [4 /*yield*/, driver.findElementByClassName(driver.locators.getElementByName("textfield"))];
                        case 9:
                            usernameField = _a.sent();
                            return [4 /*yield*/, usernameField.sendKeys(email)];
                        case 10:
                            _a.sent();
                            return [4 /*yield*/, driver.findElementByClassName(driver.locators.getElementByName("securetextfield"))];
                        case 11:
                            passField = _a.sent();
                            return [4 /*yield*/, passField.sendKeys(password)];
                        case 12:
                            _a.sent();
                            return [4 /*yield*/, driver.findElementByText("Done", 1 /* contains */)];
                        case 13:
                            done = _a.sent();
                            return [4 /*yield*/, done.click()];
                        case 14:
                            _a.sent();
                            _a.label = 15;
                        case 15: return [4 /*yield*/, driver.findElementByText(loginButtonText, 0 /* exact */)];
                        case 16:
                            loginBtn = _a.sent();
                            return [4 /*yield*/, loginBtn.click()];
                        case 17:
                            _a.sent();
                            return [4 /*yield*/, driver.findElementByText(recentButtonText, 0 /* exact */)];
                        case 18:
                            recentButton = _a.sent();
                            chai_1.expect(recentButton).to.exist;
                            return [2 /*return*/];
                    }
                });
            }); });
            it("should add element in the list", function () { return __awaiter(_this, void 0, void 0, function () {
                var addField, allImages, appleItem;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, driver.findElementByClassName(driver.locators.getElementByName("textfield"))];
                        case 1:
                            addField = _a.sent();
                            return [4 /*yield*/, addField.sendKeys(fruit)];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, driver.findElementsByClassName(driver.locators.image)];
                        case 3:
                            allImages = _a.sent();
                            return [4 /*yield*/, allImages[1].click()];
                        case 4:
                            _a.sent(); // Cross image button to add the item.
                            return [4 /*yield*/, driver.findElementByText(fruit)];
                        case 5:
                            appleItem = _a.sent();
                            chai_1.expect(appleItem).to.exist;
                            return [2 /*return*/];
                    }
                });
            }); });
            it("should mark element as Done", function () { return __awaiter(_this, void 0, void 0, function () {
                var allImages, appleItem, isItemDone;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!isAndroid) return [3 /*break*/, 3];
                            return [4 /*yield*/, driver.findElementsByClassName(driver.locators.image)];
                        case 1:
                            allImages = _a.sent();
                            return [4 /*yield*/, allImages[2].click()];
                        case 2:
                            _a.sent(); // Checkbox button
                            return [3 /*break*/, 5];
                        case 3: return [4 /*yield*/, driver.clickPoint(26, 160)];
                        case 4:
                            _a.sent(); // Checkbox button
                            _a.label = 5;
                        case 5: return [4 /*yield*/, driver.findElementByText(fruit)];
                        case 6:
                            appleItem = _a.sent();
                            return [4 /*yield*/, driver.compareElement(appleItem, "itemDone", 0.07)];
                        case 7:
                            isItemDone = _a.sent();
                            chai_1.expect(isItemDone).to.be.true;
                            return [2 /*return*/];
                    }
                });
            }); });
            it("should delete item from the list", function () { return __awaiter(_this, void 0, void 0, function () {
                var allImages, appleListItemXpath, appleItem;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!isAndroid) return [3 /*break*/, 3];
                            return [4 /*yield*/, driver.findElementsByClassName(driver.locators.image)];
                        case 1:
                            allImages = _a.sent();
                            return [4 /*yield*/, allImages[3].click()];
                        case 2:
                            _a.sent(); // Bin button
                            return [3 /*break*/, 5];
                        case 3: return [4 /*yield*/, driver.clickPoint(345, 166)];
                        case 4:
                            _a.sent(); // Bin button
                            _a.label = 5;
                        case 5: return [4 /*yield*/, driver.elementHelper.getXPathByText(fruit, 0 /* exact */)];
                        case 6:
                            appleListItemXpath = _a.sent();
                            return [4 /*yield*/, driver.findElementByXPathIfExists(appleListItemXpath, 10000)];
                        case 7:
                            appleItem = _a.sent();
                            chai_1.expect(appleItem).to.be.undefined;
                            return [2 /*return*/];
                    }
                });
            }); });
            it("should find deleted item in Recent", function () { return __awaiter(_this, void 0, void 0, function () {
                var recentButton, appleItem;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, driver.findElementByText(recentButtonText)];
                        case 1:
                            recentButton = _a.sent();
                            return [4 /*yield*/, recentButton.click()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, driver.findElementByText(fruit)];
                        case 3:
                            appleItem = _a.sent();
                            chai_1.expect(appleItem).to.exist;
                            return [2 /*return*/];
                    }
                });
            }); });
            it("should return back an item from the Recent list", function () { return __awaiter(_this, void 0, void 0, function () {
                var allImages, doneButton, appleItem;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!isAndroid) return [3 /*break*/, 3];
                            return [4 /*yield*/, driver.findElementsByClassName(driver.locators.image)];
                        case 1:
                            allImages = _a.sent();
                            return [4 /*yield*/, allImages[2].click()];
                        case 2:
                            _a.sent(); // Cross button
                            return [3 /*break*/, 5];
                        case 3: return [4 /*yield*/, driver.clickPoint(26, 160)];
                        case 4:
                            _a.sent(); // Cross button
                            _a.label = 5;
                        case 5: return [4 /*yield*/, driver.findElementByText(doneButtonText)];
                        case 6:
                            doneButton = _a.sent();
                            return [4 /*yield*/, doneButton.click()];
                        case 7:
                            _a.sent();
                            return [4 /*yield*/, driver.findElementByText(fruit)];
                        case 8:
                            appleItem = _a.sent();
                            chai_1.expect(appleItem).to.exist;
                            return [2 /*return*/];
                    }
                });
            }); });
            it("should delete item from the Groceries list and remove it from Recent", function () { return __awaiter(_this, void 0, void 0, function () {
                var allImages, i, i, recentButton, i, i, appleListItemXpath, appleItem;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!isAndroid) return [3 /*break*/, 6];
                            return [4 /*yield*/, driver.findElementsByClassName(driver.locators.image)];
                        case 1:
                            // First image is the menu, second is the cross button. The rest are pairs checkbox/bin per list item.
                            allImages = _a.sent();
                            i = 3;
                            _a.label = 2;
                        case 2:
                            if (!(i < allImages.length)) return [3 /*break*/, 5];
                            return [4 /*yield*/, allImages[3].click()];
                        case 3:
                            _a.sent(); // Bin button of the first list item
                            _a.label = 4;
                        case 4:
                            i = i + 2;
                            return [3 /*break*/, 2];
                        case 5: return [3 /*break*/, 11];
                        case 6: return [4 /*yield*/, driver.findElementsByText(fruit)];
                        case 7:
                            allImages = _a.sent();
                            i = 0;
                            _a.label = 8;
                        case 8:
                            if (!(i < allImages.length)) return [3 /*break*/, 11];
                            return [4 /*yield*/, driver.clickPoint(345, 166)];
                        case 9:
                            _a.sent(); // Bin button of the first list item
                            _a.label = 10;
                        case 10:
                            i++;
                            return [3 /*break*/, 8];
                        case 11: return [4 /*yield*/, driver.findElementByText(recentButtonText)];
                        case 12:
                            recentButton = _a.sent();
                            return [4 /*yield*/, recentButton.click()];
                        case 13:
                            _a.sent();
                            if (!isAndroid) return [3 /*break*/, 19];
                            return [4 /*yield*/, driver.findElementsByClassName(driver.locators.image)];
                        case 14:
                            allImages = _a.sent();
                            i = 3;
                            _a.label = 15;
                        case 15:
                            if (!(i < allImages.length)) return [3 /*break*/, 18];
                            return [4 /*yield*/, allImages[3].click()];
                        case 16:
                            _a.sent(); // Bin button of the first list item
                            _a.label = 17;
                        case 17:
                            i = i + 2;
                            return [3 /*break*/, 15];
                        case 18: return [3 /*break*/, 24];
                        case 19: return [4 /*yield*/, driver.findElementsByText(fruit)];
                        case 20:
                            allImages = _a.sent();
                            i = 0;
                            _a.label = 21;
                        case 21:
                            if (!(i < allImages.length)) return [3 /*break*/, 24];
                            return [4 /*yield*/, driver.clickPoint(345, 166)];
                        case 22:
                            _a.sent(); // Bin button of the first list item
                            _a.label = 23;
                        case 23:
                            i++;
                            return [3 /*break*/, 21];
                        case 24: return [4 /*yield*/, driver.elementHelper.getXPathByText(fruit, 1 /* contains */)];
                        case 25:
                            appleListItemXpath = _a.sent();
                            return [4 /*yield*/, driver.findElementByXPathIfExists(appleListItemXpath, 10000)];
                        case 26:
                            appleItem = _a.sent();
                            chai_1.expect(appleItem).to.be.undefined;
                            return [2 /*return*/];
                    }
                });
            }); });
            it("should log off", function () { return __awaiter(_this, void 0, void 0, function () {
                var allImages, logOffButton, loginButton;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: 
                        // First image is the menu, second is the clock/cross button. The rest are pairs checkbox/bin per list item.
                        return [4 /*yield*/, driver.driver.sleep(2000)];
                        case 1:
                            // First image is the menu, second is the clock/cross button. The rest are pairs checkbox/bin per list item.
                            _a.sent();
                            return [4 /*yield*/, driver.findElementsByClassName(driver.locators.image)];
                        case 2:
                            allImages = _a.sent();
                            return [4 /*yield*/, allImages[0].click()];
                        case 3:
                            _a.sent(); // Menu button
                            return [4 /*yield*/, driver.findElementByText(logOffButtonText)];
                        case 4:
                            logOffButton = _a.sent();
                            return [4 /*yield*/, logOffButton.click()];
                        case 5:
                            _a.sent();
                            return [4 /*yield*/, driver.findElementByText(loginButtonText, 1 /* contains */)];
                        case 6:
                            loginButton = _a.sent();
                            chai_1.expect(loginButton).to.exist;
                            return [2 /*return*/];
                    }
                });
            }); });
            it("should warn for invalid email", function () { return __awaiter(_this, void 0, void 0, function () {
                var loginButton, usernameField, done, loginBtn, invalidEmailWarning, okButton;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, driver.findElementByText(loginButtonText, 0 /* exact */)];
                        case 1:
                            loginButton = _a.sent();
                            return [4 /*yield*/, loginButton.click()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, driver.findElementByClassName(driver.locators.getElementByName("textfield"))];
                        case 3:
                            usernameField = _a.sent();
                            return [4 /*yield*/, usernameField.sendKeys(invalidEmail)];
                        case 4:
                            _a.sent();
                            if (!isAndroid) return [3 /*break*/, 7];
                            if (!parser_1.isSauceLab) return [3 /*break*/, 6];
                            return [4 /*yield*/, driver.driver.hideDeviceKeyboard("Done")];
                        case 5:
                            _a.sent();
                            _a.label = 6;
                        case 6: return [3 /*break*/, 10];
                        case 7: return [4 /*yield*/, driver.findElementByText("Done", 1 /* contains */)];
                        case 8:
                            done = _a.sent();
                            return [4 /*yield*/, done.click()];
                        case 9:
                            _a.sent();
                            _a.label = 10;
                        case 10: return [4 /*yield*/, driver.findElementByText(loginButtonText, 0 /* exact */)];
                        case 11:
                            loginBtn = _a.sent();
                            return [4 /*yield*/, loginBtn.click()];
                        case 12:
                            _a.sent();
                            return [4 /*yield*/, driver.findElementByText(invalidEmailWarningText, 1 /* contains */)];
                        case 13:
                            invalidEmailWarning = _a.sent();
                            chai_1.expect(invalidEmailWarning).to.exist;
                            return [4 /*yield*/, driver.findElementByText(okButtonText)];
                        case 14:
                            okButton = _a.sent();
                            return [4 /*yield*/, okButton.click()];
                        case 15:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            it("should open sign up form", function () { return __awaiter(_this, void 0, void 0, function () {
                var signUpHereButton, signUpButton, backToLoginButton;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, driver.findElementByText(signUpHereButtonText)];
                        case 1:
                            signUpHereButton = _a.sent();
                            return [4 /*yield*/, signUpHereButton.click()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, driver.findElementByText(signUpButtonText, 0 /* exact */)];
                        case 3:
                            signUpButton = _a.sent();
                            chai_1.expect(signUpButton).to.exist;
                            return [4 /*yield*/, driver.findElementByText(backToLoginButtonText)];
                        case 4:
                            backToLoginButton = _a.sent();
                            return [4 /*yield*/, backToLoginButton.click()];
                        case 5:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            it("should open Forgot password form", function () { return __awaiter(_this, void 0, void 0, function () {
                var forgotPasswordButton, forgotPasswordForm, cancelButton;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, driver.findElementByText(forgotPasswordButtonText, 1 /* contains */)];
                        case 1:
                            forgotPasswordButton = _a.sent();
                            return [4 /*yield*/, forgotPasswordButton.click()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, driver.findElementByText(forgotPasswordFormText, 1 /* contains */)];
                        case 3:
                            forgotPasswordForm = _a.sent();
                            chai_1.expect(forgotPasswordForm).to.exist;
                            return [4 /*yield*/, driver.findElementByText(cancelButtonText)];
                        case 4:
                            cancelButton = _a.sent();
                            return [4 /*yield*/, cancelButton.click()];
                        case 5:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
            return [2 /*return*/];
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyaWVzLmUyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyb2Nlcmllcy5lMmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtRUFBb0Y7QUFDcEYsNkRBQTJGO0FBQzNGLDZCQUE4QjtBQUc5QixJQUFNLFVBQVUsR0FBRyxtQkFBVSxDQUFDO0FBQzlCLElBQU0sU0FBUyxHQUFXLGdCQUFPLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRXRELFFBQVEsQ0FBQyxXQUFXLEVBQUU7Ozs7O1lBRVosZUFBZSxHQUFHLE9BQU8sQ0FBQztZQUMxQixLQUFLLEdBQUcsMEJBQTBCLENBQUM7WUFDbkMsUUFBUSxHQUFHLEtBQUssQ0FBQztZQUNqQixLQUFLLEdBQUcsT0FBTyxDQUFDO1lBQ2hCLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztZQUM1QixjQUFjLEdBQUcsTUFBTSxDQUFDO1lBQ3hCLGdCQUFnQixHQUFHLFNBQVMsQ0FBQztZQUM3QixZQUFZLEdBQUcsc0JBQXNCLENBQUM7WUFDdEMsdUJBQXVCLEdBQUcsYUFBYSxDQUFDO1lBQ3hDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDcEIsZ0JBQWdCLEdBQUcsUUFBUSxDQUFDO1lBQzVCLG9CQUFvQixHQUFHLGNBQWMsQ0FBQztZQUN0QyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7WUFDN0IscUJBQXFCLEdBQUcsZUFBZSxDQUFDO1lBQ3hDLHdCQUF3QixHQUFHLFFBQVEsQ0FBQztZQUNwQyxzQkFBc0IsR0FBRyxPQUFPLENBQUM7WUFFdkMsTUFBTSxDQUFDOzs7Z0NBQ00scUJBQU0sc0NBQVksRUFBRSxFQUFBOzs0QkFBN0IsTUFBTSxHQUFHLFNBQW9CLENBQUM7NEJBQzlCLE1BQU0sQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDOzs7O2lCQUNsQyxDQUFDLENBQUM7WUFFSCxLQUFLLENBQUM7Ozs7NEJBQ0YsRUFBRSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztnQ0FD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LE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFBOzs0QkFBL0QsWUFBWSxHQUFHLFNBQWdEOzRCQUNyRSxxQkFBTSxZQUFZLENBQUMsS0FBSyxFQUFFLEVBQUE7OzRCQUExQixTQUEwQixDQUFDOzs7O2lCQUM5QixDQUFDLENBQUM7Ozs7Q0FDTixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBpdW1Ecml2ZXIsIGNyZWF0ZURyaXZlciwgU2VhcmNoT3B0aW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZGV2LWFwcGl1bVwiO1xuaW1wb3J0IHsgaXNTYXVjZUxhYiwgcnVuVHlwZSwgY2FwYWJpbGl0aWVzTmFtZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtZGV2LWFwcGl1bS9saWIvcGFyc2VyXCI7XG5pbXBvcnQgeyBleHBlY3QgfSBmcm9tIFwiY2hhaVwiO1xuaW1wb3J0IHsgSW1hZ2VPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1kZXYtYXBwaXVtL2xpYi9pbWFnZS1vcHRpb25zXCI7XG5cbmNvbnN0IGlzU2F1Y2VSdW4gPSBpc1NhdWNlTGFiO1xuY29uc3QgaXNBbmRyb2lkOiBzdHJpbmcgPSBydW5UeXBlLmluY2x1ZGVzKFwiYW5kcm9pZFwiKTtcblxuZGVzY3JpYmUoXCJHcm9jZXJpZXNcIiwgYXN5bmMgZnVuY3Rpb24gKCkge1xuICAgIGxldCBkcml2ZXI6IEFwcGl1bURyaXZlcjtcbiAgICBjb25zdCBsb2dpbkJ1dHRvblRleHQgPSBcIkxvZ2luXCI7XG4gICAgY29uc3QgZW1haWwgPSBcImdyb2Nlcmllc0BtYWlsaW5hdG9yLmNvbVwiO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gXCIxMjNcIjtcbiAgICBjb25zdCBmcnVpdCA9IFwiYXBwbGVcIjtcbiAgICBjb25zdCByZWNlbnRCdXR0b25UZXh0ID0gXCJSZWNlbnRcIjtcbiAgICBjb25zdCBkb25lQnV0dG9uVGV4dCA9IFwiRG9uZVwiO1xuICAgIGNvbnN0IGxvZ09mZkJ1dHRvblRleHQgPSBcIkxvZyBPZmZcIjtcbiAgICBjb25zdCBpbnZhbGlkRW1haWwgPSBcImdyb2Nlcmllc0BtYWlsaW5hdG9yXCI7XG4gICAgY29uc3QgaW52YWxpZEVtYWlsV2FybmluZ1RleHQgPSBcInZhbGlkIGVtYWlsXCI7XG4gICAgY29uc3Qgb2tCdXR0b25UZXh0ID0gXCJPS1wiO1xuICAgIGNvbnN0IGNhbmNlbEJ1dHRvblRleHQgPSBcIkNhbmNlbFwiO1xuICAgIGNvbnN0IHNpZ25VcEhlcmVCdXR0b25UZXh0ID0gXCJTaWduIHVwIGhlcmVcIjtcbiAgICBjb25zdCBzaWduVXBCdXR0b25UZXh0ID0gXCJTaWduIHVwXCI7XG4gICAgY29uc3QgYmFja1RvTG9naW5CdXR0b25UZXh0ID0gXCJCYWNrIHRvIGxvZ2luXCI7XG4gICAgY29uc3QgZm9yZ290UGFzc3dvcmRCdXR0b25UZXh0ID0gXCJGb3Jnb3RcIjtcbiAgICBjb25zdCBmb3Jnb3RQYXNzd29yZEZvcm1UZXh0ID0gXCJyZXNldFwiO1xuXG4gICAgYmVmb3JlKGFzeW5jICgpID0+IHtcbiAgICAgICAgZHJpdmVyID0gYXdhaXQgY3JlYXRlRHJpdmVyKCk7XG4gICAgICAgIGRyaXZlci5kZWZhdWx0V2FpdFRpbWUgPSAxNTAwMDtcbiAgICB9KTtcblxuICAgIGFmdGVyKGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKGlzU2F1Y2VSdW4pIHtcbiAgICAgICAgICAgIGRyaXZlci5zZXNzaW9uSWQoKS50aGVuKGZ1bmN0aW9uIChzZXNzaW9uSWQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlJlcG9ydDogaHR0cHM6Ly9zYXVjZWxhYnMuY29tL2JldGEvdGVzdHMvXCIgKyBzZXNzaW9uSWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgZHJpdmVyLnF1aXQoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJEcml2ZXIgcXVpdHMhXCIpO1xuICAgIH0pO1xuXG4gICAgaXQoXCJzaG91bGQgbG9nIGluXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgbG9naW5CdXR0b24gPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnRCeVRleHQobG9naW5CdXR0b25UZXh0LCBTZWFyY2hPcHRpb25zLmV4YWN0KTtcbiAgICAgICAgYXdhaXQgbG9naW5CdXR0b24uY2xpY2soKTtcbiAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICAgICAgY29uc3QgYWxsRmllbGRzID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50c0J5Q2xhc3NOYW1lKGRyaXZlci5sb2NhdG9ycy5nZXRFbGVtZW50QnlOYW1lKFwidGV4dGZpZWxkXCIpKTtcbiAgICAgICAgICAgIGF3YWl0IGFsbEZpZWxkc1swXS5zZW5kS2V5cyhlbWFpbCk7XG4gICAgICAgICAgICBhd2FpdCBhbGxGaWVsZHNbMV0uc2VuZEtleXMocGFzc3dvcmQpO1xuICAgICAgICAgICAgaWYgKGlzU2F1Y2VMYWIpIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBkcml2ZXIuZHJpdmVyLmhpZGVEZXZpY2VLZXlib2FyZChcIkRvbmVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB1c2VybmFtZUZpZWxkID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50QnlDbGFzc05hbWUoZHJpdmVyLmxvY2F0b3JzLmdldEVsZW1lbnRCeU5hbWUoXCJ0ZXh0ZmllbGRcIikpO1xuICAgICAgICAgICAgYXdhaXQgdXNlcm5hbWVGaWVsZC5zZW5kS2V5cyhlbWFpbCk7XG4gICAgICAgICAgICBjb25zdCBwYXNzRmllbGQgPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnRCeUNsYXNzTmFtZShkcml2ZXIubG9jYXRvcnMuZ2V0RWxlbWVudEJ5TmFtZShcInNlY3VyZXRleHRmaWVsZFwiKSk7XG4gICAgICAgICAgICBhd2FpdCBwYXNzRmllbGQuc2VuZEtleXMocGFzc3dvcmQpO1xuICAgICAgICAgICAgY29uc3QgZG9uZSA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudEJ5VGV4dChcIkRvbmVcIiwgU2VhcmNoT3B0aW9ucy5jb250YWlucyk7XG4gICAgICAgICAgICBhd2FpdCBkb25lLmNsaWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbG9naW5CdG4gPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnRCeVRleHQobG9naW5CdXR0b25UZXh0LCBTZWFyY2hPcHRpb25zLmV4YWN0KTtcbiAgICAgICAgYXdhaXQgbG9naW5CdG4uY2xpY2soKTtcbiAgICAgICAgY29uc3QgcmVjZW50QnV0dG9uID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50QnlUZXh0KHJlY2VudEJ1dHRvblRleHQsIFNlYXJjaE9wdGlvbnMuZXhhY3QpO1xuICAgICAgICBleHBlY3QocmVjZW50QnV0dG9uKS50by5leGlzdDtcbiAgICB9KTtcblxuICAgIGl0KFwic2hvdWxkIGFkZCBlbGVtZW50IGluIHRoZSBsaXN0XCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgYWRkRmllbGQgPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnRCeUNsYXNzTmFtZShkcml2ZXIubG9jYXRvcnMuZ2V0RWxlbWVudEJ5TmFtZShcInRleHRmaWVsZFwiKSk7XG4gICAgICAgIGF3YWl0IGFkZEZpZWxkLnNlbmRLZXlzKGZydWl0KTtcbiAgICAgICAgY29uc3QgYWxsSW1hZ2VzID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50c0J5Q2xhc3NOYW1lKGRyaXZlci5sb2NhdG9ycy5pbWFnZSk7IC8vIEZpcnN0IGltYWdlIGlzIHRoZSBtZW51LCBzZWNvbmQgaXMgdGhlIGNyb3NzIGFkZGluZyB0byB0aGUgbGlzdC5cbiAgICAgICAgYXdhaXQgYWxsSW1hZ2VzWzFdLmNsaWNrKCk7IC8vIENyb3NzIGltYWdlIGJ1dHRvbiB0byBhZGQgdGhlIGl0ZW0uXG4gICAgICAgIGNvbnN0IGFwcGxlSXRlbSA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudEJ5VGV4dChmcnVpdCk7XG4gICAgICAgIGV4cGVjdChhcHBsZUl0ZW0pLnRvLmV4aXN0O1xuICAgIH0pO1xuXG4gICAgaXQoXCJzaG91bGQgbWFyayBlbGVtZW50IGFzIERvbmVcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICAvLyBGaXJzdCBpbWFnZSBpcyB0aGUgbWVudSwgc2Vjb25kIGlzIHRoZSBjcm9zcyBidXR0b24uIFRoZSByZXN0IGFyZSBwYWlycyBjaGVja2JveC9iaW4gcGVyIGxpc3QgaXRlbS5cbiAgICAgICAgICAgIGNvbnN0IGFsbEltYWdlcyA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudHNCeUNsYXNzTmFtZShkcml2ZXIubG9jYXRvcnMuaW1hZ2UpO1xuICAgICAgICAgICAgYXdhaXQgYWxsSW1hZ2VzWzJdLmNsaWNrKCk7IC8vIENoZWNrYm94IGJ1dHRvblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgZHJpdmVyLmNsaWNrUG9pbnQoMjYsIDE2MCk7IC8vIENoZWNrYm94IGJ1dHRvblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFwcGxlSXRlbSA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudEJ5VGV4dChmcnVpdCk7XG4gICAgICAgIGNvbnN0IGlzSXRlbURvbmUgPSBhd2FpdCBkcml2ZXIuY29tcGFyZUVsZW1lbnQoYXBwbGVJdGVtLCBcIml0ZW1Eb25lXCIsIDAuMDcpO1xuICAgICAgICBleHBlY3QoaXNJdGVtRG9uZSkudG8uYmUudHJ1ZTtcbiAgICB9KTtcblxuICAgIGl0KFwic2hvdWxkIGRlbGV0ZSBpdGVtIGZyb20gdGhlIGxpc3RcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICAvLyBGaXJzdCBpbWFnZSBpcyB0aGUgbWVudSwgc2Vjb25kIGlzIHRoZSBjcm9zcyBidXR0b24uIFRoZSByZXN0IGFyZSBwYWlycyBjaGVja2JveC9iaW4gcGVyIGxpc3QgaXRlbS5cbiAgICAgICAgICAgIGNvbnN0IGFsbEltYWdlcyA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudHNCeUNsYXNzTmFtZShkcml2ZXIubG9jYXRvcnMuaW1hZ2UpO1xuICAgICAgICAgICAgYXdhaXQgYWxsSW1hZ2VzWzNdLmNsaWNrKCk7IC8vIEJpbiBidXR0b25cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGF3YWl0IGRyaXZlci5jbGlja1BvaW50KDM0NSwgMTY2KTsgLy8gQmluIGJ1dHRvblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFwcGxlTGlzdEl0ZW1YcGF0aCA9IGF3YWl0IGRyaXZlci5lbGVtZW50SGVscGVyLmdldFhQYXRoQnlUZXh0KGZydWl0LCBTZWFyY2hPcHRpb25zLmV4YWN0KTtcbiAgICAgICAgY29uc3QgYXBwbGVJdGVtID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50QnlYUGF0aElmRXhpc3RzKGFwcGxlTGlzdEl0ZW1YcGF0aCwgMTAwMDApO1xuICAgICAgICBleHBlY3QoYXBwbGVJdGVtKS50by5iZS51bmRlZmluZWQ7XG4gICAgfSk7XG5cbiAgICBpdChcInNob3VsZCBmaW5kIGRlbGV0ZWQgaXRlbSBpbiBSZWNlbnRcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBjb25zdCByZWNlbnRCdXR0b24gPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnRCeVRleHQocmVjZW50QnV0dG9uVGV4dCk7XG4gICAgICAgIGF3YWl0IHJlY2VudEJ1dHRvbi5jbGljaygpO1xuICAgICAgICBjb25zdCBhcHBsZUl0ZW0gPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnRCeVRleHQoZnJ1aXQpO1xuICAgICAgICBleHBlY3QoYXBwbGVJdGVtKS50by5leGlzdDtcbiAgICB9KTtcblxuICAgIGl0KFwic2hvdWxkIHJldHVybiBiYWNrIGFuIGl0ZW0gZnJvbSB0aGUgUmVjZW50IGxpc3RcIiwgYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICAvLyBGaXJzdCBpbWFnZSBpcyB0aGUgbWVudSwgc2Vjb25kIGlzIHRoZSBjcm9zcyBidXR0b24uIFRoZSByZXN0IGFyZSBwYWlycyBjcm9zcy9iaW4gcGVyIGxpc3QgaXRlbS5cbiAgICAgICAgICAgIGNvbnN0IGFsbEltYWdlcyA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudHNCeUNsYXNzTmFtZShkcml2ZXIubG9jYXRvcnMuaW1hZ2UpO1xuICAgICAgICAgICAgYXdhaXQgYWxsSW1hZ2VzWzJdLmNsaWNrKCk7IC8vIENyb3NzIGJ1dHRvblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXdhaXQgZHJpdmVyLmNsaWNrUG9pbnQoMjYsIDE2MCk7IC8vIENyb3NzIGJ1dHRvblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRvbmVCdXR0b24gPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnRCeVRleHQoZG9uZUJ1dHRvblRleHQpO1xuICAgICAgICBhd2FpdCBkb25lQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIGNvbnN0IGFwcGxlSXRlbSA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudEJ5VGV4dChmcnVpdCk7XG4gICAgICAgIGV4cGVjdChhcHBsZUl0ZW0pLnRvLmV4aXN0O1xuICAgIH0pO1xuXG4gICAgaXQoXCJzaG91bGQgZGVsZXRlIGl0ZW0gZnJvbSB0aGUgR3JvY2VyaWVzIGxpc3QgYW5kIHJlbW92ZSBpdCBmcm9tIFJlY2VudFwiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGxldCBhbGxJbWFnZXM7XG4gICAgICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgICAgIC8vIEZpcnN0IGltYWdlIGlzIHRoZSBtZW51LCBzZWNvbmQgaXMgdGhlIGNyb3NzIGJ1dHRvbi4gVGhlIHJlc3QgYXJlIHBhaXJzIGNoZWNrYm94L2JpbiBwZXIgbGlzdCBpdGVtLlxuICAgICAgICAgICAgYWxsSW1hZ2VzID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50c0J5Q2xhc3NOYW1lKGRyaXZlci5sb2NhdG9ycy5pbWFnZSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMzsgaSA8IGFsbEltYWdlcy5sZW5ndGg7IGkgPSBpICsgMikge1xuICAgICAgICAgICAgICAgIGF3YWl0IGFsbEltYWdlc1szXS5jbGljaygpOyAvLyBCaW4gYnV0dG9uIG9mIHRoZSBmaXJzdCBsaXN0IGl0ZW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsbEltYWdlcyA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudHNCeVRleHQoZnJ1aXQpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxJbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhd2FpdCBkcml2ZXIuY2xpY2tQb2ludCgzNDUsIDE2Nik7IC8vIEJpbiBidXR0b24gb2YgdGhlIGZpcnN0IGxpc3QgaXRlbVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVjZW50QnV0dG9uID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50QnlUZXh0KHJlY2VudEJ1dHRvblRleHQpO1xuICAgICAgICBhd2FpdCByZWNlbnRCdXR0b24uY2xpY2soKTtcblxuICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICBhbGxJbWFnZXMgPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnRzQnlDbGFzc05hbWUoZHJpdmVyLmxvY2F0b3JzLmltYWdlKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAzOyBpIDwgYWxsSW1hZ2VzLmxlbmd0aDsgaSA9IGkgKyAyKSB7XG4gICAgICAgICAgICAgICAgYXdhaXQgYWxsSW1hZ2VzWzNdLmNsaWNrKCk7IC8vIEJpbiBidXR0b24gb2YgdGhlIGZpcnN0IGxpc3QgaXRlbVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxsSW1hZ2VzID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50c0J5VGV4dChmcnVpdCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFsbEltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRyaXZlci5jbGlja1BvaW50KDM0NSwgMTY2KTsgLy8gQmluIGJ1dHRvbiBvZiB0aGUgZmlyc3QgbGlzdCBpdGVtXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhcHBsZUxpc3RJdGVtWHBhdGggPSBhd2FpdCBkcml2ZXIuZWxlbWVudEhlbHBlci5nZXRYUGF0aEJ5VGV4dChmcnVpdCwgU2VhcmNoT3B0aW9ucy5jb250YWlucyk7XG4gICAgICAgIGNvbnN0IGFwcGxlSXRlbSA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudEJ5WFBhdGhJZkV4aXN0cyhhcHBsZUxpc3RJdGVtWHBhdGgsIDEwMDAwKTtcbiAgICAgICAgZXhwZWN0KGFwcGxlSXRlbSkudG8uYmUudW5kZWZpbmVkO1xuICAgIH0pO1xuXG4gICAgaXQoXCJzaG91bGQgbG9nIG9mZlwiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIC8vIEZpcnN0IGltYWdlIGlzIHRoZSBtZW51LCBzZWNvbmQgaXMgdGhlIGNsb2NrL2Nyb3NzIGJ1dHRvbi4gVGhlIHJlc3QgYXJlIHBhaXJzIGNoZWNrYm94L2JpbiBwZXIgbGlzdCBpdGVtLlxuICAgICAgICBhd2FpdCBkcml2ZXIuZHJpdmVyLnNsZWVwKDIwMDApO1xuICAgICAgICBjb25zdCBhbGxJbWFnZXMgPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnRzQnlDbGFzc05hbWUoZHJpdmVyLmxvY2F0b3JzLmltYWdlKTtcbiAgICAgICAgYXdhaXQgYWxsSW1hZ2VzWzBdLmNsaWNrKCk7IC8vIE1lbnUgYnV0dG9uXG4gICAgICAgIGNvbnN0IGxvZ09mZkJ1dHRvbiA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudEJ5VGV4dChsb2dPZmZCdXR0b25UZXh0KTtcbiAgICAgICAgYXdhaXQgbG9nT2ZmQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIGNvbnN0IGxvZ2luQnV0dG9uID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50QnlUZXh0KGxvZ2luQnV0dG9uVGV4dCwgU2VhcmNoT3B0aW9ucy5jb250YWlucyk7XG4gICAgICAgIGV4cGVjdChsb2dpbkJ1dHRvbikudG8uZXhpc3Q7XG4gICAgfSk7XG5cbiAgICBpdChcInNob3VsZCB3YXJuIGZvciBpbnZhbGlkIGVtYWlsXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgbG9naW5CdXR0b24gPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnRCeVRleHQobG9naW5CdXR0b25UZXh0LCBTZWFyY2hPcHRpb25zLmV4YWN0KTtcbiAgICAgICAgYXdhaXQgbG9naW5CdXR0b24uY2xpY2soKTtcbiAgICAgICAgY29uc3QgdXNlcm5hbWVGaWVsZCA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudEJ5Q2xhc3NOYW1lKGRyaXZlci5sb2NhdG9ycy5nZXRFbGVtZW50QnlOYW1lKFwidGV4dGZpZWxkXCIpKTtcbiAgICAgICAgYXdhaXQgdXNlcm5hbWVGaWVsZC5zZW5kS2V5cyhpbnZhbGlkRW1haWwpO1xuICAgICAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICAgICAgICBpZiAoaXNTYXVjZUxhYikge1xuICAgICAgICAgICAgICAgIGF3YWl0IGRyaXZlci5kcml2ZXIuaGlkZURldmljZUtleWJvYXJkKFwiRG9uZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRvbmUgPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnRCeVRleHQoXCJEb25lXCIsIFNlYXJjaE9wdGlvbnMuY29udGFpbnMpO1xuICAgICAgICAgICAgYXdhaXQgZG9uZS5jbGljaygpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxvZ2luQnRuID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50QnlUZXh0KGxvZ2luQnV0dG9uVGV4dCwgU2VhcmNoT3B0aW9ucy5leGFjdCk7XG4gICAgICAgIGF3YWl0IGxvZ2luQnRuLmNsaWNrKCk7XG4gICAgICAgIGNvbnN0IGludmFsaWRFbWFpbFdhcm5pbmcgPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnRCeVRleHQoaW52YWxpZEVtYWlsV2FybmluZ1RleHQsIFNlYXJjaE9wdGlvbnMuY29udGFpbnMpO1xuICAgICAgICBleHBlY3QoaW52YWxpZEVtYWlsV2FybmluZykudG8uZXhpc3Q7XG4gICAgICAgIGNvbnN0IG9rQnV0dG9uID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50QnlUZXh0KG9rQnV0dG9uVGV4dCk7XG4gICAgICAgIGF3YWl0IG9rQnV0dG9uLmNsaWNrKCk7XG4gICAgfSk7XG5cbiAgICBpdChcInNob3VsZCBvcGVuIHNpZ24gdXAgZm9ybVwiLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNpZ25VcEhlcmVCdXR0b24gPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnRCeVRleHQoc2lnblVwSGVyZUJ1dHRvblRleHQpO1xuICAgICAgICBhd2FpdCBzaWduVXBIZXJlQnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIGNvbnN0IHNpZ25VcEJ1dHRvbiA9IGF3YWl0IGRyaXZlci5maW5kRWxlbWVudEJ5VGV4dChzaWduVXBCdXR0b25UZXh0LCBTZWFyY2hPcHRpb25zLmV4YWN0KTtcbiAgICAgICAgZXhwZWN0KHNpZ25VcEJ1dHRvbikudG8uZXhpc3Q7XG4gICAgICAgIGNvbnN0IGJhY2tUb0xvZ2luQnV0dG9uID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50QnlUZXh0KGJhY2tUb0xvZ2luQnV0dG9uVGV4dCk7XG4gICAgICAgIGF3YWl0IGJhY2tUb0xvZ2luQnV0dG9uLmNsaWNrKCk7XG4gICAgfSk7XG5cbiAgICBpdChcInNob3VsZCBvcGVuIEZvcmdvdCBwYXNzd29yZCBmb3JtXCIsIGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgZm9yZ290UGFzc3dvcmRCdXR0b24gPSBhd2FpdCBkcml2ZXIuZmluZEVsZW1lbnRCeVRleHQoZm9yZ290UGFzc3dvcmRCdXR0b25UZXh0LCBTZWFyY2hPcHRpb25zLmNvbnRhaW5zKTtcbiAgICAgICAgYXdhaXQgZm9yZ290UGFzc3dvcmRCdXR0b24uY2xpY2soKTtcbiAgICAgICAgY29uc3QgZm9yZ290UGFzc3dvcmRGb3JtID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50QnlUZXh0KGZvcmdvdFBhc3N3b3JkRm9ybVRleHQsIFNlYXJjaE9wdGlvbnMuY29udGFpbnMpO1xuICAgICAgICBleHBlY3QoZm9yZ290UGFzc3dvcmRGb3JtKS50by5leGlzdDtcbiAgICAgICAgY29uc3QgY2FuY2VsQnV0dG9uID0gYXdhaXQgZHJpdmVyLmZpbmRFbGVtZW50QnlUZXh0KGNhbmNlbEJ1dHRvblRleHQpO1xuICAgICAgICBhd2FpdCBjYW5jZWxCdXR0b24uY2xpY2soKTtcbiAgICB9KTtcbn0pOyJdfQ==