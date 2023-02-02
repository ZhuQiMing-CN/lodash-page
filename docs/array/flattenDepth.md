# lodash flattenDepth

::: tip
根据 `depth` 递归减少 `array` 的嵌套层级。
:::

## 使用

```javascript
_.flattenDepth(array, [depth=1])
```

根据 `depth` 递归减少 `array` 的嵌套层级。

## 引入版本

4.4.0

## 参数

1. `array` (Array): 需要减少嵌套层级的数组。
2. `[depth=1]` (Number): 最多减少的嵌套层级数。

## 返回

(Array): 返回减少嵌套层级后的新数组。

## 例子

```javascript
var array = [1, [2, [3, [4]], 5]];
 
_.flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]
 
_.flattenDepth(array, 2);
// => [1, 2, 3, [4], 5]
```
