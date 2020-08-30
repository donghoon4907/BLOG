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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "5MvH":
/***/ (function(module, exports) {



/***/ }),

/***/ "AYBl":
/***/ (function(module, exports) {

module.exports = require("@apollo/client/link/ws");

/***/ }),

/***/ "Bb0u":
/***/ (function(module, exports) {



/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Dxod":
/***/ (function(module, exports) {

module.exports = require("@apollo/client/utilities");

/***/ }),

/***/ "O0wy":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SET_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return SHOW_NOTICE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HIDE_NOTICE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return SHOW_POST_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return HIDE_POST_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SHOW_LOGIN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HIDE_LOGIN_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return SHOW_SEARCH_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return HIDE_SEARCH_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SHOW_FILTER_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HIDE_FILTER_BAR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SEARCH_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return VssProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return useVssState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return useVssDispatch; });
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
const HIDE_SEARCH_BAR = "HIDE_SEARCH_BAR";
const SHOW_FILTER_BAR = "SHOW_FILTER_BAR";
const HIDE_FILTER_BAR = "HIDE_FILTER_BAR";
const SEARCH_POST = "SEARCH_POST"; // type for action

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

    case "SHOW_FILTER_BAR":
      return _objectSpread(_objectSpread({}, state), {}, {
        isShowFilterBar: true
      });

    case "HIDE_FILTER_BAR":
      return _objectSpread(_objectSpread({}, state), {}, {
        isShowFilterBar: false
      });

    case "SHOW_LOGIN_MODAL":
      return _objectSpread(_objectSpread({}, state), {}, {
        isShowLoginModal: true
      });

    case "HIDE_LOGIN_MODAL":
      return _objectSpread(_objectSpread({}, state), {}, {
        isShowLoginModal: false
      });

    case "SEARCH_POST":
      return _objectSpread(_objectSpread({}, state), {}, {
        searchPostOption: {
          orderBy: action.hasOwnProperty("orderBy") ? action.orderBy : state.searchPostOption.orderBy,
          searchKeyword: action.hasOwnProperty("searchKeyword") ? action.searchKeyword : state.searchPostOption.searchKeyword,
          filter: action.hasOwnProperty("filter") ? action.filter : state.searchPostOption.filter
        }
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
  isShowFilterBar: false,
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
  },
  searchPostOption: {
    orderBy: "createdAt_DESC",
    searchKeyword: "",
    filter: []
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

/***/ "VU9W":
/***/ (function(module, exports) {

module.exports = require("@apollo/client/link/context");

/***/ }),

/***/ "XN/A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const isBrowser = false;
/* harmony default export */ __webpack_exports__["a"] = (isBrowser);

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
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__["InMemoryCache"]()
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

/***/ "cha2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ App; });

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: ./node_modules/github-markdown-css/github-markdown.css
var github_markdown = __webpack_require__("5MvH");

// EXTERNAL MODULE: ./node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css
var react_spinner_loader = __webpack_require__("Bb0u");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: ./context/index.tsx
var context = __webpack_require__("O0wy");

// EXTERNAL MODULE: ./lib/apollo.ts
var apollo = __webpack_require__("ZRao");

// EXTERNAL MODULE: external "styled-reset"
var external_styled_reset_ = __webpack_require__("x6ND");
var external_styled_reset_default = /*#__PURE__*/__webpack_require__.n(external_styled_reset_);

// CONCATENATED MODULE: ./theme/globalStyle.ts


/* harmony default export */ var globalStyle = (external_styled_components_["createGlobalStyle"]`
  ${external_styled_reset_default.a}

  * {
    box-sizing: border-box;
  }

  body {
    background: rgba(0,0,0,0.03);
  }

  svg {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  .modal {
    display: flex !important;
  }

  .modal-dialog {
    flex: 1;
    margin: 0 !important;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100% !important;
  }
  
  .modal-content {
    max-width: 500px;
  }
`);
// CONCATENATED MODULE: ./theme/index.ts
const BOX_BORDER = "1px solid #e6e6e6";
const BORDER_RADIUS = "4px";

const customMediaQuery = maxWidth => `@media only screen and (max-width: ${maxWidth}px)`;

const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576)
};
/* harmony default export */ var theme = ({
  bgColor: "#FAFAFA",
  blackColor: "#262626",
  darkGrayColor: "#999",
  lightGrayColor: "#c7c7c7",
  successColor: "#3D8939",
  infoColor: "#358597",
  redColor: "#ED4956",
  blueColor: "#4142DD",
  darkBlueColor: "#003569",
  boxBorder: BOX_BORDER,
  borderRadius: BORDER_RADIUS,
  whiteBox: `
    border:${BOX_BORDER};
    border-radius:${BORDER_RADIUS};
    background: white;
  `,
  maxWidth: "730px",
  media
});
// CONCATENATED MODULE: ./pages/_app.tsx
var __jsx = external_react_default.a.createElement;










function App({
  Component,
  pageProps
}) {
  const apolloClient = Object(apollo["b" /* useApollo */])(pageProps.initialApolloState);
  return __jsx(client_["ApolloProvider"], {
    client: apolloClient
  }, __jsx(globalStyle, null), __jsx(external_styled_components_["ThemeProvider"], {
    theme: theme
  }, __jsx(context["m" /* VssProvider */], null, __jsx(Component, pageProps))));
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

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "v5rf":
/***/ (function(module, exports) {

module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ "x6ND":
/***/ (function(module, exports) {

module.exports = require("styled-reset");

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ })

/******/ });