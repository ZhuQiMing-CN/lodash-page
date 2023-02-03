# lodash sortedIndexBy

::: tip
类似 `_.sortedIndex`，除了它接受一个 `iteratee`。
:::

## 使用

```javascript
_.sortedIndexBy(array, value, [iteratee=_.identity])
```

这个方法类似 `_.sortedIndex`，除了它接受一个 `iteratee`（迭代函数），调用每一个数组（array）元素，返回结果和 `value` 值比较来计算排序。`iteratee` 会传入一个参数：(value)。

## 引入版本

4.0.0

## 参数

1. `array` (Array): 要检查的排序数组。
2. `value` (*): 要评估的值。
3. `[iteratee=_.identity]` (Array|Function|Object|String): 迭代函数，调用每个元素。

## 返回

(Number): 返回 `value` 值应该在数组 `array` 中插入的索引位置 `index`。

## 例子

```javascript
var objects = [{ 'x': 4 }, { 'x': 5 }];
 
_.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
// => 0
 
// The `_.property` iteratee shorthand.
_.sortedIndexBy(objects, { 'x': 4 }, 'x');
// => 0
```
