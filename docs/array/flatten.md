# lodash flatten

::: tip
减少一级 `array` 嵌套深度。
:::

## 使用

```javascript
_.flatten(array)
```

减少一级 `array` 嵌套深度。

## 引入版本

0.1.0

## 参数

1. `array` (Array): 需要减少嵌套层级的数组。

## 返回

(Array): 返回减少嵌套层级后的新数组。

## 例子

```javascript
_.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
```
