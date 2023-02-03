# lodash reverse

::: tip
反转 `array`。
:::

## 使用

```javascript
_.reverse(array)
```

反转 `array`，使得第一个元素变为最后一个元素，第二个元素变为倒数第二个元素，依次类推。

**Note:** 这个方法会改变原数组 `array`，基于 `Array#reverse`。

## 引入版本

4.0.0

## 参数

1. `array` (Array): 要修改的数组。

## 返回

(Array): 返回 `array`。

## 例子

```javascript
var array = [1, 2, 3];
 
_.reverse(array);
// => [3, 2, 1]
 
console.log(array);
// => [3, 2, 1]
```
