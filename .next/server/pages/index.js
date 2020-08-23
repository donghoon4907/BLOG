module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "2207":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export usersQuery */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return recommandUsersQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return userQuery; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const usersQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query users($skip: Int, $first: Int, $keyword: String, $orderBy: String) {
    getUsers(
      skip: $skip
      first: $first
      nickname: $keyword
      orderBy: $orderBy
    ) {
      id
      nickname
      avatar {
        url
      }
      isMaster
      followedBy {
        id
      }
      following {
        id
      }
      posts {
        id
      }
    }
  }
`;
const recommandUsersQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query recommandUsers {
    getRecommandUsers {
      id
      nickname
      avatar {
        url
      }
      isMaster
      followedBy {
        id
      }
      following {
        id
      }
      posts {
        id
      }
    }
  }
`;
const userQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query user($userId: String!) {
    getUser(userId: $userId) {
      id
      nickname
      email
      avatar {
        url
      }
      isMaster
      followedBy {
        id
      }
      following {
        id
      }
      posts {
        id
      }
    }
  }
`;

/***/ }),

/***/ "23aj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// EXTERNAL MODULE: ./components/common/Layout.tsx + 22 modules
var Layout = __webpack_require__("4siG");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./components/common/Section.tsx
var Section = __webpack_require__("vct6");

// EXTERNAL MODULE: ./components/icon/index.tsx
var icon = __webpack_require__("z75s");

// EXTERNAL MODULE: ./components/common/Subject.tsx
var Subject = __webpack_require__("Jx5A");

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// CONCATENATED MODULE: ./graphql/notice/query/index.ts

const noticesQuery = client_["gql"]`
  query getNotices($skip: Int, $first: Int, $orderBy: String) {
    getNotices(skip: $skip, first: $first, orderBy: $orderBy) {
      id
      title
      description
      createdAt
      updatedAt
    }
  }
`;
// CONCATENATED MODULE: ./components/common/Carousel.tsx
var __jsx = external_react_default.a.createElement;




const Container = external_styled_components_default()(external_react_bootstrap_["Carousel"]).withConfig({
  displayName: "Carousel__Container",
  componentId: "sc-13ptfzp-0"
})(["width:100%;height:100%;& .carousel-control-next,.carousel-control-prev{width:5%;}& .carousel-inner,.carousel-item{width:100%;height:100%;}"]);
const CarouselColumn = external_styled_components_default.a.div.withConfig({
  displayName: "Carousel__CarouselColumn",
  componentId: "sc-13ptfzp-1"
})(["display:flex;width:100%;height:100%;align-items:center;padding:0 50px;box-sizing:border-box;overflow:hidden;"]);
const CarouselItem = external_styled_components_default.a.div.withConfig({
  displayName: "Carousel__CarouselItem",
  componentId: "sc-13ptfzp-2"
})(["flex:1 padding:10px;& + &{margin-left:10px;}"]);

const CarouselContainer = ({
  children
}) => __jsx(Container, {
  indicators: false,
  nextIcon: __jsx(icon["h" /* Next */], null),
  prevIcon: __jsx(icon["h" /* Next */], {
    style: {
      transform: "rotate(180deg)"
    }
  })
}, children);

/* harmony default export */ var Carousel = (CarouselContainer);
// EXTERNAL MODULE: ./components/common/Timestamp.tsx
var Timestamp = __webpack_require__("qXo3");

// EXTERNAL MODULE: ./context/index.tsx
var context = __webpack_require__("O0wy");

// CONCATENATED MODULE: ./components/feed/NoticeList.tsx
var NoticeList_jsx = external_react_default.a.createElement;








const NoticeWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "NoticeList__NoticeWrapper",
  componentId: "ztp66g-0"
})(["height:50px;display:flex;flex-direction:column;justify-content:center;margin-right:15%;margin-left:15%;padding:5px;text-align:center;cursor:pointer;"]);

const NoticeList = () => {
  const dispatch = Object(context["i" /* useVssDispatch */])();
  const {
    isMaster
  } = Object(context["j" /* useVssState */])();
  const {
    data
  } = Object(client_["useQuery"])(noticesQuery, {
    variables: {
      first: 10
    }
  });
  const handleClick = Object(external_react_["useCallback"])((title, description, noticeId) => {
    dispatch({
      type: context["f" /* SHOW_NOTICE_MODAL */],
      action: isMaster ? "modifiable" : "readonly",
      actionText: "",
      title,
      description,
      noticeId
    });
  }, [isMaster]);
  return NoticeList_jsx(Carousel, null, data.getNotices.map(({
    id,
    title,
    description,
    updatedAt
  }) => NoticeList_jsx(external_react_bootstrap_["Carousel"].Item, {
    key: id
  }, NoticeList_jsx(NoticeWrapper, {
    onClick: () => handleClick(title, description, id)
  }, NoticeList_jsx("div", null, title), NoticeList_jsx(Timestamp["a" /* default */], {
    text: updatedAt
  })))));
};

/* harmony default export */ var feed_NoticeList = (Object(external_react_["memo"])(NoticeList));
// EXTERNAL MODULE: ./graphql/post/query/index.ts
var query = __webpack_require__("GEYq");

// EXTERNAL MODULE: ./components/post/PostContainer.tsx + 3 modules
var PostContainer = __webpack_require__("LYXD");

// EXTERNAL MODULE: ./components/common/Loader.tsx
var Loader = __webpack_require__("4e43");

// CONCATENATED MODULE: ./components/feed/PostList.tsx
var PostList_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const PostList = () => {
  const {
    data,
    loading,
    fetchMore,
    networkStatus
  } = Object(client_["useQuery"])(query["a" /* postsQuery */], {
    variables: {
      first: 10
    },
    notifyOnNetworkStatusChange: true
  });
  const loadingMorePosts = networkStatus === client_["NetworkStatus"].fetchMore;

  const handleScrollFetchMore = () => {
    if (loading) return;
    const {
      scrollHeight,
      clientHeight,
      scrollTop
    } = document.documentElement;

    if (data.getPosts) {
      if (scrollTop + clientHeight === scrollHeight) {
        if (data.getPosts.length % 10 === 0) {
          fetchMore({
            variables: {
              skip: data.getPosts.length
            }
          });
        }
      }
    }
  };

  Object(external_react_["useEffect"])(() => {
    window.addEventListener("scroll", handleScrollFetchMore);
    return () => window.removeEventListener("scroll", handleScrollFetchMore);
  }, [data.getPosts, loading]);
  return PostList_jsx(external_react_default.a.Fragment, null, loading && loadingMorePosts && PostList_jsx(Loader["a" /* default */], null), data.getPosts.map(post => PostList_jsx(PostContainer["a" /* default */], _extends({
    key: post.id
  }, post))));
};

/* harmony default export */ var feed_PostList = (Object(external_react_["memo"])(PostList));
// EXTERNAL MODULE: ./graphql/user/query/index.ts
var user_query = __webpack_require__("2207");

// EXTERNAL MODULE: ./components/user/HoverUser.tsx + 1 modules
var HoverUser = __webpack_require__("5Mjc");

// EXTERNAL MODULE: ./components/common/FollowButton.tsx + 1 modules
var FollowButton = __webpack_require__("K49Q");

// EXTERNAL MODULE: ./components/common/Avatar.tsx
var Avatar = __webpack_require__("WIWL");

// CONCATENATED MODULE: ./components/user/RecommandUserItem.tsx
var RecommandUserItem_jsx = external_react_default.a.createElement;






const RecommandUserItem_Container = external_styled_components_default.a.div.withConfig({
  displayName: "RecommandUserItem__Container",
  componentId: "sc-1p039a4-0"
})(["height:70px;display:flex;justify-content:space-between;align-items:center;position:relative;padding:10px 0;"]);
const AvatarWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "RecommandUserItem__AvatarWrapper",
  componentId: "sc-1p039a4-1"
})(["width:50px;"]);
const NicknameWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "RecommandUserItem__NicknameWrapper",
  componentId: "sc-1p039a4-2"
})(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:150px;"]);
const FollowWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "RecommandUserItem__FollowWrapper",
  componentId: "sc-1p039a4-3"
})(["width:80px;"]);

const RecommandUserItem = ({
  id,
  avatar,
  nickname,
  followedBy
}) => {
  const {
    userId
  } = Object(context["j" /* useVssState */])();
  const isFollowing = followedBy.some(v => v.id === userId);
  const {
    0: isShowUser,
    1: setIsShowUser
  } = Object(external_react_["useState"])(false);
  const handleClickAvatar = Object(external_react_["useCallback"])(() => {
    setIsShowUser(!isShowUser);
  }, [isShowUser]);
  return RecommandUserItem_jsx(RecommandUserItem_Container, {
    key: id
  }, RecommandUserItem_jsx(AvatarWrapper, null, RecommandUserItem_jsx(Avatar["a" /* default */], {
    size: "45",
    src: avatar.url,
    onClick: handleClickAvatar
  })), RecommandUserItem_jsx(NicknameWrapper, null, nickname), RecommandUserItem_jsx(FollowWrapper, null, id !== userId && RecommandUserItem_jsx(FollowButton["a" /* default */], {
    isFollowing: isFollowing,
    userId: id
  })), isShowUser && RecommandUserItem_jsx(HoverUser["a" /* default */], {
    userId: id
  }));
};

/* harmony default export */ var user_RecommandUserItem = (RecommandUserItem);
// CONCATENATED MODULE: ./components/feed/RecommandUserList.tsx
var RecommandUserList_jsx = external_react_default.a.createElement;

function RecommandUserList_extends() { RecommandUserList_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return RecommandUserList_extends.apply(this, arguments); }






const RecommandUserList_Container = external_styled_components_default.a.div.withConfig({
  displayName: "RecommandUserList__Container",
  componentId: "to77jb-0"
})(["display:flex;flex-direction:column;"]);

const RecommandUserList = () => {
  const {
    data
  } = Object(client_["useQuery"])(user_query["a" /* recommandUsersQuery */]);
  return RecommandUserList_jsx(RecommandUserList_Container, null, data.getRecommandUsers.map(user => RecommandUserList_jsx(user_RecommandUserItem, RecommandUserList_extends({
    key: user.id
  }, user))));
};

/* harmony default export */ var feed_RecommandUserList = (Object(external_react_["memo"])(RecommandUserList));
// CONCATENATED MODULE: ./components/feed/FeedPresenter.tsx
var FeedPresenter_jsx = external_react_default.a.createElement;








const PostWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "FeedPresenter__PostWrapper",
  componentId: "sc-15sy3a5-0"
})(["width:600px;", "{width:100%;}"], props => props.theme.media.tablet);
const UserWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "FeedPresenter__UserWrapper",
  componentId: "sc-15sy3a5-1"
})(["width:300px;display:flex;flex-direction:column;justfiy-content:space-between;margin-left:20px;& > aside{flex:1;}", "{display:none;}"], props => props.theme.media.tablet);
const StickyWrap = external_styled_components_default.a.div.withConfig({
  displayName: "FeedPresenter__StickyWrap",
  componentId: "sc-15sy3a5-2"
})(["position:sticky;top:80px;"]);

const FeedPresenter = ({
  isMaster,
  onAddNotice,
  recommandUserEl
}) => FeedPresenter_jsx(Section["a" /* default */], {
  flexDirection: "row"
}, FeedPresenter_jsx(PostWrapper, null, FeedPresenter_jsx(Subject["a" /* default */], null, "\uCD5C\uC2E0 \uD3EC\uC2A4\uD2B8"), FeedPresenter_jsx(feed_PostList, null)), FeedPresenter_jsx(UserWrapper, {
  ref: recommandUserEl
}, FeedPresenter_jsx("aside", null, FeedPresenter_jsx(StickyWrap, null, FeedPresenter_jsx("div", null, FeedPresenter_jsx(Subject["a" /* default */], {
  activeBorder: true
}, FeedPresenter_jsx("span", null, "\uACF5\uC9C0\uC0AC\uD56D"), FeedPresenter_jsx("div", null, isMaster && FeedPresenter_jsx("div", {
  onClick: onAddNotice
}, FeedPresenter_jsx(icon["a" /* Add */], null)))), FeedPresenter_jsx(feed_NoticeList, null)), FeedPresenter_jsx("div", null, FeedPresenter_jsx(Subject["a" /* default */], {
  activeBorder: true
}, "\uCD94\uCC9C\uC778"), FeedPresenter_jsx(feed_RecommandUserList, null))))));

/* harmony default export */ var feed_FeedPresenter = (FeedPresenter);
// CONCATENATED MODULE: ./components/feed/FeedContainer.tsx
var FeedContainer_jsx = external_react_default.a.createElement;




const FeedContainer = () => {
  const {
    isMaster
  } = Object(context["j" /* useVssState */])();
  const dispatch = Object(context["i" /* useVssDispatch */])();
  const recommandUserEl = Object(external_react_["useRef"])(null);
  const handleAddNotice = Object(external_react_["useCallback"])(() => {
    dispatch({
      type: context["f" /* SHOW_NOTICE_MODAL */],
      action: "add",
      actionText: "등록",
      title: "",
      description: "",
      noticeId: ""
    });
  }, []);
  return FeedContainer_jsx(feed_FeedPresenter, {
    isMaster: isMaster,
    onAddNotice: handleAddNotice,
    recommandUserEl: recommandUserEl
  });
};

/* harmony default export */ var feed_FeedContainer = (FeedContainer);
// EXTERNAL MODULE: ./lib/apollo.ts
var apollo = __webpack_require__("ZRao");

// CONCATENATED MODULE: ./graphql/page/query/feed.ts

const feedQuery = client_["gql"]`
  query feed($skip: Int, $first: Int) {
    getPosts(skip: $skip, first: $first) {
      id
      title
      description
      createdAt
      user {
        id
        nickname
        avatar {
          url
        }
      }
      video {
        url
      }
      likes {
        user {
          id
        }
      }
      status
      room {
        id
      }
    }
    getNotices(skip: $skip, first: $first) {
      id
      title
      description
      createdAt
      updatedAt
    }
    getRecommandUsers {
      id
      nickname
      email
      avatar {
        url
      }
      isMaster
      followedBy {
        id
      }
      following {
        id
      }
      posts {
        id
      }
    }
  }
`;
// EXTERNAL MODULE: ./graphql/auth/query/me.ts
var me = __webpack_require__("MRKs");

// CONCATENATED MODULE: ./pages/index.tsx
var pages_jsx = external_react_default.a.createElement;









const Index = () => {
  const dispatch = Object(context["i" /* useVssDispatch */])();
  Object(client_["useQuery"])(me["a" /* meQuery */], {
    ssr: false,
    onCompleted: ({
      getMyProfile
    }) => {
      const {
        id,
        nickname,
        email,
        avatar,
        isMaster
      } = getMyProfile;
      dispatch({
        type: context["d" /* SET_ME */],
        userId: id,
        nickname,
        email,
        avatar,
        isMaster
      });
    }
  });
  return pages_jsx(Layout["a" /* default */], null, pages_jsx(feed_FeedContainer, null));
};

const getStaticProps = async () => {
  const apolloClient = Object(apollo["a" /* initializeApollo */])();
  await apolloClient.query({
    query: feedQuery,
    variables: {
      first: 10
    }
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract()
    },
    revalidate: 1
  };
};
/* harmony default export */ var pages = __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "2Hsl":
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("23aj");


/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, item));
    } else {
      result.set(key, value);
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "4e43":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Container */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2Hsl");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Loader__Container",
  componentId: "h2q2qo-0"
})(["position:fixed;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;z-index:10000;"]);

const Loader = () => __jsx(Container, null, __jsx(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default.a, {
  type: "ThreeDots",
  color: "#4142DD",
  height: 80,
  width: 80,
  visible: true
}));

/* harmony default export */ __webpack_exports__["a"] = (Loader);

/***/ }),

/***/ "4lbY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "Input__Container",
  componentId: "xwvry2-0"
})(["border:0;border:", ";border-radius:", ";background:", ";width:100%;height:35px;padding:0px 15px;font-size:12px;&:focus{outline:none;}"], props => props.theme.boxBorder, props => props.theme.borderRadius, props => props.theme.bgColor);
const Input = Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])((props, ref) => __jsx(Container, _extends({
  ref: ref
}, props)));
/* harmony default export */ __webpack_exports__["a"] = (Input);

/***/ }),

/***/ "4siG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/common/Link.tsx
var __jsx = external_react_default.a.createElement;



const Container = external_styled_components_default.a.a.withConfig({
  displayName: "Link__Container",
  componentId: "sc-5byxc0-0"
})(["color:black;cursor:pointer;&:hover{color:black;text-decoration:none;}"]);

const StyledLink = ({
  href,
  children
}) => __jsx("div", null, __jsx(link_default.a, {
  href: href
}, __jsx(Container, null, children)));

/* harmony default export */ var Link = (StyledLink);
// EXTERNAL MODULE: ./components/icon/index.tsx
var icon = __webpack_require__("z75s");

// EXTERNAL MODULE: ./context/index.tsx
var context = __webpack_require__("O0wy");

// EXTERNAL MODULE: ./lib/token.ts
var lib_token = __webpack_require__("hLbD");

// CONCATENATED MODULE: ./components/common/AddPostButton.tsx
var AddPostButton_jsx = external_react_default.a.createElement;





const AddPostButton_Container = external_styled_components_default.a.div.withConfig({
  displayName: "AddPostButton__Container",
  componentId: "sc-427u57-0"
})(["", "{display:none;}"], props => props.theme.media.tablet);

const AddPostButton = () => {
  const dispatch = Object(context["i" /* useVssDispatch */])();
  const handleClick = Object(external_react_["useCallback"])(() => {
    const token = Object(lib_token["a" /* getAccessToken */])();

    if (token) {
      dispatch({
        type: context["g" /* SHOW_POST_MODAL */],
        postId: "",
        title: "",
        description: "",
        status: "PUBLIC",
        url: ""
      });
    } else {
      dispatch({
        type: context["e" /* SHOW_LOGIN_MODAL */]
      });
    }
  }, []);
  return AddPostButton_jsx(AddPostButton_Container, {
    onClick: handleClick,
    title: "\uD3EC\uC2A4\uD2B8 \uB4F1\uB85D"
  }, AddPostButton_jsx(icon["b" /* AddPost */], {
    style: {
      width: 40,
      height: 40
    }
  }));
};

/* harmony default export */ var common_AddPostButton = (AddPostButton);
// CONCATENATED MODULE: ./components/common/ProfileButton.tsx
var ProfileButton_jsx = external_react_default.a.createElement;





const ProfileButton = () => {
  const dispatch = Object(context["i" /* useVssDispatch */])();
  const handleClick = Object(external_react_["useCallback"])(() => {
    const token = Object(lib_token["a" /* getAccessToken */])();

    if (token) {
      const tf = confirm("로그아웃 하시겠습니까?");

      if (tf) {
        Object(lib_token["b" /* removeAccessToken */])();
        dispatch({
          type: context["d" /* SET_ME */],
          userId: null,
          nickname: null,
          email: null,
          avatar: null,
          isMaster: false
        });
      }
    } else {
      dispatch({
        type: context["e" /* SHOW_LOGIN_MODAL */]
      });
    }
  }, []);
  return ProfileButton_jsx("div", {
    onClick: handleClick
  }, ProfileButton_jsx(icon["i" /* Profile */], null));
};

/* harmony default export */ var common_ProfileButton = (ProfileButton);
// CONCATENATED MODULE: ./components/common/SearchButton.tsx
var SearchButton_jsx = external_react_default.a.createElement;




const SearchButton = () => SearchButton_jsx(link_default.a, {
  href: "/search"
}, SearchButton_jsx("a", null, SearchButton_jsx(icon["j" /* Search */], null)));

/* harmony default export */ var common_SearchButton = (SearchButton);
// CONCATENATED MODULE: ./components/common/Header.tsx
var Header_jsx = external_react_default.a.createElement;






const Header_Container = external_styled_components_default.a.header.withConfig({
  displayName: "Header__Container",
  componentId: "sc-5hjg9x-0"
})(["height:4rem;width:100%;background:white;position:fixed;border-bottom:", ";z-index:1;"], props => props.theme.boxBorder);
const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Header__Wrapper",
  componentId: "sc-5hjg9x-1"
})(["width:912px;height:100%;display:flex;justify-content:space-between;align-items:center;margin:0 auto;padding:0 10px;", "{width:768px;}", "{width:calc(100% - 2rem);}"], props => props.theme.media.desktop, props => props.theme.media.tablet);
const Column = external_styled_components_default.a.div.withConfig({
  displayName: "Header__Column",
  componentId: "sc-5hjg9x-2"
})(["display:flex;justify-content:center;align-items:center;& > div{margin-left:10px;}"]);
const Logo = external_styled_components_default.a.span.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-5hjg9x-3"
})(["font-size:30px;font-weight:500;letter-spacing:5px;cursor:pointer;"]);

const Header = () => Header_jsx(Header_Container, null, Header_jsx(Wrapper, null, Header_jsx(Column, null, Header_jsx(Link, {
  href: "/"
}, Header_jsx(Logo, null, "VSS"))), Header_jsx(Column, null, Header_jsx(common_SearchButton, null), Header_jsx(common_AddPostButton, null), Header_jsx(common_ProfileButton, null))));

/* harmony default export */ var common_Header = (Header);
// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// CONCATENATED MODULE: ./graphql/notice/mutation/add.ts

const addNoticeMutation = client_["gql"]`
  mutation addNotice($title: String!, $description: String!) {
    addNotice(title: $title, description: $description)
  }
`;
// CONCATENATED MODULE: ./graphql/notice/mutation/update.ts

const updateNoticeMutation = client_["gql"]`
  mutation updateNotice(
    $noticeId: String!
    $title: String!
    $description: String!
  ) {
    updateNotice(noticeId: $noticeId, title: $title, description: $description)
  }
`;
// CONCATENATED MODULE: ./graphql/notice/mutation/remove.ts

const removeNoticeMutation = client_["gql"]`
  mutation deleteNotice($noticeId: String!) {
    deleteNotice(noticeId: $noticeId)
  }
`;
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: ./components/common/Input.tsx
var Input = __webpack_require__("4lbY");

// EXTERNAL MODULE: ./components/common/Form.tsx
var Form = __webpack_require__("ppIK");

// EXTERNAL MODULE: ./components/common/Loader.tsx
var Loader = __webpack_require__("4e43");

// CONCATENATED MODULE: ./components/modal/SetNoticePresenter.tsx
var SetNoticePresenter_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }







const ReadOnlyDescription = external_styled_components_default.a.div.withConfig({
  displayName: "SetNoticePresenter__ReadOnlyDescription",
  componentId: "ln0rkt-0"
})(["", ";position:absolute;top:0;left:0;width:100%;height:300px;overflow:auto;background:white;padding:15px;"], props => props.theme.whiteBox);
const PreviewWrap = external_styled_components_default()(ReadOnlyDescription).withConfig({
  displayName: "SetNoticePresenter__PreviewWrap",
  componentId: "ln0rkt-1"
})(["z-index:10;& > span{position:absolute;top:5px;right:5px;cursor:pointer;}"]);

const SetNoticePresenter = ({
  loading,
  setNoticeLoading,
  removeNoticeLoading,
  action,
  isMaster,
  title,
  description,
  mdDescription,
  preview,
  onShowEdit,
  onPreview,
  onRefreshPreview,
  onClose,
  onDelete,
  onSubmit
}) => SetNoticePresenter_jsx(external_react_["Fragment"], null, (loading || setNoticeLoading || removeNoticeLoading) && SetNoticePresenter_jsx(Loader["a" /* default */], null), SetNoticePresenter_jsx(external_react_bootstrap_["Modal"], {
  onHide: onClose,
  show: true,
  animation: false
}, SetNoticePresenter_jsx(external_react_bootstrap_["Modal"].Header, {
  closeButton: true
}, SetNoticePresenter_jsx(external_react_bootstrap_["Modal"].Title, null, action.code === "readonly" || action.code === "modifiable" ? title.value : `공지사항 ${action.modalTitle}`)), SetNoticePresenter_jsx("form", {
  onSubmit: onSubmit
}, SetNoticePresenter_jsx(external_react_bootstrap_["Modal"].Body, null, SetNoticePresenter_jsx(Form["a" /* InputWrapper */], null, (action.code === "add" || action.code === "modify") && SetNoticePresenter_jsx(external_react_["Fragment"], null, SetNoticePresenter_jsx(Form["b" /* Label */], {
  htmlFor: "title",
  val: title.value
}, "\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694."), SetNoticePresenter_jsx(Input["a" /* default */], _extends({
  placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694.",
  name: "title",
  required: true,
  autoComplete: "off"
}, title)))), SetNoticePresenter_jsx(Form["a" /* InputWrapper */], null, SetNoticePresenter_jsx(Form["b" /* Label */], {
  htmlFor: "description",
  val: description.value
}, "\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694."), SetNoticePresenter_jsx(Form["e" /* TextArea */], _extends({
  placeholder: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694.",
  name: "description",
  required: true,
  autoComplete: "off"
}, description)), (action.code === "readonly" || action.code === "modifiable") && SetNoticePresenter_jsx(ReadOnlyDescription, {
  dangerouslySetInnerHTML: {
    __html: mdDescription
  },
  className: "markdown-body"
}), preview && SetNoticePresenter_jsx(PreviewWrap, null, SetNoticePresenter_jsx("div", {
  dangerouslySetInnerHTML: {
    __html: preview
  },
  className: "markdown-body"
}), SetNoticePresenter_jsx("span", {
  "aria-hidden": "true",
  onClick: onRefreshPreview
}, "\xD7")))), SetNoticePresenter_jsx(external_react_bootstrap_["Modal"].Footer, null, SetNoticePresenter_jsx(external_react_bootstrap_["Button"], {
  variant: "secondary",
  onClick: onClose
}, "\uCDE8\uC18C"), (action.code === "readonly" || action.code === "modifiable") && SetNoticePresenter_jsx(external_react_["Fragment"], null, isMaster && SetNoticePresenter_jsx(external_react_bootstrap_["Button"], {
  variant: "danger",
  onClick: onDelete
}, "\uC0AD\uC81C"), SetNoticePresenter_jsx(external_react_bootstrap_["Button"], {
  variant: "primary",
  onClick: isMaster ? onShowEdit : onClose
}, isMaster ? "수정" : "확인")), (action.code === "modify" || action.code === "add") && SetNoticePresenter_jsx(external_react_["Fragment"], null, SetNoticePresenter_jsx(external_react_bootstrap_["Button"], {
  variant: "info",
  onClick: preview ? onRefreshPreview : onPreview
}, preview ? "미리보기 취소" : "미리보기"), SetNoticePresenter_jsx(external_react_bootstrap_["Button"], {
  variant: "primary",
  type: "submit"
}, action.code === "add" ? "등록" : "수정"))))));

/* harmony default export */ var modal_SetNoticePresenter = (SetNoticePresenter);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./hooks/index.ts


const useInput = defaultValue => {
  const {
    0: value,
    1: setValue
  } = Object(external_react_["useState"])(defaultValue);
  const onChange = Object(external_react_["useCallback"])(e => {
    setValue(e.target.value);
  }, []);
  return {
    value,
    onChange,
    setValue
  };
};
const useDebounce = (defaultValue, delay) => {
  const {
    0: value,
    1: setValue
  } = Object(external_react_["useState"])("");
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])(defaultValue);
  Object(external_react_["useEffect"])(() => {
    if (value === state) return;
    const timeout = setTimeout(() => setValue(state), delay);
    return () => clearTimeout(timeout);
  }, [value, state]);
  return [value, setState];
};
const useLazyAxios = () => {
  const {
    0: loading,
    1: setLoading
  } = Object(external_react_["useState"])(false);
  const call = Object(external_react_["useCallback"])(async options => {
    const result = {};
    setLoading(true);

    try {
      const {
        data
      } = await external_axios_default()(options);
      result["data"] = data;
    } catch (error) {
      result["error"] = error;
    }

    setLoading(false);
    return result;
  }, [loading]);
  return {
    loading,
    call
  };
};
// CONCATENATED MODULE: ./components/modal/SetNoticeContainer.tsx
var SetNoticeContainer_jsx = external_react_default.a.createElement;









const SetNoticeContainer = () => {
  const dispatch = Object(context["i" /* useVssDispatch */])();
  const {
    activeNotice,
    isMaster
  } = Object(context["j" /* useVssState */])();
  const {
    loading,
    call
  } = useLazyAxios();
  const modalTitle = useInput(activeNotice.title);
  const modalDescription = useInput(activeNotice.description);
  const {
    0: mdDescription,
    1: setMdDescription
  } = Object(external_react_["useState"])("");
  const {
    0: preview,
    1: setPreview
  } = Object(external_react_["useState"])("");
  const {
    0: modalAction,
    1: setModalAction
  } = Object(external_react_["useState"])({
    code: activeNotice.action,
    modalTitle: activeNotice.actionText
  }); // readonly, modifiable, modify, add

  const [set, {
    loading: setNoticeLoading
  }] = Object(client_["useMutation"])(activeNotice.noticeId ? updateNoticeMutation : addNoticeMutation);
  const [remove, {
    loading: removeNoticeLoading
  }] = Object(client_["useMutation"])(removeNoticeMutation);

  const convertTextIntoMd = async text => {
    const {
      data,
      error
    } = await call({
      method: "post",
      url: "https://api.github.com/markdown",
      data: {
        text,
        mode: "gfm",
        context: "github/gollum"
      }
    });

    if (data) {
      const doc = new DOMParser().parseFromString(data, "text/html");
      return doc.body.innerHTML;
    } else if (error) {
      return null;
    } else {
      throw new Error("please, check useLazyAxios");
    }
  };

  const handlePreView = Object(external_react_["useCallback"])(async () => {
    if (loading) return;

    if (!modalDescription.value) {
      return alert("내용을 입력하세요.");
    }

    try {
      const md = await convertTextIntoMd(modalDescription.value);

      if (md) {
        setPreview(md);
      }
    } catch {
      alert("미리보기 로드에 실패했습니다.");
    }
  }, [modalDescription.value]);
  const handleRefreshPreview = Object(external_react_["useCallback"])(() => {
    setPreview("");
  }, []);
  const handleClose = Object(external_react_["useCallback"])(() => {
    dispatch({
      type: context["b" /* HIDE_NOTICE_MODAL */]
    });
  }, []);
  const handleShowEdit = Object(external_react_["useCallback"])(() => {
    setModalAction({
      code: "modify",
      modalTitle: "수정"
    });
  }, []);
  const handleDelete = Object(external_react_["useCallback"])(async () => {
    if (removeNoticeLoading) {
      return alert("요청 중입니다. 잠시만 기다려주세요.");
    }

    const tf = confirm("공지사항을 삭제하시겠어요?");

    if (tf) {
      const {
        data: {
          deleteNotice
        }
      } = await remove({
        variables: {
          noticeId: activeNotice.noticeId
        }
      });

      if (deleteNotice) {
        alert("공지사항이 삭제되었습니다.");
        dispatch({
          type: context["b" /* HIDE_NOTICE_MODAL */]
        });
      }
    }
  }, [removeNoticeLoading]);
  const handleSubmit = Object(external_react_["useCallback"])(async e => {
    e.preventDefault();

    if (setNoticeLoading) {
      return alert("요청 중입니다. 잠시만 기다려주세요.");
    }

    const tf = confirm(`입력한 내용으로 ${modalAction.code === "add" ? "등록" : "수정"}하시겠어요?`);

    if (tf) {
      try {
        const {
          data: {
            addNotice,
            updateNotice
          }
        } = await set({
          variables: {
            title: modalTitle.value,
            description: modalDescription.value,
            noticeId: activeNotice.noticeId
          }
        });

        if (updateNotice) {
          alert("공지사항이 수정되었습니다.");
          dispatch({
            type: context["b" /* HIDE_NOTICE_MODAL */]
          });
        } else if (addNotice) {
          alert("공지사항이 등록되었습니다.");
          dispatch({
            type: context["b" /* HIDE_NOTICE_MODAL */]
          });
        }
      } catch (error) {
        const {
          message
        } = JSON.parse(error.message);
        alert(message);
      }
    }
  }, [modalAction.code, modalTitle.value, modalDescription.value, setNoticeLoading]);
  Object(external_react_["useEffect"])(() => {
    async function loadDescription(value) {
      const md = await convertTextIntoMd(value);

      if (md) {
        setMdDescription(md);
      }
    }

    if (activeNotice.description) {
      loadDescription(activeNotice.description);
    }
  }, [activeNotice.description]);
  return SetNoticeContainer_jsx(modal_SetNoticePresenter, {
    loading: loading,
    removeNoticeLoading: removeNoticeLoading,
    setNoticeLoading: setNoticeLoading,
    action: modalAction,
    isMaster: isMaster,
    title: modalTitle,
    description: modalDescription,
    mdDescription: mdDescription,
    preview: preview,
    onShowEdit: handleShowEdit,
    onPreview: handlePreView,
    onRefreshPreview: handleRefreshPreview,
    onClose: handleClose,
    onDelete: handleDelete,
    onSubmit: handleSubmit
  });
};

/* harmony default export */ var modal_SetNoticeContainer = (SetNoticeContainer);
// CONCATENATED MODULE: ./graphql/post/mutation/add.ts

const addPostMutation = client_["gql"]`
  mutation addPost(
    $title: String!
    $description: String
    $status: String!
    $file: String!
  ) {
    addPost(
      title: $title
      description: $description
      status: $status
      file: $file
    )
  }
`;
// CONCATENATED MODULE: ./graphql/post/mutation/update.ts

const updatePostMutation = client_["gql"]`
  mutation updatePost(
    $postId: String!
    $title: String!
    $description: String
    $status: String!
  ) {
    updatePost(
      postId: $postId
      title: $title
      description: $description
      status: $status
    )
  }
`;
// EXTERNAL MODULE: ./graphql/post/mutation/remove.ts
var mutation_remove = __webpack_require__("AStJ");

// CONCATENATED MODULE: ./components/modal/SetPostPresenter.tsx
var SetPostPresenter_jsx = external_react_default.a.createElement;







const UploadWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "SetPostPresenter__UploadWrapper",
  componentId: "sc-17w3pe5-0"
})(["", ";background:", ";width:100%;height:300px;cursor:pointer;padding:10px;display:flex;justify-content:center;align-items:center;"], props => props.theme.whiteBox, props => props.theme.bgColor);
const GuideLine = external_styled_components_default.a.div.withConfig({
  displayName: "SetPostPresenter__GuideLine",
  componentId: "sc-17w3pe5-1"
})(["flex:1;display:flex;flex-direction:column;text-align:center;padding:10px;& > div{flex:1;padding:10px;}"]);

const SetPostPresenter_SetNoticePresenter = ({
  addPostLoading,
  updatePostLoading,
  removePostLoading,
  header,
  title,
  description,
  status,
  progress,
  file,
  fileEl,
  onClickFile,
  onChangeFile,
  onChangeTitle,
  onChangeDescription,
  onChangeStatus,
  onClose,
  onDelete,
  onSubmit
}) => SetPostPresenter_jsx(external_react_["Fragment"], null, (addPostLoading || updatePostLoading || removePostLoading) && SetPostPresenter_jsx(Loader["a" /* default */], null), SetPostPresenter_jsx(external_react_bootstrap_["Modal"], {
  onHide: onClose,
  animation: false,
  show: true
}, SetPostPresenter_jsx(external_react_bootstrap_["Modal"].Header, {
  closeButton: true
}, SetPostPresenter_jsx(external_react_bootstrap_["Modal"].Title, null, `포스트 ${header}`)), SetPostPresenter_jsx("form", {
  onSubmit: onSubmit
}, SetPostPresenter_jsx(external_react_bootstrap_["Modal"].Body, null, !file ? SetPostPresenter_jsx(UploadWrapper, {
  onClick: onClickFile
}, SetPostPresenter_jsx(GuideLine, null, progress > 0 && SetPostPresenter_jsx("div", null, SetPostPresenter_jsx(external_react_bootstrap_["ProgressBar"], {
  now: progress,
  label: `${progress}%`,
  style: {
    width: "100%"
  }
})), progress === 0 && SetPostPresenter_jsx(external_react_default.a.Fragment, null, SetPostPresenter_jsx("div", null, SetPostPresenter_jsx(icon["l" /* Upload */], null)), SetPostPresenter_jsx("div", null, "\uC601\uC0C1\uC744 \uC5C5\uB85C\uB4DC\uD558\uB824\uBA74 \uD074\uB9AD\uD558\uC138\uC694."), SetPostPresenter_jsx("div", null, SetPostPresenter_jsx(external_react_bootstrap_["Button"], {
  variant: "primary"
}, "\uD30C\uC77C\uC120\uD0DD")))), SetPostPresenter_jsx("input", {
  type: "file",
  onChange: onChangeFile,
  ref: fileEl,
  hidden: true,
  accept: "video/*"
})) : SetPostPresenter_jsx(external_react_default.a.Fragment, null, SetPostPresenter_jsx(Form["a" /* InputWrapper */], null, SetPostPresenter_jsx(Form["b" /* Label */], {
  htmlFor: "title",
  val: title
}, "\uC81C\uBAA9"), SetPostPresenter_jsx(Input["a" /* default */], {
  name: "title",
  placeholder: "\uC81C\uBAA9\uC744 \uC785\uB825\uD558\uC138\uC694.",
  required: true,
  autoComplete: "off",
  value: title,
  onChange: onChangeTitle
})), SetPostPresenter_jsx(Form["a" /* InputWrapper */], null, SetPostPresenter_jsx(Form["b" /* Label */], {
  htmlFor: "description",
  val: description
}, "\uB0B4\uC6A9"), SetPostPresenter_jsx(Form["e" /* TextArea */], {
  required: true,
  name: "description",
  placeholder: "\uB0B4\uC6A9\uC744 \uC785\uB825\uD558\uC138\uC694.",
  autoComplete: "off",
  value: description,
  onChange: onChangeDescription
})), SetPostPresenter_jsx(Form["a" /* InputWrapper */], null, SetPostPresenter_jsx(Form["b" /* Label */], {
  htmlFor: "status",
  val: status
}, "\uACF5\uAC1C\uC124\uC815"), SetPostPresenter_jsx(Form["c" /* Select */], {
  required: true,
  name: "status",
  value: status,
  onChange: onChangeStatus
}, SetPostPresenter_jsx("option", {
  value: "PUBLIC"
}, "\uACF5\uAC1C"), SetPostPresenter_jsx("option", {
  value: "PRIVATE"
}, "\uBE44\uACF5\uAC1C"))))), SetPostPresenter_jsx(external_react_bootstrap_["Modal"].Footer, null, SetPostPresenter_jsx(external_react_bootstrap_["Button"], {
  variant: "info",
  onClick: onClose
}, "\uCDE8\uC18C"), header === "수정" && SetPostPresenter_jsx(external_react_bootstrap_["Button"], {
  variant: "danger",
  onClick: onDelete
}, "\uC0AD\uC81C"), file && SetPostPresenter_jsx(external_react_bootstrap_["Button"], {
  variant: "primary",
  type: "submit"
}, header)))));

/* harmony default export */ var SetPostPresenter = (SetPostPresenter_SetNoticePresenter);
// CONCATENATED MODULE: ./components/modal/SetPostContainer.tsx
var SetPostContainer_jsx = external_react_default.a.createElement;









const SetPostContainer = () => {
  const {
    activePost
  } = Object(context["j" /* useVssState */])();
  const dispatch = Object(context["i" /* useVssDispatch */])();
  const {
    0: header,
    1: setHeader
  } = Object(external_react_["useState"])("영상 업로드");
  const fileEl = Object(external_react_["useRef"])(null);
  const {
    0: title,
    1: setTitle
  } = Object(external_react_["useState"])("");
  const {
    0: description,
    1: setDescription
  } = Object(external_react_["useState"])("");
  const {
    0: status,
    1: setStatus
  } = Object(external_react_["useState"])("PUBLIC");
  const {
    0: progress,
    1: setProgress
  } = Object(external_react_["useState"])(0);
  const {
    0: file,
    1: setFile
  } = Object(external_react_["useState"])("");
  const [add, {
    loading: addPostLoading
  }] = Object(client_["useMutation"])(addPostMutation);
  const [update, {
    loading: updatePostLoading
  }] = Object(client_["useMutation"])(updatePostMutation);
  const [remove, {
    loading: removePostLoading
  }] = Object(client_["useMutation"])(mutation_remove["a" /* removePostMutation */]);
  const handleChangeTitle = Object(external_react_["useCallback"])(async e => {
    setTitle(e.target.value);
  }, []);
  const handleChangeDescription = Object(external_react_["useCallback"])(async e => {
    setDescription(e.target.value);
  }, []);
  const handleChangeStatus = Object(external_react_["useCallback"])(async e => {
    setStatus(e.target.value);
  }, []);
  const handleClickFile = Object(external_react_["useCallback"])(() => {
    if (progress > 0 && progress < 100) {
      return alert("업로드 진행 중입니다.");
    }

    const node = fileEl.current;

    if (node) {
      node.click();
    }
  }, [progress]);
  const handleChangeFile = Object(external_react_["useCallback"])(async e => {
    if (!e.target.value) return; // cancel select file

    const {
      files
    } = e.target;
    const formData = new FormData();
    formData.append("file", files[0]);
    const response = await external_axios_default.a.post(`${"https://vssystem.herokuapp.com"}/api/upload`, formData, {
      onUploadProgress: ({
        lengthComputable,
        loaded,
        total
      }) => {
        if (lengthComputable) {
          setProgress(Math.floor(loaded / total * 100));
        }
      }
    });

    if (response.data) {
      setFile(response.data);
      setHeader("등록");
    }
  }, []);
  const handleDelete = Object(external_react_["useCallback"])(async () => {
    if (removePostLoading) {
      return alert("요청 중입니다. 잠시만 기다려주세요.");
    }

    const tf = confirm("포스트를 삭제하시겠어요?");

    if (tf) {
      const {
        data: {
          deletePost
        }
      } = await remove({
        variables: {
          postId: activePost.postId
        }
      });

      if (deletePost) {
        alert("포스트가 삭제되었습니다.");
        dispatch({
          type: context["c" /* HIDE_POST_MODAL */]
        });
      }
    }
  }, [activePost, removePostLoading]);
  const handleSubmit = Object(external_react_["useCallback"])(async e => {
    e.preventDefault();

    if (addPostLoading || updatePostLoading) {
      return alert("요청 중입니다. 잠시만 기다려주세요.");
    }

    const tf = confirm(`입력한 내용으로 ${header}하시겠어요?`);

    if (tf) {
      try {
        if (header === "등록") {
          const {
            data: {
              addPost
            }
          } = await add({
            variables: {
              title,
              description,
              status,
              file
            }
          });

          if (addPost) {
            alert("포스트가 등록되었습니다.");
            dispatch({
              type: context["c" /* HIDE_POST_MODAL */]
            });
          }
        } else if (header === "수정") {
          const {
            data: {
              updatePost
            }
          } = await update({
            variables: {
              postId: activePost.postId,
              title,
              description,
              status,
              file
            }
          });

          if (updatePost) {
            alert("포스트가 수정되었습니다.");
            dispatch({
              type: context["c" /* HIDE_POST_MODAL */]
            });
          }
        } else {
          throw new Error("check current header");
        }
      } catch (error) {
        const {
          message
        } = JSON.parse(error.message);
        alert(message);
      }
    }
  }, [title, description, status, file, addPostLoading, activePost, updatePostLoading]);
  const handleClose = Object(external_react_["useCallback"])(() => {
    dispatch({
      type: context["c" /* HIDE_POST_MODAL */]
    });
  }, []);
  Object(external_react_["useEffect"])(() => {
    if (activePost.title) {
      setTitle(activePost.title);
    }

    if (activePost.description) {
      setDescription(activePost.description);
    }

    if (activePost.status) {
      setStatus(activePost.status);
    }

    if (activePost.postId) {
      setProgress(100);
      setHeader("수정");
    }

    if (activePost.url) {
      setFile(activePost.url);
    }
  }, [activePost]);
  return SetPostContainer_jsx(SetPostPresenter, {
    addPostLoading: addPostLoading,
    updatePostLoading: updatePostLoading,
    removePostLoading: removePostLoading,
    header: header,
    title: title,
    description: description,
    status: status,
    progress: progress,
    file: file,
    fileEl: fileEl,
    onClickFile: handleClickFile,
    onChangeFile: handleChangeFile,
    onChangeTitle: handleChangeTitle,
    onChangeDescription: handleChangeDescription,
    onChangeStatus: handleChangeStatus,
    onClose: handleClose,
    onDelete: handleDelete,
    onSubmit: handleSubmit
  });
};

/* harmony default export */ var modal_SetPostContainer = (SetPostContainer);
// CONCATENATED MODULE: ./graphql/auth/mutation/login.ts

const logInMutation = client_["gql"]`
  mutation logIn($email: String!, $pwd: String!) {
    logIn(email: $email, pwd: $pwd) {
      token
      id
      nickname
      email
      avatar {
        url
      }
      isMaster
    }
  }
`;
// EXTERNAL MODULE: ./components/common/Button.tsx
var Button = __webpack_require__("Okwz");

// CONCATENATED MODULE: ./components/auth/SignInPresenter.tsx
var SignInPresenter_jsx = external_react_default.a.createElement;

function SignInPresenter_extends() { SignInPresenter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SignInPresenter_extends.apply(this, arguments); }







const SignInPresenter = ({
  loading,
  email,
  pwd,
  onSubmit
}) => {
  return SignInPresenter_jsx(external_react_default.a.Fragment, null, loading && SignInPresenter_jsx(Loader["a" /* default */], null), SignInPresenter_jsx("form", {
    onSubmit: onSubmit
  }, SignInPresenter_jsx(Form["a" /* InputWrapper */], null, SignInPresenter_jsx(Form["b" /* Label */], {
    htmlFor: "email",
    val: email.value
  }, "\uC774\uBA54\uC77C"), SignInPresenter_jsx(Input["a" /* default */], SignInPresenter_extends({
    type: "email",
    placeholder: "\uC774\uBA54\uC77C",
    name: "email",
    autoComplete: "off",
    required: true
  }, email))), SignInPresenter_jsx(Form["a" /* InputWrapper */], null, SignInPresenter_jsx(Form["b" /* Label */], {
    htmlFor: "password",
    val: pwd.value
  }, "\uC554\uD638"), SignInPresenter_jsx(Input["a" /* default */], SignInPresenter_extends({
    type: "password",
    placeholder: "\uC554\uD638",
    name: "password",
    required: true
  }, pwd))), SignInPresenter_jsx(Button["a" /* default */], {
    text: "\uB85C\uADF8\uC778",
    type: "submit"
  })));
};

/* harmony default export */ var auth_SignInPresenter = (SignInPresenter);
// CONCATENATED MODULE: ./components/auth/SignInContainer.tsx
var SignInContainer_jsx = external_react_default.a.createElement;








const SignInContainer = () => {
  const dispatch = Object(context["i" /* useVssDispatch */])();
  const [login, {
    loading
  }] = Object(client_["useMutation"])(logInMutation);
  const email = useInput("");
  const pwd = useInput("");
  const handleSubmit = Object(external_react_["useCallback"])(async e => {
    e.preventDefault();

    if (loading) {
      return alert("요청 중입니다. 잠시만 기다려주세요.");
    }

    try {
      const {
        data: {
          logIn
        }
      } = await login({
        variables: {
          email: email.value,
          pwd: pwd.value
        }
      });

      if (logIn) {
        const {
          token,
          id,
          nickname,
          email,
          avatar,
          isMaster
        } = logIn;
        Object(lib_token["c" /* setAccessToken */])(token);
        dispatch({
          type: context["d" /* SET_ME */],
          userId: id,
          nickname,
          email,
          avatar,
          isMaster
        });
        dispatch({
          type: context["a" /* HIDE_LOGIN_MODAL */]
        });
      }
    } catch (error) {
      const {
        message
      } = JSON.parse(error.message);
      alert(message);
    }
  }, [email.value, pwd.value, loading]);
  return SignInContainer_jsx(auth_SignInPresenter, {
    loading: loading,
    email: email,
    pwd: pwd,
    onSubmit: handleSubmit
  });
};

/* harmony default export */ var auth_SignInContainer = (SignInContainer);
// CONCATENATED MODULE: ./components/auth/SignUpPresenter.tsx
var SignUpPresenter_jsx = external_react_default.a.createElement;

function SignUpPresenter_extends() { SignUpPresenter_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SignUpPresenter_extends.apply(this, arguments); }








const SignUpPresenter_UploadWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "SignUpPresenter__UploadWrapper",
  componentId: "sc-5fc15h-0"
})(["", " width:100%;height:150px;display:flex;justify-content:center;align-items:center;margin-bottom:10px;cursor:pointer;& img{width:100%;height:100%;}"], props => props.theme.whiteBox);

const SignUpPresenter = ({
  loading,
  signUpLoading,
  nickname,
  email,
  pwd,
  confirmPwd,
  preview,
  fileEl,
  confirmPwdEl,
  onChangePreview,
  onChangeConfirmPwd,
  onClickUpload,
  onSubmit
}) => {
  return SignUpPresenter_jsx(external_react_default.a.Fragment, null, (loading || signUpLoading) && SignUpPresenter_jsx(Loader["a" /* default */], null), SignUpPresenter_jsx("form", {
    onSubmit: onSubmit
  }, SignUpPresenter_jsx(SignUpPresenter_UploadWrapper, {
    onClick: onClickUpload
  }, preview ? SignUpPresenter_jsx("img", {
    src: preview,
    alt: "avatar",
    title: "\uBCC0\uACBD\uD558\uB824\uBA74 \uD074\uB9AD\uD558\uC138\uC694."
  }) : SignUpPresenter_jsx(icon["k" /* Thumbnail */], {
    style: {
      width: 100,
      height: 50
    }
  }), SignUpPresenter_jsx("input", {
    type: "file",
    onChange: onChangePreview,
    ref: fileEl,
    hidden: true,
    accept: "image/jpg, image/jpeg, image/png"
  })), SignUpPresenter_jsx(Form["a" /* InputWrapper */], null, SignUpPresenter_jsx(Form["b" /* Label */], {
    htmlFor: "email",
    val: email.value
  }, "\uC774\uBA54\uC77C"), SignUpPresenter_jsx(Input["a" /* default */], SignUpPresenter_extends({
    type: "email",
    placeholder: "\uC774\uBA54\uC77C",
    name: "email",
    autoComplete: "off",
    required: true
  }, email))), SignUpPresenter_jsx(Form["a" /* InputWrapper */], null, SignUpPresenter_jsx(Form["b" /* Label */], {
    htmlFor: "password",
    val: pwd.value
  }, "\uC554\uD638"), SignUpPresenter_jsx(Input["a" /* default */], SignUpPresenter_extends({
    type: "password",
    placeholder: "\uC554\uD638",
    name: "password",
    required: true
  }, pwd))), SignUpPresenter_jsx(Form["a" /* InputWrapper */], null, SignUpPresenter_jsx(Form["b" /* Label */], {
    htmlFor: "conform_password",
    val: confirmPwd
  }, "\uC554\uD638 \uD655\uC778"), SignUpPresenter_jsx(Input["a" /* default */], {
    type: "password",
    placeholder: "\uC554\uD638 \uD655\uC778",
    name: "conform_password",
    required: true,
    value: confirmPwd,
    onChange: onChangeConfirmPwd,
    ref: confirmPwdEl
  })), SignUpPresenter_jsx(Form["a" /* InputWrapper */], null, SignUpPresenter_jsx(Form["b" /* Label */], {
    htmlFor: "nickname",
    val: nickname.value
  }, "\uB2C9\uB124\uC784"), SignUpPresenter_jsx(Input["a" /* default */], SignUpPresenter_extends({
    placeholder: "\uB2C9\uB124\uC784",
    required: true,
    name: "nickname"
  }, nickname, {
    autoComplete: "off"
  }))), SignUpPresenter_jsx(Button["a" /* default */], {
    text: "\uD68C\uC6D0\uAC00\uC785",
    type: "submit"
  })));
};

/* harmony default export */ var auth_SignUpPresenter = (SignUpPresenter);
// CONCATENATED MODULE: ./graphql/user/mutation/signup.ts

const signUpMutation = client_["gql"]`
  mutation addUser(
    $email: String!
    $pwd: String!
    $nickname: String!
    $file: String!
  ) {
    addUser(email: $email, pwd: $pwd, nickname: $nickname, file: $file)
  }
`;
// CONCATENATED MODULE: ./components/auth/SignUpContainer.tsx
var SignUpContainer_jsx = external_react_default.a.createElement;






const SignUpContainer = ({
  setAction
}) => {
  const {
    loading,
    call
  } = useLazyAxios();
  const fileEl = Object(external_react_["useRef"])(null);
  const confirmPwdEl = Object(external_react_["useRef"])(null);
  const nickname = useInput("");
  const email = useInput("");
  const pwd = useInput("");
  const {
    0: confirmPwd,
    1: setConfirmPwd
  } = Object(external_react_["useState"])("");
  const {
    0: preview,
    1: setPreview
  } = Object(external_react_["useState"])("");
  const {
    0: file,
    1: setFile
  } = Object(external_react_["useState"])("");
  const [signUp, {
    loading: signUpLoading
  }] = Object(client_["useMutation"])(signUpMutation);
  const handleChangeConfirmPwd = Object(external_react_["useCallback"])(e => {
    const {
      value
    } = e.target;
    const node = confirmPwdEl.current;
    setConfirmPwd(value);

    if (pwd.value !== value) {
      if (node) {
        node.setCustomValidity("비밀번호가 일치하지 않습니다.");
      }
    } else {
      if (node) {
        node.setCustomValidity("");
      }
    }
  }, [pwd.value]);
  const handleChangePreview = Object(external_react_["useCallback"])(async e => {
    const {
      value,
      files
    } = e.target;
    if (!value) return; // prevent cancel action

    if (loading) return; // prevent same request

    const [file] = files;
    const formData = new FormData();
    formData.append("file", file);
    const {
      data,
      error
    } = await call({
      method: "post",
      url: `${"https://vssystem.herokuapp.com"}/api/upload`,
      data: formData,
      headers: {
        "content-type": "multipart/form-data"
      }
    });

    if (data) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setPreview(reader.result);
        setFile(data);
      };

      reader.readAsDataURL(file);
    }

    if (error) {
      alert("썸네일 업로드 중 오류가 발생했습니다.");
    }
  }, [loading]);
  const handleClickUpload = Object(external_react_["useCallback"])(() => {
    const node = fileEl.current;

    if (node) {
      node.click();
    }
  }, []);
  const handleSubmit = Object(external_react_["useCallback"])(async e => {
    e.preventDefault();

    if (signUpLoading) {
      return alert("요청 중입니다. 잠시만 기다려주세요.");
    }

    const tf = confirm("입력한 내용으로 회원가입 하시겠어요?");

    if (tf) {
      try {
        const {
          data: {
            addUser
          }
        } = await signUp({
          variables: {
            email: email.value,
            pwd: pwd.value,
            nickname: nickname.value,
            file: file ? file : "https://frisk.s3.ap-northeast-2.amazonaws.com/upload/d5d715f5-9ad6-458b-a97a-f68eadd252e0"
          }
        });

        if (addUser) {
          setAction("login");
          alert("회원가입이 정상처리되었습니다.");
        }
      } catch (error) {
        const {
          message
        } = JSON.parse(error.message);
        alert(message);
      }
    }
  }, [email.value, pwd.value, nickname.value, file, signUpLoading]);
  return SignUpContainer_jsx(auth_SignUpPresenter, {
    loading: loading,
    signUpLoading: signUpLoading,
    nickname: nickname,
    email: email,
    pwd: pwd,
    confirmPwd: confirmPwd,
    preview: preview,
    fileEl: fileEl,
    confirmPwdEl: confirmPwdEl,
    onChangePreview: handleChangePreview,
    onChangeConfirmPwd: handleChangeConfirmPwd,
    onClickUpload: handleClickUpload,
    onSubmit: handleSubmit
  });
};

/* harmony default export */ var auth_SignUpContainer = (SignUpContainer);
// CONCATENATED MODULE: ./components/modal/Auth.tsx
var Auth_jsx = external_react_default.a.createElement;







const Auth_Link = external_styled_components_default.a.span.withConfig({
  displayName: "Auth__Link",
  componentId: "sc-13cg60q-0"
})(["color:", ";cursor:pointer;"], props => props.theme.blueColor);

const Auth = () => {
  const dispatch = Object(context["i" /* useVssDispatch */])();
  const {
    0: action,
    1: setAction
  } = Object(external_react_["useState"])("login");
  const handleClose = Object(external_react_["useCallback"])(() => {
    dispatch({
      type: context["a" /* HIDE_LOGIN_MODAL */]
    });
  }, []);
  return Auth_jsx(external_react_bootstrap_["Modal"], {
    onHide: handleClose,
    show: true,
    animation: false
  }, Auth_jsx(external_react_bootstrap_["Modal"].Header, {
    closeButton: true
  }, Auth_jsx(external_react_bootstrap_["Modal"].Title, null, action === "login" ? "로그인" : "회원가입")), Auth_jsx(external_react_bootstrap_["Modal"].Body, null, action === "signup" ? Auth_jsx(auth_SignUpContainer, {
    setAction: setAction
  }) : Auth_jsx(auth_SignInContainer, null), Auth_jsx(Form["d" /* StateChanger */], null, action === "login" && Auth_jsx("div", null, "\uACC4\uC815\uC774 \uC5C6\uB2E4\uBA74\xA0", Auth_jsx(Auth_Link, {
    onClick: () => setAction("signup")
  }, "\uD68C\uC6D0\uAC00\uC785")), action === "signup" && Auth_jsx("div", null, "\uACC4\uC815\uC774 \uC788\uB2E4\uBA74\xA0", Auth_jsx(Auth_Link, {
    onClick: () => setAction("login")
  }, "\uB85C\uADF8\uC778")))));
};

/* harmony default export */ var modal_Auth = (Auth);
// CONCATENATED MODULE: ./components/common/Layout.tsx
var Layout_jsx = external_react_default.a.createElement;








const Layout = ({
  children,
  title = "VSS"
}) => {
  const {
    isShowNoticeModal,
    isShowAddPostModal,
    isShowLoginModal
  } = Object(context["j" /* useVssState */])();
  return Layout_jsx("div", null, Layout_jsx(head_default.a, null, Layout_jsx("meta", {
    charSet: "UTF-8",
    name: "format-detection",
    content: "telephone=no"
  }), Layout_jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width, user-scalable=no"
  }), Layout_jsx("meta", {
    name: "description",
    content: "Video sharing system"
  }), Layout_jsx("meta", {
    name: "google",
    content: "notranslate"
  }), Layout_jsx("meta", {
    httpEquiv: "X-UA-Compatible",
    content: "ie=edge"
  }), Layout_jsx("title", null, title)), Layout_jsx(external_react_default.a.Fragment, null, title !== "페이지를 찾을 수 없습니다" && Layout_jsx(common_Header, null)), Layout_jsx(external_react_default.a.Fragment, null, children), Layout_jsx(external_react_default.a.Fragment, null, isShowNoticeModal && Layout_jsx(modal_SetNoticeContainer, null), isShowAddPostModal && Layout_jsx(modal_SetPostContainer, null), isShowLoginModal && Layout_jsx(modal_Auth, null)));
};

/* harmony default export */ var common_Layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "5Mjc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// EXTERNAL MODULE: ./graphql/user/query/index.ts
var query = __webpack_require__("2207");

// EXTERNAL MODULE: ./context/index.tsx
var context = __webpack_require__("O0wy");

// EXTERNAL MODULE: ./components/common/FollowButton.tsx + 1 modules
var FollowButton = __webpack_require__("K49Q");

// CONCATENATED MODULE: ./components/user/common.ts

const Thumbnail = external_styled_components_default.a.img.withConfig({
  displayName: "common__Thumbnail",
  componentId: "sc-1mezltq-0"
})(["width:100%;height:150px;"]);
const Column = external_styled_components_default.a.div.withConfig({
  displayName: "common__Column",
  componentId: "sc-1mezltq-1"
})(["display:flex;padding:5px;justify-content:space-between;align-items:center;height:60px;& > div{width:70px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.info{font-size:12px;}"]);
// CONCATENATED MODULE: ./components/user/HoverUser.tsx
var __jsx = external_react_default.a.createElement;







const Container = external_styled_components_default.a.div.withConfig({
  displayName: "HoverUser__Container",
  componentId: "v2im11-0"
})(["", ";position:absolute;display:flex;flex-direction:column;overflow:hidden;top:35px;left:0;width:240px;height:220px;z-index:100;"], props => props.theme.whiteBox);
const Loading = external_styled_components_default.a.div.withConfig({
  displayName: "HoverUser__Loading",
  componentId: "v2im11-1"
})(["", ";position:absolute;overflow:hidden;display:flex;justfiy-content:flex-start;align-items:center;text-indent:10px;top:35px;left:0;width:240px;height:50px;z-index:100;"], props => props.theme.whiteBox);

const HoverUser = ({
  userId
}) => {
  const {
    userId: myUserId
  } = Object(context["j" /* useVssState */])();
  const {
    data,
    loading
  } = Object(client_["useQuery"])(query["b" /* userQuery */], {
    variables: {
      userId
    },
    fetchPolicy: "network-only"
  });

  if (loading) {
    return __jsx(Loading, null, "\uB85C\uB529 \uC911\uC785\uB2C8\uB2E4...");
  }

  const {
    nickname,
    avatar,
    followedBy,
    following,
    posts
  } = data.getUser;
  const isFollowing = followedBy.some(v => v.id === myUserId);
  return __jsx(Container, null, __jsx(Thumbnail, {
    src: avatar.url
  }), __jsx(Column, null, __jsx("div", null, nickname), __jsx("div", null, myUserId && userId !== myUserId && __jsx(FollowButton["a" /* default */], {
    userId: userId,
    isFollowing: isFollowing
  }))), __jsx(Column, null, __jsx("span", {
    className: "info"
  }, "\uD3EC\uC2A4\uD2B8: ", posts.length), __jsx("span", {
    className: "info"
  }, "\uD314\uB85C\uC6CC: ", followedBy.length), __jsx("span", {
    className: "info"
  }, "\uD314\uB85C\uC789: ", following.length)));
};

/* harmony default export */ var user_HoverUser = __webpack_exports__["a"] = (HoverUser);

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "AStJ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return removePostMutation; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const removePostMutation = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  mutation deletePost($postId: String!) {
    deletePost(postId: $postId)
  }
`;

/***/ }),

/***/ "AYBl":
/***/ (function(module, exports) {

module.exports = require("@apollo/client/link/ws");

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Dxod":
/***/ (function(module, exports) {

module.exports = require("@apollo/client/utilities");

/***/ }),

/***/ "GEYq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return postsQuery; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const postsQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query getPosts(
    $skip: Int
    $first: Int
    $orderBy: String
    $searchKeyword: String
  ) {
    getPosts(
      skip: $skip
      first: $first
      orderBy: $orderBy
      searchKeyword: $searchKeyword
    ) {
      id
      title
      description
      createdAt
      user {
        id
        nickname
        avatar {
          url
        }
      }
      video {
        url
      }
      likes {
        user {
          id
        }
      }
      status
      room {
        id
      }
    }
  }
`;

/***/ }),

/***/ "IZS3":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "Jx5A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Subject__Container",
  componentId: "sc-1sw9jmh-0"
})(["display:flex;justify-content:space-between;align-items:center;border-bottom:", ";padding:8px 5px;font-size:20px;margin-bottom:10px;font-weight:500;& svg{width:20px;height:20px;}"], props => props.activeBorder && `1px solid gray`);

const Subject = ({
  children,
  activeBorder
}) => __jsx(Container, {
  activeBorder: activeBorder
}, children);

/* harmony default export */ __webpack_exports__["a"] = (Subject);

/***/ }),

/***/ "K49Q":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// EXTERNAL MODULE: ./components/common/Button.tsx
var Button = __webpack_require__("Okwz");

// CONCATENATED MODULE: ./graphql/user/mutation/follow.ts

const followMutation = client_["gql"]`
  mutation follow($userId: String!) {
    follow(userId: $userId)
  }
`;
const unfollowMutation = client_["gql"]`
  mutation unfollow($userId: String!) {
    unfollow(userId: $userId)
  }
`;
// EXTERNAL MODULE: ./lib/token.ts
var lib_token = __webpack_require__("hLbD");

// EXTERNAL MODULE: ./context/index.tsx
var context = __webpack_require__("O0wy");

// CONCATENATED MODULE: ./components/common/FollowButton.tsx
var __jsx = external_react_default.a.createElement;







const FollowButton = ({
  isFollowing,
  userId
}) => {
  const dispatch = Object(context["i" /* useVssDispatch */])();
  const {
    0: ctrlIsFolling,
    1: setCtrlIsFolling
  } = Object(external_react_["useState"])(isFollowing);
  const [follow, {
    loading: followLoading
  }] = Object(client_["useMutation"])(followMutation);
  const [unfollow, {
    loading: unfollowLoading
  }] = Object(client_["useMutation"])(unfollowMutation);
  const handleFollow = Object(external_react_["useCallback"])(async () => {
    const token = Object(lib_token["a" /* getAccessToken */])();

    if (token) {
      if (ctrlIsFolling) {
        if (unfollowLoading) return;
        const {
          data
        } = await unfollow({
          variables: {
            userId
          }
        });

        if (data.unfollow) {
          setCtrlIsFolling(false);
          alert("언팔로우 되었습니다.");
        }
      } else {
        if (followLoading) return;
        const {
          data
        } = await follow({
          variables: {
            userId
          }
        });

        if (data.follow) {
          setCtrlIsFolling(true);
          alert("팔로우 되었습니다.");
        }
      }
    } else {
      dispatch({
        type: context["e" /* SHOW_LOGIN_MODAL */]
      });
    }
  }, [ctrlIsFolling, followLoading, unfollowLoading]);
  return __jsx(Button["a" /* default */], {
    text: ctrlIsFolling ? "언팔로우" : "팔로우",
    onClick: handleFollow
  });
};

/* harmony default export */ var common_FollowButton = __webpack_exports__["a"] = (FollowButton);

/***/ }),

/***/ "LYXD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__("IZS3");

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./components/common/Avatar.tsx
var Avatar = __webpack_require__("WIWL");

// CONCATENATED MODULE: ./components/common/Video.tsx
var __jsx = external_react_default.a.createElement;

 // 240p = 68%

const Container = external_styled_components_default.a.div.withConfig({
  displayName: "Video__Container",
  componentId: "sc-1k57tyu-0"
})(["position:relative;&:after{content:\"\";padding-bottom:57%;display:block;}"]);
const Wrapper = external_styled_components_default.a.video.withConfig({
  displayName: "Video__Wrapper",
  componentId: "sc-1k57tyu-1"
})(["position:absolute;width:100%;height:100%;top:0;left:0;&:focus{outline:none;}"]);

const Video = ({
  src
}) => __jsx(Container, null, __jsx(Wrapper, {
  controls: true,
  preload: "metadata"
}, __jsx("source", {
  src: `${src}#t=1`,
  type: "video/mp4"
})));

/* harmony default export */ var common_Video = (Video);
// EXTERNAL MODULE: ./components/common/Timestamp.tsx
var Timestamp = __webpack_require__("qXo3");

// EXTERNAL MODULE: ./components/icon/index.tsx
var icon = __webpack_require__("z75s");

// EXTERNAL MODULE: ./components/user/HoverUser.tsx + 1 modules
var HoverUser = __webpack_require__("5Mjc");

// CONCATENATED MODULE: ./components/post/PostPresenter.tsx
var PostPresenter_jsx = external_react_default.a.createElement;









const PostPresenter_Container = external_styled_components_default.a.div.withConfig({
  displayName: "PostPresenter__Container",
  componentId: "sc-69jamc-0"
})(["", ";width:100%;margin-bottom:30px;"], props => props.theme.whiteBox);
const Header = external_styled_components_default.a.div.withConfig({
  displayName: "PostPresenter__Header",
  componentId: "sc-69jamc-1"
})(["padding:2%;display:flex;justify-content:space-between;align-items:center;background:white;"]);
const User = external_styled_components_default.a.div.withConfig({
  displayName: "PostPresenter__User",
  componentId: "sc-69jamc-2"
})(["position:relative;width:100px;display:flex;align-items:center;"]);
const Body = external_styled_components_default.a.div.withConfig({
  displayName: "PostPresenter__Body",
  componentId: "sc-69jamc-3"
})(["padding:15px;border-top:", ";border-bottom:", ";display:flex;flex-direction:column;width:100%;"], props => props.theme.boxBorder, props => props.theme.boxBorder);
const Title = external_styled_components_default.a.div.withConfig({
  displayName: "PostPresenter__Title",
  componentId: "sc-69jamc-4"
})(["font-weight:bold;font-size:20px;margin-bottom:10px;"]);
const Description = external_styled_components_default()(Title).withConfig({
  displayName: "PostPresenter__Description",
  componentId: "sc-69jamc-5"
})(["top:30px;font-size:16px;font-weight:500;margin-bottom:0;"]);
const Footer = external_styled_components_default.a.div.withConfig({
  displayName: "PostPresenter__Footer",
  componentId: "sc-69jamc-6"
})(["padding:15px;"]);
const IconWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "PostPresenter__IconWrapper",
  componentId: "sc-69jamc-7"
})(["display:flex;justify-content:space-between;align-items:center;"]);
const Icon = external_styled_components_default.a.span.withConfig({
  displayName: "PostPresenter__Icon",
  componentId: "sc-69jamc-8"
})(["margin-right:10px;", ""], props => props.disabledMobile && props.theme.isMobile && "display: none");
const DownloadItem = external_styled_components_default.a.div.withConfig({
  displayName: "PostPresenter__DownloadItem",
  componentId: "sc-69jamc-9"
})(["display:inline-block;width:100%;"]);
const DownloadLink = external_styled_components_default.a.a.withConfig({
  displayName: "PostPresenter__DownloadLink",
  componentId: "sc-69jamc-10"
})(["display:block;width:100%;height:100%;border:0;border-radius:", ";color:white;font-weight:600;background:", ";text-align:center;padding:7px 0;font-size:14px;&:hover{color:white;text-decoration:none;}"], props => props.theme.borderRadius, props => props.theme.blueColor);
const MoreWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "PostPresenter__MoreWrapper",
  componentId: "sc-69jamc-11"
})(["position:relative;& #dropdown-custom-2{position:absolute;top:-20px;right:0;opacity:0;z-index:1;}& svg{width:20px;height:20px;fill:gray;cursor:pointer;position:absolute;top:-10px;right:0;}"]);

const PostPresenter = ({
  title,
  description,
  status,
  createdAt,
  user,
  video,
  isLiked,
  likeCount,
  isMyPost,
  isShowUser,
  onClickAvatar,
  onLike,
  onUpdate,
  // onRoom,
  onDelete
}) => PostPresenter_jsx(PostPresenter_Container, null, PostPresenter_jsx(Header, null, PostPresenter_jsx(User, null, PostPresenter_jsx(Avatar["a" /* default */], {
  size: "30",
  src: user.avatar.url,
  onClick: onClickAvatar
}), PostPresenter_jsx("div", {
  style: {
    textIndent: 10
  }
}, user.nickname), isShowUser && PostPresenter_jsx(HoverUser["a" /* default */], {
  userId: user.id
})), PostPresenter_jsx("div", {
  style: {
    width: 100,
    textAlign: "right"
  }
}, isMyPost && PostPresenter_jsx(external_react_bootstrap_["Dropdown"], null, PostPresenter_jsx(MoreWrapper, null, PostPresenter_jsx(external_react_bootstrap_["Dropdown"].Toggle, {
  id: "dropdown-custom-2",
  style: {
    position: "absolute",
    top: -20,
    right: 0,
    opacity: 0,
    zIndex: 1
  }
}), PostPresenter_jsx(icon["g" /* More */], null)), PostPresenter_jsx(external_react_bootstrap_["Dropdown"].Menu, null, PostPresenter_jsx(external_react_bootstrap_["Dropdown"].Item, {
  onClick: onUpdate
}, "\uD3EC\uC2A4\uD2B8 \uC218\uC815"), PostPresenter_jsx(external_react_bootstrap_["Dropdown"].Divider, null), PostPresenter_jsx(external_react_bootstrap_["Dropdown"].Item, {
  onClick: onDelete
}, "\uD3EC\uC2A4\uD2B8 \uC0AD\uC81C"))))), PostPresenter_jsx(common_Video, {
  src: video.url
}), PostPresenter_jsx(Body, null, PostPresenter_jsx(Title, null, title), PostPresenter_jsx(Description, null, description)), PostPresenter_jsx(Footer, null, PostPresenter_jsx(IconWrapper, null, PostPresenter_jsx("div", null, PostPresenter_jsx(Icon, {
  onClick: onLike
}, isLiked ? PostPresenter_jsx(icon["f" /* HeartFull */], null) : PostPresenter_jsx(icon["e" /* HeartEmpty */], null)), PostPresenter_jsx(Icon, null, likeCount.toLocaleString()), status === "PUBLIC" && PostPresenter_jsx(external_react_["Fragment"], null, PostPresenter_jsx(external_react_bootstrap_["OverlayTrigger"], {
  trigger: "click",
  placement: "right",
  overlay: PostPresenter_jsx(external_react_bootstrap_["Popover"], {
    id: "popover-basic"
  }, PostPresenter_jsx(external_react_bootstrap_["Popover"].Title, {
    as: "h3"
  }, "\uB2E4\uC6B4\uB85C\uB4DC"), PostPresenter_jsx(external_react_bootstrap_["Popover"].Content, {
    style: {
      display: "flex",
      flexDirection: "row",
      width: "auto"
    }
  }, PostPresenter_jsx(DownloadItem, null, PostPresenter_jsx(DownloadLink, {
    href: video.url,
    download: true
  }, "\uAE30\uBCF8"))))
}, PostPresenter_jsx(Icon, {
  disabledMobile: true
}, PostPresenter_jsx(icon["c" /* Download */], null))))), PostPresenter_jsx(Timestamp["a" /* default */], {
  text: external_moment_default()(createdAt).format("YYYY-MM-DD HH:mm:ss")
}))));

/* harmony default export */ var post_PostPresenter = (PostPresenter);
// EXTERNAL MODULE: ./graphql/post/mutation/remove.ts
var mutation_remove = __webpack_require__("AStJ");

// CONCATENATED MODULE: ./graphql/post/mutation/like.ts

const likeMutation = client_["gql"]`
  mutation likePost($postId: String!) {
    likePost(postId: $postId)
  }
`;
// EXTERNAL MODULE: ./context/index.tsx
var context = __webpack_require__("O0wy");

// EXTERNAL MODULE: ./lib/token.ts
var lib_token = __webpack_require__("hLbD");

// CONCATENATED MODULE: ./components/post/PostContainer.tsx
var PostContainer_jsx = external_react_default.a.createElement;








const PostContainer = ({
  id,
  title,
  description,
  createdAt,
  user,
  video,
  status,
  likes // room

}) => {
  const {
    userId
  } = Object(context["j" /* useVssState */])();
  const dispatch = Object(context["i" /* useVssDispatch */])();
  const isMyPost = userId || userId === user.id;
  const {
    0: ctrlIsLiked,
    1: setCtrlIsLiked
  } = Object(external_react_["useState"])(likes.some(v => v.user.id === userId));
  const {
    0: ctrlLikeCount,
    1: setCtrlLikeCount
  } = Object(external_react_["useState"])(likes.length);
  const {
    0: isShowUser,
    1: setIsShowUser
  } = Object(external_react_["useState"])(false);
  const [like, {
    loading: likeLoading
  }] = Object(client_["useMutation"])(likeMutation);
  const [remove, {
    loading: removeLoading
  }] = Object(client_["useMutation"])(mutation_remove["a" /* removePostMutation */]);
  const handleClickAvatar = Object(external_react_["useCallback"])(() => {
    setIsShowUser(!isShowUser);
  }, [isShowUser]); // 포스트 채팅방 접근 이벤트

  const handleRoom = Object(external_react_["useCallback"])(() => {
    const token = Object(lib_token["a" /* getAccessToken */])();

    if (token) {//Router.push(`/room/${room.id}`);
    } else {
      dispatch({
        type: context["e" /* SHOW_LOGIN_MODAL */]
      });
    }
  }, []); // 포스트 수정 이벤트

  const handleUpdate = Object(external_react_["useCallback"])(() => {
    dispatch({
      type: context["g" /* SHOW_POST_MODAL */],
      postId: id,
      title,
      description,
      status,
      url: video.url
    });
  }, []); // 좋아요 / 좋아요 취소 이벤트

  const handleLike = Object(external_react_["useCallback"])(async () => {
    const token = Object(lib_token["a" /* getAccessToken */])();

    if (token) {
      setCtrlIsLiked(!ctrlIsLiked);
      setCtrlLikeCount(ctrlIsLiked ? ctrlLikeCount - 1 : ctrlLikeCount + 1);

      try {
        await like({
          variables: {
            postId: id
          }
        });
      } catch (error) {
        const {
          message
        } = JSON.parse(error.message);
        alert(message);
      }
    } else {
      dispatch({
        type: context["e" /* SHOW_LOGIN_MODAL */]
      });
    }
  }, [ctrlIsLiked, ctrlLikeCount, likeLoading]); // 삭제 이벤트

  const handleDelete = Object(external_react_["useCallback"])(async () => {
    if (removeLoading) {
      return alert("요청중입니다. 잠시만 기다려주세요.");
    }

    const tf = confirm("포스트를 삭제하시겠어요?");

    if (tf) {
      try {
        const {
          data: {
            deletePost
          }
        } = await remove({
          variables: {
            postId: id
          }
        });

        if (deletePost) {
          alert("포스트가 삭제되었습니다.");
        }
      } catch (error) {
        const {
          message
        } = JSON.parse(error.message);
        alert(message);
      }
    }
  }, [removeLoading]);
  Object(external_react_["useEffect"])(() => {
    setCtrlIsLiked(likes.some(v => v.user.id === userId));
  }, [userId]);
  return PostContainer_jsx(post_PostPresenter, {
    title: title,
    description: description,
    status: status,
    createdAt: createdAt,
    user: user,
    video: video,
    isLiked: ctrlIsLiked,
    likeCount: ctrlLikeCount,
    isMyPost: isMyPost,
    isShowUser: isShowUser,
    onClickAvatar: handleClickAvatar,
    onLike: handleLike,
    onUpdate: handleUpdate,
    onRoom: handleRoom,
    onDelete: handleDelete
  });
};

/* harmony default export */ var post_PostContainer = __webpack_exports__["a"] = (PostContainer);

/***/ }),

/***/ "MRKs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return meQuery; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const meQuery = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
  query me {
    getMyProfile {
      id
      nickname
      email
      avatar {
        url
      }
      isMaster
      followedBy {
        id
      }
      following {
        id
      }
    }
  }
`;

/***/ }),

/***/ "O0wy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SHOW_NOTICE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HIDE_NOTICE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SHOW_POST_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HIDE_POST_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SHOW_LOGIN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HIDE_LOGIN_MODAL; });
/* unused harmony export SHOW_SEARCH_BAR */
/* unused harmony export HIDE_SEARCH_BAR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return VssProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return useVssState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return useVssDispatch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const SET_ME = "SET_ME";
const SHOW_NOTICE_MODAL = "SHOW_NOTICE_MODAL";
const HIDE_NOTICE_MODAL = "HIDE_NOTICE_MODAL";
const SHOW_POST_MODAL = "SHOW_POST_MODAL";
const HIDE_POST_MODAL = "HIDE_POST_MODAL";
const SHOW_LOGIN_MODAL = "SHOW_LOGIN_MODAL";
const HIDE_LOGIN_MODAL = "HIDE_LOGIN_MODAL";
const SHOW_SEARCH_BAR = "SHOW_SEARCH_BAR";
const HIDE_SEARCH_BAR = "HIDE_SEARCH_BAR"; // type for action

// create context
const VssContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
const VssDispatchContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null); // define reducer

function reducer(state, action) {
  switch (action.type) {
    case "SET_ME":
      return _objectSpread(_objectSpread({}, state), {}, {
        userId: action.userId,
        nickname: action.nickname,
        email: action.email,
        avatar: action.avatar,
        isMaster: action.isMaster
      });

    case "SHOW_NOTICE_MODAL":
      return _objectSpread(_objectSpread({}, state), {}, {
        isShowNoticeModal: true,
        activeNotice: {
          noticeId: action.noticeId,
          action: action.action,
          actionText: action.actionText,
          title: action.title,
          description: action.description
        }
      });

    case "HIDE_NOTICE_MODAL":
      return _objectSpread(_objectSpread({}, state), {}, {
        isShowNoticeModal: false,
        activeNotice: {
          noticeId: "",
          action: "wait",
          actionText: "비활성화",
          title: "",
          description: ""
        }
      });

    case "SHOW_POST_MODAL":
      return _objectSpread(_objectSpread({}, state), {}, {
        isShowAddPostModal: true,
        activePost: {
          postId: action.postId,
          title: action.title,
          description: action.description,
          status: action.status,
          url: action.url
        }
      });

    case "HIDE_POST_MODAL":
      return _objectSpread(_objectSpread({}, state), {}, {
        isShowAddPostModal: false,
        activePost: {
          postId: "",
          title: "",
          description: "",
          status: "",
          url: ""
        }
      });

    case "SHOW_SEARCH_BAR":
      return _objectSpread(_objectSpread({}, state), {}, {
        isShowSearchBar: true
      });

    case "HIDE_SEARCH_BAR":
      return _objectSpread(_objectSpread({}, state), {}, {
        isShowSearchBar: false
      });

    case "SHOW_LOGIN_MODAL":
      return _objectSpread(_objectSpread({}, state), {}, {
        isShowLoginModal: true
      });

    case "HIDE_LOGIN_MODAL":
      return _objectSpread(_objectSpread({}, state), {}, {
        isShowLoginModal: false
      });

    default:
      return _objectSpread({}, state);
  }
}

const initialState = {
  userId: null,
  nickname: null,
  email: null,
  avatar: null,
  isMaster: false,
  isShowNoticeModal: false,
  isShowAddPostModal: false,
  isShowSearchBar: false,
  isShowLoginModal: false,
  activePost: {
    postId: "",
    title: "",
    description: "",
    status: "",
    url: ""
  },
  activeNotice: {
    noticeId: "",
    action: "wait",
    actionText: "비활성화",
    title: "",
    description: ""
  }
};
function VssProvider({
  children
}) {
  const {
    0: state,
    1: dispatch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer, initialState);
  return __jsx(VssContext.Provider, {
    value: state
  }, __jsx(VssDispatchContext.Provider, {
    value: dispatch
  }, children));
}
function useVssState() {
  const state = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(VssContext);
  if (!state) throw new Error("not found provider");
  return state;
}
function useVssDispatch() {
  const dispatch = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(VssDispatchContext);
  if (!dispatch) throw new Error("not found provider");
  return dispatch;
}

/***/ }),

/***/ "Okwz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Button__Container",
  componentId: "htrhos-0"
})(["width:100%;height:100%;border:0;border-radius:", ";color:white;font-weight:600;background:", ";text-align:center;padding:7px;font-size:14px;border:1px solid ", ";&:hover{opacity:0.8;}"], props => props.theme.borderRadius, props => props.theme.blueColor, props => props.theme.blueColor);

const Button = ({
  text,
  className,
  onClick,
  type = "button"
}) => __jsx(Container, {
  className: className,
  onClick: onClick,
  type: type
}, text);

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "VU9W":
/***/ (function(module, exports) {

module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ "WIWL":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Avatar__Container",
  componentId: "sc-7bitxm-0"
})(["width:", "px;height:", "px;border:", ";border-radius:50%;overflow:hidden;cursor:pointer;position:relative;& img{position:absolute;width:100%;height:100%;}& #dropdown-custom-2{opacity:0;}"], props => props.size, props => props.size, props => props.theme.boxBorder);

const Avatar = ({
  size,
  src,
  onClick,
  children
}) => __jsx(Container, {
  onClick: onClick,
  size: size
}, __jsx("img", {
  src: src,
  alt: "avatar"
}), children);

/* harmony default export */ __webpack_exports__["a"] = (Avatar);

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XN/A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const isBrowser = false;
/* harmony default export */ __webpack_exports__["a"] = (isBrowser);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "ZRao":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initializeApollo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useApollo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("z+8S");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("VU9W");
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("v5rf");
/* harmony import */ var _apollo_client_link_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client_link_ws__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("AYBl");
/* harmony import */ var _apollo_client_link_ws__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_link_ws__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("Dxod");
/* harmony import */ var _apollo_client_utilities__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("0bYB");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("XN/A");
/* harmony import */ var _token__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("hLbD");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










let apolloClient = null;

if (!_isBrowser__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]) {
  global.fetch = isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default.a;
}

function createApolloClient() {
  const httpLink = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["createHttpLink"])({
    uri: "https://vssystem.herokuapp.com"
  });
  const wsLink = _isBrowser__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"] ? new _apollo_client_link_ws__WEBPACK_IMPORTED_MODULE_4__["WebSocketLink"]({
    uri: `${"wss://vssystem.herokuapp.com"}`,
    options: {
      reconnect: true
    }
  }) : null;
  const splitLink = _isBrowser__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"] ? Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["split"])(({
    query
  }) => {
    const definition = Object(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_5__["getMainDefinition"])(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  }, wsLink, httpLink) : httpLink;
  const errorLink = Object(_apollo_client_link_error__WEBPACK_IMPORTED_MODULE_3__["onError"])(({
    graphQLErrors,
    networkError
  }) => {
    if (graphQLErrors) graphQLErrors.map(({
      message,
      path
    }) => {
      console.log(`[GraphQL error] Query: ${path}, ${message}`);
    });

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });
  const authLink = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_2__["setContext"])((_, {
    headers
  }) => {
    const token = Object(_token__WEBPACK_IMPORTED_MODULE_8__[/* getAccessToken */ "a"])();
    return {
      headers: _objectSpread(_objectSpread({}, headers), {}, {
        Authorization: `Bearer ${token}`
      })
    };
  });
  return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloClient"]({
    connectToDevTools: _isBrowser__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
    ssrMode: !_isBrowser__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"],
    link: _apollo_client__WEBPACK_IMPORTED_MODULE_1__["ApolloLink"].from([errorLink, authLink, _isBrowser__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"] ? httpLink : splitLink]),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]({
      typePolicies: {
        Query: {
          fields: {
            getPosts: Object(_apollo_client_utilities__WEBPACK_IMPORTED_MODULE_5__["concatPagination"])()
          }
        }
      }
    })
  });
}

function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient || createApolloClient(); // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here


  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract(); // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data


    _apolloClient.cache.restore(_objectSpread(_objectSpread({}, existingCache), initialState));
  } // For SSG and SSR always create a new Apollo Client


  if (!_isBrowser__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]) return _apolloClient; // Create the Apollo Client once in the client

  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}
function useApollo(initialState) {
  const store = Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(() => initializeApollo(initialState), [initialState]);
  return store;
}

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _utils = __webpack_require__("kYf9");

var _router2 = __webpack_require__("nOHt");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)(as);
  }

  return _react.default.cloneElement(child, childProps);
}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

var _querystring = __webpack_require__("3WeD");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _normalizeTrailingSlash = __webpack_require__("X24+");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return basePath && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

    return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
  } catch (_) {
    return urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (false) {}

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = hasBasePath(as) ? delBasePath(as) : as;
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _querystring.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (false) {}

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hLbD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return removeAccessToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAccessToken; });
/* harmony import */ var _isBrowser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("XN/A");

let accessToken = _isBrowser__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"] ? localStorage.getItem("token") : "";
const setAccessToken = s => {
  localStorage.setItem("token", s);
  accessToken = s;
};
const removeAccessToken = () => {
  localStorage.removeItem("token");
  accessToken = "";
};
const getAccessToken = () => {
  return accessToken;
};

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "ppIK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FormWrapper */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return StateChanger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return TextArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Select; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Form__Box",
  componentId: "o2reuz-0"
})(["", " border-radius:0;width:100%;max-width:350px;"], props => props.theme.whiteBox);
const FormWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Box).withConfig({
  displayName: "Form__FormWrapper",
  componentId: "o2reuz-1"
})(["padding:1rem;margin-bottom:15px;width:500px;background:rgba(0,0,0,0.03);", "{width:300px;}"], props => props.theme.media.phone);
const InputWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Form__InputWrapper",
  componentId: "o2reuz-2"
})(["position:relative;margin-bottom:10px;"]);
const Label = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label.withConfig({
  displayName: "Form__Label",
  componentId: "o2reuz-3"
})(["position:absolute;top:2px;left:5px;font-size:10px;opacity:", ";animation:opacity 2s slidein;z-index:100;"], props => props.val ? 0.5 : 0);
const StateChanger = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "Form__StateChanger",
  componentId: "o2reuz-4"
})(["text-align:center;padding:20px 0px;"]);
const TextArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.textarea.withConfig({
  displayName: "Form__TextArea",
  componentId: "o2reuz-5"
})(["", ";width:100%;height:300px;resize:none;font-size:12px;overflow:auto;background:", ";padding:15px;&:focus{outline:none;}"], props => props.theme.whiteBox, props => props.theme.bgColor);
const Select = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.select.withConfig({
  displayName: "Form__Select",
  componentId: "o2reuz-6"
})(["", ";display:block;width:100%;height:35px;font-size:14px;&:focus{outline:none;}"], props => props.theme.whiteBox);

/***/ }),

/***/ "qXo3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("wy2R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.time.withConfig({
  displayName: "Timestamp__Container",
  componentId: "sc-10xm6p6-0"
})(["font-weight:400;opacity:0.5;display:inline-block;font-size:12px;"]);

const Timestamp = ({
  text
}) => __jsx(Container, null, moment__WEBPACK_IMPORTED_MODULE_2___default()(text).format("YYYY-MM-DD HH:mm:ss"));

/* harmony default export */ __webpack_exports__["a"] = (Timestamp);

/***/ }),

/***/ "v5rf":
/***/ (function(module, exports) {

module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ "vct6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section.withConfig({
  displayName: "Section__Container",
  componentId: "sc-5rj3uj-0"
})(["width:912px;height:100%;display:flex;flex-direction:", ";margin:0 auto;padding:10px;padding-top:5rem;", "{width:768px;}", "{width:100%;}"], props => props.flexDirection, props => props.theme.media.desktop, props => props.theme.media.tablet);

const Section = ({
  children,
  flexDirection = "column"
}) => __jsx(Container, {
  flexDirection: flexDirection
}, children);

/* harmony default export */ __webpack_exports__["a"] = (Section);

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "z75s":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Thumbnail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return HeartEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return HeartFull; });
/* unused harmony export Comment */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return More; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return Upload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Download; });
/* unused harmony export Accept */
/* unused harmony export Permit */
/* unused harmony export Private */
/* unused harmony export Room */
/* unused harmony export Bell */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return Next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return Search; });
/* unused harmony export MinimizeSearch */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Filter; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const size = 24;
const Thumbnail = ({
  style
}) => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  style: style,
  viewBox: "0 0 24 24",
  width: size,
  height: size
}, __jsx("path", {
  d: "M19.5 12c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-18 0l4-5.96 2.48 1.96 2.52-4 1.853 2.964c-1.271 1.303-1.977 3.089-1.827 5.036h-9.026zm10.82 4h-14.82v-18h22v7.501c-.623-.261-1.297-.422-2-.476v-5.025h-18v14h11.502c.312.749.765 1.424 1.318 2zm-9.32-11c-.828 0-1.5-.671-1.5-1.5 0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5z"
}));
const HeartEmpty = ({
  style
}) => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  style: style,
  viewBox: "0 0 24 24",
  width: size,
  height: size
}, __jsx("path", {
  d: "M6.28 3c3.236.001 4.973 3.491 5.72 5.031.75-1.547 2.469-5.021 5.726-5.021 2.058 0 4.274 1.309 4.274 4.182 0 3.442-4.744 7.851-10 13-5.258-5.151-10-9.559-10-13 0-2.676 1.965-4.193 4.28-4.192zm.001-2c-3.183 0-6.281 2.187-6.281 6.192 0 4.661 5.57 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-4.011-3.097-6.182-6.274-6.182-2.204 0-4.446 1.042-5.726 3.238-1.285-2.206-3.522-3.248-5.719-3.248z"
}));
const HeartFull = ({
  style
}) => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  style: style,
  viewBox: "0 0 24 24",
  width: size,
  height: size,
  fill: "#ED4956"
}, __jsx("path", {
  d: "M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
}));
const Comment = ({
  style
}) => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  style: style,
  width: size,
  height: size,
  viewBox: "0 0 24 24"
}, __jsx("path", {
  d: "M0 1v16.981h4v5.019l7-5.019h13v-16.981h-24zm13 12h-8v-1h8v1zm6-3h-14v-1h14v1zm0-3h-14v-1h14v1z"
}));
const More = ({
  style
}) => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  style: style,
  width: size,
  height: size,
  viewBox: "0 0 24 24"
}, __jsx("path", {
  d: "M12 18c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3zm0-9c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3z"
}));
const Upload = ({
  style
}) => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  style: style,
  width: size,
  height: size,
  viewBox: "0 0 24 24"
}, __jsx("path", {
  d: "M10 9h-6l8-9 8 9h-6v11h-4v-11zm11 11v2h-18v-2h-2v4h22v-4h-2z"
}));
const Download = ({
  style
}) => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  style: style,
  width: size,
  height: size,
  viewBox: "0 0 24 24"
}, __jsx("path", {
  d: "M15.003 3h2.997v5h-2.997v-5zm8.997 1v20h-24v-24h20l4 4zm-19 5h14v-7h-14v7zm16 4h-18v9h18v-9z"
}));
const Accept = ({
  style,
  onClick
}) => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  style: style,
  width: size,
  height: size,
  onClick: onClick,
  viewBox: "0 0 24 24"
}, __jsx("path", {
  d: "M19.523 5.175c-1.397 0-2.335-.494-3.888-1.311-.852-.446-1.536-.864-2.518-.864-1.275 0-1.747.658-2.552 1.564-2.052-1.593-3.513-.907-4.808-.293-.757.358-1.539.729-2.587.729h-3.17v7.91c1.073.102 2.001.169 3.287.464-.789 1.431.057 3.157 1.634 3.422.324.675.971 1.159 1.718 1.286.312.653.942 1.151 1.709 1.279.544 1.147 1.962 1.664 3.188 1.07.434.358.985.569 1.567.569.892 0 1.737-.483 2.145-1.337.748-.157 1.358-.648 1.664-1.296.708-.147 1.324-.604 1.648-1.286 1.386-.282 2.292-1.727 1.688-3.178 1.096-.54 2.221-.76 3.752-1.1v-7.866c-.961.059-3.507.218-4.477.238zm-14.719 9.985c-.377-.284-.424-.828-.103-1.21l.782-.959c.321-.384.887-.465 1.265-.179.38.285.424.826.104 1.211l-.782.956c-.321.385-.887.464-1.266.181zm1.714 1.282c-.378-.286-.433-.816-.111-1.2l.79-.969c.321-.383.887-.464 1.265-.181.378.285.425.828.103 1.21l-.79.969c-.321.385-.877.457-1.257.171zm1.714 1.284c-.378-.285-.426-.828-.103-1.213l.78-.956c.321-.384.887-.467 1.266-.182.377.286.424.827.103 1.211l-.781.958c-.321.385-.889.465-1.265.182zm3.76.14l-.783.963c-.323.386-.888.465-1.266.181-.378-.285-.424-.826-.104-1.21l.785-.964c.322-.382.888-.464 1.265-.178.38.282.426.825.103 1.208zm1.642 1.422c-.154.119-.341.177-.531.177-.137 0-.273-.035-.401-.095l.454-.559c.199-.235.347-.513.44-.81l.124.11c.32.367.279.891-.086 1.177zm4.968-3.87c-.368.284-.924.215-1.24-.146l-2.496-2.141c-.207-.177-.471.136-.266.31l2.433 2.089c.319.366.278.893-.088 1.175-.369.287-.926.219-1.242-.146l-1.915-1.678c-.204-.179-.474.13-.271.309l1.868 1.642c.319.365.272.88-.097 1.166-.364.282-.911.231-1.231-.137l-.365-.325c.133-1.26-.747-2.32-1.924-2.516-.326-.684-.975-1.157-1.712-1.28-.322-.678-.967-1.157-1.712-1.282-.647-1.359-2.428-1.748-3.648-.777-.801-.24-1.688-.437-2.696-.573v-4.108h1.17c1.498 0 2.577-.511 3.443-.922 1.087-.515 1.609-.754 2.581-.046-.64.636-1.294 1.196-1.967 1.589-.589.343-.852.998-.672 1.668.236.874 1.262 1.758 2.767 1.758 1.981 0 2.935-1.196 3.935-1.766 1.493 1.436 3.93 3.644 5.47 5.026.266.362.222.842-.125 1.111zm3.398-4.217c-.912.215-1.801.469-2.707.926-1.085-.979-3.529-3.193-4.399-4.063-.992-.991-1.994-1.086-3.093-.197-.79.636-2.018 1.447-2.971 1.099 1.365-.957 2.592-2.35 3.692-3.596.313-.354.527-.592 1.502-.09l.678.355c1.725.908 3.07 1.627 5.132 1.535.62-.025 1.487-.071 2.166-.11v4.141z"
}));
const Permit = ({
  style
}) => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  style: style,
  width: size,
  height: size,
  viewBox: "0 0 24 24"
}, __jsx("path", {
  d: "M11.329 19.6c-.185.252-.47.385-.759.385-.194 0-.389-.06-.558-.183-.419-.309-.509-.896-.202-1.315l1.077-1.456c.308-.417.896-.508 1.315-.199.421.306.511.895.201 1.313l-1.074 1.455zm-.825-2.839c.308-.418.217-1.007-.201-1.316-.421-.308-1.008-.216-1.317.203l-1.073 1.449c-.309.419-.217 1.009.202 1.317.417.307 1.007.218 1.315-.202l1.074-1.451zm-1.9-1.388c.309-.417.217-1.007-.203-1.315-.418-.307-1.007-.216-1.314.202l-1.083 1.461c-.308.419-.209.995.209 1.304.421.308 1 .229 1.308-.19l1.083-1.462zm-1.898-1.386c.308-.419.219-1.007-.203-1.315-.419-.309-1.007-.218-1.315.201l-1.075 1.451c-.308.418-.217 1.008.202 1.315.419.307 1.008.218 1.315-.202l1.076-1.45zm17.294-8.438s-1.555.301-2.667.479c-2.146.344-4.144-.416-6.361-1.562-.445-.229-.957-.466-1.458-.466-.461 0-.913.209-1.292.639-1.366 1.547-2.16 2.915-3.785 3.864-.801.468.14 1.934 1.86 1.331.878-.308 1.736-.895 2.706-1.677.762-.615 1.22-.524 1.879.135 1.238 1.238 5.404 5.351 5.404 5.351 1.317-.812 2.422-1.312 3.713-1.792v-6.302zm-10.524 12.662c-.158.459-.618 1.001-.953 1.455.297.235.608.334.882.334.717 0 1.188-.671.542-1.318l-.471-.471zm6.506-3.463c-1.07-1.055-4.732-4.667-5.803-5.713-.165-.161-.421-.18-.608-.044-.639.464-2.082 1.485-2.944 1.788-1.685.59-3.115-.222-3.422-1.359-.192-.712.093-1.411.727-1.781 1.008-.589 1.657-1.375 2.456-2.363-.695-.539-1.35-.732-1.991-.732-1.706 0-3.317 1.366-5.336 1.231-1.373-.09-3.061-.403-3.061-.403v6.333c1.476.321 2.455.464 3.92 1.199l.462-.624c.364-.496.949-.792 1.564-.792.87 0 1.622.578 1.861 1.388.951 0 1.667.602 1.898 1.387.826-.031 1.641.519 1.897 1.385 1.171 0 2.017.92 1.981 2.007l1.168 1.168c.367.368.963.367 1.331 0 .368-.368.368-.964 0-1.332l-1.686-1.687c-.22-.22.113-.553.333-.333l2.032 2.033c.368.368.963.368 1.331 0s.368-.963 0-1.331l-2.501-2.502c-.221-.218.113-.553.333-.333l2.7 2.701c.368.368.963.368 1.331 0 .358-.356.361-.922.027-1.291z"
}));
const Private = ({
  style
}) => __jsx("svg", {
  style: style,
  width: size,
  height: size,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, __jsx("path", {
  d: "M18 10v-4c0-3.313-2.687-6-6-6s-6 2.687-6 6v4h-3v14h18v-14h-3zm-5 7.723v2.277h-2v-2.277c-.595-.347-1-.984-1-1.723 0-1.104.896-2 2-2s2 .896 2 2c0 .738-.404 1.376-1 1.723zm-5-7.723v-4c0-2.206 1.794-4 4-4 2.205 0 4 1.794 4 4v4h-8z"
}));
const Room = ({
  style,
  onClick
}) => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  style: style,
  width: size,
  height: size,
  onClick: onClick,
  viewBox: "0 0 24 24"
}, __jsx("path", {
  d: "M7 11c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5zm5 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5zm5 0c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5c.829 0 1.5.671 1.5 1.5s-.671 1.5-1.5 1.5zm5-8v13h-11.643l-4.357 3.105v-3.105h-4v-13h20zm2-2h-24v16.981h4v5.019l7-5.019h13v-16.981z"
}));
const Bell = ({
  style
}) => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  style: style,
  width: size,
  height: size,
  viewBox: "0 0 24 24"
}, __jsx("path", {
  d: "M15 21c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6zm.137-17.055c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.668 2.709-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.193-10.598-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm-6.451 16c1.189-1.667 1.605-3.891 1.964-5.815.447-2.39.869-4.648 2.354-5.509 1.38-.801 2.956-.76 4.267 0 1.485.861 1.907 3.119 2.354 5.509.359 1.924.775 4.148 1.964 5.815h-12.903z"
}));
const Next = ({
  style
}) => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  style: style,
  width: size,
  height: size,
  viewBox: "0 0 24 24"
}, __jsx("path", {
  d: "M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"
}));
const Add = ({
  style
}) => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  style: style,
  width: size,
  height: size,
  viewBox: "0 0 24 24"
}, __jsx("path", {
  d: "M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z"
}));
const AddPost = ({
  style
}) => __jsx("svg", {
  style: style,
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  preserveAspectRatio: "xMidYMid meet",
  focusable: "false"
}, __jsx("g", null, __jsx("path", {
  d: "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z"
})));
const Profile = ({
  style
}) => __jsx("svg", {
  viewBox: "0 0 15 18.9",
  width: size,
  height: size,
  style: style
}, __jsx("path", {
  d: "M7.5 8.8c2.6 0 4.7-2 4.7-4.4S10.1 0 7.5 0 2.8 2 2.8 4.4C2.9 6.8 5 8.8 7.5 8.8zm0 1.5c-4.2 0-7.5 3.2-7.5 7.4 0 .6.5 1.2 1.2 1.2h12.6c.7 0 1.2-.5 1.2-1.2 0-4.1-3.3-7.4-7.5-7.4z"
}));
const Search = ({
  style
}) => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  style: style,
  viewBox: "0 0 24 24"
}, __jsx("path", {
  d: "M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"
}));
const MinimizeSearch = ({
  style
}) => __jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: size,
  height: size,
  style: style,
  viewBox: "0 0 24 24"
}, __jsx("path", {
  d: "M13 10h-8v-2h8v2zm8.172 14l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z"
}));
const Filter = ({
  style
}) => __jsx("svg", {
  viewBox: "0 0 24 24",
  preserveAspectRatio: "xMidYMid meet",
  focusable: "false",
  width: size,
  height: size,
  style: style
}, __jsx("g", null, __jsx("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), __jsx("path", {
  d: "M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"
})));

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });