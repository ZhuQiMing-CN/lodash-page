# lodash sortedIndex

::: tip
使用二进制的方式检索值尽可能小的索引位置。
:::

## 使用

```javascript
_.sortedIndex(array, value)
```

使用二进制的方式检索来决定 `value` 值应该插入到数组中尽可能小的索引位置，以保证 `array` 的排序。

## 引入版本

0.1.0

## 参数

1. `array` (Array): 要检查的排序数组。
2. `value` (*): 要评估的值。

## 返回

(Number): 返回 `value` 值应该在数组 `array` 中插入的索引位置 `index`。

## 例子

```javascript
_.sortedIndex([30, 50], 40);
// => 1
```
