import{_ as a,p as n,q as s,a1 as e}from"./framework-96b046e1.js";const t={},p=e(`<h1 id="lodash-pull" tabindex="-1"><a class="header-anchor" href="#lodash-pull" aria-hidden="true">#</a> lodash pull</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>移除数组 <code>array</code> 中所有和给定值相等的元素。</p></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">pull</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token punctuation">[</span>values<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><p>移除数组 <code>array</code> 中所有和给定值相等的元素，使用 <code>SameValueZero</code> 进行全等比较。</p><p><strong>注意:</strong> 和 <code>_.without</code> 方法不同，这个方法会改变数组。使用 <code>_.remove</code> 从一个数组中移除元素。</p><h2 id="引入版本" tabindex="-1"><a class="header-anchor" href="#引入版本" aria-hidden="true">#</a> 引入版本</h2><p>2.0.0</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ol><li><code>array</code> (Array): 要修改的数组。</li><li><code>[values]</code> (...*): 要删除的值。</li></ol><h2 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h2><p>(Array): 返回 <code>array</code>。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 
_<span class="token punctuation">.</span><span class="token function">pull</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; [1, 1]</span>
</code></pre></div>`,14),c=[p];function o(l,r){return n(),s("div",null,c)}const i=a(t,[["render",o],["__file","pull.html.vue"]]);export{i as default};
