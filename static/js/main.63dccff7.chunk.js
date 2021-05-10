(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{28:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(8),o=a.n(r),s=(a(28),a(10)),c=a.n(s),i=a(11),l=a(20),u=a(4),m=a(5),h=a(7),g=a(6),d=a(21),p=a.n(d),b=a(22),j=a.n(b),f=a(0),O=function(e){var t=e.image,a=e.largeImgHendler;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("li",{id:t.id,className:"ImageGalleryItem",children:Object(f.jsx)("img",{onClick:a,"data-source":t.largeImageURL,src:t.webformatURL,alt:t.type,className:"ImageGalleryItem-image"})})})},y=function(e){var t=e.images,a=e.largeImgHendler;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("ul",{className:"ImageGallery",children:null===t||void 0===t?void 0:t.map((function(e){return Object(f.jsx)(O,{image:e,largeImgHendler:a},e.id)}))})})},v=document.getElementById("modal-root"),x=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleClose=function(t){"Escape"===t.code&&e.props.onClose(),t.currentTarget===t.target&&e.props.onClose()},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleClose)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleClose)}},{key:"render",value:function(){return console.log(this.props.largeImg),Object(r.createPortal)(this.props.open?Object(f.jsx)("div",{className:"Overlay",onClick:this.handleClose,children:Object(f.jsx)("div",{className:"Modal",children:Object(f.jsx)("img",{src:this.props.largeImg,alt:""})})}):null,v)}}]),a}(n.Component),I=a(23),S=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={searchQuery:""},e.onHeandlerSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.searchQuery)},e.onHeandlerChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(I.a)({},n,r))},e}return Object(m.a)(a,[{key:"render",value:function(){return Object(f.jsx)("header",{className:"Searchbar",children:Object(f.jsxs)("form",{className:"SearchForm",onSubmit:this.onHeandlerSubmit,children:[Object(f.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(f.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(f.jsx)("input",{onChange:this.onHeandlerChange,className:"SearchForm-input",type:"text",placeholder:"Search images and photos",name:"searchQuery"})]})})}}]),a}(n.Component),w="21148733-fe4ceb41e783008baa1bd0520",C=function(e){Object(h.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={images:[],largeImageURL:"",page:1,query:"",shoModal:!1,loader:!1,error:null},e.axiosImage=Object(l.a)(c.a.mark((function t(){var a,n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.get("https://pixabay.com/api/?q=".concat(e.state.query,"&page=").concat(e.state.page,"&key=").concat(w,"&image_type=photo&orientation=horizontal&per_page=12"));case 3:a=t.sent,n=a.data,e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(n.hits))}})),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:return t.prev=10,e.setState((function(e){return{loader:!1}})),e.state.page>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),t.finish(10);case 14:case"end":return t.stop()}}),t,null,[[0,8,10,14]])}))),e.onFormSubmit=function(t){e.setState({query:"",page:1,images:[]}),e.setState({query:t,page:1,images:[]})},e.showMore=function(){e.setState((function(e){return{page:e.page+1}}))},e.largeImgHendler=function(t){var a=t.target.dataset.source;e.setState({largeImageURL:a}),e.openCloseModal()},e.openCloseModal=function(){e.setState((function(e){return{shoModal:!e.shoModal}}))},e}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e,t){(this.state.query!==t.query&&""!==this.state.query||this.state.query===t.query&&this.state.page!==t.page)&&this.axiosImage()}},{key:"render",value:function(){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(S,{onSubmit:this.onFormSubmit}),this.state.loader?Object(f.jsx)(j.a,{}):Object(f.jsx)(y,{images:this.state.images,largeImgHendler:this.largeImgHendler}),this.state.images.length>0&&Object(f.jsx)("button",{className:"Button",type:"button",onClick:this.showMore,children:"Load more"}),Object(f.jsx)(x,{open:this.state.shoModal,onClose:this.openCloseModal,largeImg:this.state.largeImageURL})]})}}]),a}(n.Component);var k=function(){return Object(f.jsx)(C,{})};o.a.render(Object(f.jsx)(k,{}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.63dccff7.chunk.js.map