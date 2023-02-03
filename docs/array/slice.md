# lodash slice

::: tip
裁剪数组 `array`。
:::

## 使用

```javascript
_.slice(array, [start=0], [end=array.length])
```

裁剪数组 `array`，从 `start` 位置开始到end结束，但不包括 `end` 本身的位置。

**Note:** 这个方法用于代替 `Array#slice` 来确保数组正确返回。

## 引入版本

3.0.0

## 参数

1. `array` (Array): 要裁剪数组。
2. `[start=0]` (Number): 开始位置。
3. `[end=array.length]` (Number): 结束位置。

## 返回

(Array): 返回 数组 `array` 裁剪部分的新数组。
