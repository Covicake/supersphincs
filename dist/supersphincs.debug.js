var isNode	= false;
if (typeof module !== 'undefined' && module.exports) {
	isNode	= true;
}


var superSphincs = (function () {

if (isNode) {
	self	= this;
}
BALLS();
(function(K,sa){var ka="undefined"!="undefined";ka&&(K=global);var a="0123456789abcdef".split(""),ra=[-2147483648,8388608,32768,128],ea=[24,16,8,0],da=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,
2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,
2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,
3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],e=[],oa=function(a){return Z(a,384)},pa=function(a){return Z(a,256)},qa=function(a){return Z(a,224)},Z=function(Z,K){var n,q,r,t,u,v,w,x,y,z,A,B,C,D,
E,F,p,ka=!1,g,fa=0,la=0,ma=0,na=Z.length,L,M,f,b,d,c,ia,ja,ga,ha,aa,ba,h,k,l,m,ca;384==K?(n=3418070365,q=3238371032,r=1654270250,t=914150663,u=2438529370,v=812702999,w=355462360,x=4144912697,y=1731405415,z=4290775857,A=2394180231,B=1750603025,C=3675008525,D=1694076839,E=1203062813,F=3204075428):256==K?(n=573645204,q=4230739756,r=2673172387,t=3360449730,u=596883563,v=1867755857,w=2520282905,x=1497426621,y=2519219938,z=2827943907,A=3193839141,B=1401305490,C=721525244,D=746961066,E=246885852,F=2177182882):
224==K?(n=2352822216,q=424955298,r=1944164710,t=2312950998,u=502970286,v=855612546,w=1738396948,x=1479516111,y=258812777,z=2077511080,A=2011393907,B=79989058,C=1067287976,D=1780299464,E=286451373,F=2446758561):(n=1779033703,q=4089235720,r=3144134277,t=2227873595,u=1013904242,v=4271175723,w=2773480762,x=1595750129,y=1359893119,z=2917565137,A=2600822924,B=725511199,C=528734635,D=4215389547,E=1541459225,F=327033209,K=512);p=0;do{e[0]=p;e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=
e[14]=e[15]=e[16]=e[17]=e[18]=e[19]=e[20]=e[21]=e[22]=e[23]=e[24]=e[25]=e[26]=e[27]=e[28]=e[29]=e[30]=e[31]=e[32]=0;for(g=la;fa<na&&128>g;++fa)p=Z.charCodeAt(fa),128>p?e[g>>2]|=p<<ea[g++&3]:(2048>p?e[g>>2]|=(192|p>>6)<<ea[g++&3]:(55296>p||57344<=p?e[g>>2]|=(224|p>>12)<<ea[g++&3]:(p=65536+((p&1023)<<10|Z.charCodeAt(++fa)&1023),e[g>>2]|=(240|p>>18)<<ea[g++&3],e[g>>2]|=(128|p>>12&63)<<ea[g++&3]),e[g>>2]|=(128|p>>6&63)<<ea[g++&3]),e[g>>2]|=(128|p&63)<<ea[g++&3]);ma+=g-la;la=g-128;fa==na&&(e[g>>2]|=ra[g&
3],++fa);p=e[32];fa>na&&112>g&&(e[31]=ma<<3,ka=!0);for(g=32;160>g;g+=2)h=e[g-30],k=e[g-29],L=(h>>>1|k<<31)^(h>>>8|k<<24)^h>>>7,M=(k>>>1|h<<31)^(k>>>8|h<<24)^(k>>>7|h<<25),h=e[g-4],k=e[g-3],f=(h>>>19|k<<13)^(k>>>29|h<<3)^h>>>6,b=(k>>>19|h<<13)^(h>>>29|k<<3)^(k>>>6|h<<26),h=e[g-32],k=e[g-31],l=e[g-14],m=e[g-13],d=(m&65535)+(k&65535)+(M&65535)+(b&65535),b=(m>>>16)+(k>>>16)+(M>>>16)+(b>>>16)+(d>>>16),c=(l&65535)+(h&65535)+(L&65535)+(f&65535)+(b>>>16),f=(l>>>16)+(h>>>16)+(L>>>16)+(f>>>16)+(c>>>16),e[g]=
f<<16|c&65535,e[g+1]=b<<16|d&65535;var N=n,O=q,G=r,H=t,I=u,J=v,P=w,Q=x,R=y,S=z,T=A,U=B,V=C,W=D,X=E,Y=F;ga=G&I;ha=H&J;for(g=0;160>g;g+=8)L=(N>>>28|O<<4)^(O>>>2|N<<30)^(O>>>7|N<<25),M=(O>>>28|N<<4)^(N>>>2|O<<30)^(N>>>7|O<<25),f=(R>>>14|S<<18)^(R>>>18|S<<14)^(S>>>9|R<<23),b=(S>>>14|R<<18)^(S>>>18|R<<14)^(R>>>9|S<<23),ia=N&G,ja=O&H,aa=ia^N&I^ga,ba=ja^O&J^ha,ca=R&T^~R&V,c=S&U^~S&W,h=e[g],k=e[g+1],l=da[g],m=da[g+1],d=(m&65535)+(k&65535)+(c&65535)+(b&65535)+(Y&65535),b=(m>>>16)+(k>>>16)+(c>>>16)+(b>>>16)+
(Y>>>16)+(d>>>16),c=(l&65535)+(h&65535)+(ca&65535)+(f&65535)+(X&65535)+(b>>>16),f=(l>>>16)+(h>>>16)+(ca>>>16)+(f>>>16)+(X>>>16)+(c>>>16),h=f<<16|c&65535,k=b<<16|d&65535,d=(ba&65535)+(M&65535),b=(ba>>>16)+(M>>>16)+(d>>>16),c=(aa&65535)+(L&65535)+(b>>>16),f=(aa>>>16)+(L>>>16)+(c>>>16),l=f<<16|c&65535,m=b<<16|d&65535,d=(Q&65535)+(k&65535),b=(Q>>>16)+(k>>>16)+(d>>>16),c=(P&65535)+(h&65535)+(b>>>16),f=(P>>>16)+(h>>>16)+(c>>>16),X=f<<16|c&65535,Y=b<<16|d&65535,d=(m&65535)+(k&65535),b=(m>>>16)+(k>>>16)+
(d>>>16),c=(l&65535)+(h&65535)+(b>>>16),f=(l>>>16)+(h>>>16)+(c>>>16),P=f<<16|c&65535,Q=b<<16|d&65535,L=(P>>>28|Q<<4)^(Q>>>2|P<<30)^(Q>>>7|P<<25),M=(Q>>>28|P<<4)^(P>>>2|Q<<30)^(P>>>7|Q<<25),f=(X>>>14|Y<<18)^(X>>>18|Y<<14)^(Y>>>9|X<<23),b=(Y>>>14|X<<18)^(Y>>>18|X<<14)^(X>>>9|Y<<23),ga=P&N,ha=Q&O,aa=ga^P&G^ia,ba=ha^Q&H^ja,ca=X&R^~X&T,c=Y&S^~Y&U,h=e[g+2],k=e[g+3],l=da[g+2],m=da[g+3],d=(m&65535)+(k&65535)+(c&65535)+(b&65535)+(W&65535),b=(m>>>16)+(k>>>16)+(c>>>16)+(b>>>16)+(W>>>16)+(d>>>16),c=(l&65535)+
(h&65535)+(ca&65535)+(f&65535)+(V&65535)+(b>>>16),f=(l>>>16)+(h>>>16)+(ca>>>16)+(f>>>16)+(V>>>16)+(c>>>16),h=f<<16|c&65535,k=b<<16|d&65535,d=(ba&65535)+(M&65535),b=(ba>>>16)+(M>>>16)+(d>>>16),c=(aa&65535)+(L&65535)+(b>>>16),f=(aa>>>16)+(L>>>16)+(c>>>16),l=f<<16|c&65535,m=b<<16|d&65535,d=(J&65535)+(k&65535),b=(J>>>16)+(k>>>16)+(d>>>16),c=(I&65535)+(h&65535)+(b>>>16),f=(I>>>16)+(h>>>16)+(c>>>16),V=f<<16|c&65535,W=b<<16|d&65535,d=(m&65535)+(k&65535),b=(m>>>16)+(k>>>16)+(d>>>16),c=(l&65535)+(h&65535)+
(b>>>16),f=(l>>>16)+(h>>>16)+(c>>>16),I=f<<16|c&65535,J=b<<16|d&65535,L=(I>>>28|J<<4)^(J>>>2|I<<30)^(J>>>7|I<<25),M=(J>>>28|I<<4)^(I>>>2|J<<30)^(I>>>7|J<<25),f=(V>>>14|W<<18)^(V>>>18|W<<14)^(W>>>9|V<<23),b=(W>>>14|V<<18)^(W>>>18|V<<14)^(V>>>9|W<<23),ia=I&P,ja=J&Q,aa=ia^I&N^ga,ba=ja^J&O^ha,ca=V&X^~V&R,c=W&Y^~W&S,h=e[g+4],k=e[g+5],l=da[g+4],m=da[g+5],d=(m&65535)+(k&65535)+(c&65535)+(b&65535)+(U&65535),b=(m>>>16)+(k>>>16)+(c>>>16)+(b>>>16)+(U>>>16)+(d>>>16),c=(l&65535)+(h&65535)+(ca&65535)+(f&65535)+
(T&65535)+(b>>>16),f=(l>>>16)+(h>>>16)+(ca>>>16)+(f>>>16)+(T>>>16)+(c>>>16),h=f<<16|c&65535,k=b<<16|d&65535,d=(ba&65535)+(M&65535),b=(ba>>>16)+(M>>>16)+(d>>>16),c=(aa&65535)+(L&65535)+(b>>>16),f=(aa>>>16)+(L>>>16)+(c>>>16),l=f<<16|c&65535,m=b<<16|d&65535,d=(H&65535)+(k&65535),b=(H>>>16)+(k>>>16)+(d>>>16),c=(G&65535)+(h&65535)+(b>>>16),f=(G>>>16)+(h>>>16)+(c>>>16),T=f<<16|c&65535,U=b<<16|d&65535,d=(m&65535)+(k&65535),b=(m>>>16)+(k>>>16)+(d>>>16),c=(l&65535)+(h&65535)+(b>>>16),f=(l>>>16)+(h>>>16)+(c>>>
16),G=f<<16|c&65535,H=b<<16|d&65535,L=(G>>>28|H<<4)^(H>>>2|G<<30)^(H>>>7|G<<25),M=(H>>>28|G<<4)^(G>>>2|H<<30)^(G>>>7|H<<25),f=(T>>>14|U<<18)^(T>>>18|U<<14)^(U>>>9|T<<23),b=(U>>>14|T<<18)^(U>>>18|T<<14)^(T>>>9|U<<23),ga=G&I,ha=H&J,aa=ga^G&P^ia,ba=ha^H&Q^ja,ca=T&V^~T&X,c=U&W^~U&Y,h=e[g+6],k=e[g+7],l=da[g+6],m=da[g+7],d=(m&65535)+(k&65535)+(c&65535)+(b&65535)+(S&65535),b=(m>>>16)+(k>>>16)+(c>>>16)+(b>>>16)+(S>>>16)+(d>>>16),c=(l&65535)+(h&65535)+(ca&65535)+(f&65535)+(R&65535)+(b>>>16),f=(l>>>16)+(h>>>
16)+(ca>>>16)+(f>>>16)+(R>>>16)+(c>>>16),h=f<<16|c&65535,k=b<<16|d&65535,d=(ba&65535)+(M&65535),b=(ba>>>16)+(M>>>16)+(d>>>16),c=(aa&65535)+(L&65535)+(b>>>16),f=(aa>>>16)+(L>>>16)+(c>>>16),l=f<<16|c&65535,m=b<<16|d&65535,d=(O&65535)+(k&65535),b=(O>>>16)+(k>>>16)+(d>>>16),c=(N&65535)+(h&65535)+(b>>>16),f=(N>>>16)+(h>>>16)+(c>>>16),R=f<<16|c&65535,S=b<<16|d&65535,d=(m&65535)+(k&65535),b=(m>>>16)+(k>>>16)+(d>>>16),c=(l&65535)+(h&65535)+(b>>>16),f=(l>>>16)+(h>>>16)+(c>>>16),N=f<<16|c&65535,O=b<<16|d&65535;
d=(q&65535)+(O&65535);b=(q>>>16)+(O>>>16)+(d>>>16);c=(n&65535)+(N&65535)+(b>>>16);f=(n>>>16)+(N>>>16)+(c>>>16);n=f<<16|c&65535;q=b<<16|d&65535;d=(t&65535)+(H&65535);b=(t>>>16)+(H>>>16)+(d>>>16);c=(r&65535)+(G&65535)+(b>>>16);f=(r>>>16)+(G>>>16)+(c>>>16);r=f<<16|c&65535;t=b<<16|d&65535;d=(v&65535)+(J&65535);b=(v>>>16)+(J>>>16)+(d>>>16);c=(u&65535)+(I&65535)+(b>>>16);f=(u>>>16)+(I>>>16)+(c>>>16);u=f<<16|c&65535;v=b<<16|d&65535;d=(x&65535)+(Q&65535);b=(x>>>16)+(Q>>>16)+(d>>>16);c=(w&65535)+(P&65535)+
(b>>>16);f=(w>>>16)+(P>>>16)+(c>>>16);w=f<<16|c&65535;x=b<<16|d&65535;d=(z&65535)+(S&65535);b=(z>>>16)+(S>>>16)+(d>>>16);c=(y&65535)+(R&65535)+(b>>>16);f=(y>>>16)+(R>>>16)+(c>>>16);y=f<<16|c&65535;z=b<<16|d&65535;d=(B&65535)+(U&65535);b=(B>>>16)+(U>>>16)+(d>>>16);c=(A&65535)+(T&65535)+(b>>>16);f=(A>>>16)+(T>>>16)+(c>>>16);A=f<<16|c&65535;B=b<<16|d&65535;d=(D&65535)+(W&65535);b=(D>>>16)+(W>>>16)+(d>>>16);c=(C&65535)+(V&65535)+(b>>>16);f=(C>>>16)+(V>>>16)+(c>>>16);C=f<<16|c&65535;D=b<<16|d&65535;d=
(F&65535)+(Y&65535);b=(F>>>16)+(Y>>>16)+(d>>>16);c=(E&65535)+(X&65535)+(b>>>16);f=(E>>>16)+(X>>>16)+(c>>>16);E=f<<16|c&65535;F=b<<16|d&65535}while(!ka);n=a[n>>28&15]+a[n>>24&15]+a[n>>20&15]+a[n>>16&15]+a[n>>12&15]+a[n>>8&15]+a[n>>4&15]+a[n&15]+a[q>>28&15]+a[q>>24&15]+a[q>>20&15]+a[q>>16&15]+a[q>>12&15]+a[q>>8&15]+a[q>>4&15]+a[q&15]+a[r>>28&15]+a[r>>24&15]+a[r>>20&15]+a[r>>16&15]+a[r>>12&15]+a[r>>8&15]+a[r>>4&15]+a[r&15]+a[t>>28&15]+a[t>>24&15]+a[t>>20&15]+a[t>>16&15]+a[t>>12&15]+a[t>>8&15]+a[t>>4&
15]+a[t&15]+a[u>>28&15]+a[u>>24&15]+a[u>>20&15]+a[u>>16&15]+a[u>>12&15]+a[u>>8&15]+a[u>>4&15]+a[u&15]+a[v>>28&15]+a[v>>24&15]+a[v>>20&15]+a[v>>16&15]+a[v>>12&15]+a[v>>8&15]+a[v>>4&15]+a[v&15]+a[w>>28&15]+a[w>>24&15]+a[w>>20&15]+a[w>>16&15]+a[w>>12&15]+a[w>>8&15]+a[w>>4&15]+a[w&15];256<=K&&(n+=a[x>>28&15]+a[x>>24&15]+a[x>>20&15]+a[x>>16&15]+a[x>>12&15]+a[x>>8&15]+a[x>>4&15]+a[x&15]);384<=K&&(n+=a[y>>28&15]+a[y>>24&15]+a[y>>20&15]+a[y>>16&15]+a[y>>12&15]+a[y>>8&15]+a[y>>4&15]+a[y&15]+a[z>>28&15]+a[z>>
24&15]+a[z>>20&15]+a[z>>16&15]+a[z>>12&15]+a[z>>8&15]+a[z>>4&15]+a[z&15]+a[A>>28&15]+a[A>>24&15]+a[A>>20&15]+a[A>>16&15]+a[A>>12&15]+a[A>>8&15]+a[A>>4&15]+a[A&15]+a[B>>28&15]+a[B>>24&15]+a[B>>20&15]+a[B>>16&15]+a[B>>12&15]+a[B>>8&15]+a[B>>4&15]+a[B&15]);512==K&&(n+=a[C>>28&15]+a[C>>24&15]+a[C>>20&15]+a[C>>16&15]+a[C>>12&15]+a[C>>8&15]+a[C>>4&15]+a[C&15]+a[D>>28&15]+a[D>>24&15]+a[D>>20&15]+a[D>>16&15]+a[D>>12&15]+a[D>>8&15]+a[D>>4&15]+a[D&15]+a[E>>28&15]+a[E>>24&15]+a[E>>20&15]+a[E>>16&15]+a[E>>12&
15]+a[E>>8&15]+a[E>>4&15]+a[E&15]+a[F>>28&15]+a[F>>24&15]+a[F>>20&15]+a[F>>16&15]+a[F>>12&15]+a[F>>8&15]+a[F>>4&15]+a[F&15]);return n};!K.JS_SHA512_TEST&&ka?(Z.sha512=Z,Z.sha384=oa,Z.sha512_256=pa,Z.sha512_224=qa,module.exports=Z):K&&(K.sha512=Z,K.sha384=oa,K.sha512_256=pa,K.sha512_224=qa)})(this);


        function from_string(str) {
                if (typeof TextEncoder === "function") {
                        return new TextEncoder("utf-8").encode(str);
                }
                str = unescape(encodeURIComponent(str));
                var bytes = new Uint8Array(str.length);
                for (var i = 0; i < str.length; i++) {
                        bytes[i] = str.charCodeAt(i);
                }
                return bytes;
        }

        function to_string(bytes) {
                if (typeof TextDecoder === "function") {
                        return new TextDecoder("utf-8", {fatal: true}).decode(bytes);
                }

                try {
                        return decodeURIComponent(escape(String.fromCharCode.apply(null, bytes)));
                }
                catch (_) {
                        throw new TypeError("The encoded data was not valid.");
                }
        }

        function from_hex(str) {
                if (!is_hex(str)) throw new TypeError("The provided string doesn't look like hex data");
                var result = new Uint8Array(str.length / 2);
                for (var i = 0; i < str.length; i += 2) {
                        result[i >>> 1] = parseInt(str.substr(i, 2), 16);
                }
                return result;
        }

        function to_hex(bytes) {
                var str = "", b, c, x;
                for (var i = 0; i < bytes.length; i++) {
                        c = bytes[i] & 0xf;
                        b = bytes[i] >>> 4;
                        x = (87 + c + (((c - 10) >> 8) & ~38)) << 8 |
                            (87 + b + (((b - 10) >> 8) & ~38));
                        str += String.fromCharCode(x & 0xff) + String.fromCharCode(x >>> 8);
                }
                return str;
        }

        function is_hex(str) {
                return (typeof str === "string" && /^[0-9a-f]+$/i.test(str) && str.length % 2 === 0);
        }

        function from_base64(sBase64, nBlocksSize) {
                function _b64ToUint6(nChr) {
                        return nChr > 64 && nChr < 91 ?
                                nChr - 65 : nChr > 96 && nChr < 123 ?
                                nChr - 71 : nChr > 47 && nChr < 58 ?
                                nChr + 4 : nChr === 43 ?
                                62 : nChr === 47 ?
                                63 :
                                0;
                }
                var
                        sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, ""),
                        nInLen = sB64Enc.length,
                        nOutLen = nBlocksSize ? Math.ceil((nInLen * 3 + 1 >> 2) / nBlocksSize) * nBlocksSize : nInLen * 3 + 1 >> 2,
                        taBytes = new Uint8Array(nOutLen);
                for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
                        nMod4 = nInIdx & 3;
                        nUint24 |= _b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
                        if (nMod4 === 3 || nInLen - nInIdx === 1) {
                                for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                                        taBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                                }
                                nUint24 = 0;
                        }
                }
                return taBytes;
        }

        function to_base64(aBytes, noNewLine) {
                function _uint6ToB64(nUint6) {
                        return nUint6 < 26 ?
                                nUint6 + 65 : nUint6 < 52 ?
                                nUint6 + 71 : nUint6 < 62 ?
                                nUint6 - 4 : nUint6 === 62 ?
                                43 : nUint6 === 63 ?
                                47 :
                                65;
                }
                if (typeof aBytes === "string") {
                        throw new Exception("input has to be an array");
                }
                var nMod3 = 2,
                        sB64Enc = "";
                for (var nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
                        nMod3 = nIdx % 3;
                        if (nIdx > 0 && (nIdx * 4 / 3) % 76 === 0 && !noNewLine) {
                                sB64Enc += "\r\n";
                        }
                        nUint24 |= aBytes[nIdx] << (16 >>> nMod3 & 24);
                        if (nMod3 === 2 || aBytes.length - nIdx === 1) {
                                sB64Enc += String.fromCharCode(_uint6ToB64(nUint24 >>> 18 & 63), _uint6ToB64(nUint24 >>> 12 & 63), _uint6ToB64(nUint24 >>> 6 & 63), _uint6ToB64(nUint24 & 63));
                                nUint24 = 0;
                        }
                }
                return sB64Enc.substr(0, sB64Enc.length - 2 + nMod3) + (nMod3 === 2 ? "" : nMod3 === 1 ? "=" : "==");
        }

        function output_formats() {
                return ["uint8array", "text", "hex", "base64"];
        }

        function _format_output(output, optionalOutputFormat) {
                var selectedOutputFormat = optionalOutputFormat || output_format;
                if (!_is_output_format(selectedOutputFormat)) throw new Error(selectedOutputFormat + " output format is not available");
                if (output instanceof AllocatedBuf) {
                        if (selectedOutputFormat === "uint8array") return output.to_Uint8Array();
                        else if (selectedOutputFormat === "text") return libsodium.Pointer_stringify(output.address, output.length);
                        else if (selectedOutputFormat === "hex") return to_hex(output.to_Uint8Array());
                        else if (selectedOutputFormat === "base64") return to_base64(output.to_Uint8Array());
                        else throw new Error("What is output format \"" + selectedOutputFormat + "\"?");
                } else if (typeof output === "object") { //Composed output. Example : key pairs
                        var props = Object.keys(output);
                        var formattedOutput = {};
                        for (var i = 0; i < props.length; i++) {
                                formattedOutput[props[i]] = _format_output(output[props[i]], selectedOutputFormat);
                        }
                        return formattedOutput;
                } else if (typeof output === "string") {
                        return output;
                } else {
                        throw new TypeError("Cannot format output");
                }
        }

        function _is_output_format(format) {
                var formats = output_formats();
                for (var i = 0; i < formats.length; i++) {
                        if (formats[i] === format) return true;
                }
                return false;
        }

        function _check_output_format(format) {
                if (!format) {
                        return;
                } else if (typeof format !== "string") {
                        throw new TypeError("When defined, the output format must be a string");
                } else if (!_is_output_format(format)) {
                        throw new Error(format + " is not a supported output format");
                }
        }

        //---------------------------------------------------------------------------
        // ;

var rsaKeygen, pemJwk;
if (isNode) {
	rsaKeygen	= require('rsa-keygen');
	pemJwk		= require('pem-jwk');
}


function importJWK (key, purpose, callback) {
	var jwk	= JSON.parse(to_string(new Uint8Array(key.buffer, 0, key.indexOf(0))));

	if (isNode) {
		callback(pemJwk.jwk2pem(jwk));
	}
	else {
		crypto.subtle.importKey(
			'jwk',
			jwk,
			rsa.algorithm,
			false,
			[purpose]
		).then(callback).catch(function () {
			callback(null, null, 'Failed to import key.');
		});
	}
}
	
function exportJWK (key, callback) {
	function returnJWK (jwk) {
		callback(from_string(JSON.stringify(jwk)));
	}

	if (isNode) {
		returnJWK(pemJwk.pem2jwk(key));
	}
	else {
		crypto.subtle.exportKey(
			'jwk',
			key,
			rsa.algorithm.name
		).then(function (jwk) {
			returnJWK(jwk);
		}).catch(function () {
			callback(null, null, 'Failed to export key.');
		});
	}
}

function decodeSignature (signature) {
	return typeof signature === 'string' ?
		from_base64(signature) :
		signature
	;
}

function encodeSignature (signature) {
	return typeof signature === 'string' ?
		signature :
		to_base64(signature).replace(/\n/g, '')
	;
}

function getMessageBytes (message) {
	return typeof message === 'string' ?
		from_string(message) :
		message
	;
}

function getMessageText (message) {
	return typeof message === 'string' ?
		message :
		to_string(message)
	;
}

function hashMessage (message) {
	var hex	= sha512(getMessageText(message));
	return {bytes: from_hex(hex), hex: hex};
}


var rsa	= {
	algorithm: isNode ?
		'RSA-SHA256' :
		{
			name: 'RSASSA-PKCS1-v1_5',
			hash: {
				name: 'SHA-256'
			},
			modulusLength: 2048,
			publicExponent: new Uint8Array([0x01, 0x00, 0x01])
		}
	,

	publicKeyLength: 450,
	privateKeyLength: 1700,
	signatureLength: 256,

	errorMessages: {
		keyPair: 'Failed to generate RSA key pair.',
		signDetached: 'Failed to generate RSA signature.',
		verifyDetached: 'Failed to attempt to verify RSA signature.'
	},

	keyPair: function (callback) {
		function returnKeyPair (kp) {
			var keyPair = {};

			exportJWK(kp.publicKey, function (publicKey) {
				keyPair.publicKey = publicKey;

				exportJWK(kp.privateKey, function (privateKey) {
					keyPair.privateKey = privateKey;

					callback(keyPair);
				});
			});
		}

		try {
			if (isNode) {
				var kp	= rsaKeygen.generate();

				returnKeyPair({
					publicKey: kp.public_key,
					privateKey: kp.private_key
				});
			}
			else {
				crypto.subtle.generateKey(
					rsa.algorithm,
					true,
					['sign', 'verify']
				).then(returnKeyPair).catch(function () {
					callback(null, null, rsa.errorMessages.keyPair);
				});
			}
		}
		catch (_) {
			callback(null, null, rsa.errorMessages.keyPair);
		}
	},

	signDetached: function (message, privateKey, callback) {
		try {
			importJWK(privateKey, 'sign', function (sk) {
				if (isNode) {
					var signer	= crypto.createSign(rsa.algorithm);
					signer.write(new Buffer(message));
					signer.end();
					callback(new Uint8Array(signer.sign(sk)));
				}
				else {
					crypto.subtle.sign(rsa.algorithm, sk, message).
						then(function (signature) {
							callback(new Uint8Array(signature));
						}).catch(function () {
							callback(null, null, rsa.errorMessages.signDetached);
						})
					;
				}
			});
		}
		catch (_) {
			callback(null, null, rsa.errorMessages.signDetached);
		}
	},

	verifyDetached: function (signature, message, publicKey, callback) {
		try {
			importJWK(publicKey, 'verify', function (pk) {
				if (isNode) {
					var verifier	= crypto.createVerify(rsa.algorithm);
					verifier.update(new Buffer(message));
					callback(verifier.sign(pk, signature));
				}
				else {
					crypto.subtle.verify(rsa.algorithm, pk, signature, message).
						then(function (isValid) {
							callback(isValid);
						}).catch(function () {
							callback(null, null, rsa.errorMessages.verifyDetached);
						})
					;
				}
			});
		}
		catch (_) {
			callback(null, null, rsa.errorMessages.verifyDetached);
		}
	}
};


var superSphincs	= {
	publicKeyLength: rsa.publicKeyLength + sphincs.publicKeyLength,
	privateKeyLength: rsa.privateKeyLength + sphincs.privateKeyLength,
	signatureLength: rsa.signatureLength + sphincs.signatureLength,

	errorMessages: {
		keyPair: 'Failed to generate SuperSPHINCS key pair.',
		sign: 'Failed to generate SuperSPHINCS signature.',
		open: 'Failed to open SuperSPHINCS signed message.',
		verify: 'Failed to attempt to verify SuperSPHINCS signature.'
	},

	keyPair: function (callback) {
		try {
			var sphincsKeyPair	= sphincs.keyPair();

			rsa.keyPair(function (rsaKeyPair, err) {
				if (err) {
					callback(null, superSphincs.errorMessages.keyPair);
					return;
				}

				var keyPair	= {
					publicKey: new Uint8Array(superSphincs.publicKeyLength),
					privateKey: new Uint8Array(superSphincs.privateKeyLength)
				};

				keyPair.publicKey.set(rsaKeyPair.publicKey);
				keyPair.privateKey.set(rsaKeyPair.privateKey);
				keyPair.publicKey.set(sphincsKeyPair.publicKey, rsa.publicKeyLength);
				keyPair.privateKey.set(sphincsKeyPair.privateKey, rsa.privateKeyLength);

				callback(keyPair);
			});
		}
		catch (_) {
			callback(null, superSphincs.errorMessages.keyPair);
		}
	},

	sign: function (message, privateKey, callback) {
		superSphincs.signDetached(
			message,
			privateKey,
			function (signature, hash, err) {
				if (signature) {
					message		= getMessageBytes(message);

					var signed	= new Uint8Array(
						superSphincs.signatureLength + message.length
					);

					signed.set(signature);
					signed.set(message, superSphincs.signatureLength);

					callback(encodeSignature(signed), hash.hex);
				}
				else {
					callback(null, null, err);
				}
			},
			true
		);
	},

	signDetached: function (message, privateKey, callback, noEncode) {
		try {
			var hash	= hashMessage(message);

			var sphincsSignature	= sphincs.signDetached(
				hash.bytes,
				new Uint8Array(privateKey.buffer, rsa.privateKeyLength)
			);

			rsa.signDetached(
				hash.bytes,
				new Uint8Array(privateKey.buffer, 0, rsa.privateKeyLength),
				function (rsaSignature, err) {
					if (err) {
						callback(null, null, superSphincs.errorMessages.sign);
						return;
					}

					var signature	= new Uint8Array(superSphincs.signatureLength);

					signature.set(rsaSignature);
					signature.set(sphincsSignature, rsa.signatureLength);

					if (noEncode) {
						callback(signature, hash);
					}
					else {
						callback(encodeSignature(signature), hash.hex);
					}
				}
			);
		}
		catch (_) {
			callback(null, null, superSphincs.errorMessages.sign);
		}
	},

	open: function (signed, publicKey, callback) {
		try {
			signed	= decodeSignature(signed);

			var signature	= new Uint8Array(
				signed.buffer,
				0,
				superSphincs.signatureLength
			);

			var message		= getMessageText(
				new Uint8Array(signed.buffer, superSphincs.signatureLength)
			);

			superSphincs.verifyDetached(
				signature,
				message,
				publicKey,
				function (isValid, messageHash) {
					if (isValid) {
						callback(message, messageHash);
					}
					else {
						callback(null, null, superSphincs.errorMessages.open);
					}
				}
			);
		}
		catch (_) {
			callback(null, null, superSphincs.errorMessages.open);
		}
	},

	verifyDetached: function (signature, message, publicKey, callback) {
		try {
			signature	= decodeSignature(signature);

			var hash	= hashMessage(message);

			var sphincsIsValid	= sphincs.verifyDetached(
				new Uint8Array(
					signature.buffer,
					rsa.signatureLength,
					sphincs.signatureLength
				),
				hash.bytes,
				new Uint8Array(publicKey.buffer, rsa.publicKeyLength)
			);

			rsa.verifyDetached(
				new Uint8Array(signature.buffer, 0, rsa.signatureLength),
				hash.bytes,
				new Uint8Array(publicKey.buffer, 0, rsa.publicKeyLength),
				function (rsaIsValid, err) {
					if (err) {
						rsaIsValid	= true;
					}

					callback(rsaIsValid && sphincsIsValid, hash.hex);
				}
			);
		}
		catch (_) {
			callback(null, null, superSphincs.errorMessages.verify);
		}
	}
};



return superSphincs;

}());


if (isNode) {
	module.exports		= superSphincs;
}
else {
	self.superSphincs	= superSphincs;
}
