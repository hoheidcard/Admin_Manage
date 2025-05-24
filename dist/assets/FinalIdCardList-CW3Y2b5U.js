import{u as D,s as H,k as T,e as L,n as S,d as f,m as M,r as v,o as R,c as V,a as i,b as w,i as q,w as y,v as $,I as N}from"./index-DwPljJjs.js";import{J as O}from"./JsBarcode-CecgjBbI.js";import{b as P}from"./browser-CeceZ__e.js";import{a as B}from"./studentFields-fvyCakD3.js";const F={class:"section import-page"},G={class:"container"},U={class:"main-card mid-cardd"},E={class:"card-header"},J={class:"left"},W={class:"icon"},Y={class:"right"},Z={class:"searchbar"},j={class:"searchbar"},A={class:"text text-grey"},Q={class:"icons"},K=i("div",{class:"tooltip"},"Print & Download",-1),X={class:"card-body id-card-body"},tt={id:"download-pdf"},dt={__name:"FinalIdCardList",setup(et){const _=D(),c=H(),m=T(null),a=L({organizationId:null,classId:null,organizationSettingId:null,height:297,width:210,file:null,card:[]});S(async()=>{h(),c.query.organizationId&&c.query.classId&&(a.organizationId=c.query.organizationId,a.classId=c.query.classId,I())});const b=f(()=>{h();const e=window.devicePixelRatio*96;return a.height/25.4*e}),x=f(()=>{h();const e=window.devicePixelRatio*96;return a.width/25.4*e});function h(){const e=document.createElement("style");e.type="text/css";const o=`@page { size: ${a.width}mm ${a.height}mm; }`;e.innerHTML=o,document.head.appendChild(e)}const s=e=>{const o=window.devicePixelRatio*96,n=25.4/2;return e/n*o};async function I(){const e=await _.dispatch("OrganizationStudent/getStudentFinalForCard",{organizationId:a.organizationId,classId:a.classId});let o="";if(e.status===200&&e.data.result.length>0){console.log(e.data.result);for(const n of e.data.result)if(n.houseZone_card||n.classList_card||n.classList_pCard){let t;try{c.query.status==="House"?t=JSON.parse(n.houseZone_card):c.query.status==="Class"?t=JSON.parse(n.classList_card):c.query.status==="Parent"&&(t=JSON.parse(n.classList_pCard))}catch{t=null}if(!t)return;const d=`
            <div class="design-card"
              style="
                height: ${s(t.cardHeight)}px;
                width: ${s(t.cardWidth)}px;
                margin-bottom: ${s(t.cardVerticalGap)}px;
                margin-right: ${s(t.cardHorizontalGap)}px;
                margin-left: ${s(t.cardHorizontalGap)}px;
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
                ${await g(t.frontCard,n)}
              </div>
            </div>
            ${t.side!=="Single"?`
            <div class="design-card"
              style="
                height: ${s(t.cardHeight)}px;
                width: ${s(t.cardWidth)}px;
                margin-bottom: ${s(t.cardVerticalGap)}px;
                margin-right: ${s(t.cardHorizontalGap)}px;
                margin-left: ${s(t.cardHorizontalGap)}px;
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
                ${await g(t.backCard,n)}
              </div>
            </div>`:""}
          `;o+=d}}m.value.innerHTML=o}async function g(e,o){let n="";for(const t of e){let d=null;const p=B.find(r=>r.name===t.id);if(p){let r=o[p.id];if(isNaN(Date.parse(r)))d=r;else{const u=new Date(r);d=C(u)}}let l="";if(t.content.type==="Image"&&(l=`<div style="width: 100%; height: 100%;">
        <img
          id="${t.id}"
          src="${t.id?d:""}"
          alt=""
          style="
            height: 100%;
            width: 100%;
            border-radius: ${t.content["border-radius"]};
            border: ${t.content.border} ${t.content["border-color"]};
          "
        />
      </div>`),t.content.type==="Barcode"){const r=document.createElement("canvas");O(r,d,{format:"CODE128",width:2,height:60,displayValue:!1});const u=r.toDataURL();l=`<div style="width: 100%; height: 100%;">
          <img
            id="${t.id}"
            src="${u}"
            alt=""
            style="
              height: 100%;
              width: 100%;
              border-radius: ${t.content["border-radius"]};
              border: ${t.content.border} ${t.content["border-color"]};
            "
          />
        </div>`}if(t.content.type==="QR"){const r=await P.toDataURL(d);l=`<div style="width: 100%; height: 100%;">
          <img
            id="${t.id}"
            src="${r}"
            alt=""
            style="
              height: 100%;
              width: 100%;
              border-radius: ${t.content["border-radius"]};
              border: ${t.content.border} ${t.content["border-color"]};
            "
          />
        </div>`}t.content.type==="Text"&&(l=`<div
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
        ${t.id?d:t.name}
      </div>`);const k=`
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
          ${l}
        </div>
      </div>
    `;n+=k}return n}async function z(){const e=document.getElementById("download-pdf");document.body.innerHTML;const o=window.open("","_self");o.document.write(e.innerHTML),o.document.close(),o.print(),o.close(),location.reload()}function C(e){return e?M(e).format("DD.MM.YYYY"):"-"}return(e,o)=>{const n=v("icon-card"),t=v("icon-download");return R(),V("div",F,[i("div",G,[i("div",U,[i("div",E,[i("div",J,[i("div",W,[w(n,{class:"rotate-18"})]),q(" Final Id Cards ")]),i("div",Y,[i("div",Z,[y(i("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=d=>a.height=d),placeholder:"Height(mm)"},null,512),[[$,a.height]])]),i("div",j,[y(i("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=d=>a.width=d),placeholder:"Width(mm)"},null,512),[[$,a.width]])]),i("div",A,[i("div",Q,[i("div",{class:"icon tooltip-wrapper pointer",onClick:z},[w(t,{class:""}),K])])])])]),i("div",X,[i("div",tt,[i("div",{class:"page",style:N({width:x.value+"px",width:b.value+"px",padding:0,margin:"0 auto","border-radius":"5px","break-inside":"avoid"})},[i("div",{ref_key:"htmlContainer",ref:m,style:{display:"flex","flex-wrap":"wrap"}},null,512)],4)])])])])])}}};export{dt as default};
