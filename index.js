const { Plugin } = require("powercord/entities")
const { getModule } = require("powercord/webpack")
const {inject, uninject} = require("powercord/injector")
const { resolve } = require("path");

const Config = require("./config.jsx");
const Injector = require("./injector.js")

module.exports = class HideUI extends Plugin {

    async startPlugin() {
        this.loadCSS(resolve(__dirname, 'style.css'));

        this.registerSettings('hideui', "HideUI", Config);
        const prefs = this.settings;

        const Options = {
            attributes: false,
            characterData: false,
            childList: true,
            subtree: true
        }

        const FriendsObserver = new MutationObserver(function(mutations) {
        	if (Injector.ClickFriends()) {
        		FriendsObserver.disconnect();
        	}
        });
        if (prefs.get('chactivity')) { FriendsObserver.observe(document.body, Options); }

        const DiscoveryObserver = new MutationObserver(function(mutations) {
            if (Injector.ToggleElement(prefs.get('gdiscovery'), Injector.StyleSheetsJS.get('gdiscovery'), 5, 'flex')) {
                DiscoveryObserver.disconnect();
            }
        });
        if (prefs.get('gdiscovery')) { DiscoveryObserver.observe(document.body, Options); }

        const CSSObserver = new MutationObserver(function(mutations) {

            let node = document.getElementById('powercord-css-hideui');
            if (node.textContent) {
                CSSObserver.disconnect();

                Injector.UpdateUI(Injector.StyleSheetsCSS.get('fhelp'), prefs.get('fhelp'), 'flex');
                
                const Keys = new Set(Injector.StyleSheetsCSS.keys());
                Keys.delete('fhelp');
                Keys.delete('sbseparator');
                
                for (const key of Keys) {
                	Injector.UpdateUI(Injector.StyleSheetsCSS.get(key), prefs.get(key));
                }

                Injector.UpdateUI(Injector.StyleSheetsCSS.get('sbseparator'), prefs.get('sbnitro') &&  prefs.get('sbserver') && prefs.get('sbhype'));
                Injector.UpdateSocial(prefs.get('sbsocial'));
            }
        });
        CSSObserver.observe(document.body, Options);

        const SettingsObserver = new MutationObserver(function(mutations){
            // #app-mount > div.app-19_DXt > div > div.layers-3iHuyZ.layers-3q14ss > div > div > div.base-3dtUhz > div > div.sidebar-2K8pFh > div.panels-j1Uci_
            let node = document.querySelector('div[class^="sidebar"] > div[class^="panels"] button[aria-label="User Settings"]');
            if (node) {
                SettingsObserver.disconnect();
                node.addEventListener("click", function(){
                    const Observer = new MutationObserver(function(mutations) {
                        let node = document.querySelector('nav[class^="sidebar"] div[class^="header"]');
                        if (node) {
                            Observer.disconnect();
                            for (const key of Injector.StyleSheetsSB.keys()) {
                                Injector.UpdateSB(Injector.StyleSheetsSB.get(key), prefs.get(key));
                            }
                            Injector.UpdateUI(Injector.StyleSheetsCSS.get('sbseparator'), prefs.get('sbnitro') &&  prefs.get('sbserver') && prefs.get('sbhype'));                            
                        }
                    });
                    Observer.observe(document.body, Options);
                });
            }
        });
        SettingsObserver.observe(document.body, Options);
    }
}