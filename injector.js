// String constants
const ChSelector = 'div[class^="privateChannels"] a[class^="channel"][href="/'
const gDisplay = '"] { display: '
const SbXPath = '//div[starts-with(@class,"sidebarRegion")]//nav[starts-with(@class,"sidebar")]/div[starts-with(@class,"side")]/div[normalize-space()="'
const SbEnd = '"]' 

// Stores all elements that can be manipulated 
const StyleSheetsCSS = new Map([
    ['chactivity', ChSelector + 'activity' + gDisplay],
    ['chlibrary', ChSelector + 'library' + gDisplay],
    ['chnitro', ChSelector + 'store' + gDisplay],
    ['fhelp', 'div[class^="toolbar"] > a[href="https://support.discordapp.com"] { display: '],
    ['gwordmark', 'div#app-mount div[class^="wordmark"] { display: '],
    ['gstreambanner', 'div[class^="noticeStreamerMode"] { display: '],
    ['gstreamready', 'div[class^="sidebar"] > div[class^="panels"] > div[class^="panel"] { display: '],
    ['gtutorial', 'div[data-focus-lock-disabled="false"] div[class^="quickswitcher"] > div[class^="tutorial"] { display: '],
    ['sbseparator', 'div[class^="sidebarRegion"] nav[class^="sidebar"] > div[class^="side"] > div[class^="separator"]:nth-child(7) { display: ']
]);

const StyleSheetsJS = new Map([
    ['gdiscovery', 'div[class^="circleIconButton"][aria-label="Server Discovery"][role="button"]']
]);

const StyleSheetsSB = new Map([
    ['sbauthorized', SbXPath + 'Authorized Apps' + SbEnd],
    ['sbconnections', SbXPath + 'Connections' + SbEnd],
    ['sbbilling', SbXPath + 'Billing' + SbEnd],
    ['sbnitro', SbXPath + 'Discord Nitro' + SbEnd],
    ['sbserver', SbXPath + 'Server Boost' + SbEnd],
    ['sbhype', SbXPath + 'HypeSquad' + SbEnd],
    ['sboverlay', SbXPath + 'Overlay' + SbEnd],
    ['sbkeybinds', SbXPath + 'Keybinds' + SbEnd],
    ['sbgameactivity', SbXPath + 'Game Activity' + SbEnd],
    ['sbactivityfeed', SbXPath + 'Activity Feed' + SbEnd],
    ['sbgamelibrary', SbXPath + 'Game Library' + SbEnd],
    ['sbstreaming' , SbXPath + 'Streamer Mode' + SbEnd]
]);

// to do: wrap this into toggle element
const UpdateSB = function(path, choice) {
    let node = document.evaluate(path, document.body, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (node) {
        node.style.display = (choice) ? 'none' : 'block';
    }
}

const UpdateUI = function(style, choice, render = 'block') {
    // Get old & new rule information
    let newStyle = render;
    if (choice) {
        style += (render + '; }');
        newStyle = 'none';
    } else {
        style += 'none; }';
    }

    // Find the corresponding rule and update
    for (let rule of document.getElementById('powercord-css-powercord-hideui').sheet.cssRules) {
        if (rule.cssText == style) {
            rule.style.display = newStyle;
            break;
        }
    }
}

const UpdateSocial = function(choice) {
        UpdateUI('div[class^="sidebarRegion"] nav[class^="sidebar"] > div[class^="side"] > div[class^="separator"]:nth-last-child(4) { display: ', choice);
        UpdateUI('div[class^="sidebarRegion"] nav[class^="sidebar"] > div[class^="side"] > div[class^="separator"]:nth-last-child(2) { display: ', choice);
        UpdateUI('div[class^="sidebarRegion"] nav[class^="sidebar"] > div[class^="side"] > div[class^="socialLinks"] { display: ', choice);
}

// Autoselects the Friends Tab
const ClickFriends = function() {
  let node = document.querySelector('div[class^="privateChannels"] a[class^="channel"][href="/channels/@me"]');
  if (node) {
    node.click();
    return true;
  }
  return false;
}

const ToggleElement = function(toggle, selector, level, style) {
    let node = document.querySelector(selector);
    if (node) {
        for (let i = 0; i < level; i++) {
            node = node.parentNode;
        }
        node.style.display = (toggle) ? 'none' : style;
        return true;
    }
    return false;
}

// Exports
exports.ClickFriends = ClickFriends;
exports.StyleSheetsCSS = StyleSheetsCSS;
exports.StyleSheetsJS = StyleSheetsJS;
exports.StyleSheetsSB = StyleSheetsSB;
exports.ToggleElement = ToggleElement;
exports.UpdateUI = UpdateUI;
exports.UpdateSB = UpdateSB;
exports.UpdateSocial = UpdateSocial;
