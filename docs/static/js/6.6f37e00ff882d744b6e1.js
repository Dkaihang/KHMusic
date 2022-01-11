webpackJsonp([6],{KdGk:function(t,s){},fRlY:function(t,s){},fx9W:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Dd8w"),o=e.n(i),n=e("gyMJ"),a=e("j8mR"),l=e("t6GB"),r=e("NYxO"),c={name:"SongDetail",data:function(){return{code:0,status:0}},components:{MusicNoData:l.a,MusicPlay:a.a},methods:{getSongInfo:function(){var t=this;n.a.getSongInfo(this.$route.params.rid).then(function(s){t.code=parseInt(s.code),t.$store.commit("setSongInfo",s.data)}).catch(function(){}),n.a.getSongLrc(this.$route.params.rid).then(function(s){t.status=parseInt(s.status),t.$store.commit("setLrcList",s.data.lrclist)}).catch(function(){})},getSongUrl:function(){var t=this;n.a.getPlayUrl({mid:this.$route.params.rid,type:"music"}).then(function(s){t.$store.commit("setSongUrl",s.data.url)}).catch(function(){})},imgError:function(t){t.currentTarget.src="https://h5static.kuwo.cn/upload/image/4f768883f75b17a426c95b93692d98bec7d3ee9240f77f5ea68fc63870fdb050.png",t.currentTarget.onerror=null}},computed:o()({},Object(r.b)(["isLrc","lrcList","curTime","songInfo"])),watch:{isLrc:{handler:function(t,s){this.$refs.lrc.scrollTop=40*t}},curTime:{handler:function(t,s){for(var e=0;e<this.lrcList.length-1;e++)parseFloat(this.lrcList[e].time)<=t+.4&&parseFloat(this.lrcList[e+1].time)>=t+.4&&this.$store.commit("setIsLrc",e);parseFloat(this.lrcList[this.lrcList.length-1].time)<=t+.4&&this.$store.commit("setIsLrc",this.lrcList.length-1)}}},created:function(){this.getSongInfo(),this.getSongUrl(),this.$store.commit("setIsPlay",!1)},mounted:function(){}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"main"},[e("div",{staticClass:"bg_mask"}),t._v(" "),e("div",{staticClass:"bg",style:{backgroundImage:"url("+t.songInfo.pic+")"}}),t._v(" "),e("div",{staticClass:"main_con"},[e("div",[e("div",[e("div",{staticClass:"info"},[e("div",{staticClass:"cover_out"},[e("img",{staticClass:"pic",attrs:{src:t.songInfo.pic||"noimg.jpg"},on:{error:function(s){return t.imgError(s)}}})]),t._v(" "),e("div",[e("span",{staticClass:"title"},[t._v(t._s(t.songInfo.name))]),t._v(" "),e("p",{staticClass:"artist flex_c"},[e("span",[t._v(t._s(t.songInfo.artist))])]),t._v(" "),e("p",{staticClass:"song_info"},[e("span",[t._v("专辑：")]),t._v(" "),e("span",{staticClass:"album_name"},[t._v(t._s(t.songInfo.album))]),t._v(" "),e("span",[t._v("发行时间：")]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.songInfo.releaseDate))])])])])]),t._v(" "),e("div",{ref:"lrc",staticClass:"lrc"},[t._l(4,function(t){return e("p",{key:"before"+t})}),t._v(" "),t._l(t.lrcList,function(s,i){return e("p",{key:i,class:{active:t.isLrc===i}},[t._v(t._s(s.lineLyric))])}),t._v(" "),t._l(4,function(t){return e("p",{key:"after"+t})})],2)])])])},staticRenderFns:[]};var d=e("VU/8")(c,u,!1,function(t){e("rFdw")},"data-v-d8452fa8",null);s.default=d.exports},j8mR:function(t,s,e){"use strict";var i=e("Dd8w"),o=e.n(i),n=e("NYxO"),a=e("gyMJ"),l=e("msXN"),r=e("VuIw"),c={components:{MusicTable:e("MwAD").a},name:"MusicPlay",mixins:[l.a],data:function(){return{playTime:"00:00",isShow:!1,playMode:0,isVolume:!0,defaultImg:e("k6x5"),tempVolume:0,realVolume:50,playList:[],index:0}},created:function(){},methods:{setPlayOrPause:function(){this.$store.commit("setIsPlay",!this.isPlay)},audioEnd:function(){switch(this.index=r.a.getLocalStorage("play_song_index"),this.playMode){case 0:this.index+=1,this.index>=this.playList.length&&(this.index=0),this.getSongInfo(this.index);break;case 1:this.getSongInfo(this.index);break;case 2:this.index+=1,this.index>=this.playList.length&&(this.index=this.playList.length-1,this.$store.commit("setIsPlay",!1));break;case 3:this.index=Math.floor(Math.random()*this.playList.length),this.getSongInfo(this.index)}r.a.setLocalStorage("play_song_index",this.index)},download:function(){window.location.href=this.songUrl},setVolume:function(){var t=this.$refs.audio;this.isVolume=!this.isVolume,this.isVolume?(this.realVolume=this.tempVolume,r.a.setLocalStorage("volume",this.tempVolume)):(this.tempVolume=r.a.getLocalStorage("volume"),this.realVolume=0,r.a.setLocalStorage("volume",0)),t.volume=.01*this.realVolume},floatToTime:function(t){var s=t/60|0,e=t%60|0,i=void 0;return i=s<10?"0"+s+":":s+":",i+=e<10?"0"+e:e},timeUpdate:function(){var t=this.$refs.audio;this.playTime=this.floatToTime(t.currentTime),t.volume=.01*this.realVolume,this.$refs.progress.style="width:"+t.currentTime/(t.duration/340)+"px",this.$store.commit("setCurTime",t.currentTime),t.currentTime<=1&&this.$store.commit("setIsLrc",0)},progressMove:function(t,s){var e=document.documentElement.scrollLeft||document.body.scrollLeft,i=this.$refs.audio;if("volume"===s){var o=t.clientX+e-this.$refs.volume.getBoundingClientRect().left;i.volume=.01*o,this.realVolume=0|o,r.a.setLocalStorage("volume",this.realVolume),this.$refs.volume.style="width:"+o+"px"}if("progress"===s){var n=t.clientX+e-this.$refs.progress.getBoundingClientRect().left;i.currentTime=n*(i.duration/340)}},progressBtnMove:function(t){var s=this,e=document.documentElement.scrollLeft||document.body.scrollLeft,i=this.$refs.audio;document.onmousemove=function(o){if("volume"===t){var n=o.clientX+e-s.$refs.volume.getBoundingClientRect().left;n>100?n=100:n<0&&(n=0),i.volume=.01*n,s.realVolume=0|n,r.a.setLocalStorage("volume",s.realVolume),s.$refs.volume.style="width:"+n+"px"}if("progress"===t){var a=o.clientX+e-s.$refs.progress.getBoundingClientRect().left;a>340?a=340:a<0&&(a=0),i.currentTime=a*(i.duration/340)}},document.onmouseup=function(t){document.onmousemove=null,document.onmouseup=null}},getSongInfo:function(t){var s=this;this.$store.commit("setIsPlay",!1),this.$store.commit("setSongInfo",r.a.getLocalStorage("song_list")[t]),this.$store.commit("setPlaySong",this.playList[t].rid),a.a.getPlayUrl({mid:r.a.getLocalStorage("song_list")[t].rid,type:"music"}).then(function(t){s.$store.commit("setSongUrl",t.data.url),s.$store.commit("setIsPlay",!0)}).catch(function(){})},getPreSong:function(){this.index=r.a.getLocalStorage("play_song_index")||0,3===this.playMode?this.index=Math.floor(Math.random()*this.playList.length):(this.index-=1,this.index<0&&(this.index=this.playList.length-1)),r.a.setLocalStorage("play_song_index",this.index),this.getSongInfo(this.index)},getNextSong:function(){this.index=r.a.getLocalStorage("play_song_index")||0,3===this.playMode?this.index=Math.floor(Math.random()*this.playList.length):(this.index+=1,this.index>=this.playList.length&&(this.index=0)),r.a.setLocalStorage("play_song_index",this.index),this.getSongInfo(this.index)}},computed:o()({},Object(n.b)(["songInfo","songUrl","isPlay"])),watch:{isPlay:{handler:function(t,s){var e=this.$refs.audio;!0===t?setTimeout(function(){e.play()},200):e.pause(),this.playList=r.a.getLocalStorage("song_list")}}},mounted:function(){var t=this,s=this;window.onscroll=function(){var t=-(document.documentElement.scrollLeft||document.body.scrollLeft);s.$refs.play.style.left=t+"px"},window.onclick=function(s){t.$refs.playList.contains(s.target)||t.$refs.playListBtn.contains(s.target)||(t.isShow=!1)},this.$store.commit("setIsPlay",!1),null===r.a.getLocalStorage("volume")&&r.a.setLocalStorage("volume",50),this.$refs.audio.volume=.01*r.a.getLocalStorage("volume"),this.realVolume=r.a.getLocalStorage("volume"),null!=r.a.getLocalStorage("play_song_index")?this.index=r.a.getLocalStorage("play_song_index"):r.a.setLocalStorage("play_song_index",0),null!=r.a.getLocalStorage("song_list")&&(this.playList=r.a.getLocalStorage("song_list"),this.$store.commit("setSongInfo",this.playList[this.index]),this.$store.commit("setPlaySong",this.playList[this.index].rid),a.a.getPlayUrl({mid:this.playList[this.index].rid,type:"music"}).then(function(t){s.$store.commit("setSongUrl",t.data.url)}).catch(function(){}))},beforeDestroy:function(){window.onscroll=null,window.onclick=null}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"play"}},[e("div",{ref:"play",staticClass:"play_bar"},[e("div",{staticClass:"col_l flex_c",class:{no_list:0===t.playList.length}},[0===t.playList.length?e("div",{staticStyle:{width:"100%",height:"100%",position:"absolute","z-index":"10"}}):t._e(),t._v(" "),e("i",{staticClass:"iconfont icon-bar_icon_pre_",attrs:{title:"上一首"},on:{click:function(s){return t.getPreSong()}}}),t._v(" "),e("i",{staticClass:"iconfont",class:t.isPlay?"icon-bar_icon_pause_":"icon-bar_icon_play_1",attrs:{id:"play",title:t.isPlay?"暂停":"播放"},on:{click:function(s){return t.setPlayOrPause()}}}),t._v(" "),e("i",{staticClass:"iconfont icon-bar_icon_next_",attrs:{title:"下一首"},on:{click:function(s){return t.getNextSong()}}})]),t._v(" "),e("div",{staticClass:"col_c flex_c"},[0===t.playList.length?e("div",{staticStyle:{width:"100%",height:"100%",position:"absolute","z-index":"10"}}):t._e(),t._v(" "),e("div",{staticClass:"cover_out"},[e("img",{staticClass:"pic",attrs:{src:t.songInfo.pic||t.defaultImg},on:{click:function(s){return t.goPlayPage(t.songInfo.rid)}}})]),t._v(" "),e("div",[e("div",{staticClass:"songInfo flex_c"},[e("div",{staticClass:"info flex_c"},[e("span",{staticClass:"song_name",on:{click:function(s){return t.goPage("music",t.songInfo.rid)}}},[t._v(t._s(t.songInfo.name||"Music"))]),t._v(" "),e("span",{staticClass:"artist"},[t._v(" - "+t._s(t.songInfo.artist))])]),t._v(" "),e("span",{staticClass:"time"},[t._v(t._s(t.playTime)+"/"+t._s(t.songInfo.songTimeMinutes||"00:00"))])]),t._v(" "),e("div",{staticClass:"process"},[e("div",{staticClass:"progress_bar",on:{mousedown:function(s){return t.progressMove(s,"progress")}}},[e("div",{ref:"progress",staticClass:"progress"},[e("div",{staticClass:"progress_btn",on:{mousedown:function(s){return t.progressBtnMove("progress")}}})])])])])]),t._v(" "),e("div",{staticClass:"col_r flex_c"},[e("i",{staticClass:"prev icon_heart iconfont icon-bar_icon_heart_",attrs:{title:"收藏歌曲"}}),t._v(" "),e("i",{staticClass:"prev iconfont icon-bar_icon_download_",attrs:{title:"下载歌曲"},on:{click:function(s){return t.download()}}}),t._v(" "),e("span",{on:{click:function(s){t.playMode++,t.playMode>3&&(t.playMode=0)}}},[e("i",{directives:[{name:"show",rawName:"v-show",value:0===t.playMode,expression:"playMode===0"}],staticClass:"prev iconfont icon-bar_icon_loop_",attrs:{title:"循环播放"}}),t._v(" "),e("i",{directives:[{name:"show",rawName:"v-show",value:1===t.playMode,expression:"playMode===1"}],staticClass:"prev iconfont icon-bar_icon_repeat_",attrs:{title:"单曲循环"}}),t._v(" "),e("i",{directives:[{name:"show",rawName:"v-show",value:2===t.playMode,expression:"playMode===2"}],staticClass:"prev iconfont icon-bar_icon_list_",attrs:{title:"顺序播放"}}),t._v(" "),e("i",{directives:[{name:"show",rawName:"v-show",value:3===t.playMode,expression:"playMode===3"}],staticClass:"prev iconfont icon-bar_icon_random_",attrs:{title:"随机播放"}})]),t._v(" "),e("span",{ref:"playListBtn",staticClass:"playList",on:{click:function(s){t.isShow=!t.isShow}}},[0!=t.playList.length?e("span",{staticClass:"play_count"},[t._v(t._s(t.playList.length))]):t._e(),t._v(" "),e("i",{staticClass:"prev iconfont icon-bar_icon_playlistfuzhi",attrs:{title:"歌曲列表"}})]),t._v(" "),e("span",{on:{click:function(s){return t.setVolume()}}},[e("i",{directives:[{name:"show",rawName:"v-show",value:!t.isVolume,expression:"!isVolume"}],staticClass:"iconfont icon-bar_icon_mute",attrs:{title:"静音"}}),t._v(" "),e("i",{directives:[{name:"show",rawName:"v-show",value:t.isVolume,expression:"isVolume"}],staticClass:"iconfont icon-bar_icon_volume_",attrs:{title:"音量"}})]),t._v(" "),e("div",{staticClass:"volume"},[e("div",{staticClass:"progress_bar",on:{mousedown:function(s){t.progressMove(s,"volume")}}},[e("div",{ref:"volume",staticClass:"progress",style:"width:"+t.realVolume+"px"},[e("div",{staticClass:"progress_btn",attrs:{title:t.realVolume},on:{mousedown:function(s){return t.progressBtnMove("volume")}}})])])])]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],ref:"playList",staticClass:"play_list"},[e("div",{staticClass:"top flex_c"},[e("span",[t._v("播放列表")]),t._v(" "),e("div",{staticClass:"flex_c"},[t._m(0),t._v(" "),e("i",{staticClass:"close iconfont icon-list_icon_x",on:{click:function(s){t.isShow=!1}}})])]),t._v(" "),e("music-table",{staticClass:"list",attrs:{songList:t.playList,playFunc:t.getSongInfo},scopedSlots:t._u([{key:"opts",fn:function(){return[e("i",{staticClass:"iconfont icon-list_clean_n"})]},proxy:!0}])})],1)]),t._v(" "),e("audio",{ref:"audio",attrs:{src:t.songUrl},on:{timeupdate:t.timeUpdate,ended:t.audioEnd}})])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"flex_c"},[s("i",{staticClass:"iconfont icon-list_clean_n"}),this._v(" "),s("span",[this._v("清空列表")])])}]};var d=e("VU/8")(c,u,!1,function(t){e("fRlY"),e("KdGk")},"data-v-3c0e3d8b",null);s.a=d.exports},rFdw:function(t,s){}});
//# sourceMappingURL=6.6f37e00ff882d744b6e1.js.map