module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cha2");


/***/ }),

/***/ "0bYB":
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "5MvH":
/***/ (function(module, exports) {



/***/ }),

/***/ "7fVs":
/***/ (function(module, exports) {

module.exports = require("@apollo/react-ssr");

/***/ }),

/***/ "8Bbg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("B5Ud")


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

/***/ "B5Ud":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _utils = __webpack_require__("kYf9");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (false) {} // @deprecated noop for now until removal


function Container(p) {
  if (false) {}
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (false) {}
      return query;
    },

    get pathname() {
      if (false) {}
      return pathname;
    },

    get asPath() {
      if (false) {}
      return asPath;
    },

    back: () => {
      if (false) {}
      router.back();
    },
    push: (url, as) => {
      if (false) {}
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (false) {}
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (false) {}
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (false) {}
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_NOTICE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SHOW_POST_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HIDE_POST_MODAL; });
/* unused harmony export ADD_ROOM */
/* unused harmony export REMOVE_ROOM */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return VssProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return useVssState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return useVssDispatch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const SET_ME = "SET_ME";
const SET_NOTICE_MODAL = "SET_NOTICE_MODAL";
const SHOW_POST_MODAL = "SHOW_POST_MODAL";
const HIDE_POST_MODAL = "HIDE_POST_MODAL";
const ADD_ROOM = "ADD_ROOM";
const REMOVE_ROOM = "REMOVE_ROOM"; // type for action

// create context
const VssContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
const VssDispatchContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null); // define reducer

function reducer(state, action) {
  switch (action.type) {
    case "SET_ME":
      return _objectSpread(_objectSpread({}, state), {}, {
        id: action.id,
        nickname: action.nickname,
        email: action.email,
        avatar: action.avatar,
        isMaster: action.isMaster
      });

    case "SET_NOTICE_MODAL":
      return _objectSpread(_objectSpread({}, state), {}, {
        isShowNoticeModal: action.payload
      });

    case "SHOW_POST_MODAL":
      return _objectSpread(_objectSpread({}, state), {}, {
        isShowAddPostModal: action.isShow,
        activePost: {
          id: action.id ? action.id : "",
          title: action.title ? action.title : "",
          description: action.description ? action.description : "",
          status: action.status ? action.status : "",
          url: action.url ? action.url : ""
        }
      });

    case "HIDE_POST_MODAL":
      return _objectSpread(_objectSpread({}, state), {}, {
        isShowAddPostModal: action.payload,
        activePost: {
          id: "",
          title: "",
          description: "",
          status: "",
          url: ""
        }
      });

    case "ADD_ROOM":
      return _objectSpread(_objectSpread({}, state), {}, {
        activeRoom: state.activeRoom.concat([action.payload])
      });

    case "REMOVE_ROOM":
      return _objectSpread(_objectSpread({}, state), {}, {
        activeRoom: state.activeRoom.filter(v => v.id !== action.payload)
      });

    default:
      return _objectSpread({}, state);
  }
}

const initialState = {
  id: "",
  nickname: "",
  email: "",
  avatar: {
    url: ""
  },
  isMaster: false,
  isShowNoticeModal: false,
  isShowAddPostModal: false,
  activePost: {
    id: "",
    title: "",
    description: "",
    status: "",
    url: ""
  },
  activeRoom: []
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
} // for hooks

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

/***/ "WjVr":
/***/ (function(module, exports) {

module.exports = require("apollo-link-token-refresh");

/***/ }),

/***/ "XN/A":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const isBrowser = false;
/* harmony default export */ __webpack_exports__["a"] = (isBrowser);

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

// EXTERNAL MODULE: ./node_modules/bootstrap/dist/css/bootstrap.min.css
var bootstrap_min = __webpack_require__("q4sD");

// EXTERNAL MODULE: ./node_modules/github-markdown-css/github-markdown.css
var github_markdown = __webpack_require__("5MvH");

// EXTERNAL MODULE: ./node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css
var react_spinner_loader = __webpack_require__("Bb0u");

// EXTERNAL MODULE: ./node_modules/next/app.js
var app = __webpack_require__("8Bbg");
var app_default = /*#__PURE__*/__webpack_require__.n(app);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@apollo/client"
var client_ = __webpack_require__("z+8S");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");

// EXTERNAL MODULE: ./context/index.tsx
var context_0 = __webpack_require__("O0wy");

// EXTERNAL MODULE: external "@apollo/client/link/context"
var context_ = __webpack_require__("VU9W");

// EXTERNAL MODULE: external "@apollo/client/link/error"
var error_ = __webpack_require__("v5rf");

// EXTERNAL MODULE: external "@apollo/client/link/ws"
var ws_ = __webpack_require__("AYBl");

// EXTERNAL MODULE: external "@apollo/client/utilities"
var utilities_ = __webpack_require__("Dxod");

// EXTERNAL MODULE: external "apollo-link-token-refresh"
var external_apollo_link_token_refresh_ = __webpack_require__("WjVr");

// EXTERNAL MODULE: external "jwt-decode"
var external_jwt_decode_ = __webpack_require__("tlnx");
var external_jwt_decode_default = /*#__PURE__*/__webpack_require__.n(external_jwt_decode_);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__("0bYB");
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./lib/token.ts
var lib_token = __webpack_require__("hLbD");

// EXTERNAL MODULE: ./lib/isBrowser.ts
var isBrowser = __webpack_require__("XN/A");

// CONCATENATED MODULE: ./lib/apollo.tsx
var __jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














function withApollo(PageComponent) {
  const WithApollo = (_ref) => {
    let {
      apolloClient,
      apolloState
    } = _ref,
        pageProps = _objectWithoutProperties(_ref, ["apolloClient", "apolloState"]);

    const client = apolloClient || initApolloClient(apolloState);
    return __jsx(PageComponent, _extends({}, pageProps, {
      apolloClient: client
    }));
  };

  if (false) {}

  if (!isBrowser["a" /* default */] || PageComponent.getInitialProps) {
    WithApollo.getInitialProps = async context => {
      const {
        AppTree,
        ctx: {
          res
        }
      } = context; // Run all GraphQL queries in the component tree
      // and extract the resulting data

      const apolloClient = context.ctx.apolloClient = initApolloClient({});
      const pageProps = PageComponent.getInitialProps ? await PageComponent.getInitialProps(context) : {}; // Only on the server

      if (!isBrowser["a" /* default */]) {
        // When redirecting, the response is finished.
        // No point in continuing to render
        if (res && res.finished) {
          return {};
        }

        if (!isBrowser["a" /* default */]) {
          try {
            // Run all GraphQL queries
            const {
              getDataFromTree
            } = await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "7fVs", 7));
            await getDataFromTree(__jsx(AppTree, {
              pageProps: _objectSpread(_objectSpread({}, pageProps), {}, {
                apolloClient
              }),
              apolloClient: apolloClient
            }));
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
            console.error("Error while running `getDataFromTree`", error);
          }
        } // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually


        head_default.a.rewind();
      } // Extract query data from the Apollo store


      const apolloState = apolloClient.cache.extract();
      return _objectSpread(_objectSpread({}, pageProps), {}, {
        apolloState
      });
    };
  }

  return WithApollo;
}
let apollo_apolloClient = null; // Polyfill fetch() on the server (used by apollo-client)

if (!isBrowser["a" /* default */]) {
  global.fetch = external_isomorphic_unfetch_default.a;
}
/**
 * Creates and configures the ApolloClient
 * @param  {Object} [initialState={}]
 * @param  {Object} config
 */


function createApolloClient(initialState = {}) {
  const httpLink = Object(client_["createHttpLink"])({
    uri: "https://graphqlclient.herokuapp.com"
  });
  const wsLink = isBrowser["a" /* default */] ? new ws_["WebSocketLink"]({
    uri: `${"wss://graphqlclient.herokuapp.com"}`,
    options: {
      reconnect: true
    }
  }) : null;
  const refreshLink = new external_apollo_link_token_refresh_["TokenRefreshLink"]({
    accessTokenField: "accessToken",
    isTokenValidOrUndefined: () => {
      const token = Object(lib_token["a" /* getAccessToken */])();

      if (!token) {
        return true;
      }

      try {
        const {
          exp
        } = external_jwt_decode_default()(token);

        if (Date.now() >= exp * 1000) {
          return false;
        } else {
          return true;
        }
      } catch {
        return false;
      }
    },
    fetchAccessToken: () => {
      const token = Object(lib_token["a" /* getAccessToken */])();
      return external_isomorphic_unfetch_default()(`${"https://graphqlclient.herokuapp.com"}/refresh_token`, {
        method: "POST",
        headers: {
          Authentication: `Bearer ${token}`
        }
      });
    },
    handleFetch: accessToken => {
      Object(lib_token["c" /* setAccessToken */])(accessToken);
    },
    handleError: err => {
      console.error(err);
      router_default.a.replace("/login");
    }
  });
  const splitLink = isBrowser["a" /* default */] ? Object(client_["split"])(({
    query
  }) => {
    const definition = Object(utilities_["getMainDefinition"])(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  }, wsLink, httpLink) : httpLink;
  const errorLink = Object(error_["onError"])(({
    graphQLErrors,
    networkError
  }) => {
    if (graphQLErrors) graphQLErrors.map(({
      message,
      path
    }) => {
      console.log(`[GraphQL error] Query: ${path}, ${message}`);
      const response = JSON.parse(message);

      if (isBrowser["a" /* default */] && response.status === 401) {
        router_default.a.replace("/login");
      }
    });

    if (networkError) {
      console.log(`[Network error]: ${networkError}`);

      if (isBrowser["a" /* default */]) {
        alert("서버 점검 중입니다.");
        router_default.a.replace("/login");
      }
    }
  });
  const authLink = Object(context_["setContext"])((_, {
    headers
  }) => {
    const token = Object(lib_token["a" /* getAccessToken */])();
    return {
      headers: _objectSpread(_objectSpread({}, headers), {}, {
        Authorization: `Bearer ${token}`
      })
    };
  });
  const link = [errorLink, authLink, isBrowser["a" /* default */] ? httpLink : splitLink];

  if (isBrowser["a" /* default */]) {
    link.unshift(refreshLink);
  }

  return new client_["ApolloClient"]({
    connectToDevTools: isBrowser["a" /* default */],
    ssrMode: !isBrowser["a" /* default */],
    // Disables forceFetch on the server (so queries are only run once)
    //link: errorLink.concat(authLink.concat(isBrowser ? httpLink : splitLink)),
    link: client_["ApolloLink"].from(link),
    cache: new client_["InMemoryCache"]().restore(initialState)
  });
} // export function initializeApollo(initialState: any, options: Options) {
//   // Make sure to create a new client for every server-side request so that data
//   // isn't shared between connections (which would be bad)
//   if (!isBrowser) {
//     return createApolloClient(initialState, options);
//   }
//   // Reuse client on the client-side
//   if (!apolloClient) {
//     apolloClient = createApolloClient(initialState, options);
//   }
//   return apolloClient;
// }

/**
 * Always creates a new apollo client on the server
 * Creates or reuses apollo client in the browser.
 */


function initApolloClient(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!isBrowser["a" /* default */]) {
    return createApolloClient(initialState);
  } // Reuse client on the client-side


  if (!apollo_apolloClient) {
    // setAccessToken(cookie.parse(document.cookie).test);
    apollo_apolloClient = createApolloClient(initialState);
  }

  return apollo_apolloClient;
}
// EXTERNAL MODULE: external "styled-reset"
var external_styled_reset_ = __webpack_require__("x6ND");
var external_styled_reset_default = /*#__PURE__*/__webpack_require__.n(external_styled_reset_);

// CONCATENATED MODULE: ./theme/globalStyle.ts


/* harmony default export */ var globalStyle = (external_styled_components_["createGlobalStyle"]`
  ${external_styled_reset_default.a}

  * {
    box-sizing: border-box;
  }

  svg {
    cursor: pointer;

    &:hover {
      fill: #3897f0;
    }
  }
`);
// CONCATENATED MODULE: ./theme/index.ts
const BOX_BORDER = "1px solid #e6e6e6";
const BORDER_RADIUS = "4px";

const customMediaQuery = maxWidth => `@media (max-width: ${maxWidth}px)`;

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
  blueColor: "#3897f0",
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
var _app_jsx = external_react_default.a.createElement;












class _app_AppComponent extends app_default.a {
  render() {
    const {
      Component,
      pageProps,
      apolloClient
    } = this.props;
    return _app_jsx(client_["ApolloProvider"], {
      client: apolloClient
    }, _app_jsx(globalStyle, null), _app_jsx(external_styled_components_["ThemeProvider"], {
      theme: theme
    }, _app_jsx(context_0["e" /* VssProvider */], null, _app_jsx(Component, pageProps))));
  }

}

/* harmony default export */ var _app = __webpack_exports__["default"] = (withApollo(_app_AppComponent));

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

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "q4sD":
/***/ (function(module, exports) {



/***/ }),

/***/ "tlnx":
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "v5rf":
/***/ (function(module, exports) {

module.exports = require("@apollo/client/link/error");

/***/ }),

/***/ "x6ND":
/***/ (function(module, exports) {

module.exports = require("styled-reset");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z+8S":
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ })

/******/ });