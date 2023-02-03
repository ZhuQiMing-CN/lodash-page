# lodash pullAllWith

::: tip
类似于 `_.pullAll`，区别是这个方法接受 `comparator`。
:::

## 使用

```javascript

```

这个方法类似于 `_.pullAll`，区别是这个方法接受 `comparator` 调用 `array` 中的元素和 `values` `比较。comparator` 会传入两个参数：(arrVal, othVal)。

**注意:** 和 `_.differenceWith` 不同, 这个方法会改变数组 `array`。

## 引入版本

4.6.0

## 参数

1. `array` (Array): 要修改的数组。
2. `values` (Array): 要移除值的数组。
3. `[comparator]` (Function): comparator（比较器）调用每个元素。

## 返回

(Array): 返回 `array`。

## 例子

```javascript
var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
 
_.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
console.log(array);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
```
