"use strict";(self.webpackChunkpaginapwa=self.webpackChunkpaginapwa||[]).push([[687],{8687:(g,c,s)=>{s.r(c),s.d(c,{AdminsModule:()=>b});var u=s(9808),t=s(5e3),m=s(8552),p=s(9709),d=s(3075),l=s(6696),n=s(8553);function h(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return o.delete(o.id)}),t._uU(1,"Eliminar"),t.qZA()}}let f=(()=>{class i{constructor(e,a,o){this.router=e,this.adminServ=a,this.authServ=o,this.id="",this.user="",this.name="",this.ciudadelasCargo=[],this.cedula="",this.idCurrent="",this.currentUser={},this.ciudadelas=""}ngOnInit(){this.currentUser=this.authServ.getCurrentUser(),this.setCiudadelas()}edit(e){this.router.navigateByUrl(`/auth/administrador/${e}`)}setCiudadelas(){let e=0;for(let a of this.ciudadelasCargo)this.ciudadelas+=a.name,this.ciudadelasCargo.length-1!=e&&(this.ciudadelas+=", "),e++}delete(e){this.adminServ.deleteAdmin(e).subscribe(a=>{window.location.reload()})}buttonDelete(){return this.currentUser.id!=this.id}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(l.F0),t.Y36(m.l),t.Y36(n.e))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-infoadmin"]],inputs:{id:"id",user:"user",name:"name",ciudadelasCargo:"ciudadelasCargo",cedula:"cedula"},decls:19,vars:13,consts:[[1,"container"],["role","toolbar","aria-label","Toolbar with button groups",1,"btn-toolbar","justify-content-between"],["type","text",1,"form-control-plaintext"],["role","group","aria-label","First group",1,"btn-group"],[1,"btn-group"],["type","button",1,"btn","btn-info","btn-sm","mr-2",3,"click"],["type","button","class","btn btn-danger btn-sm",3,"click",4,"ngIf"],["type","button",1,"btn","btn-danger","btn-sm",3,"click"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"label",2),t._uU(3),t.ALo(4,"uppercase"),t.qZA(),t.TgZ(5,"label",2),t._uU(6),t.ALo(7,"uppercase"),t.qZA(),t.TgZ(8,"div",3)(9,"label",2),t._uU(10),t.ALo(11,"uppercase"),t.qZA()(),t.TgZ(12,"div",4)(13,"button",5),t.NdJ("click",function(){return a.edit(a.id)}),t._uU(14,"Editar"),t.qZA(),t.YNc(15,h,2,0,"button",6),t.qZA(),t.TgZ(16,"label",2),t._uU(17),t.ALo(18,"uppercase"),t.qZA()()()),2&e&&(t.xp6(3),t.hij("Ciudadela: ",t.lcZ(4,5,a.ciudadelas),""),t.xp6(3),t.hij("Nombre: ",t.lcZ(7,7,a.name),""),t.xp6(4),t.hij("Usuario: ",t.lcZ(11,9,a.user),""),t.xp6(5),t.Q6J("ngIf",a.buttonDelete()),t.xp6(2),t.hij("C\xe9dula: ",t.lcZ(18,11,a.cedula),""))},directives:[u.O5],pipes:[u.gd],styles:[""]}),i})();function v(i,r){if(1&i&&(t.TgZ(0,"div")(1,"div",6),t._UZ(2,"app-infoadmin",7),t.qZA()()),2&i){const e=r.$implicit;t.xp6(2),t.Q6J("id",e._id)("user",e.user)("cedula",e.cedula)("name",e.name)("ciudadelasCargo",e.ciudadelasCargo)}}const A=[{path:"administrador",component:(()=>{class i{constructor(e,a,o){this.adminServ=e,this.data=a,this.document=o,this.name="",this.admins=[],this.id="",this.buttonUp=!1,this.ciudadelas=[],this.lista_filtrada=[]}ngOnInit(){this.setAdmins(),this.setAllCiudadelas()}onWindowScroll(){const e=window.pageYOffset;this.buttonUp=(e||this.document.documentElement.scrollTop)>200}setAllCiudadelas(){this.data.getCiudadelas().subscribe(e=>{this.ciudadelas=e})}setAdmins(){this.adminServ.getAdmins().subscribe(e=>{this.admins=e})}busqueda(){this.adminServ.findAdminByName(this.name).subscribe(e=>{this.admins=e})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(m.l),t.Y36(p.D),t.Y36(u.K0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-administrador"]],hostBindings:function(e,a){1&e&&t.NdJ("scroll",function(){return a.onWindowScroll()},!1,t.Jf7)},decls:9,vars:2,consts:[[1,"container"],[1,"input-group","mb-3"],["type","text","id","admin","placeholder","Administrador",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn","btn-primary",3,"click"],[1,"list-group"],[4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-action"],[3,"id","user","cedula","name","ciudadelasCargo"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"Administradores"),t.qZA(),t.TgZ(3,"div",1)(4,"input",2),t.NdJ("ngModelChange",function(_){return a.name=_}),t.qZA(),t.TgZ(5,"button",3),t.NdJ("click",function(){return a.busqueda()}),t._uU(6," Buscar "),t.qZA()(),t.TgZ(7,"div",4),t.YNc(8,v,3,5,"div",5),t.qZA()()),2&e&&(t.xp6(4),t.Q6J("ngModel",a.name),t.xp6(4),t.Q6J("ngForOf",a.admins))},directives:[d.Fj,d.JJ,d.On,u.sg,f],styles:[""]}),i})()},{path:"",redirectTo:"administrador"}];let C=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[l.Bz.forChild(A)],l.Bz]}),i})(),b=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[u.ez,C,d.u5,d.UX]]}),i})()},9709:(g,c,s)=>{s.d(c,{D:()=>p});var u=s(2340),t=s(5e3),m=s(520);let p=(()=>{class d{constructor(n){this.http=n,this.url=u.N.BASE_URL}validateUser(n){return this.http.post(`${this.url}users/new`,n)}getEtapas(){return this.http.get(this.url+"etapas/all")}findEtapasByCiudadelaId(n){return this.http.get(`${this.url}etapas/ciudadela?ciudadela=${n}`)}findEtapasById(n){return this.http.get(`${this.url}etapas/${n}`)}findEtapaByName(n){return this.http.get(`${this.url}etapas/name?name=${n}`)}newEtapa(n){return this.http.post(`${this.url}etapas/new`,n)}deleteEtapa(n){return this.http.delete(`${this.url}etapas/${n}`)}findViviendaById(n){return this.http.get(`${this.url}viviendas/${n}`)}findViviendaByEtapa(n){return this.http.get(`${this.url}viviendas/search/etapa?etapa=${n}`)}newVivienda(n){return this.http.post(`${this.url}viviendas/new`,n)}updateVivienda(n,h){return this.http.put(`${this.url}viviendas/${n}`,h)}deleteVivienda(n){return this.http.delete(`${this.url}viviendas/${n}`)}getCiudadelas(){return this.http.get(this.url+"ciudadelas/all")}findCiudadelaById(n){return this.http.get(`${this.url}ciudadelas/${n}`)}newCiudadela(n){return this.http.post(this.url+"ciudadelas/new",n)}}return d.\u0275fac=function(n){return new(n||d)(t.LFG(m.eN))},d.\u0275prov=t.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);