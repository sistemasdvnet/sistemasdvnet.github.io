"use strict";(self.webpackChunkpaginapwa=self.webpackChunkpaginapwa||[]).push([[687],{8687:(v,m,r)=>{r.r(m),r.d(m,{AdminsModule:()=>h});var a=r(9808),n=r(5e3),l=r(8552),d=r(3075),u=r(6696);function c(e,o){if(1&e){const t=n.EpF();n.TgZ(0,"button",7),n.NdJ("click",function(){n.CHM(t);const s=n.oxw();return s.delete(s.id)}),n._uU(1,"Eliminar"),n.qZA()}}let p=(()=>{class e{constructor(t,i){this.router=t,this.adminServ=i,this.id="",this.user="",this.name="",this.ciudadela="",this.cedula="",this.idCurrent="",this.currentUser=!0}ngOnInit(){this.bottonDelete()}edit(t){this.router.navigateByUrl(`/auth/administrador/${t}`)}delete(t){this.adminServ.deleteAdmin(t).subscribe(i=>{window.location.reload()})}bottonDelete(){this.idCurrent=sessionStorage.getItem("id"),this.currentUser=this.idCurrent!=this.id}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(u.F0),n.Y36(l.l))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-infoadmin"]],inputs:{id:"id",user:"user",name:"name",ciudadela:"ciudadela",cedula:"cedula"},decls:16,vars:10,consts:[[1,"container"],["role","toolbar","aria-label","Toolbar with button groups",1,"btn-toolbar","justify-content-between"],["type","text",1,"form-control-plaintext"],["role","group","aria-label","First group",1,"btn-group"],[1,"input-group"],["type","button",1,"btn","btn-info","btn-sm","mr-2",3,"click"],["type","button","class","btn btn-danger btn-sm",3,"click",4,"ngIf"],["type","button",1,"btn","btn-danger","btn-sm",3,"click"]],template:function(t,i){1&t&&(n.TgZ(0,"div",0)(1,"div",1)(2,"label",2),n._uU(3),n.ALo(4,"uppercase"),n.qZA(),n.TgZ(5,"div",3)(6,"label",2),n._uU(7),n.ALo(8,"uppercase"),n.qZA()(),n.TgZ(9,"div",4)(10,"button",5),n.NdJ("click",function(){return i.edit(i.id)}),n._uU(11,"Editar"),n.qZA(),n.YNc(12,c,2,0,"button",6),n.qZA(),n.TgZ(13,"label",2),n._uU(14),n.ALo(15,"uppercase"),n.qZA()()()),2&t&&(n.xp6(3),n.hij("Nombre: ",n.lcZ(4,4,i.name),""),n.xp6(4),n.hij("Usuario: ",n.lcZ(8,6,i.user),""),n.xp6(5),n.Q6J("ngIf",i.currentUser),n.xp6(2),n.hij("C\xe9dula: ",n.lcZ(15,8,i.cedula),""))},directives:[a.O5],pipes:[a.gd],styles:[""]}),e})();function g(e,o){if(1&e&&(n.TgZ(0,"div")(1,"div",6),n._UZ(2,"app-infoadmin",7),n.qZA()()),2&e){const t=o.$implicit;n.xp6(2),n.Q6J("id",t._id)("user",t.user)("cedula",t.cedula)("name",t.name)("ciudadela",t.ciudadela)}}const f=[{path:"administrador",component:(()=>{class e{constructor(t){this.adminServ=t,this.name="",this.admins=[],this.id=""}ngOnInit(){this.setAdmins()}setAdmins(){this.adminServ.getAdmins().subscribe(t=>{this.admins=t})}busqueda(){this.adminServ.findAdminByName(this.name).subscribe(t=>{this.admins=t})}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(l.l))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-administrador"]],decls:9,vars:2,consts:[[1,"container"],[1,"input-group","mb-3"],["type","text","id","admin","placeholder","Administrador",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn","btn-primary",3,"click"],[1,"list-group"],[4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-action"],[3,"id","user","cedula","name","ciudadela"]],template:function(t,i){1&t&&(n.TgZ(0,"div",0)(1,"h1"),n._uU(2,"Administradores"),n.qZA(),n.TgZ(3,"div",1)(4,"input",2),n.NdJ("ngModelChange",function(A){return i.name=A}),n.qZA(),n.TgZ(5,"button",3),n.NdJ("click",function(){return i.busqueda()}),n._uU(6," Buscar "),n.qZA()(),n.TgZ(7,"div",4),n.YNc(8,g,3,5,"div",5),n.qZA()()),2&t&&(n.xp6(4),n.Q6J("ngModel",i.name),n.xp6(4),n.Q6J("ngForOf",i.admins))},directives:[d.Fj,d.JJ,d.On,a.sg,p],styles:[""]}),e})()},{path:"",redirectTo:"administrador"}];let b=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[u.Bz.forChild(f)],u.Bz]}),e})(),h=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[a.ez,b,d.u5,d.UX]]}),e})()}}]);