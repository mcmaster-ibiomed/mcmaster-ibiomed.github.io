self.$dart_deferred_initializers$=self.$dart_deferred_initializers$||Object.create(null)
$dart_deferred_initializers$.current=function($globals$,$){var A=$globals$.A
var B=$globals$.B
var C=$globals$.C
var D=$globals$.D
var E=$globals$.E
var F=$globals$.F
var G=$globals$.G
var H=$globals$.H
var J=$globals$.J
var K=$globals$.K
var L=$globals$.L
var M=$globals$.M
var N=$globals$.N
var O=$globals$.O
var P=$globals$.P
var Q=$globals$.Q
var R=$globals$.R
var S=$globals$.S
var T=$globals$.T
var U=$globals$.U
var V=$globals$.V
var W=$globals$.W
var X=$globals$.X
var Y=$globals$.Y
var Z=$globals$.Z
var init=$globals$.init
var setupProgram=$globals$.setupProgram
var I=$globals$.I
var dart=[["","",,A,{}],["","",,G,{"^":"",
pj:function(a,b){var z,y
z=new G.lc(P.af(P.e,null),a)
z.sV(S.am(z,3,C.h,b,D.cN))
y=document.createElement("card")
z.e=H.c(y,"$isI")
y=$.dk
if(y==null){y=$.ah
y=y.ah(null,C.k,$.$get$hC())
$.dk=y}z.ab(y)
return z},
lc:{"^":"D;0r,0x,0y,0z,0Q,0ch,0cx,0cy,0db,0dx,0dy,0fr,0fx,0fy,0go,0a,b,c,0d,0e,0f",
I:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.ak(this.e)
y=document
x=S.al(y,z)
x.className="mdc-card";(x&&C.c).E(x,"style","position: relative; margin: 1vh; height: 60vh; width: 30vh")
this.w(x)
w=S.al(y,x)
w.className="mdc-card__media"
this.w(w)
v=S.L(y,"img",w)
this.dy=v
J.ad(v,"alt","")
v=this.dy
v.className="center"
J.ad(v,"style","max-height: auto; max-width: 100%; object-fit: contain; object-position: top")
this.t(this.dy)
u=S.al(y,x)
u.className="mdc-card__primary";(u&&C.c).E(u,"style","margin: 1vh")
this.w(u)
t=S.L(y,"h2",u)
t.className="demo-card__title"
v=J.N(t)
v.E(t,"style","font-size: 1.5rem")
this.t(t)
s=y.createTextNode("")
this.fr=s
v.A(t,s)
r=S.L(y,"h3",u)
r.className="demo-card__subtitle"
s=J.N(r)
s.E(r,"style","font-size: 1rem")
this.t(r)
v=y.createTextNode("")
this.fx=v
s.A(r,v)
q=S.al(y,x)
q.className="mdc-card__secondary";(q&&C.c).E(q,"style","margin: 1vh; margin-top: 0; font-size: 1rem")
this.w(q)
v=y.createTextNode("")
this.fy=v
C.c.A(q,v)
p=S.al(y,x)
p.className="mdc-card__actions";(p&&C.c).E(p,"style","position: absolute; bottom: 0; right: 0")
this.w(p)
o=S.al(y,p)
o.className="mdc-card__action-icons"
this.w(o)
v=H.c(S.L(y,"a",o),"$isc8")
this.go=v
this.w(v)
v=U.dl(this,13)
this.r=v
n=v.e
v=this.go;(v&&C.z).A(v,n)
J.ad(n,"icon","")
this.w(n)
v=F.cG(H.b3(this.c.O(C.t,this.a.Q,null)))
this.x=v
this.y=B.d6(n,v,this.r.a.b,null)
v=M.fo(this,14)
this.z=v
m=v.e
J.ad(m,"icon","mail_outline")
this.w(m)
v=new Y.ck(m)
this.Q=v
this.z.W(0,v,[])
this.r.W(0,this.y,[H.q([m],[W.I])])
this.aj(C.f,null)},
aG:function(a,b,c){if(a===C.u&&13<=b&&b<=14)return this.x
if((a===C.x||a===C.v||a===C.w)&&13<=b&&b<=14)return this.y
return c},
T:function(){var z,y,x,w,v,u,t,s,r
z=this.f
y=this.a.cy===0
if(y)this.y.bY()
if(y){this.Q.sdk(0,"mail_outline")
x=!0}else x=!1
if(x)this.z.a.scZ(1)
w=Q.Q(J.b7(z.a,4))
v=this.ch
if(v!==w){this.dy.src=$.ah.c.bd(w)
this.ch=w}u=Q.Q(J.b7(z.a,0))
v=this.cx
if(v!==u){this.fr.textContent=u
this.cx=u}t=Q.Q(J.b7(z.a,1))
v=this.cy
if(v!==t){this.fx.textContent=t
this.cy=t}s=Q.Q(J.b7(z.a,2))
v=this.db
if(v!==s){this.fy.textContent=s
this.db=s}v=J.b7(z.a,3)
r="mailto:"+(v==null?"":H.i(v))
v=this.dx
if(v!==r){this.go.href=$.ah.c.bd(r)
this.dx=r}this.r.bM(y)
this.r.N()
this.z.N()},
a_:function(){this.r.F()
this.z.F()},
$asD:function(){return[D.cN]}}}]]
setupProgram(dart,init.metadata.length,init.types.length)
var deferredMetadata=[]
var deferredTypes=[]
init.metadata.push.apply(init.metadata,deferredMetadata)
init.types.push.apply(init.types,deferredTypes)
$.dk=null;(function(a){for(var z=0;z<a.length;){var y=a[z++]
var x=a[z++]
var w=a[z++]
var v=a[z++]
I.$lazy(y,x,w,null,v)}})(["hH","$get$hH",function(){return['.mdc-card._ngcontent-%ID%{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-radius:4px;box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);display:flex;flex-direction:column;box-sizing:border-box}.mdc-card--outlined._ngcontent-%ID%{box-shadow:0px 0px 0px 0px rgba(0,0,0,0.2),0px 0px 0px 0px rgba(0,0,0,0.14),0px 0px 0px 0px rgba(0,0,0,0.12);border:1px solid #e0e0e0}.mdc-card__media._ngcontent-%ID%{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media._ngcontent-%ID%::before{display:block;content:""}.mdc-card__media:first-child._ngcontent-%ID%{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child._ngcontent-%ID%{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square._ngcontent-%ID%::before{margin-top:100%}.mdc-card__media--16-9._ngcontent-%ID%::before{margin-top:56.25%}.mdc-card__media-content._ngcontent-%ID%{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action._ngcontent-%ID%{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action._ngcontent-%ID%::before,.mdc-card__primary-action._ngcontent-%ID%::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-card__primary-action._ngcontent-%ID%::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-card__primary-action.mdc-ripple-upgraded._ngcontent-%ID%::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-card__primary-action.mdc-ripple-upgraded._ngcontent-%ID%::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-card__primary-action.mdc-ripple-upgraded--unbounded._ngcontent-%ID%::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-card__primary-action.mdc-ripple-upgraded--foreground-activation._ngcontent-%ID%::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-card__primary-action.mdc-ripple-upgraded--foreground-deactivation._ngcontent-%ID%::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-card__primary-action._ngcontent-%ID%::before,.mdc-card__primary-action._ngcontent-%ID%::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-card__primary-action.mdc-ripple-upgraded._ngcontent-%ID%::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-card__primary-action._ngcontent-%ID%::before,.mdc-card__primary-action._ngcontent-%ID%::after{background-color:black}.mdc-card__primary-action:hover._ngcontent-%ID%::before{opacity:0.04}.mdc-card__primary-action:not(.mdc-ripple-upgraded):focus._ngcontent-%ID%::before,.mdc-card__primary-action.mdc-ripple-upgraded--background-focused._ngcontent-%ID%::before{transition-duration:75ms;opacity:0.12}.mdc-card__primary-action:not(.mdc-ripple-upgraded)._ngcontent-%ID%::after{transition:opacity 150ms linear}.mdc-card__primary-action:not(.mdc-ripple-upgraded):active._ngcontent-%ID%::after{transition-duration:75ms;opacity:0.16}.mdc-card__primary-action.mdc-ripple-upgraded._ngcontent-%ID%{--mdc-ripple-fg-opacity:0.16}.mdc-card__primary-action:first-child._ngcontent-%ID%{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child._ngcontent-%ID%{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions._ngcontent-%ID%{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed._ngcontent-%ID%{padding:0}.mdc-card__action-buttons._ngcontent-%ID%,.mdc-card__action-icons._ngcontent-%ID%{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons._ngcontent-%ID%{color:rgba(0,0,0,0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0,0,0,0.38));flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons._ngcontent-%ID% + .mdc-card__action-icons._ngcontent-%ID%{margin-left:16px;margin-right:0}[dir=rtl]._ngcontent-%ID% .mdc-card__action-buttons._ngcontent-%ID% + .mdc-card__action-icons._ngcontent-%ID%,.mdc-card__action-buttons._ngcontent-%ID% + .mdc-card__action-icons[dir=rtl]._ngcontent-%ID%{margin-left:0;margin-right:16px}.mdc-card__action._ngcontent-%ID%{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus._ngcontent-%ID%{outline:none}.mdc-card__action--button._ngcontent-%ID%{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl]._ngcontent-%ID% .mdc-card__action--button._ngcontent-%ID%,.mdc-card__action--button[dir=rtl]._ngcontent-%ID%{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child._ngcontent-%ID%{margin-left:0;margin-right:0}[dir=rtl]._ngcontent-%ID% .mdc-card__action--button:last-child._ngcontent-%ID%,.mdc-card__action--button:last-child[dir=rtl]._ngcontent-%ID%{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed._ngcontent-%ID% .mdc-card__action--button._ngcontent-%ID%{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl]._ngcontent-%ID% .mdc-card__actions--full-bleed._ngcontent-%ID% .mdc-card__action--button._ngcontent-%ID%,.mdc-card__actions--full-bleed._ngcontent-%ID% .mdc-card__action--button[dir=rtl]._ngcontent-%ID%{text-align:right}.mdc-card__action--icon._ngcontent-%ID%{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled)._ngcontent-%ID%{color:rgba(0,0,0,0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0,0,0,0.38))}']},$,"hC","$get$hC",function(){return[$.$get$hH()]},$])}
$dart_deferred_initializers$["/XUaSkzjLSCEeoMtT2Wi+n8Qmvg="]=$dart_deferred_initializers$.current

//# sourceMappingURL=main.dart.js_2.part.js.map
