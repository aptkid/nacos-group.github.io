import"./hoisted.BcgZ7QHN.js";import"./markdown-toc.CVbZTTvH.js";import"./hoisted.CVJg6k9j.js";import"./Tabs.astro_astro_type_script_index_0_lang.BqK4QFew.js";import"./preload-helper.BiBI96sQ.js";import"./index.CTbVEFV3.js";import"./consts.DNMxLmKy.js";function r(){let e=new URL(window.location.href).searchParams.get("source");e&&(e=e.replace(/_/g,"/"));const n=document.querySelector("#back-btn a");n&&(n.onclick=c=>{c.preventDefault();const t=new URLSearchParams(window.location.search);t.delete("source");let o="";e&&e!=="undefined"?o=`/${e}/`:o="/blog/";const a=`${o}${t.toString()?`?${t.toString()}`:""}`;window.location.href=a})}document.addEventListener("astro:page-load",r),document.addEventListener("DOMContentLoaded",r);
