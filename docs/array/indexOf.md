# lodash indexOf

::: tip
返回 `value` 在数组 `array` 中被找到的索引值。
:::

## 使用

```javascript
_.indexOf(array, value, [fromIndex=0])
```

使用 `SameValueZero` 等值比较，返回首次 `value` 在数组 `array` 中被找到的索引值，如果 `fromIndex` 为负值，将从数组 `array` 尾端索引进行匹配。

## 引入版本

0.1.0

## 参数

1. `array` (Array): 需要查找的数组。
2. `value` (*): 需要查找的值。
3. `[fromIndex=0]` (Number): 开始查询的位置。

## 返回

(Number): 返回值 `value` 在数组中的索引位置, 没有找到为返回 `-1`。

## 例子

```javascript
_.indexOf([1, 2, 1, 2], 2);
// => 1
 
// Search from the `fromIndex`.
_.indexOf([1, 2, 1, 2], 2, 2);
// => 3
```
