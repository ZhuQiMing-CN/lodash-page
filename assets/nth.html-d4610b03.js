import{_ as a,p as n,q as s,a1 as t}from"./framework-96b046e1.js";const e={},c=t(`<h1 id="lodash-nth" tabindex="-1"><a class="header-anchor" href="#lodash-nth" aria-hidden="true">#</a> lodash nth</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>获取 <code>array</code> 数组的第 <code>n</code> 个元素。</p></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">nth</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token punctuation">[</span>n<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><p>获取 <code>array</code> 数组的第 <code>n</code> 个元素。如果 <code>n</code> 为负数，则返回从数组结尾开始的第 <code>n</code> 个元素。</p><h2 id="引入版本" tabindex="-1"><a class="header-anchor" href="#引入版本" aria-hidden="true">#</a> 引入版本</h2><p>4.11.0</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ol><li><code>array</code> (Array): 要查询的数组。</li><li><code>[n=0]</code> (Number): 要返回元素的索引值。</li></ol><h2 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h2><p>(*): 获取 <code>array</code> 数组的第 <code>n</code> 个元素。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 
_<span class="token punctuation">.</span><span class="token function">nth</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; &#39;b&#39;</span>
 
_<span class="token punctuation">.</span><span class="token function">nth</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; &#39;c&#39;;</span>
</code></pre></div>`,13),o=[c];function p(r,i){return n(),s("div",null,o)}const l=a(e,[["render",p],["__file","nth.html.vue"]]);export{l as default};