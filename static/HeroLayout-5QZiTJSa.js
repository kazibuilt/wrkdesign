import{a1 as i,Z as l}from"./main-biu6-4ID.js";import{z as d,r as u,s as f,d as m,a as _,D as g,_ as v,E as h,F as w,K as p,M as c}from"./app-4ccm2Cjh.js";const $=d({name:"HeroLayout",emits:["progress"],setup(e,{emit:t,expose:a}){const n=i("wrapper"),o=u(0),s=f();return m(()=>{s.value=l.timeline({scrollTrigger:{trigger:n.value,start:"top top",end:"+=100%",scrub:!0}}),s.value.fromTo(o,{value:1},{value:2,ease:"none",duration:.3},"<")}),_(o,r=>t("progress",r)),g(()=>{var r;return(r=s.value)==null?void 0:r.kill()}),a({tl:s}),{progress:o}}}),k={ref:"wrapper",class:"wrapper"},y={class:"content motion-safe:sticky motion-safe:top-0"},B={class:"content relative"};function H(e,t,a,n,o,s){return h(),w("section",k,[p("div",y,[c(e.$slots,"sticky",{progress:e.progress},void 0,!0)]),p("div",B,[c(e.$slots,"default",{progress:e.progress},void 0,!0)])],512)}const E=v($,[["render",H],["__scopeId","data-v-88d5a0ac"]]);export{E as H};
//# sourceMappingURL=HeroLayout-5QZiTJSa.js.map
