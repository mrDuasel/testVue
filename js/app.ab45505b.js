(function(e){function t(t){for(var i,r,s=t[0],l=t[1],c=t[2],u=0,h=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(h.length)h.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},o={app:0},a=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",[i("v-app-bar",{attrs:{app:"",color:"primary"}},[i("v-container",[i("div",{staticClass:"main-header"},[i("img",{attrs:{src:n("cf05")}}),i("h1",{staticClass:"topic"},[e._v(" Компьютерная система для формирования виртуальной модели кафедры с учетом программно-аппаратных комплексов разных поколений ")]),i("v-btn",{attrs:{href:"https://test.nutrientplaner.ru:8111/admin/",small:""}},[e._v("Вход для администратора")])],1)])],1),i("v-main",[i("Main")],1)],1)},a=[],r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",[i("div",{staticClass:"main__img"},[i("h1",[e._v("Добро пожалость в компьютерную систему!")]),i("img",{attrs:{src:n("ae49")}})]),i("v-row",{staticClass:"divfind",attrs:{align:"center",justify:"center"}},[i("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.exploitationButton,expression:"exploitationButton"}],attrs:{large:"",color:"primary"},on:{click:function(t){return e.showExploitation()}}},[e._v(" Просмотр помещений с учетом ПАК "),i("v-icon",{attrs:{right:""}},[e._v("mdi-card-search-outline")])],1),i("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.reestr,expression:"reestr"}],attrs:{large:"",color:"primary"},on:{click:function(t){return e.showReestr()}}},[e._v(" Реестр ПАК "),i("v-icon",{attrs:{right:""}},[e._v("mdi-card-search-outline")])],1),i("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.startBtns,expression:"startBtns"}],attrs:{large:"",color:"primary"},on:{click:function(t){return e.poiskEVMbutton()}}},[e._v(" Поиск по названию ПАК "),i("v-icon",{attrs:{right:""}},[e._v("mdi-card-search-outline")])],1),i("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.startBtns,expression:"startBtns"}],attrs:{large:"",color:"primary"},on:{click:function(t){return e.kriteriyEVMbutton()}}},[e._v("Просмотр ПАК по выбранным критериям")]),i("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.backToMenu,expression:"backToMenu"}],attrs:{large:"",color:"primary"},on:{click:function(t){e.clearBox("exploitation-evm__virtualmodel"),e.clearBox("container"),e.toStart()}}},[e._v("Вернуться назад в главное меню")])],1),i("v-autocomplete",{directives:[{name:"show",rawName:"v-show",value:e.poisk,expression:"poisk"}],attrs:{label:"Введите нужное название ПАК",items:e.evm_api,"item-text":"name","return-object":"","hide-no-data":""},on:{change:function(t){return e.clearBox("container")}},model:{value:e.pickedModel,callback:function(t){e.pickedModel=t},expression:"pickedModel"}}),i("v-select",{directives:[{name:"show",rawName:"v-show",value:e.generationClose,expression:"generationClose"}],attrs:{label:"Выберите поколение программно-аппаратного комплекса",items:e.evm_api,"item-text":"generation","return-object":"","hide-no-data":""},on:{change:function(t){return e.clearBox("container")}},model:{value:e.pickedGeneration,callback:function(t){e.pickedGeneration=t},expression:"pickedGeneration"}}),null!=e.pickedGeneration?i("v-autocomplete",{attrs:{label:"Выберите тип программно-аппаратного комплекса",items:e.evm_api,"item-text":"type","return-object":"","hide-no-data":""},on:{change:function(t){return e.clearBox("container")}},model:{value:e.pickedType,callback:function(t){e.pickedType=t},expression:"pickedType"}}):e._e(),null!=e.pickedType?i("v-autocomplete",{attrs:{label:"Выберите программно-аппаратный комплекс",items:e.computedFilterdModels,"item-text":"name","return-object":"","hide-no-data":""},on:{change:function(t){return e.clearBox("container")}},model:{value:e.pickedModel,callback:function(t){e.pickedModel=t},expression:"pickedModel"}}):e._e(),e.pickedModel?i("v-row",[i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{outlined:"",label:"Поколение ПАК",readonly:!0,value:e.pickedModel.generation}})],1),i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{outlined:"",label:"Тип ПАК",readonly:!0,value:e.pickedModel.type}})],1),i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{outlined:"",label:"Научные направления и решаемые задачи",readonly:!0,value:e.pickedModel.scientific}})],1),e._l(e.pickedModel.passport,(function(e){return i("v-col",{key:e.id,attrs:{cols:"6"}},[i("v-text-field",{attrs:{outlined:"",label:e.param.name,readonly:!0,value:e.value}})],1)}))],2):e._e(),i("div",{staticClass:"exploitation-evm"},[i("div",{staticClass:"exploitation-evm__info"},[i("v-select",{directives:[{name:"show",rawName:"v-show",value:e.exploitationPoisk,expression:"exploitationPoisk"}],attrs:{label:"Выберите период эксплуатации",items:e.exploitation_api,"item-text":"name","return-object":"","hide-no-data":""},model:{value:e.exploitationModel,callback:function(t){e.exploitationModel=t},expression:"exploitationModel"}}),null!=e.exploitationModel?i("v-select",{attrs:{items:e.sapr,label:"Выберите подразделение","item-text":"name"}}):e._e(),null!=e.exploitationModel?i("v-select",{attrs:{label:"Выберите помещение",items:e.exploitationModel.exploitation,"item-text":"room.name","return-object":"","hide-no-data":""},on:{change:function(t){return e.create3Dexploitation()}},model:{value:e.roomModel,callback:function(t){e.roomModel=t},expression:"roomModel"}}):e._e(),null!=e.roomModel?i("v-select",{attrs:{label:"ПАК в данном помещении",items:e.roomModel.room.rooms3d,"item-text":"evm3d.name","return-object":"","hide-no-data":""},model:{value:e.pickedEVM,callback:function(t){e.pickedEVM=t},expression:"pickedEVM"}}):e._e(),null!=e.pickedEVM?i("v-row",{directives:[{name:"show",rawName:"v-show",value:e.pickedEvmShow,expression:"pickedEvmShow"}]},[i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{outlined:"",label:"Поколение ПАК",readonly:!0,value:e.pickedEVM.evm3d.generation}})],1),i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{outlined:"",label:"Тип ПАК",readonly:!0,value:e.pickedEVM.evm3d.type}})],1),i("v-col",{attrs:{cols:"6"}},[i("v-text-field",{attrs:{outlined:"",label:"Научные направления и решаемые задачи",readonly:!0,value:e.pickedEVM.evm3d.scientific}})],1),e._l(e.pickedEVM.evm3d.passport,(function(e){return i("v-col",{key:e.id,attrs:{cols:"6"}},[i("v-text-field",{attrs:{outlined:"",label:e.param.name,readonly:!0,value:e.value}})],1)}))],2):e._e(),i("div",{staticClass:"param-buttons"},[i("v-btn",{directives:[{name:"show",rawName:"v-show",value:null!=e.pickedEVM,expression:"pickedEVM != null"}],staticClass:"param-buttons__show",attrs:{large:"",color:"primary"},on:{click:function(t){return e.showParams()}}},[e._v("Показать информацию о ПАК")]),i("v-btn",{directives:[{name:"show",rawName:"v-show",value:null!=e.pickedEVM,expression:"pickedEVM != null"}],attrs:{large:"",color:"primary"},on:{click:function(t){return e.closeParams()}}},[e._v("Закрыть информацию о ПАК")])],1)],1),i("div",{directives:[{name:"show",rawName:"v-show",value:e.showExploitation3d,expression:"showExploitation3d"}],attrs:{id:"exploitation-evm__virtualmodel"}})]),null!=e.pickedModel?i("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.create3d()}}},[e._v("Вывести виртуальную модель")]):e._e(),null!=e.pickedModel?i("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.clearBox("container")}}},[e._v("Закрыть виртуальную модель")]):e._e(),i("div",{directives:[{name:"show",rawName:"v-show",value:e.show3d,expression:"show3d"}],attrs:{id:"container"}})],1)},s=[],l=(n("4de4"),n("d3b7"),n("5a89")),c=n("34ad"),d=n("4721"),u=n("5c54"),h=n.n(u),p=n("bc3a"),m=n.n(p),v={name:"Main",data:function(){return{sapr:{name:"САПРиУ"},pickedEvmShow:!1,pickedEVM:null,roomModel:null,exploitationModel:null,exploitationPoisk:!1,pickedType:null,pickedGeneration:null,pickedModel:null,filterdModels:[],filterdType:[],camera:null,point:null,hemiLight:null,spotLight:null,fullScreen:null,scene:null,controls:null,animateID:null,renderer:null,container:null,stats:null,loader:null,show3d:!1,showExploitation3d:!1,showChart:!1,show3dbutton:!1,poisk:!1,poiskEVM:!0,kriteriyEVM:!0,generationClose:!1,startBtns:!1,backToMenu:!1,reestr:!0,exploitationButton:!0,evm_api:null,clear3d:null,exploitation_api:null,src:"../assets/logo.png"}},created:function(){var e=this;m.a.get("https://test.nutrientplaner.ru:8111/api/evm/").then((function(t){return e.evm_api=t.data})),m.a.get("https://test.nutrientplaner.ru:8111/api/exploitation/").then((function(t){e.exploitation_api=t.data}))},watch:{pickedType:function(e,t){var n=this;null!==e&&null!==t&&e.type!==t.type&&(this.pickedModel=null),null===e.type?this.filterdModels=this.evm_api:this.filterdModels=this.evm_api.filter((function(e){return e.type==n.pickedType.type&&e.generation==n.pickedGeneration.generation}))}},computed:{computedFilterdModels:function(){var e=this;return this.evm_api.filter((function(t){return t.type==e.pickedType.type&&t.generation==e.pickedGeneration.generation}))}},methods:{toStart:function(){this.startBtns=!1,this.poisk=!1,this.generationClose=!1,this.poiskEVM=!1,this.kriteriyEVM=!1,this.pickedModel=null,this.pickedType=null,this.pickedGeneration=null,this.show3d=!1,this.reestr=!0,this.exploitationButton=!0,this.backToMenu=!1,this.pickedEVM=null,this.roomModel=null,this.exploitationModel=null,this.exploitationPoisk=!1,this.showExploitation3d=!1},poiskEVMbutton:function(){this.poisk=!0,this.poiskEVM=!1,this.startBtns=!1,this.backToMenu=!0},kriteriyEVMbutton:function(){this.generationClose=!0,this.kriteriyEVM=!1,this.startBtns=!1,this.backToMenu=!0},showReestr:function(){this.startBtns=!0,this.exploitationButton=!1,this.reestr=!1},showExploitation:function(){this.exploitationButton=!1,this.exploitationPoisk=!0,this.reestr=!1,this.backToMenu=!0},showParams:function(){this.pickedEvmShow=!0},closeParams:function(){this.pickedEvmShow=!1},openFullscreenx2:function(){this.container.fullscreenElement||(this.container.requestFullscreen(),this.renderer.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",(function(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth,window.innerHeight})))},openFullscreen:function(){var e=this;this.container.fullscreenElement||(this.container.requestFullscreen(),this.renderer.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",(function(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.camera.aspect=window.innerWidth,window.innerHeight}))),setTimeout((function(){return e.openFullscreenx2()}),500)},closeFullReestr:function(){document.exitFullscreen?(document.exitFullscreen(),this.create3d()):document.mozCancelFullScreen?(document.mozCancelFullScreen(),this.create3d()):document.webkitExitFullscreen&&(document.webkitExitFullscreen(),this.create3d())},closeFullExploitation:function(){document.exitFullscreen?(document.exitFullscreen(),this.create3Dexploitation()):document.mozCancelFullScreen?(document.mozCancelFullScreen(),this.create3Dexploitation()):document.webkitExitFullscreen&&(document.webkitExitFullscreen(),this.create3Dexploitation())},create3dReestr:function(){var e=this;this.container=document.getElementById("container");var t=document.createElement("button"),n=document.createElement("button");t.innerHTML="Полноэкранный режим",t.style.fontSize="10px",t.style.position="absolute",t.style.right="0",t.style.top="0",n.innerHTML="Закрыть полноэкранный режим",n.style.fontSize="10px",n.style.position="absolute",n.style.right="0",n.style.top="50px",this.stats=new h.a,this.stats.showPanel(0),this.stats.domElement.style.position="absolute",this.scene=new l["db"],this.scene.background=new l["h"](8421504),this.renderer=new l["sb"]({antialias:!0}),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.container.innerHTML="",this.container.appendChild(this.renderer.domElement),this.container.appendChild(t),this.container.appendChild(n),this.camera=new l["T"](60,this.container.clientWidth/this.container.clientHeight,.01,1e3),this.camera.position.set(5,5,10),this.controls=new d["a"](this.camera,this.renderer.domElement),this.controls.listenToKeyEvents(window),this.controls.update();var i=new l["a"](16777215,.5);this.hemiLight=new l["o"](16777215,526368,1),this.spotLight=new l["ib"](16777215,1),this.spotLight.position.set(this.camera.position.x+50,this.camera.position.y+50,this.camera.position.z+50),this.scene.add(i),this.scene.add(this.hemiLight),this.scene.add(this.spotLight),this.loader=new c["a"],this.loader.load(this.pickedModel.evm_model,(function(t){t.scene.scale.set(1.5,1.5,1.5,1.5),e.scene.add(t.scene),e.animate()})),window.addEventListener("resize",(function(){this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.camera.aspect=this.container.clientWidth,this.container.clientHeight})),t.addEventListener("click",this.openFullscreen),n.addEventListener("click",this.closeFullReestr),this.this.renderer.dispose()},create3dExplo:function(){var e=this;console.log(this.roomModel),this.container=document.getElementById("exploitation-evm__virtualmodel");var t=document.createElement("button"),n=document.createElement("button");t.innerHTML="Полноэкранный режим",t.style.fontSize="10px",t.style.position="absolute",t.style.right="0",t.style.top="0",n.innerHTML="Закрыть полноэкранный режим",n.style.fontSize="10px",n.style.position="absolute",n.style.right="0",n.style.top="50px",this.stats=new h.a,this.stats.showPanel(1),this.container.appendChild(this.stats.dom),this.scene=new l["db"],this.scene.background=new l["h"](15658734),this.renderer=new l["sb"]({antialias:!0}),this.renderer.toneMapping=l["bb"],this.renderer.toneMappingExposure=2.3,this.renderer.shadowMap.enabled=!0,this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.container.innerHTML="",this.container.appendChild(this.renderer.domElement),this.container.appendChild(t),this.container.appendChild(n),this.camera=new l["T"](75,this.container.clientWidth/this.container.clientHeight,.01,1e3),this.camera.position.set(15,10,30),this.controls=new d["a"](this.camera,this.renderer.domElement),this.controls.listenToKeyEvents(window),this.controls.update();var i=new l["a"](16777215,.5);this.hemiLight=new l["o"](16777215,526368,2.5),this.spotLight=new l["ib"](16777215,2),this.spotLight.position.set(this.camera.position.x+50,this.camera.position.y+50,this.camera.position.z+50),this.scene.add(i),this.scene.add(this.hemiLight),this.scene.add(this.spotLight),this.loader=new c["a"],this.loader.load(this.roomModel.room.room_model,(function(t){t.scene.scale.set(1.5,1.5,1.5,1.5),e.scene.add(t.scene),e.animate()})),window.addEventListener("resize",(function(){this.renderer.setSize(this.container.clientWidth,this.container.clientHeight),this.camera.aspect=this.container.clientWidth,this.container.clientHeight})),this.renderer.dispose(),t.addEventListener("click",this.openFullscreen),n.addEventListener("click",this.closeFullExploitation)},create3d:function(){var e=this;this.clearBox("container"),this.show3d=!0,setTimeout((function(){return e.mounted()}),500)},create3Dexploitation:function(){var e=this;this.clearBox("exploitation-evm__virtualmodel"),this.showExploitation3d=!0,setTimeout((function(){return e.create3dExplo()}),500)},animate:function(){this.stats.begin(),this.stats.update(),this.animateID=requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera),this.controls.update(),this.stats.end()},mounted:function(){this.clearMemory(),this.create3dReestr()},clearBox:function(e){cancelAnimationFrame(this.animateID),document.getElementById(e).innerHTML="",this.show3d=!1,this.showExploitation3d=!1},clearMemory:function(){cancelAnimationFrame(this.animateID)}}},w=v,f=(n("ac00"),n("2877")),x=n("6544"),k=n.n(x),b=n("c6a6"),g=n("8336"),y=n("62ad"),M=n("a523"),E=n("132d"),_=n("0fd9"),V=n("b974"),T=n("8654"),B=Object(f["a"])(w,r,s,!1,null,"4933ca9d",null),S=B.exports;k()(B,{VAutocomplete:b["a"],VBtn:g["a"],VCol:y["a"],VContainer:M["a"],VIcon:E["a"],VRow:_["a"],VSelect:V["a"],VTextField:T["a"]});var F={name:"App",components:{Main:S},data:function(){return{}}},C=F,L=(n("034f"),n("7496")),z=n("40dc"),H=n("f6c4"),j=Object(f["a"])(C,o,a,!1,null,null,null),P=j.exports;k()(j,{VApp:L["a"],VAppBar:z["a"],VBtn:g["a"],VContainer:M["a"],VMain:H["a"]});var W=n("f309");i["a"].use(W["a"]);var N=new W["a"]({}),O=n("1321"),D=n.n(O);i["a"].use(D.a),i["a"].component("apexchart",D.a),i["a"].config.productionTip=!1,new i["a"]({vuetify:N,render:function(e){return e(P)}}).$mount("#app")},"85ec":function(e,t,n){},"8ed4":function(e,t,n){},ac00:function(e,t,n){"use strict";n("8ed4")},ae49:function(e,t,n){e.exports=n.p+"img/main.947c4f86.jpg"},cf05:function(e,t,n){e.exports=n.p+"./img/logo.eec1ed1e.png"}});
//# sourceMappingURL=app.ab45505b.js.map
