import{_ as a,p as n,q as s,a1 as t}from"./framework-96b046e1.js";const e={},p=t(`<h1 id="lodash-pullat" tabindex="-1"><a class="header-anchor" href="#lodash-pullat" aria-hidden="true">#</a> lodash pullAt</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>根据索引移除 <code>array</code> 中对应的元素，并返回被移除元素的数组。</p></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">pullAt</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token punctuation">[</span>indexes<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><p>根据索引 <code>indexes</code>，移除 <code>array</code> 中对应的元素，并返回被移除元素的数组。</p><p><strong>Note:</strong> 和 <code>_.at</code> 不同, 这个方法会改变数组 <code>array</code>。</p><h2 id="引入版本" tabindex="-1"><a class="header-anchor" href="#引入版本" aria-hidden="true">#</a> 引入版本</h2><p>3.0.0</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ol><li><code>array</code> (Array): 要修改的数组。</li><li><code>[indexes]</code> (...(Number|Number[])): 要移除元素的索引。</li></ol><h2 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h2><p>(Array): 返回移除元素组成的新数组。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> evens <span class="token operator">=</span> _<span class="token punctuation">.</span><span class="token function">pullAt</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; [5, 15]</span>
 
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>evens<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; [10, 20]</span>
</code></pre></div>`,14),o=[p];function c(l,r){return n(),s("div",null,o)}const i=a(e,[["render",c],["__file","pullAt.html.vue"]]);export{i as default};
