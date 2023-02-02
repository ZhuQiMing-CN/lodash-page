# lodash flattenDeep

::: tip
将 `array` 递归为一维数组。
:::

## 使用

```javascript
_.flattenDeep(array)
```

将 `array` 递归为一维数组。

## 引入版本

3.0.0

## 参数

1. `array` (Array): 需要处理的数组。

## 返回

(Array): 返回一个的新一维数组。

## 例子

```javascript
_.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
```
