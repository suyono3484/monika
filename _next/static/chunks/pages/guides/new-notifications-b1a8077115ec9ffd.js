(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[115],{5332:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/new-notifications",function(){return n(1452)}])},1452:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c},meta:function(){return s}});n(7294);var a=n(3905),i=n(8470);function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s={id:"new-notifications",title:"New Notifications"},r={meta:s},l=function(e){var t=e.children,n=o(e,["children"]);return(0,a.kt)(i.C,Object.assign({meta:s},n),t)};function c(e){var t=e.components,n=o(e,["components"]);return(0,a.kt)(l,Object.assign({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",Object.assign({},{id:"introduction"}),"Introduction",(0,a.kt)("a",Object.assign({parentName:"h2"},{href:"#introduction",title:"Direct link to heading",className:"anchor"}),(0,a.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,a.kt)("p",null,"Out of the box, Monika support a multitude of notification channels, from chat applications such as Slack, Discourse, Microsoft Teams, Google Chats to email based platform such as Mailgun, to generic webhooks and the SMTP protocol (",(0,a.kt)("a",Object.assign({parentName:"p"},{href:"https://monika.hyperjump.tech/guides/notifications"}),"full list can be found in Notifications here"),"). Should you have a favorite tool we haven't supported, we invite you to add it to Monika's growing list. Here's how."),(0,a.kt)("h2",Object.assign({},{id:"prerequisites"}),"Prerequisites",(0,a.kt)("a",Object.assign({parentName:"h2"},{href:"#prerequisites",title:"Direct link to heading",className:"anchor"}),(0,a.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,a.kt)("p",null,"There are few requirements to start adding a new notification to Monika:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Some basic TypeScript may be helpful."),(0,a.kt)("li",{parentName:"ol"},"Some familiarity with git is required to clone and create pull requests."),(0,a.kt)("li",{parentName:"ol"},"A GitHub account to fork and clone the ",(0,a.kt)("a",Object.assign({parentName:"li"},{href:"https://github.com/hyperjumptech/monika"}),"Monika open source repository"),"."),(0,a.kt)("li",{parentName:"ol"},"An environment already set up for development in JavaScript/TypeScript. See the project ",(0,a.kt)("a",Object.assign({parentName:"li"},{href:"https://github.com/hyperjumptech/monika/blob/main/README.md"}),"README")," for an overview."),(0,a.kt)("li",{parentName:"ol"},"A code editor such as ",(0,a.kt)("a",Object.assign({parentName:"li"},{href:"https://www.vim.org/"}),"Vim")," or ",(0,a.kt)("a",Object.assign({parentName:"li"},{href:"https://code.visualstudio.com/"}),"Visual Studio Code")," is recommended.")),(0,a.kt)("h2",Object.assign({},{id:"add-a-new-notification"}),"Add a New Notification",(0,a.kt)("a",Object.assign({parentName:"h2"},{href:"#add-a-new-notification",title:"Direct link to heading",className:"anchor"}),(0,a.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new file in the ",(0,a.kt)("inlineCode",{parentName:"li"},"packages/notification/channel")," directory that satisfies the ",(0,a.kt)("inlineCode",{parentName:"li"},"NotificationChannel")," type from the ",(0,a.kt)("inlineCode",{parentName:"li"},"packages/notification/channel/index.ts")," file and implement the new notification.")),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"type NotificationChannel<T = any> = {\n  validator: Joi.AnySchema\n  send: (notificationData: T, message: NotificationMessage) => Promise<void>\n  sendWithCustomContent?: (\n    notificationData: T,\n    customContent: T\n  ) => Promise<void>\n  additionalStartupMessage?: (notificationData: T) => string\n}\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",Object.assign({parentName:"tr"},{align:null}),"Property"),(0,a.kt)("th",Object.assign({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",Object.assign({parentName:"tr"},{align:null}),"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),"validator"),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),"To validate the ",(0,a.kt)("inlineCode",{parentName:"td"},"notificationData")," field by using ",(0,a.kt)("a",Object.assign({parentName:"td"},{href:"https://github.com/hapijs/joi"}),"Joi")),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"Joi.object().keys({ url: Joi.string().uri().required() })"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),"send"),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),"It will be invoked if the application needs to send a message through the channel"),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),"sendWithCustomContent"),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),"Optional to implement. It will be invoked by other apps that use package ",(0,a.kt)("inlineCode",{parentName:"td"},"@hyperjumptech/monika-notification")," and need custom content in the notification"),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),"additionalStartupMessage"),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),"To display additional message on the startup when using ",(0,a.kt)("inlineCode",{parentName:"td"},"verbose")," flag"),(0,a.kt)("td",Object.assign({parentName:"tr"},{align:null}),"-")))),(0,a.kt)("ol",Object.assign({},{start:2}),(0,a.kt)("li",{parentName:"ol"},"Import the implemented notification file to the ",(0,a.kt)("inlineCode",{parentName:"li"},"packages/notification/channel/index.ts")," file.")),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"import * as whatsapp from './whatsapp'\n")),(0,a.kt)("ol",Object.assign({},{start:3}),(0,a.kt)("li",{parentName:"ol"},"Register it to the ",(0,a.kt)("inlineCode",{parentName:"li"},"channels")," variable in the same file. The key in the channels variable will be used in the Monika configuration to identify the notification type.")),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"export const channels: Record<string, NotificationChannel> = {\n  desktop,\n  'google-chat': googlechat,\n  // ...\n  whatsapp,\n  workplace,\n}\n")),(0,a.kt)("h2",Object.assign({},{id:"events"}),"Events",(0,a.kt)("a",Object.assign({parentName:"h2"},{href:"#events",title:"Direct link to heading",className:"anchor"}),(0,a.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,a.kt)("p",null,"You can access different type of events from the ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," argument from the ",(0,a.kt)("inlineCode",{parentName:"p"},"send")," function. It available on the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta.type")," property. Some of the events you need to handle are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"start"),': This is a "start-of-monitoring" message when monika is first fired up.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"termination"),": A termination message occurs as Monika is shutting down."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"incident"),": Incident is an alert triggered whenever we've detected an incident in the probes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"recovery"),": Recovery alert indicates the probe has recovered from the previous incident."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"status-update"),": Status update is a daily summary message of the probe events.")),(0,a.kt)("p",null,"This is the example how we handle the different events."),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"function getContent(\n  { body, meta, summary }: NotificationMessage,\n  notificationType: string\n): Content {\n  switch (notificationType) {\n    case 'start':\n      ... code to send start notifications\n    case 'termination':\n      ... code to send termination notifications\n    case `incident`:\n      ... code to send incident notifications\n\n")),(0,a.kt)("p",null,"This is where you can get creative and really customize the look and feel of the notifications. You can use icons, widgets, fonts and colors of your choice. In the example ",(0,a.kt)("inlineCode",{parentName:"p"},"googlechat.ts")," below, you can see how headers, text coloring are used to create the incident notifications. Your choices and available options will vary depending on your application. Refer to the app's development/integration documentation for more information."),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-typescript"}),"    case 'incident':\n      return {\n        cards: [\n          {\n            header: {\n              title: 'Monika Notification',\n              subtitle: `New ${notificationType} from Monika`,\n              imageUrl: 'https://bit.ly/3kckaGO',\n            },\n            sections: [\n              {\n                widgets: [\n                  {\n                    textParagraph: {\n                      text: `<b>Message: <font color=#ff0000>Alert!</font></b> ${summary}`,\n                    },\n                  },\n                  {\n                    textParagraph: {\n                      text: `<b>URL:</b> <a href>${url}</a>`,\n                    },\n                  },\n                  {\n                    textParagraph: {\n                      text: `<b>Time:</b> ${time}`,\n                    },\n                  },\n                  {\n                    textParagraph: {\n                      text: `<b>From:</b> ${monikaInstance}`,\n                    },\n                  },\n                ],\n              },\n            ],\n          },\n        ],\n      }\n")),(0,a.kt)("h2",Object.assign({},{id:"validating"}),"Validating",(0,a.kt)("a",Object.assign({parentName:"h2"},{href:"#validating",title:"Direct link to heading",className:"anchor"}),(0,a.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,a.kt)("p",null,"Monika users have the option to use JSON schema validation from their favorite editors. This is super convenient and provide useful real time feedback. Therefore it is mandatory to add a new schema to reflect your changes, otherwise, your new notification type will not be recognized and flagged as an unknown type."),(0,a.kt)("p",null,"Update the json schema in ",(0,a.kt)("inlineCode",{parentName:"p"},"src/monika-config-schema.json")," to be able to validate your new notification."),(0,a.kt)("p",null,"In the example above, the google chat schema validation may look something like:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{className:"language-yaml"}),'{\n  "title": "Google Chat",\n  "type": "object",\n  "required": ["id", "type", "data"],\n  "additionalProperties": false,\n  "properties": {\n    "id": {\n      "type": "string",\n      "description": "Unique notification id",\n      "default": "google-chat-01"\n    },\n    "type": {\n      "const": "google-chat"\n    },\n    "data": {\n      "type": "object",\n      "description": "Data for your payload",\n      "additionalProperties": false,\n      "required": ["url"],\n      "properties": {\n        "url": {\n          "$ref": "#/definitions/urlFormat",\n          "description": "The webhook URL for your google chat",\n          "examples": [\n            "https://chat.googleapis.com/v1/spaces/XXXXX/messages?key=1122334455"\n          ]\n        }\n      }\n    }\n  }\n},\n')),(0,a.kt)("p",null,"For further documentation on json schemas, you can visit the ",(0,a.kt)("a",Object.assign({parentName:"p"},{href:"https://json-schema.org/"}),"json schema website here.")),(0,a.kt)("h2",Object.assign({},{id:"testing"}),"Testing",(0,a.kt)("a",Object.assign({parentName:"h2"},{href:"#testing",title:"Direct link to heading",className:"anchor"}),(0,a.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,a.kt)("p",null,"To make sure your integration won't break in the future, add your unit test(s) into the folder ",(0,a.kt)("inlineCode",{parentName:"p"},"test/components/notification.test.ts"),". This will also ensure that all your code behaves as designed. We use ",(0,a.kt)("a",Object.assign({parentName:"p"},{href:"https://mochajs.org/"}),(0,a.kt)("inlineCode",{parentName:"a"},"Mocha.js"))," testing framework and ",(0,a.kt)("a",Object.assign({parentName:"p"},{href:"https://www.chaijs.com/"}),(0,a.kt)("inlineCode",{parentName:"a"},"Chai.js"),"'")," expect for assertion and checking."),(0,a.kt)("h2",Object.assign({},{id:"documentation"}),"Documentation",(0,a.kt)("a",Object.assign({parentName:"h2"},{href:"#documentation",title:"Direct link to heading",className:"anchor"}),(0,a.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,a.kt)("p",null,"To wrap it up, add some documentation about your new app, specifically how to set it up for others to use. Users will love you for it."),(0,a.kt)("p",null,"That's it. Finally push your changes and create a pull request back to Monika's mainline repository and we'll merge it."))}c.isMDXComponent=!0}},function(e){e.O(0,[547,778,470,774,888,179],(function(){return t=5332,e(e.s=t);var t}));var t=e.O();_N_E=t}]);