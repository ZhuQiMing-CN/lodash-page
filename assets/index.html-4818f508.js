import{_ as t,M as o,p as r,q as p,R as a,t as s,N as e,a1 as l}from"./framework-96b046e1.js";const c="/lodash-page/images/lodash.png",i={},d=l('<p><img src="'+c+`" alt="lodash.png"></p><p>Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。</p><blockquote><p>Lodash 遵循 MIT 开源协议发布，并且支持最新的运行环境。 查看各个构件版本的区别并选择一个适合你的版本。</p></blockquote><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1><h2 id="浏览器环境" tabindex="-1"><a class="header-anchor" href="#浏览器环境" aria-hidden="true">#</a> 浏览器环境</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script src<span class="token operator">=</span><span class="token string">&quot;lodash.js&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre></div><h2 id="通过-npm" tabindex="-1"><a class="header-anchor" href="#通过-npm" aria-hidden="true">#</a> 通过 npm</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i <span class="token parameter variable">-g</span> <span class="token function">npm</span>
<span class="token function">npm</span> i <span class="token parameter variable">--save</span> lodash
</code></pre></div><h2 id="node-js" tabindex="-1"><a class="header-anchor" href="#node-js" aria-hidden="true">#</a> Node.js</h2><div class="language-javascript" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// Load the full build.</span>
<span class="token keyword">var</span> _ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;lodash&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Load the core build.</span>
<span class="token keyword">var</span> _ <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;lodash/core&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Load the FP build for immutable auto-curried iteratee-first data-last methods.</span>
<span class="token keyword">var</span> fp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;lodash/fp&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// Load method categories.</span>
<span class="token keyword">var</span> array <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;lodash/array&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> object <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;lodash/fp/object&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 
<span class="token comment">// Cherry-pick methods for smaller browserify/rollup/webpack bundles.</span>
<span class="token keyword">var</span> at <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;lodash/at&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> curryN <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;lodash/fp/curryN&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div>`,10),h={class:"custom-container warning"},u=a("p",{class:"custom-container-title"},"注意：",-1),k={href:"https://www.npmjs.com/package/n_",target:"_blank",rel:"noopener noreferrer"},_=a("h1",{id:"为什么选择-lodash",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#为什么选择-lodash","aria-hidden":"true"},"#"),s(" 为什么选择 Lodash ？")],-1),f=a("p",null,"Lodash 通过降低 array、number、objects、string 等等的使用难度从而让 JavaScript 变得更简单。 Lodash 的模块化方法 非常适用于：",-1),m=a("ul",null,[a("li",null,"遍历 array、object 和 string"),a("li",null,"对值进行操作和检测"),a("li",null,"创建符合功能的函数")],-1),g=a("h1",{id:"模块格式",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#模块格式","aria-hidden":"true"},"#"),s(" 模块格式")],-1),b=a("p",null,"Lodash 提供 多种构建方式 和模块格式。",-1),w={href:"https://www.npmjs.com/package/lodash",target:"_blank",rel:"noopener noreferrer"},v={href:"https://lodash.com/per-method-packages",target:"_blank",rel:"noopener noreferrer"},j={href:"https://www.npmjs.com/package/lodash-es",target:"_blank",rel:"noopener noreferrer"},x={href:"https://www.npmjs.com/package/babel-plugin-lodash",target:"_blank",rel:"noopener noreferrer"},y={href:"https://www.npmjs.com/package/lodash-webpack-plugin",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/lodash/lodash/tree/4.17.15-npm/fp",target:"_blank",rel:"noopener noreferrer"},q={href:"https://www.npmjs.com/package/lodash-amd",target:"_blank",rel:"noopener noreferrer"},N=a("h1",{id:"补充工具",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#补充工具","aria-hidden":"true"},"#"),s(" 补充工具")],-1),E={href:"https://github.com/smartprocure/futil-js",target:"_blank",rel:"noopener noreferrer"},I=a("h1",{id:"扩展阅读",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#扩展阅读","aria-hidden":"true"},"#"),s(" 扩展阅读")],-1),B={href:"https://github.com/lodash/lodash/blob/master/.github/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/lodash/lodash/releases/tag/4.0.0",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/lodash/lodash/wiki",target:"_blank",rel:"noopener noreferrer"},T=a("h1",{id:"兼容性",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#兼容性","aria-hidden":"true"},"#"),s(" 兼容性")],-1),V=a("p",null,"在 Chrome 74-75、Firefox 66-67、IE 11、Edge 18、Safari 11-12 和 Node.js 8-12 环境中测试通过。",-1);function R(F,J){const n=o("ExternalLinkIcon");return r(),p("div",null,[d,a("div",h,[u,a("p",null,[s("如需在 Node.js < 6 的 REPL 环境中使用 Lodash，请安装 "),a("a",k,[s("n_"),e(n)]),s("。")])]),_,f,m,g,b,a("ul",null,[a("li",null,[a("a",w,[s("lodash"),e(n)]),s(" & "),a("a",v,[s("per method packages"),e(n)])]),a("li",null,[a("a",j,[s("lodash-es"),e(n)]),s(", "),a("a",x,[s("babel-plugin-lodash"),e(n)]),s(", & "),a("a",y,[s("lodash-webpack-plugin"),e(n)])]),a("li",null,[a("a",L,[s("lodash/fp"),e(n)])]),a("li",null,[a("a",q,[s("lodash-amd"),e(n)])])]),N,a("p",null,[a("a",E,[s("futil-js"),e(n)]),s(" 是一套用来补足 lodash 的实用工具集。")]),I,a("ul",null,[a("li",null,[a("a",B,[s("贡献"),e(n)])]),a("li",null,[a("a",C,[s("版本说明"),e(n)])]),a("li",null,[a("a",S,[s("Wiki（更新记录、路线图等）"),e(n)])])]),T,V])}const P=t(i,[["render",R],["__file","index.html.vue"]]);export{P as default};