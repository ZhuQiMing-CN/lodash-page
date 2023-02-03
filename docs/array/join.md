# lodash join

::: tip
将 `array` 中的所有元素转换为由 `separator` 分隔的字符串。
:::

## 使用

```javascript
_.join(array, [separator=','])
```

将 `array` 中的所有元素转换为由 `separator` 分隔的字符串。

## 引入版本

4.0.0

## 参数

1. `array` (Array): 要转换的数组。
2. `[separator=',']` (String): 分隔元素。

## 返回

(String): 返回连接字符串。

## 例子

```javascript
_.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
```
