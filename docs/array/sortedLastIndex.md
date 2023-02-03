# lodash sortedLastIndex

::: tip
类似于 `_.sortedIndex`，除了返回 `value` 值在 `array` 中尽可能大的索引位置。
:::

## 使用

```javascript
_.sortedLastIndex(array, value)
```

此方法类似于 `_.sortedIndex`，除了它返回 `value` 值在 `array` 中尽可能大的索引位置（index）。

## 引入版本

3.0.0

## 参数

1. `array` (Array): 要检查的排序数组。
2. `value` (*): 要评估的值。

## 返回

(Number): 返回 `value` 值应该在数组 `array` 中插入的索引位置 `index`。

## 例子

```javascript
_.sortedLastIndex([4, 5, 5, 5, 6], 5);
// => 4
```
