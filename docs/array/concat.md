# lodash concat

::: tip
创建一个新数组，将 `array` 与任何数组或值连接在一起。
:::

## 使用

```javascript
_.concat(array, [values])
```

创建一个新数组，将 `array` 与任何数组或值连接在一起。

## 引入版本

4.0.0

## 参数

1. `array` (Array): 被连接的数组。
2. `[values]` (...*): 连接的值。

## 返回

(Array): 返回连接后的新数组。

## 例子

```javascript
var array = [1];
var other = _.concat(array, 2, [3], [[4]]);
 
console.log(other);
// => [1, 2, 3, [4]]
 
console.log(array);
// => [1]
```
