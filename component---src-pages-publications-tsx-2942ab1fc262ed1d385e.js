"use strict";(self.webpackChunkp4c_lab=self.webpackChunkp4c_lab||[]).push([[7047],{3962:function(e,t,r){var a=r(1883),l=r(7294);t.Z=e=>{let{to:t,children:r}=e;return l.createElement("button",{className:"group flex items-center justify-center\n                    p-0.5 text-center font-medium relative focus:z-10 focus:outline-none text-gray-900 bg-white border \n                    border-gray-200 enabled:hover:bg-gray-100\n                    enabled:hover:text-cyan-700 :ring-cyan-700 focus:text-cyan-700 dark:bg-transparent \n                    dark:text-gray-400 dark:border-gray-600 dark:enabled:hover:text-white dark:enabled:hover:bg-gray-700 rounded-lg focus:ring-2"},l.createElement(a.Link,{to:t},l.createElement("span",{className:"flex items-center transition-all duration-200 rounded-md text-sm px-4 py-2 font-sans"},r)))}},6138:function(e,t,r){r.r(t),r.d(t,{Head:function(){return m}});var a=r(7294),l=r(4001),n=r(8645),o=r(6335),i=r(577),s=r(231),c=r(3962);const d=["all","journal","conference","poster","patent"],u=e=>{var t;let{type:r,title:l,date:n,authors:d,words:u,sitePath:m,publisher:b,abbrev:v,volume:p,issue:f,pages:g,doi:y,year:h}=e;const k=[b&&v?`${b} (${v})`:b,p&&f?`${p} (${f})`:p,g].filter((e=>null!=e)).join(", "),{0:x,1:E}=(0,a.useState)(!1),w=`${d&&(null===(t=d[0])||void 0===t?void 0:t.replaceAll(/\s/g,""))||""}${h||""}${l.split(" ")[0]}`.toLowerCase().replaceAll(/[^\w\s]/g,"");let N="";const $={author:null==d?void 0:d.join(" AND "),title:l,volume:p,number:f,series:v,pages:g,doi:y,year:h};switch(r){case"journal":$.journal=b,N="article";break;case"conference":case"poster":$.booktitle=b,N="inproceedings";break;case"book":N="book";break;case"patent":case"misc":$.note=b,N="misc"}const j=`@${N}{${w},\n${Object.entries($).filter((e=>null!==e[1]&&void 0!==e[1])).map((e=>`\t${e[0]} = {${e[1]}}`)).join(",\n")}\n}`;return a.createElement(a.Fragment,null,a.createElement(o.u_,{popup:!0,show:x,onClose:()=>E(!1)},a.createElement(o.u_.Header,null),a.createElement(o.fe,null,a.createElement(i.P,{className:"whitespace-pre-wrap text-sm font-mono text-gray-900"},j))),a.createElement("div",{className:"flex flex-col items-start text-sm font-serif space-y-1"},a.createElement(i.Dr,{className:"font-serif leading-none text-gray-400 dark:text-gray-500"},n),a.createElement(i.H6,{className:"capitalize items-center font-sans"},l,a.createElement("button",{onClick:()=>E(!0)},a.createElement(i.hh,{className:"text-sm ml-1"},"[BIB]"))),d&&a.createElement(i.Dr,{className:"leading-1"},d.join(", ")," "),b&&a.createElement(i.Dr,{className:"italic"},k),y&&a.createElement(i.A,{href:`https://doi.org/${y}`,className:"font-serif"},"DOI: ",y),u>0&&a.createElement(c.Z,{to:m},"Read More",a.createElement(s.Z1Y,{className:"ml-2 h-3 w-3"}))))},m=()=>a.createElement(l.Z,{title:"Publications"});t.default=e=>{let{data:t}=e;const{publications:r}=t,{0:l,1:o}=(0,a.useState)("all");return a.createElement(n.Z,{activeLink:"publications"},a.createElement("div",null,a.createElement("div",{className:"sm:hidden"},a.createElement("select",{className:"capitalize bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",onChange:e=>o(e.target.value),defaultValue:"all",value:l},d.map((e=>a.createElement("option",{className:"capitalize"},e))))),a.createElement("ul",{className:"text-base font-medium text-center text-gray-500 hidden sm:flex border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"},d.map((e=>a.createElement("li",{className:"w-full"},a.createElement("button",{onClick:e=>o(e.currentTarget.id),id:e,className:l===e?"capitalize inline-block w-full p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-primary-100 dark:border-primary-100":"capitalize inline-block w-full p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"},e))))),a.createElement("ul",{className:"mt-12 space-y-8"},r.nodes.filter((e=>{var t;return"all"===l||(null===(t=e.frontmatter)||void 0===t?void 0:t.type)===l})).map((e=>{var t,r,l,n,o,i,s,c,d,m,b,v,p,f;return a.createElement("li",null,a.createElement(u,{type:(null===(t=e.frontmatter)||void 0===t?void 0:t.type)||"misc",title:(null===(r=e.frontmatter)||void 0===r?void 0:r.title)||"",date:(null===(l=e.frontmatter)||void 0===l?void 0:l.date)||"",authors:null===(n=e.frontmatter)||void 0===n?void 0:n.authors,words:(null===(o=e.fields)||void 0===o||null===(i=o.timeToRead)||void 0===i?void 0:i.words)||0,sitePath:(null===(s=e.fields)||void 0===s?void 0:s.sitePath)||"",publisher:null===(c=e.frontmatter)||void 0===c?void 0:c.publisher,abbrev:null===(d=e.frontmatter)||void 0===d?void 0:d.abbrev,volume:null===(m=e.frontmatter)||void 0===m?void 0:m.volume,issue:null===(b=e.frontmatter)||void 0===b?void 0:b.issue,pages:null===(v=e.frontmatter)||void 0===v?void 0:v.pages,doi:null===(p=e.frontmatter)||void 0===p?void 0:p.doi,year:null===(f=e.frontmatter)||void 0===f?void 0:f.year}))})))))}}}]);
//# sourceMappingURL=component---src-pages-publications-tsx-2942ab1fc262ed1d385e.js.map