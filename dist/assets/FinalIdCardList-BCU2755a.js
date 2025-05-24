import{u as D,s as H,k as T,e as S,n as M,d as f,m as R,r as v,o as V,c as L,a as i,b as w,i as B,w as y,v as $,I as F}from"./index-DwPljJjs.js";import{J as P}from"./JsBarcode-CecgjBbI.js";import{b as G}from"./browser-CeceZ__e.js";import{s as N}from"./staffFields-CSxPOYkg.js";const O={class:"section import-page"},U={class:"container"},q={class:"main-card mid-cardd"},E={class:"card-header"},W={class:"left"},Y={class:"icon"},J={class:"right"},j={class:"searchbar"},A={class:"searchbar"},Q={class:"text text-grey"},K={class:"icons"},X=i("div",{class:"tooltip"},"Print & Download",-1),Z={class:"card-body id-card-body"},tt={id:"download-pdf"},dt={__name:"FinalIdCardList",setup(et){const b=D(),l=H(),g=T(null),n=S({organizationId:null,classId:null,organizationSettingId:null,height:297,width:210,file:null,card:[]});M(async()=>{h(),l.query.organizationId&&l.query.organizationId&&(n.organizationId=l.query.organizationId,n.classId=l.query.classId,I())});const x=f(()=>{h();const e=window.devicePixelRatio*96;return n.height/25.4*e}),_=f(()=>{h();const e=window.devicePixelRatio*96;return n.width/25.4*e});function h(){const e=document.createElement("style");e.type="text/css";const o=`@page { size: ${n.width}mm ${n.height}mm; }`;e.innerHTML=o,document.head.appendChild(e)}const s=e=>{const o=window.devicePixelRatio*96,d=25.4/2;return e/d*o};async function I(){const e=await b.dispatch("OrganizationStudent/getStaffFinalForCard",{organizationId:n.organizationId,classId:n.classId});let o="";if(e.status===200&&e.data.result.length>0){console.log(e.data.result);for(const d of e.data.result)if(d.designation_card){let t=JSON.parse(d.designation_card);if(!t)return;const a=`
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
                ${await m(t.frontCard,d)}
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
                ${await m(t.backCard,d)}
              </div>
            </div>`:""}
          `;o+=a}}g.value.innerHTML=o}async function m(e,o){let d="";for(const t of e){let a=null;const u=N.find(r=>r.name===t.id);if(u){let r=o[u.id];if(isNaN(Date.parse(r)))a=r;else{const p=new Date(r);a=C(p)}}let c="";if(t.content.type==="Image"&&(c=`<div style="width: 100%; height: 100%;">
        <img
          id="${t.id}"
          src="${t.id?a:""}"
          alt=""
          style="
            height: 100%;
            width: 100%;
            border-radius: ${t.content["border-radius"]};
            border: ${t.content.border} ${t.content["border-color"]};
          "
        />
      </div>`),t.content.type==="Barcode"){const r=document.createElement("canvas");P(r,a,{format:"CODE128",width:2,height:60,displayValue:!1});const p=r.toDataURL();c=`<div style="width: 100%; height: 100%;">
          <img
            id="${t.id}"
            src="${p}"
            alt=""
            style="
              height: 100%;
              width: 100%;
              border-radius: ${t.content["border-radius"]};
              border: ${t.content.border} ${t.content["border-color"]};
            "
          />
        </div>`}if(t.content.type==="QR"){const r=await G.toDataURL(a);c=`<div style="width: 100%; height: 100%;">
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
        ${t.id?a:t.name}
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
          ${c}
        </div>
      </div>
    `;d+=k}return d}async function z(){const e=document.getElementById("download-pdf");document.body.innerHTML;const o=window.open("","_self");o.document.write(e.innerHTML),o.document.close(),o.print(),o.close(),location.reload()}function C(e){return e?R(e).format("DD.MM.YYYY"):"-"}return(e,o)=>{const d=v("icon-card"),t=v("icon-download");return V(),L("div",O,[i("div",U,[i("div",q,[i("div",E,[i("div",W,[i("div",Y,[w(d,{class:"rotate-18"})]),B(" Final Id Cards ")]),i("div",J,[i("div",j,[y(i("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>n.height=a),placeholder:"Height(mm)"},null,512),[[$,n.height]])]),i("div",A,[y(i("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=a=>n.width=a),placeholder:"Width(mm)"},null,512),[[$,n.width]])]),i("div",Q,[i("div",K,[i("div",{class:"icon tooltip-wrapper pointer",onClick:z},[w(t,{class:""}),X])])])])]),i("div",Z,[i("div",tt,[i("div",{class:"page",style:F({width:_.value+"px",width:x.value+"px",padding:0,margin:"0 auto","border-radius":"5px","break-inside":"avoid"})},[i("div",{ref_key:"htmlContainer",ref:g,style:{display:"flex","flex-wrap":"wrap"}},null,512)],4)])])])])])}}};export{dt as default};
