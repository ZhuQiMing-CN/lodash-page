# lodash intersectionBy

::: tip
接受一个 `iteratee` 调用每一个 `arrays` 的每个值以产生一个值，通过产生的值进行了比较，结果值是从第一数组中选择。
:::

## 使用

```javascript
_.intersectionBy([arrays], [iteratee=_.identity])
```

这个方法类似 `_.intersection`，区别是它接受一个 `iteratee` 调用每一个 `arrays` 的每个值以产生一个值，通过产生的值进行了比较。结果值是从第一数组中选择。`iteratee` 会传入一个参数：(value)。

## 引入版本

4.0.0

## 参数

1. `[arrays]` (...Array): 待检查的数组。
2. `[iteratee=_.identity]` (Array|Function|Object|String): iteratee（迭代器）调用每个元素。

## 返回

(Array): 返回一个包含所有传入数组交集元素的新数组。

## 例子

```javascript
_.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor);
// => [2.1]
 
// The `_.property` iteratee shorthand.
_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }]
```
