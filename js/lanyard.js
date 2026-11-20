var LanyardApp=(()=>{var Co=Object.defineProperty;var gu=Object.getOwnPropertyDescriptor;var _u=Object.getOwnPropertyNames;var xu=Object.prototype.hasOwnProperty;var vu=(i,t)=>{for(var e in t)Co(i,e,{get:t[e],enumerable:!0})},yu=(i,t,e,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of _u(t))!xu.call(i,s)&&s!==e&&Co(i,s,{get:()=>t[s],enumerable:!(n=gu(t,s))||n.enumerable});return i};var Su=i=>yu(Co({},"__esModule",{value:!0}),i);var I0={};vu(I0,{initLanyard:()=>P0});var Fc=0,pl=1,Oc=2;var ur=1,Bc=2,os=3,ci=0,Be=1,hn=2,Si=0,ls=1,ml=2,gl=3,_l=4,zc=5;var Mi=100,kc=101,Gc=102,Vc=103,Hc=104,Wc=200,Xc=201,qc=202,Yc=203,xl=204,vl=205,Zc=206,Jc=207,$c=208,Kc=209,Qc=210,jc=211,th=212,eh=213,nh=214,Qr=0,jr=1,ta=2,qi=3,ea=4,na=5,ia=6,sa=7,Ia=0,ih=1,sh=2,Ln=0,yl=1,Sl=2,Ml=3,bl=4,Tl=5,El=6,Al=7;var wl=300,bi=301,cs=302,La=303,Da=304,Yi=1e3,bn=1001,ra=1002,Ue=1003,rh=1004;var dr=1005;var Ze=1006,Na=1007;var Yn=1008;var Ke=1009,Rl=1010,Cl=1011,hs=1012,Ua=1013,_n=1014,un=1015,xn=1016,Fa=1017,Oa=1018,Ti=1020,Pl=35902,Il=35899,Ll=1021,Dl=1022,vn=1023,Hn=1026,Zn=1027,Ba=1028,za=1029,hi=1030,ka=1031;var Ga=1033,fr=33776,pr=33777,mr=33778,gr=33779,Va=35840,Ha=35841,Wa=35842,Xa=35843,qa=36196,Ya=37492,Za=37496,Ja=37488,$a=37489,_r=37490,Ka=37491,Qa=37808,ja=37809,to=37810,eo=37811,no=37812,io=37813,so=37814,ro=37815,ao=37816,oo=37817,lo=37818,co=37819,ho=37820,uo=37821,fo=36492,po=36494,mo=36495,go=36283,_o=36284,xr=36285,xo=36286;var Ps=2300,aa=2301,$r=2302,el=2303,nl=2400,il=2401,sl=2402;var ah=3200;var vr=0,oh=1,Jn="",We="srgb",Is="srgb-linear",Ls="linear",de="srgb";var Kr=7680;var lh=519,ch=512,hh=513,uh=514,Nl=515,dh=516,fh=517,Ul=518,Fl=519,ph=35044;var Ol="300 es",cn=2e3,Zi=2001;function Mu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function bu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mh(){let i=Ds("canvas");return i.style.display="block",i}var ic={},Ji=null;function Bl(...i){let t="THREE."+i.shift();Ji?Ji("log",t,...i):console.log(t,...i)}function gh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Gt(...i){i=gh(i);let t="THREE."+i.shift();if(Ji)Ji("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Vt(...i){i=gh(i);let t="THREE."+i.shift();if(Ji)Ji("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function _i(...i){let t=i.join(" ");t in ic||(ic[t]=!0,Gt(...i))}function _h(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var xh={[Qr]:Qr,[ta]:ia,[ea]:ea,[qi]:na,[jr]:jr,[ia]:ta,[sa]:sa,[na]:qi},An=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Po=Math.PI/180,oa=180/Math.PI;function us(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function Tu(i,t){return(i%t+t)%t}function Io(i,t,e){return(1-e)*i+e*t}function vh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Eu(i,t){if(t.constructor===Float32Array)return i;let e=zl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Au(i,t){if(t.constructor===Float32Array)return i;let e=zl(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var xt=class{static{this.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},wn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],g=r[a+2],y=r[a+3];if(f!==y||l!==u||c!==d||h!==g){let p=l*u+c*d+h*g+f*y;p<0&&(u=-u,d=-d,g=-g,y=-y,p=-p);let m=1-o;if(p<.9995){let M=Math.acos(p),E=Math.sin(M);m=Math.sin(m*M)/E,o=Math.sin(o*M)/E,l=l*m+u*o,c=c*m+d*o,h=h*m+g*o,f=f*m+y*o}else{l=l*m+u*o,c=c*m+d*o,h=h*m+g*o,f=f*m+y*o;let M=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=M,c*=M,h*=M,f*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*d-c*u,t[e+1]=l*g+h*u+c*f-o*d,t[e+2]=c*g+h*d+o*u-l*f,t[e+3]=h*g-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f+u*d*g;break;case"YZX":this._x=u*h*f+c*d*g,this._y=c*d*f+u*h*g,this._z=c*h*g-u*d*f,this._w=c*h*f-u*d*g;break;case"XZY":this._x=u*h*f-c*d*g,this._y=c*d*f-u*h*g,this._z=c*h*g+u*d*f,this._w=c*h*f+u*d*g;break;default:Gt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class{static{this.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Lo.copy(this).projectOnVector(t),this.sub(Lo)}reflect(t){return this.sub(Lo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lo=new N,sc=new wn,Wt=class{static{this.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],g=n[8],y=s[0],p=s[3],m=s[6],M=s[1],E=s[4],T=s[7],R=s[2],A=s[5],_=s[8];return r[0]=a*y+o*M+l*R,r[3]=a*p+o*E+l*A,r[6]=a*m+o*T+l*_,r[1]=c*y+h*M+f*R,r[4]=c*p+h*E+f*A,r[7]=c*m+h*T+f*_,r[2]=u*y+d*M+g*R,r[5]=u*p+d*E+g*A,r[8]=u*m+d*T+g*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,g=e*f+n*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=f*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=d*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return _i("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Do.makeScale(t,e)),this}rotate(t){return _i("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Do.makeRotation(-t)),this}translate(t,e){return _i("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Do.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Do=new Wt,rc=new Wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ac=new Wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wu(){let i={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===de&&(s.r=Vn(s.r),s.g=Vn(s.g),s.b=Vn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===de&&(s.r=Xi(s.r),s.g=Xi(s.g),s.b=Xi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?Ls:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Is]:{primaries:t,whitePoint:n,transfer:Ls,toXYZ:rc,fromXYZ:ac,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:t,whitePoint:n,transfer:de,toXYZ:rc,fromXYZ:ac,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:We}}}),i}var se=wu();function Vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Xi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ii,la=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Ii===void 0&&(Ii=Ds("canvas")),Ii.width=t.width,Ii.height=t.height;let s=Ii.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Ii}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ds("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Vn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Vn(e[n]/255)*255):e[n]=Vn(e[n]);return{data:e,width:t.width,height:t.height}}else return Gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ru=0,$i=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=us(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(No(s[a].image)):r.push(No(s[a]))}else r=No(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function No(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?la.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Gt("Texture: Unable to serialize Texture."),{})}var Cu=0,Uo=new N,Je=class i extends An{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bn,s=bn,r=Ze,a=Yn,o=vn,l=Ke,c=i.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=us(),this.name="",this.source=new $i(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Uo).x}get height(){return this.source.getSize(Uo).y}get depth(){return this.source.getSize(Uo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Gt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Yi:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case ra:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Yi:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case ra:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=wl;Je.DEFAULT_ANISOTROPY=1;var ye=class{static{this.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,T=(d+1)/2,R=(m+1)/2,A=(h+u)/4,_=(f+y)/4,S=(g+p)/4;return E>T&&E>R?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=A/n,r=_/n):T>R?T<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(T),n=A/s,r=S/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=_/r,s=S/r),this.set(n,s,r,e),this}let M=Math.sqrt((p-g)*(p-g)+(f-y)*(f-y)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(p-g)/M,this.y=(f-y)/M,this.z=(u-h)/M,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ca=class extends An{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Je({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new $i(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends ca{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ns=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ha=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var he=class i{static{this.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,l,c,h,f,u,d,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,d,g,y,p)}set(t,e,n,s,r,a,o,l,c,h,f,u,d,g,y,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Li.setFromMatrixColumn(t,0).length(),r=1/Li.setFromMatrixColumn(t,1).length(),a=1/Li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,g=o*h,y=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=g+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,g=c*h,y=c*f;e[0]=u+y*o,e[4]=g*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-g,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,g=c*h,y=c*f;e[0]=u-y*o,e[4]=-a*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,g=o*h,y=o*f;e[0]=l*h,e[4]=g*c-d,e[8]=u*c+y,e[1]=l*f,e[5]=y*c+u,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+g,e[10]=u-y*f}else if(t.order==="XZY"){let u=a*l,d=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+y,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*h,e[10]=y*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Pu,t,Iu)}lookAt(t,e,n){let s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),Qn.crossVectors(n,je),Qn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),Qn.crossVectors(n,je)),Qn.normalize(),wr.crossVectors(je,Qn),s[0]=Qn.x,s[4]=wr.x,s[8]=je.x,s[1]=Qn.y,s[5]=wr.y,s[9]=je.y,s[2]=Qn.z,s[6]=wr.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],g=n[2],y=n[6],p=n[10],m=n[14],M=n[3],E=n[7],T=n[11],R=n[15],A=s[0],_=s[4],S=s[8],F=s[12],P=s[1],D=s[5],z=s[9],X=s[13],I=s[2],V=s[6],Z=s[10],G=s[14],nt=s[3],H=s[7],Q=s[11],tt=s[15];return r[0]=a*A+o*P+l*I+c*nt,r[4]=a*_+o*D+l*V+c*H,r[8]=a*S+o*z+l*Z+c*Q,r[12]=a*F+o*X+l*G+c*tt,r[1]=h*A+f*P+u*I+d*nt,r[5]=h*_+f*D+u*V+d*H,r[9]=h*S+f*z+u*Z+d*Q,r[13]=h*F+f*X+u*G+d*tt,r[2]=g*A+y*P+p*I+m*nt,r[6]=g*_+y*D+p*V+m*H,r[10]=g*S+y*z+p*Z+m*Q,r[14]=g*F+y*X+p*G+m*tt,r[3]=M*A+E*P+T*I+R*nt,r[7]=M*_+E*D+T*V+R*H,r[11]=M*S+E*z+T*Z+R*Q,r[15]=M*F+E*X+T*G+R*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],y=t[7],p=t[11],m=t[15],M=l*d-c*u,E=o*d-c*f,T=o*u-l*f,R=a*d-c*h,A=a*u-l*h,_=a*f-o*h;return e*(y*M-p*E+m*T)-n*(g*M-p*R+m*A)+s*(g*E-y*R+m*_)-r*(g*T-y*A+p*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],y=t[13],p=t[14],m=t[15],M=e*o-n*a,E=e*l-s*a,T=e*c-r*a,R=n*l-s*o,A=n*c-r*o,_=s*c-r*l,S=h*y-f*g,F=h*p-u*g,P=h*m-d*g,D=f*p-u*y,z=f*m-d*y,X=u*m-d*p,I=M*X-E*z+T*D+R*P-A*F+_*S;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/I;return t[0]=(o*X-l*z+c*D)*V,t[1]=(s*z-n*X-r*D)*V,t[2]=(y*_-p*A+m*R)*V,t[3]=(u*A-f*_-d*R)*V,t[4]=(l*P-a*X-c*F)*V,t[5]=(e*X-s*P+r*F)*V,t[6]=(p*T-g*_-m*E)*V,t[7]=(h*_-u*T+d*E)*V,t[8]=(a*z-o*P+c*S)*V,t[9]=(n*P-e*z-r*S)*V,t[10]=(g*A-y*T+m*M)*V,t[11]=(f*T-h*A-d*M)*V,t[12]=(o*F-a*D-l*S)*V,t[13]=(e*D-n*F+s*S)*V,t[14]=(y*E-g*R-p*M)*V,t[15]=(h*R-f*E+u*M)*V,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,g=r*f,y=a*h,p=a*f,m=o*f,M=l*c,E=l*h,T=l*f,R=n.x,A=n.y,_=n.z;return s[0]=(1-(y+m))*R,s[1]=(d+T)*R,s[2]=(g-E)*R,s[3]=0,s[4]=(d-T)*A,s[5]=(1-(u+m))*A,s[6]=(p+M)*A,s[7]=0,s[8]=(g+E)*_,s[9]=(p-M)*_,s[10]=(1-(u+y))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Li.set(s[0],s[1],s[2]).length(),o=Li.set(s[4],s[5],s[6]).length(),l=Li.set(s[8],s[9],s[10]).length();r<0&&(a=-a),pn.copy(this);let c=1/a,h=1/o,f=1/l;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,e.setFromRotationMatrix(pn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=cn,l=!1){let c=this.elements,h=2*r/(e-t),f=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===cn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Zi)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=cn,l=!1){let c=this.elements,h=2/(e-t),f=2/(n-s),u=-(e+t)/(e-t),d=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===cn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Zi)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Li=new N,pn=new he,Pu=new N(0,0,0),Iu=new N(1,1,1),Qn=new N,wr=new N,je=new N,oc=new he,lc=new wn,Rn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return oc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(oc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return lc.setFromEuler(this),this.setFromQuaternion(lc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var Ki=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Lu=0,cc=new N,Di=new wn,On=new he,Rr=new N,Ss=new N,Du=new N,Nu=new wn,hc=new N(1,0,0),uc=new N(0,1,0),dc=new N(0,0,1),fc={type:"added"},Uu={type:"removed"},Ni={type:"childadded",child:null},Fo={type:"childremoved",child:null},Oe=class i extends An{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=us(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new Rn,n=new wn,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Wt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ki,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.multiply(Di),this}rotateOnWorldAxis(t,e){return Di.setFromAxisAngle(t,e),this.quaternion.premultiply(Di),this}rotateX(t){return this.rotateOnAxis(hc,t)}rotateY(t){return this.rotateOnAxis(uc,t)}rotateZ(t){return this.rotateOnAxis(dc,t)}translateOnAxis(t,e){return cc.copy(t).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(hc,t)}translateY(t){return this.translateOnAxis(uc,t)}translateZ(t){return this.translateOnAxis(dc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Rr.copy(t):Rr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(Ss,Rr,this.up):On.lookAt(Rr,Ss,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),Di.setFromRotationMatrix(On),this.quaternion.premultiply(Di.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fc),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uu),Fo.child=t,this.dispatchEvent(Fo),Fo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),On.multiply(t.parent.matrixWorld)),t.applyMatrix4(On),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fc),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,Du),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,Nu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Oe.DEFAULT_UP=new N(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Tn=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fu={type:"move"},Qi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let p=e.getJointPose(y,n),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&u>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Oo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=Tu(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Oo(a,r,t+1/3),this.g=Oo(a,r,t),this.b=Oo(a,r,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=We){function n(r){r!==void 0&&parseFloat(r)<1&&Gt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Gt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Gt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){let n=yh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Gt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Vn(t.r),this.g=Vn(t.g),this.b=Vn(t.b),this}copyLinearToSRGB(t){return this.r=Xi(t.r),this.g=Xi(t.g),this.b=Xi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return se.workingToColorSpace(He.copy(this),t),Math.round(te(He.r*255,0,255))*65536+Math.round(te(He.g*255,0,255))*256+Math.round(te(He.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(He.copy(this),e);let n=He.r,s=He.g,r=He.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=We){se.workingToColorSpace(He.copy(this),t);let e=He.r,n=He.g,s=He.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(Cr);let n=Io(jn.h,Cr.h,e),s=Io(jn.s,Cr.s,e),r=Io(jn.l,Cr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new Qt;Qt.NAMES=yh;var xi=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},mn=new N,Bn=new N,Bo=new N,zn=new N,Ui=new N,Fi=new N,pc=new N,zo=new N,ko=new N,Go=new N,Vo=new ye,Ho=new ye,Wo=new ye,ii=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),Bn.subVectors(n,e),Bo.subVectors(t,e);let a=mn.dot(mn),o=mn.dot(Bn),l=mn.dot(Bo),c=Bn.dot(Bn),h=Bn.dot(Bo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Vo.setScalar(0),Ho.setScalar(0),Wo.setScalar(0),Vo.fromBufferAttribute(t,e),Ho.fromBufferAttribute(t,n),Wo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Vo,r.x),a.addScaledVector(Ho,r.y),a.addScaledVector(Wo,r.z),a}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),Bn.subVectors(t,e),mn.cross(Bn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),mn.cross(Bn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Ui.subVectors(s,n),Fi.subVectors(r,n),zo.subVectors(t,n);let l=Ui.dot(zo),c=Fi.dot(zo);if(l<=0&&c<=0)return e.copy(n);ko.subVectors(t,s);let h=Ui.dot(ko),f=Fi.dot(ko);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(Ui,a);Go.subVectors(t,r);let d=Ui.dot(Go),g=Fi.dot(Go);if(g>=0&&d<=g)return e.copy(r);let y=d*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Fi,o);let p=h*g-d*f;if(p<=0&&f-h>=0&&d-g>=0)return pc.subVectors(r,s),o=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(pc,o);let m=1/(p+y+u);return a=y*m,o=u*m,e.copy(n).addScaledVector(Ui,a).addScaledVector(Fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Cn=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Pr.copy(n.boundingBox)),Pr.applyMatrix4(t.matrixWorld),this.union(Pr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ms),Ir.subVectors(this.max,Ms),Oi.subVectors(t.a,Ms),Bi.subVectors(t.b,Ms),zi.subVectors(t.c,Ms),ti.subVectors(Bi,Oi),ei.subVectors(zi,Bi),fi.subVectors(Oi,zi);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-fi.z,fi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,fi.z,0,-fi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-fi.y,fi.x,0];return!Xo(e,Oi,Bi,zi,Ir)||(e=[1,0,0,0,1,0,0,0,1],!Xo(e,Oi,Bi,zi,Ir))?!1:(Lr.crossVectors(ti,ei),e=[Lr.x,Lr.y,Lr.z],Xo(e,Oi,Bi,zi,Ir))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},kn=[new N,new N,new N,new N,new N,new N,new N,new N],gn=new N,Pr=new Cn,Oi=new N,Bi=new N,zi=new N,ti=new N,ei=new N,fi=new N,Ms=new N,Ir=new N,Lr=new N,pi=new N;function Xo(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){pi.fromArray(i,r);let o=s.x*Math.abs(pi.x)+s.y*Math.abs(pi.y)+s.z*Math.abs(pi.z),l=t.dot(pi),c=e.dot(pi),h=n.dot(pi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var we=new N,Dr=new xt,Ou=0,$e=class extends An{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ou++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ph,this.updateRanges=[],this.gpuType=un,this.version=0,this._normalizationScale=t!==void 0?zl(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Dr.fromBufferAttribute(this,e),Dr.applyMatrix3(t),this.setXY(e,Dr.x,Dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Eu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Au(t,this.array)}};var Us=class extends $e{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Fs=class extends $e{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Re=class extends $e{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bu=new Cn,bs=new N,qo=new N,si=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Bu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);let e=bs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(qo)),this.expandByPoint(bs.copy(t.center).sub(qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},zu=0,ln=new he,Yo=new Oe,ki=new N,tn=new Cn,Ts=new Cn,Ne=new N,sn=class i extends An{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=us(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mu(t)?Fs:Us)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return Yo.lookAt(t),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Re(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ts.setFromBufferAttribute(o),this.morphTargetsRelative?(Ne.addVectors(tn.min,Ts.min),tn.expandByPoint(Ne),Ne.addVectors(tn.max,Ts.max),tn.expandByPoint(Ne)):(tn.expandByPoint(Ts.min),tn.expandByPoint(Ts.max))}tn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ne.fromBufferAttribute(o,c),l&&(ki.fromBufferAttribute(t,c),Ne.add(ki)),s=Math.max(s,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new $e(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let F=0;F<n.count;F++)o[F]=new N,l[F]=new N;let h=new N,f=new N,u=new N,d=new xt,g=new xt,y=new xt,p=new N,m=new N;function M(F,P,D){c[F]=c[P]=c[D]=1,h.fromBufferAttribute(n,F),f.fromBufferAttribute(n,P),u.fromBufferAttribute(n,D),d.fromBufferAttribute(r,F),g.fromBufferAttribute(r,P),y.fromBufferAttribute(r,D),f.sub(h),u.sub(h),g.sub(d),y.sub(d);let z=1/(g.x*y.y-y.x*g.y);isFinite(z)&&(p.copy(f).multiplyScalar(y.y).addScaledVector(u,-g.y).multiplyScalar(z),m.copy(u).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(z),o[F].add(p),o[P].add(p),o[D].add(p),l[F].add(m),l[P].add(m),l[D].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let F=0,P=E.length;F<P;++F){let D=E[F],z=D.start,X=D.count;for(let I=z,V=z+X;I<V;I+=3)M(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let T=new N,R=new N,A=new N,_=new N;function S(F){A.fromBufferAttribute(s,F),_.copy(A);let P=o[F];T.copy(P),T.sub(A.multiplyScalar(A.dot(P))).normalize(),R.crossVectors(_,P);let z=R.dot(l[F])<0?-1:1;a.setXYZW(F,T.x,T.y,T.z,z)}for(let F=0,P=n.count;F<P;++F)c[F]&&S(F);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new $e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,h=new N,f=new N;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),y=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,g=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?d=l[y]*o.data.stride+o.offset:d=l[y]*h;for(let m=0;m<h;m++)u[g++]=c[d++]}return new $e(u,h,f)}if(this.index===null)return Gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Zo=new N,ku=new N,Gu=new Wt,en=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Zo.subVectors(n,e).cross(ku.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Zo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Gu.getNormalMatrix(t),s=this.coplanarPoint(Zo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Vu=0,Wn=class extends An{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=us(),this.name="",this.type="Material",this.blending=ls,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=vl,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Gt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Gt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new en().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new xt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new xt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Gn=new N,Jo=new N,Nr=new N,Ur=new N,Os=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Gn.copy(this.origin).addScaledVector(this.direction,e),Gn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Jo.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),Ur.copy(this.origin).sub(Jo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Nr),o=Ur.dot(this.direction),l=-Ur.dot(Nr),c=Ur.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*l-o,u=a*o-l,g=r*h,f>=0)if(u>=-g)if(u<=g){let y=1/h;f*=y,u*=y,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Jo).addScaledVector(Nr,u),d}intersectSphere(t,e){if(t.radius<0)return null;Gn.subVectors(t.center,this.origin);let n=Gn.dot(this.direction),s=Gn.dot(Gn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Gn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,g=e.x-a.x,y=e.y-a.y,p=e.z-a.z,m=n.x-a.x,M=n.y-a.y,E=n.z-a.z,T=Math.abs(l),R=Math.abs(c),A=Math.abs(h),_,S,F,P,D,z,X,I,V,Z,G,nt;if(T>=R&&T>=A?(F=l,z=f,V=g,nt=m,l>=0?(_=c,S=h,P=u,D=d,X=y,I=p,Z=M,G=E):(_=h,S=c,P=d,D=u,X=p,I=y,Z=E,G=M)):R>=A?(F=c,z=u,V=y,nt=M,c>=0?(_=h,S=l,P=d,D=f,X=p,I=g,Z=E,G=m):(_=l,S=h,P=f,D=d,X=g,I=p,Z=m,G=E)):(F=h,z=d,V=p,nt=E,h>=0?(_=l,S=c,P=f,D=u,X=g,I=y,Z=m,G=M):(_=c,S=l,P=u,D=f,X=y,I=g,Z=M,G=m)),F===0)return null;let H=_/F,Q=S/F,tt=1/F,Tt=P-H*z,Dt=D-Q*z,q=X-H*V,vt=I-Q*V,Et=Z-H*nt,Ot=G-Q*nt,et=Et*vt-Ot*q,It=Tt*Ot-Dt*Et,ue=q*Dt-vt*Tt;if(s){if(et<0||It<0||ue<0)return null}else if((et<0||It<0||ue<0)&&(et>0||It>0||ue>0))return null;let Bt=et+It+ue;if(Bt===0)return null;let Jt=tt*(et*z+It*V+ue*nt);return(Bt>0?Jt<0:Jt>0)?null:this.at(Jt/Bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ji=class extends Wn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},mc=new he,mi=new Os,Fr=new si,gc=new N,Or=new N,Br=new N,zr=new N,$o=new N,kr=new N,_c=new N,Gr=new N,me=class extends Oe{constructor(t=new sn,e=new ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){kr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&($o.fromBufferAttribute(f,t),a?kr.addScaledVector($o,h):kr.addScaledVector($o.sub(e),h))}e.add(kr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fr.copy(n.boundingSphere),Fr.applyMatrix4(r),mi.copy(t.ray).recast(t.near),!(Fr.containsPoint(mi.origin)===!1&&(mi.intersectSphere(Fr,gc)===null||mi.origin.distanceToSquared(gc)>(t.far-t.near)**2))&&(mc.copy(r).invert(),mi.copy(t.ray).applyMatrix4(mc),!(n.boundingBox!==null&&mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let p=u[g],m=a[p.materialIndex],M=Math.max(p.start,d.start),E=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let T=M,R=E;T<R;T+=3){let A=o.getX(T),_=o.getX(T+1),S=o.getX(T+2);s=Vr(this,m,t,n,c,h,f,A,_,S),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(o.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let M=o.getX(p),E=o.getX(p+1),T=o.getX(p+2);s=Vr(this,a,t,n,c,h,f,M,E,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let p=u[g],m=a[p.materialIndex],M=Math.max(p.start,d.start),E=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let T=M,R=E;T<R;T+=3){let A=T,_=T+1,S=T+2;s=Vr(this,m,t,n,c,h,f,A,_,S),s&&(s.faceIndex=Math.floor(T/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let p=g,m=y;p<m;p+=3){let M=p,E=p+1,T=p+2;s=Vr(this,a,t,n,c,h,f,M,E,T),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Hu(i,t,e,n,s,r,a,o){let l;if(t.side===Be?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===ci,o),l===null)return null;Gr.copy(o),Gr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Gr);return c<e.near||c>e.far?null:{distance:c,point:Gr.clone(),object:i}}function Vr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Or),i.getVertexPosition(l,Br),i.getVertexPosition(c,zr);let h=Hu(i,t,e,n,Or,Br,zr,_c);if(h){let f=new N;ii.getBarycoord(_c,Or,Br,zr,f),s&&(h.uv=ii.getInterpolatedAttribute(s,o,l,c,f,new xt)),r&&(h.uv1=ii.getInterpolatedAttribute(r,o,l,c,f,new xt)),a&&(h.normal=ii.getInterpolatedAttribute(a,o,l,c,f,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new N,materialIndex:0};ii.getNormal(Or,Br,zr,u.normal),h.face=u,h.barycoord=f}return h}var Bs=class extends Je{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ue,h=Ue,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zs=class extends $e{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Gi=new he,xc=new he,Hr=[],vc=new Cn,Wu=new he,Es=new me,As=new si,ks=class extends me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Wu)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),vc.copy(t.boundingBox).applyMatrix4(Gi),this.boundingBox.union(vc)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Gi),As.copy(t.boundingSphere).applyMatrix4(Gi),this.boundingSphere.union(As)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Es.geometry=this.geometry,Es.material=this.material,Es.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),As.copy(this.boundingSphere),As.applyMatrix4(n),t.ray.intersectsSphere(As)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Gi),xc.multiplyMatrices(n,Gi),Es.matrixWorld=xc,Es.raycast(t,Hr);for(let a=0,o=Hr.length;a<o;a++){let l=Hr[a];l.instanceId=r,l.object=this,e.push(l)}Hr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new zs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Bs(new Float32Array(s*this.count),s,this.count,Ba,un));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},gi=new si,Xu=new xt(.5,.5),Wr=new N,ri=class{constructor(t=new en,e=new en,n=new en,s=new en,r=new en,a=new en){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],y=r[9],p=r[10],m=r[11],M=r[12],E=r[13],T=r[14],R=r[15];if(s[0].setComponents(c-a,d-h,m-g,R-M).normalize(),s[1].setComponents(c+a,d+h,m+g,R+M).normalize(),s[2].setComponents(c+o,d+f,m+y,R+E).normalize(),s[3].setComponents(c-o,d-f,m-y,R-E).normalize(),n)s[4].setComponents(l,u,p,T).normalize(),s[5].setComponents(c-l,d-u,m-p,R-T).normalize();else if(s[4].setComponents(c-l,d-u,m-p,R-T).normalize(),e===cn)s[5].setComponents(c+l,d+u,m+p,R+T).normalize();else if(e===Zi)s[5].setComponents(l,u,p,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){gi.center.set(0,0,0);let e=Xu.distanceTo(t.center);return gi.radius=.7071067811865476+e,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Wr.x=s.normal.x>0?t.max.x:t.min.x,Wr.y=s.normal.y>0?t.max.y:t.min.y,Wr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},yc=new he,ua=class i{constructor(){this.coordinateSystem=cn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];yc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ri),n[s].setFromProjectionMatrix(yc,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ri),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Gs=class extends Je{constructor(t=[],e=bi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ts=class extends Je{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xn=class extends Je{constructor(t,e,n=_n,s,r,a,o=Ue,l=Ue,c,h=Hn,f=1){if(h!==Hn&&h!==Zn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $i(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Vs=class extends Xn{constructor(t,e=_n,n=bi,s,r,a=Ue,o=Ue,l,c=Hn){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Hs=class extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Pn=class i extends sn{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(f,2));function g(y,p,m,M,E,T,R,A,_,S,F){let P=T/_,D=R/S,z=T/2,X=R/2,I=A/2,V=_+1,Z=S+1,G=0,nt=0,H=new N;for(let Q=0;Q<Z;Q++){let tt=Q*D-X;for(let Tt=0;Tt<V;Tt++){let Dt=Tt*P-z;H[y]=Dt*M,H[p]=tt*E,H[m]=I,c.push(H.x,H.y,H.z),H[y]=0,H[p]=0,H[m]=A>0?1:-1,h.push(H.x,H.y,H.z),f.push(Tt/_),f.push(1-Q/S),G+=1}}for(let Q=0;Q<S;Q++)for(let tt=0;tt<_;tt++){let Tt=u+tt+V*Q,Dt=u+tt+V*(Q+1),q=u+(tt+1)+V*(Q+1),vt=u+(tt+1)+V*Q;l.push(Tt,Dt,vt),l.push(Dt,q,vt),nt+=6}o.addGroup(d,nt,F),d+=nt,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Gt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new xt:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],a=[],o=new N,l=new he;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(te(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,g))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(te(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],d*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},es=class extends rn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new xt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},da=class extends es{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function kl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Sc=new N,Mc=new N,Ko=new kl,Qo=new kl,jo=new kl,ns=class extends rn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Mc.subVectors(s[0],s[1]).add(s[0]),c=Mc);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Sc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Sc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),d),y=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),Ko.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,g,y,p),Qo.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,g,y,p),jo.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(Ko.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),Qo.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),jo.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(Ko.calc(l),Qo.calc(l),jo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function bc(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function qu(i,t){let e=1-i;return e*e*t}function Yu(i,t){return 2*(1-i)*i*t}function Zu(i,t){return i*i*t}function Rs(i,t,e,n){return qu(i,t)+Yu(i,e)+Zu(i,n)}function Ju(i,t){let e=1-i;return e*e*e*t}function $u(i,t){let e=1-i;return 3*e*e*i*t}function Ku(i,t){return 3*(1-i)*i*i*t}function Qu(i,t){return i*i*i*t}function Cs(i,t,e,n,s){return Ju(i,t)+$u(i,e)+Ku(i,n)+Qu(i,s)}var Ws=class extends rn{constructor(t=new xt,e=new xt,n=new xt,s=new xt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Cs(t,s.x,r.x,a.x,o.x),Cs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fa=class extends rn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Cs(t,s.x,r.x,a.x,o.x),Cs(t,s.y,r.y,a.y,o.y),Cs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xs=class extends rn{constructor(t=new xt,e=new xt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new xt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new xt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pa=class extends rn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qs=class extends rn{constructor(t=new xt,e=new xt,n=new xt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new xt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Rs(t,s.x,r.x,a.x),Rs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ma=class extends rn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Rs(t,s.x,r.x,a.x),Rs(t,s.y,r.y,a.y),Rs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ys=class extends rn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new xt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(bc(o,l.x,c.x,h.x,f.x),bc(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new xt().fromArray(s))}return this}},rl=Object.freeze({__proto__:null,ArcCurve:da,CatmullRomCurve3:ns,CubicBezierCurve:Ws,CubicBezierCurve3:fa,EllipseCurve:es,LineCurve:Xs,LineCurve3:pa,QuadraticBezierCurve:qs,QuadraticBezierCurve3:ma,SplineCurve:Ys}),ga=class extends rn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new rl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new rl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Zs=class extends ga{constructor(t){super(),this.type="Path",this.currentPoint=new xt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Xs(this.currentPoint.clone(),new xt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new qs(this.currentPoint.clone(),new xt(t,e),new xt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new Ws(this.currentPoint.clone(),new xt(t,e),new xt(n,s),new xt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ys(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new es(t,e,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},vi=class extends Zs{constructor(t){super(t),this.uuid=us(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Zs().fromJSON(s))}return this}};function ju(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Sh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=sd(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,f=l;for(let u=e;u<s;u+=e){let d=i[u],g=i[u+1];d<o&&(o=d),g<l&&(l=g),d>h&&(h=d),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Js(r,a,e,o,l,c,0),a}function Sh(i,t,e,n,s){let r;if(s===md(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Tc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Tc(a/n|0,i[a],i[a+1],r);return r&&is(r,r.next)&&(Ks(r),r=r.next),r}function yi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(is(e,e.next)||Me(e.prev,e,e.next)===0)){if(Ks(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Js(i,t,e,n,s,r,a){if(!i)return;!a&&r&&cd(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?ed(i,n,s,r):td(i)){t.push(l.i,i.i,c.i),Ks(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=nd(yi(i),t),Js(i,t,e,n,s,r,2)):a===2&&id(i,t,e,n,s,r):Js(yi(i),t,e,n,s,r,1);break}}}function td(i){let t=i.prev,e=i,n=i.next;if(Me(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),f=Math.min(o,l,c),u=Math.max(s,r,a),d=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=f&&g.y<=d&&ws(s,o,r,l,a,c,g.x,g.y)&&Me(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ed(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Me(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=Math.min(o,l,c),g=Math.min(h,f,u),y=Math.max(o,l,c),p=Math.max(h,f,u),m=al(d,g,t,e,n),M=al(y,p,t,e,n),E=i.prevZ,T=i.nextZ;for(;E&&E.z>=m&&T&&T.z<=M;){if(E.x>=d&&E.x<=y&&E.y>=g&&E.y<=p&&E!==s&&E!==a&&ws(o,h,l,f,c,u,E.x,E.y)&&Me(E.prev,E,E.next)>=0||(E=E.prevZ,T.x>=d&&T.x<=y&&T.y>=g&&T.y<=p&&T!==s&&T!==a&&ws(o,h,l,f,c,u,T.x,T.y)&&Me(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;E&&E.z>=m;){if(E.x>=d&&E.x<=y&&E.y>=g&&E.y<=p&&E!==s&&E!==a&&ws(o,h,l,f,c,u,E.x,E.y)&&Me(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;T&&T.z<=M;){if(T.x>=d&&T.x<=y&&T.y>=g&&T.y<=p&&T!==s&&T!==a&&ws(o,h,l,f,c,u,T.x,T.y)&&Me(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function nd(i,t){let e=i;do{let n=e.prev,s=e.next.next;!is(n,s)&&bh(n,e,e.next,s)&&$s(n,s)&&$s(s,n)&&(t.push(n.i,e.i,s.i),Ks(e),Ks(e.next),e=i=s),e=e.next}while(e!==i);return yi(e)}function id(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&dd(a,o)){let l=Th(a,o);a=yi(a,a.next),l=yi(l,l.next),Js(a,t,e,n,s,r,0),Js(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function sd(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Sh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ud(c))}s.sort(rd);for(let r=0;r<s.length;r++)e=ad(s[r],e);return e}function rd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function ad(i,t){let e=od(i,t);if(!e)return t;let n=Th(e,i);return yi(n,n.next),yi(e,e.next)}function od(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(is(i,e))return e;do{if(is(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,a=e.x<e.next.x?e:e.next,f===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Mh(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);$s(e,i)&&(f<h||f===h&&(e.x>a.x||e.x===a.x&&ld(a,e)))&&(a=e,h=f)}e=e.next}while(e!==o);return a}function ld(i,t){return Me(i.prev,i,t.prev)<0&&Me(t.next,i,i.next)<0}function cd(i,t,e,n){let s=i;do s.z===0&&(s.z=al(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,hd(s)}function hd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function al(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ud(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Mh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ws(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Mh(i,t,e,n,s,r,a,o)}function dd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!fd(i,t)&&($s(i,t)&&$s(t,i)&&pd(i,t)&&(Me(i.prev,i,t.prev)||Me(i,t.prev,t))||is(i,t)&&Me(i.prev,i,i.next)>0&&Me(t.prev,t,t.next)>0)}function Me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function is(i,t){return i.x===t.x&&i.y===t.y}function bh(i,t,e,n){let s=qr(Me(i,t,e)),r=qr(Me(i,t,n)),a=qr(Me(e,n,i)),o=qr(Me(e,n,t));return!!(s!==r&&a!==o||s===0&&Xr(i,e,t)||r===0&&Xr(i,n,t)||a===0&&Xr(e,i,n)||o===0&&Xr(e,t,n))}function Xr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function qr(i){return i>0?1:i<0?-1:0}function fd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&bh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function $s(i,t){return Me(i.prev,i,i.next)<0?Me(i,t,i.next)>=0&&Me(i,i.prev,t)>=0:Me(i,t,i.prev)<0||Me(i,i.next,t)<0}function pd(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Th(i,t){let e=ol(i.i,i.x,i.y),n=ol(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Tc(i,t,e,n){let s=ol(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ol(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function md(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ll=class{static triangulate(t,e,n=2){return ju(t,e,n)}},En=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Ec(t),Ac(n,t);let a=t.length;e.forEach(Ec);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Ac(n,e[l]);let o=ll.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Ec(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ac(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Qs=class i extends sn{constructor(t=new vi([new xt(.5,.5),new xt(-.5,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Re(s,3)),this.setAttribute("uv",new Re(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:gd,E,T=!1,R,A,_,S;if(m){E=m.getSpacedPoints(h),T=!0,u=!1;let j=m.isCatmullRomCurve3?m.closed:!1;R=m.computeFrenetFrames(h,j),A=new N,_=new N,S=new N}u||(p=0,d=0,g=0,y=0);let F=o.extractPoints(c),P=F.shape,D=F.holes;if(!En.isClockWise(P)){P=P.reverse();for(let j=0,mt=D.length;j<mt;j++){let rt=D[j];En.isClockWise(rt)&&(D[j]=rt.reverse())}}function X(j){let rt=10000000000000001e-36,bt=j[0];for(let ot=1;ot<=j.length;ot++){let kt=ot%j.length,wt=j[kt],$t=wt.x-bt.x,Kt=wt.y-bt.y,ee=$t*$t+Kt*Kt,L=Math.max(Math.abs(wt.x),Math.abs(wt.y),Math.abs(bt.x),Math.abs(bt.y)),fe=rt*L*L;if(ee<=fe){j.splice(kt,1),ot--;continue}bt=wt}}X(P),D.forEach(X);let I=D.length,V=P;for(let j=0;j<I;j++){let mt=D[j];P=P.concat(mt)}function Z(j,mt,rt){return mt||Vt("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(mt,rt)}let G=P.length;function nt(j,mt,rt){let bt,ot,kt,wt=j.x-mt.x,$t=j.y-mt.y,Kt=rt.x-j.x,ee=rt.y-j.y,L=wt*wt+$t*$t,fe=wt*ee-$t*Kt;if(Math.abs(fe)>Number.EPSILON){let Xt=Math.sqrt(L),oe=Math.sqrt(Kt*Kt+ee*ee),gt=mt.x-$t/Xt,_e=mt.y+wt/Xt,Ft=rt.x-ee/oe,zt=rt.y+Kt/oe,b=((Ft-gt)*ee-(zt-_e)*Kt)/(wt*ee-$t*Kt);bt=gt+wt*b-j.x,ot=_e+$t*b-j.y;let x=bt*bt+ot*ot;if(x<=2)return new xt(bt,ot);kt=Math.sqrt(x/2)}else{let Xt=!1;wt>Number.EPSILON?Kt>Number.EPSILON&&(Xt=!0):wt<-Number.EPSILON?Kt<-Number.EPSILON&&(Xt=!0):Math.sign($t)===Math.sign(ee)&&(Xt=!0),Xt?(bt=-$t,ot=wt,kt=Math.sqrt(L)):(bt=wt,ot=$t,kt=Math.sqrt(L/2))}return new xt(bt/kt,ot/kt)}let H=[];for(let j=0,mt=V.length,rt=mt-1,bt=j+1;j<mt;j++,rt++,bt++)rt===mt&&(rt=0),bt===mt&&(bt=0),H[j]=nt(V[j],V[rt],V[bt]);let Q=[],tt,Tt=H.concat();for(let j=0,mt=I;j<mt;j++){let rt=D[j];tt=[];for(let bt=0,ot=rt.length,kt=ot-1,wt=bt+1;bt<ot;bt++,kt++,wt++)kt===ot&&(kt=0),wt===ot&&(wt=0),tt[bt]=nt(rt[bt],rt[kt],rt[wt]);Q.push(tt),Tt=Tt.concat(tt)}let Dt;if(p===0)Dt=En.triangulateShape(V,D);else{let j=[],mt=[];for(let rt=0;rt<p;rt++){let bt=rt/p,ot=d*Math.cos(bt*Math.PI/2),kt=g*Math.sin(bt*Math.PI/2)+y;for(let wt=0,$t=V.length;wt<$t;wt++){let Kt=Z(V[wt],H[wt],kt);It(Kt.x,Kt.y,-ot),bt===0&&j.push(Kt)}for(let wt=0,$t=I;wt<$t;wt++){let Kt=D[wt];tt=Q[wt];let ee=[];for(let L=0,fe=Kt.length;L<fe;L++){let Xt=Z(Kt[L],tt[L],kt);It(Xt.x,Xt.y,-ot),bt===0&&ee.push(Xt)}bt===0&&mt.push(ee)}}Dt=En.triangulateShape(j,mt)}let q=Dt.length,vt=g+y;for(let j=0;j<G;j++){let mt=u?Z(P[j],Tt[j],vt):P[j];T?(_.copy(R.normals[0]).multiplyScalar(mt.x),A.copy(R.binormals[0]).multiplyScalar(mt.y),S.copy(E[0]).add(_).add(A),It(S.x,S.y,S.z)):It(mt.x,mt.y,0)}for(let j=1;j<=h;j++)for(let mt=0;mt<G;mt++){let rt=u?Z(P[mt],Tt[mt],vt):P[mt];T?(_.copy(R.normals[j]).multiplyScalar(rt.x),A.copy(R.binormals[j]).multiplyScalar(rt.y),S.copy(E[j]).add(_).add(A),It(S.x,S.y,S.z)):It(rt.x,rt.y,f/h*j)}for(let j=p-1;j>=0;j--){let mt=j/p,rt=d*Math.cos(mt*Math.PI/2),bt=g*Math.sin(mt*Math.PI/2)+y;for(let ot=0,kt=V.length;ot<kt;ot++){let wt=Z(V[ot],H[ot],bt);It(wt.x,wt.y,f+rt)}for(let ot=0,kt=D.length;ot<kt;ot++){let wt=D[ot];tt=Q[ot];for(let $t=0,Kt=wt.length;$t<Kt;$t++){let ee=Z(wt[$t],tt[$t],bt);T?It(ee.x,ee.y+E[h-1].y,E[h-1].x+rt):It(ee.x,ee.y,f+rt)}}}Et(),Ot();function Et(){let j=s.length/3;if(u){let mt=0,rt=G*mt;for(let bt=0;bt<q;bt++){let ot=Dt[bt];ue(ot[2]+rt,ot[1]+rt,ot[0]+rt)}mt=h+p*2,rt=G*mt;for(let bt=0;bt<q;bt++){let ot=Dt[bt];ue(ot[0]+rt,ot[1]+rt,ot[2]+rt)}}else{for(let mt=0;mt<q;mt++){let rt=Dt[mt];ue(rt[2],rt[1],rt[0])}for(let mt=0;mt<q;mt++){let rt=Dt[mt];ue(rt[0]+G*h,rt[1]+G*h,rt[2]+G*h)}}n.addGroup(j,s.length/3-j,0)}function Ot(){let j=s.length/3,mt=0;et(V,mt),mt+=V.length;for(let rt=0,bt=D.length;rt<bt;rt++){let ot=D[rt];et(ot,mt),mt+=ot.length}n.addGroup(j,s.length/3-j,1)}function et(j,mt){let rt=j.length;for(;--rt>=0;){let bt=rt,ot=rt-1;ot<0&&(ot=j.length-1);for(let kt=0,wt=h+p*2;kt<wt;kt++){let $t=G*kt,Kt=G*(kt+1),ee=mt+bt+$t,L=mt+ot+$t,fe=mt+ot+Kt,Xt=mt+bt+Kt;Bt(ee,L,fe,Xt)}}}function It(j,mt,rt){l.push(j),l.push(mt),l.push(rt)}function ue(j,mt,rt){Jt(j),Jt(mt),Jt(rt);let bt=s.length/3,ot=M.generateTopUV(n,s,bt-3,bt-2,bt-1);Ht(ot[0]),Ht(ot[1]),Ht(ot[2])}function Bt(j,mt,rt,bt){Jt(j),Jt(mt),Jt(bt),Jt(mt),Jt(rt),Jt(bt);let ot=s.length/3,kt=M.generateSideWallUV(n,s,ot-6,ot-3,ot-2,ot-1);Ht(kt[0]),Ht(kt[1]),Ht(kt[3]),Ht(kt[1]),Ht(kt[2]),Ht(kt[3])}function Jt(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function Ht(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return _d(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new rl[s.type]().fromJSON(s)),new i(n,t.options)}},gd={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new xt(r,a),new xt(o,l),new xt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],g=t[s*3+2],y=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new xt(a,1-l),new xt(c,1-f),new xt(u,1-g),new xt(y,1-m)]:[new xt(o,1-l),new xt(h,1-f),new xt(d,1-g),new xt(p,1-m)]}};function _d(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var js=class i extends sn{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let M=m*u-a;for(let E=0;E<c;E++){let T=E*f-r;g.push(T,-M,0),y.push(0,0,1),p.push(E/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){let E=M+c*m,T=M+c*(m+1),R=M+1+c*(m+1),A=M+1+c*m;d.push(E,T,A),d.push(T,R,A)}this.setIndex(d),this.setAttribute("position",new Re(g,3)),this.setAttribute("normal",new Re(y,3)),this.setAttribute("uv",new Re(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var tr=class i extends sn{constructor(t=new vi([new xt(0,.5),new xt(-.5,-.5),new xt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Re(s,3)),this.setAttribute("normal",new Re(r,3)),this.setAttribute("uv",new Re(a,2));function c(h){let f=s.length/3,u=h.extractPoints(e),d=u.shape,g=u.holes;En.isClockWise(d)===!1&&(d=d.reverse());for(let p=0,m=g.length;p<m;p++){let M=g[p];En.isClockWise(M)===!0&&(g[p]=M.reverse())}let y=En.triangulateShape(d,g);for(let p=0,m=g.length;p<m;p++){let M=g[p];d=d.concat(M)}for(let p=0,m=d.length;p<m;p++){let M=d[p];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let p=0,m=y.length;p<m;p++){let M=y[p],E=M[0]+f,T=M[1]+f,R=M[2]+f;n.push(E,T,R),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return xd(e,t)}static fromJSON(t,e){let n=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];n.push(a)}return new i(n,t.curveSegments)}};function xd(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){let s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}var er=class i extends sn{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new N,d=new N,g=new N;for(let y=0;y<=n;y++){let p=a+y/n*o;for(let m=0;m<=s;m++){let M=m/s*r;d.x=(t+e*Math.cos(p))*Math.cos(M),d.y=(t+e*Math.cos(p))*Math.sin(M),d.z=e*Math.sin(p),c.push(d.x,d.y,d.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),g.subVectors(d,u).normalize(),h.push(g.x,g.y,g.z),f.push(m/s),f.push(y/n)}}for(let y=1;y<=n;y++)for(let p=1;p<=s;p++){let m=(s+1)*y+p-1,M=(s+1)*(y-1)+p-1,E=(s+1)*(y-1)+p,T=(s+1)*y+p;l.push(m,M,T),l.push(M,E,T)}this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(h,3)),this.setAttribute("uv",new Re(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function Ei(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(wc(s))s.isRenderTargetTexture?(Gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(wc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function qe(i){let t={};for(let e=0;e<i.length;e++){let n=Ei(i[e]);for(let s in n)t[s]=n[s]}return t}function wc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function vd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Gl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var Eh={clone:Ei,merge:qe},yd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,In=class extends Wn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yd,this.fragmentShader=Sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ei(t.uniforms),this.uniformsGroups=vd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new xt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ye().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new he().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},_a=class extends In{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},qn=class extends Wn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vr,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ss=class extends qn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new xt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return _i('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){_i('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var nr=class extends Wn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vr,this.normalScale=new xt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Ia,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},xa=class extends Wn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ah,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},va=class extends Wn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Vi(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Yr(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ai=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ya=class extends ai{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nl,endingEnd:nl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case il:r=t,o=2*e-n;break;case sl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case il:a=t,l=2*n-e;break;case sl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),y=g*g,p=y*g,m=-u*p+2*u*y-u*g,M=(1+u)*p+(-1.5-2*u)*y+(-.5+u)*g+1,E=(-1-d)*p+(1.5+d)*y+.5*g,T=d*p-d*y;for(let R=0;R!==o;++R)r[R]=m*a[h+R]+M*a[c+R]+E*a[l+R]+T*a[f+R];return r}},Sa=class extends ai{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Ma=class extends ai{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},ba=class extends ai{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(n-e)/(s-e),y=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*y+a[l+p]*g;return r}let u=o*2,d=t-1;for(let g=0;g!==o;++g){let y=a[c+g],p=a[l+g],m=d*u+g*2,M=f[m],E=f[m+1],T=t*u+g*2,R=h[T],A=h[T+1],_=bd(n,e,M,R,s);r[g]=Ah(_,y,E,A,p)}return r}};function Ah(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Md(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function bd(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Ah(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Md(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var an=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vi(e,this.TimeBufferType),this.values=Vi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vi(t.times,Array),values:Vi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Yr(t.settings)&&(n.settings={inTangents:Vi(t.settings.inTangents,Array),outTangents:Vi(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ba(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ps:e=this.InterpolantFactoryMethodDiscrete;break;case aa:e=this.InterpolantFactoryMethodLinear;break;case $r:e=this.InterpolantFactoryMethodSmooth;break;case el:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Gt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return aa;case this.InterpolantFactoryMethodSmooth:return $r;case this.InterpolantFactoryMethodBezier:return el}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;Yr(this.settings)&&(Rc(this.settings.inTangents,t),Rc(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Yr(this.settings)&&(Cc(this.settings.inTangents,t),Cc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Vt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Vt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&bu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Vt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$r,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let g=0;g!==n;++g){let y=e[f+g];if(y!==e[u+g]||y!==e[d+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Yr(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Rc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Cc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=aa;var oi=class extends an{constructor(t,e,n){super(t,e,n)}};oi.prototype.ValueTypeName="bool";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=Ps;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends an{constructor(t,e,n,s){super(t,e,n,s)}};Ta.prototype.ValueTypeName="color";var Ea=class extends an{constructor(t,e,n,s){super(t,e,n,s)}};Ea.prototype.ValueTypeName="number";var Aa=class extends ai{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)wn.slerpFlat(r,0,a,c-o,a,c,l);return r}},ir=class extends an{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Aa(this.times,this.values,this.getValueSize(),t)}};ir.prototype.ValueTypeName="quaternion";ir.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends an{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Ps;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends an{constructor(t,e,n,s){super(t,e,n,s)}};wa.prototype.ValueTypeName="vector";var Ra=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wh=new Ra,Ca=class{constructor(t){this.manager=t!==void 0?t:wh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};Ca.DEFAULT_MATERIAL_NAME="__DEFAULT";var rs=class extends Oe{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var tl=new he,Pc=new N,Ic=new N,sr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new xt(512,512),this.mapType=Ke,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ri,this._frameExtents=new xt(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Pc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Pc),Ic.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ic),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){tl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(tl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===Zi||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(tl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Zr=new N,Jr=new wn,Mn=new N,rr=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Zr,Jr,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,Mn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Zr,Jr,Mn),Mn.x===1&&Mn.y===1&&Mn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zr,Jr,Mn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ni=new N,Lc=new xt,Dc=new xt,Xe=class extends rr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=oa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Po*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oa*2*Math.atan(Math.tan(Po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,Lc,Dc),e.subVectors(Dc,Lc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Po*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var cl=class extends sr{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0}},ar=class extends rs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new cl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},or=class extends rr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},hl=class extends sr{constructor(){super(new or(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},lr=class extends rs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new hl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},cr=class extends rs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Hi=-90,Wi=1,as=class extends Oe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xe(Hi,Wi,t,e);s.layers=this.layers,this.add(s);let r=new Xe(Hi,Wi,t,e);r.layers=this.layers,this.add(r);let a=new Xe(Hi,Wi,t,e);a.layers=this.layers,this.add(a);let o=new Xe(Hi,Wi,t,e);o.layers=this.layers,this.add(o);let l=new Xe(Hi,Wi,t,e);l.layers=this.layers,this.add(l);let c=new Xe(Hi,Wi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=y,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Pa=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Vl="\\[\\]\\.:\\/",Td=new RegExp("["+Vl+"]","g"),Hl="[^"+Vl+"]",Ed="[^"+Vl.replace("\\.","")+"]",Ad=/((?:WC+[\/:])*)/.source.replace("WC",Hl),wd=/(WCOD+)?/.source.replace("WCOD",Ed),Rd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hl),Cd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hl),Pd=new RegExp("^"+Ad+wd+Rd+Cd+"$"),Id=["material","materials","bones","map"],ul=class{constructor(t,e,n){let s=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Td,"")}static parseTrackName(t){let e=Pd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Id.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Gt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=ul;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var D0=new Float32Array(1);var Nc=new he,hr=class{constructor(t,e,n=0,s=1/0){this.ray=new Os(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ki,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Vt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Nc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nc),this}intersectObject(t,e=!0,n=[]){return dl(t,this,n,e),n.sort(Uc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)dl(t[s],this,n,e);return n.sort(Uc),n}};function Uc(i,t){return i.distance-t.distance}function dl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)dl(r[a],t,e,!0)}}var fl=class{static{this.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};function Wl(i,t,e,n){let s=Ld(n);switch(e){case Ll:return i*t;case Ba:return i*t/s.components*s.byteLength;case za:return i*t/s.components*s.byteLength;case hi:return i*t*2/s.components*s.byteLength;case ka:return i*t*2/s.components*s.byteLength;case Dl:return i*t*3/s.components*s.byteLength;case vn:return i*t*4/s.components*s.byteLength;case Ga:return i*t*4/s.components*s.byteLength;case fr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:case Xa:return Math.max(i,16)*Math.max(t,8)/4;case Va:case Wa:return Math.max(i,8)*Math.max(t,8)/2;case qa:case Ya:case Ja:case $a:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Za:case _r:case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case to:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case no:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case io:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ro:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case ho:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case uo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fo:case po:case mo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case go:case _o:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xr:case xo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ld(i){switch(i){case Ke:case Rl:return{byteLength:1,components:1};case hs:case Cl:case xn:return{byteLength:2,components:1};case Fa:case Oa:return{byteLength:2,components:4};case _n:case Ua:case un:return{byteLength:4,components:1};case Pl:case Il:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Jh(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Nd(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],y=f[d];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,f[u]=y)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let y=f[d];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ud=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Od=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Wd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ef=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,rf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,af=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uf="gl_FragColor = linearToOutputTexel( gl_FragColor );",df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,gf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ef=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Af=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,wf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Rf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Pf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,If=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Df=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Nf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ff=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Of=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Bf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Jf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,np=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ip=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,op=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,up=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_p=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,xp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,yp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Mp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ap=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Np=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Up=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Vp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Wp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Xp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$p=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,em=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,im=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,am=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,um=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:Ud,alphahash_pars_fragment:Fd,alphamap_fragment:Od,alphamap_pars_fragment:Bd,alphatest_fragment:zd,alphatest_pars_fragment:kd,aomap_fragment:Gd,aomap_pars_fragment:Vd,batching_pars_vertex:Hd,batching_vertex:Wd,begin_vertex:Xd,beginnormal_vertex:qd,bsdfs:Yd,iridescence_fragment:Zd,bumpmap_pars_fragment:Jd,clipping_planes_fragment:$d,clipping_planes_pars_fragment:Kd,clipping_planes_pars_vertex:Qd,clipping_planes_vertex:jd,color_fragment:tf,color_pars_fragment:ef,color_pars_vertex:nf,color_vertex:sf,common:rf,defaultnormal_vertex:af,displacementmap_pars_vertex:of,displacementmap_vertex:lf,emissivemap_fragment:cf,emissivemap_pars_fragment:hf,colorspace_fragment:uf,colorspace_pars_fragment:df,envmap_fragment:ff,envmap_common_pars_fragment:pf,envmap_pars_fragment:mf,envmap_pars_vertex:gf,envmap_physical_pars_fragment:wf,envmap_vertex:_f,fog_vertex:xf,fog_pars_vertex:vf,fog_fragment:yf,fog_pars_fragment:Sf,gradientmap_pars_fragment:Mf,lightmap_pars_fragment:bf,lights_lambert_fragment:Tf,lights_lambert_pars_fragment:Ef,lights_pars_begin:Af,lights_toon_fragment:Rf,lights_toon_pars_fragment:Cf,lights_phong_fragment:Pf,lights_phong_pars_fragment:If,lights_physical_fragment:Lf,lights_physical_pars_fragment:Df,lights_fragment_begin:Nf,lights_fragment_maps:Uf,lights_fragment_end:Ff,lightprobes_pars_fragment:Of,logdepthbuf_fragment:Bf,logdepthbuf_pars_fragment:zf,logdepthbuf_pars_vertex:kf,logdepthbuf_vertex:Gf,map_fragment:Vf,map_pars_fragment:Hf,map_particle_fragment:Wf,map_particle_pars_fragment:Xf,metalnessmap_fragment:qf,metalnessmap_pars_fragment:Yf,morphinstance_vertex:Zf,morphcolor_vertex:Jf,morphnormal_vertex:$f,morphtarget_pars_vertex:Kf,morphtarget_vertex:Qf,normal_fragment_begin:jf,normal_fragment_maps:tp,normal_pars_fragment:ep,normal_pars_vertex:np,normal_vertex:ip,normalmap_pars_fragment:sp,clearcoat_normal_fragment_begin:rp,clearcoat_normal_fragment_maps:ap,clearcoat_pars_fragment:op,iridescence_pars_fragment:lp,opaque_fragment:cp,packing:hp,premultiplied_alpha_fragment:up,project_vertex:dp,dithering_fragment:fp,dithering_pars_fragment:pp,roughnessmap_fragment:mp,roughnessmap_pars_fragment:gp,shadowmap_pars_fragment:_p,shadowmap_pars_vertex:xp,shadowmap_vertex:vp,shadowmask_pars_fragment:yp,skinbase_vertex:Sp,skinning_pars_vertex:Mp,skinning_vertex:bp,skinnormal_vertex:Tp,specularmap_fragment:Ep,specularmap_pars_fragment:Ap,tonemapping_fragment:wp,tonemapping_pars_fragment:Rp,transmission_fragment:Cp,transmission_pars_fragment:Pp,uv_pars_fragment:Ip,uv_pars_vertex:Lp,uv_vertex:Dp,worldpos_vertex:Np,background_vert:Up,background_frag:Fp,backgroundCube_vert:Op,backgroundCube_frag:Bp,cube_vert:zp,cube_frag:kp,depth_vert:Gp,depth_frag:Vp,distance_vert:Hp,distance_frag:Wp,equirect_vert:Xp,equirect_frag:qp,linedashed_vert:Yp,linedashed_frag:Zp,meshbasic_vert:Jp,meshbasic_frag:$p,meshlambert_vert:Kp,meshlambert_frag:Qp,meshmatcap_vert:jp,meshmatcap_frag:tm,meshnormal_vert:em,meshnormal_frag:nm,meshphong_vert:im,meshphong_frag:sm,meshphysical_vert:rm,meshphysical_frag:am,meshtoon_vert:om,meshtoon_frag:lm,points_vert:cm,points_frag:hm,shadow_vert:um,shadow_frag:dm,sprite_vert:fm,sprite_frag:pm},St={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},Nn={basic:{uniforms:qe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:qe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:qe([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:qe([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:qe([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Qt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:qe([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:qe([St.points,St.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:qe([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:qe([St.common,St.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:qe([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:qe([St.sprite,St.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distance:{uniforms:qe([St.common,St.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distance_vert,fragmentShader:jt.distance_frag},shadow:{uniforms:qe([St.lights,St.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Nn.physical={uniforms:qe([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var vo={r:0,b:0,g:0},mm=new he,$h=new Wt;$h.set(-1,0,0,0,1,0,0,0,1);function gm(i,t,e,n,s,r){let a=new Qt(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){let T=M.backgroundBlurriness>0;E=t.get(E,T)}return E}function g(M){let E=!1,T=d(M);T===null?p(a,o):T&&T.isColor&&(p(T,1),E=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?e.buffers.color.setClear(0,0,0,1,r):R==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(M,E){let T=d(E);T&&T.isCubeTexture?(c===void 0&&(c=new me(new Pn(1,1,1),new In({name:"BackgroundCubeMaterial",uniforms:Ei(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=T,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(mm.makeRotationFromEuler(E.backgroundRotation)).transpose(),T.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply($h),c.material.toneMapped=se.getTransfer(T.colorSpace)!==de,(h!==T||f!==T.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=T,f=T.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(l===void 0&&(l=new me(new js(2,2),new In({name:"BackgroundMaterial",uniforms:Ei(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=T,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=se.getTransfer(T.colorSpace)!==de,T.matrixAutoUpdate===!0&&T.updateMatrix(),l.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=T,f=T.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function p(M,E){M.getRGB(vo,Gl(i)),e.buffers.color.setClear(vo.r,vo.g,vo.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(a,o)},render:g,addToRenderList:y,dispose:m}}function _m(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(D,z,X,I,V){let Z=!1,G=f(D,I,X,z);r!==G&&(r=G,c(r.object)),Z=d(D,I,X,V),Z&&g(D,I,X,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,T(D,z,X,I),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function f(D,z,X,I){let V=I.wireframe===!0,Z=n[z.id];Z===void 0&&(Z={},n[z.id]=Z);let G=D.isInstancedMesh===!0?D.id:0,nt=Z[G];nt===void 0&&(nt={},Z[G]=nt);let H=nt[X.id];H===void 0&&(H={},nt[X.id]=H);let Q=H[V];return Q===void 0&&(Q=u(l()),H[V]=Q),Q}function u(D){let z=[],X=[],I=[];for(let V=0;V<e;V++)z[V]=0,X[V]=0,I[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:X,attributeDivisors:I,object:D,attributes:{},index:null}}function d(D,z,X,I){let V=r.attributes,Z=z.attributes,G=0,nt=X.getAttributes();for(let H in nt)if(nt[H].location>=0){let tt=V[H],Tt=Z[H];if(Tt===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(Tt=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(Tt=D.instanceColor)),tt===void 0||tt.attribute!==Tt||Tt&&tt.data!==Tt.data)return!0;G++}return r.attributesNum!==G||r.index!==I}function g(D,z,X,I){let V={},Z=z.attributes,G=0,nt=X.getAttributes();for(let H in nt)if(nt[H].location>=0){let tt=Z[H];tt===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor));let Tt={};Tt.attribute=tt,tt&&tt.data&&(Tt.data=tt.data),V[H]=Tt,G++}r.attributes=V,r.attributesNum=G,r.index=I}function y(){let D=r.newAttributes;for(let z=0,X=D.length;z<X;z++)D[z]=0}function p(D){m(D,0)}function m(D,z){let X=r.newAttributes,I=r.enabledAttributes,V=r.attributeDivisors;X[D]=1,I[D]===0&&(i.enableVertexAttribArray(D),I[D]=1),V[D]!==z&&(i.vertexAttribDivisor(D,z),V[D]=z)}function M(){let D=r.newAttributes,z=r.enabledAttributes;for(let X=0,I=z.length;X<I;X++)z[X]!==D[X]&&(i.disableVertexAttribArray(X),z[X]=0)}function E(D,z,X,I,V,Z,G){G===!0?i.vertexAttribIPointer(D,z,X,V,Z):i.vertexAttribPointer(D,z,X,I,V,Z)}function T(D,z,X,I){y();let V=I.attributes,Z=X.getAttributes(),G=z.defaultAttributeValues;for(let nt in Z){let H=Z[nt];if(H.location>=0){let Q=V[nt];if(Q===void 0&&(nt==="instanceMatrix"&&D.instanceMatrix&&(Q=D.instanceMatrix),nt==="instanceColor"&&D.instanceColor&&(Q=D.instanceColor)),Q!==void 0){let tt=Q.normalized,Tt=Q.itemSize,Dt=t.get(Q);if(Dt===void 0)continue;let q=Dt.buffer,vt=Dt.type,Et=Dt.bytesPerElement,Ot=vt===i.INT||vt===i.UNSIGNED_INT||Q.gpuType===Ua;if(Q.isInterleavedBufferAttribute){let et=Q.data,It=et.isInterleavedBuffer===!0?et.stride:et.itemSize,ue=Q.offset;if(et.isInstancedInterleavedBuffer||et.isInstancedBufferAttribute){for(let Bt=0;Bt<H.locationSize;Bt++)m(H.location+Bt,et.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Bt=0;Bt<H.locationSize;Bt++)p(H.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,q);for(let Bt=0;Bt<H.locationSize;Bt++)E(H.location+Bt,Tt/H.locationSize,vt,tt,It*Et,(ue+Tt/H.locationSize*Bt)*Et,Ot)}else{if(Q.isInstancedBufferAttribute){for(let et=0;et<H.locationSize;et++)m(H.location+et,Q.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let et=0;et<H.locationSize;et++)p(H.location+et);i.bindBuffer(i.ARRAY_BUFFER,q);for(let et=0;et<H.locationSize;et++)E(H.location+et,Tt/H.locationSize,vt,tt,Tt*Et,Tt/H.locationSize*et*Et,Ot)}}else if(G!==void 0){let tt=G[nt];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(H.location,tt);break;case 3:i.vertexAttrib3fv(H.location,tt);break;case 4:i.vertexAttrib4fv(H.location,tt);break;default:i.vertexAttrib1fv(H.location,tt)}}}}M()}function R(){F();for(let D in n){let z=n[D];for(let X in z){let I=z[X];for(let V in I){let Z=I[V];for(let G in Z)h(Z[G].object),delete Z[G];delete I[V]}}delete n[D]}}function A(D){if(n[D.id]===void 0)return;let z=n[D.id];for(let X in z){let I=z[X];for(let V in I){let Z=I[V];for(let G in Z)h(Z[G].object),delete Z[G];delete I[V]}}delete n[D.id]}function _(D){for(let z in n){let X=n[z];for(let I in X){let V=X[I];if(V[D.id]===void 0)continue;let Z=V[D.id];for(let G in Z)h(Z[G].object),delete Z[G];delete V[D.id]}}}function S(D){for(let z in n){let X=n[z],I=D.isInstancedMesh===!0?D.id:0,V=X[I];if(V!==void 0){for(let Z in V){let G=V[Z];for(let nt in G)h(G[nt].object),delete G[nt];delete V[Z]}delete X[I],Object.keys(X).length===0&&delete n[z]}}}function F(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:p,disableUnusedAttributes:M}}function xm(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function vm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==vn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let S=_===xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==Ke&&_!==un&&!S&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Gt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&f===!1;e.reversedDepthBuffer===!0&&f===!1&&Gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&f===!0&&Gt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:T,maxSamples:R,samples:A}}function ym(i){let t=this,e=null,n=0,s=!1,r=!1,a=new en,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let M=r?0:n,E=M*4,T=m.clippingState||null;l.value=T,T=h(g,u,E,d);for(let R=0;R!==E;++R)T[R]=e[R];m.clippingState=T,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,g){let y=f!==null?f.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=d+y*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,T=d;E!==y;++E,T+=4)a.copy(f[E]).applyMatrix4(M,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}var Mr=class extends nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Gs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Pn(5,5,5),r=new In({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:Si});r.uniforms.tEquirect.value=e;let a=new me(s,r),o=e.minFilter;return e.minFilter===Yn&&(e.minFilter=Ze),new as(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Rh=256,Sm=3,Mm=20,Kh=256,Qh=16,bm=3,Tm=new N,Em=new Qt,fs=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new as(1,10,null),this._boxMesh=new me(new Pn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Tm}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,g=l.autoClearStencil,y=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(t.background=l.getClearColor(Em));let p=new as(n,s,h);return p.position.copy(o),p.update(l,t),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=g,t.background=y,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Rh,vh(t))}_fromTexture(t,e){t.mapping===bi||t.mapping===cs?this._setSize(t.image.length===0?Rh:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Ch(t,!1,!1),n=Math.log2(t)-Sm;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ch(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===bi||t.mapping===cs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ph()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Am(),this._integrationMaterial=wm());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/Qh);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-bm)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(Kh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=Rm());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Ch(i,t,e){return new Mr(i,{minFilter:Yn,generateMipmaps:t,type:xn,colorSpace:Is,depthBuffer:e})}function br(i,t,e){return new In({name:i,uniforms:t,vertexShader:jt.cube_vert,fragmentShader:e,side:Be,blending:Si,depthTest:!1,depthWrite:!1})}function Am(){return br("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Kh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function wm(){return br("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Qh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Rm(){return br("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Mm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ph(){return br("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ih(){return br("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Cm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===La||d===Da)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new Mr(g.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,g=d===La||d===Da,y=d===bi||d===cs;if(g||y){let p=e.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new fs(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),p.texture;if(p!==void 0)return p.texture;{let M=u.image;return g&&M&&M.height>0||y&&M&&l(M)?(n===null&&(n=new fs(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,e.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===La?u.mapping=bi:d===Da&&(u.mapping=cs),u}function l(u){let d=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&d++;return d===g}function c(u){let d=u.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Pm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&_i("WebGLRenderer: "+n+" extension not supported."),s}}}function Im(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&t.remove(g.index);for(let p in g.attributes)t.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(t.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function c(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),e.memory.geometries++),y}function h(g){let y=g.attributes;for(let p in y)t.update(y[p],i.ARRAY_BUFFER)}function f(g){let y=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let M=y!==null?y.array.length:p.array.length/3-1,E=p.count>=65535?Fs:Us,T=new E(Math.ceil(M/3)*6,1),R=T.array;if(y!==null){let _=y.array;m=y.version;for(let S=0,F=0;S<M;S+=3){let P=_[S+0],D=_[S+1],z=_[S+2];R[F++]=P,R[F++]=D,R[F++]=D,R[F++]=z,R[F++]=z,R[F++]=P}}else{m=p.version;for(let _=0,S=0;_<M;_+=3){let F=_+0,P=_+1,D=_+2;R[S++]=F,R[S++]=P,R[S++]=P,R[S++]=D,R[S++]=D,R[S++]=F}}T.version=m;let A=r.get(g);A&&t.remove(A),r.set(g,T)}function u(g){let y=r.get(g);if(y){let p=g.index;p!==null&&y.version<p.version&&f(g)}else f(g);return r.get(g)}function d(){for(let g in s){let y=s[g].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function Lm(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),e.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),e.update(u,n,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let y=0;for(let p=0;p<d;p++)y+=u[p];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Dm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Vt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Nm(i,t,e){let n=new WeakMap,s=new ye;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let F=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",F)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let T=o.attributes.position.count*E,R=1;T>t.maxTextureSize&&(R=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);let A=new Float32Array(T*R*4*f),_=new Ns(A,T,R,f);_.type=un,_.needsUpdate=!0;let S=E*4;for(let P=0;P<f;P++){let D=p[P],z=m[P],X=M[P],I=T*R*4*P;for(let V=0;V<D.count;V++){let Z=V*S;d===!0&&(s.fromBufferAttribute(D,V),A[I+Z+0]=s.x,A[I+Z+1]=s.y,A[I+Z+2]=s.z,A[I+Z+3]=0),g===!0&&(s.fromBufferAttribute(z,V),A[I+Z+4]=s.x,A[I+Z+5]=s.y,A[I+Z+6]=s.z,A[I+Z+7]=0),y===!0&&(s.fromBufferAttribute(X,V),A[I+Z+8]=s.x,A[I+Z+9]=s.y,A[I+Z+10]=s.z,A[I+Z+11]=X.itemSize===4?s.w:1)}}u={count:f,texture:_,size:new xt(T,R)},n.set(o,u),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let y=0;y<c.length;y++)d+=c[y];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Um(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=t.get(c,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var Fm={[yl]:"LINEAR_TONE_MAPPING",[Sl]:"REINHARD_TONE_MAPPING",[Ml]:"CINEON_TONE_MAPPING",[bl]:"ACES_FILMIC_TONE_MAPPING",[El]:"AGX_TONE_MAPPING",[Al]:"NEUTRAL_TONE_MAPPING",[Tl]:"CUSTOM_TONE_MAPPING"};function Om(i,t,e,n,s,r){let a=new nn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new sn;h.setAttribute("position",new Re([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Re([0,2,0,0,2,0],2));let f=new _a({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new me(h,f),d=new or(-1,1,1,-1,0,1),g=null,y=null,p=!1,m,M=null,E=[],T=!1;this.setSize=function(R,A){a.setSize(R,A),o!==null&&o.setSize(R,A),l!==null&&l.setSize(R,A);for(let _=0;_<E.length;_++){let S=E[_];S.setSize&&S.setSize(R,A)}},this.setEffects=function(R){E=R,T=E.length>0&&E[0].isRenderPass===!0;let A=a.width,_=a.height;E.length>0&&o===null&&(o=new nn(A,_,{type:xn,depthBuffer:!1,stencilBuffer:!1}),l=new nn(A,_,{type:xn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&E.some(F=>F.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Xn(A,_),r===!0&&(c.format=Zn,c.type=Ti)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let F=0;F<E.length;F++){let P=E[F];P.setSize&&P.setSize(A,_),S&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(R,A){if(p||R.toneMapping===Ln&&E.length===0)return!1;if(M=A,A!==null){let _=A.width,S=A.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return T===!1&&R.setRenderTarget(a),m=R.toneMapping,R.toneMapping=Ln,!0},this.hasRenderPass=function(){return T},this.end=function(R,A){R.toneMapping=m,p=!0;let _=a,S=o;for(let F=0;F<E.length;F++){let P=E[F];P.enabled!==!1&&(P.render(R,S,_,A),P.needsSwap!==!1&&(_=S,S=S===o?l:o))}if(g!==R.outputColorSpace||y!==R.toneMapping){g=R.outputColorSpace,y=R.toneMapping,f.defines={},se.getTransfer(g)===de&&(f.defines.SRGB_TRANSFER="");let F=Fm[y];F&&(f.defines[F]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,R.setRenderTarget(M),R.render(u,d),M=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var jh=new Je,tu=new Xn(1,1),eu=new Vs(1),nu=new Ns,iu=new ha,su=new Gs,Lh=[],Dh=[],Nh=new Float32Array(16),Uh=new Float32Array(9),Fh=new Float32Array(4);function ps(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Lh[s];if(r===void 0&&(r=new Float32Array(s),Lh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Mo(i,t){let e=Dh[t];e===void 0&&(e=new Int32Array(t),Dh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Bm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function Gm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function Vm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Fh.set(n),i.uniformMatrix2fv(this.addr,!1,Fh),Ie(e,n)}}function Hm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Uh.set(n),i.uniformMatrix3fv(this.addr,!1,Uh),Ie(e,n)}}function Wm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Nh.set(n),i.uniformMatrix4fv(this.addr,!1,Nh),Ie(e,n)}}function Xm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function Ym(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function Zm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function Jm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $m(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function Qm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function bo(i){return i.version===0&&(i.compareFunction=Fl,i.needsUpdate=!0),i}function jm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=bo(tu):r=jh,e.setTexture2D(t||r,s)}function tg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||iu,s)}function eg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=bo(eu):r=su,e.setTextureCube(t||r,s)}function ng(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||nu,s)}function ig(i){switch(i){case 5126:return Bm;case 35664:return zm;case 35665:return km;case 35666:return Gm;case 35674:return Vm;case 35675:return Hm;case 35676:return Wm;case 5124:case 35670:return Xm;case 35667:case 35671:return qm;case 35668:case 35672:return Ym;case 35669:case 35673:return Zm;case 5125:return Jm;case 36294:return $m;case 36295:return Km;case 36296:return Qm;case 35678:case 36198:case 36298:case 36306:case 35682:return jm;case 35679:case 36299:case 36307:return tg;case 35680:case 36300:case 36308:case 36293:return eg;case 36289:case 36303:case 36311:case 36292:return ng}}function sg(i,t){i.uniform1fv(this.addr,t)}function rg(i,t){let e=ps(t,this.size,2);i.uniform2fv(this.addr,e)}function ag(i,t){let e=ps(t,this.size,3);i.uniform3fv(this.addr,e)}function og(i,t){let e=ps(t,this.size,4);i.uniform4fv(this.addr,e)}function lg(i,t){let e=ps(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function cg(i,t){let e=ps(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function hg(i,t){let e=ps(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function ug(i,t){i.uniform1iv(this.addr,t)}function dg(i,t){i.uniform2iv(this.addr,t)}function fg(i,t){i.uniform3iv(this.addr,t)}function pg(i,t){i.uniform4iv(this.addr,t)}function mg(i,t){i.uniform1uiv(this.addr,t)}function gg(i,t){i.uniform2uiv(this.addr,t)}function _g(i,t){i.uniform3uiv(this.addr,t)}function xg(i,t){i.uniform4uiv(this.addr,t)}function vg(i,t,e){let n=this.cache,s=t.length,r=Mo(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=bo(tu):a=jh;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function yg(i,t,e){let n=this.cache,s=t.length,r=Mo(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||iu,r[a])}function Sg(i,t,e){let n=this.cache,s=t.length,r=Mo(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=bo(eu):a=su;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Mg(i,t,e){let n=this.cache,s=t.length,r=Mo(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||nu,r[a])}function bg(i){switch(i){case 5126:return sg;case 35664:return rg;case 35665:return ag;case 35666:return og;case 35674:return lg;case 35675:return cg;case 35676:return hg;case 5124:case 35670:return ug;case 35667:case 35671:return dg;case 35668:case 35672:return fg;case 35669:case 35673:return pg;case 5125:return mg;case 36294:return gg;case 36295:return _g;case 36296:return xg;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return yg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return Mg}}var Yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ig(e.type)}},Zl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bg(e.type)}},Jl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Xl=/(\w+)(\])?(\[|\.)?/g;function Oh(i,t){i.seq.push(t),i.map[t.id]=t}function Tg(i,t,e){let n=i.name,s=n.length;for(Xl.lastIndex=0;;){let r=Xl.exec(n),a=Xl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Oh(e,c===void 0?new Yl(o,i,t):new Zl(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Jl(o),Oh(e,f)),e=f}}}var ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Tg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Bh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Eg=37297,Ag=0;function wg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var zh=new Wt;function Rg(i){se._getMatrix(zh,se.workingColorSpace,i);let t=`mat3( ${zh.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case Ls:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Gt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function kh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+wg(i.getShaderSource(t),o)}else return r}function Cg(i,t){let e=Rg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Pg={[yl]:"Linear",[Sl]:"Reinhard",[Ml]:"Cineon",[bl]:"ACESFilmic",[El]:"AgX",[Al]:"Neutral",[Tl]:"Custom"};function Ig(i,t){let e=Pg[t];return e===void 0?(Gt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var yo=new N;function Lg(){se.getLuminanceCoefficients(yo);let i=yo.x.toFixed(4),t=yo.y.toFixed(4),e=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function Ng(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Ug(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Sr(i){return i!==""}function Gh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Vh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Fg=/^[ \t]*#include +<([\w\d./]+)>/gm;function $l(i){return i.replace(Fg,Og)}function Og(i,t){let e=jt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return $l(e)}var Bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hh(i){return i.replace(Bg,zg)}function zg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var kg={[ur]:"SHADOWMAP_TYPE_PCF",[os]:"SHADOWMAP_TYPE_VSM"};function Gg(i){return kg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Vg={[cs]:"ENVMAP_MODE_REFRACTION"};function Hg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Vg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Wg={[Ia]:"ENVMAP_BLENDING_MULTIPLY",[ih]:"ENVMAP_BLENDING_MIX",[sh]:"ENVMAP_BLENDING_ADD"};function Xg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Wg[i.combine]||"ENVMAP_BLENDING_NONE"}function qg(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Gg(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Hg(e),f=Xg(e),u=Dg(e),d=Ng(r),g=s.createProgram(),y,p,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(y=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Sr).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Sr).join(`
`),p.length>0&&(p+=`
`)):(y=[Wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),p=[Wh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?jt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?Ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Cg("linearToOutputTexel",e.outputColorSpace),Lg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sr).join(`
`)),a=$l(a),a=Gh(a,e),a=Vh(a,e),o=$l(o),o=Gh(o,e),o=Vh(o,e),a=Hh(a),o=Hh(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",e.glslVersion===Ol?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ol?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=m+y+a,E=m+p+o,T=Bh(s,s.VERTEX_SHADER,M),R=Bh(s,s.FRAGMENT_SHADER,E);s.attachShader(g,T),s.attachShader(g,R),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(P){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(g)||"",z=s.getShaderInfoLog(T)||"",X=s.getShaderInfoLog(R)||"",I=D.trim(),V=z.trim(),Z=X.trim(),G=!0,nt=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,T,R);else{let H=kh(s,T,"vertex"),Q=kh(s,R,"fragment");Vt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+H+`
`+Q)}else I!==""?Gt("WebGLProgram: Program Info Log:",I):(V===""||Z==="")&&(nt=!1);nt&&(P.diagnostics={runnable:G,programLog:I,vertexShader:{log:V,prefix:y},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(T),s.deleteShader(R),_=new ds(s,g),S=Ug(s,g)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let F=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(g,Eg)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ag++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=R,this}var Yg=0,Kl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ql(t),e.set(t,n)),n}},Ql=class{constructor(t){this.id=Yg++,this.code=t,this.usedTimes=0}};function Zg(i){return i===hi||i===_r||i===xr}function Jg(i,t,e,n,s,r){let a=new Ki,o=new Kl,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,S,F,P,D,z){let X=P.fog,I=D.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=t.get(_.envMap||V,Z),nt=u[_.type],H=n.precision;_.precision!==null&&(H=n.getMaxPrecision(_.precision),H!==_.precision&&Gt("WebGLProgram.getParameters:",_.precision,"not supported, using",H,"instead."));let Q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,tt=Q!==void 0?Q.length:0,Tt=0;I.morphAttributes.position!==void 0&&(Tt=1),I.morphAttributes.normal!==void 0&&(Tt=2),I.morphAttributes.color!==void 0&&(Tt=3);let Dt,q,vt,Et;if(nt){let yt=Nn[nt];Dt=yt.vertexShader,q=yt.fragmentShader}else{Dt=_.vertexShader,q=_.fragmentShader;let yt=o.getVertexShaderStage(_),le=o.getFragmentShaderStage(_);o.update(_,yt,le),vt=yt.id,Et=le.id}let Ot=i.getRenderTarget(),et=i.state.buffers.depth.getReversed(),It=D.isInstancedMesh===!0,ue=D.isBatchedMesh===!0,Bt=!!_.map,Jt=!!_.matcap,Ht=!!G,j=Ht&&G.isPMREMTexture===!0,mt=!!_.aoMap,rt=!!_.lightMap,bt=!!_.bumpMap&&_.wireframe===!1,ot=!!_.normalMap,kt=!!_.displacementMap,wt=!!_.emissiveMap,$t=!!_.metalnessMap,Kt=!!_.roughnessMap,ee=_.anisotropy>0,L=_.clearcoat>0,fe=_.diffuseRoughness>0,Xt=_.dispersion>0,oe=_.retroreflectivity>0,gt=_.iridescence>0,_e=_.sheen>0,Ft=_.transmission>0,zt=ee&&!!_.anisotropyMap,b=L&&!!_.clearcoatMap,x=L&&!!_.clearcoatNormalMap,O=L&&!!_.clearcoatRoughnessMap,it=fe&&!!_.diffuseRoughnessMap,K=gt&&!!_.iridescenceMap,ht=gt&&!!_.iridescenceThicknessMap,_t=_e&&!!_.sheenColorMap,J=_e&&!!_.sheenRoughnessMap,$=!!_.specularMap,dt=!!_.specularColorMap,w=!!_.specularIntensityMap,Y=Ft&&!!_.transmissionMap,W=Ft&&!!_.thicknessMap,ft=!!_.gradientMap,lt=!!_.alphaMap,ut=_.alphaTest>0,Pt=!!_.alphaHash,Zt=!!_.extensions,st=Ln;_.toneMapped&&(Ot===null||Ot.isXRRenderTarget===!0)&&(st=i.toneMapping);let Nt=j?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,qt={shaderID:nt,shaderType:_.type,shaderName:_.name,vertexShader:Dt,fragmentShader:q,defines:_.defines,customVertexShaderID:vt,customFragmentShaderID:Et,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:H,batching:ue,batchingColor:ue&&D._colorsTexture!==null,instancing:It,instancingColor:It&&D.instanceColor!==null,instancingMorph:It&&D.morphTexture!==null,outputColorSpace:Ot===null?i.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Bt,matcap:Jt,envMap:Ht,envMapMode:Ht&&G.mapping,envMapPMREM:j,envMapMaxLod:j?Nt.length-1:null,envMapSize:j?Nt[0].width:null,aoMap:mt,lightMap:rt,bumpMap:bt,normalMap:ot,displacementMap:kt,emissiveMap:wt,normalMapObjectSpace:ot&&_.normalMapType===oh,normalMapTangentSpace:ot&&_.normalMapType===vr,packedNormalMap:ot&&_.normalMapType===vr&&Zg(_.normalMap.format),metalnessMap:$t,roughnessMap:Kt,anisotropy:ee,anisotropyMap:zt,clearcoat:L,clearcoatMap:b,clearcoatNormalMap:x,clearcoatRoughnessMap:O,diffuseRoughness:fe,diffuseRoughnessMap:it,dispersion:Xt,retroreflection:oe,iridescence:gt,iridescenceMap:K,iridescenceThicknessMap:ht,sheen:_e,sheenColorMap:_t,sheenRoughnessMap:J,specularMap:$,specularColorMap:dt,specularIntensityMap:w,transmission:Ft,transmissionMap:Y,thicknessMap:W,gradientMap:ft,opaque:_.transparent===!1&&_.blending===ls&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:ut,alphaHash:Pt,combine:_.combine,mapUv:Bt&&d(_.map.channel),aoMapUv:mt&&d(_.aoMap.channel),lightMapUv:rt&&d(_.lightMap.channel),bumpMapUv:bt&&d(_.bumpMap.channel),normalMapUv:ot&&d(_.normalMap.channel),displacementMapUv:kt&&d(_.displacementMap.channel),emissiveMapUv:wt&&d(_.emissiveMap.channel),metalnessMapUv:$t&&d(_.metalnessMap.channel),roughnessMapUv:Kt&&d(_.roughnessMap.channel),anisotropyMapUv:zt&&d(_.anisotropyMap.channel),clearcoatMapUv:b&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:O&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:it&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:K&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:J&&d(_.sheenRoughnessMap.channel),specularMapUv:$&&d(_.specularMap.channel),specularColorMapUv:dt&&d(_.specularColorMap.channel),specularIntensityMapUv:w&&d(_.specularIntensityMap.channel),transmissionMapUv:Y&&d(_.transmissionMap.channel),thicknessMapUv:W&&d(_.thicknessMap.channel),alphaMapUv:lt&&d(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ot||ee),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!I.attributes.uv&&(Bt||lt),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&ot===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:et,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Tt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:z.filter(yt=>yt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:Bt&&_.map.isVideoTexture===!0&&se.getTransfer(_.map.colorSpace)===de,decodeVideoTextureEmissive:wt&&_.emissiveMap.isVideoTexture===!0&&se.getTransfer(_.emissiveMap.colorSpace)===de,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===hn,flipSided:_.side===Be,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Zt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&_.extensions.multiDraw===!0||ue)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return qt.vertexUv1s=l.has(1),qt.vertexUv2s=l.has(2),qt.vertexUv3s=l.has(3),l.clear(),qt}function y(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let F in _.defines)S.push(F),S.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(p(S,_),m(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function p(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function m(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let S=u[_.type],F;if(S){let P=Nn[S];F=Eh.clone(P.uniforms)}else F=_.uniforms;return F}function E(_,S){let F=h.get(S);return F!==void 0?++F.usedTimes:(F=new qg(i,S,_,s),c.push(F),h.set(S,F)),F}function T(_){if(--_.usedTimes===0){let S=c.indexOf(_);c[S]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function R(_){o.remove(_)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:M,acquireProgram:E,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:A}}function $g(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Kg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Xh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function qh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,g,y,p,m){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:p,group:m},i[t]=M):(M.id=u.id,M.object=u,M.geometry=d,M.material=g,M.materialVariant=a(u),M.groupOrder=y,M.renderOrder=u.renderOrder,M.z=p,M.group=m),t++,M}function l(u,d,g,y,p,m,M){M.reversedDepth===!0&&(p=-p);let E=o(u,d,g,y,p,m);g.transmission>0?n.push(E):g.transparent===!0?s.push(E):e.push(E)}function c(u,d,g,y,p,m){let M=o(u,d,g,y,p,m);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,d){e.length>1&&e.sort(u||Kg),n.length>1&&n.sort(d||Xh),s.length>1&&s.sort(d||Xh)}function f(){for(let u=t,d=i.length;u<d;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function Qg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new qh,i.set(n,[a])):s>=r.length?(a=new qh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function jg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new Qt};break;case"SpotLight":e={position:new N,direction:new N,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function t0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var e0=0;function n0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function i0(i){let t=new jg,e=t0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new he,a=new he;function o(c){let h=0,f=0,u=0;for(let z=0;z<9;z++)n.probe[z].set(0,0,0);let d=0,g=0,y=0,p=0,m=0,M=0,E=0,T=0,R=0,A=0,_=0,S=0,F=0,P=0;c.sort(n0);for(let z=0,X=c.length;z<X;z++){let I=c[z],V=I.color,Z=I.intensity,G=I.distance,nt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===hi?nt=I.shadow.map.texture:nt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=V.r*Z,f+=V.g*Z,u+=V.b*Z;else if(I.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(I.sh.coefficients[H],Z);P++}else if(I.isSunLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,tt=e.get(I);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[g]=tt,n.sunShadowMap[g]=nt;let Tt=Q.getViewportCount();for(let Dt=0;Dt<Tt;Dt++)n.sunShadowMatrix[y+Dt]=Q.getMatrix(Dt),n.sunShadowCascade[y+Dt]=Q._cascadeData[Dt];y+=Tt,g++}n.sun[d]=H,d++}else if(I.isDirectionalLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,tt=e.get(I);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.directionalShadow[p]=tt,n.directionalShadowMap[p]=nt,n.directionalShadowMatrix[p]=I.shadow.matrix,R++}n.directional[p]=H,p++}else if(I.isSpotLight){let H=t.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(V).multiplyScalar(Z),H.distance=G,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,n.spot[M]=H;let Q=I.shadow;if(I.map&&(n.spotLightMap[S]=I.map,S++,Q.updateMatrices(I),I.castShadow&&F++),n.spotLightMatrix[M]=Q.matrix,I.castShadow){let tt=e.get(I);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.spotShadow[M]=tt,n.spotShadowMap[M]=nt,_++}M++}else if(I.isRectAreaLight){let H=t.get(I);H.color.copy(V).multiplyScalar(Z),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=H,E++}else if(I.isPointLight){let H=t.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity),H.distance=I.distance,H.decay=I.decay,I.castShadow){let Q=I.shadow,tt=e.get(I);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,n.pointShadow[m]=tt,n.pointShadowMap[m]=nt,n.pointShadowMatrix[m]=I.shadow.matrix,A++}n.point[m]=H,m++}else if(I.isHemisphereLight){let H=t.get(I);H.skyColor.copy(I.color).multiplyScalar(Z),H.groundColor.copy(I.groundColor).multiplyScalar(Z),n.hemi[T]=H,T++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let D=n.hash;(D.sunLength!==d||D.directionalLength!==p||D.pointLength!==m||D.spotLength!==M||D.rectAreaLength!==E||D.hemiLength!==T||D.numSunShadows!==g||D.numDirectionalShadows!==R||D.numPointShadows!==A||D.numSpotShadows!==_||D.numSpotMaps!==S||D.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=p,n.spot.length=M,n.rectArea.length=E,n.point.length=m,n.hemi.length=T,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.directionalShadowMatrix.length=R,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-F,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=P,D.sunLength=d,D.directionalLength=p,D.pointLength=m,D.spotLength=M,D.rectAreaLength=E,D.hemiLength=T,D.numSunShadows=g,D.numDirectionalShadows=R,D.numPointShadows=A,D.numSpotShadows=_,D.numSpotMaps=S,D.numLightProbes=P,n.version=e0++)}function l(c,h){let f=0,u=0,d=0,g=0,y=0,p=0,m=h.matrixWorldInverse;for(let M=0,E=c.length;M<E;M++){let T=c[M];if(T.isSunLight){let R=n.sun[f];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(m),f++}else if(T.isDirectionalLight){let R=n.directional[u];R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),u++}else if(T.isSpotLight){let R=n.spot[g];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(m),g++}else if(T.isRectAreaLight){let R=n.rectArea[y];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(m),a.identity(),r.copy(T.matrixWorld),r.premultiply(m),a.extractRotation(r),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(T.isPointLight){let R=n.point[d];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){let R=n.hemi[p];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Yh(i){let t=new i0(i),e=[],n=[],s=[];function r(f){h.camera=f,e.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):e.push(f)}function o(f){n.push(f)}function l(){t.setup(e),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){t.setupView(e,f)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function s0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Yh(i),t.set(s,[o])):r>=a.length?(o=new Yh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var r0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,a0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,o0=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],l0=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Zh=new he,yr=new N,ql=new N;function c0(i,t,e){let n=new ri,s=new xt,r=new xt,a=new ye,o=new xa,l=new va,c={},h=e.maxTextureSize,f={[ci]:Be,[Be]:ci,[hn]:hn},u=new In({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:r0,fragmentShader:a0}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new sn;g.setAttribute("position",new $e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new me(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ur;let m=this.type;this.render=function(A,_,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===Bc&&(Gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ur);let F=i.getRenderTarget(),P=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Si),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let X=m!==this.type;X&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(V=>V.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,V=A.length;I<V;I++){let Z=A[I],G=Z.shadow;if(G===void 0){Gt("WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let nt=G.getFrameExtents();s.multiply(nt),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,G.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=H,G.map===null||X===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===os){if(Z.isPointLight){Gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new nn(s.x,s.y,{format:hi,type:xn,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),G.map.texture.name=Z.name+".shadowMap",G.map.depthTexture=new Xn(s.x,s.y,un),G.map.depthTexture.name=Z.name+".shadowMapDepth",G.map.depthTexture.format=Hn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ue,G.map.depthTexture.magFilter=Ue}else Z.isPointLight?(G.map=new Mr(s.x),G.map.depthTexture=new Vs(s.x,_n)):(G.map=new nn(s.x,s.y),G.map.depthTexture=new Xn(s.x,s.y,_n)),G.map.depthTexture.name=Z.name+".shadowMap",G.map.depthTexture.format=Hn,this.type===ur?(G.map.depthTexture.compareFunction=H?Ul:Nl,G.map.depthTexture.minFilter=Ze,G.map.depthTexture.magFilter=Ze):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ue,G.map.depthTexture.magFilter=Ue);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let Q=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();Z.isPointLight!==!0&&G.updateMatrices(Z,S);let tt=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:S.layers;for(let Tt=0;Tt<Q;Tt++){let Dt=G.getCamera(Tt);if(Z.isPointLight){let q=G.camera,vt=G.matrix,Et=Z.distance||q.far;Et!==q.far&&(q.far=Et,q.updateProjectionMatrix()),yr.setFromMatrixPosition(Z.matrixWorld),q.position.copy(yr),ql.copy(q.position),ql.add(o0[Tt]),q.up.copy(l0[Tt]),q.lookAt(ql),q.updateMatrixWorld(),vt.makeTranslation(-yr.x,-yr.y,-yr.z),Zh.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Zh,q.coordinateSystem,q.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,Tt),i.clear();else{Tt===0&&(i.setRenderTarget(G.map),i.clear());let q=G.getViewport(Tt);a.set(r.x*q.x,r.y*q.y,r.x*q.z,r.y*q.w),z.viewport(a)}n=G.getFrustum(Tt),T(_,S,Dt,Z,tt,this.type)}G.isPointLightShadow!==!0&&this.type===os&&M(G,S),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(F,P,D)};function M(A,_){let S=t.update(y);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new nn(s.x,s.y,{format:hi,type:xn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(_,null,S,u,y,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(_,null,S,d,y,null)}function E(A,_,S,F){let P=null,D=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)P=D;else if(P=S.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let z=P.uuid,X=_.uuid,I=c[z];I===void 0&&(I={},c[z]=I);let V=I[X];V===void 0&&(V=P.clone(),I[X]=V,_.addEventListener("dispose",R)),P=V}if(P.visible=_.visible,P.wireframe=_.wireframe,F===os?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:f[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,S.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let z=i.properties.get(P);z.light=S}return P}function T(A,_,S,F,P,D){if(A.visible===!1)return;if(A.layers.test(P)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&D===os)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);let I=t.update(A),V=A.material;if(Array.isArray(V)){let Z=I.groups;for(let G=0,nt=Z.length;G<nt;G++){let H=Z[G],Q=V[H.materialIndex];if(Q&&Q.visible){let tt=E(A,Q,F,D);A.onBeforeShadow(i,A,_,S,I,tt,H),i.renderBufferDirect(S,null,I,tt,A,H),A.onAfterShadow(i,A,_,S,I,tt,H)}}}else if(V.visible){let Z=E(A,V,F,D);A.onBeforeShadow(i,A,_,S,I,Z,null),i.renderBufferDirect(S,null,I,Z,A,null),A.onAfterShadow(i,A,_,S,I,Z,null)}}let X=A.children;for(let I=0,V=X.length;I<V;I++)T(X[I],_,S,F,P,D)}function R(A){A.target.removeEventListener("dispose",R);for(let S in c){let F=c[S],P=A.target.uuid;P in F&&(F[P].dispose(),delete F[P])}}}function h0(i,t){function e(){let w=!1,Y=new ye,W=null,ft=new ye(0,0,0,0);return{setMask:function(lt){W!==lt&&!w&&(i.colorMask(lt,lt,lt,lt),W=lt)},setLocked:function(lt){w=lt},setClear:function(lt,ut,Pt,Zt,st){st===!0&&(lt*=Zt,ut*=Zt,Pt*=Zt),Y.set(lt,ut,Pt,Zt),ft.equals(Y)===!1&&(i.clearColor(lt,ut,Pt,Zt),ft.copy(Y))},reset:function(){w=!1,W=null,ft.set(-1,0,0,0)}}}function n(){let w=!1,Y=!1,W=null,ft=null,lt=null;return{setReversed:function(ut){if(Y!==ut){let Pt=t.get("EXT_clip_control");ut?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),Y=ut;let Zt=lt;lt=null,this.setClear(Zt)}},getReversed:function(){return Y},setTest:function(ut){ut?et(i.DEPTH_TEST):It(i.DEPTH_TEST)},setMask:function(ut){W!==ut&&!w&&(i.depthMask(ut),W=ut)},setFunc:function(ut){if(Y&&(ut=xh[ut]),ft!==ut){switch(ut){case Qr:i.depthFunc(i.NEVER);break;case jr:i.depthFunc(i.ALWAYS);break;case ta:i.depthFunc(i.LESS);break;case qi:i.depthFunc(i.LEQUAL);break;case ea:i.depthFunc(i.EQUAL);break;case na:i.depthFunc(i.GEQUAL);break;case ia:i.depthFunc(i.GREATER);break;case sa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=ut}},setLocked:function(ut){w=ut},setClear:function(ut){lt!==ut&&(lt=ut,Y&&(ut=1-ut),i.clearDepth(ut))},reset:function(){w=!1,W=null,ft=null,lt=null,Y=!1}}}function s(){let w=!1,Y=null,W=null,ft=null,lt=null,ut=null,Pt=null,Zt=null,st=null;return{setTest:function(Nt){w||(Nt?et(i.STENCIL_TEST):It(i.STENCIL_TEST))},setMask:function(Nt){Y!==Nt&&!w&&(i.stencilMask(Nt),Y=Nt)},setFunc:function(Nt,qt,yt){(W!==Nt||ft!==qt||lt!==yt)&&(i.stencilFunc(Nt,qt,yt),W=Nt,ft=qt,lt=yt)},setOp:function(Nt,qt,yt){(ut!==Nt||Pt!==qt||Zt!==yt)&&(i.stencilOp(Nt,qt,yt),ut=Nt,Pt=qt,Zt=yt)},setLocked:function(Nt){w=Nt},setClear:function(Nt){st!==Nt&&(i.clearStencil(Nt),st=Nt)},reset:function(){w=!1,Y=null,W=null,ft=null,lt=null,ut=null,Pt=null,Zt=null,st=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],y=null,p=!1,m=null,M=null,E=null,T=null,R=null,A=null,_=null,S=new Qt(0,0,0),F=0,P=!1,D=null,z=null,X=null,I=null,V=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,nt=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(H)[1]),G=nt>=1):H.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),G=nt>=2);let Q=null,tt={},Tt=i.getParameter(i.SCISSOR_BOX),Dt=i.getParameter(i.VIEWPORT),q=new ye().fromArray(Tt),vt=new ye().fromArray(Dt);function Et(w,Y,W,ft){let lt=new Uint8Array(4),ut=i.createTexture();i.bindTexture(w,ut),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<W;Pt++)w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?i.texImage3D(Y,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(Y+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ut}let Ot={};Ot[i.TEXTURE_2D]=Et(i.TEXTURE_2D,i.TEXTURE_2D,1),Ot[i.TEXTURE_CUBE_MAP]=Et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ot[i.TEXTURE_2D_ARRAY]=Et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ot[i.TEXTURE_3D]=Et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),et(i.DEPTH_TEST),a.setFunc(qi),bt(!1),ot(pl),et(i.CULL_FACE),mt(Si);function et(w){h[w]!==!0&&(i.enable(w),h[w]=!0)}function It(w){h[w]!==!1&&(i.disable(w),h[w]=!1)}function ue(w,Y){return u[w]!==Y?(i.bindFramebuffer(w,Y),u[w]=Y,w===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Y),w===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Y),!0):!1}function Bt(w,Y){let W=g,ft=!1;if(w){W=d.get(Y),W===void 0&&(W=[],d.set(Y,W));let lt=w.textures;if(W.length!==lt.length||W[0]!==i.COLOR_ATTACHMENT0){for(let ut=0,Pt=lt.length;ut<Pt;ut++)W[ut]=i.COLOR_ATTACHMENT0+ut;W.length=lt.length,ft=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,ft=!0);ft&&i.drawBuffers(W)}function Jt(w){return y!==w?(i.useProgram(w),y=w,!0):!1}let Ht={[Mi]:i.FUNC_ADD,[kc]:i.FUNC_SUBTRACT,[Gc]:i.FUNC_REVERSE_SUBTRACT};Ht[Vc]=i.MIN,Ht[Hc]=i.MAX;let j={[Wc]:i.ZERO,[Xc]:i.ONE,[qc]:i.SRC_COLOR,[xl]:i.SRC_ALPHA,[Qc]:i.SRC_ALPHA_SATURATE,[$c]:i.DST_COLOR,[Zc]:i.DST_ALPHA,[Yc]:i.ONE_MINUS_SRC_COLOR,[vl]:i.ONE_MINUS_SRC_ALPHA,[Kc]:i.ONE_MINUS_DST_COLOR,[Jc]:i.ONE_MINUS_DST_ALPHA,[jc]:i.CONSTANT_COLOR,[th]:i.ONE_MINUS_CONSTANT_COLOR,[eh]:i.CONSTANT_ALPHA,[nh]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(w,Y,W,ft,lt,ut,Pt,Zt,st,Nt){if(w===Si){p===!0&&(It(i.BLEND),p=!1);return}if(p===!1&&(et(i.BLEND),p=!0),w!==zc){if(w!==m||Nt!==P){if((M!==Mi||R!==Mi)&&(i.blendEquation(i.FUNC_ADD),M=Mi,R=Mi),Nt)switch(w){case ls:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ml:i.blendFunc(i.ONE,i.ONE);break;case gl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Vt("WebGLState: Invalid blending: ",w);break}else switch(w){case ls:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ml:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case gl:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _l:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",w);break}E=null,T=null,A=null,_=null,S.set(0,0,0),F=0,m=w,P=Nt}return}lt=lt||Y,ut=ut||W,Pt=Pt||ft,(Y!==M||lt!==R)&&(i.blendEquationSeparate(Ht[Y],Ht[lt]),M=Y,R=lt),(W!==E||ft!==T||ut!==A||Pt!==_)&&(i.blendFuncSeparate(j[W],j[ft],j[ut],j[Pt]),E=W,T=ft,A=ut,_=Pt),(Zt.equals(S)===!1||st!==F)&&(i.blendColor(Zt.r,Zt.g,Zt.b,st),S.copy(Zt),F=st),m=w,P=!1}function rt(w,Y){w.side===hn?It(i.CULL_FACE):et(i.CULL_FACE);let W=w.side===Be;Y&&(W=!W),bt(W),w.blending===ls&&w.transparent===!1?mt(Si):mt(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),a.setFunc(w.depthFunc),a.setTest(w.depthTest),a.setMask(w.depthWrite),r.setMask(w.colorWrite);let ft=w.stencilWrite;o.setTest(ft),ft&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),wt(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?et(i.SAMPLE_ALPHA_TO_COVERAGE):It(i.SAMPLE_ALPHA_TO_COVERAGE)}function bt(w){D!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),D=w)}function ot(w){w!==Fc?(et(i.CULL_FACE),w!==z&&(w===pl?i.cullFace(i.BACK):w===Oc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):It(i.CULL_FACE),z=w}function kt(w){w!==X&&(G&&i.lineWidth(w),X=w)}function wt(w,Y,W){w?(et(i.POLYGON_OFFSET_FILL),(I!==Y||V!==W)&&(I=Y,V=W,a.getReversed()&&(Y=-Y,W=-W),i.polygonOffset(Y,W))):It(i.POLYGON_OFFSET_FILL)}function $t(w){w?et(i.SCISSOR_TEST):It(i.SCISSOR_TEST)}function Kt(w){w===void 0&&(w=i.TEXTURE0+Z-1),Q!==w&&(i.activeTexture(w),Q=w)}function ee(w,Y,W){W===void 0&&(Q===null?W=i.TEXTURE0+Z-1:W=Q);let ft=tt[W];ft===void 0&&(ft={type:void 0,texture:void 0},tt[W]=ft),(ft.type!==w||ft.texture!==Y)&&(Q!==W&&(i.activeTexture(W),Q=W),i.bindTexture(w,Y||Ot[w]),ft.type=w,ft.texture=Y)}function L(){let w=tt[Q];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function fe(){try{i.compressedTexImage2D(...arguments)}catch(w){Vt("WebGLState:",w)}}function Xt(){try{i.compressedTexImage3D(...arguments)}catch(w){Vt("WebGLState:",w)}}function oe(){try{i.texSubImage2D(...arguments)}catch(w){Vt("WebGLState:",w)}}function gt(){try{i.texSubImage3D(...arguments)}catch(w){Vt("WebGLState:",w)}}function _e(){try{i.compressedTexSubImage2D(...arguments)}catch(w){Vt("WebGLState:",w)}}function Ft(){try{i.compressedTexSubImage3D(...arguments)}catch(w){Vt("WebGLState:",w)}}function zt(){try{i.texStorage2D(...arguments)}catch(w){Vt("WebGLState:",w)}}function b(){try{i.texStorage3D(...arguments)}catch(w){Vt("WebGLState:",w)}}function x(){try{i.texImage2D(...arguments)}catch(w){Vt("WebGLState:",w)}}function O(){try{i.texImage3D(...arguments)}catch(w){Vt("WebGLState:",w)}}function it(w){return f[w]!==void 0?f[w]:i.getParameter(w)}function K(w,Y){f[w]!==Y&&(i.pixelStorei(w,Y),f[w]=Y)}function ht(w){q.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),q.copy(w))}function _t(w){vt.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),vt.copy(w))}function J(w,Y){let W=c.get(Y);W===void 0&&(W=new WeakMap,c.set(Y,W));let ft=W.get(w);ft===void 0&&(ft=i.getUniformBlockIndex(Y,w.name),i.uniformBlockBinding(Y,ft,ft),W.set(w,ft))}function $(w,Y,W){let lt=c.get(Y).get(w);l[lt]!==W&&(i.bindBufferBase(i.UNIFORM_BUFFER,lt,W),l[lt]=W)}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,tt={},u={},l={},d=new WeakMap,g=[],y=null,p=!1,m=null,M=null,E=null,T=null,R=null,A=null,_=null,S=new Qt(0,0,0),F=0,P=!1,D=null,z=null,X=null,I=null,V=null,q.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:et,disable:It,bindFramebuffer:ue,drawBuffers:Bt,useProgram:Jt,setBlending:mt,setMaterial:rt,setFlipSided:bt,setCullFace:ot,setLineWidth:kt,setPolygonOffset:wt,setScissorTest:$t,activeTexture:Kt,bindTexture:ee,unbindTexture:L,compressedTexImage2D:fe,compressedTexImage3D:Xt,texImage2D:x,texImage3D:O,pixelStorei:K,getParameter:it,updateUBOMapping:J,uniformBlockBinding:$,texStorage2D:zt,texStorage3D:b,texSubImage2D:oe,texSubImage3D:gt,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ft,scissor:ht,viewport:_t,reset:dt}}function u0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,h=new WeakMap,f=new Set,u,d=new WeakMap,g=new Set,y=new FinalizationRegistry(b=>g.delete(b)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,x){return p?new OffscreenCanvas(b,x):Ds("canvas")}function M(b,x,O){let it=1,K=zt(b);if((K.width>O||K.height>O)&&(it=O/Math.max(K.width,K.height)),it<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let ht=Math.floor(it*K.width),_t=Math.floor(it*K.height);u===void 0&&(u=m(ht,_t));let J=x?m(ht,_t):u;return J.width=ht,J.height=_t,J.getContext("2d").drawImage(b,0,0,ht,_t),Gt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ht+"x"+_t+")."),J}else return"data"in b&&Gt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),b;return b}function E(b){return b.generateMipmaps}function T(b){i.generateMipmap(b)}function R(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function A(b,x,O,it,K,ht=!1){if(b!==null){if(i[b]!==void 0)return i[b];Gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let _t;it&&(_t=t.get("EXT_texture_norm16"),_t||Gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=x;if(x===i.RED&&(O===i.FLOAT&&(J=i.R32F),O===i.HALF_FLOAT&&(J=i.R16F),O===i.UNSIGNED_BYTE&&(J=i.R8),O===i.UNSIGNED_SHORT&&_t&&(J=_t.R16_EXT),O===i.SHORT&&_t&&(J=_t.R16_SNORM_EXT)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.R8UI),O===i.UNSIGNED_SHORT&&(J=i.R16UI),O===i.UNSIGNED_INT&&(J=i.R32UI),O===i.BYTE&&(J=i.R8I),O===i.SHORT&&(J=i.R16I),O===i.INT&&(J=i.R32I)),x===i.RG&&(O===i.FLOAT&&(J=i.RG32F),O===i.HALF_FLOAT&&(J=i.RG16F),O===i.UNSIGNED_BYTE&&(J=i.RG8),O===i.UNSIGNED_SHORT&&_t&&(J=_t.RG16_EXT),O===i.SHORT&&_t&&(J=_t.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RG8UI),O===i.UNSIGNED_SHORT&&(J=i.RG16UI),O===i.UNSIGNED_INT&&(J=i.RG32UI),O===i.BYTE&&(J=i.RG8I),O===i.SHORT&&(J=i.RG16I),O===i.INT&&(J=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGB8UI),O===i.UNSIGNED_SHORT&&(J=i.RGB16UI),O===i.UNSIGNED_INT&&(J=i.RGB32UI),O===i.BYTE&&(J=i.RGB8I),O===i.SHORT&&(J=i.RGB16I),O===i.INT&&(J=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),O===i.UNSIGNED_INT&&(J=i.RGBA32UI),O===i.BYTE&&(J=i.RGBA8I),O===i.SHORT&&(J=i.RGBA16I),O===i.INT&&(J=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_SHORT&&_t&&(J=_t.RGB16_EXT),O===i.SHORT&&_t&&(J=_t.RGB16_SNORM_EXT),O===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),x===i.RGBA){let $=ht?Ls:se.getTransfer(K);O===i.FLOAT&&(J=i.RGBA32F),O===i.HALF_FLOAT&&(J=i.RGBA16F),O===i.UNSIGNED_BYTE&&(J=$===de?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT&&_t&&(J=_t.RGBA16_EXT),O===i.SHORT&&_t&&(J=_t.RGBA16_SNORM_EXT),O===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function _(b,x){let O;return b?x===null||x===_n||x===Ti?O=i.DEPTH24_STENCIL8:x===un?O=i.DEPTH32F_STENCIL8:x===hs&&(O=i.DEPTH24_STENCIL8,Gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===_n||x===Ti?O=i.DEPTH_COMPONENT24:x===un?O=i.DEPTH_COMPONENT32F:x===hs&&(O=i.DEPTH_COMPONENT16),O}function S(b,x){return E(b)===!0||b.isFramebufferTexture&&b.minFilter!==Ue&&b.minFilter!==Ze?Math.log2(Math.max(x.width,x.height))+1:b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?x.mipmaps.length:1}function F(b){let x=new WeakRef(b);n.get(b).__ref=x,g.add(x),y.register(b,x,x)}function P(b){let x=n.get(b).__ref;x!==void 0&&(g.delete(x),y.unregister(x))}function D(b){X(b.target)}function z(b){I(b.target)}function X(b){b.removeEventListener("dispose",D),P(b),Z(b),b.isVideoTexture&&h.delete(b),b.isHTMLTexture&&f.delete(b)}function I(b){b.removeEventListener("dispose",z),P(b),nt(b)}function V(){for(let b of g){let x=b.deref();x!==void 0&&(x.isRenderTarget===!0?I(x):X(x))}g.clear(),f.clear()}function Z(b){let x=n.get(b);if(x.__webglInit===void 0)return;let O=b.source,it=d.get(O);if(it){let K=it[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&G(b),Object.keys(it).length===0&&d.delete(O)}n.remove(b)}function G(b){let x=n.get(b);i.deleteTexture(x.__webglTexture);let O=b.source,it=d.get(O);delete it[x.__cacheKey],a.memory.textures--}function nt(b){let x=n.get(b);x.__depthDisposeCallback&&x.__depthDisposeCallback();let O=b.depthTexture;if(O&&O.renderTarget===b&&X(O),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let ht=0;ht<x.__webglFramebuffer[K].length;ht++)i.deleteFramebuffer(x.__webglFramebuffer[K][ht]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let it=b.textures;for(let K=0,ht=it.length;K<ht;K++){let _t=n.get(it[K]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(it[K])}n.remove(b)}let H=0;function Q(){H=0}function tt(){return H}function Tt(b){H=b}function Dt(){let b=H;return b>=s.maxTextures&&Gt("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,b}function q(b){let x=[];return x.push(b.wrapS),x.push(b.wrapT),x.push(b.wrapR||0),x.push(b.magFilter),x.push(b.minFilter),x.push(b.anisotropy),x.push(b.internalFormat),x.push(b.format),x.push(b.type),x.push(b.generateMipmaps),x.push(b.mipmapsAutoUpdate),x.push(b.premultiplyAlpha),x.push(b.flipY),x.push(b.unpackAlignment),x.push(b.colorSpace),x.join()}function vt(b,x){let O=n.get(b);if(b.isVideoTexture&&_e(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&O.__version!==b.version){let it=b.image;if(it===null)Gt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Gt("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(O,b,x);return}}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function Et(b,x){let O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){rt(O,b,x);return}else b.isExternalTexture&&(O.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function Ot(b,x){let O=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){rt(O,b,x);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function et(b,x){let O=n.get(b);if(b.version>0&&O.__version!==b.version){bt(O,b,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}let It={[Yi]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[ra]:i.MIRRORED_REPEAT},ue={[Ue]:i.NEAREST,[rh]:i.NEAREST_MIPMAP_NEAREST,[dr]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[Na]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},Bt={[ch]:i.NEVER,[Fl]:i.ALWAYS,[hh]:i.LESS,[Nl]:i.LEQUAL,[uh]:i.EQUAL,[Ul]:i.GEQUAL,[dh]:i.GREATER,[fh]:i.NOTEQUAL};function Jt(b,x){if(x.type===un&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ze||x.magFilter===Na||x.magFilter===dr||x.magFilter===Yn||x.minFilter===Ze||x.minFilter===Na||x.minFilter===dr||x.minFilter===Yn)&&Gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,It[x.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,It[x.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,It[x.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ue[x.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ue[x.minFilter]),x.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,Bt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ue||x.minFilter!==dr&&x.minFilter!==Yn||x.type===un&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let O=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ht(b,x){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,x.addEventListener("dispose",D),F(x));let it=x.source,K=d.get(it);K===void 0&&(K={},d.set(it,K));let ht=q(x);if(ht!==b.__cacheKey){K[ht]===void 0&&(K[ht]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),K[ht].usedTimes++;let _t=K[b.__cacheKey];_t!==void 0&&(K[b.__cacheKey].usedTimes--,_t.usedTimes===0&&G(x)),b.__cacheKey=ht,b.__webglTexture=K[ht].texture}return O}function j(b,x,O){return Math.floor(Math.floor(b/O)/x)}function mt(b,x,O,it){let ht=b.updateRanges;if(ht.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,it,x.data);else{ht.sort((w,Y)=>w.start-Y.start);let _t=0;for(let w=1;w<ht.length;w++){let Y=ht[_t],W=ht[w],ft=Y.start+Y.count,lt=j(W.start,x.width,4),ut=j(Y.start,x.width,4);W.start<=ft+1&&lt===ut&&j(W.start+W.count-1,x.width,4)===lt?Y.count=Math.max(Y.count,W.start+W.count-Y.start):(++_t,ht[_t]=W)}ht.length=_t+1;let J=e.getParameter(i.UNPACK_ROW_LENGTH),$=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let w=0,Y=ht.length;w<Y;w++){let W=ht[w],ft=Math.floor(W.start/4),lt=Math.ceil(W.count/4),ut=ft%x.width,Pt=Math.floor(ft/x.width),Zt=lt,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),e.pixelStorei(i.UNPACK_SKIP_ROWS,Pt),e.texSubImage2D(i.TEXTURE_2D,0,ut,Pt,Zt,st,O,it,x.data)}b.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,J),e.pixelStorei(i.UNPACK_SKIP_PIXELS,$),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function rt(b,x,O){let it=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(it=i.TEXTURE_3D);let K=Ht(b,x),ht=x.source;e.bindTexture(it,b.__webglTexture,i.TEXTURE0+O);let _t=n.get(ht);if(ht.version!==_t.__version||K===!0){if(e.activeTexture(i.TEXTURE0+O),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let st=se.getPrimaries(se.workingColorSpace),Nt=x.colorSpace===Jn?null:se.getPrimaries(x.colorSpace),qt=x.colorSpace===Jn||st===Nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qt)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let $=M(x.image,!1,s.maxTextureSize);$=Ft(x,$);let dt=r.convert(x.format,x.colorSpace),w=r.convert(x.type),Y=A(x.internalFormat,dt,w,x.normalized,x.colorSpace,x.isVideoTexture);Jt(it,x);let W,ft=x.mipmaps,lt=x.isVideoTexture!==!0,ut=_t.__version===void 0||K===!0,Pt=ht.dataReady,Zt=S(x,$);if(x.isDepthTexture)Y=_(x.format===Zn,x.type),ut&&(lt?e.texStorage2D(i.TEXTURE_2D,1,Y,$.width,$.height):e.texImage2D(i.TEXTURE_2D,0,Y,$.width,$.height,0,dt,w,null));else if(x.isDataTexture)if(ft.length>0){lt&&ut&&e.texStorage2D(i.TEXTURE_2D,Zt,Y,ft[0].width,ft[0].height);for(let st=0,Nt=ft.length;st<Nt;st++)W=ft[st],lt?Pt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,W.width,W.height,dt,w,W.data):e.texImage2D(i.TEXTURE_2D,st,Y,W.width,W.height,0,dt,w,W.data);x.generateMipmaps=!1}else lt?(ut&&e.texStorage2D(i.TEXTURE_2D,Zt,Y,$.width,$.height),Pt&&mt(x,$,dt,w)):e.texImage2D(i.TEXTURE_2D,0,Y,$.width,$.height,0,dt,w,$.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){lt&&ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,Y,ft[0].width,ft[0].height,$.depth);for(let st=0,Nt=ft.length;st<Nt;st++)if(W=ft[st],x.format!==vn)if(dt!==null)if(lt){if(Pt)if(x.layerUpdates.size>0){let qt=Wl(W.width,W.height,x.format,x.type);for(let yt of x.layerUpdates){let le=W.data.subarray(yt*qt/W.data.BYTES_PER_ELEMENT,(yt+1)*qt/W.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,yt,W.width,W.height,1,dt,le)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,W.width,W.height,$.depth,dt,W.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Y,W.width,W.height,$.depth,0,W.data,0,0);else Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else lt?Pt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,W.width,W.height,$.depth,dt,w,W.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Y,W.width,W.height,$.depth,0,dt,w,W.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{lt&&ut&&e.texStorage2D(i.TEXTURE_2D,Zt,Y,ft[0].width,ft[0].height);for(let st=0,Nt=ft.length;st<Nt;st++)W=ft[st],x.format!==vn?dt!==null?lt?Pt&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,W.width,W.height,dt,W.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Y,W.width,W.height,0,W.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):lt?Pt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,W.width,W.height,dt,w,W.data):e.texImage2D(i.TEXTURE_2D,st,Y,W.width,W.height,0,dt,w,W.data)}else if(x.isDataArrayTexture)if(lt){if(ut&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,Y,$.width,$.height,$.depth),Pt)if(x.layerUpdates.size>0){let st=Wl($.width,$.height,x.format,x.type);for(let Nt of x.layerUpdates){let qt=$.data.subarray(Nt*st/$.data.BYTES_PER_ELEMENT,(Nt+1)*st/$.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Nt,$.width,$.height,1,dt,w,qt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,dt,w,$.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Y,$.width,$.height,$.depth,0,dt,w,$.data);else if(x.isData3DTexture)lt?(ut&&e.texStorage3D(i.TEXTURE_3D,Zt,Y,$.width,$.height,$.depth),Pt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,dt,w,$.data)):e.texImage3D(i.TEXTURE_3D,0,Y,$.width,$.height,$.depth,0,dt,w,$.data);else if(x.isFramebufferTexture){if(ut)if(lt)e.texStorage2D(i.TEXTURE_2D,Zt,Y,$.width,$.height);else{let st=$.width,Nt=$.height;for(let qt=0;qt<Zt;qt++)e.texImage2D(i.TEXTURE_2D,qt,Y,st,Nt,0,dt,w,null),st>>=1,Nt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),$.parentNode!==st){st.appendChild($),f.add(x),st.onpaint=Nt=>{let qt=Nt.changedElements;for(let yt of f)qt.includes(yt.image)&&(yt.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,$);else{let qt=i.RGBA,yt=i.RGBA,le=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,qt,yt,le,$)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ft.length>0){if(lt&&ut){let st=zt(ft[0]);e.texStorage2D(i.TEXTURE_2D,Zt,Y,st.width,st.height)}for(let st=0,Nt=ft.length;st<Nt;st++)W=ft[st],lt?Pt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,dt,w,W):e.texImage2D(i.TEXTURE_2D,st,Y,dt,w,W);x.generateMipmaps=!1}else if(lt){if(ut){let st=zt($);e.texStorage2D(i.TEXTURE_2D,Zt,Y,st.width,st.height)}Pt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,w,$)}else e.texImage2D(i.TEXTURE_2D,0,Y,dt,w,$);E(x)&&x.mipmapsAutoUpdate===!0&&T(it),_t.__version=ht.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function bt(b,x,O){if(x.image.length!==6)return;let it=Ht(b,x),K=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+O);let ht=n.get(K);if(K.version!==ht.__version||it===!0){e.activeTexture(i.TEXTURE0+O);let _t=se.getPrimaries(se.workingColorSpace),J=x.colorSpace===Jn?null:se.getPrimaries(x.colorSpace),$=x.colorSpace===Jn||_t===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let dt=x.isCompressedTexture||x.image[0].isCompressedTexture,w=x.image[0]&&x.image[0].isDataTexture,Y=[];for(let yt=0;yt<6;yt++)!dt&&!w?Y[yt]=M(x.image[yt],!0,s.maxCubemapSize):Y[yt]=w?x.image[yt].image:x.image[yt],Y[yt]=Ft(x,Y[yt]);let W=Y[0],ft=r.convert(x.format,x.colorSpace),lt=r.convert(x.type),ut=A(x.internalFormat,ft,lt,x.normalized,x.colorSpace),Pt=x.isVideoTexture!==!0,Zt=ht.__version===void 0||it===!0,st=K.dataReady,Nt=S(x,W);Jt(i.TEXTURE_CUBE_MAP,x);let qt;if(x.isDepthTexture){if(ut=_(x.format===Zn,x.type),Zt)if(Pt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,ut,W.width,W.height);else for(let yt=0;yt<6;yt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ut,W.width,W.height,0,ft,lt,null)}else if(dt){Pt&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,ut,W.width,W.height);for(let yt=0;yt<6;yt++){qt=Y[yt].mipmaps;for(let le=0;le<qt.length;le++){let be=qt[le];x.format!==vn?ft!==null?Pt?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le,0,0,be.width,be.height,ft,be.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le,ut,be.width,be.height,0,be.data):Gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le,0,0,be.width,be.height,ft,lt,be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le,ut,be.width,be.height,0,ft,lt,be.data)}}}else{if(qt=x.mipmaps,Pt&&Zt){qt.length>0&&Nt++;let yt=zt(Y[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Nt,ut,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(w){Pt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,Y[yt].width,Y[yt].height,ft,lt,Y[yt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ut,Y[yt].width,Y[yt].height,0,ft,lt,Y[yt].data);for(let le=0;le<qt.length;le++){let on=qt[le].image[yt].image;Pt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le+1,0,0,on.width,on.height,ft,lt,on.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le+1,ut,on.width,on.height,0,ft,lt,on.data)}}else{Pt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,ft,lt,Y[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,ut,ft,lt,Y[yt]);for(let le=0;le<qt.length;le++){let be=qt[le];Pt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le+1,0,0,ft,lt,be.image[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,le+1,ut,ft,lt,be.image[yt])}}}E(x)&&x.mipmapsAutoUpdate===!0&&T(i.TEXTURE_CUBE_MAP),ht.__version=K.version,x.onUpdate&&x.onUpdate(x)}b.__version=x.version}function ot(b,x,O,it,K,ht){let _t=r.convert(O.format,O.colorSpace),J=r.convert(O.type),$=A(O.internalFormat,_t,J,O.normalized,O.colorSpace),dt=n.get(x),w=n.get(O);if(w.__renderTarget=x,!dt.__hasExternalTextures){let Y=Math.max(1,x.width>>ht),W=Math.max(1,x.height>>ht);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,ht,$,Y,W,x.depth,0,_t,J,null):e.texImage2D(K,ht,$,Y,W,0,_t,J,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,K,w.__webglTexture,0,oe(x)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,K,w.__webglTexture,ht),e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(b,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,b),x.depthBuffer){let it=x.depthTexture,K=it&&it.isDepthTexture?it.type:null,ht=_(x.stencilBuffer,K),_t=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;gt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe(x),ht,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe(x),ht,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ht,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,b)}else{let it=x.textures;for(let K=0;K<it.length;K++){let ht=it[K],_t=r.convert(ht.format,ht.colorSpace),J=r.convert(ht.type),$=A(ht.internalFormat,_t,J,ht.normalized,ht.colorSpace);gt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,oe(x),$,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,oe(x),$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(b,x,O){let it=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(x.depthTexture);K.__renderTarget=x;let ht=it?x.depthTexture.image[0]:x.depthTexture.image;(!K.__webglTexture||ht.width!==x.width||ht.height!==x.height)&&(ht.width=x.width,ht.height=x.height,x.depthTexture.needsUpdate=!0),it?et(x.depthTexture,0):vt(x.depthTexture,0);let _t=K.__webglTexture,J=oe(x),$=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,dt=x.depthTexture.format===Zn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Hn)gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,$,_t,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,dt,$,_t,0);else if(x.depthTexture.format===Zn)gt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,dt,$,_t,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,dt,$,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(b){let x=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==b.depthTexture){let it=b.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),it){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,it.removeEventListener("dispose",K)};it.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=it}if(b.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let it=0;it<6;it++)wt(x.__webglFramebuffer[it],b,it);else b.texture.mipmaps.length>0?wt(x.__webglFramebuffer[0],b,0):wt(x.__webglFramebuffer,b,0);else if(O){x.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[it]),x.__webglDepthbuffer[it]===void 0)x.__webglDepthbuffer[it]=i.createRenderbuffer(),kt(x.__webglDepthbuffer[it],b,!1);else{let K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=x.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ht)}}else if(b.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),kt(x.__webglDepthbuffer,b,!1);else{let K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ht),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ht)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Kt(b,x,O){let it=n.get(b);x!==void 0&&ot(it.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&$t(b)}function ee(b){let x=b.texture,O=n.get(b),it=n.get(x);b.addEventListener("dispose",z),F(b);let K=b.textures,ht=b.isWebGLCubeRenderTarget===!0,_t=K.length>1;if(_t||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=x.version,a.memory.textures++),ht){O.__webglFramebuffer=[];for(let J=0;J<6;J++)if(x.mipmaps.length>0){O.__webglFramebuffer[J]=[];for(let $=0;$<x.mipmaps.length;$++)O.__webglFramebuffer[J][$]=i.createFramebuffer()}else O.__webglFramebuffer[J]=i.createFramebuffer()}else{if(x.mipmaps.length>0){O.__webglFramebuffer=[];for(let J=0;J<x.mipmaps.length;J++)O.__webglFramebuffer[J]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(_t)for(let J=0,$=K.length;J<$;J++){let dt=n.get(K[J]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&gt(b)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){let $=K[J];O.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[J]);let dt=r.convert($.format,$.colorSpace),w=r.convert($.type),Y=A($.internalFormat,dt,w,$.normalized,$.colorSpace,b.isXRRenderTarget===!0),W=oe(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,W,Y,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,O.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),kt(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ht){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),Jt(i.TEXTURE_CUBE_MAP,x);for(let J=0;J<6;J++)if(x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)ot(O.__webglFramebuffer[J][$],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,$);else ot(O.__webglFramebuffer[J],b,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);E(x)?T(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}else if(_t){for(let J=0,$=K.length;J<$;J++){let dt=K[J],w=n.get(dt),Y=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Y=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Y,w.__webglTexture),Jt(Y,dt),ot(O.__webglFramebuffer,b,dt,i.COLOR_ATTACHMENT0+J,Y,0),E(dt)&&T(Y)}e.unbindTexture()}else{let J=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(J=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(J,it.__webglTexture),Jt(J,x),x.mipmaps.length>0)for(let $=0;$<x.mipmaps.length;$++)ot(O.__webglFramebuffer[$],b,x,i.COLOR_ATTACHMENT0,J,$);else ot(O.__webglFramebuffer,b,x,i.COLOR_ATTACHMENT0,J,0);E(x)?T(J):x.mipmaps.length>0&&i.texParameteri(J,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),e.unbindTexture()}b.depthBuffer&&$t(b)}function L(b){let x=b.textures;for(let O=0,it=x.length;O<it;O++){let K=x[O];if(E(K)&&K.mipmapsAutoUpdate===!0){let ht=R(b),_t=n.get(K).__webglTexture;e.bindTexture(ht,_t),T(ht),e.unbindTexture()}}}let fe=[];function Xt(b){if(b.samples>0){if(gt(b)===!1){let x=b.textures,O=b.width,it=b.height,K=i.COLOR_BUFFER_BIT,ht=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=n.get(b),J=x.length>1;if(J)for(let dt=0;dt<x.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer),b.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let dt=0;dt<x.length;dt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,_t.__webglColorRenderbuffer[dt]);let w=n.get(x[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,w,0)}i.blitFramebuffer(0,0,O,it,0,0,O,it,K,i.NEAREST),l===!0&&(fe.length=0,fe.push(i.COLOR_ATTACHMENT0+dt),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&fe.push(ht),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let dt=0;dt<x.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,_t.__webglColorRenderbuffer[dt]);let w=n.get(x[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,_t.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,w,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let x=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function oe(b){return Math.min(s.maxSamples,b.samples)}function gt(b){let x=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function _e(b){let x=a.render.frame;h.get(b)!==x&&(h.set(b,x),b.update())}function Ft(b,x){let O=b.colorSpace,it=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||O!==Is&&O!==Jn&&(se.getTransfer(O)===de?(it!==vn||K!==Ke)&&Gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",O)),x}function zt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=Dt,this.resetTextureUnits=Q,this.getTextureUnits=tt,this.setTextureUnits=Tt,this.setTexture2D=vt,this.setTexture2DArray=Et,this.setTexture3D=Ot,this.setTextureCube=et,this.rebindTextures=Kt,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=Xt,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=gt,this.dispose=V}function d0(i,t){function e(n,s=Jn){let r,a=se.getTransfer(s);if(n===Ke)return i.UNSIGNED_BYTE;if(n===Fa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Pl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Il)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rl)return i.BYTE;if(n===Cl)return i.SHORT;if(n===hs)return i.UNSIGNED_SHORT;if(n===Ua)return i.INT;if(n===_n)return i.UNSIGNED_INT;if(n===un)return i.FLOAT;if(n===xn)return i.HALF_FLOAT;if(n===Ll)return i.ALPHA;if(n===Dl)return i.RGB;if(n===vn)return i.RGBA;if(n===Hn)return i.DEPTH_COMPONENT;if(n===Zn)return i.DEPTH_STENCIL;if(n===Ba)return i.RED;if(n===za)return i.RED_INTEGER;if(n===hi)return i.RG;if(n===ka)return i.RG_INTEGER;if(n===Ga)return i.RGBA_INTEGER;if(n===fr||n===pr||n===mr||n===gr)if(a===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Va||n===Ha||n===Wa||n===Xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Va)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ha)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qa||n===Ya||n===Za||n===Ja||n===$a||n===_r||n===Ka)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===qa||n===Ya)return a===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Za)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ja)return r.COMPRESSED_R11_EAC;if(n===$a)return r.COMPRESSED_SIGNED_R11_EAC;if(n===_r)return r.COMPRESSED_RG11_EAC;if(n===Ka)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Qa||n===ja||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qa)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ja)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===to)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===eo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===no)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===io)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===so)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ro)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ao)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===co)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ho)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uo)return a===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fo||n===po||n===mo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fo)return a===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===po)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===mo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===go||n===_o||n===xr||n===xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===go)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_o)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ti?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var f0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Hs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new In({vertexShader:f0,fragmentShader:p0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new me(new js(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tc=class extends An{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,g=null,y=typeof XRWebGLBinding<"u",p=new jl,m={},M=e.getContextAttributes(),E=null,T=null,R=[],A=[],_=new xt,S=null,F=null,P=new Xe;P.viewport=new ye;let D=new Xe;D.viewport=new ye;let z=[P,D],X=new Pa,I=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let vt=R[q];return vt===void 0&&(vt=new Qi,R[q]=vt),vt.getTargetRaySpace()},this.getControllerGrip=function(q){let vt=R[q];return vt===void 0&&(vt=new Qi,R[q]=vt),vt.getGripSpace()},this.getHand=function(q){let vt=R[q];return vt===void 0&&(vt=new Qi,R[q]=vt),vt.getHandSpace()};function Z(q){let vt=A.indexOf(q.inputSource);if(vt===-1)return;let Et=R[vt];Et!==void 0&&(Et.update(q.inputSource,q.frame,c||a),Et.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",nt);for(let q=0;q<R.length;q++){let vt=A[q];vt!==null&&(A[q]=null,R[q].disconnect(vt))}I=null,V=null,p.reset();for(let q in m)delete m[q];if(t.setRenderTarget(E),d=null,u=null,f=null,s=null,T=null,Dt.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(_.width,_.height,!1),F!==null){let q=F.camera;q.fov=F.fov,q.zoom=F.zoom,q.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",nt),M.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Ot=null,et=null;M.depth&&(et=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Et=M.stencil?Zn:Hn,Ot=M.stencil?Ti:_n);let It={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(It),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),T=new nn(u.textureWidth,u.textureHeight,{format:vn,type:Ke,depthTexture:new Xn(u.textureWidth,u.textureHeight,Ot,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Et={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Et),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new nn(d.framebufferWidth,d.framebufferHeight,{format:vn,type:Ke,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Dt.setContext(s),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function nt(q){for(let vt=0;vt<q.removed.length;vt++){let Et=q.removed[vt],Ot=A.indexOf(Et);Ot>=0&&(A[Ot]=null,R[Ot].disconnect(Et))}for(let vt=0;vt<q.added.length;vt++){let Et=q.added[vt],Ot=A.indexOf(Et);if(Ot===-1){for(let It=0;It<R.length;It++)if(It>=A.length){A.push(Et),Ot=It;break}else if(A[It]===null){A[It]=Et,Ot=It;break}if(Ot===-1)break}let et=R[Ot];et&&et.connect(Et)}}function H(q,vt){vt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(vt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let vt=q.near,Et=q.far;p.texture!==null&&(p.depthNear>0&&(vt=p.depthNear),p.depthFar>0&&(Et=p.depthFar)),X.near=D.near=P.near=vt,X.far=D.far=P.far=Et,(I!==X.near||V!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),I=X.near,V=X.far),X.layers.mask=q.layers.mask|6,P.layers.mask=X.layers.mask&-5,D.layers.mask=X.layers.mask&-3;let Ot=q.parent,et=X.cameras;H(X,Ot);for(let It=0;It<et.length;It++)H(et[It],Ot);X.projectionMatrix.copy(P.projectionMatrix),X.projectionMatrixInverse.copy(P.projectionMatrixInverse),F===null&&q.isPerspectiveCamera&&(F={camera:q,fov:q.fov,zoom:q.zoom}),Q(q,X,Ot)};function Q(q,vt,Et){Et===null?q.matrix.copy(vt.matrixWorld):(q.matrix.copy(Et.matrixWorld),q.matrix.invert(),q.matrix.multiply(vt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(vt.projectionMatrix),q.projectionMatrixInverse.copy(vt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=oa*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(X)},this.getCameraTexture=function(q){return m[q]};let tt=null;function Tt(q,vt){if(h=vt.getViewerPose(c||a),g=vt,h!==null){let Et=h.views;d!==null&&(t.setRenderTargetFramebuffer(T,d.framebuffer),t.setRenderTarget(T));let Ot=!1;Et.length!==X.cameras.length&&(X.cameras.length=0,Ot=!0);for(let Bt=0;Bt<Et.length;Bt++){let Jt=Et[Bt],Ht=null;if(d!==null)Ht=d.getViewport(Jt);else{let mt=f.getViewSubImage(u,Jt);Ht=mt.viewport,Bt===0&&(t.setRenderTargetTextures(T,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(T))}let j=z[Bt];j===void 0&&(j=new Xe,j.layers.enable(Bt),j.viewport=new ye,z[Bt]=j),j.matrix.fromArray(Jt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Jt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),Bt===0&&(X.matrix.copy(j.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ot===!0&&X.cameras.push(j)}let et=s.enabledFeatures;if(et&&et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let Bt=f.getDepthInformation(Et[0]);Bt&&Bt.isValid&&Bt.texture&&p.init(Bt,s.renderState)}if(et&&et.includes("camera-access")&&y){t.state.unbindTexture(),f=n.getBinding();for(let Bt=0;Bt<Et.length;Bt++){let Jt=Et[Bt].camera;if(Jt){let Ht=m[Jt];Ht||(Ht=new Hs,m[Jt]=Ht);let j=f.getCameraImage(Jt);Ht.sourceTexture=j}}}}for(let Et=0;Et<R.length;Et++){let Ot=A[Et],et=R[Et];Ot!==null&&et!==void 0&&et.update(Ot,vt,c||a)}tt&&tt(q,vt),vt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:vt}),g=null}let Dt=new Jh;Dt.setAnimationLoop(Tt),this.setAnimationLoop=function(q){tt=q},this.dispose=function(){}}},m0=new he,ru=new Wt;ru.set(-1,0,0,0,1,0,0,0,1);function g0(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Gl(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,M,E,T){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,T)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,M,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Be&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Be&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let M=t.get(m),E=M.envMap,T=M.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(m0.makeRotationFromEuler(T)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(ru),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=E*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,M){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Be&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _0(i,t,e,n){let s={},r={};function a(M,E){let T=E.program;n.uniformBlockBinding(M,T,s[M.id])}function o(M,E){let T=s[M.id];T===void 0&&(g(M),T=l(M),s[M.id]=T,M.addEventListener("dispose",p));let R=E.program;n.updateUBOMapping(M,R);let A=t.render.frame;r[M.id]!==A&&(c(M),r[M.id]=A)}function l(M){let E=i.createBuffer(),T=M.__size,R=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,T,R),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(M){let E=s[M.id],T=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let A=0,_=T.length;A<_;A++){let S=T[A];if(Array.isArray(S))for(let F=0,P=S.length;F<P;F++)h(S[F],A,F,R);else h(S,A,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(M,E,T,R){if(u(M,E,T,R)===!0){let A=M.__offset,_=M.value;if(Array.isArray(_)){let S=0;for(let F=0;F<_.length;F++){let P=_[F],D=y(P,!0);f(P,M.__data,S),S+=D.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,A,M.__data)}}function f(M,E,T){typeof M=="number"||typeof M=="boolean"?E[T]=M:M.isMatrix3?(E[T]=M.elements[0],E[T+1]=M.elements[1],E[T+2]=M.elements[2],E[T+3]=0,E[T+4]=M.elements[3],E[T+5]=M.elements[4],E[T+6]=M.elements[5],E[T+7]=0,E[T+8]=M.elements[6],E[T+9]=M.elements[7],E[T+10]=M.elements[8],E[T+11]=0):ArrayBuffer.isView(M)?E.set(M.subarray(0,E.length-T),T):M.toArray(E,T)}function u(M,E,T,R){let A=M.value,_=E+"_"+T;if(Array.isArray(A)){R[_]===void 0&&(R[_]=[]);let S=R[_],F=!1;for(let P=0;P<A.length;P++)d(A[P],S,P)===!0&&(F=!0);return F}return d(A,R,_)}function d(M,E,T){if(E[T]===void 0)return typeof M=="number"||typeof M=="boolean"?E[T]=M:ArrayBuffer.isView(M)?E[T]=M.slice():E[T]=M.clone(),!0;{let R=E[T];if(typeof M=="number"||typeof M=="boolean"){if(R!==M)return E[T]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(R.equals(M)===!1)return R.copy(M),!0}}return!1}function g(M){let E=M.uniforms,T=0,R=16;for(let _=0,S=E.length;_<S;_++){let F=Array.isArray(E[_])?E[_]:[E[_]];for(let P=0,D=F.length;P<D;P++){let z=F[P],X=Array.isArray(z.value)?z.value:[z.value],I=Array.isArray(E[_])||Array.isArray(z.value),V=T;for(let G=0,nt=X.length;G<nt;G++){let H=X[G],Q=y(H,I),tt=T%R,Tt=tt%Q.boundary,Dt=tt+Tt;T+=Tt,Dt!==0&&R-Dt<Q.storage&&(T+=R-Dt),G===0&&(V=T),T+=Q.storage}let Z=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new Z((T-V)/Float32Array.BYTES_PER_ELEMENT),z.__offset=V}}let A=T%R;return A>0&&(T+=R-A),M.__size=T,M.__cache={},this}function y(M,E){let T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=16,T.storage=48):M.isMatrix4?(T.boundary=16,T.storage=64):M.isTexture?Gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):Gt("WebGLRenderer: Unsupported uniform value type.",M),E===!0&&(T.boundary=16,T.storage=Math.ceil(T.storage/16)*16),T}function p(M){let E=M.target;E.removeEventListener("dispose",p),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let M in s)i.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:m}}var x0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Dn=null;function v0(){return Dn===null&&(Dn=new Bs(x0,16,16,hi,xn),Dn.name="DFG_LUT",Dn.minFilter=Ze,Dn.magFilter=Ze,Dn.wrapS=bn,Dn.wrapT=bn,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}var So=class{constructor(t={}){let{canvas:e=mh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Ke}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=d,p=new Set([Ga,ka,za]),m=new Set([Ke,_n,hs,Ti,Fa,Oa]),M=new Uint32Array(4),E=new Int32Array(4),T={textures:[],min:[],max:[],resolution:[]},R=null,A=null,_=[],S=[],F=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,D=!1,z=null,X=null,I=null,V=null;this._outputColorSpace=We;let Z=0,G=0,nt=null,H=-1,Q=null,tt=new ye,Tt=new ye,Dt=null,q=new Qt(0),vt=0,Et=e.width,Ot=e.height,et=1,It=null,ue=null,Bt=new ye(0,0,Et,Ot),Jt=new ye(0,0,Et,Ot),Ht=!1,j=new ri,mt=new ua,rt=!1,bt=!1,ot=new he,kt=new N,wt=new ye,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function ee(){return nt===null?et:1}let L=n;function fe(v,C){return e.getContext(v,C)}let Xt,oe,gt,_e,Ft,zt,b,x,O,it,K,ht,_t,J,$,dt,w,Y,W,ft,lt,ut,Pt;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Nt,!1),e.addEventListener("webglcontextrestored",qt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),L===null){let C="webgl2";if(L=fe(C,v),L===null)throw fe(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(v){throw e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Vt("WebGLRenderer: "+v.message),v}function Zt(){Xt=new Pm(L),Xt.init(),lt=new d0(L,Xt),oe=new vm(L,Xt,t,lt),gt=new h0(L,Xt),oe.reversedDepthBuffer&&u&&gt.buffers.depth.setReversed(!0),X=L.createFramebuffer(),I=L.createFramebuffer(),V=L.createFramebuffer(),_e=new Dm(L),Ft=new $g,zt=new u0(L,Xt,gt,Ft,oe,lt,_e),b=new Cm(P),x=new Nd(L),ut=new _m(L,x),O=new Im(L,x,_e,ut),it=new Um(L,O,x,ut,_e),Y=new Nm(L,oe,zt),$=new ym(Ft),K=new Jg(P,b,Xt,oe,ut,$),ht=new g0(P,Ft),_t=new Qg,J=new s0(Xt),w=new gm(P,b,gt,it,g,l),dt=new c0(P,it,oe),Pt=new _0(L,_e,oe,gt),W=new xm(L,Xt,_e),ft=new Lm(L,Xt,_e),_e.programs=K.programs,P.capabilities=oe,P.extensions=Xt,P.properties=Ft,P.renderLists=_t,P.shadowMap=dt,P.state=gt,P.info=_e}y!==Ke&&(F=new Om(y,e.width,e.height,o,s,r));let st=new tc(P,L);this.xr=st,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let v=Xt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Xt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return et},this.setPixelRatio=function(v){v!==void 0&&(et=v,this.setSize(Et,Ot,!1))},this.getSize=function(v){return v.set(Et,Ot)},this.setSize=function(v,C,k=!0){if(st.isPresenting){Gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Et=v,Ot=C,e.width=Math.floor(v*et),e.height=Math.floor(C*et),k===!0&&(e.style.width=v+"px",e.style.height=C+"px"),F!==null&&F.setSize(e.width,e.height),this.setViewport(0,0,v,C)},this.getDrawingBufferSize=function(v){return v.set(Et*et,Ot*et).floor()},this.setDrawingBufferSize=function(v,C,k){Et=v,Ot=C,et=k,e.width=Math.floor(v*k),e.height=Math.floor(C*k),this.setViewport(0,0,v,C)},this.setEffects=function(v){if(y===Ke){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let C=0;C<v.length;C++)if(v[C].isOutputPass===!0){Gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(tt)},this.getViewport=function(v){return v.copy(Bt)},this.setViewport=function(v,C,k,U){v.isVector4?Bt.set(v.x,v.y,v.z,v.w):Bt.set(v,C,k,U),gt.viewport(tt.copy(Bt).multiplyScalar(ee()).round())},this.getScissor=function(v){return v.copy(Jt)},this.setScissor=function(v,C,k,U){v.isVector4?Jt.set(v.x,v.y,v.z,v.w):Jt.set(v,C,k,U),gt.scissor(Tt.copy(Jt).multiplyScalar(ee()).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(v){gt.setScissorTest(Ht=v)},this.setOpaqueSort=function(v){It=v},this.setTransparentSort=function(v){ue=v},this.getClearColor=function(v){return v.copy(w.getClearColor())},this.setClearColor=function(){w.setClearColor(...arguments)},this.getClearAlpha=function(){return w.getClearAlpha()},this.setClearAlpha=function(){w.setClearAlpha(...arguments)},this.clear=function(v=!0,C=!0,k=!0){let U=0;if(v){let B=!1;if(nt!==null){let pt=nt.texture.format;B=p.has(pt)}if(B){let pt=nt.texture.type,At=m.has(pt),ct=w.getClearColor(),Mt=w.getClearAlpha(),Lt=ct.r,Yt=ct.g,ne=ct.b;At?(M[0]=Lt,M[1]=Yt,M[2]=ne,M[3]=Mt,L.clearBufferuiv(L.COLOR,0,M)):(E[0]=Lt,E[1]=Yt,E[2]=ne,E[3]=Mt,L.clearBufferiv(L.COLOR,0,E))}else U|=L.COLOR_BUFFER_BIT}C&&(U|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(U|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&L.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),z=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Nt,!1),e.removeEventListener("webglcontextrestored",qt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),w.dispose(),_t.dispose(),J.dispose(),zt.dispose(),Ft.dispose(),b.dispose(),it.dispose(),O.dispose(),ut.dispose(),Pt.dispose(),K.dispose(),st.dispose(),st.removeEventListener("sessionstart",vs),st.removeEventListener("sessionend",Ci),yn.stop()};function Nt(v){v.preventDefault(),Bl("WebGLRenderer: Context Lost."),D=!0}function qt(){Bl("WebGLRenderer: Context Restored."),D=!1;let v=_e.autoReset,C=dt.enabled,k=dt.autoUpdate,U=dt.needsUpdate,B=dt.type;Zt(),_e.autoReset=v,dt.enabled=C,dt.autoUpdate=k,dt.needsUpdate=U,dt.type=B}function yt(v){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function le(v){let C=v.target;C.removeEventListener("dispose",le),be(C)}function be(v){on(v),Ft.remove(v)}function on(v){let C=Ft.get(v).programs;C!==void 0&&(C.forEach(function(k){K.releaseProgram(k)}),v.isShaderMaterial&&K.releaseShaderCache(v))}this.renderBufferDirect=function(v,C,k,U,B,pt){C===null&&(C=$t);let At=B.isMesh&&B.matrixWorld.determinantAffine()<0,ct=Un(v,C,k,U,B);gt.setMaterial(U,At);let Mt=k.index,Lt=1;if(U.wireframe===!0){if(Mt=O.getWireframeAttribute(k),Mt===void 0)return;Lt=2}let Yt=k.drawRange,ne=k.attributes.position,Rt=Yt.start*Lt,ie=(Yt.start+Yt.count)*Lt;pt!==null&&(Rt=Math.max(Rt,pt.start*Lt),ie=Math.min(ie,(pt.start+pt.count)*Lt)),Mt!==null?(Rt=Math.max(Rt,0),ie=Math.min(ie,Mt.count)):ne!=null&&(Rt=Math.max(Rt,0),ie=Math.min(ie,ne.count));let Ae=ie-Rt;if(Ae<0||Ae===1/0)return;ut.setup(B,U,ct,k,Mt);let ge,pe=W;if(Mt!==null&&(ge=x.get(Mt),pe=ft,pe.setIndex(ge)),B.isMesh)U.wireframe===!0?(gt.setLineWidth(U.wireframeLinewidth*ee()),pe.setMode(L.LINES)):pe.setMode(L.TRIANGLES);else if(B.isLine){let ke=U.linewidth;ke===void 0&&(ke=1),gt.setLineWidth(ke*ee()),B.isLineSegments?pe.setMode(L.LINES):B.isLineLoop?pe.setMode(L.LINE_LOOP):pe.setMode(L.LINE_STRIP)}else B.isPoints?pe.setMode(L.POINTS):B.isSprite&&pe.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(Xt.get("WEBGL_multi_draw"))pe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let ke=B._multiDrawStarts,Ct=B._multiDrawCounts,Ye=B._multiDrawCount,ce=Mt?x.get(Mt).bytesPerElement:1,ui=Ft.get(U).currentProgram.getUniforms();for(let Ge=0;Ge<Ye;Ge++)ui.setValue(L,"_gl_DrawID",Ge),pe.render(ke[Ge]/ce,Ct[Ge])}else if(B.isInstancedMesh)pe.renderInstances(Rt,Ae,B.count);else if(k.isInstancedBufferGeometry){let ke=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ct=Math.min(k.instanceCount,ke);pe.renderInstances(Rt,Ae,Ct)}else pe.render(Rt,Ae)};function _s(v,C,k,U){z!==null&&v.isNodeMaterial&&z.setObject(U,v),rt===!0&&$.setState(v,k,!1),v.transparent===!0&&v.side===hn&&v.forceSinglePass===!1?(v.side=Be,v.needsUpdate=!0,Te(v,C,U),v.side=ci,v.needsUpdate=!0,Te(v,C,U),v.side=hn):Te(v,C,U)}this.compile=function(v,C,k=null){k===null&&(k=v),z!==null&&z.renderStart(v,C,k),A=J.get(k),A.init(C),S.push(A),k.traverseVisible(function(B){B.isLight&&B.layers.test(C.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),v!==k&&v.traverseVisible(function(B){B.isLight&&B.layers.test(C.layers)&&(A.pushLight(B),B.castShadow&&A.pushShadow(B))}),A.setupLights(),z!==null&&z.updateLights(A.state.lightsArray),bt=this.localClippingEnabled,rt=$.init(this.clippingPlanes,bt),rt===!0&&$.setGlobalState(this.clippingPlanes,C),z!==null&&dt.render(A.state.shadowsArray,k,C);let U=new Set;return v.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let pt=B.material;if(pt)if(Array.isArray(pt))for(let At=0;At<pt.length;At++){let ct=pt[At];_s(ct,k,C,B),U.add(ct)}else _s(pt,k,C,B),U.add(pt)}),A=S.pop(),z!==null&&z.renderEnd(),U},this.compileAsync=function(v,C,k=null){let U=this.compile(v,C,k);return new Promise(B=>{function pt(){if(U.forEach(function(At){let Mt=Ft.get(At).currentProgram;(Mt===void 0||Mt.isReady())&&U.delete(At)}),U.size===0){B(v);return}setTimeout(pt,10)}Xt.get("KHR_parallel_shader_compile")!==null?pt():setTimeout(pt,10)})};let Ri=null;function xs(v){Ri&&Ri(v)}function vs(){yn.stop()}function Ci(){yn.start()}let yn=new Jh;yn.setAnimationLoop(xs),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(v){Ri=v,st.setAnimationLoop(v),v===null?yn.stop():yn.start()},st.addEventListener("sessionstart",vs),st.addEventListener("sessionend",Ci),this.render=function(v,C){if(C!==void 0&&C.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;z!==null&&z.renderStart(v,C);let k=st.enabled===!0&&st.isPresenting===!0,U=F!==null&&(nt===null||k)&&F.begin(P,nt);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(C),C=st.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,C,nt),A=J.get(v,S.length),A.init(C),A.state.textureUnits=zt.getTextureUnits(),S.push(A),ot.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),C.isArrayCamera?mt.setFromArrayCamera(C):j.setFromProjectionMatrix(ot,cn,C.reversedDepth),bt=this.localClippingEnabled,rt=$.init(this.clippingPlanes,bt),R=_t.get(v,_.length),R.init(),_.push(R),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let At=P.xr.getDepthSensingMesh();At!==null&&Pi(At,C,-1/0,P.sortObjects)}Pi(v,C,0,P.sortObjects),R.finish(),z!==null&&z.updateLights(A.state.lightsArray),P.sortObjects===!0&&R.sort(It,ue),Kt=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,Kt&&w.addToRenderList(R,v),this.info.autoReset===!0&&this.info.reset(),rt===!0&&$.beginShadows();let B=A.state.shadowsArray;if(dt.render(B,v,C),rt===!0&&$.endShadows(),(U&&F.hasRenderPass())===!1){let At=R.opaque,ct=R.transmissive;if(A.setupLights(),C.isArrayCamera){let Mt=C.cameras;if(ct.length>0)for(let Lt=0,Yt=Mt.length;Lt<Yt;Lt++){let ne=Mt[Lt];at(At,ct,v,ne)}Kt&&w.render(v);for(let Lt=0,Yt=Mt.length;Lt<Yt;Lt++){let ne=Mt[Lt];ys(R,v,ne,ne.viewport)}}else ct.length>0&&at(At,ct,v,C),Kt&&w.render(v),ys(R,v,C)}nt!==null&&G===0&&(zt.updateMultisampleRenderTarget(nt),zt.updateRenderTargetMipmap(nt)),U&&F.end(P),v.isScene===!0&&v.onAfterRender(P,v,C),ut.resetDefaultState(),H=-1,Q=null,S.pop(),S.length>0?(A=S[S.length-1],zt.setTextureUnits(A.state.textureUnits),rt===!0&&$.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?R=_[_.length-1]:R=null,z!==null&&z.renderEnd()};function Pi(v,C,k,U){if(v.visible===!1)return;if(v.layers.test(C.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(C);else if(v.isLight)A.pushLight(v),v.castShadow&&A.pushShadow(v);else if(v.isSprite){let At=C.isArrayCamera?mt:j;if(!v.frustumCulled||v.intersectsFrustum(At)){U&&wt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ot);let ct=it.update(v),Mt=v.material;Mt.visible&&R.push(v,ct,Mt,k,wt.z,null,C)}}else if(v.isMesh||v.isLine||v.isPoints){let At=C.isArrayCamera?mt:j;if(!v.frustumCulled||v.intersectsFrustum(At)){let ct=it.update(v),Mt=v.material;if(U&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),wt.copy(v.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),wt.copy(ct.boundingSphere.center)),wt.applyMatrix4(v.matrixWorld).applyMatrix4(ot)),Array.isArray(Mt)){let Lt=ct.groups;for(let Yt=0,ne=Lt.length;Yt<ne;Yt++){let Rt=Lt[Yt],ie=Mt[Rt.materialIndex];ie&&ie.visible&&R.push(v,ct,ie,k,wt.z,Rt,C)}}else Mt.visible&&R.push(v,ct,Mt,k,wt.z,null,C)}}}let pt=v.children;for(let At=0,ct=pt.length;At<ct;At++)Pi(pt[At],C,k,U)}function ys(v,C,k,U){let{opaque:B,transmissive:pt,transparent:At}=v;A.setupLightsView(k),rt===!0&&$.setGlobalState(P.clippingPlanes,k),U&&gt.viewport(tt.copy(U)),B.length>0&&Ut(B,C,k),pt.length>0&&Ut(pt,C,k),At.length>0&&Ut(At,C,k),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function at(v,C,k,U){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[U.id]===void 0){let Rt=Xt.has("EXT_color_buffer_half_float")||Xt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[U.id]=new nn(1,1,{generateMipmaps:!0,type:Rt?xn:Ke,minFilter:Yn,samples:Math.max(4,oe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let pt=A.state.transmissionRenderTarget[U.id],At=U.viewport||tt;pt.setSize(At.z*P.transmissionResolutionScale,At.w*P.transmissionResolutionScale);let ct=P.getRenderTarget(),Mt=P.getActiveCubeFace(),Lt=P.getActiveMipmapLevel();P.setRenderTarget(pt),P.getClearColor(q),vt=P.getClearAlpha(),vt<1&&P.setClearColor(16777215,.5),P.clear(),Kt&&w.render(k);let Yt=P.toneMapping;P.toneMapping=Ln;let ne=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),A.setupLightsView(U),rt===!0&&$.setGlobalState(P.clippingPlanes,U),Ut(v,k,U),zt.updateMultisampleRenderTarget(pt),zt.updateRenderTargetMipmap(pt),Xt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let ie=0,Ae=C.length;ie<Ae;ie++){let ge=C[ie],{object:pe,geometry:ke,material:Ct,group:Ye}=ge;if(Ct.side===hn&&pe.layers.test(U.layers)){let ce=Ct.side;Ct.side=Be,Ct.needsUpdate=!0,re(pe,k,U,ke,Ct,Ye),Ct.side=ce,Ct.needsUpdate=!0,Rt=!0}}Rt===!0&&(zt.updateMultisampleRenderTarget(pt),zt.updateRenderTargetMipmap(pt))}P.setRenderTarget(ct,Mt,Lt),P.setClearColor(q,vt),ne!==void 0&&(U.viewport=ne),P.toneMapping=Yt}function Ut(v,C,k){let U=C.isScene===!0?C.overrideMaterial:null;for(let B=0,pt=v.length;B<pt;B++){let At=v[B],{object:ct,geometry:Mt,group:Lt}=At,Yt=At.material;Yt.allowOverride===!0&&U!==null&&(Yt=U),ct.layers.test(k.layers)&&re(ct,C,k,Mt,Yt,Lt)}}function re(v,C,k,U,B,pt){z!==null&&B.isNodeMaterial&&z.setObject(v,B),v.onBeforeRender(P,C,k,U,B,pt),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),B.onBeforeRender(P,C,k,U,v,pt),B.transparent===!0&&B.side===hn&&B.forceSinglePass===!1?(B.side=Be,B.needsUpdate=!0,P.renderBufferDirect(k,C,U,B,v,pt),B.side=ci,B.needsUpdate=!0,P.renderBufferDirect(k,C,U,B,v,pt),B.side=hn):P.renderBufferDirect(k,C,U,B,v,pt),v.onAfterRender(P,C,k,U,B,pt)}function ve(v){let C=0;for(let k of v)k.texture!==null&&C++;return C}function Te(v,C,k){C.isScene!==!0&&(C=$t);let U=Ft.get(v),B=A.state.lights,pt=A.state.shadowsArray,At=B.state.version,ct=K.getParameters(v,B.state,pt,C,k,A.state.lightProbeGridArray),Mt=K.getProgramCacheKey(ct),Lt=U.programs;U.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,U.fog=C.fog;let Yt=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;U.envMap=b.get(v.envMap||U.environment,Yt),U.envMapRotation=U.environment!==null&&v.envMap===null?C.environmentRotation:v.envMapRotation,Lt===void 0&&(v.addEventListener("dispose",le),Lt=new Map,U.programs=Lt,U.programVariants=new Map);let ne=Lt.get(Mt);if(ne!==void 0){if(U.currentProgram===ne&&U.lightsStateVersion===At)return Sn(v,ct),ne}else ct.uniforms=K.getUniforms(v),z!==null&&v.isNodeMaterial&&z.build(v,k,ct),v.onBeforeCompile(ct,P),ne=K.acquireProgram(ct,Mt),Lt.set(Mt,ne),U.uniforms=ct.uniforms;let Rt=U.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Rt.clippingPlanes=$.uniform),Sn(v,ct),U.needsLights=Qe(v),U.lightsStateVersion=At,U.needsLights&&(Rt.ambientLightColor.value=B.state.ambient,Rt.lightProbe.value=B.state.probe,Rt.sunLights.value=B.state.sun,Rt.sunLightShadows.value=B.state.sunShadow,Rt.directionalLights.value=B.state.directional,Rt.directionalLightShadows.value=B.state.directionalShadow,Rt.spotLights.value=B.state.spot,Rt.spotLightShadows.value=B.state.spotShadow,Rt.rectAreaLights.value=B.state.rectArea,Rt.ltc_1.value=B.state.rectAreaLTC1,Rt.ltc_2.value=B.state.rectAreaLTC2,Rt.pointLights.value=B.state.point,Rt.pointLightShadows.value=B.state.pointShadow,Rt.hemisphereLights.value=B.state.hemi,Rt.sunShadowMatrix.value=B.state.sunShadowMatrix,Rt.sunShadowCascade.value=B.state.sunShadowCascade,Rt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Rt.spotLightMatrix.value=B.state.spotLightMatrix,Rt.spotLightMap.value=B.state.spotLightMap,Rt.pointShadowMatrix.value=B.state.pointShadowMatrix),U.numLightProbeGrids=ve(A.state.lightProbeGridArray),U.currentProgram=ne,U.uniformsList=null,ne}function Ce(v,C,k,U,B){let pt=Ft.get(v),At=pt.currentProgram.id+","+U+","+B,ct=pt.programVariants.get(At);return ct===void 0?(ct=Te(v,C,k),pt.programVariants.set(At,ct)):(pt.currentProgram=ct,pt.uniformsList=null,pt.outputColorSpace=U,pt.toneMapping=B),ct}function Ee(v){if(v.uniformsList===null){let C=v.currentProgram.getUniforms();v.uniformsList=ds.seqWithValue(C.seq,v.uniforms)}return v.uniformsList}function Sn(v,C){let k=Ft.get(v);k.outputColorSpace=C.outputColorSpace,k.batching=C.batching,k.batchingColor=C.batchingColor,k.instancing=C.instancing,k.instancingColor=C.instancingColor,k.instancingMorph=C.instancingMorph,k.skinning=C.skinning,k.morphTargets=C.morphTargets,k.morphNormals=C.morphNormals,k.morphColors=C.morphColors,k.morphTargetsCount=C.morphTargetsCount,k.numClippingPlanes=C.numClippingPlanes,k.numIntersection=C.numClipIntersection,k.vertexAlphas=C.vertexAlphas,k.vertexTangents=C.vertexTangents,k.toneMapping=C.toneMapping}function Un(v,C,k,U,B){C.isScene!==!0&&(C=$t),zt.resetTextureUnits();let pt=C.fog,At=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?C.environment:null,ct=nt===null?P.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:se.workingColorSpace,Mt=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,Lt=b.get(U.envMap||At,Mt),Yt=U.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,ne=!!k.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Rt=!!k.morphAttributes.position,ie=!!k.morphAttributes.normal,Ae=!!k.morphAttributes.color,ge=Ln;U.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ge=P.toneMapping);let pe=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ke=pe!==void 0?pe.length:0,Ct=Ft.get(U),Ye=A.state.lights;if(rt===!0&&(bt===!0||v!==Q)){let Se=v===Q&&U.id===H;$.setState(U,v,Se)}let ce=!1,ui=!1;U.version===Ct.__version?Ct.needsLights&&Ct.lightsStateVersion!==Ye.state.version||B.isBatchedMesh&&Ct.batching===!1||!B.isBatchedMesh&&Ct.batching===!0||B.isBatchedMesh&&Ct.batchingColor===!0&&B._colorsTexture===null||B.isBatchedMesh&&Ct.batchingColor===!1&&B._colorsTexture!==null||B.isInstancedMesh&&Ct.instancing===!1||!B.isInstancedMesh&&Ct.instancing===!0||B.isSkinnedMesh&&Ct.skinning===!1||!B.isSkinnedMesh&&Ct.skinning===!0||B.isInstancedMesh&&Ct.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ct.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ct.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ct.instancingMorph===!1&&B.morphTexture!==null||Ct.envMap!==Lt||U.fog===!0&&Ct.fog!==pt||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==$.numPlanes||Ct.numIntersection!==$.numIntersection)||Ct.vertexAlphas!==Yt||Ct.vertexTangents!==ne||Ct.morphTargets!==Rt||Ct.morphNormals!==ie||Ct.morphColors!==Ae||Ct.morphTargetsCount!==ke||Ct.numLightProbeGrids!==ve(A.state.lightProbeGridArray)?ce=!0:(Ct.outputColorSpace!==ct||Ct.toneMapping!==ge)&&(ui=!0):(ce=!0,Ct.__version=U.version);let Ge=Ct.currentProgram;(ce===!0||ui===!0)&&(Ge=ui===!0?Ce(U,C,B,ct,ge):Te(U,C,B),z&&U.isNodeMaterial&&z.onUpdateProgram(U,Ge,Ct));let Ar=!1,Kn=!1,di=!1,ae=Ge.getUniforms(),Fe=Ct.uniforms;if(gt.useProgram(Ge.program)&&(Ar=!0,Kn=!0,di=!0),U.id!==H&&(H=U.id,Kn=!0),Ar||Q!==v){gt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ae.setValue(L,"projectionMatrix",v.projectionMatrix),ae.setValue(L,"viewMatrix",v.matrixWorldInverse);let De=ae.map.cameraPosition;De!==void 0&&De.setValue(L,kt.setFromMatrixPosition(v.matrixWorld)),oe.logarithmicDepthBuffer&&ae.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&ae.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,Kn=!0,di=!0)}if(Ct.needsLights&&(Ye.state.sunShadowMap.length>0&&ae.setValue(L,"sunShadowMap",Ye.state.sunShadowMap,zt),Ye.state.directionalShadowMap.length>0&&ae.setValue(L,"directionalShadowMap",Ye.state.directionalShadowMap,zt),Ye.state.spotShadowMap.length>0&&ae.setValue(L,"spotShadowMap",Ye.state.spotShadowMap,zt),Ye.state.pointShadowMap.length>0&&ae.setValue(L,"pointShadowMap",Ye.state.pointShadowMap,zt)),B.isSkinnedMesh){ae.setOptional(L,B,"bindMatrix"),ae.setOptional(L,B,"bindMatrixInverse");let Se=B.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),ae.setValue(L,"boneTexture",Se.boneTexture,zt))}B.isBatchedMesh&&(ae.setOptional(L,B,"batchingTexture"),ae.setValue(L,"batchingTexture",B._matricesTexture,zt),ae.setOptional(L,B,"batchingIdTexture"),ae.setValue(L,"batchingIdTexture",B._indirectTexture,zt),ae.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&ae.setValue(L,"batchingColorTexture",B._colorsTexture,zt));let fn=k.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&Y.update(B,k,Ge),(Kn||Ct.receiveShadow!==B.receiveShadow)&&(Ct.receiveShadow=B.receiveShadow,ae.setValue(L,"receiveShadow",B.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&C.environment!==null&&(Fe.envMapIntensity.value=C.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=v0()),Kn){if(ae.setValue(L,"toneMappingExposure",P.toneMappingExposure),Ct.needsLights&&$n(Fe,di),pt&&U.fog===!0&&ht.refreshFogUniforms(Fe,pt),ht.refreshMaterialUniforms(Fe,U,et,Ot,A.state.transmissionRenderTarget[v.id]),Ct.needsLights&&Ct.numLightProbeGrids>0){let Se=T,De=0;for(let Fn of A.state.lightProbeGridArray)Fn.texture!==null&&(Se.textures[De]=Fn.texture,Se.min[De]=Fn.boundingBox.min,Se.max[De]=Fn.boundingBox.max,Se.resolution[De]=Fn.resolution,De++);for(let Fn in Se)Se[Fn].length=De;Fe.probesSH.value=Se.textures,Fe.probesMin.value=Se.min,Fe.probesMax.value=Se.max,Fe.probesResolution.value=Se.resolution}ds.upload(L,Ee(Ct),Fe,zt)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(ds.upload(L,Ee(Ct),Fe,zt),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&ae.setValue(L,"center",B.center),ae.setValue(L,"modelViewMatrix",B.modelViewMatrix),ae.setValue(L,"normalMatrix",B.normalMatrix),ae.setValue(L,"modelMatrix",B.matrixWorld),U.uniformsGroups!==void 0){let Se=U.uniformsGroups;for(let De=0,Fn=Se.length;De<Fn;De++){let nc=Se[De];Pt.update(nc,Ge),Pt.bind(nc,Ge)}}return Ge}function $n(v,C){v.ambientLightColor.needsUpdate=C,v.lightProbe.needsUpdate=C,v.sunLights.needsUpdate=C,v.sunLightShadows.needsUpdate=C,v.directionalLights.needsUpdate=C,v.directionalLightShadows.needsUpdate=C,v.pointLights.needsUpdate=C,v.pointLightShadows.needsUpdate=C,v.spotLights.needsUpdate=C,v.spotLightShadows.needsUpdate=C,v.rectAreaLights.needsUpdate=C,v.hemisphereLights.needsUpdate=C}function Qe(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(v,C,k){let U=Ft.get(v);U.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),Ft.get(v.texture).__webglTexture=C,Ft.get(v.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:k,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,C){let k=Ft.get(v);k.__webglFramebuffer=C,k.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(v,C=0,k=0){nt=v,Z=C,G=k;let U=null,B=!1,pt=!1;if(v){let ct=Ft.get(v);if(ct.__useDefaultFramebuffer!==void 0){gt.bindFramebuffer(L.FRAMEBUFFER,ct.__webglFramebuffer),tt.copy(v.viewport),Tt.copy(v.scissor),Dt=v.scissorTest,gt.viewport(tt),gt.scissor(Tt),gt.setScissorTest(Dt),H=-1;return}else if(ct.__webglFramebuffer===void 0)zt.setupRenderTarget(v);else if(ct.__hasExternalTextures)zt.rebindTextures(v,Ft.get(v.texture).__webglTexture,Ft.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Yt=v.depthTexture;if(ct.__boundDepthTexture!==Yt){if(Yt!==null&&Ft.has(Yt)&&(v.width!==Yt.image.width||v.height!==Yt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(v)}}let Mt=v.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(pt=!0);let Lt=Ft.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Lt[C])?U=Lt[C][k]:U=Lt[C],B=!0):v.samples>0&&zt.useMultisampledRTT(v)===!1?U=Ft.get(v).__webglMultisampledFramebuffer:Array.isArray(Lt)?U=Lt[k]:U=Lt,tt.copy(v.viewport),Tt.copy(v.scissor),Dt=v.scissorTest}else tt.copy(Bt).multiplyScalar(et).floor(),Tt.copy(Jt).multiplyScalar(et).floor(),Dt=Ht;if(k!==0&&(U=X),gt.bindFramebuffer(L.FRAMEBUFFER,U)&&gt.drawBuffers(v,U),gt.viewport(tt),gt.scissor(Tt),gt.setScissorTest(Dt),B){let ct=Ft.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+C,ct.__webglTexture,k)}else if(pt){let ct=C;for(let Mt=0;Mt<v.textures.length;Mt++){let Lt=Ft.get(v.textures[Mt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Mt,Lt.__webglTexture,k,ct)}}else if(v!==null&&k!==0){let ct=Ft.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ct.__webglTexture,k)}H=-1};function Le(v){let C=Ft.get(v);return(C.__readFormat!==v.format||C.__readType!==v.type)&&(C.__readFormat=v.format,C.__readType=v.type,C.__formatReadable=oe.textureFormatReadable(v.format),C.__typeReadable=oe.textureTypeReadable(v.type)),C}this.readRenderTargetPixels=function(v,C,k,U,B,pt,At,ct=0){if(!(v&&v.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ft.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&At!==void 0&&(Mt=Mt[At],Array.isArray(Mt)&&(Mt=Mt[0])),Mt){gt.bindFramebuffer(L.FRAMEBUFFER,Mt);try{let Lt=v.textures[ct],Yt=Lt.format,ne=Lt.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ct);let Rt=Le(Lt);if(Rt.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=v.width-U&&k>=0&&k<=v.height-B&&L.readPixels(C,k,U,B,lt.convert(Yt),lt.convert(ne),pt)}finally{let Lt=nt!==null?Ft.get(nt).__webglFramebuffer:null;gt.bindFramebuffer(L.FRAMEBUFFER,Lt)}}},this.readRenderTargetPixelsAsync=async function(v,C,k,U,B,pt,At,ct=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Ft.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&At!==void 0&&(Mt=Mt[At],Array.isArray(Mt)&&(Mt=Mt[0])),Mt)if(C>=0&&C<=v.width-U&&k>=0&&k<=v.height-B){gt.bindFramebuffer(L.FRAMEBUFFER,Mt);let Lt=v.textures[ct],Yt=Lt.format,ne=Lt.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ct);let Rt=Le(Lt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ie=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ie),L.bufferData(L.PIXEL_PACK_BUFFER,pt.byteLength,L.STREAM_READ),L.readPixels(C,k,U,B,lt.convert(Yt),lt.convert(ne),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Ae=nt!==null?Ft.get(nt).__webglFramebuffer:null;gt.bindFramebuffer(L.FRAMEBUFFER,Ae);let ge=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await _h(L,ge,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ie),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ie),L.deleteSync(ge),pt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,C=null,k=0){let U=Math.pow(2,-k),B=Math.floor(v.image.width*U),pt=Math.floor(v.image.height*U),At=C!==null?C.x:0,ct=C!==null?C.y:0;zt.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,At,ct,B,pt),gt.unbindTexture()},this.copyTextureToTexture=function(v,C,k=null,U=null,B=0,pt=0){let At,ct,Mt,Lt,Yt,ne,Rt,ie,Ae,ge=v.isCompressedTexture?v.mipmaps[pt]:v.image;if(k!==null)At=k.max.x-k.min.x,ct=k.max.y-k.min.y,Mt=k.isBox3?k.max.z-k.min.z:1,Lt=k.min.x,Yt=k.min.y,ne=k.isBox3?k.min.z:0;else{let ae=Math.pow(2,-B);At=Math.floor(ge.width*ae),ct=Math.floor(ge.height*ae),v.isDataArrayTexture?Mt=ge.depth:v.isData3DTexture?Mt=Math.floor(ge.depth*ae):Mt=1,Lt=0,Yt=0,ne=0}U!==null?(Rt=U.x,ie=U.y,Ae=U.z):(Rt=0,ie=0,Ae=0);let pe=lt.convert(C.format),ke=lt.convert(C.type),Ct;C.isData3DTexture?(zt.setTexture3D(C,0),Ct=L.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(zt.setTexture2DArray(C,0),Ct=L.TEXTURE_2D_ARRAY):(zt.setTexture2D(C,0),Ct=L.TEXTURE_2D),gt.activeTexture(L.TEXTURE0),gt.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,C.flipY),gt.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),gt.pixelStorei(L.UNPACK_ALIGNMENT,C.unpackAlignment);let Ye=gt.getParameter(L.UNPACK_ROW_LENGTH),ce=gt.getParameter(L.UNPACK_IMAGE_HEIGHT),ui=gt.getParameter(L.UNPACK_SKIP_PIXELS),Ge=gt.getParameter(L.UNPACK_SKIP_ROWS),Ar=gt.getParameter(L.UNPACK_SKIP_IMAGES);gt.pixelStorei(L.UNPACK_ROW_LENGTH,ge.width),gt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ge.height),gt.pixelStorei(L.UNPACK_SKIP_PIXELS,Lt),gt.pixelStorei(L.UNPACK_SKIP_ROWS,Yt),gt.pixelStorei(L.UNPACK_SKIP_IMAGES,ne);let Kn=v.isDataArrayTexture||v.isData3DTexture,di=C.isDataArrayTexture||C.isData3DTexture;if(v.isDepthTexture){let ae=Ft.get(v),Fe=Ft.get(C),fn=Ft.get(ae.__renderTarget),Se=Ft.get(Fe.__renderTarget);gt.bindFramebuffer(L.READ_FRAMEBUFFER,fn.__webglFramebuffer),gt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let De=0;De<Mt;De++)Kn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ft.get(v).__webglTexture,B,ne+De),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ft.get(C).__webglTexture,pt,Ae+De)),L.blitFramebuffer(Lt,Yt,Lt+At,Yt+ct,Rt,ie,Rt+At,ie+ct,L.DEPTH_BUFFER_BIT,L.NEAREST);gt.bindFramebuffer(L.READ_FRAMEBUFFER,null),gt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(B!==0||v.isRenderTargetTexture||Ft.has(v)){let ae=Ft.get(v),Fe=Ft.get(C);gt.bindFramebuffer(L.READ_FRAMEBUFFER,I),gt.bindFramebuffer(L.DRAW_FRAMEBUFFER,V);for(let fn=0;fn<Mt;fn++)Kn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ae.__webglTexture,B,ne+fn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ae.__webglTexture,B),di?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.__webglTexture,pt,Ae+fn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Fe.__webglTexture,pt),B!==0?L.blitFramebuffer(Lt,Yt,Lt+At,Yt+ct,Rt,ie,Rt+At,ie+ct,L.COLOR_BUFFER_BIT,L.NEAREST):di?L.copyTexSubImage3D(Ct,pt,Rt,ie,Ae+fn,Lt,Yt,At,ct):L.copyTexSubImage2D(Ct,pt,Rt,ie,Lt,Yt,At,ct);gt.bindFramebuffer(L.READ_FRAMEBUFFER,null),gt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else di?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(Ct,pt,Rt,ie,Ae,At,ct,Mt,pe,ke,ge.data):C.isCompressedArrayTexture?L.compressedTexSubImage3D(Ct,pt,Rt,ie,Ae,At,ct,Mt,pe,ge.data):L.texSubImage3D(Ct,pt,Rt,ie,Ae,At,ct,Mt,pe,ke,ge):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,pt,Rt,ie,At,ct,pe,ke,ge.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,pt,Rt,ie,ge.width,ge.height,pe,ge.data):L.texSubImage2D(L.TEXTURE_2D,pt,Rt,ie,At,ct,pe,ke,ge);gt.pixelStorei(L.UNPACK_ROW_LENGTH,Ye),gt.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ce),gt.pixelStorei(L.UNPACK_SKIP_PIXELS,ui),gt.pixelStorei(L.UNPACK_SKIP_ROWS,Ge),gt.pixelStorei(L.UNPACK_SKIP_IMAGES,Ar),pt===0&&C.generateMipmaps===!0&&C.mipmapsAutoUpdate===!0&&L.generateMipmap(Ct),gt.unbindTexture()},this.initRenderTarget=function(v){Ft.get(v).__webglFramebuffer===void 0&&zt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?zt.setTextureCube(v,0):v.isData3DTexture?zt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?zt.setTexture2DArray(v,0):zt.setTexture2D(v,0),gt.unbindTexture()},this.resetState=function(){Z=0,G=0,nt=null,gt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var Tr=new N;function dn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Tr.copy(t),Tr[n]=0,Tr.normalize();let c=.5*a/(a+o),h=1-Tr.angleTo(i)/l;return Math.sign(Tr[e])===1?h*c:o/(a+o)+c+c*(1-h)}var To=class i extends Pn{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new N,c=new N,h=new N(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,g=f.length/6,y=new N,p=.5/a;for(let m=0,M=0;m<f.length;m+=3,M+=2)switch(l.fromArray(f,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),f[m+0]=h.x*Math.sign(l.x)+c.x*r,f[m+1]=h.y*Math.sign(l.y)+c.y*r,f[m+2]=h.z*Math.sign(l.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/g)){case 0:y.set(1,0,0),d[M+0]=dn(y,c,"z","y",r,n),d[M+1]=1-dn(y,c,"y","z",r,e);break;case 1:y.set(-1,0,0),d[M+0]=1-dn(y,c,"z","y",r,n),d[M+1]=1-dn(y,c,"y","z",r,e);break;case 2:y.set(0,1,0),d[M+0]=1-dn(y,c,"x","z",r,t),d[M+1]=dn(y,c,"z","x",r,n);break;case 3:y.set(0,-1,0),d[M+0]=1-dn(y,c,"x","z",r,t),d[M+1]=1-dn(y,c,"z","x",r,n);break;case 4:y.set(0,0,1),d[M+0]=1-dn(y,c,"x","y",r,t),d[M+1]=1-dn(y,c,"y","x",r,e);break;case 5:y.set(0,0,-1),d[M+0]=dn(y,c,"x","y",r,t),d[M+1]=1-dn(y,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var Eo=class extends xi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Pn;t.deleteAttribute("uv");let e=new qn({side:Be}),n=new qn,s=new ar(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new me(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new ks(t,n,6),o=new Oe;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new me(t,ms(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new me(t,ms(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new me(t,ms(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new me(t,ms(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let u=new me(t,ms(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let d=new me(t,ms(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ms(i){return new nr({color:0,emissive:16777215,emissiveIntensity:i})}var au="data:image/webp;base64,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";var ou="data:image/webp;base64,UklGRgq0AABXRUJQVlA4WAoAAAAQAAAAfwIALgMAQUxQSEEwAAAB/yckSPD/eGtEpO4jDCNZrQIPxomTl/4LTpSPFhDR/wmQj3M0If1q497BzOzyUWdHd29idXwwoAhvrxJ7o/gFfMGZhikib4A84N0qcn9glTwBFXOISAvgjeuRecYTTqqepKsJNRMp6GDWQyfrlNRSUkRAavlBtOHpWWcaI4K8+34HtkEXWhZCwAGISfTkjDEJK4SYjG2tcUeQ4Kq21kCZuC4zM6Ds8X+kDT7iBQzoaOOeRYvo6IMcJqinMAdJZEinCEVx20hR0n/ZHMss8I+ICeCXvkXADi77GHu4bfCbjO/ZlLj5CvnFCBhghYIGyra513Puk1yRdqTjngmr2JbjJa7zNnPtyTGglKgLAg0QT3LUq0n26WvxBVWPY5l/22b0h+3/+Ub+/123xxOxitTutLMd7+xoOet9774+tm3btm3btm3rbb9fWI9R5HH/o51OJs+Z5PHIRxExAZ61bVsbyba2+5YDirJqMjO35k7M9toT3ITZXtxmGMxjFCeMSqaISAgGBxjDEMYw29J7N6oqa2aWpEdvtCJiAvj//v//aZfGfcZ9VW5Vx3ncd/3Df/Vv/PUfPb6jq1cBzf7X/zCuU/qu93vAqSt/4b7GcWSLXTNh1Rfv/2vGcOWzS1/EQKxc/zum8RuoXr7HYSu9uPeAcdzmvDcHyGZfu2Maw1nyeHE4uZ7sMm4r37x2G3FYTHRu9jRmA/Nn9nm0pvVw/GalbOgRlCdu77nxGqtv9Dim/GRyHxunkS0s23FQ+URnV+M1G83H8I273zBWY8m2Px6ktbs9jc/Iz03yGKLpPmaMhp0Sj51P9HpjM/LlC/fR43B277F4RQZWp7DHEg4/m0BXZU70EI/N2e6G4xUZt3PX+iDVftqHrsLIr87i+wAsTncWvAoDr902Rx+FxY8L1NUX+cpL3vcFwrONOa6+Gi88xNNfLm4fUFdeSM5/iPoEbn4xwlVXWX5qj75ren8PuuICJ+qY6xsbay1ecbHau7d4gtIXd6ArLbLlU5h7AkHpfoNXWeRLFz/hicrd/xGutrbP76EnElTuz662rMxjTwRA56XGV+Rbrz7kSXN258CPrVj6+pxHT0gq3LwrG0+RLV7EeNKi9v+7Z1ylWzE9MUAXf+FDjafARIYNAPV1//FANp6y5n0yAMLeH/lG58dRrLOKZyB7//NbPGOo8i85NBjefesXMY2dWPWlg0HB3btdwdB4iexKjg0KSmbPrWDjJdZ566E5BtbKl75qp4lpbMT55HvcwxhkdS5dnk8YG/XJlRfwyUBBuvbqalk2FiIrv/N+zxIGW2a2+IXzoPEP+dkfOI0x+FK+dLabM/bpepPfo4ZPCgCecnu+AhrvQL22iygohVlxERvnEFYbNQpNndmqjXEI7lpG0dsnZ9PxDdAJFYyQt0rYWAbBMMLT0KfNnPHMMIeYdPlEqnGM3HIOigfIZ2qmsYtRK0BsitJ+ho1VCOPOGDFqJis5NEYBjiaIVZlv1RmnnIUBYjdvNiUbl5iVhlDsmMq74xJ0Ry3EscztmsYi1DkaBXGE7K5jLHK0FwmxbJA1czTmIA4LXcYUyNU3xx4YVZsgYksIFxF4lUEo70GIcYf+MJCuMKB73BdinVBAXlkQpo0WEfNyDCJdVaCrD+niDgExyV1RkBsuiUjC36R4FYGqVwUlgKjqpbuKgMbRjEhEalbug1cPxts9JOd0GEJXC8TpcSdMEHFGXDW8OMohSSAtrhjUKlSSAIELJ9CVAbGzVgyQsG7UEq4OuuNjp6QhF3JXBlgtOSSvqEmIxgJUOb6EkgdQVDkYBxCD7TIdkphqNiPK+yHK98IAyeyC00tcAag/mUIJBYzDEJ5fvLx/QSS4G888H9zpy3mSCe6yD3m9fm0mJDq7rRno79jeniHhqelwCfJ1mu0eQwkHQCFAPyf21l2ExBcFwdNpu5JT8gFwoafj5AmFNEhy5CjvJjq/uhOkA7hoPJ3Dv7sf8HVIj8HJc+8mlv7mgVKDC05+3KC8mqj+3I/MpQZwcfs6/LrS97963yM9ikc/H0MRTX7jgz2GSbH5XRoooln1jYe9oQIrPb+BxTPx0lLPhguYv5ihWCa//LIZw6WYen2CiP5KbhoysPIrO7JIJn96x/uhAzpvN1Acs/ztW14Mm7Lad14gjstWF+m5oQO0saU4Bmfv4hg+Rfp8yxTDTM/fMQ0hkJyfJobJmiv0kmHEdHKeGG5s3UcMpytrWPySZWe/NLSUNusRDKrnH9hwIuPcIopgtTW8G0qAjWVi+ESP4XV5NYa51crQImqbFVPkkuXbNTSkYJycJ35nixlD7EI3guXdZJiZmkbxazpBw8vCtrPo1Zp1xrAqS87MmmLX8pQYZneeI3Jb0i4xxMpWt2MXrqJhBj+xGblE2kqGGmm5hWIWVBaHHFZ3DEWtxmqGhhhY/17zZopZpRZDrWj/oF/0YsWkeJWU3VADmvqhf+K3nDKTFKkqHWfDDZTXf9Dv/jWvl82kKDU9I4Zds+qrP/PX/8offMGZU3SydKXOMOwQoLn5sxvemxSVRGfbaRgCBKJ94weeb5hJ8cigteZMQxEgEL/jd//4napZVCo3GKrbV3/Zn/ox29WIJNU70jBllM7+oj/3y9dRJPJYd8kxTEvmOud+xE+ZNcUhs8alKYZsYb7x5hKRCPue359kyAJJ01PEYGHZBz923RjC1WhFIWNy+pc+b8kQJlMZiz2Cevfy+sVEDOWGiL3GzHc+l0tiON/rWdyRUV5/+YU6xpBuD+4TcwXafOcEGEO7bC/qGOuvn5/KkYY3/9HHKNbIqF64fraJZ3g39v/dt2OxhuzC1Z0uJob6aKcHX6v25rVtDDHcT6ozyNNUNpblEUO+mmVH+NnsbrknMewzajbhZ8X2f0gYBaPe3Nt84X9gI0Fz5m2u/CuNAML83N9Uf+2DkWCwOYW8DOJHfjujYCPvCF/zI/4LNvQRzT58rfief84z/M0qQ28D3//HfxEb8oTh3tjf6Pe/9ZflhzxgUo8gX8PXf88feqs39M16gsf9Y+/8m4MhT1gMfY7+43f/zb0hD3ARPK7YulkI0140Bf0NoJ0HCyj1+d3OzRZS/mTmdcT5o52QaS5wp12vA+BiawylN6H7cuR3hOn2ACleGBRDyOcA4dEQSm+AW8DzEuV8yFQX+h6g92JIpbj5yPcI8/wAaX7SlecB3PEQSm1CuwZ6HiJ/5pDe3Ukb8jxC524rUFoLeqWQ8L7u8AKpjaM2fHChldocPFF+N0Rqv6j4II6f14KUJp7BD++fUOmM87OAzguthy6daTRAIP8jdtdqSOe8DOGJi6dMZ8FpDvJDpe1Iacxx7314YbF5q4QULrSry5APArS77VIYUO+Dngjnt/tKY9UAnlgcPy2kscHZ7/oiAOcnUQorFJYgb9Tbmqaw4yboi8Th3VqUvjYdPLJOdqdQyop+8Rs+Cb2tCVK22v/8vkcSpjdLactt/CvSeQhhhUA0/vRuylocngj+URgIbPDA/cLPqBQlRJUZPKRRYt8DssHjjf8kpOrO5sRHlM6+uPfFhze++OkBAy86f3Cepjh5/GBOeYfO9/0xa709/+A7/tBfvSMbMHA/tUOlJqH50TkF31j9vj9jzQH0ftUf+W2fM+ji+e0Qqdnh7I6DbxSr72/0DDAt/ejv+QcKkN/tQ2kpmD5rwkNOTZoEOHqz3//Cf9aAIdZLTEtieX0O+YdKSRyd+Oe/7y/c04ChjTW4tITyluAha2V0FNZ4+fR/Hrzu3TKVjqh8GT7SOKZj6aXfxcDh0Q2XjsSLrRF9xM272CNE+3QZDRgsflhxqQgo7Ag+8sNPOabVX7mUMPi7a5HS0XkZXvLTz48D67/6u5YGTSh91ofSUdNHGHc/xh4l8he/5nvlAwYunu5GSL9i7dmY8g9o/xu/rVt5BMjsb2/jBgsof9qnUg+wuSb4SNP+A89x1bv0cmqDJY4+P3ZMPeLtE8pDiOkzC/mxSCbeWzMNFIDC0zmUesp3EPgIuPZ6PT0eduUcAy5MrleEtMuPT+AlrfTmjtdjsHSthgYKjO7dHVPpJhp9MqB8BJOrCY/ruHLJGGxh8kkZKUd3X4Dwkq0Gehz5zXMMfHT97ghpVux9PoSnrJZ4fOu+Om+DxvHDWuBSDCbX10FPgfogbZxi8K//eq4Us7jzcQBf+WCvHzQXBk5s3q4GqUXR3k9n8JTi1l3ssbDWqtBgAXx0a+pSilj9aRn+8vMbfRCtnRqDLpQ/LDOdiJ1fPIO3ND344r4eC0sWOwMH8MWtqVIJxz//Al7zmz/rA1QqgydUv7MmpRBFd3+BQD7jo5vO+lCeHDyIz38+dykExR9Ngwg+c7/H44v6urOBA+affTJPIfzZNgivmbg+QGnaMfhC4Uc151KG3Ge3QXkO9SWtqABAcyNFw4QYPXyciMgp+qpyQZD3QwWjFzeWiJ/qS1oVKoLwckOE2LqxDEWPNOmDKC1WKepelmHDAlAsEPEzT+3x8NnZE1gxjEyZaUhgmP8AjB+1Mno8MXOlhAoBZOWyNBSI/doqFD/aVaOf2XJOUR2VbmY2DACdFuFBp2r9SaoqDEapnLvhoDwCFTlk5YWkH+ZVKRBQrfeGAAXD/XchRM/VedQHzFXTQqGat2cfi6fwn6bz87h+eNWzYlHuOekZB2yHoDyHyE5P0tfeQalgRokez/iglwcdvKebKZn6IPaqpWIhHlpizzTxcAof6hoZ/dTB7nSrYKAH++kzDXi2AnkQ1RLrB/5eedlZwbCJbk/PssYp6EOyGv21e+5sDRVL5KcuJPYM23N+pNXqj/XucqpF4W3xXaHE0tMSBO9pLDb6o9693nQJFS7Zfi63xGo86dKDkG23UD/wD3vNCoUXje+1QFJHz/cE/ymqJ2v00+jt+ul28cBdvVp2iSRMnzXhRZsnSqgPYPu+U30KyOrvbwaJBJzf60M+pD2bGH06SEtPAYzzb0NJxGjnGIQH1cq06KfMGyphxYPyB0MksrucwYdavtGkvwK5puMpKM7n6ZIo90fv+xBRXS9bf0wOzdVMxcPKN8dKIAUfvOtDYGKrJPUF0lQbEzwNxY8f51zyQC7yI7OLKX12pZSV9lMBNn/eohKHWIQ+xNxs21nfMs000dNA4afXycSBZs6DiHSyYvQ5qaQ2M8XTkaVP20ocBe+teBDIp0rqWzVnauYpAffo8+QB/vh9P9JNrV9pNRFN2VNBLH1YgxLn/T/LyYOUJh3qk+qpaGZPB8Dd/5WYOMt/+y7oP5Ky6LerpkYlR/Y0EOvfO3CJk67UiKBJTr899QRcwtNSO5+NE0aolMQPkddRn1DuPM6BkIonjO9fQoli2N2D+AF5VfQtQbQbYJgVDwwPugkDyomhlSfgJNjc+kfOklICKhrQLIIJYwc+hqSVvikBZxd+zJ/vbNZ+/c//EeuocJPzWdLgXAzJEvrsSQSqvP1La1PpD//RP/knXaXgwvxkACWLKkkMcXm/wHG4tYNRbs5d/cIyKhQYPWsmi3BT9RiC+ne0mRBwMPdClaJv7YtJAm6mE0PkZP3RI+QASUnSnX+AitXaGiWLaaoRQ1xiejLHLbdvHFBkITprQ0kCzWYMkZP1p5+qlG6aCgSi2kXCljZrpuiBGQMq5d2PdwslVJvJIpIPThNBvWlAQHX3ABUIKO5GiQK6/GYlfljiGFzZ1z8oFKc7LSpRKH2XF02xI8mwwSH7V5+5IgFnNSSr7OJ3r5tih4zBdYtbzorVaCQMHHd/PqT8hhODnFydNhWqVYeSRcHki6fwnKnTILHWochCJz9hsgDIfzykPIZREgPdrqECgeFuhUoYTh5vAfIXuJYbrNlJCl4qI2mF9sEIlLewykyCBmlpS1asi0rigIreWekF0lcQgHyCaK86Hmm+55+UyBbKpgIJ3TqUNABXVv9XCfwKASDkD2DuBMft2ZPCaFQpNIcnMySv8Nb3v7c9/Irf+4N5twFC/mBzHT3KDwCUs4Lh6CSBADfc/fDehcPbf/VP/zjZ+/D5EJQfkDXPzIhH99AA1MrFEuonSiIoGJXOHa/92W8vYbD/8fW9MSgfAPM7+XHknpzoNIoFDJvJBBGvOt377x81IhDyAUsc05S7Jwatws36SGhBAMEvKSo++8n1kQMAfkkZ3vKc6VEuFYPQKtpi4BLqm0aLwhe3N9ujufBlAvq28euUrVhpZYLjikGcmCrapKlUAGBSr5TqF5WDwR/O9/oACUjfBoFA7usIQlAooT6T23EG0lozKpQ4y/egVCAQmM961fFvRZtb1dLeEAACAfoaAfYEhADDOLzy1lsrq1EYLsJwtgCApBAi6h3HoCelYgFoNMRUAEgkvrrVbWw8b0+a+TkAfo0BAuuDDhmHlZVbM6ubrSCHwJGOcq5xUJ+0AEnBAyanGXi/a0W7d3/SDQmHDUyGA9DuTYp3T9u1Zk9fwbfeDSYDAPxmdqje7bQazWa1vbC6Ncer67TU3984rTUAQlnH0ry5Qdvdo+gHByUNEY+WAAIYN483dgZuMVy883t/+qfL9Z2jZjf6ZpVqc2Lh7NUTnWrZgcww8GtEkSA6+Zef7tTHAJVlWHZm3hj0e/dVNGQMrQLlwoVT1B+/85urObheafPudnuaq7Uarrd3d/f+w2RqY2t7a6FTz50wMIl+Osr1n926e9gHqMxCnHmlxaDr0y/5opkYZgXim86HtdPW8uJize7v7T348rfXzq3W8kyAgei/CGhQ+OhnhxMhw3z9LG7AjG/7NkZdvQIhEABCJhzt95UDGIgnLgLjs4e//GLGrMKSM13PwH9ys3iyIecbCwBhhg4JDBADKhDj/If/9zSrYPuks8G7v1s4Jz9cfdsFon/7ezeChMjfWMQNnlnRlGYjFQAR+e80UHiA2ksdo4Aqmi0mmEwFuKA728EHiNbJimnwzIol331+H2Ftqbk0kYSIlihglhTLJt7znpE8mas4FBqcKGI5LZCMpe8hz0hu+CwzWWDwVohWvTDCpxe/06eM7M7t3uoRGA+KMd8thjBzl96c2cU0qmF276YpLBRSLCwUwzN55u3WbTDH6K5ezxEWVQSs1S2AYPLaqc4+mMQoR3rrAAsKKgKVTmIDh1t/f2EX7+UY8UMMh8h8006OBkqoffUH3sQsIQAG48YAyg5cMZiZYsDbF9+9noEIgmL/fMLsoKjbWwPlbOMHvzVvBES2zydZz/zKAAnb+VGnewRFRfm7UFagQshaswMjWeOd79UAU0hwQfmTDjIDFQGrLqaDIRkbP/A6mERQZHj2cchA4K0QMF23JycB3WvfZxszERjF/ne6CAUUdG6dJywM8qVr714p4RMRHBnmj0KFgd1eIcTqlScFSXv1ynd6rQ6IACnwrISCwMO9QkB9MUH9k5G3Ln6377S27z0iUGr0uBIGDnoFSStPQJjbeP/S5XkDJEIlVX0PhQCzQsiqi1m/JM/6d3n3QrMMJkKm9LfOowBQVNPWGv0UBvPvfp8rbTAkwqZ2f/ukFGpgeid5HEl4yucvvnppxWEifMq+9YcSAMyKIbKF40kCaF+89ua5DoYIoj37U2008hU3LXNM4aE2OzXz4hdO5GYSwfT8S4z+ZkVRLjskDKPanH5pY2O5CRLh1LH6Xbs28hU3baU9mWEoKa1ePTN530Rwteobb7uRz3xR8oXaXUBZbXXz1OqtXW8YKLCI2ZfKaNSzYoj80tmvT2bWTy827bMbPUKtr15eZeRXMYCFXziT6dYn93sAhsKMWH63bBrtnCtM9toJDpsXEsG2drbCiJ+khZEZIEkEXJFvNUY+VxgkArClWxdTCzWhuPZVU2ikE2FfJCdajPaJC3vg1qdHPKfgt7A04slCn5JTbdNI50IfbE0x5jvbQqOcWfjrdhjpzYe/udnRLvzLmjs1rxEuTUIfcOkEo3wlDX5iqjXSNVMU+CDNRzhLZkuE/yQd3UQ2lUUAl4xuYCICGqO70btxEAGk0Q3kFAPc6Caqz5UjwGi/+mrZNL4j63zPHSfGdmX5+9+vIcK/2Ygm0+s/cVWM76BUeWBGDIwikwlhaz4VUVA2Q1S91/PEQMHNLUZVCwciChKTqcXQroydxQGg0bOYm86diIPCSc1iYxCRUHTtEWQr8bKSi+QLgH4zJGzN+clZTvCHvXMZS8jvkvCI/S5sLfY2a5JP6AyNhVHzEn6xPoAsJawdBfIJwlYdliaqmy2/gPHhhLKTsHjRFbyiK1RhaUaVixCeodW3lHzj1V0sJgiqjS0FS0sHKCYA4XoPspOVrz7AIsP4+ZAws2xt+wARE6lWG4a2+qv3jMi4KHYMJVvf8MRFYbrbN9VlHbi4AIwOZ3ZSb2kdT1wUensLyErw/j1LIgPd6akII8tWztBzcUEc7vZg6JduIWJjb3cGGUnmNm5HB6H8zBFmbi+ZucgQDJ+cQQYSAuO1zzHiotB8NoFtdYThgSs/eg9Fh1ZeNIsAsyOaE62J7spbL2OxATg+hkkFGICrlsqt7uT2cyszi1Xio3KtAuiMITAOq5zm08/tLMwtr9YTCUOKDzwZwJI6ZCCXlrNs67XZ7vZsKU1SR7QUj2gDHWWHXNZZ3dhe6namp0u547ChWIHaCelSnB5lR6jdKS9eOL/YbDTqueOwF4h4qdzxGETa1hECwx7hJhdmW5WptaV63pqZ5kgzgYiedz9AqhbI7IjDyqvNzsx0s9GaXZpulFp1DpuBQMTQaL8GuvQkPOAmSt5njem5dl6qTkzNLE41c472JpCIpqK793tIzzKj1u7MbWy3d315ZnGxI440MHRIRNfOXg5KTeaaqy+sb5ycENGYUX4BpiMZKl94f+GBlzCEIQxQ3MHo6TWkYAGeysX3a3cOiMw62wVdWhE6yhsw/fZl7hCbxcnGbyJ1CtChHnZUa3JuYXPl030wFJeAydEKlBIECPAAdqi+Mld1qs7M53awewfMcMRmVStgGhAYj8zbpbzSrOTV9mSjInoccKSXIzor6Lx4CwmuI4wjlVWyajnPW5s7nfr0dL1aK3OkmYGEiNDi+RahRBIYRytxSluz3fnNzsx0dWIiTSWETAgRu4tdJLeUlDLnGktzTc1fPFnPS84lckR1Ds4Yc3oMO046OVmbPn2iXZ6YqpYS8krC0XaEIpmCehtUTOkI/xjZTO1gzya2pl15eWs6rbTrGRlHGyBiu1gZIoYlA+yQq6iyOO0kJQ61Npomkr27DWW1Okeb6ZCI8uw/eweKG2FWFijL63M7s2magIR52N+FJOdIM0Agoj4PmmDsWL79vZdSj0uyUvmu59jmPYcFiHFAF6yvUIhZLf2gX/vbejiONO+RHiUxbtg9QdyIjV/0677LjHHYkMQ4o3InLoaufP864kgx7ijWVyDEbepTMTY52rmG+L132xibdLsXoIsZ46MvjlHgxTXE8Df8+xRDYxFR/+USXdyYPvrzf/+e8ObQ2EN4MgMRw+mFX/z3N1YS8Ag0viDOd38bMV0+c+aF52bmZgEM0HgC1NrJQbEkIJ9dufDWTtVVGwB2hMYMONtegPEEMkCT51fSU+8sKEmyIx5pGg8QJwcriHFh4BKVT2y3W0untpqJczKBkOmQKfr1jgDF12EZQJKm1dmtZn1qup2o1Myrc9NHYIekaEcUp2DMHRbGYZeWKyWnpJKlndOX29VKfb5xCLwdSwjQowxMilXTwntISB3COGa2UMtLte7KbJ5WuqsLtWP12RSjxHF1BUqGR+oYxtGV3JUn1tYn66UskZPJ5bWlGZGXhBPIH9x70MunyniEIhNQKROJLQSY8ehUToIkr59YzV29kcklwnp3P/18t3Lmve0Sh736IYAA7CgBiiWLAwcqqY6pRzzaAJQkDgm89Q4Myte+7+VWpZSlpb4AcBFy7qgj7QhFDgXtag7pUaajDhvHF5gmTs1PT7QmVjdLcsjhcBQoRPNRtzNcaKU9UQKVSqlLy7kOGQhM0YK1OqDUMIhyLs2nzs5XXZ5leeZCF4lwo8JufRpJQVYqOdKpucnq5PaZSZekTocdmCIFjqZI0cI4nKZ6JBwgIpov8OppkiTVdrs6vdRpNJrTs3Nl54QhQ4dM0SBonZFKT0cKjD7y1YxHqpLlWV5rtpvTJ0/Pt7IsO7j9yc1scT6JBS44vASRwvV4wjcVIAzjkZpcnq2nWdlufnq7dP4HXihFgih4HsC2OiTAjOO++6///R+IXkCugCAyzXF1rPFBF4IX5EUIk7PTBT1BjZDFNOjPl72A0F+GzYcDBz/Iy8BqlyH9ACpvGW06jOAFpaMcnckWIT3BvAvC5BE8ATvLoAxGuYCiD8AggGBwAQzgBTUOYHTn4AfZWAFlsnAS+QHlfwuCxalq70/FzE+q5QM6kwH1HnygOwAIkwvvv+UBFCy2fwNWz07PWfiDFvmc0URts24Kf5yeI7AZtCYwwn/UA2gz0+YkCn4KpoU/hNXTi90IAEyO3wNNJubfnbIocLoEm1t66TlH+BfbFdhc1F9rEQE5PXkPNBmsXq2i4KegXViCLCYrXVvDCH/sNWD15pUaigH1HiibdTYyIiDHe0uwubnnTiQW/pSr1EFnMTHxSpsIKNYnsPrMpQSFP4YHq1bLr+w4wr+CegmQxeQXt7EYwMMRaDKYKKEosLsEm8smEqLgpAo6k1m6ddsU/hQchbC5/NISPgKAu6tGg9mcGBjhyRKd0Wb2UQTQ/hSBLCZzJ24R/kX38nch2HxyAXPBD3Cn12D1DeJgWAzojNbdiwPTFgIZLbEo4PqE2Ss+BnBR+B3Iao39CCDOT38DVneTdyMAMD9bsZq1m3vmIsBlDXQ2Y2o+JwK60xzMntex4KdguP+u3ZKMGNg/DuisVs4jgNg5B2F1Ef4VhAe/Abt3Kij0gZ2TZbup2yD4i70aIZsJ6mn4AzodGP7Awp9Yk+GUuvAXtIs0XLLSDH4uV2iAMtvk5Zop8AGlS5jd0rc2Cf7icUBnNFG51gp/PO+AMHt1sRT83NJ+BLMbi1sZCn3YXzWbrHLuPkboHxZJZzSY3Dkg/J8sQJh9pU0EzK/C6vLV87vhTzi8ZjZody34CcMC6MxWLoU/8kwwfCsn/OvsfcstpJjCnuBKlksWHhL8Fe4sQUaTrzUt/LG7j8AZDSZboMDHxUYFhl+vEPqF2XobMpp8+fldU+ADxk+HdEaD5gRG4BcuT0SYvS2Cf7A47sDwc+FPGL2cWG62GwG6D2eW606YAh9QXne0m5ZaRuDnbLcLu9v6aRH8evsLyGri/Dp6tkiZg0P7RITdu3WereqOoYwBaJzA8o3ys+bZj7eobIHhfsVussrpFnqWaPDxf/gvO8gUxfb2CLIabD2fep6l4ea9g5//v0GmAFwUQFjdknOT6BkiTO8XOLi5GSlTaJRh+dzxbJ0ej4Xi7TmzBJ2UIMOhZ0x9e0EODuZQMBBrTwaE4ZNnCyfrBQFR/lIIB8hvwvJKeJYKnSd9CKhuTWnh4LhgOqRnCTA5dwDQu9VDOBxudSnLPWvrXxInd9qwQCBsPxeycgWD7Q9AAci7v2FGAOZXYXsmCdAoEQKEyYt/oLIBsfW28RYuWXqgADBa/2NkAwr6+YDOdLkgQRgevYev3ZzPmQkwfBmAML1ccoitUgB9SRg+q1AZgLDY+A3Y3hXHUHI0+uBXgLp/hCwAvNgnneXoDitI0ANH4SuF6m7IDIBRPgfC9q3TBZOC3SN8HRg9PYPMJ87Lvw3rzyojKhkU7E3xisLTXTrzAfPKW5DphHl9hMQ8wyuz/GKhDKBdBG0HukaCFN6hewXo3kYg+x0jA+xPEqPUBPHK22s0H8O9dzOA8QxKBvf4Gl5ZbK+PnfHE4VEAGU84PgWTQJg/Wn41EFtPnWwH9Kug9cDaWhfJeDYA3SsJZ7+OINu5s3eQAWqvSCXBYud38A3F4aOyg+l5efx2FoBWBwkohP/qc3Q8AId3FpThXDCs56AM4KLkEgAY/at7PH7zVkswfa9B2F8s3ygzAXT2b9HjiNHD+wvKcNqfgTIfoLWnUtyJ0y8+fzyAzQ+7MHzQOCYE+wulB1Mq5oDRi30eXwgfHzm7ieU2mAWAi8cbYswR1W30eADqn7Upu+0AQjZ4tibEu3B5s9QXYfbLIszGQRHMBoT+/ij2urfH9PnoTh+ymYLaCFkhwxcHijegue/UH0Y/3Q6MBjRcZgAUHkxjTZy9qKJPwP4JnM3EFjJDoX+zojgDy/fm6LN4+aIT2Iyu+G5mAEbr98ZQfAmNA7zGjX3KZvVz0GUFQu92L844ebT/OnY36SwmnM2RITK892TO2BIPbo/5Lyb2njRoMaC4miUAlU+bVGxhbxOv9eXLQAYjjjMFQXfXQsQ1m4+a1Os4WxcMrssa6LIDkJZ/NxdT4p0nIF6j9konRzEefhNhUSz94dtgHAnjG028VqGlGhq5cPSVwIDqrZUAsczP18DXAvfLK6OXoq2PscAQDX/jmhhDcr9svi7t3+32Ri1xsvtABMagPfmNGBLD689BvSZ22+3EbEVXqhIe3fidd+MH0fb/DCi87t3P5jOMHR13AgS7tVUXN2L7/7dBvG7ZjU5JspQwf9kLEVG5JsYMpjce4o3cvzOZmwrorw2x4ADOzt9ZjRfh2ffxRso+mm3C1s0TJwKELkerVIyI3Y+qbwbsZW3KUq55iSDJxfFwmXGC55+Db4a4swRnKM5rk2wCnDR/ZwmMC5c7+8WYelNuV/q0kzA+yCzUmIKIS/H6Y7y5fneHzkzArBHBggQwPxwvizHBZ9fBN4cbvwxlJmFSDUmgZHe4mkM8Ru3vNIg3V/v/7QyyEtApCMGC9cslMQZMvPcI1BvEP39CZyWi2UGGOWwuvxUDMvfhX90Vg+zqD0YyU9hcZBjk5NofIgZo/NWvRjZIcPslZSNhcTHLMIDR4Fqgbx2Vc38/YbClkycRrDy9CLMMorf8++K3zNza8h0GnRefF5yVZn0HhQtw0vvAfduULqdo0ID9p5GV5n1kmkQ/fB/f8rxWYvCF5q1LyEJC+9BlGuD0PBILJCvN1dHggYv1gxA2LhWRdTb3IlpxqKwsIQpZvjGnDBS4xjTroKp9usKYm9ks+0KIw+tFGFiIJso6gEV11DAVwx2U22WMgua/mFLmAcI5sk9e7KyVKKb8vhDFFAYP+rCwm0XZB1RuJdjgGf7WjQOKy/BhGbJQqAwEjmwPDZrM33vYw4ojNO5f0kIzl4UAeqkNmGf/5t0eosjzjwp09kGETFQkdqBBMtT78GOPUWTi2ZaDfcO5y0QAn5XRwMj5Wzfu7FNw8fLXlUDm6VfBjAS5a9ekN0Pg4DDfB79tAB69hHU8n3wj4XT5XfdmiGy8fNRBLJ6+CGkc+PJ3hBMBK9EbgenpdzoR4lAMt0vWkX37TQUTAG4C6TXJqf3xDy8AxQGAZxuQce58sYeFE4Iz5l6PgL3/+4Qg4lEs3R/RNKZPv0Jg1WIE/ssJOPvxZwPEqTuqwLiffRhaMF+shpL6IhGb//8ZwDhBtQDZ5sG94IIcwlxg6LGkHC/u/eQCARQjYuHeBLbt7YcXAINBEwM9ygDI3u5H9wQK8Tq6fWicBw/DizCr3Ht/swLYUQJisPP5jRLi+ORBKFkmy8ILAK1d+56vLWVZqiN6D3enBzd+WQIYP2Lzs0vCsvVWkCHUOHNlYXFjvuwc97/+P3/D9nqdIOL5cGtBy3QmggxgUCpXOt35VqX3HV/98f0eACqmWo+nkFlEeyrQIAzAZYk9NACJmBZG2zMY1iqNUAMIMABhiHGGL49lGMq1gHOkwHi6C4Vf9ymzWF4JPYk43+zDsFHoQdSbQ2bhoOM/qNqlXcR21X8AtSICqwCnRz5kVFxQZqmcQ/4jrI5hVaHTJ3ynEDUmZgEu5/4DUHVgl1EFXrTchWwiHh5DPqRZhVHJrQK86GC9F8gkUKnnRai1MoyC3hTyIMBu0SoahYQXbW7OaBOMBR8quifHgUyiOXzp5jZs4uRJxNoprvYyLE1lEMMMxRGgWMrJHkLC4ohQOADtAU5E08YxTCqhOCKMmpJFcFgcAeeXsGmZWEr0I8gg6pZMcQQYzQiLLLSIprMJLGozjXgSzi1iapRjibCYiPYQ5TyWALMRTNqqx5NBmwYxOk0USy7rMghWqxFNJw1B5hCVajyZDx0MarU2FkuiOUziZlJiqZvJIo6ZCVMUEacNZxHY2CCSUheRTRY3YwlwObSIrLsUT8ZNi+DrK0KRZDY0CazOGJE0nJnEsXSGOCq4GWgQaMxEEiJYhkySVrAoAqxeg01rMwmR9Dd+1ySidmUtjgh/8JsmwdzOjosjud9YtQmUpxRDiOCtwCqlplD8gMZKMqrkEylRdP68Q6OIKM3X40h71hhNfX5uMZbIRhOYXnIWRZrGaCrKiynRU1ZZS6XRBGqbOYodsHCeUVVUzk4QPcXyto0qWLJ9QtEDFpZGF2i/UDVFj5nmKJMulImdRpXRVbi5avQgGWUgXW3HDllnGo0u5tbnUNyApUVGWNFeSyxuGMszaHQBdiZNUYNsdWqkkS6uEjVF669/w8GwwmAnbsDy378N455tW9w49Q+BbcQzKyhqnPsjBcY5sU3MtHR9ycG4C8/XLGKwMAcaR+mFVRQxzs7ah60zREuRnOjAvLZ4NrNYAdWtmmgdn55eQNFi7WIqWNexdopYadn1ZWgeWDgnixOifqU9Asm3L7dQlIDZU7mHgXXyeRElLT03jwwkZt6rmCKEaL9cZRSWNV9fIU7OXSkhA4E7cdFZlNgGG43kvuXrTdFBfuLEvgkLi+Tgmw/iAyxM90YkUPXeXRQfVmvGqKzkk2/oxQct+ZFJ4tZ/fBgb5KdmGJ0tKf2v27EBFhsjlFT65DMUG04cjFBA49N9FxXkazveu9HJXPfebSwmwHQNz+gspYv1A8WF2RSNUODnlj2KCov7I5aS6fQOUXFpz7vRimo3tZhQ7uIZsbWwBooF8vUqo7ZIZ0v3iIdVG7kQlYk9FA/86AVg1hvIGyzuj2JiVBx6g9M3LRm9QLXXu5QHkF/e8l4jGBTtH0XwgKart/GM5pO9pgeQlV+4gxvR0HnZobI+mFnGj2oO2/sOWb9lz3+IGNU12CtkfbLZa3uM7sq185dUpkd6uYS5kQ1S9b7L9ORPXe0xyisYPGyA2Z381FfdMTTCAWi+GFKZHcn1GW+M+OHRRoisXn77vBkjvti718jqpOr1u71k1APDxtaUyuZ4cQnP6C93eBwimy/dGiELFJMPbyvI2cWtwGUB0OziFd5kpXeGRCYoWyx/GuDgYpsuG4A8udFTaJMvX78RICMUTXeD4K4Tc15ZAVZt3OsprMmXXv2Y7EDWrn5CaJ899dCQHfpK/UOvoGb5y/cICXLl5AYhXbZw6aG5LMEq3c+8AhrJS/QIi660ewcFM/m5HW9hQXKtbzsIZ3C+bYEB0onPHxDK5VsXMYUGZXsfokAGp5smQqMp/eZgZjq1611wkJt6UENBTLa4iidAqrdCKH9B5kKENS44C2X7B2mIoPL6PApg8qsNeoTJkwuE8Suf44KEbGUVBTArXXtgYQKbfaHlFbxkJ+v0AoXSF04RvOXzVz/EESj9yUsKXtB47iEKFLLu5Y6Fr5UOFirArZ0gdFt+5nPCpWP2udAlK6/eDxgweb6OghZMzfVQsJA1Lm8Sts2dBAsXmFbPOAtZsua5e4RMUd7MUcCCxbUDFDCg/lyLoJ2ee4gFDeNrf/1HsmAlv3luDxEyvfvKr/tPBCtZ+907nrBp7ubv+gumUIW9OmsWONDuX/5te7IwJb985eAgDR3Gf/tld0MVXHEYwUMf/aavEKQlXzp11xQ+uPvX/sm+LECZ6XIT74IH7P7n3/BJiFJWPf/CA0sIoHb/132TCMyyuVe25g4eGGG093e+2WRBSf7id9ftA4KpPeylmAKS/OW3d8F7F0pQMrlasYBkix/seZMjnBqVuaVqQNJbB+ZFUFWPqQmFIlnt9H1zhFbnU7JABLMzeAUXhCsLhaH6AUFWnC26piBkLswATj94GoUfsac00EA/8GULPqLHzH2Czc4PuuBDj9HeOXkHF2iQvfNjZlDAkeWbF9ZLDzGFGqtdv4IFHKu+eb0MIEKt6L4yQbhV9t3P9LyXCLjW+eCqwo19lxUzgu/0mRSFmrVrPVPoEfVTVcKsLH31Bkbw9eVT84EG3NLnBGAxcy61QJNO3gtBUHmuhMJMvuTNhaB8JiPQTlbwCkFptxxmLNn8EBF+Rb7YCTKyyqk7BGFz8zNBBtqbeygEQbXjfJBZ6hKKXT3ZDy/y5TO7wUiJCDC2fdaCEUZ4Va9+fRdTILKeBRdZ9tZEDxGK9oKLzN45a4TjvZs9WViB6xctJN361ERQlV37wJsCUq9HYNWbbxxgBOSpJWcBRZa9e8FjLiQ13u9+KAsl8u6dc/v73llI4gtX/6oRTLvf+xTheenn/px/YRZITF/zx75DwYn9jzEGEwBWUDggooMAAJCkAp0BKoACLwM+VSiRRiOipiSm80oIwAqJZW78EVmowpl21lqet7fUr0U+d/pvTl4575ffXsj/yval4S9oecp51/Ef9j/I/mB8vP+163fMK/W/8mvbV/aL39/uf6nP2+/af3bP+H+43vX/qn+3/a3/ofIT/K/8R/9PXT9mv/J/9P//+5F/Ov8p/6/Zx/8n7ifCx+4f7a/9b5Cf5j/e//r1gHqAfwD97+6z/wv4hftz8yfj383/tPyP9B/yH7l/gfmx7+uKv1D/Q83v5z+c/4/qn/zv+z5d/m/3yeov+Xf2T/gcbb1f+0/Yf2Mu+H+7/xn5Weqj/weqX6n/t//L7g384/p3+y/u/nheZl+B/6P+69xX+Vf2z/Rf3z/Lf9T/g////6/in/k/9n/Rflv8Afyn/Q/9b/Of6j9qPsH/j/9I/1/9q/y3/3/zH///+328esH9vf+/7iP6ff7388itAS7YCXbAS7YCXawxIhwDWFKn55U/PKn55U/PKn55U/PKn55JVuojRdunqd37fLPRm7G+xrWT7nKfc5T7nKfc5T7nKfc5Kt9COrw9IoN3NPZ4Ga/NufwCaubXbYCXbAS7YCXbAS7YCXbAS7YB8beKWq9+IsixPcVOAA62Aa6/lYllqfP/I3E7F2fy6xjWsn3OU+5yn3OU+5yn3OU028a77QeH2LhbC0+pNzh2v2jwz6/t/XBABYXhFQbITpdUj1ay9nOU+5yn3OU+5yn3OU+5ynynyCAkQdDMllr7I5OLahhbkaeIXqHQn9YOtP5czERBAQBTvfwrtHBNUMLTMhyn3OU+5yn3OU+5yn3OU+fjyq9jwRQK7YhRTrJ4n7TEP5/BLBIg5K7Ex/dSeJx7It1ITxqSWVlTJwlqWjUGTowCYzqEzaxjWsn3OU+5yn3OU+5quoSgz2BMG5jv0K4k84wao1axCjGNjz4d7CwE/B16hMusD/+ZrfPfNEmaMGuIMaYWGwAKUNTtO/oUwjzT9oCXbAS7YCXbAS7YCXbAOH8tzMFLCUBjL/HDFFD9/GRIdbUYb4VZxsduC5ubriVBvPhIcQ8vojth9XeJEDzUsgCnn4I8raZqNwDuQJFE/WHjZtEqfnlT88qfnlT88qfix5qPVRafD7gIgy49BleBOTPcmVk102pXvW1i47tf11Wdi7c6q6tEb0azEgJDHOa37dLiGXPteEhzGsy5K/gn370iYZ/CbYp+eVPzyp+eVPzyp+QXVPXKgOHFoaExs7AgRGdpdjnwYW3R/VDA7ZM7YltfCiEcgTBnS3RLM+M+bC74MP/+0rvQRns5jakS56Nr7wKUO2OeVPzyp+eVPzyp+eVIQxv1ugLy+qUEzyK+zqgXC91lT/OyXkMo/ddAwoZptbOeJNYcNrb79dNXHyOj9Qt4oXJFUQSwZDo4sJrpR1z/Q55u9rJzlPucp9zlPucp9zlNPltHngZtszSE6/C4kRK+NigH6Sz2gPTEZso9Egi6cjtpoahuUTE/Ye8VVIXrCBPQOYrgk9/V7HTMuU+5yn3OU+5yn3OSzqwLgUEhwd85AaiVBqWY2DSTkEjgAc/+kOIUF+8Ed6NwWzN5c0Aipl1n6yIpvnnKL2NbnWe3BxgPo3YzIRrsPtY1ciRi61XFck6JY1OvowznzqyzOcp9zlPucp8732GvPOlyIcAq0ZcUnKT26nh3iwxNLo2XqFhvyh50ALDnWZU0oaDOhw4/kz+V9mHZyaOV3J+MOSYvrODNnLgHYUqM+lpa1k+5yn3OU+5yn3C04caOkpwNpSy4/yKVm2X0D753QX9Oh9tQojOXlpxUrJBrYm/v3Ne7EzcNUvihtFRi0r9h9jeqZv2gMX2tf5PtRLEtDW6SCHGTC4yYXGTC4yYXGRehJYcf17Z9xoiMrHyvu87yGmuT1E/LGH30UPpykJw2SkXx/pwX1drIYZeVvvrH9ZSe5hREJTzVIc8sFLs0Fy1U6fQfucp9zlPucp9zlPuF7RwrR+UWdGmRchlW8E9Y69edkg4udD/SmXmbL8I+LYbpyonglKD4wOQigN41DKAGt8JhvYx29ymQj0i92m546u+cG4Jt1tMWwuMmFxkwuMmFxku1p6CO8JJX3BCUsIkpJL9ZcNEoMC2K3JGKOcN5fnEJ1doUakQN3+eUezoY/5BKGYmC+8XqQaOsatSrSMo2UYXkuXcxzUTacrBLfQiQ+yb9ZlDB5omiL1gwjfNgkDY4oZoA7BJccBJS3I4k+5yn3OU+5rPrUlO+075ExbacTff8+KucX3CNBga0WyUuPMh8LrLPONTB5n0TJ4cGKxKbz5bi+elFJ6Mhnlk8T9Q1rsR9HsepytyY7Tx9Mhpnd5lScDeIOQ5rpgJFfxZCbnRh3gbb+J+aHjm+hnim6r1gNP0JP65yN4ULxf3e1jGtZPucpvISjAeoExMbXKT87oYw0gQg3wuSbY3hJZ6A2Ub4GDC6hzSmd4wcXNpeed9Amv3koh8PAIYVXTVOkaYCW8+57GyaPLl3T5+U8VNhkad4tep6p/IJ2F5yQs4ve1WWl7AsCD9mzrIhBe//xrmsnliy9BBAeN9aS0iqlRrumZc9eHm8r1sacNU7AS7YCXbAOvtC0CkdJQPzq3oVk4VXqvO1aHQahbw2xlwaVyTawS/wcl+EnEn604dYotCRQPvgsNudop97QSOjzBDwhddPuudv3XLPa/2zzxkZbZyV4hMDC3EQfpcSK2yFx6TuRo12Hq9uVk7JxfgdZM2FxBL2eVvZvzjupG6kQ1mPzDnBk7Fj/y5sSm/RvLGUSjqoGuy0zmmZES7YCXbAS6kqnq+0IJFJx6e3KqobUaKQ4wB0p+RV1uoHu1kSFxnKLFbLPas848FiLlX//A2CWL58x+XC8OgaH4wPynHrCeH85DsSysBPAfU714Qs3JFWWtKmceMoy7imdvRR6/jXF3gpqKmWXh3hF2u5gjIGPsYXkU1/I8oaJf/30J7fqHr2pspXPBO31fEdYxrWT7nI91E+3+2b1OxtV7cMtLaqsRoEiYDDwuCqmlgfVFidYblz/vzTSvGrYWqFfcqt+tuFpZAfT5FhEbdxe+84d0s6C4Rwpr5PnvP3UV643D76ASMs7A/sRO8Q7FQsQ2GCbhnY6Oug3+b1xcx+AdFv8DAHwPky1hTIct9cQdNBdScYupMp3JUboF4Z8MzvdetEomNqOsvugTolvQzC4yYXGRVOqSohUZl4QxUbQibOVGNF+nToedtxnrikNDlN10qZTpBfrZ+hHRaO+frP78sbbM5n9m1IQfOPZq8BNsaWWddCHGluk8SuG5X9f7c4quZYq8wD1quEKlcA8BR/aGB1MzG3mMBVqfUzGCvoJv+bTXFB5Q8LypCNb8fiqu+U8fPXkYgHmUbfmoPkFgjEtorjTRZTYO6r2iuPQg+QUh+eSYNvhe759j7rYYHbNAhMD/JMORusBVacpxf/CpIYGh6CfIf38kccTjOXOd2w4aZEvYLy+63oKcB0dnxx/XVMwd1lWMxZ/6/nGGBCYatam0sodVll4BVV2a456/OHxxLpQ9zr8PBNVtCZ0kSnZ7YbdL66OrV/VoAtdSVu6dYXKN10TFHi9hSwn0jeXQ6okM17tEtHjuK88yiC/bf6AzLPYPyjSuntfxzYVkLMkmmM82js8viyK+s9AGPKa705M6Vcn5HuGl9WvkBR0ldSyAK0qZ2gVZS6i/+TEEkCMqSIyWv3zdbfdt9occCLHzE39FLkRS/1T+pHxMghvAwEKxdtg54ObF84ZOV01hd88sJ+6z+QJ+1AEUe0fLPZ98GlGm5oIs6f6wHUwQ6h0T0zokINfAGS/8n2NuBImdYHr4rI0o7rNgqPPLhQPw1Aei4XLktDCgrZKoHWh5gwbmCbg8HMJuIAcScAXtvAUGGlCk55O3QKH/yeNh5EY/L7TnRjw0/2n95By95O8+mj7TDskTNZYxdUaUjE8HTrQSYy1eeFa1n08KMG6m+Y6IPnm+ISX+aIxzKMYcIMcx7tI+BbvH1tD4ATtdTCxbrnaWYA8KmcXGzZS9/KaocINR7QOqD/eIUvVAGxzLfCl5w2K+P3u1iVrFKVeLHmiCfmD9o7Q6/y2LzdSn0S3Bp1xh60aeWbY7C+v32T7ilQxTmLfasUjsiyHJP+7A5U9zcIqbNy4/I2yP2osSEUsbFNXS5yGhvsD7ktR3RNXflGt6eDgvqtTsCGRjUcWjqmMzN9K6E1QQa36WQ195evUPXgo9cjCj0mmfYz+A6U9fqs0PRUKlqHnTmro4ODFoqYu629IxVgrYOqo6ssznKfbxAnh0lf2zEfstXFSgxDal+ta3JJXwnlExWjtMzOTemowF3PvpMex+rBbhdyXUjv1nAIp1JVufdXUGacH55il+zl03IK9pByMEk2vbv4nvefgUAR6CzEPhOKG6VG21qhfyY19YzD0D/qx/qfD1xWDiry/nKFfISn3OU+5ti89g4FFfR2Mroy6MPtv/TR9rNBF+/oOGR3J7Z7gto3aQIVAXntSa+XIqqHSOsiIPFBvV6Ed1z2+egKsXp0gPwRdE/dkUMsZpxz9e3HPEdwzNA9JsDy2mQIuw8wNWg9E3NlOgH8Y+eZQxyFhesCLSKhpQMGLTlyb8thcZMLjIrWcABSg931RGU9REkUr2LCxnwUAV5IDFVD5FE8+xKT2Ev2JDvUUdfp7463N4Q6oHdHp2ol3jtPWx3ESTAnyqlfHgbfPhNcEAVW4Owac7fAJdnJyS3HuijNkXY6WQr0MxBzsEybCj+4NXf9mLdjMCHMYyYXGTC3Tdrmo1tsG9Cvu0WCUgyAoJZQoJrbZGa57RqrNNQ1KxIWkxB0Wjh1jYuJoECoAoJL67qQ6wKzT/jkzmGUac9fAxTqawf9/6cio726ptWW04UVs22nTFhfHL4SiufXFnjaKjbIuI7+yVbK85yYMEWAHwDunPSRgUJj8mFxkwuMhhw0mYAaXzVmzFMV5C54LUhnAWOeJ3mmTc+h9cfh8B+tHvZS/a4XCr8HV4pnJmSUUGuREAs8xfPfo4hpBpfEiZFtKFrRSlqO9r34vSUGqOGR6Js0A8GtVNdSjfA2naQXzebJ3fBLXZ6zHMMLYX+YbVjGtZPucp8svIfDsktozTL6qs7vlT5Nz8/xNC2l3unYYAo9UGFQgonGtikzhXt5fku6dTrjkZV/qwz6Jop6Sw3Y1U/JdIkAoyGNn2+stRv/p38vpTKliFbcnVG51bFXlh6FzFFQjvveaiRdjsSfc5T7nI9a5gx3eTeU39wmX/oK82Z2jW5arA58BRRFQSwwPs3jKF6MPNBqahIwocbCIY/iJTh3kzfIQXYrizXJtD6+BsywytQ5N+0mh7NyoW3WQtWpDwo6Kgx8Np7UZlZXSOas/shXkqtQsmcnFP1IJg3TBwjuzM5yn3OU+4WrrXZEFwJ1fzlyX0nlHrnuoy2MywRgeq0mBhA3A3CdJ1yjI01USDnNSpj/M7ODhwTEK2dEcN+DtX+txfuxrqwCXySca1ftadxLIadWBpQ9fAH+UR2Rl4bLymxXtIlwBigIGsY1rJ9zlPt7xmwucSsjCFlHuym3m0GYHyBAoRZ/0lAJ1pNBOSIfiszm7jx2yYBoLFuyLeBzbQXd2nyclEFFHW5LoRCgTXl6BcWC6PJsOmZ8CKLWpPQv76gwdG0bb1Zn/hNARs99WZzlPucp9zc8M1B6Cy+Zl372ebX3LHvuinH4L+7h9obMk5vD+/xpqCsQG49AzFiLbz7ah27L79POWOBTDx1jteYurPPhhP1vnua1PM9eYg1DEDjvX2axDcgjbCQ/+fOYz/GKHrDvkxbC4yYXGTC4vcbz7uTfaZzWbr6UYLdCSt7Sfs6aR2/sFoKA3HqxvhVURi+druSnGUhhG5ssriwY2SNYNmnogVRMXczfGSpZtYxrWT7nKfc5T5+lZQriWTKbakpnt8heP9ACLZRbrW07+tCEJqs4oSqkEQSn+WfldZ+Gjs1Ow31hbUHCJEcDLLHOZRmwav7HY+y4yYXGTC4yYXGTC4yGgJtuXNYA4sdWOYkiQ4I+w2cxrfZKzuR5yxJT1luUc87WdWivKf/MopGxuYIXPlS+kW++y4yYXGTC4yYXGTC4uq6kI/2SJewCEv+VOEUdFxmdXXr51mMScaZkp8j1OdZJPN0JJYhXXqw5loJtgCKBjMW0kdno2z5SP2l/PNv7YWyhwXGTC4yYXGTC4yYXFmpYjSEbX5SWPgqPCJzW7c7ULYhaWrOziodKWbS8CY6lQmHjcZ5127+K0NZmFvP38zYlqOAjmV6wiLUM6LjJhcZMLjJhcZLo9R3kpkbL+hOqx2WEXt/LqophimfLw6mpJ20qSBmu+IUVillgs7x76Ssn0i+DkcnpeI/+241wf1RfnlT88qfnlT88qegYhtOIGmtyvOwTo2AwDOob05IxgDDM1ftbWxd7NFN2GgFDI/T24SULHYDEZ6duNLWYgYffbneMlpDh9cGLYwEDwHU3vSykCaVPzyp+eVPzyp+dIZxY6T0DVXJioT8t8+hTdNUvdE8iHRvA2T0cardh1TVImRO/CTRPdXgwT5hRvOkRVDP/E5Vb+dKmnb/zROj1Tf916UB+gaXc+vgZx0eCXbAS7YCXbAS7Uy8emTJrLqA2U50hLTQmI1suQOqgV/5jbyaGZzaBvJG6lruz+Yf3xVqnDWsaqmhCY3C+j4db/B0ZChJXKpNPz0zSXtT91KH5AN3M8qfnlT88qfnlQVNAZueRLajI/5Ak6kfopP/7zXsvBuxzOg+Cu33dCUd8F0nNPQqS3VCcTQ3kWgQZRMPjXlixSfzse+NIvPoFNVLrco4COZN5MB+D+JqUFmInb90XLeg66f4o8a/oEXtnRUPke9qRvaLsVaVChbtgJdsBLtgJdqm1DAQatjgD300TBtUqN7Msk/g9obDl7BrV37ccFgK7BtXZa/OLgwBg6BIThphtgZHC8HfGarKAku+vs9wcXxXD1RqX1byfpmTprih9bovaIvdokO4NqKc128d89Tpg1N8jUGcAUGt1zGJa4PNDfucp9zlPucpmorgUZwjrdpAiwHCVVc3bYzx5wAktK3us5qhKoKM2lALU4AupPcPdM7MJoNUJ0DCfZtAqvBlU0fGvwvSTvqV22zEzMVnl7+Ka+SLEW13fbnUgPV042i7rgVyzH/swtrW/Y8bF2QyCFzgFD9uit4ZFof52nWGdiNRs67ZYQAD+/cLAAAw2crsDoDTtuSUpVQpLdZlP5GbkE7uiKlXui3bE/N+gAAAAy3euPJkikmNfYe83A6yOQeoZyM016USjNhSZnPxMRGuIa9rQwNgMoINly/TSh4JmNruFVamf0ws5nno6P3qciPHNdfvQGM+1guw9dcYo7JyCclkGM4bKyERSQ6urijABpE2uKsVfaZlH2fEwwQMF7OPjhaL+LfBQuTc4tEfRIc2bXkbMFgEtFb+m2HwAAAEdNsFvMHo2rGsH396ZkK+87pHfwaHr34x52S6LC8OhuyBvWD9gJCKsc/j/Mrb5wnXUEmcg6qR/oLGeK7JC5Y1ROFMuwvGz75b6LVqoiA8bl2NB9ARpJyPD3jIDwnpOO9kFBKZacU/d2Dy89KXbDMW49m3SqX7F4XXUc6eQQawou9iYCFS9Gp/S10cNGj9zaAAAAAJCfJpyD/0Qte8yCgQHZrcFf2nxMWRr1N2faM5GRQGceNxQyxz899tYuJgd7w2xpeCB1CpStSLO09+H9ZzstfL1YetpQmPAbaZnqIRryljAux6ZDrMH1a7RMKfco1hAHYSRsNHpb2bO8FQvsdsxUDPZmElo+7fSizFtcelk3E9jSgJaP8l+2rLavFJlS1ZgGIXdpf2tUnChDJV1BWDONbJQhI82yvI1j8ajOyQrBkr3ah9sZCz3FzswVVx7QNm5zHlmjV2TbaaAAo4ABML/mJrvarimWx32fCzTwAAAAFNxTY10RRh/+4GSbL3nRNcfe2P2D2n98TM0hG70/BpDygddjB2bGdqVYUNWPj3/5dE+3lfprBq0vn+hLWtQuYQCo2y46LEkOy3f7jBnbF/i6kelPcfxBT+pzmzDHUg7XK2bDgDSgFcJVFFPNDeePBHDDDZkDAONHrdx4HqPYhdR4EwxZPufEv8V0AqqmFekVV23CbBUGkKBEP+uDU4vH5c4KuHdr5HGZ1YrlJprMiMP64sX2R5+4CXhkT4GDoU3j7wL53tBpa6QLBWh3YXA80+8OKHKgm18/P0rIPeWn9yCflScz4RdtCo0IsWSxQhGTvqMvzcqPiBNjRujrP6nPzAAAB5T+R/C415AKqsy2FSFNQzRHqNL+TBzizwaJuFdIN1SdnFrJV5oFekXC8YeVn/qey9ri1oKfl6WdyKqUuQrkF066pLSm0mLbgt0Ev3waHiTTFwvWd1QMYBHwULS6TbDES18xfUETOP6Igo9aljJE0/stBZuaxTqAMaHpEQ6HA7Le7U/zI3WCHEzBi/5HIm1EzbmR/ayYle68VdFPFGimIc3y8MQANJdzSBn6Zv8g1Y0YAsx5rnzprpDmpk3Ov5zg085evDeeXBVNTdD+ZG8lO4ruwnYB05TMlWgwua8oYMobA2Nx7mR6qYBluRo+nvRwm8x9nIc8GViQNvExG3g3vRNcYAAALH+vgSe4ViMXN0KaBEs+zCRaWZM5FTclM+7xBq06GWOqEaAgu8aKPTdOADWqSxciZd0Wuiwz0J+EmyupGwaE9WE/RyYgrIze0Fe8ueYcmGnUZiWHrWyFMmtawHL4TEyf6re+BDaD8WOf18RSg5jPGOa7x4kO0tP/a5VoSdMpHzLQBiM5VIjOMA0t+PLWz5vTpY/N+NzdeqXrfnvbuTfLkS2s97gputd2yJrdmHoPWWq2eHYiNHXVfJOgwqF4VC91AqgH8y57wdImGCq8HaKXWVinDqjZ0tqLsO+FBBgV1jOxf+FIOYssSXEUSjehDQaMCkfLXcyLbQEP5G6BDXCOatqUEgAAFJXnYQ3OyVuNn9ps0ZZaFJwFtU+G54WM0F0lVtfdkZJVPX7BSP6cCzShTbED9nNlBDQsyyXa1VFWMi+PQAB55Bs6z1i+btL6vIlaA8K8Js/gYwWbUVzgXsk72CYDHYYFqxsYTk+cG9LRDFE+RefRQLpLNjKv3Kiov9U5zWsMIw5JpyH5/3bw7ccAitqozcMCzV99S1yiQYDYutKVzguwTMNAuxJCdoxY00oadGBSc3kJFJuBKDImZV2n1d3QI8fndcFc/eR9Rwb6rczlebuJlYqq5pngHM711btKtdlF+9KBiPT7j+Bdktcrx3/+22z9037Bxk7o84jcbvPjVKUm7+w4KdGtf4B6swiH3OCnmuJuVEDzmpbHosMfhNGkkQK+YeXsvia7a3R21cw1sB3esAACUISgAAKJI9yUXejyzMqXIBfmL0rL4pAxijdM6g1CvNvrXRgBo6IjEOgxUzEOFlHcQYQW+Xg7/3xRatILVuAe4kM3KI6nGfi7qel92MqZj5T6Eq+GwOuT3cuPAs1fc20II3DtqcyHnuQlkQwj3w0wM97SHui6feNoxH+8Aa4/A+yn6hxnrKmAdgzjyN2+Dz5W5ZHxSgI+iEWTvyXuvzt1pi9YF3dHTRL2Af31Y/iMc0KNaSr8fX2MIEN0VSuwzoia3569w2ElaFQHFWroidNfRDUsZVp4rzii8jnYPGsAZZQAxChArZ/Dg1wG3dmR2V07uASh3V2P/UvTqu12v2DI0JfUGjnuyYQERE7biXpEw/uF6cdfHeo6WiEKoLecUHStBJxZtH5tX2xpGdf+ACjhbx5LtAqGL/V8mY2B9x5Hkhv6fRxU52rwkIj2SuVOljDAAAASH9WI45xcP2q4JtZnfgdPNjcBwJVQBO23bWLlME3GJblGsuNHzN6+58oo4ouoNtF+BZ3H8IuA3UgQVVUkuyKSk+e9tSrj043LHmL/ISQYa9NhX0uHl4WstrtfX1hDP7tTKTJ82YzJ6uG0HmER8CF/qXJ6xOlnoYFWkZ3571Rj0uKcaTuYdeCxPsNQj6fiAANLi3EHyV+fKaxQtXMw3sNjHS58ZtDRe2qxoWFtX7yakBS48WDe+KYLs7JBTLpJKHHf4x40PsigvQbT7IcQR75WzkSD2JkYY9W3evZY57iuFAiCiB5OBXLdLkafKLxR3byFtnQAsall7STGRk/jdQkq3MCBuutNbBpdIpXaAyckTfFrtCkrW01YRkq7oRQ7UPJBcRgcSP8P5rEsJsyV2dMNApOkeZofU0s1ct6UhKlPXrVrnNHbv/hcUpeXpeOnCsCkfFLqynw8yMrmsD5dqvBF8HZH0MVSu1utlKNxJaA4OZlimPOwAAWAQk4OLusIODjdXy50SOmsctLg1ekHYc7155Xi/kO50SPaajrXCt8abGMY0+BlrKUTItm05/sfpdrLHA1zqXeGzk5jH767ZsYAvXujAdHnH9xqUK2a9HLo165/jd81F85rmHa4j4NUy4c0gkeep8vaeysy/E2l0h2kg3iipkzpka4iorkO9gr/uQlyugIkZKEVsMIIGPgAl/SDG5nHcjvK+k/HdcJnVuQ13amtkesJNz/nG3x2TdDRbpvDRRHL+TroUfKVXviIYozFlRRQhVXcW8V2kwKSXrYZt0SZmr6i9uudFh2GShnKNELtuLBpncaFT8J6qziQ5ZgjP+44EULKHbksZWJPvRxf1eGToOLGmQftANXzddDLuR20NYHg1rF96Y50C4sQG55PNBT1QaJt32qDBRVLHVeyQzsb5oe9vievrQxely4kZpAQcq5XaiV/ag65pbwBAE+C6f8N/D753vilfLjwKKgFXSv+Atl4bkIfgQWfY0/uR/AVcaZne6DJDr51gAABSP+xr/i3suFjzMddQTNmJWYk/QKV6A97Dl9/8E2wpzPyp+0rv5gH3DR66PLdeeCDE7XyctGUJqf5Lrcr5KOEV9cGqyJMxIiM8XRmNeia/kAfz0HDFX6nbA2Ns13Jr5gavpJuY9J+c4C09WI9dojoRWb5AfSBnjh989Kv8Ts5FeL9MAJERRWNtFiCp/XQe5nfXJlYNSH525bc2C9+u/z764hj93P0iP97XF9v8wNHQbua5Hi35lwqA0yIHP0AKrdXfZyZEbh8sfEuqfCYx9Azj3btBd45NNpR2y8IdbQj3ii/rm5U5btrbsDIdmCz8Ocl8KPp0L3foCuzMC4Ds43C75i1SQo0XqQ2OM3LX5SoTTIgHsa3l9gUmJoDpZpqgpnw3SyxM9n8mnOr8Saf7AAt1wkS3FSIPyV3AElYCcKUplNDzdcuS0TVQtcf3Tfk17D35HEzk5L+GRbIA6PU6QntnGQijhs3BryQc9vzAcJXl+vtMMLLKhySqmmqijLJtEWEX5cx+G+wa9Fkf3SJcRq32wZF32EHc4AAR36L2W8tpFziNfhMmE9bPJGX01Yj0GtLUx/k7a6w9A/1WmTaFjpmxxXm4Bf9w7s3/g0/+GEKk+tqzrk8O4DHG1gHaxqastrDsBpdxdYPeYgDFjR7MdIL+zvXxzFsKpKtXH73PHijceNeKOageaiTg/LHM2FK1M6d1kVHkrFxGOdJwqbWLF/R2Uw/mTqwxroFNWOBrpdgPH2oID1JufkJ18hN9l7RY6DUYFHthJrLT3cWW+KUUL5tNOgGmZlAjULoMgYQDofL+KOKryodjQP+IXoKZ8mT8RHqKs8YojA2Ex5a6Dce/w9k59/CPTQti+EkkxU1fRUqOohmPqWqQ/llE5GmRxA7fi4UZd5s/IPY+bm7OMcPekIgSCzAxyQ2j4OOXJNObR7ej5RcP4+KHbdev/WRiJAT41+HQ+8z6ws81PWR3XB+kUkZ/l4mP6IK7ERfcnPkLrJHKGr32Gz/O4kKtpLL9yhpTvl1vFAz4GJLzeNj+2oAAASP+vgSbilu7jXFIRofwrgS3h2MFzjdXPlfLsJ9QbYJqyr0u6+0+vmc9i0AtbZhlr2Hswx17aL9MxhZKok9j0sjBPt4zDpO9C8HoyYSKh2U7nFB3VOVlS4MZrLm/eFCCUToviB610XtlGh5MpWnL27k0lm4uadpL7I9v/d1j4GtA27bbUUl9xjZjvl7IngH0JWiXxVqScmvOrrOAnfFGpSK9c27sLSa4HDJ1CBq2ZW1Kd7xYfyUy5CU7FWlEWvlS1shNKxmBZH9tbVlWp6YBgSIh595K0MlyNvze17QW/WuvHsED86hLUz/87kcLSe+xvx5lbEm7ktBXJKZrINiPbBrNGPerVuMWCgYK9gD9vUbHLSzFsEncNd5xedZeOpMUEIJKhVikkTe1c8i3f0bJjWsbEakOURJ+8xKw3Dxu+xicYidrprsEGoBO4ET9vYvoRlbSM7uGwLvfeRWgNy9Gvo3dNKrq2JiUw5OTUjgN/KKRAWGHJwN1OIbZ0jyuU487WJrFrxVJst4Nxy2rVti5rjmjBXSPM+d3vQeKZ7sUXqh+/OzX96H+jHWfGByhHnVB/Zk/ctH99+lczSkY6UvShYwrzk+v/pp8qVwvh3a3F2dDUwi2gFlDyycuQ7nsugaAGIh9onodmmMZpGcbEaHWH4MA0ylJRyjBgYkhZ+0xj0WVlCxyUcuROeRHGZZuzRSDMXZpEPG+TYs8ibR24bG+m7GHMPqddAJNnd1Rh1fVB/m2CIGOz1k8r1bag5YlkIHsMZiNXimFLbMxZfAAMt4lOTrVEQLXN071YL/Q68H0VR+5WTh2xIH+QMmAdavlNGoqIpFxXHbEymgJuhk0Eo43g4KVKx/LBVo5hS+AxTpz6aL0eYW5aOsHTxARwPFvqM5Z6sxoZkAvmkvmR5Wtc0Y3P24bT+CNQIQ99k0Zz7er4p7cMe5dTn/r1ifoNS+Z+HSSx8yt6FSa4YzsHhzd0nKNr/4TcVWuzO6VekyTr0Gs+m+mZ+jChWXipRFnGHe07Q/XwcVFQRMjrYLpSgcTc8dO1+bK8Twpdv8GFfljKgXrR6Tv4hceguQ+7KgUYPhAxUnYVHDlPDzHF/WHn720OEbFuiwlzQk20QVjrnwq1dNkaLNlh0w9JBSHHZ1fJvS6+7UYrwcVCxiLXdm0GIYEBmA1gZIj8B/EUPmND+A1RBH88sl6OxTniBpEMK8Ag3MEzkUu6EOD2Dw414eEdddv858GhBvDxlggmXVWCZ+WNCh6CFOeaw08uPsSOjnyR8EP8zALyw7ZUUMVwJutf0kC3HXGDzdkkFZDTz1D/sN84AI+WHYYVht/dCvDWcvBalhPjyTAABI6CCsFTQBr4M1RLgdxktqQvuVrVhzhyWB108PYpeGFpm9aTkFrPX1uBeJoOTtXeEjTfHKTPb270fpiPb++Q/H6NL9JmkIw6qNsbRvvOXNfTbSZ0oFtX4zy3DDmn6ovwe4paGosFNTaoQ3YsDY49vF1AiFTanexJxS8l04wFDFlYuG8/Wd7qB8f2os/oD2xw8L2FKlyzt1ziKiX/hwVEpEdOE/jfSd7tVAkeBmKMxeuJhvsMdFGeD3x/4gmAzIJ+ieJh+E4o1Tx9Iyeb4qKvBsvt1qf2fgApsRwNucrd+OWTwU7oyKVLjgLNI1i8Y4ZXEk1ttiQK6h1JWhGSAgeEJ5/A6rEAz+AjzNCZWmC7vKcfgeBnCadbFLqFprPlM2nxgAAJARlCRz0UCC4l45lrJnn2ksR+Ia7yCP2wAIElMYcPpM34qgJeeB7OtEIB38i1BR57lm4NNyqoB/EyS4gBEOA5TQ1eiFfnZMBSd5ITxDKOmWW/ghp02JkRynvMi4INw0GhY8MT0JZ4wHRjYGlu0S4bB+9j9Dj7yQrb1+XvvL+guYuH4QtZlpygYxDr6bsMOLlFfBFZt6l71cK1swohrFs6+OOb50hrXiQ9iscAH/RchgVoZ3JrJCEfyfJXeMO2qubIH5b2VVcZovSRIwTtE2XYpp4tdVGVEkigPuHR/AM5+LDoC/WUkwkHNToCksA8qcNbZAnn6BQ1LKoSvIiiGJbeOlCNd90z6E/NQZtD2qBBSicWJBRm2Gb64k5lDMW59ISXDsmG0IC60SRNdHIDwod8mbkkwjegSkQ3/byPh1jfkBxYPk/yZ/hSalRkPLgnB+cDcPLjJTC6rChjz/lYhjRC8rdoNhWPfEfkfuTJPb9HFzOxqjXvkc6ZaRwTVPnp4/K2IXyJf2C9U6ooA6ynYIq0Y6CmsQklEf2vL2AOBJzwuRdbWAbOGsVAAojfzvlwtLmhudgX9OCf3Wh4K86XEwUziV+2aubxCx7aUwZWU8/6pSXTn5Mr2i8WdnZVbxhTfNJ07vmAAAHalRfkK/e4UijOs3W0Pityh2mCIbJDIwNN5kt6jEe48RNMelpZH62zmv66LzzHMJdr83T92DbPOkmiWcwZqg9V0EVeB0BMrnL5EU4AWGUf0Um5aRmjUUwB8unLX41IMFR6Cg+QQQX4+KPbTTs8NKI1jMIfFz88D5zxzqnMsL38w7ualtxhLqd93acC8xWTu5VAuQ1TTd+iQPUCV1Oiup9MaZsnA159pXQ98xNy8t9VZMu1hfsS7RvYeGcG9im8x5QBuYqudWflJ34MegVEPsqsiUAoxaGCMH2wY9bywtUnj3eZ34isp+6q0b9z6GqHwqhToNmLrcglQI4bwpmzwpfp2krmMoljEHW5r8Hv7L6P0leUVUC4/jqjJyl+XEfQAQZNvwclGYxCqoRuogIJOv3WYyQ5AsHtj0ocAZmFqbu5ig6wGcdtq9+u+aX1ESuLpU2ZpsuWZs2N1h0Nh+wwgt6SZxmB3FpEQAFPioWIeTSUW/T25zLMcKp4ulkQbmWvGqCMrbsDQjyIZQHwNareH93Sq+J8EsSatk3+EWKSqSNXNcKwZf4yHcjGEi5gWsVC3PfxsC9GJ9IEGux1BtfgukVa5PQoA+bknMp/rwNkufdR7yN7Hv4+mCLwWylSZVwg6+tALrKj+epOShxY2oOvfLEUyora/5ou+R2Fjk3qGmX7jSHGYbF78fk5sUjsYWHgAAKZDX+Y1pvhrUKPG4plsQH1+g7TFd34tMkErTqNtW+Gxe55A7XKg5EmTe8ao1SNXkAepv0gQKHOZNqwzlurn76aF9Phccru6Xg1xmuViqSZVMClnjy9CwkUbJ/bg3aTsdc1cvb4dqqSNWEOFBl1uQ8Rxt95N7X5h9d7uqaRtI2SYL4om4S98tIdkw8wP4guoJZMMiE7uEWszms6w73p2oU52zAdiTHPLHmLHlZmNs/VLZF4NEg+LR7npIDyhrJBw8dQVkcgFOl3TJFyOyFZ6Gjjh4cnu+IeGasj/APuVe96WuMW488sXs6knV0aUPBR4+qYiF83TXqLDs5BLeR6bKBgjhayLTZo1UrSCsY1RwNha89lpVo03UeQD3D/UBWfKZEvrFeJ81NhMwJSOQNFcYBIf6/7pvmimkrCWqKSLtbERbKw/P4hyC658BEvNCtA3DgvHW51Mto5BhFbkRvmLPgyREetQJK9rQqsIwd+zHRwS+rCI0YXWb+epYo9L4wWZRCMqf1j3ehS7x1/DyokUT5/7zsBtuLD0Cialu/A4oDcFJdqVz+mJirB9nJhwxWH+WvTkpP64RkgdTjrLDVVwzV5bdQn+pbn0cPHbnDiQLYonbxt6OjOm4ap+ebiEDC2JJVYH5YBkoAZlkdDFNQaiBht4CRmZLccN7XFu/EuEsd2tu/4mZhlDFy/XaGZbu13PjGZQFTH++zqQn4qwCTZ6EHqFdS/CfbuAUgXTqVlA8jzzosNPH7TmjdHPY08WmbImmigj2z3hxRUUGvHCxS69w0Ee/ZbKlkZOFnh326bFBaof8eiDna1okchFpJgNCh0DHlIvVydgjBAOXyMdNgMTkqB+bTOypPZxiJSTdR6kg2HgRMS7RlYmD61KfRDmU+ERlMrnpT9VVAcTvvQ2x+i2ZilZJo2lSZGjhsIyVYdtx7W2yQ7UXOWxwMMR6fxW8A9k2H2623HR2yAPzpBrmItPEsD2tf8faygE2mQwVw/8g/L7bXAR9vG7raRj8YEy4b2O/9V1g9a/54f/0fbS32/orVlhrRtJiTg2uoa7BjeI7hQC6CjNwKMTMYuVdpm3rwSLw87+g7hl+euiMX2LtHzcGQWAcSmPFL8GTz/E2pEd+Wv79so6XlmFebBff0g1dBgi3ZWb4uH9jd0VsYHy31SwkEHzwz4CNVHzx7/BB/FuohkYhiWKuDvgnCCWnE7BSAAdSNwvrR/mPgm3oJkcFx4wGT1qmWoVssB2DyrmejeoqfTRIX+kcImDtbi5vVpK9D2O871aeWqdNbRIpdVibTOSTOgp0cmYC1LzjrugzfupftX9v3m1Bj60rR/x54ZT+JpJdpz2Cwr6EZjoQmc0t8U/07PUlK7Q9X3PpACwsEV9BYrjyVY00Ejig/lGDYdnqQma7OdJ4TV9yFT/IerL1tH1Xw72cH5b9gL+EFNLAM8kBl0ZilnPnOVcT+qZjUFdLW4/I6TUKn/6Ja6tbiJwqFdYaL33ItmKjs9laPlJllkVnryZOtUOTa0TNlZcrvPllK3eSY9KTJOj6A9coIjlRj4fA9rQdCiSF7Vni+c2rAzrU0OqjSn4EPWDV9Vn1tlWNiRlEgOUOq4et8K1SLI4uw/4K/B4NHvn4zm4LkxhuB0Agni3cSD2YGObeQBqtsSyWv67sEnRLL6tcr+t86PuXNxMa+fqVuLE9yTH1zxNy6OR/Pj46yIq4IYBZkD+42V/ZIglSATIqtQlwf2/KbDgClqhZ3tBW3/Jt0DW+2TL9lkTe4yANU9n7Z+OhZEaKtEMYOphG17GhXjEQJEhIaRmImTtlEL3hf7N/BCtO6lyeidpKutp/7khuE2HvvS6Z7H3Z6eUBScFGaAE+WoAGoOTRgJSEE2R5j2G92IS7dVd/wNk2VeyUGZIn1jP5ucGa4L0HbvRycJ/RRCQqIWFVjgMHmx1JE7ncTjqwX/qwfEjjCiZ/DVzLCpfOwv2XdlF7CTagLTbKYSvTkRi/9WxU/A2Hie4Or4nFWSO0blyFSLJjpvBEJUhQ8KSZBnlueK9YVclWCRCS8K1XSkyHr/bg1Rn/BXGqDRSRvJkuDX+AWAfp8uracwog5FCdHjtfzoYweNuL5uhBtS4ihc4O/EBcC+faqQcKmz1hZbnt0wbxxa1HwPGmPScR1FwNKiQLWJYAUAGQKXb+6WWu5c3FiyVEQv+Fx1vyJCDB9iKWvlNcydL7QPKSeYZ7ZVzTsc8MsHHfmlkUgoVYVEd/2P4f8LgkxYJI3nc1EyNB8OoJXr/ebCub6eKTFfnix0a6gr/mkqH33Uv2mQsVBFk0ohbI721n124Ro2yuzjFqGeph/5NfWJlTq5l0In7VGqsxpKR3RVXeJ5yr+F5cdJERAgwdQJ1I/sbVW3meyOMF2KSLYdiZRUdVEf67CZlkI9ub553sM8yyW7OblIBCw7ps9QOZPTghnq3SAAHsOSvVS9QtC7nUch1ZP9b7X+Rz+0kGLHwUHT2Q8MgUpMHy25rOtauNwVdp9KD6+igxwtEFiwO1XadRSNsTj3JfO379x7+SIsUb4vnmx/F4oEURD6GLSvaaxa8Or1lMKSJccGkAGu+tag+CvyLL3zsKb30jJqteAVfowr+3RXRy53H75SOLx2V2BPkutNtPx8SzgdNycQoLuO0gqQeZGjL4C654mNrrUq2X0L2f0Qiotm9yylItbi+2qXC2i9rK1NQ/1Wp5X1elqAPy0eKoHjD4qoiUFrGJrdv56lXm2ZwdrcMmQtIc9FY6JwqMIhu6ePqX1QpjN3ArQUYgn2Nfv19eyPWGF5lAoSsNwL9tQfH1l7ZGF8gN0/EDyXd1pSHCiRfcuy6QRAvQZ987fLl1RxJlWDmPli5BqTy/pvPLHEA0kBKaOr1MG5EVLen3bZIONc01hP3e57oHCDtKGFzdphuTa1De4D9fnt47N16S++GcH/KmcyEbZ2DV1nywNtluVmt0EXf3vkiFBp7zywv6YNe+G8QuRq2otYQvKrLTx02i0daiZmORgYjcYd+6Hm0kPRyCqmvqyBI4lNrioGGJWnr7RMQisEOmxPlgZtYE65zEN2AIbGPEO8SzuslbRhoUUKA9MH1C7L2ac8Kv0n5ATpkOd9ejr4zkZnsu/DkhakRlyU9MaEXV7NdQpZwvxOwOtDJ2ScbJQw9SI1RNvm0+z2vF2LaQVWIVNGWPoJ6hqwKfZpXu6KBhUbrC0D6n7Ia1HIwVU7VnxTiZenlNZUc7/Liaa6wUmmN1n2AkRrlhPEdbtC+99ds1+h/bZIenxSavpK6hsqlJdU4jmhpr0irMuVe7Up8RgafLHvc91q1FVu+p4KtnYSeLs1ELdrW/mEjPkEFIvzkGaKfp7VYMQ7e7QPI2vu9qLOdXfpCMeOGW1JsIrf4Uem8y0QH2Qc1mZA8PoGAWDlR52itUwTfbMahqSg/Pxy5sT/XP9+euy26Zg0kBusNdkV2cMpSGZyE65rA+Aou9UzNgDtgEyJJhf4Txsr9qYK/E65hqwfmQmb4TU0ncVhhTAbA+q9GNBbJpMlwCktqKLrGBF3jhDelossU2skh17sO9neVJJbgBpvP5UAUb3fn8rFAgI2cBGB+//kwsLK6jm43FkhPyJj2Rimlm2EDbhesYohXWTBLPB73L5p787m6ZuugBggqEpafpFej67/Do0uFb7zeGna//zcvJBYoMVqGGpunm1OxBr26BtK+7NveaLdYB49n1yO/1+0xjiO3R07y6BcPhgq+GYWDkd6885SFtdTSzy3XGJ+hUlc2LwEB7gUQ3fcxePnJI9pWFAf5bMaHgkqzIUZuxC19WIgnWGeQoen2FyhJ3MZ4oJ0clgrmrx7KnciUIYdCpCbSQen8qE62sA6FRtWIug4RsVPPE8Y7sFk9degEH3zF1QHDdzA1EcsE7aW175rvjmo88cWaA67WuiuncH3d7WuFZadFr7H26tr9mB7DcIhL+QO/JUAsHpHaR8C5W6jmRqvK8SnBAcNLU3CZGgcBrLzeuRsGDhj8u28e3XVLQs+m3Rz0LaqR+0t8O2tgmf/Ocn5z1xr+msT8YgWSq5fwUG9/hxRstpTat5N7d6eTgxWeH7qIvCbaxwYN6V/nmRhVXoZxsDauwlPtqk9AbVkAUhiY4XiR52ap93Cl+QukNp7t7Tdt9K5opIRCylPbgRc3Z1UHRqhF7jBFkTFwoFMHv/j45s3cjYtmPFc4/ZFaWeq0xGlj3i5jsdJ2n40mWX6cRARAv9r/9vf7RiHdlyTmECqVUijRJ3lR5QAY0EOLw1Eg2t1dQFXAZrzE4JhbAmUThHmBE9HVwFtauhNxHcWR40p/8D7+2w5/9HfJ8MuKwmSWi1zgQtNqS0hllC0GZTWN0+zhGz4w27exxjc/s2gXrimcPPOLZ9d9HVu8V8ZPyfo/XZVDsJX25yJoaXEbS3CecGbmRQYxilBnSt2uImZHNHG/tBIk9Sus+G9U1obJGuEQHsAPlMOLudoo28wzQI0G7lMifQR5av9UWE0n9k5EJgrfUTX4S1QguLG7b45Cd3qmmacl4Xr1GaBqxy8Nu8VRXaIKlwLvFGooB6WmFB6fK8ciGBwH7PJrq9SAqk3A8FvBjplqFTHTiBgQr5/n2KCTtLOGkrmJZWv1zuEYd6qH/rys5+IwUBtErSzQMy3F9eCOoBhmNqZlMsqW/WgENKk/Dz62enPQ51M+gipHT4QaZo5966BkTczGiSxpIEMrmsS4KUuuYXDmCQtjyyym5HZJmLEOeIMkbydX8iEJNsOL+2WAAyeIvYw8iYTFVwZ1/wZOuyBtHAx/Z+ejgSUaBWqGZSR/bpP21V85AKrjgVIeuZcGzvrMFD1cjV55W+B9MW7AaNBbRjOXVW6PorfIH9nnRhaYYmitp+0cfW/gNfFx2Co8v3DjZAoj23zgE78lAy9n8NA88y+vNeBDFwN9ztnQ8D8UBCjnXXUbsTvGBYuWdg6fFKvh63wc/3xDPtzNM3I/XOpCH3y2Ck8ai9NTgXxKw8Izm+mImItVcfCxe67ECSWJViY6XVbHVmxbB6X4sIewmzgP98nMWoZGlrRduDjGrR+UVn6T8zZcQpwgwK5yqqcdmsRE2GKH3jIEbavxMg/X0ned9YgzW9tEYWK31gCPDyDucL0nfMzFjhxVqLKKwV9oO2ywiOYqCX2XCNF7Z06S/gyABjHLUcTJPQJUdcF/9xpMN8JPAMuSC2KSwfPUQPEEEGPKN0RmxXngy5X/Fj7qW+efUl1sXzY9a0x2ew2CuKMWpcQIIo9yIFHhDB4u+eEJskyY54OsL7ws23i9Oyh99XCOdchdeS6ZvLiR5hYpQxXISXZ/csNr1RhL/wAqeMunOWB4lCA7l+81e4I9R3dqgh798z0HaU9ysEIsyU6u2F9jgHQNCcg3tRcP0HoTSg8tl7lN8HQQR60Ea4cTF92VnHp8fRUUEC1fj86YJ6Ys4143CYYUrnotuLEaoKf7E7K1aoRmXjApSYxyWQ+9/z4o5h5VZCp7hX8LPQ5Le1r9CH7SZpG8l8VYXkH6zL6jXL363gdtvBUAjkp+yAplJwlrphOOZrXhD7dljSsCilw3EcTQXSFS9AzNYDwCr+dwBd4A6vdvxowRpueqt/u4b0oxI1ezFkBeaojTk+lquEqAtESxxbA3RoN/V16KYdYdL0k/CnGUB6z4mEN2OepjwcdELlXL5G+rvpjagqZHeNYwx2hP94fpno+zFM3JjHxhLHxAhZ3jRlAjGsojo/08wUiQJvrlNHE+mKz7xOGikOMiRZOdDK2bTt5Jh/aZMQGOo5+Z/Hppj3xQDB0sUCgHynaQLqDuHwJhWf8rcWq7W0k20rFVHZwHVgjaY/BdA1coAse3o0U5LIK8FAAsuLo5tO/oiX+LpiwTGEA2zyqicF7/HG9/gzKqKu7wPjqTAR9YCj02GaSJuAMzRGvNVRKH5tmUeyxcL9uB4I7HaFD7VszYkFOf0deSqOq/O67PxS+xEJ5Jcdcnb7uoloyLpUscfpMkBU6XQx2QUELiZdH6qozY663NjYH/1XY9JxHw/YWrBFh1bYWWWNWln7DGFIdVD75hg2c8YPm+8rsvOxfIdEs93fNHqRVhOGpGNr30lJSX7umoteiqBtbY0KiDRIK1Wmo183U77PWDOiCIMmPYd9Rv/j4v6WZTCYbLAq0MgEdcnHIBVIYXV7YOMhOh/ROLm0/oFFnd6ge4xcqcjTqHlOMyjxMaYTkSdf5a9u6S/D2TcEpRLGRa/GrpW7j4sxonUeu7J5WH4ilaWTBufMYIOpugzyOiRIeRhYwkab/hJeEsvD7d0a8w2fAu6JMBMV09r+TDoklBGXQz2llNe5iKazjIJTvnkjK9VD1tTvhYKzwAQYYzHueDOlsVi/jhG/6HxhVqxMUzLzwBdBZ+IvHduZZuOF7wtJ+AjepkMxCD3oy4Nkdi2F3AtnMYmzy4ggbldNEkbYw/SdxhH6WI2v5fqrAQed0usCOBc2spVcM0kKamr/4tUo4n3mMkK8hOvYEKfuIVV6q4PYMjL0FqPIMllgczcfqg+GsHrNVhTrT3A60ZvmkJpfyvSECR2uWllRwoS0aBYx0ij+SO9PqxsSNoq/G5o2KDJp0uZQxA1k4o356RXQO2NuvPDcYSGSdI23/hCK9jGQxmrM8rXed/ZcA20MANtp0I70NIhvsk4e3bHej8CTiX6Ltw2F3yR7Ijm7ikzwmGlKBDk7VhVsl6a5dYkP+rfpKDFqXipUWcYkuq45S7yHWuazdVM+5smPYVHsrKR1tPjuIEVGMsYaeOhv5nq5CAMe2sg1+TsQaeC1H5BTuJiPndVF4evt4ErIEKgSrPmb+gCKWk9Ex4M+pHw2pANP7aWLxRyrZUyPcIFRkrcqU54EduglzRzB9O30NjzliyhXkQS1aEzCFZjHlIo58/dE6O80p8f5W/kMQfTi80Lg9rupeeNm5e1ykfrl/1/ou/jw77sqn5ngw2aLkhy46tdu+xx0UTv/0mIoJLgjogLTvv86HHH9ZhXyxJ6J5ozUWwu13mZAqjxZPiAFoqJjUNrP2ZhcXTYhFdrbl/5/96YOe35aShd8WS1avNPqPTgm19qvJ4jyUj5SEod308v8YmYEDkWWPVk63RYQNdYt6DacbiXV8fSslNvEFIXod1VYwD4PPQkP3GD/91NOMKlJ8nmiqbWWZIrZqFJIMO8unM0Md0FbroKDudAuO1mjMvEmJERZL/UzIBaWY4mYyRj30uk/kA/HPEoQ2/jMhpAbfiifABfpdCJjSKiXsdHPm7IzNr4j8mYNqcLpk3tci0tOjRyzDzErKSzcQqwyQcJRbpYft06XpEKfL0XR0Ef7JO8LROZt79PJop/USX8YfzMUipy5VCKDkqDys8r0jtOV/fGaREMtbJkKGJmMV3lGW4UhUCqrb9JfQNp3utreMqdRtD+m+hWCxce0v+jWMtnck2ejee2ZhXVUgaKzIUf1qPD07/yCX/imQn3bgY9CUGTmAaHG7L5bsREzw+KtG5bMZd2V9I8Atf+3kDPne7qAfX5H96MnZYKyYweefM49wUmSWLHADU9BIzXg8QVdAA9Q41aH0bmPnDp4AOdVB4lOfX6UXKf/fdYOGIt4TFnthalQo/DaMIOvzzooKK0WL8lDz6D2veiYyqDl7XrmNFt9Q+/xtMMQzv0HGth710HdPBom+3FiM2/XT5GPNaWPdgSzb+39P+7SESUtWObzoNG3pfih1Itr5UcBAB+nz8oEUs0uTOoh0TEeLMk/99bipwXTNSKLUaZNiks/qCv6o21jsn5OIQz2dEqBWLXagqq3q8s6vZ4YY03jOmVztvPQOAS0DqjP5VUxhxFnU0KoOleflTgM2ChDiomx+chYAnyQSMEVn/g8YCMgoukWWbR+mJY93AHXt88TyP7EKQjZEDBcYijFoFUfzfW7YwGp37GnomYNIwrW4LjRD8aOrspYMRUQYHODQ3ke5IrsxYeBkC8EprBaxAuWX5+8g94lc17ajvFtdma7lYXOSZA23o+0klAtcIJFdMKaT0pRts5PKPBYtNbucN7e8kdJyfpdcs98332PeYYMZRsJoA+tRIe6w6T3kCOVv1TSApUiuu/kR6J4OZpivc7L5rdNg29sUkB2YnuOEfBgyVL6n8Kl2MDUjf3YMih6N++XVaDR6fCxznuZ9z/O/JLg9VfWzUG2fNeOAA63GoTwoqJPneJTDZ+K7JK+7Tc3WO9PTJSjAiNatTIRHstm7xWh6rd6ONTUVh1nlmwpaV3twMT5ozdfOyNbXQKUYdGYuXJNGFYMEYSIeQlO6fToXilL0e31aHAmO3VBSATixSYrkxTkPH83BaKZm3fToaqzAAr/vlxD6vJsKlj3fn3npIVUaie9tOMQ2cotcZKZvCa8WblaNlPgJLakKPXRyTKPryTKellSzHkoYWEzZkqsaQrZvUB3+CYOUXZ7aTwCO2wC0k8V7OYHI2qutE+tcBbfdFxPmVcyFrz4YkP2J/l9Sw5DGJfCiwb64j+yWnX8ZuWYYAMLQyKXJNWmDARRqsgj0Xy4S3CVWuCeZsgv0MdBT/Ww0VY1FepC6LAnwjQqRxwmorrdhPWnXYajb1K/4Co8L9tLpEAsotW5v4BI36JB4jmAqTSD3/szOzrW7yBQ5VEI3xHBOA7viyzPkaN61WlrASeVXVDyu7FdN68SdmGx/Na37AL1WpXPMDnuJz1CH0wPaItCb3E9CZu1JCesytj64bZ1XjghGdUf5usw+fthl1wVD8XDm+iDfHKgfCStkVWiM0DIM91KcWT0dA2GW4TnM0/M6eTPQPRN+r1qLwvGiSNd9xq9ab0rvv+c5zB+LiryNTMxPLV5egwEnHEf/u+b/TiMQgHa68ZExapdJTFYaRePgL8e3aWcyPAzcrIkEd9ODOBJXFs7Zk3jeH3Avd+Es9pvsO3GphJnyExrSFEf/8X+lawxf/j/DIQ1rnnQ6Ndj2cLRPqev6sQqbnHyU3At2ekW4rfmrE7YRvCMQfmMjvPXMQNv2BARgp+5Gq/0WTcc2gUsuXAcqTX3sOIBYg+dZqV4QrQQgjdmuIlpJUre8DThm1IvVdQZdBtkZvoS5jQuFvbOpETkG8vQfHWfVt06GCZ6Xef2ZCLzOXnUaoudbShf6af/bL5Y1KGngXUXWDGsyzX2zkb3QU5Pp31QGMMhjpRaXagsb3+grsci5/Fj28YrXw+d345wwOHS3oFG2vESEZsONz1Q4jUNZjCsnrSCeEA6vwRrh2YLJx5tMsjXblILZDqTrzw/ATO+RDG954DYrh9s08ehJo0jWdu7hXyN6yr1howov1y8rSUmm4UTJjCSNCaCuTyDskahJ/4RVzXZ0JlwDxYP3hfuA5hoTIMm0NkTvfLqEUVdfVSSz1fzOMVSGp+ryet2CNr49go4IDht/z4PWq2kWBUccmU6xzbIJAtBnZ4pawCBekpBiaku83D3uW62cAweI70wCQlqBkdBuzKu9Anttzk4uTT0WxuyCA1YSoguEwDrvIMhdG9ruRQeBlodSA/tCvWBN3mq1HeIU23BI9o1lUy2OGUhcz+QXyU56sC2G4VW2yuVgPzLASzC3V1MDLN2XCRRfI+rzTaMPX+DU8cD/iNcSOr7gkkPkWWue6Hm2iuwrWVxmooVyJioV9uRiUH2X0r3k2VVpQetVFTpBC9AU6SrrFDkTIodi8BSRbwN5PBrp2MQVoNYI30XGZ5/Oh0h6zFmjZanneqSlM4yjOxkgUMEYhrrkKU3uAF/pzA9o5p59TvIh2/3ReKIRrVpx8gb0d6tDPWcztqxUfYfk7m9nEwWcKaUjdgXIhCyD27Z8RFuo+WhLuK1cAVlVZhUbhp4UJbpi0m9Td0HOXWZxwYcjHOold0QDgu2UMGkNkDBOvygzNnCstuSGkk1kJwDzJEsyZoG+jI908wj9NSy8wuicFVXkZVtyINmqKUcG+XeWVAnyMkhBUjarUTw0idOXXuSG/rklRLQ3sX+QUe7OKO+uvT9/2yHHtjma5mFfDZnYrILDfKVgWkyHkF4YHt68rIdQepkbwfenFinsARr7pXqNOF7q+w53Ukhby+Jrt8y+cRowJhgUh0SXtyizGvbBqUSBlB8Q2Yz5s7BQG9oyDiQVo/JcHOpx03MLUb5IMdbD1/+N/mUZenghV5wBBEG+gFbQMpjG57n3sWN8azBle5Rz07+pfNgyrJeqXLFkSS+F8qfdPctc5UKHLyNrf0Gbue+vLhIzCMmyU+ZMvQ1t/NrR8+wrdL+brsY5ZFf8dtARpfay1w9OoiS8rBYPHHAcQSZVMRdH74iaks/TCmsyVyXo1pFaCPxUukiHSqsk+7YBL/Dz9GKmOtyY4SlAbGTdKlMpsDN+iZYp4FJGS28mzlnJ5UHat5QWeAmDBqZ/R+atwcm0mZpY8pMMFFLF6VoX+iHKpgfbEstD5bPIC2I5TXY5d53vpqKv4TuVPZl9AEWIwnEIfnE11eggf5aH7j23CnjSNUJwApVWnmFNk9INyMjegWjxo7yk7f6RMxJhNO+Hw2H9dRibhwV/2JyKhHJUkqp20INh7SM2XUPwm0dJAOgNt73xClISncLtIul3ghjrGZ2tMgDNcpCjkMObDBtolCg3DyjOscN9PTqJ9Wf/5ZfJPYt77jnI96D5NKq9SPa15XuHKzdmEevq3Kso327QRUKwkI6QxiClT1RPB5GcsU82UwBe+NtTtyZJcn+Ga519xwRBK5E6mCPCLhQq4mY4v2nz+h23cbrGMinddDAkTSeDQFxxLelp99+sJI28gPpa2AXS5pJnCpSgDtgHicg1NUeLJpgbODDlYN0HGY9zTduZzkJ3c/KUFOAZuTrYLwogKffNn5XZDgHSOuqpCBYdiDgcRCaPMF0BuW6okJY/KnuUWYp4Z4t+6fTx/fLqkMi/XCj23j62kNnEwbk6yPUfoRuCrwsRZmA5fmcAqrvbb+tXG9AserX3b3tT6gVkUxK5XPQlPe6JMleMMjv/7SGn+QK8RlTn1DNVMZwzRlNKV/mdDiZQrjoV2jhCK5ZnthyV2BIfA6cntM8h0q3xyrmbFcoR2LcN4tGAnNuy8mUaI5LewHhnpAfeKjrdqKg7XVpjdAiQTIbHtVqheOIxpou8rFLtrYiRmSDUg3sMylz8yFqv2/vngKNfKmb+LRbeWH3FR4lJAnqFCHWTomXGX9JKz19IkWA2fhs1uAIbffdH4IqERpiT2MzW8MnEN5aUpTMY5Eep9II//89jKgCBkLdyH+EStn02pPlHt0j7G0yKvw/PVx9+OJtwraoLsoebvXKO2p9NmVYfaLJM/rEciBK93yGhM64l59zL37uUzXyEYPjzucNb7v9JjeaknVOuqeMNvP6IWRp7R5umnIQCSwww1lyJomPETzNkaC1X5uqQQBvgTZGHwcFSZuR+IO35w2rZYqnKjMiME3wkgIJzKwcI4ZFJxSJ0F0ncvZWNrW1rzgeWJ8iSPcH024exDdlY+87tTRR5qFmxeAlHHkXufOnFGAkJrEAh77WsvX7aDc6i1p58qtokaOLpbVFqBtuwcfJmnF+riQEbFwjjFTDWpz2AnuAROBE5435gsoIKezm348kE1kqeoUctPCeKjLX6lJFfVBCaaPSntoxXpVm1MwlvdPSwozSxBRtnlnCrUSUVZip0m4TJwGzVWuIl/qnVXw0di7WWNnRm5Qpg9xbh2ltRCt8wlQzr6t7/Z50KkQDiFo9WiREEGR68kBFDVLGwhCyigupvHzRjOtd2o+JFIBeSWfm+Ms6szsCh8k/GwiJzR44EZEnTUq2Tg6AHoiVHc1UhhQqNDo8M+dY9tWqje+CzN8thR/LyMNbrWBoX2rSL/mWMEiVCS408RF7tmAcawK8pyVh5jVtS39XgoTJhD9oj7/Lg7cmjXhQ4yE+BezUtOLHZ2QlDD9vSFnt1GFg015E19ZJbEnn0Z6F9oo3XtTp+w/GsiwnI9sWpO4crt82O//YDu6nxXoA+JcX7e/D1r89ZehVvOloyZSLOmkF78w5PoBYIbHYzjke0j+o9v7I/1QhFoS9CXQ68HLVyS//vmvY2H8Y8mWcbjVQ8gbCj0EmyFmH/vrbb+oVdwHNsFXiEHNlULJkixeNLM2IQEP2BidL+BXPFm0DWmupTDJfQe9SRmnJWNtrs5csJ5N4Xn/CZg25heXntqDg6v6Sdk4h30ng1ucQ5v5wn1xcSBCYEdwwLPiVrNfO5XfTlXyFBk+ZKowMzE049ItaXHNB2d4XaMSHr0EC3ag2CoEOxplVsaIzQhUVVLjiSN3Gylqx+EKv7mmJzm0CuFzBbLrRsmwq3hp2llHf9pHvJQ7we6JMc0VNutxELIRBuimdXVF3v4U9v4lACIJebL8bvcsfSGdILVStmtxEj3gyrsTfGXNbOWBxMwyRJJy7VcbIYrKBQMzdHuTwSZiZSOQtKJdNGaES0Sogw6kxbVwScYn5ePmVu7eZoLPlhkW6WQFDf/5phRPALy/bD9FimGX1aIracmWCtUbkCn4DF3S/KgeB+XQKVDdLrOT4YYCJxp0IJ+uwdn3WNQChrzqnikxoQK1y82C0gf01sMmlrc85p0tXJsTobWJZ4Se1QHX2z9bdS4h7bu3O7CvdtEf+FV9+4OYalmi4XOMlv6aJ13HkFRldvwJDpZ0pe3TVaUnphbYHNMi+dXLjcUCH76aWobwXLiEc2vdRLiV365QLqulzyQ897lSLYhnd8zRxbFghJC4ZItKIGsf1ZTDxAR6DP4sZhrPooPi3C+98Xxzvc88LPbCmrKKlkMyjrVUwtVSEhRpP3GU7sQpedhSEDPYt604zoNJyj6q6//Ikoa7kJATwZZxDFQVII5AfSOTUENk+fb+DOS1fM6jncwpMRMIp3B6zez/vagxBRDUWf/rqnIjdco/GEUMhymL6m/wE8NT5qmkgn3NtkACC53Wvu7yI+OIcT+Px1EjecUuTN2rxNH16eeFbgwAAAAAFEadr2W0zhDjF0vyC8AP1qSWWc6e1QsS83qlMwedWVE/oqMO1QGICj0i6S12xdITl6GTxQm7B3m/ptrsqD6ZxbGEpuOzv0dmAzeDKDX7mW5LnSuVLadSk0JEg8H1VaEANoG7C1/456I3j8DpBb5nF/gMW+juBo8G4mG78sI4Grt4Zm/k8LG5FDcUFNq8hMuJsU2PbofNK3SKjJtcoTynKdqFUgd2UJM/2Wzlycwz4DILfHfh23G9MLAekhuM9aH5tFZEsrV+7goRg9bG/tVOOlGd9BTiLr5loWA7iLFaL5TrCdQ1Z6t45Vnd9Ok3GdI/VcsoC9WXfSFuJIUI8zwp+nNy3xaPonvBqlLCykl30ZSQsAXp06n85uHHwCSvKOVTFDeZIEDev+34kJksShXAELuMi3owd/zhX1gu/cud1PND/jSACTzANSevGK7Jldy/r3i3o1ERjlpA3bmWI/IRVzOEUVwgQK4TCj3AESgIMHy/ccN1IvTtCvTwtq+ckJEDy9AfAeRrBfZvfdLURiLgc1wj5Kn34kiOiHcQ8SvwKphi0ZMct36eMCREp/0cJFWjonC1WuAJGYXwp2WnFsHHR/odWgU99t7CxTPyDkNuoBax9HjC/t5dtVa10aQJHnnAvJLGzmfGRuzux+ofRQc9RGD0tkX9hWV/D7FSbysiJlx9HzJPDQ2kgF0HnN2syWGqq0S23ITARNi0ld5JZPOXZyB2aEMQVcxYLi73oeHri4nlaxA9A3lyxS+OIlBqVkTcLm3Eq/JIKcf33ZIalU18UMfT7t5R/0PfpcOOlpIHXNuRm9v4s1mf1MkhXhJIPmbEABGLU9vw0pb1ZX8DIfBSJjfu6gpTjzC10MEwRnBzclG3hRjg2wd00uEpxyl6M3rVnLK6nI4wqfhyRVnxYAqW2DAAc9HbCxZatFZEj22aUFSKF3tfeTBLyl8a8aWLQi0Dfp6OT0+/0e9chHL2hn8LbTJhInEAbf4JrXK16rewbSnKF3P3/T/xLOQhxVFj1tvkTR1odb01AFiVpVHvw7D2Jan7r/q6xl5jxiXY9NQIMukWP9Ij5o4tCHGQmMDGSSMc4EAgeUKVEuSX+g9irrBoTprcRNrN/31CvABVVKtHcwj+wuEBbn0h9a72Rmj11KJo83wkfxT2rtYELYbAshVW3wL60N8PZQ4vH9mPqOn/DIh3pkbnciX3BLnJg4bRpZr6pjWWBNDMaZqRBB0VzZihHZJR+mbKvIR93sPudjYzfb+6whQg8uaKXMFZ7WoXxbfAZhRsK7/53pI2NcKaOApO5pVfH/bP69Uiihmz8r1HYNN+wanbDGcR8XtLEi+yZYcIB7cMdbDmwYEajtKlnea0T66MX/ntOrfUaJqw4fOHUJ6d2VqEto/L0Y/b47XYeEUCvBQlkKtqYtQ7psk0qaVPfg2bdI+ZSbRwlwI5N9zgnaeG7RCj0E861mKR+m5IwsVWGChoTlly3hIIA1l7jc1OaTu/eE0+E+0EcGzKOD2D7JI6OpAyZ4zMo3Uez5UTgx5Kl10UUK4H6AgF47GFoasNWKXDDiiHvjjh8/kSR5SVMECoEZZ9rmhGUPg+GG/MtVcwX3jyvscNh+/4qf/c22t7zytlQWjsplo4ayd7ixQK59XxhfE1Os0lTzhBacXtwNX8goRdMkGCk1z97Q8Vq0HBoG4RBdDSg4Y49QBfUepBnD0pMXt6VdKUP+H2rItxo1BNOApv8tnl3c0QE1J8rpLFW/TRNeyCIg/u6bBjUMSXnLjjg9hO8PSEbHR+r+6MEAvL1rw058kkh4+5YLHW6+alofDsEcdvXja6Zo8vdZAOUbSW1yrC4FYDZfnhfk0Gn/wLAvH7tAzkTeci6lGrdw7M83EK/GEREgofrxRhLct4KVLsRELv4SP3QMXspOAPVbcYun/5q8v/T3C7+GD/F48qghYc7bF1mghtUvuyE3UZyFmugI74EwlpvHtQJgLXOv6VCij4m5I6e465eT24QrkaibWGVW/1tNajmA8QQe7j2i8EdkleS6ZNXvD4kO0tix2Ms0E28tuI1CrHJHTUEvFvrN8KkWu9IdOkKf/BrLTTY5vXasSALB5XUwPw3u6yxwrNR4+D2cJ9ofS656+fv7XYQZQVzuFOG1rrzHLP5Sx2xbQRroORc6fdh/dGGXwGEhgyVoziMe7xI2onqjw+nAiR8M/chlyvuk0b8zfwbj0Y/OuNMyW4sZ7CJLSvrOEjanPCCS08aWiC6rKJnwtJadOIe0Eiw+WLV/MzWoHYwYc/3HMLNunX20mXvD4xG6fHstfW2aN9XlXL4F0B3avDXj4OTK7bHblyym079aQs/R6Wg5nkgHIWRepsrHhMu6oYPMRxEGm3HbS4OsLQoWL0U7JiE+eYJJ/W6VF2rR+ltvY59gzr5l1gXnyHsTq8ShJC3c2NnXz982ZvNhIMc5Ky9JTIzsLMZZkosGlK6upRXtIDUefM9zXXZm7y59IOipMaUAMW2BZbBIHpK4B0c5cq0ymMUpecNPJignKOAuqJZEDA+rfncrFoTBYUB7Qkwabd/tclrFwin83ewHceOOB1kB7FDzqNiQhISfJ/VttpIbhkFStXBhCHIKVTsoiTbgzKqYIGu2lPBMb+u9WySzVx/1pPhaSbYJWiEkLVyPqyBLXSOcfFhKcXC/4P1FmqdPHYOKIJ9ub+ErmOfGCFt3BProuM6ui3ubdZWTPIfXQaXJqBF8lb11BfnFv4B+uPl7uoyMRi05XghLYnpDdygcS6U2RZ3CjE0nQlA3hz+hsR8kH63fP5VhZlsooBk/dwMSRIHblMVW24570L4QUUGgtVdmeN0QOe2X91uZ0FAH4CBy6SbeWUdXD39E8FWO4jx1slqZIJuZ52beXIV8M3w9DnXnu3NMoxVJCQgHWIQ8RcRHV0CPgpB/7JrYkOWUl+BZ2mPjNqgjUOt//iS6kRBu8KmpeEMtYAUvvYjJ9v+tAmJyDI4DteRuLwnuApWOhgxcfZiu6eJdTlDUvL2/eZKet79t6YcJSNbTFHkFN9Hpv4BjV7Al64u5qd5SoNw8aKUzWZdEhJ/7j7wQ3SA7sXZqgd36xlpAyI8jESyCwAGmpHwzSGSzpd6qrYmeGhnoCKeUKqSY4tHGIQaEdaTRus+ofWSMFzEu6ZQqCl50VX7FMBMCH98VS8vRgcd8p+LZERJcMj6YgtfAyqPJ52kjS6fSJjjSifsKas+XIHVMgHGb2LiE/sbEHWWwwRs+IFG2y7NA6twSP/i1HLpk5a8ZiI8q8YLLUtL1hXn5tzqt3ArMyObQRPgKRL8FYRFDnVpJlHat2zoaRwNVjGl4RjpO2tL7gGmFsTQuowFIYL/UoIHDExOztx68rZoYERJxgKmYVO3WjCdlMn7faO143MLTqeYcCOanUZLDEwMBs0avx6xuBNkdAgezX9W6Zvi3Inm4PMV9QmzEjduJK9Fz0fFJ+YJx4u45UCYL62IsCPBvj1NYW4whPSRQNF2nsESaMQEosUvlnfSNHyx4h7VOJlscnB33umH2Z7Ty2J5xa9X47oJvfAywoUXDTEkyEnXkQcv1UDFuEPTjJzRyAAGVlFjyVY8l8nV8hX5MHiUZtd8FT5kezYOo2Ig+pN++KZpsmgon8Hm/vpkuXimIEHUZM6Eothd6GLBH7Cs40lpJYXjypmhYnDFslH8o4Pb47EBt4mrZZEfd3KHlqJQ+03m9PiUei18dMmbZs5u7VdVk8Z3IML+R/PRYwC9HzxMxUgk+g9IfEVVBGNdLZPiZgtKJbmjGt29ebWYqfJtk/5NmCJTRlKP4BKk2d6XaqKxVIdm9mtLeEjN8/FRwuPlXxcouwjnvNTqLidWVYJdQn4vuOtoZGo/tbL878OOr7skrHJCL0KpiuIaP33lfiKOXON3sFy4sCeGFy9MkqMXCQ/5uiQX0JxgORxwjxYjdMEB0PaDmd24GPaSg+0aRoUwVUvCnqt/XQWUV8mCDANs1uAD7wabAgw+/NsGd15LKg1JYYYDVKPzybbRNHjmWNi07wiDynvVJJQZiM7KvIKsdOYoWhbLiv/2OUIzWtcSVADb4Vl+lmvG8K6N1k2VXBSTBQIAI7S8CMHnPimZ4C80vmQLcTtXC2w+n0OUrU7FwFZkmwaID3h5gWbBg+XjkL+KpGL0NygJ1NLEIeMhVnJczP1PAOQOvLR0zoHQ7nIkPNPW5OtdjahwQ97tdLlHzgAIycFJBZUbJ/7CgD0kqggBPyxayHAJSGKYrO4SddNBCrXXaKMRFIPmbAOs1CVuwDRRtPtC41tFpAqi5F5sDwzjlSp74XvifqJZpCLN7xq78TVuFIPmF9QzJobIONbIDnV+NgBTT7F/rLmOZksffk3tpiRnYIUnaR5Rvk+JFH1sBoKstOkRli8NCx/KILfBs+CaqUYhRYdiR66jvvqNEkIwJmOQrvfaR6psQiWUSUSycLS7EoT61y0uS5J693U1G48SuybGPhVlvqoKh5/eJMcU2huzFTgKVR/zZU/7HiPBfvxWie93CkhDUMyuRsC81N7xHqQF4qaAfquTzZ4xfz4hZ3kf/kO8rTfYjhlkZeGKvp7Yb71nlHtPgsWBgrbMCY7JZ9OpsZSm/e+Atuhw57uIqoQ7K7dsfpbQAc3iRSI2xxoI9bWUIowy1nygkJVc/zU50e/JsHCJKFXjlX7PSpbU31LZK/9CIr+dl9qRj9v7g0aRzJ4VUmJMj28OmE3SKr65CFKSuAa3VP4qZgyLJHcw4q4+rBlDa3l/4N5ApyEMDX01Bac5QozYaCl6eWEnT/IFwann5lQE1sKeAr6lF4EMjYaCEmibdXDlG3mut1Btrh2ED87LKxioOeC5LNbR4fx+RUeZRVsG5U+9X9Wul/5Uv1Gyr1zu26BTkYQA+P/K63YBwu/yvQZtN+5uZX6fu63wGDik1tYhVvBMMIkyQGs1TzDFdkjVpXUwCZoHnK2AesmW3y78Nqs0MRQU+AZ+ocWaM41V0o9pgZgDsljFhWI9kZRVEvH+M2R/Cg114bBRv0d38dqkHfSZwJKJPc7TJoGMeg1t6zMVPd1BvBVdclJ4CcfeZ1MdkDSOXc4wQBWPHHrzGzJawZ+JycwUV/d7eQ45VdawZsxwfbEssadAK4Nkzc9TJwS7xcFcQPDP00UdrWHcZV1tJJGxpWBK4KHvPNqj+aUIYZbqJdKX3mEeGZIPH9AvlKV9aUHoACwuWuhOf6rSgc7Q6valVwefFPFR3D9ROykLuNNt+/84DWXtbUsmVXJVlLJTdYzBT7OFBEPKR8syXOSYhSMA1cUfiDkJxbxx6nX3rHRzDcnxLdU55U6BjyVjxtgpw0WCAtyBvbV5JXn4Bpzh/PqTRmE6Vrm3gW7bbdovmGSViBdLfWUrDSXIhI+Be142sfsvmH4h8vBKoHnChO38nxtXxjCHFLRYfGtX2N/8VFSUyZ6NI5P/RY7utxHvMNaNzI8gyt2cbXsZeYuxm8IrHvKzV32eXUDzaikny5u8sk6csjt23kjXm44DhaR3HizoxKCPCKoT1T7XdCWNoGZi23fnmh4i8bN47R67ua9QhyXCBbEgow3iwvQnE/ZAOKfgNzCAa79aLTcOQSmHXxA9YaiODx4erTMVp3FIvjs+kqNRPpu9eoo6H1JwSM1Q8wphNAIFcPxb0mzGvUk44JAeHBe4ZDE47S06IXXwb12tFIKU5TpS4hmXXsiXfawhMBWWHL18wSAPAne3RiTGueRFgtyUy/JcMV6fZ938TuiXWpUWSbaKV/4Em6Zrtgzva1wsOqemyw0+lyjiOhwB+rjza2xxQxsRljRZBISPBCr8Y12DmEon0U8eLRLXfd/Mcyhtqtb5FS/d8bmnmZJJpwRN66I0q4X28uD6jG85cMGQpPSWAQAiIWJ3CBHLR8StYbCboeIJZ/dG7C9vpSjs0xSb7qHAQ48Yw3B9hFteBOiPS7j/68VEdvpWW/tTKx6xMBjTfG+6HU/6A3l2qlk6lqHM4lEYOeqkGdVmI/KXNqpo9aOKEDdr3hH+ZyXmF5oOr33KCR9MfWOQR8Bzf5tm1ewnjqbW8DPWv/Km0alynsPqMRNFgy/DLvvJ5PdbfnjGEuLcE2BlGaerBRERpPXaEuNyHhnlM7kW42CQ7c0bMxiLZPDgx69JGNjsmkJPVMlPSuaWiGZyjkTvreGD/WzdKO8Noog/sc8+XKpZyNZ6l6HEnRYnWi2dPZn2fpNczp2uoS4y4LkH35DOtsSxPuKgqBLDc3auzny1RpB+/n7Oj002HnfLW1V+42z+l+Ac7aCINevonYbSfZD184Grpxk0DuRLfZYPG1JUNgUkZOOidYl0NIp1X22iOXfBbcWEP1NnM8m00zBKUHQxTe7eMpvkTaSnUV1Qbz8f+TeeAG8fLPvHYBRdmLjBiGv+y7symv41MR5BJnY8z7nRcxifrSxepeFivaSdtdxI/QOubOx5xLBG8cVDOLlGnyidiLRyp1VJLaoT0Bg7IAgDwV/VP13z0pdXZL2W9R1PqitCJshuC2rZRwRnGRGDZe3CTUqOWB57tDz9mhS8nkQWZHaoHymlI2BOhhG+qCumE9+sGS2BbIeIPkKcGW/gzGgQOJh+8vN4DL0kP8f7rZh61d77b19wfK6731op8LiFhYaJSOWq34kCQnS8/ac6YcpSCSLCwwCR+kZBW5PKoD8z70MQcxnhNFcSZzScCCx0lSBj6ZbGMgvYXhA5Tkf6BvRWG+C/moGYY+sWDEx4JEh12B9M6I2f0cdjcq+/04C+86OSQM/DTdGbX3w4BKqM0ss/o3ehOxhHjQHo//gh/OXyLu7dzBPuKimwBI/uKsMc0A64T/UvehSlrUUmRS7h5y0TX6jFF1p0p+OPpHG5Y2hU5+UP93davf3/WSRJ+1eGAEj4FEAwzshl4b9IN79zIolxOoJXCESJbvHOzLxzvB4K9H1TkDywXPPXcGoZxfuymZbbyzmKn81CvRhTCqvI98gc7D+xC6MTv6NbwlvUDIgamgNeGrp6fR/+XtQ/CwnTendZbJdxd5fJiIkvMFuO4Cx8ApWAoeRIcFG5nPCSHpXDF7UA67aTPXMqlUyKAUNH1YExYRofHaSO2MZqDvxLD6I9SeOTez0Aei0h/Sc7Z2cbXb2iQT3t4voWpPKfVjiECswAyoJzqJEJRvsbGwTrPHUHtdWttNxzlva3myY/vNoXqvJZ72OlaRfUQsy4Qg0jVdSZY4rgFf7jpse24l+e21sTQmHBnYGuiy1H0c1NbYSCTMp69R3PDOAV5jqtNxTeMSsXmFMyMtNPDg4ym4JNpVFmgEYJwvDrHDwKD+nD1mQpi21bd+MSoQdu7/6B2C01MgKDcyjm+Is/T/f0tVyUNJWsZxZj7VWdF9eWsJDzAZ8pkJfZJkTtfbrMQn1hBjHcrL7ChtJbHhZfWn216DWaoHUTm/qb+mI3pPpWd++BYN19odDYkxoN5bTmTBmzbEixJVxUP5DxohiOCxrdpYupJhrgznzf+cov8uQkSZSEnbKfGImK/IZFdqaQAL9GTK6QogcXw4D3uYWSZOHK4+QGr7PQXZVUvxJln0r28sEQSv/2u6nxJkVrmPIMZf1ycMXDEXA0Sz3jPZyFOBA22tTimVsEf6xdcdExBdVxz/l9Ac76m+7r0c/RMgQevSIVyYN28LlB/muIe5xzZjBFoSqQ0pLC6uCJHsaZ0/NiP2EeZU6emJApfOfW611acq1ugKLbOSsBBb8C6aNiykB9TyJ7GC+HfNRw6Y/jt1V+1iHhMgAW+ACzFNTn+rtSPRNP5O8SEpJGRlKXIphqNQQJ6qgND0oEiTe9uAhc27J2qkic3aaV/KdIhaHNqnOfp76t2gzLI1jc8WBNJCiHIBCLYPAAENB5v1SIWAwng5UDehMpf90OhvhR2r//Po2XqCZvfEpWvAo432IR8K8tJ/pWTHYDkaXd50t7I9GX+0y01vGuIVFaG6JjbnlPfi0h2Y2wl9iuLwYy+B0/IoFtlF8jnIoaj56zmXaavm2rq8UXoXZTTFqp0WGwjofA0q1+l1bdkZgVQsB5M1VjOUVA/M9dt3Srwuu3O+j+q5wbdFxAKyhvPv3ntSQViA99osm7GK0Uo1NA7XTYQ2BWAJW1zL8KCeD6/9qOxAA+dAeM0fM1YEjISBm4DA2AH1atS3s7p9OqlVYs4kttlNI7Yu445+tZf36WAFPgQEXgvahmRQdalANzniXve5e8YlUQAAfPrHBo0AfWbh0ycE6LjiKd8UG7s3UlZeygXXhMhbKjjERahgFSSL9v/Si1G4WNoyLIVWqpGgEJXHzHx6n9hliVI4kL5rnYKgzKCBU7NCBRTN+vF1QH9sAfBEj68CGijUbYkGK7mNjXSTdHq2j+UBlOUOZ26KAJDSxs6KIM3C8HorYQMVR64BwcpFVusNti4NpnXl9Unt2jClTpI++anMjgZvNAeazZn3T1HaazYMSCTSFYRCyrq/0zJ4w2AOvE3A75gDXf17UiK78ZgP/t89wZ6nlIbchc2U87TbJ/mTsB6y8sYFwnYgJjQyIz6cwnLnO8V7snPWw9oLDcMJP9gyg1svfLa9tFct/qRewJ6TKIXj5IYoxLDDaiPv6taSLf4gk2hbO3ENHhCQfgLNKpfBwZIGYnVopqgoCxcKjMbYWvHEXaBbaQHFspVzs6negqFKKB4ppVS7nYb8FIxnCcStfM94f2+rIQkclNtg4Wpb8ncvnhudB1G06On1D5dw5j0TatAGeTcs8uIBZNXemADquWdK0q20o0m23KXWUPJz8M7wsQzzWAPX2oCZhsd+zhquwHw9XP+ntRymiQGpfBBCX4rcpMGt92StGGDd6kerNMSbLQQb2rQ5Vab5DI2FvZc8GiWpgCQIDI4mLJQlfiG0V38OMQC3jOHGfpK2K2PlXaiKwXD53tR+BmqrsYIE3h6DaDpch/o9PLtfmeY4oWtaAcO7WVEUpgAAAAAAJv5em1jCuFKRG4w4FWoARWFALo3CNqQ0GxNoiw7zSl0eV6V9cy9eThDyvcTx1VrLvsFuCEqheWPO+Dse/sF8gPgslTwQfU4MfQ1TfJWXC+ljXk9H+mNvJTlBKyTx26t5XmiFzyOMQf2RG6e5lfv52jN0uG5/L99I9D0LTlzkOPOgYbAc8aLeIt4Dr4EkGu85b7nZ5vS40XQ3kXCmyBT7JsjWYL0a/eKRwo7PBqlYfT51opSMwRkGkML0lOeT4vUpN+qcTKrFZeerdoy1OkI6hezY/mUXLsHmcsxOHjp3/dk1LyIAG1JnL5Vz+WRhxFkOWM9rvwwh82scWV1ut1YTMzt7ljTN/ap1/xaLEDdZNpC85RTsxIRHl02mxUdHBZbsoLwuqMC6BOek92IOHVOEbHELv7WSs1Fg3bRc6ULrGB5LijjrdFwAAEhSWqZI6O+Q3vaJYfUUtwnNgqap9nSqnv4+htWzJS7SAppf87LGcbQPrbZUcgUwFcF4Ln/JBhSFUN2qrnFeg5h5i/hQvbJrG6CfknWAbrdrSByxDWPXQzJHlvuPgCL66IvCPjn8rokfackAkOiOjzAKdsQGSe5xgWtLXUGQLS2Q62g7JrHw8MoOJzv97i+0eCRBaQvYd+zvwwSXjVIs3s5ktHnw88kDac9EHK6PNY3LAM9kB2SWHlZ05DNupGRS9uL41+HbPlxxcIq0E1dSADC8DHcBZPkJjhgaTHm93UoE7AHOY+OdqtwlHcCYSirvi4t6jmLjHVMpdMYxo8xOjunzyZTH4cAi/OQv2r1er0AwQ6tRevngb58F7g1r47XXbaqt9JcEMx9DLVubcqp2Fy0gg5NxTeORZdge4UExzrZyBSWPg3c4QL36ChJxKTRtw+7pHwIAAADwvuf883Y48DoLFRKtabKr0uOhXqg/VqLbRm3zoCS1fggAoXKXRM0ynGuuhO32ZeOcOocBGCts5kynzL2UiXzKrd9OLBQPCFuhjnw9V7tSEO7yyoHjNx+ISa0Ud2+NsTXVd290Ah3an92H1BoJ7cIj4gZ3sJ2ytLBjFquIHPfW4FEEnq+HKxPtxQOyHE072OUvwC9WmhIaiBG/KPXeq+EFV/R3rEFwEXHA4w7FIt8gorAHVgS2RUGAw/WRloxjNNOxdGZPYYhbGRrhEoUoyzmIfkor7GCbTXUO7+yYEdhF4mk1gYd/fViievyRYMJRVX6znfslRtodE4NVdjiiazH7tn6Lo1ou9NMMl3v6XKDjGgD4jbQ0zm+/AjtJsQ2wg3e3hfR1eg/2gi9LiQXzHTt3330XV9NNlV4M++TN2pfn3PXfc/NBSkFPenQWRYQB1FBA0I+IS+tuf4Cg5SMT5ZydCC48dXQFoE7vKPaejHe7vuqewXchcHoC8gAAHm2GC+dsmCrfFq5ohB7s2lWUsdrcYLVch/tKfdfUPrCV+X0LpCcvQ7jFkW9aI/Yk8MjivLuMWhYaxHj/pT+bQS3aHYnuzOlIQkEzMaeHnzd6GS1yYnkz5NTdfnh1MQMf60oDDJgRUgckPVJwsrpD9cNN1jzde/3pw8JqY9QNGNvLBCCiSkUMk4DdrNpX1X1UdufUsxxeHB4dHfMFVUpHlhQh0AUhohGSneZplJd/EEEjABNH/rVnbw62xAvmloKE/y5ntMICSgarLkNLLwMJT13LUwrl0RAL29FjYj3Ywqymu5j7E2pe0y3Hzo5t3gcRlO18S7oluCGj8OocsCQYlKg9RVpHTQo4bYUzm0zO9/KMKznN1k2um53e5EyJnA4/Ssy+qnxt9wRNT+WRuKGZVghZz8hPJljEPrwlzikNoQkpTmJgki4fRjsLn+UTY0yegi+fo1seMGZzFf7sYvDpWRHpXUnODXPu/3/lPkJO0qcs33uzBZPkmMAAjlv7JTvu/TkT8RBmiBbgfjSwhSHxDd1kADFqSF+YbfRwGCd2R1kiUhBjQ09mXoNDYu8S94l0HzqXd24Asu/vq+cyZiv1RVIO6uJ/zXJzCVnRhVjFjBDgY2nWE4h3yIXVMe6fBOdX4WhFFbAqJ3OVuabo8wuKUSmYAGT2wO0/T68zKjoM5nUUbDVH3u9BHdTLsN8MXmpx1aVU9ev5+biXf7K8Y5YhqIlC1s0U/YHV03tvNphWJFWTHDMWv3xo+BD3d9WiJSv9NU7e+f/j9XZJa34lnLIJ+SHzB3W63wkF3pNRku13E1/1fOinSvI7SykkWFIUeYVQO3Q58F+J04TmSWodyDb3yQkbvhX0mdgL50fBsPK6L58CpL5Xgg58Jdvg6XvoTeBlRYJ1X6XEDQt1hxct3JCI5O9tr/wWj7k3nggIDGxZf14YOsilyCacHHB7PXJsXt7d8m/MgGt7y+5RvA+XZTp/h1TnCJWRoiNknJs+3B5Fengj58+3V3C7mJcPGX8hcSdUMYVT0fPZrMII9o20UEbLMmBJ0djGYdBayIPMjWBuHURunMAoCAOBW8mAACm04pAEz6uyFKz1sS2YguZkxss32N4jC2PnF/jIXt6x+WHkLOTjyCXAEZ2v40ZctXbXPIutzppmOKDxyM94PcmQU6vTgAJpU54yFQrouwQqWQf+1GhT6KvN9wTe5EOCVJnegDmbsg+I+suP50MIUJ/N3cJ2kH8yKdkDHb9cI5fkdgU7yIhe3iX5HcDUNevxzDEoCZH49QyF6G3wXxBzKKDHzspw+gqX+L+EpK8jNmzLgU2xRmlYb/Tz9LU+i5zdxY5vVloKqB2Ct5AtK7e9PAzu3PHN/QU2RkttFlDadiIA4MFc9pYoCU9GEheL7hjfrohakpWfFCL9hMYxFE3v0CkTUijsN3nio7nTiJkV1t/UZpVflg/RIG1Y19ibW0X3PyGci9vIQZkU3IPHcNIGe62Pzs5rsvVtvm/QmAGMLClML+ioL5idOJvG0wUXUu9aRNH8vhArwLB0vaGysoPigLqqkxVs9yTbzYFYrwg1EWuGXYRwgQX0FbthyLu++gD+93CaNdiqm8AvogY9+kMh3H82UGwRPnckSl/1CjUxGn/JQasP2Bw8+WxgLMJ3C9+9ILNQGAAAZrmU8rxfx8PzuvlFt4aJxEe8PrGh25ygCvvL+rZsUrjFNx2p0jJz3APY31GAyEs3byNsyIpYDIfI/hoFL8cJ03eBG7SbY8Po9IbGNHTVJKgCSApikEhiPWB7GhegOilwirK++F7Mu71ApB5kpqyR27gbrxRDDjjtAdhMKn7inwAxT3V+YCxOJghKyYfKQfaXH/elhzDckPJLhjDOFpXqBF2dYGQIntAYArzCs44EOIdsr3OFoiDcMX8B0w2oRe7pJe5Pu23HGbntyt9P2e0jC8mdklKOfYGSqWiBzXTz2Som3Mxa51owe8NyD0PVxcIMsSupxRKih1pkMNwENT7IAUccJuVkY0h0stVogF/I8ACvAqA9Y2m12JqWMpD47T3xPs17TV5nWR6RxJ0bxg0BgFLHhhKBE/uGgvbLZywRir4BStc1ZQ7sg7oAo6WaVEx1oQzohijLLgReZ9fbTwYrSExzxYYP/CMSMseHFGbMHgt4bStZx+Ky1fiajdlHm7FEHpRe+40oSVEJ2aLbsMzZGYvnk7kCsCl2nkjOvKRbzfW11ZnKFupC4FMI5JmtaqLDKl8cWlSjDEe0vy9ItvqDs2h6/SBhO3SytfNCRu3sB90hEUeZdUqgoUucbFyvF7lzW0M/LZ0tHnMeR+X17o+dqt4AAsFYGeoQcUN/7RtS7bos954R7MHmb75RRFrzFJh7AyvLSgmIpPKMy1Ulvci5RW58KJScT0I4vftR5W5pYlEbRk/QVEq4oN8Y4q+DQ745d/kqHmqCSzIUT9M95AfHchutOUQVz1GDjY3Cfye80DyR4gyju4a8FvFsVsfkY9ivYnb52ktSv9YNChKh30nwM/xWf6iHVCJYT5+cUVDus4zyScDG6wgFp/OxzHeB7FyPB6iioTTDNkY2uLJOw5UKdwjX4LBblXBpZxVchrlvmiYC65pXZ7Mdrazw0Z0NMTp/YD7j9YHf9RhbnZWy52eg5d0dGtNxOvZU8RizpBDMF1RA5/4xM1QyndDz2JOoQejB4hVMLi1rXPY3Ghfp1crplAzd8ACpbCopG22iPmev27BcMPiBs67XO/FPpcQETlsPUdHikVE7SPXTWvWmwtm7SO1/w2CDIwWzhEhDB3XQTm9rMEUpX7j5xtgBduWdeJ8KhEx3r3ijbtNpNOhTmkqKvCzFuuqYdbfLyRN13esHdeNhUmhHbTNxLsnCstVcVttmigL52BGH/1bh3MyMsev24pmXGlrJERz5+15++mO1v+f6CVHdiWtGA+AA6HlPz87/7qzN++XEolFBihAzxAABR824LVt3nQ48ms9kDSN04aDEOL0LOdaUPrkaLRpNsjejEMeFvDxa4AohkuTy1ngca5J+MB3KdEdw8XXQwOrige/ZJFaLbpD82TDjilKBk5/Xo1l1NgivA93XpkEKqQ0/2t3jvATt7re9SN50ln1c89vTz068bO/7jp9mamTO92fxnUvZbj3N3X53gRjOyDg7wy7dP88AVFf/JVFhZoxOYd/YPioI4ltFiCJ3q+OcBhhghbD1vB0Z+TYzDrcpVHvHqurl2KoO2F5xvRQIQt7AEzGdEBDUXswEFWVWf8Qi2BatWtX/wbQ2krDbjxiCeS/jfRBWHJg9TD4ZaiB1+7Mr8CnF/lZRFwIet8eJVdHLnCLuOBg7y+qWaFZN7JgR92rNQeZRcMSBtvAfPOEL+enHcrpcSftfxICHIMcQoSwBPinrUTTPuP03dFG9d3+dxFtwXcOZ2oYRIbrQFsd++TX+SdEVJsm7CkTMdTFfc4oynknGLwdvzdit9JD4/3AyqyXoB7pTmvNa74Cw8+BE4Mch1M47dUpYlGIxfYlgqta/GI1NTIhY8GNBzwWyZgf19xvIvXUl68F2V2KZVvoUh0hlvvCT/oXwT6GmRTShLRQioENYochJ/8onhOdDgaGN/+ABnYa/q0/CRUmWqn/xZt4GE0P+fg/KVvfVzUAGY6Kl8RIv8cwa6zcFcoyHS5D7Bf5An5vJwhvIgMI56JAzj7apzLWrFGVsl3fgU59qaQi/B/d4V3sav0FkfTXLtEVodyJJb32eB/UA6eYgAOK9xtxrWy4O6C8pgxM0nVnqB4IPcG/Qhbfx/BNOdSn0X2ByUiXQtH3Z8ROFjdwlO44m6+JaQstAtg7GCT96UZ9/u6a1luVJb1pulFpd7Go9fe2km4IhO0PUD2fPBGnsDmD8vZR29LM2xL3bluIi+11iz64a0WQcaaEmWgtUpZiR5n/QTbDmXtXzfZYlOwgJUMavwxOTbf0xaHTbczgSyWTJvTEwcfm98xG8LerAbeSPGVudsM32mLa4HL1kjozpHY0QFFlCge16irwxAGvneFfeKrbGOanFY308X8py3y3vy22Hz1pra8YgjF7B8LsS+jjSBxueR1ETXgXH/WEbKHBv85tAWdY2CnVUsRZwAHRnkmjrpj6kMdvvt2eCtLoHK95qNCMiPUuzZW5uGMbUh0DJS0e8T2hhLGEvI2j7MDkOigrCJCV9ub1bu06fhlNH/zqLPeeQvFplP9Wtfm6A94/85slqQLYUfrzRN2n2eNXXiqh40TOwlmd6Eh9TfJiOwZgkn5EY7ENVtGzDKDuJ0Ivsk0UxNxqZEby2c10WSKbFx/UXuZ7kTMRU2DYXPzGEDXSRVTklHE/XWyCsgT2zXGxmvx0TtE7bLQx3SEcOAZbGQqRv+NvBy2LeiqbbSzunOju3VgR09u1l50MS1i6aSpU/uq2tq9pcz6Cup8EHdPzROT1AH/CAByuauW6DWMAQXdDiIHYAyUEN7+Y4zHSPs04/+kOIMH8Eb6y6JrFHBMr56sMQB5NrkY1r9PzpLUpHkqE/GwR20fppHakcaEVmKFrVmfzLbUm4BpAAsI7VIRLjOgMRderNfThB70ItHblBo+Ua9J7/6uX1JLldkxleVHFgyQy+PV69/M0JozpcPq/zOEpiIS5IG0YBJHCV/HTb/YV0vcih+rL+dEDCLBCbiK52lZTvUzI4rOSWRsD0EufUHtRX0XLr7wIXM6Z8X0x1jGxqfrAUvjeJXKKAkWqUczelhSFS4guM4sOU4xpx48+xBVCeY3TTZwX4oJvDp/3sq7+ebZeklndIK81aY6wdaS5IC2TjuHHI96RlKwIkckQ4y/cO4rU5bbuxMsak+k3c/JZWCrDjs3O2oKn+rR7Sm+8V48np2hK2zGXSSkVEb3TD2I96W/lq6f4lZZgDwkV/Wmf6mCAlkyxep9WKOm470S1RAmHF3XQy4El3Mssvt56Cjc7K94KEgfU/m0zmo8lY57lRQjV2MpsBbqb858o8P+IcaondkSUOYxG9x5+HoNYpTkgCCw9djQflBQpQ4CZ9oVUVOcFBXXBhj/uhxXR6dpVhdyrRXB/RFt44+WvRBOWGKGf3ogfTUPBVPCtfTFJ8jkeN7fOM2c9nBPNFqkeIWaGvqnKg1lrPncb2a06awC07akx70cABOfyjYqxuU+2EwOFcgfpnoU9XU/NTzwWsHdvZ3ZEioKXCGpsvzQwC8ht8tg2yHp4cMFHBpJbojab6cHBLADS3s851h/q0+OdGnEovmrGcDtH8h8VQe5ypEPl5w1sLdj2szxqODw4ueF/Vi+FFcb5Y+vqaAIH2fRUJDyapfmEVtxWWFpEZZpbZ5vut9f+E4SxAPQAvfm3SVY0RSVjuDpVufEx3tD0m1JghmaHyiaFQPLO6iBlsebAMze0e3dR+JdjVZ6E4oPFHD4j6kfSjpGppnT29jpclLiybmo+WBRJ5F9tX46QU+r5y+z/0WS9WKrlmkMsstzdnZr5q8DMXvSqnkGe0/MCt6sHrqloyQPQARhCnopxaEYUm0TCCubCSootuL1W0xd6qM4C/DtIGTEe5CU1I1eOAbSMm6HtieyBxsVqn3zgbmABzVw6B794i8us956afpPkUG8TtjUPZWf7Xb7KJyPBH2tp60jsdb191tJcxaCr8EVTVHAG0QG3HwMO21DmvMh/BAsPs1FTz55wx6JhDRlzOsA5sNx9sKpI8ztacUojLIXKDmdztflc8ICRbDY8gYKEkwIJ30M/b5cHM+TvWAF9QeulU+5OQNtUkt7b2QQsEkHVyX5QDWcZvbQSzWnApmdnPCTXxezA5lFCActqx0wkBwpN4tV61yeJPOlqsVtkaEq1UFN4rDjk2nzE2sqUNYuNgVeYNtkk/D2OWAZMFtsOt/MU2+DZhcdgyJho3uSGqWn1eA/JmAuVjGdCYkuH/+R7m4QGWfxbZINvzq02aFqUypDBbkAVoPQ/rtR5CJTcfX9o87qKmDDlYcT+vUAmqiNQwyJr/CoXAh3zGm9OxsuqiEr0867vteHT2NbdjlRtDQk2cwX/vWVcecQCYeGWL5GQX+Bz2bO6TXdxE6H2u90JsH1uswZtpUxHeL65XPR4oJINfv982pBkqVA9LnACCrWTLDoc8HJ4K+L/l9FsOavcjKnE6ehbunsdr+YuDFGTPypXKBjoa2/VcD/YjVDjPWgQrQkuKE06BVqcoddRIeOXL/uVzsiV8sqrC++jxXQpEa8N0FihwDwQybKRulWSboAdWk7dt7bWVS2UUmEWpjvk6zU+MmwWkuX8J81QSTzISARiQfKtvmzJznX5fFWmbRGm/zGGGHJRKVvzejSE6Uig77kLqDMd+HhatGGrSmNbNqHSIwzQAI8fLk/1S82ZOkw6LbihA3qHML9LGf/mrKVOOAaI09z748iDWTzB2LwufufTARi7l7rTeHfnZUlHJXYy7BdhJ3bsFYlIB1LJPFcikh2bJABYxH+K6riwKk9Stg9OuFXeCdCF8jyMJdaVcKWAn5cm+H4o7mf00eFJwCSKTa9yD3BQAJTdQBijSn8D6s+Ud/BFHUIPc05NU3xduQgmgkAAA";var ze=N,fu=12,lu=30,gs=3.2,Ai=5,Er=7,cu=3.5,Ao=fu/2+1.2,b0=-26,hu=1.6,ec=1/120,T0=22,wo=800,Ro=1250,E0=i=>Math.min(1,Math.max(0,i));var pu=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,uu=i=>[parseInt(i.slice(1,3),16),parseInt(i.slice(3,5),16),parseInt(i.slice(5,7),16)],wi=(i,t,e)=>{let n=uu(i),s=uu(t);return`rgb(${Math.round(n[0]+(s[0]-n[0])*e)},${Math.round(n[1]+(s[1]-n[1])*e)},${Math.round(n[2]+(s[2]-n[2])*e)})`};function du(i,t){let e=n=>new Promise((s,r)=>{let a=new Image;a.crossOrigin="anonymous",a.onload=()=>{try{let o=document.createElement("canvas");o.width=o.height=1;let l=o.getContext("2d");l.drawImage(a,0,0),l.getImageData(0,0,1,1),s(a)}catch(o){r(o)}},a.onerror=r,a.src=n});return e(i).catch(()=>e(t))}function A0(i){let t=document.createElement("canvas");t.width=128,t.height=512;let e=t.getContext("2d"),n=e.createLinearGradient(0,0,128,0);n.addColorStop(0,"#0c0708"),n.addColorStop(.5,"#2a0b12"),n.addColorStop(1,"#0c0708"),e.fillStyle=n,e.fillRect(0,0,128,512),e.fillStyle="#e0202e",e.fillRect(6,0,3,512),e.fillRect(119,0,3,512),e.fillStyle="rgba(255,255,255,.08)",e.fillRect(14,0,2,512),e.fillRect(112,0,2,512),e.save(),e.translate(64,256),e.rotate(-Math.PI/2),e.textAlign="center",e.textBaseline="middle",e.font='700 30px "Space Grotesk", Verdana, sans-serif',e.fillStyle="#fff1f1",e.fillText(i,0,-2),e.restore();let s=new ts(t);return s.colorSpace=We,s.wrapT=Yi,s.anisotropy=8,s}function w0(i,t,e,n){let s=wo,r=Ro,a=pu(t);i.clearRect(0,0,s,r);let o=i.createLinearGradient(0,0,0,r);if(o.addColorStop(0,"#0b0709"),o.addColorStop(.55,"#220a10"),o.addColorStop(1,"#070506"),i.fillStyle=o,i.fillRect(0,0,s,r),a>0){let S=i.createLinearGradient(0,0,0,r);S.addColorStop(0,"#2a0a12"),S.addColorStop(.5,"#9a1422"),S.addColorStop(1,"#1a0808"),i.globalAlpha=a,i.fillStyle=S,i.fillRect(0,0,s,r),i.globalAlpha=1}i.strokeStyle="rgba(255,170,170,.06)",i.lineWidth=1;for(let S=0;S<=s;S+=50)i.beginPath(),i.moveTo(S,0),i.lineTo(S,r),i.stroke();for(let S=0;S<=r;S+=50)i.beginPath(),i.moveTo(0,S),i.lineTo(s,S),i.stroke();let l=s*.5,c=r*.66,h=i.createRadialGradient(l,c,20,l,c,s*.85);h.addColorStop(0,wi("#ff3d4a","#ff7a3c",a)),h.addColorStop(.45,wi("#8f0f1c","#b3122a",a)),h.addColorStop(1,"rgba(0,0,0,0)"),i.globalAlpha=.55+.25*a,i.fillStyle=h,i.fillRect(0,0,s,r),i.globalAlpha=1;let f=Math.sin(Math.PI*E0(t));if(f>.02){i.save(),i.translate(l,c),i.rotate(n*.6);let S=r*1.1,F=22;for(let P=0;P<F;P++){let D=P/F*Math.PI*2,z=.055,X=i.createLinearGradient(0,0,Math.cos(D)*S,Math.sin(D)*S);X.addColorStop(0,`rgba(255,255,255,${.75*f})`),X.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=X,i.beginPath(),i.moveTo(0,0),i.lineTo(Math.cos(D-z)*S,Math.sin(D-z)*S),i.lineTo(Math.cos(D+z)*S,Math.sin(D+z)*S),i.closePath(),i.fill()}i.restore()}let u=s*1.08,d=u*(e.person.height/e.person.width),g=-s*.06,y=r-d+8,p=y+d*.04,m=r+(p-r)*a,M=(S,F,P)=>{P<=F||(i.save(),i.beginPath(),i.rect(0,F,s,P-F),i.clip(),i.drawImage(S,g,y,u,d),i.restore())};if(M(e.person,0,m),M(e.ultra,m,r),t>.001&&t<.999){let S=i.createLinearGradient(0,m-14,0,m+14);S.addColorStop(0,"rgba(255,160,150,0)"),S.addColorStop(.5,"rgba(255,255,255,.95)"),S.addColorStop(1,"rgba(255,160,150,0)"),i.fillStyle=S,i.fillRect(0,m-14,s,28)}let E=Math.max(0,1-Math.abs(t-.5)*3.4);E>0&&(i.fillStyle=`rgba(255,255,255,${.55*E})`,i.fillRect(0,0,s,r));let T=i.createLinearGradient(0,r*.74,0,r);T.addColorStop(0,"rgba(8,5,6,0)"),T.addColorStop(1,"rgba(8,5,6,.9)"),i.fillStyle=T,i.fillRect(0,r*.74,s,r*.26);let R=wi("#ff5a64","#ffa07a",a);i.textBaseline="alphabetic",i.fillStyle="rgba(0,0,0,.55)",i.beginPath(),i.roundRect(s/2-70,34,140,24,12),i.fill(),i.strokeStyle="rgba(255,255,255,.18)",i.lineWidth=2,i.stroke(),i.fillStyle=R,i.font='600 26px "JetBrains Mono", "Courier New", monospace',i.fillText(a>.5?"ULTRA MODE":"PORTOFOLIO ID",52,112),i.fillStyle="#ffffff",i.font='800 76px "Space Grotesk", Verdana, sans-serif',i.fillText("BINTANG",50,192),i.font='700 38px "Space Grotesk", Verdana, sans-serif',i.fillStyle="rgba(240,245,255,.92)",i.fillText("PAMUNGKAS NUSANTARA",52,240),i.fillStyle=R,i.font='600 30px "Space Grotesk", Verdana, sans-serif',i.fillText("Digital Creative Specialist",52,r-118),i.fillStyle="rgba(255,225,225,.75)",i.font='500 25px "JetBrains Mono", "Courier New", monospace',i.fillText("Web Developer  \xB7  Informatics",52,r-76),i.fillText("Cirebon, Indonesia",52,r-44),i.fillStyle="rgba(255,255,255,.7)";let A=s-52,_=[3,1,2,1,4,1,1,3,2,1,3,1,2,4,1,2];for(let S=0;S<_.length;S++)A-=_[S]*3+3,i.fillRect(A,r-100,_[S]*3,56);a>.5&&(i.fillStyle=`rgba(255,106,92,${.6+.4*Math.sin(n*6)})`,i.beginPath(),i.arc(s-70,100,11,0,Math.PI*2),i.fill()),i.strokeStyle="rgba(255,255,255,.14)",i.lineWidth=4,i.beginPath(),i.roundRect(6,6,s-12,r-12,56),i.stroke()}function R0(i,t,e){let n=wo,s=Ro,r=pu(t),a=i.createLinearGradient(0,0,n,s);a.addColorStop(0,wi("#120a0c","#2a0c18",r)),a.addColorStop(1,wi("#060506","#3a0a12",r)),i.fillStyle=a,i.fillRect(0,0,n,s),i.strokeStyle="rgba(255,170,170,.05)",i.lineWidth=1;for(let u=0;u<=n;u+=50)i.beginPath(),i.moveTo(u,0),i.lineTo(u,s),i.stroke();for(let u=0;u<=s;u+=50)i.beginPath(),i.moveTo(0,u),i.lineTo(n,u),i.stroke();let o=wi("#ff5a64","#ffa07a",r);i.fillStyle="rgba(0,0,0,.55)",i.beginPath(),i.roundRect(n/2-70,34,140,24,12),i.fill();let l=n/2,c=400,h=i.createRadialGradient(l,c,40,l,c,190);h.addColorStop(0,wi("#e0202e","#ff5a3c",r)),h.addColorStop(1,"rgba(0,0,0,0)"),i.globalAlpha=.6,i.fillStyle=h,i.beginPath(),i.arc(l,c,190,0,Math.PI*2),i.fill(),i.globalAlpha=1,i.strokeStyle=o,i.lineWidth=6,i.beginPath(),i.arc(l,c,130,0,Math.PI*2),i.stroke(),i.fillStyle="#fff",i.textAlign="center",i.font='800 110px "Space Grotesk", Verdana, sans-serif',i.fillText("BP",l,c+38),i.font='800 54px "Space Grotesk", Verdana, sans-serif',i.fillText("Bintang Pamungkas",l,690),i.fillText("Nusantara",l,752),i.fillStyle=o,i.font='600 28px "JetBrains Mono", monospace',i.fillText("Informatika \xB7 UIN SSC Cirebon",l,806),i.fillStyle="rgba(255,230,230,.85)",i.font='500 27px "JetBrains Mono", monospace',["github.com/semangatbintang9","instagram.com/bepe.enn","tiktok.com/@b1ntangz"].forEach((u,d)=>i.fillText(u,l,900+d*46)),i.fillStyle="rgba(255,255,255,.9)",i.font='italic 500 29px "Space Grotesk", Verdana, sans-serif',i.fillText('"Learn deeply. Build boldly.',l,1118),i.fillText('Leave a positive impact."',l,1158),i.textAlign="left",i.strokeStyle="rgba(255,255,255,.14)",i.lineWidth=4,i.beginPath(),i.roundRect(6,6,n-12,s-12,56),i.stroke()}function mu(i,t,e){let n=new vi,s=-i/2,r=-t/2;return n.moveTo(s+e,r),n.lineTo(s+i-e,r),n.quadraticCurveTo(s+i,r,s+i,r+e),n.lineTo(s+i,r+t-e),n.quadraticCurveTo(s+i,r+t,s+i-e,r+t),n.lineTo(s+e,r+t),n.quadraticCurveTo(s,r+t,s,r+t-e),n.lineTo(s,r+e),n.quadraticCurveTo(s,r,s+e,r),n}function C0(i,t,e){let n=new tr(mu(i,t,e),14),s=n.attributes.position,r=n.attributes.uv;for(let a=0;a<s.count;a++)r.setXY(a,(s.getX(a)+i/2)/i,(s.getY(a)+t/2)/t);return n}async function P0(i,t={}){let e=document.createElement("canvas");e.className="lanyard-canvas",i.prepend(e);let n;try{n=new So({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(at){throw e.remove(),at}n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.setClearColor(0,0);let s=new xi,a=new fs(n).fromScene(new Eo,.04).texture;s.environment=a,s.environmentIntensity=.9;let o=new lr(16777215,1.4);o.position.set(4,6,8),s.add(o),s.add(new cr(12095632,.5));let l=new Xe(lu,1,.1,100),c=fu/2/Math.tan(lu*Math.PI/360);l.position.set(0,0,c);let[h,f]=await Promise.all([du(t.personSrc||"assets/card-person.webp",au),du(t.ultraSrc||"assets/card-ultra.webp",ou)]),u={person:h,ultra:f},d=document.createElement("canvas");d.width=wo,d.height=Ro;let g=document.createElement("canvas");g.width=wo,g.height=Ro;let y=d.getContext("2d"),p=g.getContext("2d"),m=n.capabilities.getMaxAnisotropy(),M=at=>{let Ut=new ts(at);return Ut.colorSpace=We,Ut.anisotropy=Math.min(8,m),Ut},E=M(d),T=M(g),R=A0("BINTANG PAMUNGKAS  \xB7  INFORMATIKA  \xB7  "),A=0,_=0,S=0,F=!0,P=()=>{w0(y,A,u,S),R0(p,A,S),E.needsUpdate=!0,T.needsUpdate=!0};P(),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{F=!0});let D=new Tn,z=new Tn;z.position.y=-Ai/2,D.add(z);let X=mu(gs,Ai,.26),I=new Qs(X,{depth:.06,bevelEnabled:!0,bevelThickness:.014,bevelSize:.014,bevelSegments:2,curveSegments:14});I.translate(0,0,-.03);let V=new me(I,new ss({color:1314316,roughness:.35,metalness:.3,clearcoat:.6}));z.add(V);let Z=at=>new ss({map:at,emissiveMap:at,emissive:16777215,emissiveIntensity:.92,color:3815994,roughness:.5,metalness:0,clearcoat:.3,clearcoatRoughness:.3,envMap:a,envMapIntensity:.12}),G=C0(gs,Ai,.26),nt=new me(G,Z(E));nt.position.z=.046;let H=new me(G,Z(T));H.position.z=-.046,H.rotation.y=Math.PI,z.add(nt,H);let Q=new qn({color:9345194,metalness:1,roughness:.38,envMapIntensity:.55}),tt=new me(new To(.78,.5,.2,4,.08),Q);tt.position.set(0,.02,0);let Tt=new me(new er(.24,.055,14,32),Q);Tt.position.set(0,.42,0),D.add(tt,Tt),s.add(D);let Dt=48,q=new sn;q.setAttribute("position",new $e(new Float32Array(Dt*2*3),3)),q.setAttribute("uv",new $e(new Float32Array(Dt*2*2),2));let vt=[];for(let at=0;at<Dt-1;at++){let Ut=at*2;vt.push(Ut,Ut+1,Ut+2,Ut+1,Ut+3,Ut+2)}q.setIndex(vt);let Et=new me(q,new ji({map:R,side:hn}));Et.frustumCulled=!1,s.add(Et);let Ot=.62,et=[],It=[],ue=[],Bt=(at,Ut,re,ve)=>(et.push({p:new ze(at,Ut,re),o:new ze(at,Ut,re)}),It.push(ve),et.length-1),Jt=cu/Er,Ht=[];Ht.push(Bt(0,Ao,0,0));for(let at=1;at<=Er;at++)Ht.push(Bt(0,Ao-Jt*at,0,at===Er?.7:1));for(let at=0;at<Er;at++)ue.push([Ht[at],Ht[at+1],Jt]);let j=Ht[Er],mt=Ao-cu,rt=[[0,0,0],[-gs/2,0,0],[gs/2,0,0],[-gs/2,-Ai,0],[gs/2,-Ai,0],[0,-Ai*.55,.9]],bt=[.7,.7,.7,.45,.45,.6],ot=[j];for(let at=1;at<rt.length;at++)ot.push(Bt(rt[at][0],mt+rt[at][1],rt[at][2],bt[at]));for(let at=0;at<ot.length;at++)for(let Ut=at+1;Ut<ot.length;Ut++){let re=rt[at],ve=rt[Ut];ue.push([ot[at],ot[Ut],Math.hypot(re[0]-ve[0],re[1]-ve[1],re[2]-ve[2])])}let[kt,wt,$t,Kt,ee,L]=ot;It[kt]=.7;let fe=new ze(1,0,0),Xt=new ze(0,1,0),oe=new ze(0,0,1),gt=new ze,_e=new ze,Ft=new ze;function zt(){fe.subVectors(et[$t].p,et[wt].p).normalize(),gt.addVectors(et[wt].p,et[$t].p).multiplyScalar(.5),_e.addVectors(et[Kt].p,et[ee].p).multiplyScalar(.5),Ft.subVectors(gt,_e).normalize(),oe.crossVectors(fe,Ft).normalize(),Xt.crossVectors(oe,fe).normalize()}let b={active:!1,lx:0,ly:0,lz:0,target:new ze,moved:0,t0:0,sx:0,sy:0},x=new Array(rt.length).fill(0),O=.3,it=0;function K(at){it+=at;let Ut=Math.sin(it*.7)*.6+Math.sin(it*1.9)*.25,re=Math.cos(it*.5)*.4;for(let Ce=0;Ce<et.length;Ce++){if(It[Ce]===0)continue;let Ee=et[Ce],Sn=(Ee.p.x-Ee.o.x)*.996,Un=(Ee.p.y-Ee.o.y)*.996,$n=(Ee.p.z-Ee.o.z)*.996,Qe=Math.hypot(Sn,Un,$n),Le=Qe>O?O/Qe:1;Ee.o.copy(Ee.p),Ee.p.x+=Sn*Le+Ut*hu*at*at,Ee.p.y+=Un*Le+b0*at*at,Ee.p.z+=$n*Le+re*hu*at*at}if(b.active){zt();let Ce=et[kt].p.x+fe.x*b.lx+Xt.x*b.ly,Ee=et[kt].p.y+fe.y*b.lx+Xt.y*b.ly,Sn=et[kt].p.z+fe.z*b.lx+Xt.z*b.ly,Un=b.target.x-Ce,$n=b.target.y-Ee,Qe=b.target.z-Sn;for(let Le=0;Le<ot.length;Le++){let v=rt[Le],C=(v[0]-b.lx)**2+(v[1]-b.ly)**2,k=Math.exp(-C/(2*(Ai*.42)**2))*.55,U=et[ot[Le]].p;U.x+=Un*k,U.y+=$n*k,U.z+=Qe*k*.5}}for(let Ce=0;Ce<T0;Ce++){for(let Ee=0;Ee<ue.length;Ee++){let[Sn,Un,$n]=ue[Ee],Qe=et[Sn].p,Le=et[Un].p,v=Le.x-Qe.x,C=Le.y-Qe.y,k=Le.z-Qe.z,U=Math.hypot(v,C,k)||1e-6,B=It[Sn],pt=It[Un],At=B+pt;if(At===0)continue;let ct=(U-$n)/U/At;Qe.x+=v*ct*B,Qe.y+=C*ct*B,Qe.z+=k*ct*B,Le.x-=v*ct*pt,Le.y-=C*ct*pt,Le.z-=k*ct*pt}et[Ht[0]].p.set(0,Ao,0)}let ve=et[ee].p.z-et[Kt].p.z,Te=et[$t].p.z-et[wt].p.z;et[Kt].p.z+=ve*.018,et[ee].p.z-=ve*.018,et[wt].p.z+=Te*.018,et[$t].p.z-=Te*.018;for(let Ce=1;Ce<et.length;Ce++)It[Ce]&&(et[Ce].p.z*=.9992)}let ht=Ht.map(()=>new ze),_t=new ns(ht,!1,"catmullrom",.5),J=q.attributes.position,$=q.attributes.uv,dt=new ze,w=new ze,Y=new ze,W=new ze(0,0,1);function ft(){zt();let at=et[kt].p;D.position.copy(at);let Ut=new he().makeBasis(fe,Xt,oe);D.quaternion.setFromRotationMatrix(Ut);for(let Te=0;Te<Ht.length;Te++)ht[Te].copy(et[Ht[Te]].p);ht[0].y+=1.5;let re=0,ve=null;for(let Te=0;Te<Dt;Te++){let Ce=Te/(Dt-1);_t.getPoint(Ce,Y),_t.getTangent(Ce,dt),w.crossVectors(dt,W).normalize().multiplyScalar(Ot/2),ve&&(re+=Y.distanceTo(ve)),ve=ve||new ze,ve.copy(Y),J.setXYZ(Te*2,Y.x-w.x,Y.y-w.y,Y.z-w.z),J.setXYZ(Te*2+1,Y.x+w.x,Y.y+w.y,Y.z+w.z),$.setXY(Te*2,0,re/2.4),$.setXY(Te*2+1,1,re/2.4)}J.needsUpdate=!0,$.needsUpdate=!0}function lt(){let at=i.getBoundingClientRect(),Ut=Math.max(1,at.width),re=Math.max(1,at.height);n.setSize(Ut,re,!1),l.aspect=Ut/re,l.updateProjectionMatrix()}let ut=new ResizeObserver(lt);ut.observe(i),lt();let Pt=new hr,Zt=new xt,st=new en(new ze(0,0,1),0),Nt=new ze;function qt(at,Ut){let re=e.getBoundingClientRect();Zt.set((at-re.left)/re.width*2-1,-((Ut-re.top)/re.height*2-1)),Pt.setFromCamera(Zt,l)}function yt(at,Ut){qt(at,Ut),D.updateMatrixWorld(!0);let re=Pt.intersectObjects([nt,H,tt,V],!1);return re.length?re[0].point:null}function le(at,Ut){let re=yt(at,Ut);if(!re)return!1;zt();let ve=re.clone().sub(et[kt].p);return b.lx=ve.dot(fe),b.ly=ve.dot(Xt),b.lz=ve.dot(oe),st.constant=-re.z,b.target.copy(re),b.active=!0,b.moved=0,b.t0=performance.now(),b.sx=at,b.sy=Ut,!0}function be(at,Ut){qt(at,Ut),Pt.ray.intersectPlane(st,Nt)&&b.target.copy(Nt),b.moved=Math.max(b.moved,Math.hypot(at-b.sx,Ut-b.sy))}function on(){b.active&&(b.active=!1,b.moved<8&&performance.now()-b.t0<380&&i.dispatchEvent(new CustomEvent("lanyard:tap",{bubbles:!0})))}e.addEventListener("mousedown",at=>{at.button===0&&le(at.clientX,at.clientY)&&(at.preventDefault(),e.classList.add("is-grabbing"))}),window.addEventListener("mousemove",at=>{b.active?be(at.clientX,at.clientY):at.target===e&&e.classList.toggle("is-hover",!!yt(at.clientX,at.clientY))}),window.addEventListener("mouseup",()=>{e.classList.remove("is-grabbing"),on()}),e.addEventListener("touchstart",at=>{let Ut=at.touches[0];le(Ut.clientX,Ut.clientY)&&at.preventDefault()},{passive:!1}),window.addEventListener("touchmove",at=>{if(!b.active)return;at.preventDefault();let Ut=at.touches[0];be(Ut.clientX,Ut.clientY)},{passive:!1}),window.addEventListener("touchend",on),window.addEventListener("touchcancel",on);let _s=!0,Ri=new IntersectionObserver(([at])=>{_s=at.isIntersecting},{threshold:0});Ri.observe(i);let xs=0,vs=performance.now(),Ci=0,yn=!0,Pi=0;function ys(at){Ci=requestAnimationFrame(ys);let Ut=Math.min(.05,(at-vs)/1e3);if(vs=at,!_s||document.hidden)return;for(S+=Ut,xs+=Ut;xs>=ec;)K(ec),xs-=ec;let re=Ut/1.35;if(A!==_){let ve=_-A;A=Math.abs(ve)<=re?_:A+Math.sign(ve)*re,F=!0}else A>.5&&at-Pi>110&&(F=!0,Pi=at);F&&(P(),F=!1),ft(),n.render(s,l)}return ft(),n.render(s,l),Ci=requestAnimationFrame(ys),{setUltra(at){_=at?1:0},kick(at=1){for(let Ut of ot)et[Ut].p.x+=.35*at,et[Ut].p.z+=(Ut===Kt||Ut===wt?.25:-.25)*at},flip(){for(let at of ot){let Ut=rt[ot.indexOf(at)][0]<0;et[at].p.z+=(Ut?1:-1)*.55}},destroy(){yn=!1,cancelAnimationFrame(Ci),ut.disconnect(),Ri.disconnect(),n.dispose(),e.remove()},get running(){return yn}}}return Su(I0);})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
