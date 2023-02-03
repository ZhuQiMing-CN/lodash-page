# lodash pull

::: tip
移除数组 `array` 中所有和给定值相等的元素。
:::

## 使用

```javascript
_.pull(array, [values])
```

移除数组 `array` 中所有和给定值相等的元素，使用 `SameValueZero` 进行全等比较。

**注意:** 和 `_.without` 方法不同，这个方法会改变数组。使用 `_.remove` 从一个数组中移除元素。

## 引入版本

2.0.0

## 参数

1. `array` (Array): 要修改的数组。
2. `[values]` (...*): 要删除的值。

## 返回

(Array): 返回 `array`。

## 例子

```javascript
var array = [1, 2, 3, 1, 2, 3];
 
_.pull(array, 2, 3);
console.log(array);
// => [1, 1]
```
