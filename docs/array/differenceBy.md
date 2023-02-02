# lodash differenceBy

::: tip
接受一个 `iteratee` ，调用 `array` 和 `values` 中的每个元素以产生比较的标准。
:::

## 使用

```javascript
_.differenceBy(array, [values], [iteratee=_.identity])
```

这个方法类似 `_.difference` ，除了它接受一个 `iteratee` （注：迭代器），调用 `array` 和 `values` 中的每个元素以产生比较的标准。结果值是从第一数组中选择。`iteratee` 会调用一个参数：(value)。（注：首先使用迭代器分别迭代 `array` 和 `values` 中的每个元素，返回的值作为比较值）。

**Note:** 不像 `_.pullAllBy` ，这个方法会返回一个新数组。

## 引入版本

4.0.0

## 参数

1. `array` (Array): 要检查的数组。
2. `[values]` (...Array): 排除的值。
3. `[iteratee=_.identity]` (Array|Function|Object|String): iteratee 调用每个元素。

## 返回

(Array): 返回一个过滤值后的新数组。

## 例子

```javascript
_.differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor);
// => [3.1, 1.3]
 
// The `_.property` iteratee shorthand.
_.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
// => [{ 'x': 2 }]
```
