# vue2-wangeditor

## ✨ Features

- support v-model（prop: 'value', event: 'change'）
- support props to config editor

## 🖥 Environment Support

- Modern browsers and Internet Explorer 11 (with [polyfills](https://stackoverflow.com/questions/57020976/polyfills-in-2019-for-ie11))

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/electron/electron_48x48.png" alt="Electron" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)<br>Electron |
| --- | --- | --- | --- | --- |
| IE11, Edge | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

## 📦 Install

```bash
npm install vue2-wangeditor
```

```bash
yarn add vue2-wangeditor
```

## 🔨 Usage

```html
<Vue2WangEditor v-model="content" />
```
```javascript
import Vue2WangEditor from "vue2-wangeditor";

export default {
  components: {
    Vue2WangEditor,
  },
  data() {
    return {
      content: "<p>hello world</p>",
    };
  },
};
```

## 📘 API

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value(v-model) | current value | number |  |
| disabled | disable the input | boolean | false |
| placeholder | placeholder | string |  |

> [📖 more Property](https://github.com/zomixi/vue2-wangeditor/blob/master/src/index.vue)

## 📙 events

| Events Name | Description | Arguments |
| --- | --- | --- |
| change | The callback triggered when the value is changed. | function(value: string) |

## TODO

- xss filter
- custom image upload


## ⌨️ Development

Use Gitpod, a free online dev environment for GitHub.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/zomixi/vue2-wangeditor.git)

Or clone locally:

```bash
$ git clone https://github.com/zomixi/vue2-wangeditor.git
$ cd vue2-wangeditor
$ yarn install
$ yarn serve
```

### 🤝 Contributing [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
