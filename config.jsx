const { React } = require('powercord/webpack');
const { TextInput, SwitchItem } = require('powercord/components/settings');
const Injector = require('./injector.js');

module.exports = ({ getSetting, updateSetting, toggleSetting }) => (
  <div>
    <SwitchItem
      note='Hides the Activity channel. Can also be changed in the "Appearance" settings panel.'
      value={getSetting('chactivity', false)}
      onChange={function() {
        toggleSetting('chactivity');
        Injector.UpdateUI(
          Injector.StyleSheetsCSS.get('chactivity'),
          getSetting('chactivity'),
        );
        if (getSetting('chactivity')) {
          Injector.ClickFriends();
        }
      }}>
      Activity Channel
    </SwitchItem>
    <SwitchItem
      note='Hides the Library channel. Can also be changed in the "Appearance" settings panel.'
      value={getSetting('chlibrary', false)}
      onChange={function() {
        toggleSetting('chlibrary');
        Injector.UpdateUI(
          Injector.StyleSheetsCSS.get('chlibrary'),
          getSetting('chlibrary'),
        );
      }}>
      Library Channel
    </SwitchItem>
    <SwitchItem
      note='Hides the Nitro channel. Can also be changed in the "Appearance" settings panel.'
      value={getSetting('chnitro', false)}
      onChange={function() {
        toggleSetting('chnitro');
        Injector.UpdateUI(
          Injector.StyleSheetsCSS.get('chnitro'),
          getSetting('chnitro'),
        );
      }}>
      Nitro Channel
    </SwitchItem>
    <SwitchItem
      note='Hides the Server Discovery button.'
      value={getSetting('gdiscovery', false)}
      onChange={function() {
        toggleSetting('gdiscovery');
        Injector.ToggleElement(
          getSetting('gdiscovery'),
          Injector.StyleSheetsJS.get('gdiscovery'),
          5,
          'flex',
        );
      }}>
      Server Discovery
    </SwitchItem>
    <SwitchItem
      note='Hides the Discord wordmark in the title bar.'
      value={getSetting('gwordmark', false)}
      onChange={function() {
        toggleSetting('gwordmark');
        Injector.UpdateUI(
          Injector.StyleSheetsCSS.get('gwordmark'),
          getSetting('gwordmark'),
        );
      }}>
      Discord Wordmark
    </SwitchItem>
    <SwitchItem
      note='Hides the Help Icon.'
      value={getSetting('fhelp', false)}
      onChange={function() {
        toggleSetting('fhelp');
        Injector.UpdateUI(
          Injector.StyleSheetsCSS.get('fhelp'),
          getSetting('fhelp'),
          'flex'
        );
      }}>
      Help Icon
    </SwitchItem>
    <SwitchItem
      note='Hides the tutorial popup that occurs when searching.'
      value={getSetting('gtutorial', false)}
      onChange={function() {
        toggleSetting('gtutorial');
        Injector.UpdateUI(
          Injector.StyleSheetsCSS.get('gtutorial'),
          getSetting('gtutorial'),
        );
      }}>
      Search Tutorials
    </SwitchItem>
    <SwitchItem
      note='Hides the "Stream Mode Enabled" Banner.'
      value={getSetting('gstreambanner', false)}
      onChange={function() {
        toggleSetting('gstreambanner');
        Injector.UpdateUI(
          Injector.StyleSheetsCSS.get('gstreambanner'),
          getSetting('gstreambanner')
        );
      }}>
      Streaming Banner
    </SwitchItem>
    <SwitchItem
      note='EXPERIMENTAL: Hides the panel that allows you to stream to channels.'
      value={getSetting('gstreamready', false)}
      onChange={function() {
        toggleSetting('gstreamready');
        Injector.UpdateUI(
          Injector.StyleSheetsCSS.get('gstreamready'),
          getSetting('gstreamready'),
        );
      }}>
      Ready To Stream
    </SwitchItem>
    <SwitchItem
      note='Hides the Authorized Apps settings panel.'
      value={getSetting('sbauthorized', false)}
      onChange={function() {
        toggleSetting('sbauthorized');
        Injector.UpdateSB(
          Injector.StyleSheetsSB.get('sbauthorized'),
          getSetting('sbauthorized'),
        );
      }}>
      Authorized Apps Settings
    </SwitchItem>
    <SwitchItem
      note='Hides the Connections settings panel.'
      value={getSetting('sbconnections', false)}
      onChange={function() {
        toggleSetting('sbconnections');
        Injector.UpdateSB(
          Injector.StyleSheetsSB.get('sbconnections'),
          getSetting('sbconnections'),
        );
      }}>
      Connections Settings
    </SwitchItem>
    <SwitchItem
      note='Hides the Billing settings panel.'
      value={getSetting('sbbilling', false)}
      onChange={function() {
        toggleSetting('sbbilling');
        Injector.UpdateSB(
          Injector.StyleSheetsSB.get('sbbilling'),
          getSetting('sbbilling'),
        );
      }}>
      Billing Settings
    </SwitchItem>
    <SwitchItem
      note='Hides the Nitro settings panel.'
      value={getSetting('sbnitro', false)}
      onChange={function() {
        toggleSetting('sbnitro');
        Injector.UpdateSB(
          Injector.StyleSheetsSB.get('sbnitro'),
          getSetting('sbnitro'),
        );
        Injector.UpdateUI(
          Injector.StyleSheetsCSS.get('sbseparator'),
          getSetting('sbnitro') &&
            getSetting('sbserver') &&
            getSetting('sbhype'),
        );
      }}>
      Nitro Settings
    </SwitchItem>
    <SwitchItem
      note='Hides the Server Boost settings panel.'
      value={getSetting('sbserver', false)}
      onChange={function() {
        toggleSetting('sbserver');
        Injector.UpdateSB(
          Injector.StyleSheetsSB.get('sbserver'),
          getSetting('sbserver'),
        );
        Injector.UpdateUI(
          Injector.StyleSheetsCSS.get('sbseparator'),
          getSetting('sbnitro') &&
            getSetting('sbserver') &&
            getSetting('sbhype'),
        );
      }}>
      Server Boost Settings
    </SwitchItem>
    <SwitchItem
      note='Hides the HypeSquad settings panel.'
      value={getSetting('sbhype', false)}
      onChange={function() {
        toggleSetting('sbhype');
        Injector.UpdateSB(
          Injector.StyleSheetsSB.get('sbhype'),
          getSetting('sbhype'),
        );
        Injector.UpdateUI(
          Injector.StyleSheetsCSS.get('sbseparator'),
          getSetting('sbnitro') &&
            getSetting('sbserver') &&
            getSetting('sbhype'),
        );
      }}>
      HypeSquad Settings
    </SwitchItem>
    <SwitchItem
      note='WINDOWS ONLY: Hides the Overlay settings panel.'
      value={getSetting('sboverlay', false)}
      onChange={function() {
        toggleSetting('sboverlay');
        Injector.UpdateSB(
          Injector.StyleSheetsSB.get('sboverlay'),
          getSetting('sboverlay'),
        );
      }}>
      Overlay Settings
    </SwitchItem>
    <SwitchItem
      note='Hides the Keybinds settings panel.'
      value={getSetting('sbkeybinds', false)}
      onChange={function() {
        toggleSetting('sbkeybinds');
        Injector.UpdateSB(
          Injector.StyleSheetsSB.get('sbkeybinds'),
          getSetting('sbkeybinds'),
        );
      }}>
      Keybind Settings
    </SwitchItem>
    <SwitchItem
      note='Hides the Game Activity settings panel.'
      value={getSetting('sbgameactivity', false)}
      onChange={function() {
        toggleSetting('sbgameactivity');
        Injector.UpdateSB(
          Injector.StyleSheetsSB.get('sbgameactivity'),
          getSetting('sbgameactivity'),
        );
      }}>
      Game Activity Settings
    </SwitchItem>
    <SwitchItem
      note='Hides the Activity Feed settings panel.'
      value={getSetting('sbactivityfeed', false)}
      onChange={function() {
        toggleSetting('sbactivityfeed');
        Injector.UpdateSB(
          Injector.StyleSheetsSB.get('sbactivityfeed'),
          getSetting('sbactivityfeed'),
        );
      }}>
      Activity Feed Settings
    </SwitchItem>
    <SwitchItem
      note='WINDOWS ONLY: Hides the Game Library settings panel.'
      value={getSetting('sbgamelibrary', false)}
      onChange={function() {
        toggleSetting('sbgamelibrary');
        Injector.UpdateSB(
          Injector.StyleSheetsSB.get('sbgamelibrary'),
          getSetting('sbgamelibrary'),
        );
      }}>
      Game Library Settings
    </SwitchItem>
    <SwitchItem
      note='Hides the Streaming settings panel.'
      value={getSetting('sbstreaming', false)}
      onChange={function() {
        toggleSetting('sbstreaming');
        Injector.UpdateSB(
          Injector.StyleSheetsSB.get('sbstreaming'),
          getSetting('sbstreaming'),
        );
      }}>
      Streamer Mode Settings
    </SwitchItem>
    <SwitchItem
      note='Hides the social media icons and cleans up the bottom UI.'
      value={getSetting('sbsocial', false)}
      onChange={function() {
        toggleSetting('sbsocial');
        Injector.UpdateSocial(getSetting('sbsocial'));
      }}>
      Social Media Icons
    </SwitchItem>
  </div>
);