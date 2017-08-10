function trySetReady(){isJsLoaded&&uiManager&&isCssLoaded&&app.postEvent("uiReady")}function releaseUi(){eventCallbacks={},uiManager&&(subtitlesDropdown&&subtitlesDropdown.removeEventListener("DOMSubtreeModified",subtitlesChange),uiManager.release())}function reinitializeUiManager(){releaseUi(),uiManager=bitmovin.playerui.UIManager.Factory.buildDefaultSmallScreenUI(player),(subtitlesDropdown=document.getElementById("bmpui-id-29")).addEventListener("DOMSubtreeModified",subtitlesChange),addCustomEventHandler()}function showFullScreenButtons(e){var t=document.getElementsByClassName("bmpui-ui-fullscreentogglebutton"),n="none";for(e&&(n="block"),i=0;i<t.length;i++)t.item(i).style.display=n}function addCustomEventHandler(){player.addEventHandler("onFullscreenEnabled",onFullscreenEnabled),player.addEventHandler("onFullscreenDisabled",onFullscreenDisabled)}function onFullscreenEnabled(){showFullScreenButtons(!0)}function onFullscreenDisabled(){showFullScreenButtons(!1)}function finishedLoadingJs(){isJsLoaded=!0,reinitializeUiManager(),trySetReady()}function finishedLoadingCss(){isCssLoaded=!0,document.getElementsByTagName("body").item(0).style.visibility="visible",trySetReady()}function setUiJs(e){var t=document.getElementById("uijs");t&&e===t.src||(isJsLoaded=!1,releaseUi(),t&&t.parentElement.removeChild(t),(t=document.createElement("script")).setAttribute("id","uijs"),t.type="text/javascript",document.getElementsByTagName("head").item(0).appendChild(t),t.addEventListener("load",finishedLoadingJs),t.src=e)}function setUiCss(e){var t=document.getElementById("uicss");if(!t||e!==t.getAttribute("href")){isCssLoaded=!1,t&&t.parentElement.removeChild(t);var n=document.styleSheets.length;(t=document.createElement("link")).setAttribute("id","uicss"),t.setAttribute("rel","stylesheet"),t.setAttribute("type","text/css");var i=document.getElementsByTagName("head").item(0);i.insertBefore(t,i.firstChild),document.getElementsByTagName("body").item(0).style.visibility="hidden",t.setAttribute("href",e);var a=setInterval(function(){document.styleSheets.length>n&&(finishedLoadingCss(),clearInterval(a))},10)}}function getParameterByName(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}var isCssLoaded=!1,isJsLoaded=!1,uiCss=getParameterByName("uicss");setUiCss(uiCss);var uiJs=getParameterByName("uijs");setUiJs(uiJs),window.addEventListener("resize",function(){var e={width:window.innerWidth+"px",height:window.innerHeight+"px"};eventCallbacks.hasOwnProperty("onPlayerResize")&&eventCallbacks.onPlayerResize.forEach(function(t){t(e)})});var eventCallbacks={},subtitlesDropdown,subtitlesChange=function(){subtitlesDropdown.childElementCount>1?document.getElementsByClassName("bmpui-ui-settingstogglebutton").item(0).style.display="block":document.getElementsByClassName("bmpui-ui-settingstogglebutton").item(0).style.display="none"},fireEvent=function(e,t){eventCallbacks.hasOwnProperty(e)&&(t=decodeURIComponent(t),eventCallbacks[e].forEach(function(e){e(JSON.parse(t))}))},app={duration:0,currentTime:0,maxTimeShift:0,timeShift:0,isPlaying:!1,isPaused:!1,isLive:!1,isCastAvailable:!1,isCasting:!1,isReady:!1,isMuted:!1,config:{key:"",source:{},playback:{},style:{},cast:{},logs:{},events:{}},availableSubtitlesById:{},postEvent:function(e,t){void 0===t&&(t={});var n=Object.assign({event:e},t);window.webkit.messageHandlers.ios.postMessage(n)}},getAvailableSubtitlesArray=function(){var e=Object.keys(app.availableSubtitlesById).map(function(e){return app.availableSubtitlesById[e]});return e.length>0&&e.unshift({id:null,url:null,lang:null,label:"off"}),e},uiManager,player={EVENT:bitmovin.player.EVENT,addEventHandler:function(e,t){eventCallbacks.hasOwnProperty(e)||(eventCallbacks[e]=[]),eventCallbacks[e].push(t)},addMetadata:function(e,t){},addSubtitle:function(e){},castStop:function(){app.postEvent("castStop")},castVideo:function(){app.postEvent("castVideo")},clearQueryParameters:function(){},destroy:function(){},enterFullscreen:function(){app.postEvent("enterFullscreen")},exitFullscreen:function(){app.postEvent("exitFullscreen")},getAudio:function(){},getAudioBufferLength:function(){},getAvailableAudio:function(){return[]},getAvailableAudioQualities:function(){return[]},getAvailableImpressionServers:function(){},getAvailableLicenseServers:function(){},getAvailableSubtitles:function(){return getAvailableSubtitlesArray()},getAvailableVideoQualities:function(){return[]},getConfig:function(e){return app.config},getCurrentTime:function(){return app.currentTime},getDownloadedAudioData:function(){},getDownloadedVideoData:function(){},getDroppedFrames:function(){},getDuration:function(){return app.duration},getFigure:function(){return document.getElementById("ui-container")},getManifest:function(){},getMaxTimeShift:function(){return app.maxTimeShift},getPlaybackAudioData:function(){},getPlaybackSpeed:function(){},getPlaybackVideoData:function(){},getPlayerType:function(){},getSnapshot:function(e,t){},getStreamType:function(){},getSubtitle:function(){},getSupportedDRM:function(){},getSupportedTech:function(){},getThumb:function(e){},getTimeShift:function(){return app.timeShift},getTotalStalledTime:function(){},getVersion:function(){},getVideoBufferLength:function(){},getVolume:function(){},getVRStatus:function(){},hasEnded:function(){},isAd:function(){},isCastAvailable:function(){return app.isCastAvailable},isCasting:function(){return app.isCasting},isDRMSupported:function(e){},isFullscreen:function(){},isLive:function(){return app.isLive},isMuted:function(){return app.isMuted},isPaused:function(){return app.isPaused},isPlaying:function(){return app.isPlaying},isReady:function(){return app.isReady},isSetup:function(){return!0},isStalled:function(){},load:function(e,t,n){},mute:function(){app.postEvent("mute")},pause:function(e){app.postEvent("pause")},play:function(e){app.postEvent("play")},removeEventHandler:function(e,t){eventCallbacks.hasOwnProperty(e)&&(eventCallbacks[e]=eventCallbacks[e].filter(function(e){return e!=t}))},removeSubtitle:function(e){},scheduleAd:function(e,t,n){},seek:function(e){app.currentTime=e,app.postEvent("seek",{time:e})},setAudio:function(e){},setAudioQuality:function(e){},setAuthentication:function(e){},setLastSegment:function(e){},setPlaybackSpeed:function(e){},setPosterImage:function(e,t){},setQueryParameters:function(e){},setSkin:function(e){},setSubtitle:function(e){app.postEvent("setSubtitle",{trackID:e})},setup:function(e,t){},setVideoElement:function(e){},setVideoQuality:function(e){},setVolume:function(e){},setVRStereo:function(e){},skipAd:function(){},timeShift:function(e){app.timeShift=e,app.postEvent("timeShift",{offset:e})},unload:function(){},unmute:function(){app.postEvent("unmute")}};