(this.webpackJsonpnomflix=this.webpackJsonpnomflix||[]).push([[0],{24:function(e,t,n){e.exports=n.p+"static/media/joseon.4330f146.png"},44:function(e,t,n){e.exports=n(74)},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(37),o=n.n(i),l=n(5),c=n(6),u=n(8),s=n(7),p=n(9),d=n(19),m=n(17),f=n(12),g=n.n(f),v=n(16),b=n(2),h=n(1),x=n(15),E=n.n(x);function y(){var e=Object(b.a)(["\n  margin-top: 25px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]);return y=function(){return e},e}function j(){var e=Object(b.a)(["\n  font-size: 14px;\n  font-weight: 600;\n  margin-bottom: 25px;\n"]);return j=function(){return e},e}function O(){var e=Object(b.a)(["\n  :not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]);return O=function(){return e},e}var _=h.default.div(O()),w=h.default.span(j()),k=h.default.div(y()),S=function(e){var t=e.title,n=e.children;return r.a.createElement(_,null,r.a.createElement(w,null,t),r.a.createElement(k,null,n))};function M(){var e=Object(b.a)(["\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  font-size: 50px;\n  margin-top: 22px;\n"]);return M=function(){return e},e}var R=h.default.div(M()),T=function(){return r.a.createElement(R,null,r.a.createElement("span",{role:"img","aria-label":"Loaidng"},"\ud83d\udc0e \ud83d\udc0e \ud83d\udc0e"))};function U(){var e=Object(b.a)(["\n  color: ",";\n"]);return U=function(){return e},e}function z(){var e=Object(b.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]);return z=function(){return e},e}var C=h.default.div(z()),W=h.default.span(U(),(function(e){return e.color})),N=function(e){var t=e.text,n=e.color;return r.a.createElement(C,null,r.a.createElement(W,{color:n},t))};function P(){var e=Object(b.a)(["\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.7);\n"]);return P=function(){return e},e}function I(){var e=Object(b.a)(["\n  display: block;\n  font-size: 12px;\n  margin-bottom: 3px;\n"]);return I=function(){return e},e}function F(){var e=Object(b.a)(["\n  margin-bottom: 5px;\n  position: relative;\n"]);return F=function(){return e},e}function A(){var e=Object(b.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"]);return A=function(){return e},e}function q(){var e=Object(b.a)(["\n  bottom: 5px;\n  right: 5px;\n  position: absolute;\n  opacity: 0;\n"]);return q=function(){return e},e}function V(){var e=Object(b.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 4px;\n  backgoround-position: center center;\n  transition: opacity 0.2s linear;\n"]);return V=function(){return e},e}function B(){var e=Object(b.a)(["\n  font-size: 12px;\n"]);return B=function(){return e},e}var D=h.default.div(B()),L=h.default.div(V(),(function(e){return e.bgUrl})),J=h.default.span(q()),G=h.default.div(A(),L,J),H=h.default.div(F()),K=h.default.span(I()),Q=h.default.span(P()),X=function(e){var t=e.id,a=e.imageUrl,i=e.title,o=e.rating,l=e.year,c=e.isMovie,u=void 0!==c&&c,s=e.target,p=e.disabled;return void 0!==p&&p?r.a.createElement(D,null,r.a.createElement(H,null,r.a.createElement(L,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(24)})),r.a.createElement(K,null,i.length>17?"".concat(i.substring(0,17),"..."):i),r.a.createElement(Q,null,l)):r.a.createElement(d.b,{to:u?"/movie/".concat(t):"/show/".concat(t),target:s?"_parent":""},r.a.createElement(D,null,r.a.createElement(G,null,r.a.createElement(L,{bgUrl:a?"https://image.tmdb.org/t/p/w300".concat(a):n(24)}),r.a.createElement(J,null,r.a.createElement("span",{role:"img","aria-label":"rating"},"\u2b50\ufe0f")," ",o,"/10")),r.a.createElement(K,null,i.length>17?"".concat(i.substring(0,17),"..."):i),r.a.createElement(Q,null,l)))};function Y(){var e=Object(b.a)(["\n  padding: 20px;\n"]);return Y=function(){return e},e}var Z=h.default.div(Y()),$=function(e){var t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.error,o=e.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement("title",null,"Movies | Nomflix")),o?r.a.createElement(T,null):r.a.createElement(Z,null,t&&t.length>0&&r.a.createElement(S,{title:"Now Playing"},t.map((function(e){return r.a.createElement(X,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),n&&n.length>0&&r.a.createElement(S,{title:"Upcoming Playing"},n.map((function(e){return r.a.createElement(X,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),a&&a.length>0&&r.a.createElement(S,{title:"Popular Playing"},a.map((function(e){return r.a.createElement(X,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),i&&r.a.createElement(N,{color:"#e74c3c",text:i})))},ee=n(41),te=n.n(ee).a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"4769845e6dd4b68fa6958ca760228cbc",language:"en-US"}}),ne=function(){return te.get("tv/top_rated")},ae=function(){return te.get("tv/popular")},re=function(){return te.get("tv/airing_today")},ie=function(e){return te.get("tv/".concat(e),{params:{append_to_response:"videos"}})},oe=function(e){return te.get("search/tv",{params:{query:encodeURIComponent(e)}})},le=function(){return te.get("movie/now_playing")},ce=function(){return te.get("movie/upcoming")},ue=function(){return te.get("movie/popular")},se=function(e){return te.get("movie/".concat(e),{params:{append_to_response:"videos"}})},pe=function(e){return te.get("search/movie",{params:{query:encodeURIComponent(e)}})},de=function(e){return te.get("collection/".concat(e))},me=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark((function e(){var t,n,a,r,i,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,le();case 3:return t=e.sent,n=t.data.results,e.next=7,ce();case 7:return a=e.sent,r=a.data.results,e.next=11,ue();case 11:i=e.sent,o=i.data.results,this.setState({nowPlaying:n,upcoming:r,popular:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find movies information !"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.nowPlaying,n=e.upcoming,a=e.popular,i=e.error,o=e.loading;return console.log(this.state),r.a.createElement($,{nowPlaying:t,upcoming:n,popular:a,error:i,loading:o})}}]),t}(r.a.Component);function fe(){var e=Object(b.a)(["\n  padding: 0px 20px;\n"]);return fe=function(){return e},e}var ge=h.default.div(fe()),ve=function(e){var t=e.topRated,n=e.popular,a=e.airingToday,i=e.loading,o=e.error;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement("title",null,"TV Show | Nomflix")),i?r.a.createElement(T,null):r.a.createElement(ge,null,t&&t.length>0&&r.a.createElement(S,{title:"Top Rated Shows"},t.map((function(e){return r.a.createElement(X,{key:e.id,id:e.id,title:e.name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1})}))),n&&n.length>0&&r.a.createElement(S,{title:"Popular Shows"},n.map((function(e){return r.a.createElement(X,{key:e.id,id:e.id,title:e.name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1})}))),a&&a.length>0&&r.a.createElement(S,{title:"Airing Today"},a.map((function(e){return r.a.createElement(X,{key:e.id,id:e.id,title:e.name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1})}))),o&&r.a.createElement(N,{color:"#e74c3c",text:o})))},be=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={topRated:null,popular:null,airingToday:null,error:null,loading:!0},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark((function e(){var t,n,a,r,i,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne();case 3:return t=e.sent,n=t.data.results,e.next=7,ae();case 7:return a=e.sent,r=a.data.results,e.next=11,re();case 11:i=e.sent,o=i.data.results,this.setState({topRated:n,popular:r,airingToday:o}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"Can't find TV Information !"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.topRated,n=e.popular,a=e.airingToday,i=e.error,o=e.loading;return console.log(this.state),r.a.createElement(ve,{topRated:t,popular:n,airingToday:a,error:i,loading:o})}}]),t}(r.a.Component);function he(){var e=Object(b.a)(["\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return he=function(){return e},e}function xe(){var e=Object(b.a)(["\n  width: 50px;\n  text-align: center;\n  border-bottom: 5px solid\n    ",";\n  transition: border-bottom 0.5s ease-in-out;\n"]);return xe=function(){return e},e}function Ee(){var e=Object(b.a)(["\n  display: flex;\n"]);return Ee=function(){return e},e}function ye(){var e=Object(b.a)(["\n  color: white;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  padding: 0px 10px;\n  background-color: rgba(20, 20, 20, 0.7);\n  z-index: 10;\n  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 1);\n"]);return ye=function(){return e},e}var je=h.default.header(ye()),Oe=h.default.ul(Ee()),_e=h.default.li(xe(),(function(e){return e.current?"#3498db":"transparent"})),we=Object(h.default)(d.b)(he()),ke=Object(m.g)((function(e){var t=e.location.pathname;return r.a.createElement(je,null,r.a.createElement(Oe,null,r.a.createElement(_e,{current:"/"===t},r.a.createElement(we,{to:"/"},"Movies")),r.a.createElement(_e,{current:"/tv"===t},r.a.createElement(we,{to:"/tv"},"TV")),r.a.createElement(_e,{current:"/search"===t},r.a.createElement(we,{to:"/search"},"Search"))))})),Se=n(4),Me=n.n(Se);function Re(){var e=Object(b.a)(["\n  all: unset;\n  font-size: 28px;\n  width: 100%;\n"]);return Re=function(){return e},e}function Te(){var e=Object(b.a)(["\n  margin-bottom: 50px;\n  width: 100%;\n"]);return Te=function(){return e},e}function Ue(){var e=Object(b.a)(["\n  padding: 0px 20px;\n"]);return Ue=function(){return e},e}var ze=h.default.div(Ue()),Ce=h.default.form(Te()),We=h.default.input(Re()),Ne=function(e){var t=e.movieResults,n=e.tvResults,a=e.searchWords,i=e.error,o=e.loading,l=e.handleSubmit,c=e.updateWords;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement("title",null," Seacrh | Nomflix")),r.a.createElement(ze,null,r.a.createElement(Ce,{onSubmit:l},r.a.createElement(We,{placeholder:"Search Movies or TV Shows ..",value:a,onChange:c})),o?r.a.createElement(T,null):r.a.createElement(r.a.Fragment,null,t&&t.length>0&&r.a.createElement(S,{title:"Movie Results"},t.map((function(e){return r.a.createElement(X,{key:e.id,id:e.id,title:e.original_title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0})}))),n&&n.length>0&&r.a.createElement(S,{title:"TV Results"},n.map((function(e){return r.a.createElement(X,{key:e.id,id:e.id,title:e.name,imageUrl:e.poster_path,rating:e.vote_average,year:e.first_air_date&&e.first_air_date.substring(0,4),isMovie:!1})})))),i&&r.a.createElement(N,{color:"#e74c3c",text:i}),n&&t&&0==n.length&&0==t&&r.a.createElement(N,{color:"#95a5a6",text:"Nothing found"})))};Ne.prototype={movieResults:Me.a.array,tvResults:Me.a.array,searchWords:Me.a.array,loading:Me.a.bool.isRequired,error:Me.a.string,handleSubmit:Me.a.func.isRequired,updateWords:Me.a.func.isRequired};var Pe=Ne,Ie=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={movieResults:null,tvResults:null,searchWords:"",error:null,loading:!1},n.handleSubmit=function(e){e.preventDefault(),""!==n.state.searchWords&&n.searchByWords()},n.updateWords=function(e){var t=e.target.value;n.setState({searchWords:t})},n.searchByWords=Object(v.a)(g.a.mark((function e(){var t,a,r,i,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state.searchWords,n.setState({loading:!0}),e.prev=2,e.next=5,pe(t);case 5:return a=e.sent,r=a.data.results,e.next=9,oe(t);case 9:i=e.sent,o=i.data.results,n.setState({movieResults:r,tvResults:o}),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n.setState({error:"Can't find results ."});case 17:return e.prev=17,n.setState({loading:!1}),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[2,14,17,20]])}))),n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.state,t=e.movieResults,n=e.tvResults,a=e.searchWords,i=e.error,o=e.loading;return console.log(this.state),r.a.createElement(Pe,{movieResults:t,tvResults:n,searchWords:a,error:i,loading:o,handleSubmit:this.handleSubmit,updateWords:this.updateWords})}}]),t}(r.a.Component);function Fe(){var e=Object(b.a)(["\n      height: calc(100vh - 340px);\n      display: grid;\n      grid-template-columns: repeat(auto-fill, 310px);\n      grid-gap: 25px;\n      overflow: scroll;\n    "]);return Fe=function(){return e},e}function Ae(){var e=Object(b.a)(["\n      height: calc(100vh - 340px);\n      margin-top: 25px;\n      display: grid;\n      grid-template-columns: repeat(auto-fill, 125px);\n      grid-gap: 25px;\n      overflow: scroll;\n    "]);return Ae=function(){return e},e}function qe(){var e=Object(b.a)(["\n      width: 90%;\n      height: 80%;\n      margin-bottom: 50px;\n    "]);return qe=function(){return e},e}function Ve(){var e=Object(b.a)(["\n      height: calc(100vh - 340px);\n      overflow: scroll;\n    "]);return Ve=function(){return e},e}function Be(){var e=Object(b.a)([""]);return Be=function(){return e},e}function De(){var e=Object(b.a)(["\n      background-image: url(",");\n      margin: 25px;\n      height: 152px;\n      width: 300px;\n      background-size: 100% 100%;\n      border-radius: 4px;\n      backgoround-position: center center;\n      text-align: center;\n      align-content: center;\n      align-items: center;\n    "]);return De=function(){return e},e}var Le=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.isMovie,n=this.props.result.videos.results,a=this.props.collection,i=this.props.season,o=this.props.result.production_companies,l=h.default.div(De(),(function(e){return e.bgUrl})),c=h.default.div(Be()),u=h.default.div(Ve()),s=h.default.iframe(qe()),p=h.default.div(Ae()),d=h.default.div(Fe());return r.a.createElement(c,{className:"tabs"},r.a.createElement(Je,null,r.a.createElement(He,{label:"Trailer"},r.a.createElement(u,null,n&&n.map((function(e,t){return r.a.createElement(s,{key:"".concat(t),src:"https://www.youtube.com/embed/".concat(e.key)})})))),(a||i)&&r.a.createElement(He,{label:t?"Collection":"Season"},r.a.createElement(p,null,t?a&&a.parts&&a.parts.map((function(e){return r.a.createElement(X,{key:e.id,id:e.id,title:e.title,imageUrl:e.poster_path,rating:e.vote_average,year:e.release_date&&e.release_date.substring(0,4),isMovie:!0,target:!0})})):i&&i.map((function(t){return r.a.createElement(X,{key:t.id,id:e.props.result.id,title:t.name,imageUrl:t.poster_path,rating:t.vote_average,year:t.air_date&&t.air_date.substring(0,4),isMovie:!1,disabled:!0})})))),r.a.createElement(He,{label:"Production"},r.a.createElement(d,null,o.length>0&&o.map((function(e){return e.logo_path?r.a.createElement("div",null,r.a.createElement(l,{bgUrl:"https://image.tmdb.org/t/p/original".concat(e.logo_path)})):r.a.createElement("div",null,r.a.createElement(l,null,e.name))}))))))}}]),t}(r.a.Component),Je=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={activeTab:n.props.children[0].props.label},n.changeTab=function(e){n.setState({activeTab:e})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t=this,n=[];return r.a.createElement("div",null,r.a.Children.map(this.props.children,(function(a){null!==a&&(n.push(a.props.label),a.props.label===t.state.activeTab&&(e=a.props.children))})),r.a.createElement(Ge,{activeTab:this.state.activeTab,buttons:n,changeTab:this.changeTab}),r.a.createElement("div",{className:"tab-content"},e))}}]),t}(r.a.Component),Ge=function(e){var t=e.buttons,n=e.changeTab,a=e.activeTab;return r.a.createElement("div",{className:"tab-buttons"},t.map((function(e,t){return r.a.createElement("button",{key:t,className:e===a?"active":"",onClick:function(){return n(e)}},e)})))},He=function(e){return r.a.createElement(r.a.Fragment,null,e.children)},Ke=Le;function Qe(){var e=Object(b.a)(["\n  margin: 20px;\n  wdith: 50px;\n"]);return Qe=function(){return e},e}function Xe(){var e=Object(b.a)(["\n  display: flex;\n"]);return Xe=function(){return e},e}function Ye(){var e=Object(b.a)(["\n  height: 30%;\n  width: 100%;\n"]);return Ye=function(){return e},e}function Ze(){var e=Object(b.a)(["\n  font-size: 12px;\n  opacity: 0.7;\n  line-height: 2;\n  widht: 50%;\n  margin-left: 20px;\n"]);return Ze=function(){return e},e}function $e(){var e=Object(b.a)([""]);return $e=function(){return e},e}function et(){var e=Object(b.a)([""]);return et=function(){return e},e}function tt(){var e=Object(b.a)(["\n  margin: 20px;\n"]);return tt=function(){return e},e}function nt(){var e=Object(b.a)(["\n  font-size: 32px;\n  fint-weight: bold;\n  margin-left: 20px;\n  margin-bottom: 20px;\n"]);return nt=function(){return e},e}function at(){var e=Object(b.a)(["\n  width: 70%;\n  margin-right: 20px;\n"]);return at=function(){return e},e}function rt(){var e=Object(b.a)(["\n  width: 30%;\n  heigth: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n"]);return rt=function(){return e},e}function it(){var e=Object(b.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1;\n"]);return it=function(){return e},e}function ot(){var e=Object(b.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-position: center center;\n  background-size: cover;\n  filter: blur(3px);\n  opacity: 0.5;\n  z-index: 0;\n"]);return ot=function(){return e},e}function lt(){var e=Object(b.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 30px;\n"]);return lt=function(){return e},e}var ct=h.default.div(lt()),ut=h.default.div(ot(),(function(e){return e.bgImage})),st=h.default.div(it()),pt=h.default.div(rt(),(function(e){return e.bgImage})),dt=h.default.div(at()),mt=h.default.h3(nt()),ft=h.default.div(tt()),gt=h.default.span(et()),vt=h.default.span($e()),bt=h.default.p(Ze()),ht=(h.default.div(Ye()),h.default.ul(Xe()),h.default.li(Qe()),function(e){var t=e.result,a=e.error,i=e.loading,o=e.collection,l=e.season,c=e.isMovie;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,null,r.a.createElement("title",null,"Loading | Nomflix")),i?r.a.createElement(T,null):a?r.a.createElement(N,null):r.a.createElement(ct,null,r.a.createElement(E.a,null,r.a.createElement("title",null,t.original_title?t.original_title:t.original_name," ","| Nomflix")),r.a.createElement(ut,{bgImage:"https://image.tmdb.org/t/p/original".concat(t.backdrop_path)}),r.a.createElement(st,null,r.a.createElement(pt,{bgImage:t.poster_path?"https://image.tmdb.org/t/p/original".concat(t.poster_path):n(24)}),r.a.createElement(dt,null,r.a.createElement(mt,null,t.original_title?t.original_title:t.original_name),r.a.createElement(ft,null,r.a.createElement(gt,null,t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)),r.a.createElement(vt,null,"\u2022",t.runtime?t.runtime:t.episode_run_time[0]),r.a.createElement(vt,null,"\u2022",t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?"".concat(e.name):"".concat(e.name," / ")})))),r.a.createElement(bt,null,t.overview),r.a.createElement(Ke,{result:t,isMovie:c,collection:o,season:l})))))}),xt=function(e){function t(e){var n;Object(l.a)(this,t),n=Object(u.a)(this,Object(s.a)(t).call(this,e));var a=e.location.pathname;return n.state={result:null,error:null,loading:!0,isMovie:a.includes("/movie/"),collection:!1,season:!1},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(g.a.mark((function e(){var t,n,a,r,i,o,l,c,u,s,p;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match.params.id,a=t.history.push,r=this.state.isMovie,i=parseInt(n),!isNaN(i)){e.next=5;break}return e.abrupt("return",a("/"));case 5:if(e.prev=5,!r){e.next=22;break}return e.next=9,se(i);case 9:if(s=e.sent,!(o=s.data).belongs_to_collection){e.next=19;break}return e.next=14,de(o.belongs_to_collection.id);case 14:u=e.sent,l=u.data,e.next=20;break;case 19:!1,l=(!1).data;case 20:e.next=27;break;case 22:return e.next=24,ie(i);case 24:p=e.sent,o=p.data,c=!!o.seasons&&o.seasons;case 27:e.next=32;break;case 29:e.prev=29,e.t0=e.catch(5),this.setState({error:"Can't find Anything."});case 32:return e.prev=32,this.setState({loading:!1,result:o,collection:l,season:c}),e.finish(32);case 35:case"end":return e.stop()}}),e,this,[[5,29,32,35]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.result,n=e.error,a=e.loading,i=e.collection,o=e.season,l=e.isMovie;return console.log(this.state),r.a.createElement(ht,{result:t,error:n,loading:a,isMovie:l,collection:i,season:o})}}]),t}(r.a.Component),Et=function(){return r.a.createElement(d.a,null,r.a.createElement(ke,null),r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,component:me}),r.a.createElement(m.b,{path:"/tv",exact:!0,component:be}),r.a.createElement(m.b,{path:"/search",exact:!0,component:Ie}),r.a.createElement(m.b,{path:"/movie/:id",component:xt}),r.a.createElement(m.b,{path:"/show/:id",component:xt}),r.a.createElement(m.a,{from:"*",to:"/"})))},yt=n(42),jt=n.n(yt);function Ot(){var e=Object(b.a)(["\n        ",";\n        a{\n            text-decoration:none;\n            color:inherit;\n        }\n        *{\n            box-sizing:border-box;\n        }\n        body{\n            font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Canta\n            font-size:12px;\n            background-color:rgba(20, 20, 20, 1);\n            color: white;\n            padding-top:60px;\n        }\n        \n        .tabs{\n            font-family:arial;\n            margin:20px;\n            width:70%;\n          }\n          \n          img{\n            width:300px;\n          }\n          \n          .tab-buttons{\n            margin-bottom:50px;\n          }\n          \n          button{\n            margin-right:15px;\n            font-size:20px;\n            background:transparent;\n            border:none;\n            outline:none;\n            padding:10px 20px ;\n            cursor:pointer;\n            color:rgba(159, 159, 173); \n            transition:all ease-in-out .2s;\n            border-bottom:2px solid transparent;\n            \n          }\n          .active{\n            border-bottom:2px solid #42b3f4;\n            color: white;\n          }\n\n"]);return Ot=function(){return e},e}var _t=Object(h.createGlobalStyle)(Ot(),jt.a),wt=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Et,null),r.a.createElement(_t,null))}}]),t}(a.Component);o.a.render(r.a.createElement(wt,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.926fd0ed.chunk.js.map