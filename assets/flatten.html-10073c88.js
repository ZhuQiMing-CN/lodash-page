import{_ as a,p as n,q as s,a1 as t}from"./framework-96b046e1.js";const e={},c=t(`<h1 id="lodash-flatten" tabindex="-1"><a class="header-anchor" href="#lodash-flatten" aria-hidden="true">#</a> lodash flatten</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>减少一级 <code>array</code> 嵌套深度。</p></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">flatten</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span>
</code></pre></div><p>减少一级 <code>array</code> 嵌套深度。</p><h2 id="引入版本" tabindex="-1"><a class="header-anchor" href="#引入版本" aria-hidden="true">#</a> 引入版本</h2><p>0.1.0</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ol><li><code>array</code> (Array): 需要减少嵌套层级的数组。</li></ol><h2 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h2><p>(Array): 返回减少嵌套层级后的新数组。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">flatten</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; [1, 2, [3, [4]], 5]</span>
</code></pre></div>`,13),p=[c];function o(i,r){return n(),s("div",null,p)}const u=a(e,[["render",o],["__file","flatten.html.vue"]]);export{u as default};
