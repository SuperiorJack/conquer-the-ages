(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1428:function(e,t,a){"use strict";a.r(t);var n=a(10),l=a(11),o=a(13),r=a(12),c=a(14),i=a(0),s=a.n(i),m=a(16),u=a(2),d=a(4),p=a.n(d),h=a(51),f=a.n(h),g=a(187),b=a.n(g),E=a(7);function w(e){return s.a.createElement(b.a,Object.assign({direction:"up"},e))}var y=function(e){function t(){var e,a;Object(n.a)(this,t);for(var l=arguments.length,c=new Array(l),i=0;i<l;i++)c[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(c)))).state={data:[],openDialog:!1,dialogData:{title:null,content:null}},a.handleOpenDialog=function(e){a.setState({openDialog:!0,dialogData:e})},a.handleCloseDialog=function(){a.setState({openDialog:!1})},a}return Object(c.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.a.get("/api/knowledge-base").then(function(t){e.setState({data:t.data})})}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state,n=a.data,l=a.openDialog,o=a.dialogData;return s.a.createElement("div",{className:p()(t.root)},s.a.createElement("div",{className:p()(t.header,"flex flex-col items-center justify-center text-center p-16 sm:p-24 h-200 sm:h-360")},s.a.createElement(E.b,{animation:"transition.slideUpIn",duration:400,delay:100},s.a.createElement(u.hb,{color:"inherit",className:"text-36 sm:text-56 font-light"},"How can we help?")),s.a.createElement(E.b,{duration:400,delay:600},s.a.createElement(u.hb,{variant:"subtitle1",color:"inherit",className:"opacity-75 mt-16 mx-auto max-w-512"},"Welcome to our knowledge base"))),s.a.createElement("div",{className:p()(t.content)},s.a.createElement(E.c,{enter:{animation:"transition.slideUpBigIn"},className:"flex flex-wrap justify-center max-w-xl w-full mx-auto px-16 sm:px-24 py-32"},n.map(function(t){return s.a.createElement("div",{className:"w-full max-w-512 pb-24 md:w-1/2 md:p-16",key:t.id},s.a.createElement(u.d,{elevation:1},s.a.createElement(u.f,null,s.a.createElement(u.hb,{className:"font-medium px-16 pt-8",color:"textSecondary"},t.title),s.a.createElement(u.L,{component:"nav"},t.featuredArticles.map(function(t){return s.a.createElement(u.M,{key:t.id,button:!0,onClick:function(){return e.handleOpenDialog(t)}},s.a.createElement(u.N,{className:"mr-0"},s.a.createElement(u.F,null,"note")),s.a.createElement(u.P,{primary:t.title}))})),s.a.createElement(u.c,{className:"normal-case w-full justify-start",color:"secondary"},"See all articles (",t.articlesCount,")"))))}))),s.a.createElement(u.l,{open:l,onClose:this.handleCloseDialog,"aria-labelledby":"knowledge-base-document",TransitionComponent:w},s.a.createElement(u.p,null,o.title),s.a.createElement(u.n,null,s.a.createElement(u.o,{dangerouslySetInnerHTML:{__html:o.content}})),s.a.createElement(u.m,null,s.a.createElement(u.c,{onClick:this.handleCloseDialog,color:"primary"},"CLOSE"))))}}]),t}(i.Component);t.default=Object(m.withStyles)(function(e){return{root:{width:"100%"},header:{background:"url('/assets/images/backgrounds/dark-material-bg.jpg') no-repeat",backgroundSize:"cover",color:"#fff"},content:{}}},{withTheme:!0})(y)}}]);
//# sourceMappingURL=24.9cdc0af7.chunk.js.map