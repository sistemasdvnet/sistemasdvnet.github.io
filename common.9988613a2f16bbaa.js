"use strict";(self.webpackChunkpaginapwa=self.webpackChunkpaginapwa||[]).push([[592],{8552:(o,s,r)=>{r.d(s,{l:()=>h});var i=r(2340),n=r(5e3),u=r(520);let h=(()=>{class e{constructor(t){this.http=t,this.url=i.N.BASE_URL+"admins"}getAdmins(){return this.http.get(this.url+"/all")}findAdminById(t){return this.http.get(`${this.url}/${t}`)}findAdminByName(t){return console.log(`${this.url}/search/name?name=${t}`),this.http.get(`${this.url}/search/name?name=${t}`)}deleteAdmin(t){return this.http.delete(`${this.url}/${t}`)}updateAdmin(t,a){return this.http.put(`${this.url}/${t}`,a)}newAdmin(t){return this.http.post(`${this.url}/new`,t)}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(u.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},6649:(o,s,r)=>{r.d(s,{F:()=>h});var i=r(2340),n=r(5e3),u=r(520);let h=(()=>{class e{constructor(t){this.http=t,this.url=i.N.BASE_URL+"guardias"}getGuardias(){return this.http.get(this.url+"/all")}findGuardByName(t){return console.log(`${this.url}/search/name?name=${t}`),this.http.get(`${this.url}/search/name?name=${t}`)}findGuardById(t){return console.log(`${this.url}/${t}`),this.http.get(`${this.url}/${t}`)}newGuard(t){return console.log(`${this.url}/new`,t),this.http.post(`${this.url}/new`,t)}deleteGuard(t){return console.log(`${this.url}/${t}`),this.http.delete(`${this.url}/${t}`)}updateGuard(t,a){return console.log(`${this.url}/${t}`,a),this.http.put(`${this.url}/${t}`,a)}findGuardByEtapa(t){return console.log(`${this.url}/search/etapa?etapa=${t}`),this.http.get(`${this.url}/search/etapa?etapa=${t}`)}findGuardByCiudadela(t){return console.log(`${this.url}/search/ciudadela?ciudadela=${t}`),this.http.get(`${this.url}/search/ciudadela?ciudadela=${t}`)}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(u.eN))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);