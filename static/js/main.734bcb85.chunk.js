(this["webpackJsonpcovid-19-jeju-map"]=this["webpackJsonpcovid-19-jeju-map"]||[]).push([[0],{24:function(e,a,n){e.exports=n(35)},29:function(e,a,n){},30:function(e,a,n){},35:function(e,a,n){"use strict";n.r(a);var t=n(0),l=n.n(t),o=n(9),r=n.n(o),c=(n(29),n(10)),i=n(18),s=n(15),m=n(42),p=n(41),u=n(38),h=n(39),d=n(40),f=(n(30),n(6));var g=function(){var e=Object(t.useState)({}),a=Object(s.a)(e,2),n=a[0],o=a[1],r=Object(t.useState)(null),g=Object(s.a)(r,2),v=g[0],b=g[1],E={center:{lat:33.377165,lng:126.533382},zoom:10};Object(t.useEffect)((function(){b(new naver.maps.Map("map",E))}),[]);var w=function(e,a){var n={position:{lat:e.lat,lng:e.lng},map:v};"black"!==a&&"green"!==a||(n.icon={content:'<img src="'+"/images/pin_".concat(a,'.png" alt="" ')+'style="margin: 0px; padding: 0px; border: 0px solid transparent; display: block; max-width: none; max-height: none; -webkit-user-select: none; position: absolute; width: 22px; height: 35px; left: 0px; top: 0px;">',size:new naver.maps.Size(22,35),anchor:new naver.maps.Point(11,35)});var t=new naver.maps.Marker(n),l='<div style="font-size: small; padding: 15px;"><h5>'.concat(e.\uc774\ub984,"</h5><p>").concat(e.\uc8fc\uc18c,'<br /><a href="tel:').concat(e.\uc804\ud654\ubc88\ud638,'">').concat(e.\uc804\ud654\ubc88\ud638,"</a></p></div>"),r=new naver.maps.InfoWindow({content:l});naver.maps.Event.addListener(t,"mouseover",(function(e){r.open(v,t)})),naver.maps.Event.addListener(t,"click",(function(e){r.open(v,t)})),o((function(a){return Object(i.a)({},a,Object(c.a)({},e.\uc774\ub984,{marker:t,infoWindow:r}))}))};Object(t.useEffect)((function(){v&&(f.hospital.map((function(e){w(e,"default")})),f.healthCenter.map((function(e){w(e,"black")})),f.ansimHospital.map((function(e){w(e,"green")})))}),[v]);var x=function(e,a){return l.a.createElement(m.a.Item,{onMouseOver:function(){return function(e){var a=n[e.\uc774\ub984];a.infoWindow.open(v,a.marker)}(e)}},l.a.createElement("h1",{className:"h5 font-weight-bold"},e.\uc774\ub984,l.a.createElement("small",null," (",a,")")),l.a.createElement("p",{className:"mb-1"},e.\uc8fc\uc18c),l.a.createElement("p",{className:"mb-1"},l.a.createElement("a",{href:"tel:".concat(e.\uc804\ud654\ubc88\ud638)},e.\uc804\ud654\ubc88\ud638)))};return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(p.a,{bg:"light",expand:"lg",className:"mb-3"},l.a.createElement(p.a.Brand,{href:"#home"},"\ucf54\ub85c\ub09819 \uc81c\uc8fc \ubcf4\uac74\uc18c \ubc0f \uc9c0\uc815\ubcd1\uc6d0"),l.a.createElement(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(p.a.Collapse,{id:"basic-navbar-nav"}))),l.a.createElement("main",null,l.a.createElement(u.a,{fluid:!0},l.a.createElement(h.a,null,l.a.createElement(d.a,{md:4},l.a.createElement(m.a,{style:{overflowY:"scroll",height:"85vh"}},f.hospital.map((function(e){return x(e,"\uc120\ubcc4\uc9c4\ub8cc\uc18c")})),f.healthCenter.map((function(e){return x(e,"\ubcf4\uac74\uc18c")})),f.ansimHospital.map((function(e){return x(e,"\uad6d\ubbfc\uc548\uc2ec\ubcd1\uc6d0")})))),l.a.createElement(d.a,{md:8},l.a.createElement("div",{id:"map",style:{width:"100%",height:"85vh"}}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e){e.exports=JSON.parse('{"hospital":[{"\uc774\ub984":"\ud55c\ub9c8\uc74c\ubcd1\uc6d0","lat":"33.4962918","lng":"126.5374979","\uc8fc\uc18c":"\uc81c\uc8fc \uc81c\uc8fc\uc2dc \uc5f0\uc2e0\ub85c 52","\uc804\ud654\ubc88\ud638":"064-750-9000"},{"\uc774\ub984":"\uc11c\uadc0\ud3ec\uc758\ub8cc\uc6d0","lat":"33.254995","lng":"126.5625628","\uc8fc\uc18c":"\uc81c\uc8fc \uc11c\uadc0\ud3ec\uc2dc \uc7a5\uc218\ub85c 47","\uc804\ud654\ubc88\ud638":"064-730-3000"},{"\uc774\ub984":"\ud55c\uad6d\ubcd1\uc6d0","lat":"33.5002078","lng":"126.5148722","\uc8fc\uc18c":"\uc81c\uc8fc \uc81c\uc8fc\uc2dc \uc11c\uad11\ub85c 193","\uc804\ud654\ubc88\ud638":"064-750-0000"},{"\uc774\ub984":"\uc911\uc559\ubcd1\uc6d0","lat":"33.4922645","lng":"126.4685369","\uc8fc\uc18c":"\uc81c\uc8fc \uc81c\uc8fc\uc2dc \uc6d4\ub791\ub85c 91","\uc804\ud654\ubc88\ud638":"064-786-7000"},{"\uc774\ub984":"\uc11c\uadc0\ud3ec\uc5f4\ub9b0\ubcd1\uc6d0","lat":"33.2544248","lng":"126.5632242","\uc8fc\uc18c":"\uc81c\uc8fc \uc11c\uadc0\ud3ec\uc2dc \uc77c\uc8fc\ub3d9\ub85c 8638","\uc804\ud654\ubc88\ud638":"064-762-8001"}],"healthCenter":[{"\uc774\ub984":"\uc11c\uadc0\ud3ec\uc2dc \ubcf4\uac74\uc18c","lat":"33.25347667","lng":"126.5553602","\uc8fc\uc18c":"\uc11c\uadc0\ud3ec\uc2dc \uc911\uc559\ub85c 101\ubc88\uae38 52(\uc11c\ud64d\ub3d9)","\uc804\ud654\ubc88\ud638":"064-760-6000"},{"\uc774\ub984":"\uc11c\uadc0\ud3ec\uc2dc \ub3d9\ubd80 \ubcf4\uac74\uc18c","lat":"33.27565472","lng":"126.7033908","\uc8fc\uc18c":"\uc11c\uadc0\ud3ec\uc2dc \ub0a8\uc6d0\uc74d \ud0dc\uc704\ub85c527","\uc804\ud654\ubc88\ud638":"064-760-6100"},{"\uc774\ub984":"\uc11c\uadc0\ud3ec\uc2dc \uc11c\ubd80 \ubcf4\uac74\uc18c","lat":"33.2187035","lng":"126.253250","\uc8fc\uc18c":"\uc11c\uadc0\ud3ec\uc2dc \ub300\uc815\uc74d \ucd5c\ub0a8\ub2e8\ud574\uc548\ub85c 15\uae38 12","\uc804\ud654\ubc88\ud638":"064-760-6200"},{"\uc774\ub984":"\uc81c\uc8fc\uc2dc \ubcf4\uac74\uc18c","lat":"33.49159776","lng":"126.520239","\uc8fc\uc18c":"\uc81c\uc8fc\uc2dc \uc5f0\uc0bc\ub85c 264","\uc804\ud654\ubc88\ud638":"064-728-4010"},{"\uc774\ub984":"\uc81c\uc8fc\uc2dc \ub3d9\ubd80 \ubcf4\uac74\uc18c","lat":"33.55434823","lng":"126.751323","\uc8fc\uc18c":"\uc81c\uc8fc\uc2dc \uad6c\uc88c\uc74d \uae40\ub155\ub85c 14\uae38 6","\uc804\ud654\ubc88\ud638":"064-728-1515"},{"\uc774\ub984":"\uc81c\uc8fc\uc2dc \uc11c\ubd80 \ubcf4\uac74\uc18c","lat":"33.41208308","lng":"126.2695288","\uc8fc\uc18c":"\uc81c\uc8fc\uc2dc \ud55c\ub9bc\uc74d \uac15\uad6c\ub85c 5","\uc804\ud654\ubc88\ud638":"064-728-1513"}],"ansimHospital":[{"\uc774\ub984":"\uc81c\uc8fc\ub300\ud559\uad50\ubcd1\uc6d0","lat":"33.4670605","lng":"126.5370226","\uc8fc\uc18c":"\uc81c\uc8fc \uc81c\uc8fc\uc2dc \uc544\ub78013\uae38 15","\uc804\ud654\ubc88\ud638":"064-717-1075"},{"\uc774\ub984":"\uc81c\uc8fc\ud55c\ub77c\ubcd1\uc6d0","lat":"33.4899863","lng":"126.4829032","\uc8fc\uc18c":"\uc81c\uc8fc \uc81c\uc8fc\uc2dc \ub3c4\ub839\ub85c 65","\uc804\ud654\ubc88\ud638":"064-740-5975"}]}')}},[[24,1,2]]]);
//# sourceMappingURL=main.734bcb85.chunk.js.map