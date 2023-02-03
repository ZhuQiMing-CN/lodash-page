# lodash lastIndexOf

::: tip
从右到左遍历 `array` 的元素，获取索引值。
:::

## 使用

```javascript
_.lastIndexOf(array, value, [fromIndex=array.length-1])
```

这个方法类似 `_.indexOf`，区别是它是从右到左遍历 `array` 的元素。

## 引入版本

0.1.0

## 参数

1. `array` (Array): 要搜索的数组。
2. `value` (*): 要搜索的值。
3. `[fromIndex=array.length-1]` (Number): 开始搜索的索引值。

## 返回

(Number): 返回匹配值的 `索引值`，否则返回 `-1`。

## 例子

```javascript
_.lastIndexOf([1, 2, 1, 2], 2);
// => 3
 
// Search from the `fromIndex`.
_.lastIndexOf([1, 2, 1, 2], 2, 2);
// => 1
```
