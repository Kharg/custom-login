define('custom-login:views/login', 'views/login', function (Dep) {

    return Dep.extend({

        template: 'custom-login:login',

        data: function () {
            let background = '';
            let LoginBackgroundId = this.getConfig().get('CustomLoginBackgroundId');
            if (LoginBackgroundId) {
                background = this.getBasePath() + '?entryPoint=LoginImage&id=' + LoginBackgroundId;
            }

            var portalUrl = window.location.href;
            if(portalUrl.includes("/portal/")) {
                let PortalBackgroundId = this.getConfig().get('CustomLoginPortalBackgroundId');
                if (PortalBackgroundId) {
                    background = this.getBasePath() + '?entryPoint=LoginImage&id=' + PortalBackgroundId;
                }
            }

            return {
                logoSrc: this.getLogoSrc(),
                showForgotPassword: this.getConfig().get('passwordRecoveryEnabled'),
                applicationName: this.getConfig().get('applicationName'),
                anotherUser: this.anotherUser,
                hasSignIn: !!this.handler,
                hasFallback: !!this.handler && this.fallback,
                method: this.method,
                signInText: this.signInText,
                logInText: this.logInText,
                backgroundImage: background
            };
        }
    });
});