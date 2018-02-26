import { Injectable } from "@angular/core";
import { getString, setString } from "application-settings";

const tokenKey = "token";

export class BackendService {
  static baseUrl = "https://baas.kinvey.com/";
  static appKey = "kid_Sk2j8rawz";
  static appUserHeader = "Basic a2lkX1NrMmo4cmF3ejo1ZDM2YzE0ODE2MWU0NWNlOTNmN2QwNjlkNzViM2E3OA==";
  static apiUrl = "";

  static isLoggedIn(): boolean {
    return !!getString("token");
  }

  static get token(): string {
    return getString("token");
  }

  static set token(theToken: string) {
    setString("token", theToken);
  }
}
