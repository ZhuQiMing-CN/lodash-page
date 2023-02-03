# lodash nth

::: tip
获取 `array` 数组的第 `n` 个元素。
:::

## 使用

```javascript
_.nth(array, [n=0])
```

获取 `array` 数组的第 `n` 个元素。如果 `n` 为负数，则返回从数组结尾开始的第 `n` 个元素。

## 引入版本

4.11.0

## 参数

1. `array` (Array): 要查询的数组。
2. `[n=0]` (Number): 要返回元素的索引值。

## 返回

(*): 获取 `array` 数组的第 `n` 个元素。

## 例子

```javascript
var array = ['a', 'b', 'c', 'd'];
 
_.nth(array, 1);
// => 'b'
 
_.nth(array, -2);
// => 'c';
```
