import{u as H,s as I,k as T,e as S,n as L,d as f,m as M,r as v,o as P,c as R,a as i,b as w,i as V,w as y,v as $,I as N}from"./index-DwPljJjs.js";import{b as O}from"./browser-CeceZ__e.js";import{a as B}from"./studentFields-fvyCakD3.js";const F={class:"section import-page"},q={class:"container"},G={class:"main-card mid-cardd"},U={class:"card-header"},E={class:"left"},W={class:"icon"},J={class:"right"},Y={class:"searchbar"},Z={class:"searchbar"},j={class:"text text-grey"},A={class:"icons"},Q=i("div",{class:"tooltip"},"Print & Download",-1),K={class:"card-body id-card-body"},X={id:"download-pdf"},nt={__name:"FinalIdCard",setup(tt){const _=H(),c=I(),m=T(null),r=S({organizationId:null,classId:null,organizationSettingId:null,height:297,width:210,file:null,card:[]});L(async()=>{h(),c.query.id&&C()});const b=f(()=>{h();const e=window.devicePixelRatio*96;return r.height/25.4*e}),x=f(()=>{h();const e=window.devicePixelRatio*96;return r.width/25.4*e});function h(){const e=document.createElement("style");e.type="text/css";const o=`@page { size: ${r.width}mm ${r.height}mm; }`;e.innerHTML=o,document.head.appendChild(e)}const d=e=>{const o=window.devicePixelRatio*96,n=25.4/2;return e/n*o};async function C(){const e=await _.dispatch("OrganizationStudent/getStudentFinalForCardProfile",{id:c.query.id});let o="";if(e.status===200&&e.data.result.length>0){console.log(e.data.result);for(const n of e.data.result)if(n.houseZone_card||n.classList_card||n.classList_pCard){let t;try{c.query.status==="House"?t=JSON.parse(n.houseZone_card):c.query.status==="Class"?t=JSON.parse(n.classList_card):c.query.status==="Parent"&&(t=JSON.parse(n.classList_pCard))}catch{t=null}if(!t)return;const a=`
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
                ${await g(t.frontCard,n)}
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
                ${await g(t.backCard,n)}
              </div>
            </div>`:""}
          `;o+=a}}m.value.innerHTML=o}async function g(e,o){let n="";for(const t of e){let a=null;const p=B.find(s=>s.name===t.id);if(p){let s=o[p.id];if(isNaN(Date.parse(s)))a=s;else{const u=new Date(s);a=k(u)}}let l="";if(t.content.type==="Image"&&(l=`<div style="width: 100%; height: 100%;">
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
      </div>`),t.content.type==="Barcode"){const s=document.createElement("canvas");JsBarcode(s,a,{format:"CODE128",width:2,height:60,displayValue:!1});const u=s.toDataURL();l=`<div style="width: 100%; height: 100%;">
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
        </div>`}if(t.content.type==="QR"){const s=await O.toDataURL(a);l=`<div style="width: 100%; height: 100%;">
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
        ${t.id?a:t.name}
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
          ${l}
        </div>
      </div>
    `;n+=D}return n}async function z(){const e=document.getElementById("download-pdf");document.body.innerHTML;const o=window.open("","_self");o.document.write(e.innerHTML),o.document.close(),o.print(),o.close(),location.reload()}function k(e){return e?M(e).format("DD.MM.YYYY"):"-"}return(e,o)=>{const n=v("icon-card"),t=v("icon-download");return P(),R("div",F,[i("div",q,[i("div",G,[i("div",U,[i("div",E,[i("div",W,[w(n,{class:"rotate-18"})]),V(" Final Id Cards ")]),i("div",J,[i("div",Y,[y(i("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=a=>r.height=a),placeholder:"Height(mm)"},null,512),[[$,r.height]])]),i("div",Z,[y(i("input",{type:"text","onUpdate:modelValue":o[1]||(o[1]=a=>r.width=a),placeholder:"Width(mm)"},null,512),[[$,r.width]])]),i("div",j,[i("div",A,[i("div",{class:"icon tooltip-wrapper pointer",onClick:z},[w(t,{class:""}),Q])])])])]),i("div",K,[i("div",X,[i("div",{class:"page",style:N({width:x.value+"px",width:b.value+"px",padding:0,margin:"0 auto","border-radius":"5px","break-inside":"avoid"})},[i("div",{ref_key:"htmlContainer",ref:m,style:{display:"flex","flex-wrap":"wrap"}},null,512)],4)])])])])])}}};export{nt as default};
