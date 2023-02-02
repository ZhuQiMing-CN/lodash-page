# lodash fill

::: tip
使用 `value` 值来填充（替换）`array`。
:::

## 使用

```javascript
_.fill(array, value, [start=0], [end=array.length])
```

使用 `value` 值来填充（替换）`array`，从 `start` 位置开始, 到 `end` 位置结束（但不包含 `end` 位置）。

**Note:** 这个方法会改变 `array`（注：不是创建新数组）。

## 引入版本

3.2.0

## 参数

1. `array` (Array): 要填充改变的数组。
2. `value` (*): 填充给 array 的值。
3. `[start=0]` (Number): 开始位置（默认0）。
4. `[end=array.length]` (Number): 结束位置（默认 array.length）。

## 返回

(Array): 返回 `array`。

## 例子

```javascript
var array = [1, 2, 3];
 
_.fill(array, 'a');
console.log(array);
// => ['a', 'a', 'a']
 
_.fill(Array(3), 2);
// => [2, 2, 2]
 
_.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
```
