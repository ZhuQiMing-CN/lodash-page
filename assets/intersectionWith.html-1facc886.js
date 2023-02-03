import{_ as a,p as n,q as s,a1 as t}from"./framework-96b046e1.js";const p={},o=t(`<h1 id="lodash-intersectionwith" tabindex="-1"><a class="header-anchor" href="#lodash-intersectionwith" aria-hidden="true">#</a> lodash intersectionWith</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>接受一个 <code>comparator</code> 调用比较 <code>arrays</code> \`中的元素，结果值是从第一数组中选择。</p></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">intersectionWith</span><span class="token punctuation">(</span><span class="token punctuation">[</span>arrays<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>comparator<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><p>这个方法类似 <code>_.intersection</code>，区别是它接受一个 <code>comparator</code> 调用比较 <code>arrays</code> <code>中的元素。结果值是从第一数组中选择。comparator</code> 会传入两个参数：(arrVal, othVal)。</p><h2 id="引入版本" tabindex="-1"><a class="header-anchor" href="#引入版本" aria-hidden="true">#</a> 引入版本</h2><p>4.0.0</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ol><li><code>[arrays]</code> (...Array): 待检查的数组。</li><li><code>[comparator]</code> (Function): comparator（比较器）调用每个元素。</li></ol><h2 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h2><p>(Array): 返回一个包含所有传入数组交集元素的新数组。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> objects <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> others <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;x&#39;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;y&#39;</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
 
_<span class="token punctuation">.</span><span class="token function">intersectionWith</span><span class="token punctuation">(</span>objects<span class="token punctuation">,</span> others<span class="token punctuation">,</span> _<span class="token punctuation">.</span>isEqual<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; [{ &#39;x&#39;: 1, &#39;y&#39;: 2 }]</span>
</code></pre></div>`,13),e=[o];function c(r,i){return n(),s("div",null,e)}const u=a(p,[["render",c],["__file","intersectionWith.html.vue"]]);export{u as default};
