### 千牛UI的联系demo

[http://qnui.taobao.org/start/getStart/](http://qnui.taobao.org/start/getStart/)

### jest test

- 测试报告

> 在package.json中添加

```js
"test-p": "node scripts/test.js --env=jsdom --coverage"
```

> 生成测试报告

- 可能的错误

> 运行测试时，如果build/qnui.min.js报  "can not read property 'parentNode' of undefined" 需要删除此文件，并按以下步骤修改：

> D:\workspace\qnui-test\node_modules\qnui\lib\_components\@alife\next-slider\lib\utils\matchmedia.js 

> 19行需要修改

```js
script.parentNode.insertBefore(style, script); // 代码原文
```

```js
document.body.insertBefore(style, script); // 测试时报错，使用此代码
```