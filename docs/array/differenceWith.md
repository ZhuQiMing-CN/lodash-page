# lodash differenceWith

::: tip
接受一个 `comparator` ，它调用比较 `array` ，`values` 中的元素。
:::

## 使用

```javascript
_.differenceWith(array, [values], [comparator])
```

这个方法类似 `_.difference` ，除了它接受一个 `comparator` （注：比较器），它调用比较 `array` ，`values` 中的元素。结果值是从第一数组中选择。`comparator` 调用参数有两个：(arrVal, othVal)。

**Note:** 不像 `_.pullAllWith` ，这个方法会返回一个新数组。

## 引入版本

4.0.0

## 参数

1. `array` (Array): 要检查的数组。
2. `[values]` (...Array): 排除的值。
3. `[iteratee=_.identity]` (Function): comparator 调用每个元素。

## 返回

(Array): 返回一个过滤值后的新数组。

## 例子

```javascript
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
 
_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual);
// => [{ 'x': 2, 'y': 1 }]
```
