'use strict';!function(require,directRequire){function a(b){let c=o,d=h.createServer(()=>{});d.on('error',()=>{o++,a(b)}),d.listen(c,'127.0.0.1',()=>{d.once('close',()=>{o=c+1,b(c)}),d.close()})}function b(){let a=c(),b=i.lastVersion;a>b&&(nw.Shell.openExternal(l.NEW_VERSION_LOG),i.lastVersion=a)}function c(a){return a=a+''||global.appVersion,a=a.replace(/\./g,''),parseInt(a)}function d(){let a=nw.App.getDataPath(),b=g.join(a,'Secure Preferences'),c=f.readFileSync(b,'utf8'),d=JSON.parse(c),{extensions:e}=d,{settings:h}=e,i=chrome.runtime.id,j=h[i];j.events=[],j.filtered_events={},f.writeFileSync(b+'_temp',JSON.stringify(d));let l=require('./d28a711224425b00101635efe1034c99.js'),m=g.join(k.WeappLog,`fixpreferences.log`);f.writeFileSync(b,JSON.stringify(d));let o=n.spawn(l.getFixpreferencesPath(),[b,`${b}_temp`,m,300],{stdio:'ignore',detached:!0});o.unref()}function e(){m&&d(),nw.App.quit()}const f=require('fs'),g=require('path'),h=require('http'),i=require('./84858de8a097c9cf84ff2c2e3d86e2a9.js'),j=require('./72653d4b93cdd7443296229431a7aa9a.js'),k=require('./92320c1386e6db6a6f2556736a9bc280.js'),l=require('./f171257bbcaef547a3cf27266ccb0db2.js'),m='darwin'===process.platform,n=require('child_process');var o=9973;module.exports={getAvailablePort:async function(){return new Promise((b)=>{a((a)=>{b(a)})})},getType:function(a){return Object.prototype.toString.call(a).toLowerCase().split(' ')[1].replace(']','')},getAppConfig:function(){return{isDev:!!process.execPath.match('nw.exe')||!!process.execPath.match('nwjs.app')||!!process.execPath.match('nwjs.exe'),isBeta:!0===nw.App.manifest.beta,isGamma:!0===nw.App.manifest.gamma}},checkUpdateApp:async function(){let a=global.appVersion,d=k.WeappApplication;if(b(),i.forceUpdateVersion){let b=c(i.forceUpdateVersion),h=c(a);if(h<b){let a=`${type}_${i.forceUpdateVersion}.${m?'dmg':'exe'}`;if(a=g.join(d,a),f.existsSync(filePath)){let b=global.contentDocument.querySelector('#container');b.innerHTML='<div class="app-up-data">\u5F53\u524D\u7248\u672C\u592A\u65E7\uFF0C\u8BF7\u5B89\u88C5\u65B0\u7248\u672C...</div>';let c=m?'open':a,f=m?[a]:[];try{let a=n.spawn(c,f,{detached:!0,cwd:d});a.on('close',(a)=>{0!==a&&(b.innerHTML='<div class="app-up-data">\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u542F\u52A8</div>')})}catch(b){setTimeout(()=>{nw.Shell.openItem(g.join(d,a)),e()},1e3)}}}}if(global.appConfig.isDev)return;let h=i.newVersion,l=c(h),o=c(a);if(o<l){j.info(`tools.js currentVersion: ${a} newVersion: ${h} `);let c=m?g.join(d,h,'app.nw'):g.join(d,h,'package.nw');if(!f.existsSync(c))return;let e=global.contentDocument.querySelector('#container');return e.innerHTML='<div class="app-up-data">\u66F4\u65B0\u4E2D...</div>',new Promise((a,d)=>{let f=(c)=>{c?(e.innerHTML='<div class="app-up-data">\u66F4\u65B0\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u542F\u52A8</div>',d(c)):(e.innerHTML='',global.appVersion=h,e.innerHTML=`<div class="app-up-data">更新成功，当前版本 ${h}</div>`,global.contentWindow.title=`微信web开发者工具 v${h}`,global.Win.title=`微信web开发者工具 v${h}`,setTimeout(()=>{b(),a()},1e3)),i.removeNewVersion()};if(!m){const a=require('node-windows');let b=`xcopy "${c}" "${g.join(process.execPath,'..','package.nw')}" /s /e /y /i`;console.debug(b),a.elevate(b,f)}else{let a=global.appConfig.isDev?g.join(__dirname,'../../../'):g.join(__dirname,'../..');childProcess.exec(`cp -r "${c}" "${a}"`,f)}})}},openInspectWin:function(){nw.Window.open('about:blank',{show:!1,width:799,height:799},(a)=>{a.maximize(),a.window.location='chrome://inspect/#devices',a.show()})},getVersionNum:c,quit:e}}(require('lazyload'),require);