# lodash findLastIndex

::: tip
从右到左的迭代集合 `array` 中的元素。
:::

## 使用

```javascript
_.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])
```

这个方式类似 `_.findIndex`，区别是它是从右到左的迭代集合 `array` 中的元素。

## 引入版本

2.0.0

## 参数

1. `array` (Array): 要搜索的数组。
2. `[predicate=_.identity]` (Array|Function|Object|String): 这个函数会在每一次迭代调用。
3. `[fromIndex=array.length-1]` (Number): The index to search from.

## 返回

(Number): 返回找到元素的 索引值（index），否则返回 `-1`。

## 例子

```javascript
var users = [
  { 'user': 'barney',  'active': true },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': false }
];
 
_.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
// => 2
 
// The `_.matches` iteratee shorthand.
_.findLastIndex(users, { 'user': 'barney', 'active': true });
// => 0
 
// The `_.matchesProperty` iteratee shorthand.
_.findLastIndex(users, ['active', false]);
// => 2
 
// The `_.property` iteratee shorthand.
_.findLastIndex(users, 'active');
// => 0
```
