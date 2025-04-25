import{j as e}from"./jsx-runtime-D_zvdyIk.js";const q=({label:m,error:c,size:D="md",...I})=>{const _={sm:"text-sm py-1 px-2",md:"text-base py-2 px-3",lg:"text-lg py-3 px-4"};return e.jsxs("div",{className:"flex flex-col gap-1",children:[m&&e.jsx("label",{className:"font-medium",children:m}),e.jsx("input",{...I,className:`border rounded-md ${_[D]} ${c?"border-red-500":"border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`}),c&&e.jsx("span",{className:"text-sm text-red-500",children:c})]})};q.__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}}},composes:["Omit"]};const V={title:"Data Entry/TextInput",component:q,tags:["autodocs"],args:{label:"Name",placeholder:"Enter your name"},parameters:{docs:{description:{component:"A basic text input component with label, error state and responsiveness."}}}},r={},s={args:{value:"Suman Raul"}},a={args:{error:"Name is required"}},t={args:{disabled:!0}},o={args:{size:"sm"}},n={args:{size:"lg"}};var l,i,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: "Suman Raul"
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,f,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    error: "Name is required"
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,S,h;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(h=(S=t.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var v,N,j;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: "sm"
  }
}`,...(j=(N=o.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var z,E,T;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: "lg"
  }
}`,...(T=(E=n.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const w=["Default","WithValue","Error","Disabled","Small","Large"];export{r as Default,t as Disabled,a as Error,n as Large,o as Small,s as WithValue,w as __namedExportsOrder,V as default};
