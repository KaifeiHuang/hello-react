# 解构语法
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

解构赋值语法是一种 Javascript 表达式。通过解构赋值, 可以将属性/值从对象/数组中取出,赋值给其他变量。



# 属性访问
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer

创建对象后，可以读取或者修改它。对象属性可以用下标小圆点标记或者方括号标记访问。参考属性访问 获取更多信息。

object.foo; // "bar"
object["age"]; // 42

object.foo = "baz";

# useState

## 使用范围
用于组件间的state传递
只能用于函数式组件

## 定义
https://react.docschina.org/docs/hooks-state.html

定义：
const [starInfosData, setstarInfosData] = useState([])
声明多个 state 变量
你可以在一个组件中多次使用 State Hook:

function ExampleWithManyStates() {
  // 声明多个 state 变量！
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState('banana');
  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
  // ...
}

# useEffect
https://react.docschina.org/docs/hooks-effect.html

Effect Hook 可以让你在函数组件中执行副作用操作

## 副作用操作
监控的state在组件componentDidMount 和 componentDidUpdate发生变化后，执行一些自定义的操作(自定义)

数据获取，设置订阅以及手动更改 React 组件中的 DOM 都属于副作用。不管你知不知道这些操作，或是“副作用”这个名字，应该都在组件中使用过它们。

提示:
如果你熟悉 React class 的生命周期函数，你可以把 useEffect Hook 看做 componentDidMount，componentDidUpdate 和 componentWillUnmount 这三个函数的组合。

在 React 组件中有两种常见副作用操作：需要清除的和不需要清除的。我们来更仔细地看一下他们之间的区别。

## 使用范围
.建议组件内部调用 useEffect
.默认情况下，它在第一次渲染之后和每次更新之后都会执行  
.useEffect 调度的 effect 不会阻塞浏览器更新屏幕 (简而言之，不会有F5的刷新动作，表单提交默认会刷新浏览器，state会被重置) 

useEffect 做了什么？ 通过使用这个 Hook，你可以告诉 React 组件需要在渲染后执行某些操作。React 会保存你传递的函数（我们将它称之为 “effect”），并且在执行 DOM 更新之后调用它。在这个 effect 中，我们设置了 document 的 title 属性，不过我们也可以执行数据获取或调用其他命令式的 API。

为什么在组件内部调用 useEffect？ 将 useEffect 放在组件内部让我们可以在 effect 中直接访问 count state 变量（或其他 props）。我们不需要特殊的 API 来读取它 —— 它已经保存在函数作用域中。Hook 使用了 JavaScript 的闭包机制，而不用在 JavaScript 已经提供了解决方案的情况下，还引入特定的 React API。

useEffect 会在每次渲染后都执行吗？ 是的，默认情况下，它在第一次渲染之后和每次更新之后都会执行。（我们稍后会谈到如何控制它。）你可能会更容易接受 effect 发生在“渲染之后”这种概念，不用再去考虑“挂载”还是“更新”。React 保证了每次运行 effect 的同时，DOM 都已经更新完毕

# useRef 
useRef用来使用一个 ref 来保存一个可变的变量， ref相当于class里的this，然后你就可以对它进行读写了。

function Example(props) {
  // 把最新的 props 保存在一个 ref 中
  const latestProps = useRef(props);
  useEffect(() => {
    latestProps.current = props;
  });

  useEffect(() => {
    function tick() {
      // 在任何时候读取最新的 props
      console.log(latestProps.current);
    }

    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []); // 这个 effect 从不会重新执行
}

