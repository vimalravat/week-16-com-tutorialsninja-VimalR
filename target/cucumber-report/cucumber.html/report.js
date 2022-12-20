$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("topmenu.feature");
formatter.feature({
  "line": 2,
  "name": "TopMenu Test",
  "description": "As user I want to navigate through top menu of the page",
  "id": "topmenu-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7378104000,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User can verify User Should Navigate To Desktops Page Successfully",
  "description": "",
  "id": "topmenu-test;user-can-verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I Mouse hover on “Desktops” Tab and click",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I call selectMenu method and pass the menu \u003d “Show All Desktops”",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Verify the text ‘Desktops’",
  "keyword": "Then "
});
formatter.match({
  "location": "TopMenuTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 152735200,
  "status": "passed"
});
formatter.match({
  "location": "TopMenuTestSteps.iMouseHoverOnDesktopsTabAndClick()"
});
formatter.result({
  "duration": 123793100,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable: http://tutorialsninja.com/demo/index.php?route\u003dproduct/category\u0026path\u003d20 has no size and location\n  (Session info: chrome\u003d108.0.5359.125)\nBuild info: version: \u00274.6.0\u0027, revision: \u002779f1c02ae20\u0027\nSystem info: os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [bf784b59dbd09dffeba89e7e43e39149, actions {actions\u003d[org.openqa.selenium.interactions.Sequence@7c2312fa]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.125, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:61199}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:61199/devtoo..., se:cdpVersion: 108.0.5359.125, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: bf784b59dbd09dffeba89e7e43e39149\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:541)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.perform(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.interactions.Actions$BuiltAction.perform(Actions.java:567)\r\n\tat org.openqa.selenium.interactions.Actions.perform(Actions.java:536)\r\n\tat com.tutorialsninja.utility.Utility.mouseHoverToElementAndClick(Utility.java:240)\r\n\tat com.tutorialsninja.pages.HomePage.mouseHoverOnDesktopsLinkAndClick(HomePage.java:65)\r\n\tat com.tutorialsninja.steps.TopMenuTestSteps.iMouseHoverOnDesktopsTabAndClick(TopMenuTestSteps.java:21)\r\n\tat ✽.And I Mouse hover on “Desktops” Tab and click(topmenu.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TopMenuTestSteps.iCallSelectMenuMethodAndPassTheMenuShowAllDesktops()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TopMenuTestSteps.verifyTheTextDesktops()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1816095500,
  "status": "passed"
});
});