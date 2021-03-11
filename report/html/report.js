$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Mandatoryfieldsindemosite.feature");
formatter.feature({
  "line": 1,
  "name": "Enter all mandatory fields",
  "description": "",
  "id": "enter-all-mandatory-fields",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Enter all mandatory fields in the Register Page",
  "description": "",
  "id": "enter-all-mandatory-fields;enter-all-mandatory-fields-in-the-register-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User click on Skip Sign in in demo automation site",
  "keyword": "Given "
});
formatter.match({
  "location": "Stepdefinition2.Click_SkipSignin()"
});
formatter.result({
  "duration": 384124500,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy22.click(Unknown Source)\r\n\tat pom.SkipSignin.Click_SkipSignin(SkipSignin.java:20)\r\n\tat stepdefinitions.Stepdefinition2.Click_SkipSignin(Stepdefinition2.java:14)\r\n\tat ✽.Given User click on Skip Sign in in demo automation site(Mandatoryfieldsindemosite.feature:5)\r\n",
  "status": "failed"
});
formatter.uri("ValidLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login should be successful with Valid Credentials",
  "description": "",
  "id": "login-action;login-should-be-successful-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SIT"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on skip sign in",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter Firstname as \"\u003cFirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Lastname as \"Tester\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter Adress as \"Chennai\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter EmailAdress as \"apsn@gmal.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Phone as \"6767576767\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Gender",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Hobbies",
  "keyword": "And "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login-action;login-should-be-successful-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "FirstName"
      ],
      "line": 25,
      "id": "login-action;login-should-be-successful-with-valid-credentials;;1"
    },
    {
      "cells": [
        "Shan"
      ],
      "line": 26,
      "id": "login-action;login-should-be-successful-with-valid-credentials;;2"
    },
    {
      "cells": [
        "Rajesh"
      ],
      "line": 27,
      "id": "login-action;login-should-be-successful-with-valid-credentials;;3"
    },
    {
      "cells": [
        "Gokul"
      ],
      "line": 28,
      "id": "login-action;login-should-be-successful-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
  "name": "Login should be successful with Valid Credentials",
  "description": "",
  "id": "login-action;login-should-be-successful-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SIT"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on skip sign in",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter Firstname as \"Shan\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Lastname as \"Tester\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter Adress as \"Chennai\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter EmailAdress as \"apsn@gmal.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Phone as \"6767576767\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Gender",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Hobbies",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.launchapplication()"
});
formatter.result({
  "duration": 14050992700,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.Skipsignin()"
});
formatter.result({
  "duration": 25560199900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shan",
      "offset": 22
    }
  ],
  "location": "Stepdefinition.Firstname(String)"
});
formatter.result({
  "duration": 208484400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 21
    }
  ],
  "location": "Stepdefinition.Lastname(String)"
});
formatter.result({
  "duration": 153007100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chennai",
      "offset": 19
    }
  ],
  "location": "Stepdefinition.Address(String)"
});
formatter.result({
  "duration": 135938700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apsn@gmal.com",
      "offset": 24
    }
  ],
  "location": "Stepdefinition.EmailAddress(String)"
});
formatter.result({
  "duration": 180890400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6767576767",
      "offset": 18
    }
  ],
  "location": "Stepdefinition.Mobile(String)"
});
formatter.result({
  "duration": 154731900,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.Gender()"
});
formatter.result({
  "duration": 100666900,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.Hobbies()"
});
formatter.result({
  "duration": 96733100,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Login should be successful with Valid Credentials",
  "description": "",
  "id": "login-action;login-should-be-successful-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SIT"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on skip sign in",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter Firstname as \"Rajesh\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Lastname as \"Tester\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter Adress as \"Chennai\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter EmailAdress as \"apsn@gmal.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Phone as \"6767576767\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Gender",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Hobbies",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.launchapplication()"
});
formatter.result({
  "duration": 4237485200,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d88.0.4324.190)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8PKKUJ3\u0027, ip: \u0027192.168.43.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.8\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00D0C0C3+3326147]\n\tOrdinal0 [0x00BF0851+2164817]\n\tOrdinal0 [0x00A77298+619160]\n\tOrdinal0 [0x00A6BD04+572676]\n\tOrdinal0 [0x00A6BA18+571928]\n\tOrdinal0 [0x00A6B0C1+569537]\n\tOrdinal0 [0x00A6A421+566305]\n\tOrdinal0 [0x00A6A815+567317]\n\tOrdinal0 [0x00A6A135+565557]\n\tOrdinal0 [0x00A738B1+604337]\n\tOrdinal0 [0x00A6A0F1+565489]\n\tOrdinal0 [0x00A6AEA2+568994]\n\tOrdinal0 [0x00A6A421+566305]\n\tOrdinal0 [0x00A6A815+567317]\n\tOrdinal0 [0x00A6A135+565557]\n\tOrdinal0 [0x00A71D2C+597292]\n\tOrdinal0 [0x00A6A0F1+565489]\n\tOrdinal0 [0x00A6AEA2+568994]\n\tOrdinal0 [0x00A6A421+566305]\n\tOrdinal0 [0x00A6A815+567317]\n\tOrdinal0 [0x00A6A135+565557]\n\tOrdinal0 [0x00A6FE62+589410]\n\tOrdinal0 [0x00A6A0F1+565489]\n\tOrdinal0 [0x00A6AEA2+568994]\n\tOrdinal0 [0x00A6A421+566305]\n\tOrdinal0 [0x00A6A815+567317]\n\tOrdinal0 [0x00A6A135+565557]\n\tOrdinal0 [0x00A6F075+585845]\n\tOrdinal0 [0x00A6A0F1+565489]\n\tOrdinal0 [0x00A6AEA2+568994]\n\tOrdinal0 [0x00A6A421+566305]\n\tOrdinal0 [0x00A6A815+567317]\n\tOrdinal0 [0x00A6A135+565557]\n\tOrdinal0 [0x00A66776+550774]\n\tOrdinal0 [0x00A6A0F1+565489]\n\tOrdinal0 [0x00A69F13+565011]\n\tOrdinal0 [0x00A69D07+564487]\n\tOrdinal0 [0x00A782C0+623296]\n\tOrdinal0 [0x00A16BDD+224221]\n\tOrdinal0 [0x00A15CAC+220332]\n\tOrdinal0 [0x00A1189B+202907]\n\tOrdinal0 [0x009F3DF4+81396]\n\tOrdinal0 [0x009F4DEE+85486]\n\tOrdinal0 [0x009F4D79+85369]\n\tOrdinal0 [0x00C085DC+2262492]\n\tGetHandleVerifier [0x00E92874+1487204]\n\tGetHandleVerifier [0x00E923CD+1486013]\n\tGetHandleVerifier [0x00E9A368+1518680]\n\tGetHandleVerifier [0x00E92F4E+1488958]\n\tOrdinal0 [0x00BFED0D+2223373]\n\tOrdinal0 [0x00C0A12B+2269483]\n\tOrdinal0 [0x00C0A26F+2269807]\n\tOrdinal0 [0x00C1ECB8+2354360]\n\tBaseThreadInitThunk [0x755E6359+25]\n\tRtlGetAppContainerNamedObjectPath [0x77348944+228]\n\tRtlGetAppContainerNamedObjectPath [0x77348914+180]\n\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat stepdefinitions.Stepdefinition.launchapplication(Stepdefinition.java:17)\r\n\tat ✽.Given I launch the application(ValidLogin.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdefinition.Skipsignin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Rajesh",
      "offset": 22
    }
  ],
  "location": "Stepdefinition.Firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 21
    }
  ],
  "location": "Stepdefinition.Lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chennai",
      "offset": 19
    }
  ],
  "location": "Stepdefinition.Address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "apsn@gmal.com",
      "offset": 24
    }
  ],
  "location": "Stepdefinition.EmailAddress(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6767576767",
      "offset": 18
    }
  ],
  "location": "Stepdefinition.Mobile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.Gender()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.Hobbies()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Login should be successful with Valid Credentials",
  "description": "",
  "id": "login-action;login-should-be-successful-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@SIT"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I launch the application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on skip sign in",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter Firstname as \"Gokul\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Lastname as \"Tester\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter Adress as \"Chennai\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter EmailAdress as \"apsn@gmal.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter Phone as \"6767576767\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on Gender",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Hobbies",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdefinition.launchapplication()"
});
formatter.result({
  "duration": 5651339500,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d88.0.4324.190)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8PKKUJ3\u0027, ip: \u0027192.168.43.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.8\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.190, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\admin\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57879}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2259a586b5b315a27fbca9ca15bbd841\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat stepdefinitions.Stepdefinition.launchapplication(Stepdefinition.java:18)\r\n\tat ✽.Given I launch the application(ValidLogin.feature:5)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdefinition.Skipsignin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Gokul",
      "offset": 22
    }
  ],
  "location": "Stepdefinition.Firstname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 21
    }
  ],
  "location": "Stepdefinition.Lastname(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Chennai",
      "offset": 19
    }
  ],
  "location": "Stepdefinition.Address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "apsn@gmal.com",
      "offset": 24
    }
  ],
  "location": "Stepdefinition.EmailAddress(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "6767576767",
      "offset": 18
    }
  ],
  "location": "Stepdefinition.Mobile(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.Gender()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdefinition.Hobbies()"
});
formatter.result({
  "status": "skipped"
});
});