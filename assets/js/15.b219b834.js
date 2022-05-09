(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{365:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"get-fitbit-device-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-fitbit-device-data"}},[t._v("#")]),t._v(" Get Fitbit Device Data")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("This guide assumes that your app has already been authorized and the snippet of code that I will show you can access to the Fitbit user id, here called "),a("code",[t._v("userID")]),t._v(", the Fitbit OAuth 2.0 client ID, here called "),a("code",[t._v("clientID")]),t._v(", and the Fitbit client secret, here called "),a("code",[t._v("clientSecret")]),t._v(".")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://dev.fitbit.com/build/reference/web-api/devices/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Device data"),a("OutboundLink")],1),t._v(" contain details information about the devices paired to a user's account. In Fitbitter, a datapoint is expressed by the "),a("code",[t._v("FitbitDeviceData")]),t._v(" model.\nFitbitter fetches a simplified version of "),a("a",{attrs:{href:"https://dev.fitbit.com/build/reference/web-api/devices/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Device data"),a("OutboundLink")],1),t._v(" as described by Fitbit. In particular, an instance of "),a("code",[t._v("FitbitDeviceData")]),t._v(" has the following fields:")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The user encoded id.")]),t._v("\n  String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" encodedId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The device id.")]),t._v("\n  String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" deviceId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The current battery level of the device (can be High, Medium, Low, or Empty).")]),t._v("\n  String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" batteryLevel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The version of the device.")]),t._v("\n  String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" deviceVersion"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The type of the device (can be TRACKER or SCALE).")]),t._v("\n  String"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// The date when the device was synched the last time.")]),t._v("\n  DateTime"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v(" lastSyncTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("For example:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("FitbitDeviceData(encodedId: 7ML2XV, deviceId: 1085158180, deviceVersion: Versa 2, batteryLevel: Medium, lastSyncTime: 2022-05-09 13:17:50.000, type: TRACKER, )\n")])])]),a("p",[t._v("Information about the user's Fitbit Device data can be obtained in three steps:")]),t._v(" "),a("h3",{attrs:{id:"step-1-instanciate-a-manager"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-instanciate-a-manager"}},[t._v("#")]),t._v(" Step 1: Instanciate a manager")]),t._v(" "),a("p",[t._v("First, you need to instanciate a "),a("code",[t._v("FitbitDeviceDataManager")])]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[t._v("    FitbitDeviceDataManager fitbitDeviceDataManager "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("FitbitDeviceDataManager")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        clientID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<OAuth 2.0 Client ID>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        clientSecret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<Client Secret>'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"step-2-create-the-request-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-create-the-request-url"}},[t._v("#")]),t._v(" Step 2: Create the request url")]),t._v(" "),a("p",[t._v("Then, you have to create a url object, "),a("code",[t._v("FitbitDeviceAPIURL")]),t._v(" as:")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[t._v("    FitbitDeviceAPIURL fitbitDeviceApiUrl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" FitbitDeviceAPIURL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("withUserID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" userID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"step-3-get-the-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-get-the-data"}},[t._v("#")]),t._v(" Step 3: Get the data")]),t._v(" "),a("p",[t._v("Finally you can obtain the Fitbit Device data using")]),t._v(" "),a("div",{staticClass:"language-dart extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dart"}},[a("code",[t._v("    List"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("FitbitDeviceData"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" fitbitDeviceData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" fitbitDeviceDataManager"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fitbitDeviceApiUrl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);