(self.webpackChunkLunarVim_com=self.webpackChunkLunarVim_com||[]).push([[483],{5943:(a,n,s)=>{"use strict";s.r(n),s.d(n,{data:()=>e});const e={key:"v-dcfb2e82",path:"/languages/javascript.html",title:"Javascript",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Install Syntax Highlighting",slug:"install-syntax-highlighting",children:[]},{level:2,title:"Install Language Server",slug:"install-language-server",children:[]},{level:2,title:"Formatters",slug:"formatters",children:[]},{level:2,title:"Linters",slug:"linters",children:[]},{level:2,title:"LSP Settings",slug:"lsp-settings",children:[]},{level:2,title:"Debugger",slug:"debugger",children:[]}],filePathRelative:"languages/javascript.md",git:{updatedTime:1628190986e3,contributors:[]}}},8760:(a,n,s)=>{"use strict";s.r(n),s.d(n,{default:()=>t});const e=(0,s(6252).uE)('<h1 id="javascript" tabindex="-1"><a class="header-anchor" href="#javascript" aria-hidden="true">#</a> Javascript</h1><h2 id="install-syntax-highlighting" tabindex="-1"><a class="header-anchor" href="#install-syntax-highlighting" aria-hidden="true">#</a> Install Syntax Highlighting</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>TSInstall javascript\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="install-language-server" tabindex="-1"><a class="header-anchor" href="#install-language-server" aria-hidden="true">#</a> Install Language Server</h2><div class="language-vim ext-vim line-numbers-mode"><pre class="language-vim"><code><span class="token punctuation">:</span>LspInstall typescript\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="formatters" tabindex="-1"><a class="header-anchor" href="#formatters" aria-hidden="true">#</a> Formatters</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>javascript<span class="token punctuation">.</span>formatters <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span>\n    exe <span class="token operator">=</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span> <span class="token comment">-- can be prettierd eslint, or eslint_d as well</span>\n    args <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="linters" tabindex="-1"><a class="header-anchor" href="#linters" aria-hidden="true">#</a> Linters</h2><div class="language-lua ext-lua line-numbers-mode"><pre class="language-lua"><code>lvim<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>javascript<span class="token punctuation">.</span>linters <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token punctuation">{</span>\n    exe <span class="token operator">=</span> <span class="token string">&quot;eslint&quot;</span><span class="token punctuation">,</span> <span class="token comment">-- can be eslint_d as well</span>\n    args <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> \n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="lsp-settings" tabindex="-1"><a class="header-anchor" href="#lsp-settings" aria-hidden="true">#</a> LSP Settings</h2><p>(TODO)</p><h2 id="debugger" tabindex="-1"><a class="header-anchor" href="#debugger" aria-hidden="true">#</a> Debugger</h2><p>(TODO)</p>',13),t={render:function(a,n){return e}}}}]);