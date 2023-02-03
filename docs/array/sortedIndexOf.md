# lodash sortedIndexOf

::: tip
类似 `_.indexOf`，在已经排序的数组上执行二进制检索。
:::

## 使用

```javascript
_.sortedIndexOf(array, value)
```

这个方法类似 `_.indexOf`，它是在已经排序的数组 `array` 上执行二进制检索。

## 引入版本

4.0.0

## 参数

1. `array` (Array): 要搜索的数组。
2. `value` (*): 搜索的值。

## 返回

(Number): 返回匹配值的索引位置，否则返回 -1。

## 例子

```javascript
_.sortedIndexOf([4, 5, 5, 5, 6], 5);
// => 1
```
