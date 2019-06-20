#webpack
webpack 是一个现代化的模块化打包工具
#React
react 是 facebook 出的一款针对 view 层的库。在使用他做开发的时候需要结合很多其他插件一起使用。
react 用到了许多 es6 以上的语法，会用到 class，module，对象操作等方法。
jsx 是一种新的语法，特点就是在 js 中可以使用 html 标签

```js
//通过一个function定义一个组件
function HelloWorld() {
  return <h1>这是一个组件</h1>;
}
```

#React 简单使用
1 组件定义

```
两种方式
function
  每一个组件需要有一个返回值，返回值作为组件需要展示的html内容
  组件中定义的时间名字需要使用驼峰方式命名
  组件内部方法的调用不需要添加this
class
  组件可以包含一个局部的状态数据
  组件内部的方法调用需要使用this关键字
  组件拥有自己的生命周期
  componentDidMount 组件挂载完成
```

state 组建状态，在改变 state 的时候需要通过 setState 方式进行。setState 是异步的，
第二个参数作为成功之后的回调函数

父组件向子组件传值使用 props 属性进行

组件中设置样式时使用 className 关键字

jsx 是一种语法 可以在 js 中，插入 html 内容，{}内部表示是 js 表达式
