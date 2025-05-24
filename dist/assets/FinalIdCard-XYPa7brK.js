import{u as I,s as H,k as T,e as S,n as M,d as f,m as R,r as v,o as V,c as P,a as i,b as w,i as B,w as $,v as y,I as F}from"./index-DwPljJjs.js";import{J as L}from"./JsBarcode-CecgjBbI.js";import{b as G}from"./browser-CeceZ__e.js";import{s as N}from"./staffFields-CSxPOYkg.js";const O={class:"section import-page"},U={class:"container"},E={class:"main-card mid-cardd"},W={class:"card-header"},Y={class:"left"},q={class:"icon"},J={class:"right"},j={class:"searchbar"},A={class:"searchbar"},Q={class:"text text-grey"},K={class:"icons"},X=i("div",{class:"tooltip"},"Print & Download",-1),Z={class:"card-body id-card-body"},tt={id:"download-pdf"},dt={__name:"FinalIdCard",setup(et){const b=I(),p=H(),m=T(null),r=S({organizationId:null,classId:null,organizationSettingId:null,height:297,width:210,file:null,card:[]});M(async()=>{l(),p.query.id&&z()});const x=f(()=>{l();const e=window.devicePixelRatio*96;return r.height/25.4*e}),_=f(()=>{l();const e=window.devicePixelRatio*96;return r.width/25.4*e});function l(){const e=document.createElement("style");e.type="text/css";const o=`@page { size: ${r.width}mm ${r.height}mm; }`;e.innerHTML=o,document.head.appendChild(e)}const d=e=>{const o=window.devicePixelRatio*96,a=25.4/2;return e/a*o};async function z(){const e=await b.dispatch("OrganizationStudent/getStaffFinalForCardProfile",{id:p.query.id});console.log(e);let o="";if(e.status===200&&e.data.result.length>0){console.log(e.data.result);for(const a of e.data.result)if(a.designation_card){let t=JSON.parse(a.designation_card);if(!t)return;const n=`
            <div class="design-card"
              style="
                height: ${d(t.cardHeight)}px;
                width: ${d(t.cardWidth)}px;
                margin-bottom: ${d(t.cardVerticalGap)}px;
                margin-right: ${d(t.cardHorizontalGap)}px;
                margin-left: ${d(t.cardHorizontalGap)}px;
              "
            >
              <div class="front-side"
                style="
                  width: 100%;
                  height: 100%;
                  display: flex;
                  overflow: hidden;
                  padding: 3px;
                  border: 1px solid #ccc;
                  background-image: url('${t.frontCardImage}');
                  background-size: cover;
                  background-position: center;
                "
              >
                ${await g(t.frontCard,a)}
              </div>
            </div>
            ${t.side!=="Single"?`
            <div class="design-card"
              style="
                height: ${d(t.cardHeight)}px;
                width: ${d(t.cardWidth)}px;
                margin-bottom: ${d(t.cardVerticalGap)}px;
                margin-right: ${d(t.cardHorizontalGap)}px;
                margin-left: ${d(t.cardHorizontalGap)}px;
              "
            >
              <div class="back-side"
                style="
                  width: 100%;
                  height: 100%;
                  display: flex;
                  overflow: hidden;
                  padding: 3px;
                  border: 1px solid #ccc;
                  background-image: url('${t.backCardImage}');
                  background-size: cover;
                  background-position: center;
                "
              >
                ${await g(t.backCard,a)}
              </div>
            </div>`:""}
          `;o+=n}}m.value.innerHTML=o}async function g(e,o){let a="";for(const t of e){let n=null;const u=N.find(s=>s.name===t.id);if(u){let s=o[u.id];if(isNaN(Date.parse(s)))n=s;else{const h=new Date(s);n=k(h)}}let c="";if(t.content.type==="Image"&&(c=`<div style="width: 100%; height: 100%;">
        <img
          id="${t.id}"
          src="${t.id?n:""}"
          alt=""
          style="
            height: 100%;
            width: 100%;
            border-radius: ${t.content["border-radius"]};
            border: ${t.content.border} ${t.content["border-color"]};
          "
        />
      </div>`),t.content.type==="Barcode"){const s=document.createElement("canvas");L(s,n,{format:"CODE128",width:2,height:60,displayValue:!1});const h=s.toDataURL();c=`<div style="width: 100%; height: 100%;">
          <img
            id="${t.id}"
            src="${h}"
            alt=""
            style="
              height: 100%;
              width: 100%;
              border-radius: ${t.content["border-radius"]};
              border: ${t.content.border} ${t.content["border-color"]};
            "
          />
        </div>`}if(t.content.type==="QR"){const s=await G.toDataURL(n);c=`<div style="width: 100%; height: 100%;">
          <img
            id="${t.id}"
            src="${s}"
            alt=""
            style="
              height: 100%;
              width: 100%;
              border-radius: ${t.content["border-radius"]};
              border: ${t.content.border} ${t.content["border-color"]};
            "
          />
        </div>`}t.content.type==="Text"&&(c=`<div
        id="${t.id}"
        style="
          color: ${t.content.color};
          font-weight: ${t.content["font-weight"]};
          font-style: ${t.content["font-style"]};
          font-size: ${t.content["font-size"]};
          line-height: ${t.content["line-height"]};
          font-family: ${t.content["font-family"]};
          text-align: ${t.content["text-align"]};
        "
      >
        ${t.id?n:t.name}
      </div>`);const D=`
      <div>
        <div
          style="
            touch-action: none;
            position: absolute;
            box-sizing: border-box;
            transform: translate(${t.props.left}px, ${t.props.top}px) ${t.rotate};
            z-index: auto;
            user-select: auto;
            width: ${t.props.w}px;
            height: ${t.props.h}px;
          "
        >
          ${c}
        </div>
      </div>
    `;a+=D}return a}async function C(){const e=document.getElementById("download-pdf");document.body.innerHTML;const o=window.open("","_self");o.document.write(e.innerHTML),o.document.close(),o.print(),o.close(),location.reload()}function k(e){return e?R(e).format("DD.MM.YYYY"):"-"}return(e,o)=>{const a=v("icon-card"),t=v("icon-download");return V(),P("div",O,[i("div",U,[i("div",E,[i("div",W,[i("div",Y,[i("div",q,[w(a,{class:"rotate-18"})]),B(" Final Id Cards ")]),i("div",J,[i("div",j,[$(i("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=n=>r.height=n),placeholder:"Height(mm)"},null,512),[[y,r.height]])]),i("div",A,[$(i("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=n=>r.width=n),placeholder:"Width(mm)"},null,512),[[y,r.width]])]),i("div",Q,[i("div",K,[i("div",{class:"icon tooltip-wrapper pointer",onClick:C},[w(t,{class:""}),X])])])])]),i("div",Z,[i("div",tt,[i("div",{class:"page",style:F({width:_.value+"px",width:x.value+"px",padding:0,margin:"0 auto","border-radius":"5px","break-inside":"avoid"})},[i("div",{ref_key:"htmlContainer",ref:m,style:{display:"flex","flex-wrap":"wrap"}},null,512)],4)])])])])])}}};export{dt as default};
