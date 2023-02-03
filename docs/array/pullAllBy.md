# lodash pullAllBy

::: tip
类似于 `_.pullAll`，区别是这个方法接受一个 `iteratee`。
:::

## 使用

```javascript
_.pullAllBy(array, values, [iteratee=_.identity])
```

这个方法类似于 `_.pullAll`，区别是这个方法接受一个 `iteratee`（迭代函数） 调用 `array` 和 `values` `的每个值以产生一个值，通过产生的值进行了比较。iteratee` 会传入一个参数： (value)。

**Note:** 不同于 `_.differenceBy`, 这个方法会改变数组 `array`。

## 引入版本

4.0.0

## 参数

1. `array` (Array): 要修改的数组。
2. `values` (Array): 要移除值的数组。
3. `[iteratee=_.identity]` (Array|Function|Object|String): iteratee（迭代器）调用每个元素。

## 返回

(Array): 返回 `array`。

## 例子

```javascript
var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
 
_.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
console.log(array);
// => [{ 'x': 2 }]
```
