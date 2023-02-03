# lodash intersectionWith

::: tip
接受一个 `comparator` 调用比较 `arrays` `中的元素，结果值是从第一数组中选择。
:::

## 使用

```javascript
_.intersectionWith([arrays], [comparator])
```

这个方法类似 `_.intersection`，区别是它接受一个 `comparator` 调用比较 `arrays` `中的元素。结果值是从第一数组中选择。comparator` 会传入两个参数：(arrVal, othVal)。

## 引入版本

4.0.0

## 参数

1. `[arrays]` (...Array): 待检查的数组。
2. `[comparator]` (Function): comparator（比较器）调用每个元素。

## 返回

(Array): 返回一个包含所有传入数组交集元素的新数组。

## 例子

```javascript
var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];
var others = [{ 'x': 1, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
_.intersectionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }]
```
