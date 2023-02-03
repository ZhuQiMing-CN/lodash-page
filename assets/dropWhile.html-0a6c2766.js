import{_ as n,p as a,q as s,a1 as t}from"./framework-96b046e1.js";const p={},e=t(`<h1 id="lodash-dropwhile" tabindex="-1"><a class="header-anchor" href="#lodash-dropwhile" aria-hidden="true">#</a> lodash dropWhile</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>创建一个切片数组，去除 <code>array</code> 中从起点开始到 <code>predicate</code> 返回假值结束部分。</p></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">dropWhile</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span> <span class="token punctuation">[</span>predicate<span class="token operator">=</span>_<span class="token punctuation">.</span>identity<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><p>创建一个切片数组，去除 <code>array</code> 中从起点开始到 <code>predicate</code> 返回假值结束部分。<code>predicate</code> 会传入3个参数： (value, index, array)。</p><h2 id="引入版本" tabindex="-1"><a class="header-anchor" href="#引入版本" aria-hidden="true">#</a> 引入版本</h2><p>3.0.0</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ol><li><code>array</code> (Array): 要查询的数组。</li><li><code>[predicate=_.identity]</code> (Function): 这个函数会在每一次迭代调用。</li></ol><h2 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h2><p>(Array): 返回 <code>array</code> 剩余切片。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> users <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;barney&#39;</span><span class="token punctuation">,</span>  <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;fred&#39;</span><span class="token punctuation">,</span>    <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;pebbles&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
 
_<span class="token punctuation">.</span><span class="token function">dropWhile</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> <span class="token operator">!</span>o<span class="token punctuation">.</span>active<span class="token punctuation">;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; objects for [&#39;pebbles&#39;]</span>
 
<span class="token comment">// The \`_.matches\` iteratee shorthand.</span>
_<span class="token punctuation">.</span><span class="token function">dropWhile</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token string-property property">&#39;user&#39;</span><span class="token operator">:</span> <span class="token string">&#39;barney&#39;</span><span class="token punctuation">,</span> <span class="token string-property property">&#39;active&#39;</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; objects for [&#39;fred&#39;, &#39;pebbles&#39;]</span>
 
<span class="token comment">// The \`_.matchesProperty\` iteratee shorthand.</span>
_<span class="token punctuation">.</span><span class="token function">dropWhile</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;active&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; objects for [&#39;pebbles&#39;]</span>
 
<span class="token comment">// The \`_.property\` iteratee shorthand.</span>
_<span class="token punctuation">.</span><span class="token function">dropWhile</span><span class="token punctuation">(</span>users<span class="token punctuation">,</span> <span class="token string">&#39;active&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; objects for [&#39;barney&#39;, &#39;fred&#39;, &#39;pebbles&#39;]</span>
</code></pre></div>`,13),o=[e];function c(r,l){return a(),s("div",null,o)}const u=n(p,[["render",c],["__file","dropWhile.html.vue"]]);export{u as default};
