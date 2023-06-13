import{_ as a,p as n,q as s,a1 as e}from"./framework-96b046e1.js";const c={},t=e(`<h1 id="lodash-compact" tabindex="-1"><a class="header-anchor" href="#lodash-compact" aria-hidden="true">#</a> lodash compact</h1><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>创建一个新数组，包含原数组中所有的非假值元素。</p></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">compact</span><span class="token punctuation">(</span>array<span class="token punctuation">)</span>
</code></pre></div><p>创建一个新数组，包含原数组中所有的非假值元素。例如 <code>false</code> , <code>null</code> , <code>0</code> , <code>&quot;&quot;</code> , <code>undefined</code> , 和 <code>NaN</code> 都是被认为是“假值”。</p><h2 id="引入版本" tabindex="-1"><a class="header-anchor" href="#引入版本" aria-hidden="true">#</a> 引入版本</h2><p>0.1.0</p><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><ol><li><code>array</code> (Array): 待处理的数组</li></ol><h2 id="返回" tabindex="-1"><a class="header-anchor" href="#返回" aria-hidden="true">#</a> 返回</h2><p>(Array): 返回过滤掉假值的新数组。</p><h2 id="例子" tabindex="-1"><a class="header-anchor" href="#例子" aria-hidden="true">#</a> 例子</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code>_<span class="token punctuation">.</span><span class="token function">compact</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// =&gt; [1, 2, 3]</span>
</code></pre></div>`,13),o=[t];function p(d,i){return n(),s("div",null,o)}const l=a(c,[["render",p],["__file","compact.html.vue"]]);export{l as default};