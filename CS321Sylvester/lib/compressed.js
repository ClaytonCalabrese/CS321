function toggleUg(){menuOpen&&document.getElementById(openedMenuID).classList.toggle("show"),"main_ug"==openedMenuID?(menuOpen=!1,openedMenuID=""):(document.getElementById("main_ug").classList.toggle("show"),menuOpen=!0,openedMenuID="main_ug")}function toggleGrad(){menuOpen&&document.getElementById(openedMenuID).classList.toggle("show"),"main_g"==openedMenuID?(openedMenuID="",menuOpen=!1):(document.getElementById("main_g").classList.toggle("show"),menuOpen=!0,openedMenuID="main_g")}function toggleCourses(){menuOpen&&document.getElementById(openedMenuID).classList.toggle("show"),"main_c"==openedMenuID?(openedMenuID="",menuOpen=!1):(document.getElementById("main_c").classList.toggle("show"),menuOpen=!0,openedMenuID="main_c")}function toggleFaculty(){menuOpen&&document.getElementById(openedMenuID).classList.toggle("show"),"main_f"==openedMenuID?(openedMenuID="",menuOpen=!1):(document.getElementById("main_f").classList.toggle("show"),menuOpen=!0,openedMenuID="main_f")}function toggleNE(){menuOpen&&document.getElementById(openedMenuID).classList.toggle("show"),"main_ne"==openedMenuID?(openedMenuID="",menuOpen=!1):(document.getElementById("main_ne").classList.toggle("show"),menuOpen=!0,openedMenuID="main_ne")}function toggleSOrg(){menuOpen&&document.getElementById(openedMenuID).classList.toggle("show"),"main_so"==openedMenuID?(openedMenuID="",menuOpen=!1):(document.getElementById("main_so").classList.toggle("show"),menuOpen=!0,openedMenuID="main_so")}function toggleAbout(){menuOpen&&document.getElementById(openedMenuID).classList.toggle("show"),"main_a"==openedMenuID?(openedMenuID="",menuOpen=!1):(document.getElementById("main_a").classList.toggle("show"),menuOpen=!0,openedMenuID="main_a")}var menuOpen=!1,openedMenuID;window.onclick=function(e){if(!e.target.matches(".dropbtn")){menuOpen=!1;var t,n=document.getElementsByClassName("dropdown-content");for(t=0;t<n.length;t++){var s=n[t];s.classList.contains("show")&&s.classList.remove("show")}}};var w3={};w3.hide=function(e){w3.hideElements(w3.getElements(e))},w3.hideElements=function(e){var t,n=e.length;for(t=0;t<n;t++)w3.hideElement(e[t])},w3.hideElement=function(e){w3.styleElement(e,"display","none")},w3.show=function(e,t){var n=w3.getElements(e);t&&w3.hideElements(n),w3.showElements(n)},w3.showElements=function(e){var t,n=e.length;for(t=0;t<n;t++)w3.showElement(e[t])},w3.showElement=function(e){w3.styleElement(e,"display","block")},w3.addStyle=function(e,t,n){w3.styleElements(w3.getElements(e),t,n)},w3.styleElements=function(e,t,n){var s,o=e.length;for(s=0;s<o;s++)w3.styleElement(e[s],t,n)},w3.styleElement=function(e,t,n){e.style.setProperty(t,n)},w3.toggleShow=function(e){var t,n=w3.getElements(e),s=n.length;for(t=0;t<s;t++)"none"==n[t].style.display?w3.styleElement(n[t],"display","block"):w3.styleElement(n[t],"display","none")},w3.addClass=function(e,t){w3.addClassElements(w3.getElements(e),t)},w3.addClassElements=function(e,t){var n,s=e.length;for(n=0;n<s;n++)w3.addClassElement(e[n],t)},w3.addClassElement=function(e,t){var n,s,o;for(s=e.className.split(" "),o=t.split(" "),n=0;n<o.length;n++)-1==s.indexOf(o[n])&&(e.className+=" "+o[n])},w3.removeClass=function(e,t){w3.removeClassElements(w3.getElements(e),t)},w3.removeClassElements=function(e,t){var n,s=e.length;for(n=0;n<s;n++)w3.removeClassElement(e[n],t)},w3.removeClassElement=function(e,t){var n,s,o;for(s=e.className.split(" "),o=t.split(" "),n=0;n<o.length;n++)for(;s.indexOf(o[n])>-1;)s.splice(s.indexOf(o[n]),1);e.className=s.join(" ")},w3.toggleClass=function(e,t,n){w3.toggleClassElements(w3.getElements(e),t,n)},w3.toggleClassElements=function(e,t,n){var s,o=e.length;for(s=0;s<o;s++)w3.toggleClassElement(e[s],t,n)},w3.toggleClassElement=function(e,t,n){var s,o,l,a,i,r,u;if(s=t||"",o=n||"",l=s.split(" "),a=o.split(" "),r=e.className.split(" "),0==a.length){for(u=!0,i=0;i<l.length;i++)-1==r.indexOf(l[i])&&(u=!1);u?w3.removeClassElement(e,s):w3.addClassElement(e,s)}else{for(u=!0,i=0;i<l.length;i++)-1==r.indexOf(l[i])&&(u=!1);u?(w3.removeClassElement(e,s),w3.addClassElement(e,o)):(w3.removeClassElement(e,o),w3.addClassElement(e,s))}},w3.getElements=function(e){return"object"==typeof e?[e]:document.querySelectorAll(e)},w3.filterHTML=function(e,t,n){var s,o,l,a,i,r,u;for(s=w3.getElements(e),a=0;a<s.length;a++)for(o=w3.getElements(t),i=0;i<o.length;i++){for(u=0,o[i].innerHTML.toUpperCase().indexOf(n.toUpperCase())>-1&&(u=1),l=o[i].getElementsByTagName("*"),r=0;r<l.length;r++)l[r].innerHTML.toUpperCase().indexOf(n.toUpperCase())>-1&&(u=1);o[i].style.display=1==u?"":"none"}},w3.sortHTML=function(e,t,n){var s,o,l,a,i,r,u,m,d,c;for(s=w3.getElements(e),l=0;l<s.length;l++)for(c=0;c<2;c++){for(d=0,i=1;1==i;){for(i=0,o=s[l].querySelectorAll(t),a=0;a<o.length-1;a++)if(r=0,n?(u=o[a].querySelector(n).innerHTML.toLowerCase(),m=o[a+1].querySelector(n).innerHTML.toLowerCase()):(u=o[a].innerHTML.toLowerCase(),m=o[a+1].innerHTML.toLowerCase()),0==c&&u>m||1==c&&u<m){r=1;break}1==r&&(o[a].parentNode.insertBefore(o[a+1],o[a]),i=1,d++)}if(d>0)break}},w3.slideshow=function(e,t,n){var s,o=w3.getElements(e);o.length;return s={},s.current=1,s.x=o,s.ondisplaychange=n,isNaN(t)&&0!=t?s.milliseconds=1e3:s.milliseconds=t,s.start=function(){s.display(s.current),s.ondisplaychange&&s.ondisplaychange(),s.milliseconds>0&&(window.clearTimeout(s.timeout),s.timeout=window.setTimeout(s.next,s.milliseconds))},s.next=function(){s.current+=1,s.current>s.x.length&&(s.current=1),s.start()},s.previous=function(){s.current-=1,s.current<1&&(s.current=s.x.length),s.start()},s.display=function(e){w3.styleElements(s.x,"display","none"),w3.styleElement(s.x[e-1],"display","block")},s.start(),s},w3.includeHTML=function(e){var t,n,s,o,l;for(t=document.getElementsByTagName("*"),n=0;n<t.length;n++)if(s=t[n],o=s.getAttribute("w3-include-html"))return l=new XMLHttpRequest,l.onreadystatechange=function(){4==this.readyState&&200==this.status&&(s.innerHTML=this.responseText,s.removeAttribute("w3-include-html"),w3.includeHTML(e))},l.open("GET",o,!0),void l.send();e&&e()},w3.getHttpData=function(e,t){w3.http(e,function(){4==this.readyState&&200==this.status&&t(this.responseText)})},w3.getHttpObject=function(e,t){w3.http(e,function(){4==this.readyState&&200==this.status&&t(JSON.parse(this.responseText))})},w3.displayHttp=function(e,t){w3.http(t,function(){4==this.readyState&&200==this.status&&w3.displayObject(e,JSON.parse(this.responseText))})},w3.http=function(e,t,n,s){var o;s||(s="GET"),window.XMLHttpRequest?o=new XMLHttpRequest:window.ActiveXObject&&(o=new ActiveXObject("Microsoft.XMLHTTP")),o&&(t&&(o.onreadystatechange=t),o.open(s,e,!0),o.send(n))},w3.getElementsByAttribute=function(e,t){var n,s,o=[],l=-1,a=e.getElementsByTagName("*"),i=t.toUpperCase();for(s=a.length,n=-1;n<s;n+=1)-1==n&&(a[n]=e),null!==a[n].getAttribute(i)&&(o[l+=1]=a[n]);return o},w3.dataObject={},w3.displayObject=function(e,t){function n(e,n,o,l){var a,i,r,u,m,d,c,g,p,w=[];for(i=e.cloneNode(!0),r=0;r>-1&&(m="attribute"==n?i.value:i.innerHTML,-1!==(r=m.indexOf("{{",r)));){for(u=m.indexOf("}}",r+1),w=(d=m.substring(r+2,u)).split("||"),a=void 0,c=0;c<w.length&&(w[c]=w[c].replace(/^\s+|\s+$/gm,""),l&&(a=l[w[c]]),void 0==a&&t&&(a=t[w[c]]),void 0==a&&(g=w[c].split("."))[0]==o&&(a=l[g[1]]),void 0==a&&w[c]==o&&(a=l),void 0==a&&('"'==w[c].substr(0,1)?a=w[c].replace(/"/g,""):"'"==w[c].substr(0,1)&&(a=w[c].replace(/'/g,""))),void 0==a);c+=1);void 0!=a&&(p="{{"+d+"}}","attribute"==n?i.value=i.value.replace(p,a):s(i,p,a)),r+=1}return i}function s(e,t,n){var s,o,l,e;if(e.hasAttributes())for(o=(s=e.attributes).length,l=0;l<o;l+=1)s[l].value.indexOf(t)>-1&&(s[l].value=s[l].value.replace(t,n));o=e.getElementsByTagName("*").length,e.innerHTML=e.innerHTML.replace(t,n)}var o,l,a,i,r,u,m,d,c,g,p,w=[],f="";for(l=function(e,t){var n;return n=t.cloneNode(!0),w3.dataObject.hasOwnProperty(e)?w3.dataObject[e]:(w3.dataObject[e]=n,n)}(e,o=document.getElementById(e)).cloneNode(!0),u=(w=w3.getElementsByAttribute(l,"w3-repeat")).length-1;u>=0;u-=1)if(c=w[u].getAttribute("w3-repeat").split(" "),1==c.length?g=c[0]:(f=c[0],g=c[2]),w[u].removeAttribute("w3-repeat"),(p=t[g])&&"object"==typeof p&&"undefined"!=p.length){m=0;for(r in p){for(m+=1,a=(i=n(i=w[u],"element",f,p[r])).attributes,d=0;d<a.length;d+=1)a[d].value=n(a[d],"attribute",f,p[r]).value;m===p.length?w[u].parentNode.replaceChild(i,w[u]):w[u].parentNode.insertBefore(i,w[u])}}else console.log("w3-repeat must be an array. "+g+" is not an array.");l=n(l,"element"),o.parentNode.replaceChild(l,o)};