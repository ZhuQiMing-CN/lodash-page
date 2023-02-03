# lodash remove

::: tip
移除数组中断言为真的所有元素
:::

## 使用

```javascript
_.remove(array, [predicate=_.identity])
```

移除数组中 `predicate`（断言）返回为真值的所有元素，并返回移除元素组成的数组。`predicate`（断言） 会传入 3 个参数： (value, index, array)。

**Note:** 和 `_.filter` 不同, 这个方法会改变数组 `array`。使用 `_.pull` 来根据提供的 `value` 值从数组中移除元素。

## 引入版本

2.0.0

## 参数

1. `array` (Array): 要修改的数组。
2. `[predicate=_.identity]` (Array|Function|Object|String): 每次迭代调用的函数。

## 返回

(Array): 返回移除元素组成的新数组。

## 例子

```javascript
var array = [1, 2, 3, 4];
var evens = _.remove(array, function(n) {
  return n % 2 == 0;
});
 
console.log(array);
// => [1, 3]
 
console.log(evens);
// => [2, 4]
```
