import{_ as a,p as n,q as s,a1 as t}from"./framework-96b046e1.js";const c={},e=t(`<h1 id="lodash-chunk" tabindex="-1"><a class="header-anchor" href="#lodash-chunk" aria-hidden="true">#</a> lodash chunk</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>将数组（array）拆分成多个 <code>size</code> 长度的区块，并将这些区块组成一个新数组。</p></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">chunk</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token punctuation">[</span>size<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><p>将数组（array）拆分成多个 <code>size</code> 长度的区块，并将这些区块组成一个新数组。 如果 <code>array</code> 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。</p><h2 id="引入版本" tabindex="-1"><a class="header-anchor" href="#引入版本" aria-hidden="true">#</a> 引入版本</h2><p>3.0.0</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ol><li><code>array</code> (Array): 需要处理的数组</li><li><code>[size=1]</code> (number): 每个数组区块的长度</li></ol><h2 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h2><p>(Array): 返回一个包含拆分区块的新数组（注：相当于一个二维数组）。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">chunk</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; [[&#39;a&#39;, &#39;b&#39;], [&#39;c&#39;, &#39;d&#39;]]</span>
 
_<span class="token punctuation">.</span><span class="token function">chunk</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;c&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;d&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; [[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;], [&#39;d&#39;]]</span>
</code></pre></div>`,13),p=[e];function o(i,u){return n(),s("div",null,p)}const l=a(c,[["render",o],["__file","chunk.html.vue"]]);export{l as default};
