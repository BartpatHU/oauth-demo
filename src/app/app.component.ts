import { Component } from '@angular/core';

import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';



// export const authCodeFlowConfig: AuthConfig = {

//   redirectUri: window.location.origin + '/auth-landing.html',
//   clientId: 'spa',
//   responseType: 'code',
//   scope: 'openid profile email offline_access api',
//   showDebugInformation: true,
//   loginUrl: 'https://idsvr4.azurewebsites.net/connect/authorize'
// };

// https://accounts.google.com/o/oauth2/v2/auth?
// redirect_uri=https://developers.google.com/oauthplayground
// &prompt=consent
// &response_type=code
// &client_id=407408718192.apps.googleusercontent.com
// &scope=https://mail.google.com/mail/feed/atom
// &access_type=offline

export const authCodeFlowConfigGoogle: AuthConfig = {

  redirectUri: window.location.origin + '/auth-landing.html',
  clientId: '383829918334-cokcb1lls8on2ffc68fe9g538ha08goj.apps.googleusercontent.com',
  responseType: 'code',
  dummyClientSecret: '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',
  scope: 'https://mail.google.com/mail/feed/atom',
  showDebugInformation: true,
  loginUrl: 'https://accounts.google.com/o/oauth2/v2/auth',
  tokenEndpoint: 'https://oauth2.googleapis.com/token'
};

// export const authCodeFlowConfigImgur: AuthConfig = {

//   // redirectUri: window.location.origin + '/auth-landing.html',
//   redirectUri: 'https://casoffice.eu.ngrok.io/auth-landing.html',
//   //redirectUri: 'https://developers.google.com/oauthplayground',
//   clientId: '424fba9b2c0e1c4aec0f3ade7461f25a8563026d',
//   responseType: 'code',
//   dummyClientSecret: '424fba9b2c0e1c4aec0f3ade7461f25a8563026d',
//   loginUrl: 'https://api.imgur.com/oauth2/authorize',
//   tokenEndpoint: 'https://api.imgur.com/oauth2/token'
// };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private oauthService: OAuthService){}

  title = 'oauth-demo-app';


  login(){
    this.oauthService.configure(authCodeFlowConfigGoogle);
    this.oauthService.initLoginFlowInPopup({height: 600, width: 600});
    
  }

  calculatePopupFeatures(options: any) {
    // Specify an static height and width and calculate centered position
    const height = options.height || 470;
    const width = options.width || 500;
    const left = window.screenLeft + (window.outerWidth - width) / 2;
    const top = window.screenTop + (window.outerHeight - height) / 2;
    return `location=no,toolbar=no,width=${width},height=${height},top=${top},left=${left}`;
}

  logout(){

  }
}
