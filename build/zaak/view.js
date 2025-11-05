/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");

function _defineProperty(e, r, t) {
  return (r = (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectDestructuringEmpty)
/* harmony export */ });
function _objectDestructuringEmpty(t) {
  if (null == t) throw new TypeError("Cannot destructure " + t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutProperties)
/* harmony export */ });
/* harmony import */ var _objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = (0,_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _objectWithoutPropertiesLoose)
/* harmony export */ });
function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(r, e) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r, e) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r, e) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

function toPrimitive(t, r) {
  if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");


function toPropertyKey(t) {
  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r, a) : void 0;
  }
}


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/descriptionlist/dist/index.css":
/*!***********************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/descriptionlist/dist/index.css ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/descriptionlist/dist/mjs/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/descriptionlist/dist/mjs/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DescriptionList: () => (/* binding */ DescriptionList),
/* harmony export */   DescriptionListBase: () => (/* binding */ DescriptionListBase),
/* harmony export */   DescriptionListCaption: () => (/* binding */ DescriptionListCaption),
/* harmony export */   DescriptionListContainer: () => (/* binding */ DescriptionListContainer),
/* harmony export */   DescriptionListDetail: () => (/* binding */ DescriptionListDetail),
/* harmony export */   DescriptionListItem: () => (/* binding */ DescriptionListItem),
/* harmony export */   DescriptionListTitle: () => (/* binding */ DescriptionListTitle)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
var css_248z = ".denhaag-description-list{color:var(--denhaag-description-list-color);display:block;font-family:var(--denhaag-description-list-font-family);font-size:var(--denhaag-description-list-font-size);font-weight:var(--denhaag-description-list-font-weight);line-height:var(--denhaag-description-list-line-height);margin-block-end:var(--denhaag-description-list-margin-block-end);margin-block-start:var(--denhaag-description-list-margin-block-start);overflow-wrap:var(--denhaag-description-list-overflow-wrap,break-word)}@container description-list (width >= 480px){.denhaag-description-list{--denhaag-description-list-detail-padding-block-end:var(--denhaag-description-list-lg-detail-padding-block-end);--denhaag-description-list-detail-padding-block-start:var(\n      --denhaag-description-list-lg-detail-padding-block-start\n    );--denhaag-description-list-title-padding-block-end:var(--denhaag-description-list-lg-title-padding-block-end);--denhaag-description-list-title-padding-block-start:var(--denhaag-description-list-lg-title-padding-block-start);--denhaag-description-list-padding-inline-end:var(--denhaag-description-list-lg-padding-inline-end);--denhaag-description-list-padding-inline-start:var(--denhaag-description-list-lg-padding-inline-start);display:grid;grid-auto-flow:row;grid-auto-rows:auto;grid-template-columns:var(--denhaag-description-list-item-first-column-width,240px) 1fr auto}}.denhaag-description-list__caption{color:var(--denhaag-description-list-caption-color);font-family:var(--denhaag-description-list-caption-font-family,var(--denhaag-description-list-font-family));font-size:var(--denhaag-description-list-caption-font-size,calc(var(--denhaag-description-list-font-size, 1em)*1.33));font-weight:var(--denhaag-description-list-caption-font-weight,--denhaag-typography-weight-bold);line-height:var(--denhaag-description-list-caption-line-height,var(--denhaag-description-list-line-height));margin-block-end:var(--denhaag-description-list-caption-margin-block-end,1em);margin-block-start:0}.denhaag-description-list-container{container-name:description-list;container-type:inline-size}.denhaag-description-list__detail{margin-inline-start:0;padding-block-end:var(--denhaag-description-list-detail-padding-block-end,var(--denhaag-description-list-padding));padding-block-start:var(--denhaag-description-list-detail-padding-block-start,var(--denhaag-description-list-padding));padding-inline-end:var(--denhaag-description-list-padding-inline-end,var(--denhaag-description-list-padding));padding-inline-start:var(--denhaag-description-list-padding-inline-end,var(--denhaag-description-list-padding))}@container description-list (width >= 480px){.denhaag-description-list__detail{border-bottom:1px solid var(--denhaag-description-list-border-color,#d3d3d3);grid-column:2/4}.denhaag-description-list__title:has(+.denhaag-description-list__detail+.denhaag-description-list__detail)+.denhaag-description-list__detail{grid-column:2}.denhaag-description-list__title:has(+.denhaag-description-list__detail+.denhaag-description-list__detail)+.denhaag-description-list__detail+.denhaag-description-list__detail{grid-column:3}}.denhaag-description-list-item{border-bottom:1px solid var(--denhaag-description-list-border-color,#d3d3d3);display:block}@container description-list (width >= 480px){.denhaag-description-list-item{border:none;display:contents}}.denhaag-description-list__title{color:var(--denhaag-description-list-title-color);font-weight:var(--denhaag-description-list-title-font-weight,bold);padding-block-end:var(--denhaag-description-list-title-padding-block-end,var(--denhaag-description-list-padding));padding-block-start:var(--denhaag-description-list-title-padding-block-start,var(--denhaag-description-list-padding));padding-inline-end:var(--denhaag-description-list-padding-inline-end,var(--denhaag-description-list-padding));padding-inline-start:var(--denhaag-description-list-padding-inline-start,var(--denhaag-description-list-padding))}@container description-list (width >= 480px){.denhaag-description-list__title{border-bottom:1px solid var(--denhaag-description-list-border-color,#d3d3d3);grid-column:1}}";
        if (typeof document !== 'undefined') { 

          const head = document.head || document.getElementsByTagName('head')[0];
          const style = document.createElement('style');
          style.type = 'text/css';
          style.nonce = window.NONCE;
        
          {
            head.appendChild(style);
          }
        
          if (style.styleSheet) {
            style.styleSheet.cssText = css_248z;
          } else {
            style.appendChild(document.createTextNode(css_248z));
          }
        }/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};var DescriptionListCaption = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", __assign({ id: "h3" }, props, { className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('denhaag-description-list__caption', className) }), children));
};var DescriptionListTitle = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dt", __assign({}, props, { className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('denhaag-description-list__title', className) }), children));
};var DescriptionListDetail = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dd", __assign({}, props, { className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('denhaag-description-list__detail', className) }), children));
};var DescriptionListBase = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dl", __assign({}, props, { className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('denhaag-description-list', props.className) }), children));
};var DescriptionListItem = function (_a) {
    var className = _a.className, children = _a.children, props = __rest(_a, ["className", "children"]);
    var classNames = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('denhaag-description-list-item', className);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", __assign({ className: classNames }, props), children));
};var DescriptionListContainer = function (_a) {
    var children = _a.children, className = _a.className, props = __rest(_a, ["children", "className"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", __assign({}, props, { className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('denhaag-description-list-container', className) }), children));
};var DescriptionList = function (_a) {
    var caption = _a.caption, items = _a.items, props = __rest(_a, ["caption", "items"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DescriptionListContainer, null,
        caption && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DescriptionListCaption, null, caption),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DescriptionListBase, __assign({}, props), items.map(function (item, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DescriptionListItem, { key: index },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DescriptionListTitle, null, item.title),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DescriptionListDetail, null, item.detail),
            item.action && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(DescriptionListDetail, null, item.action))); }))));
};//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/file/dist/index.css":
/*!************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/file/dist/index.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/file/dist/mjs/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/file/dist/mjs/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   File: () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gemeente-denhaag/icons */ "./node_modules/@gemeente-denhaag/file/node_modules/@gemeente-denhaag/icons/dist/mjs/index.js");
/* harmony import */ var _utrecht_component_library_react_dist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @utrecht/component-library-react/dist */ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/component-library-react/dist/index.mjs");
var css_248z = ".denhaag-file{align-items:normal;background:none;border-color:var(--denhaag-file-border-color);border-style:var(--denhaag-file-border-style);border-width:var(--denhaag-file-border-width);box-sizing:border-box;color:inherit;cursor:pointer;display:flex;font-family:inherit;font-size:inherit;line-height:inherit;padding:0;text-align:inherit;text-decoration:inherit;width:100%}.denhaag-file+.denhaag-file{border-top:none}.denhaag-file--focus,.denhaag-file:focus{outline-color:var(--denhaag-file-focus-outline-color);outline-style:var(--denhaag-file-focus-outline-style);outline-width:var(--denhaag-file-focus-outline-width)}.denhaag-file__link{--utrecht-link-text-decoration:none;align-items:center;color:var(--denhaag-file-link-color);display:flex;gap:var(--denhaag-file-link-gap);word-break:normal}.denhaag-file__link .denhaag-file__link__icon{width:var(--denhaag-file-link-icon-width)}.denhaag-file--hover .utrecht-link,.denhaag-file:hover .utrecht-link{--utrecht-link-color:var(--denhaag-file-hover-color,--utrecht-link-hover-color)}.denhaag-file--hover .denhaag-file__link,.denhaag-file:hover .denhaag-file__link{color:var(--denhaag-file-hover-color)}.denhaag-file__left{align-items:center;background-color:var(--denhaag-file-left-background-color,--denhaag-color-warmgrey-1);display:flex;padding-inline-end:var(--denhaag-file-left-padding-inline-end);padding-inline-start:var(--denhaag-file-left-padding-inline-start)}.denhaag-file__left .denhaag-file__icon{fill:none}.denhaag-file__right{display:flex;flex-direction:column;flex-grow:1;gap:var(--denhaag-file-right-gap);padding-block-end:var(--denhaag-file-right-padding-block-end);padding-block-start:var(--denhaag-file-right-padding-block-start);padding-inline-end:var(--denhaag-file-right-padding-inline-end);padding-inline-start:var(--denhaag-file-right-padding-inline-start)}@media (width >= 620px){.denhaag-file__right{align-items:center;flex-direction:row}}.denhaag-file__label{flex-grow:1}";
        if (typeof document !== 'undefined') { 

          const head = document.head || document.getElementsByTagName('head')[0];
          const style = document.createElement('style');
          style.type = 'text/css';
          style.nonce = window.NONCE;
        
          {
            head.appendChild(style);
          }
        
          if (style.styleSheet) {
            style.styleSheet.cssText = css_248z;
          } else {
            style.appendChild(document.createTextNode(css_248z));
          }
        }/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};var File = function (_a) {
    var name = _a.name, href = _a.href, size = _a.size, lastUpdated = _a.lastUpdated, className = _a.className, onClick = _a.onClick;
    var extension = (href === null || href === void 0 ? void 0 : href.lastIndexOf('.')) >= 0 ? href.substring(href.lastIndexOf('.') + 1, href.length) : undefined;
    var lastUpdatedDate = lastUpdated ? new Date(lastUpdated).toLocaleDateString() : null;
    var FileTypeIcon = function (_a) {
        var props = __rest(_a, []);
        switch (extension) {
            case 'pdf':
                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_2__.FileIcon, __assign({}, props));
            default:
                return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_2__.ImageIcon, __assign({}, props));
        }
    };
    var defaultProps = {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('denhaag-file', className),
        'aria-labelledby': 'name',
        'aria-describedby': 'description',
    };
    var Wrapper = function (_a) {
        var children = _a.children;
        return onClick ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", __assign({ onClick: onClick }, defaultProps), children)) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", __assign({ href: href, download: name }, defaultProps), children));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Wrapper, null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "denhaag-file__left" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(FileTypeIcon, { className: "denhaag-file__icon" })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "denhaag-file__right" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "denhaag-file__label" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { id: "name" }, react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utrecht_component_library_react_dist__WEBPACK_IMPORTED_MODULE_3__.URLData, null, name)),
                (extension || size || lastUpdated) && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { id: "description" },
                    "(",
                    [extension, size, lastUpdatedDate].filter(Boolean).join(', '),
                    ")"))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "denhaag-file__link" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_2__.DownloadIcon, { className: "denhaag-file__link__icon" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "utrecht-link", tabIndex: -1 }, "Download")))));
};//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/file/node_modules/@gemeente-denhaag/icons/dist/mjs/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/file/node_modules/@gemeente-denhaag/icons/dist/mjs/index.js ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AlertTriangleFilledIcon: () => (/* binding */ AlertTriangleFilledIcon),
/* harmony export */   AlertTriangleIcon: () => (/* binding */ AlertTriangleIcon),
/* harmony export */   ArchiveIcon: () => (/* binding */ ArchiveIcon),
/* harmony export */   ArrowLeftIcon: () => (/* binding */ ArrowLeftIcon),
/* harmony export */   ArrowRightIcon: () => (/* binding */ ArrowRightIcon),
/* harmony export */   BasketballIcon: () => (/* binding */ BasketballIcon),
/* harmony export */   BedIcon: () => (/* binding */ BedIcon),
/* harmony export */   BookIcon: () => (/* binding */ BookIcon),
/* harmony export */   BuildingIcon: () => (/* binding */ BuildingIcon),
/* harmony export */   CalendarIcon: () => (/* binding */ CalendarIcon),
/* harmony export */   CallIcon: () => (/* binding */ CallIcon),
/* harmony export */   CarIcon: () => (/* binding */ CarIcon),
/* harmony export */   CardIcon: () => (/* binding */ CardIcon),
/* harmony export */   CheckCircleIcon: () => (/* binding */ CheckCircleIcon),
/* harmony export */   CheckedIcon: () => (/* binding */ CheckedIcon),
/* harmony export */   ChevronDownIcon: () => (/* binding */ ChevronDownIcon),
/* harmony export */   ChevronLeftIcon: () => (/* binding */ ChevronLeftIcon),
/* harmony export */   ChevronRightIcon: () => (/* binding */ ChevronRightIcon),
/* harmony export */   ChevronUpIcon: () => (/* binding */ ChevronUpIcon),
/* harmony export */   CircleHelpIcon: () => (/* binding */ CircleHelpIcon),
/* harmony export */   CircleInformationIcon: () => (/* binding */ CircleInformationIcon),
/* harmony export */   CircleWarningIcon: () => (/* binding */ CircleWarningIcon),
/* harmony export */   ClipboardIcon: () => (/* binding */ ClipboardIcon),
/* harmony export */   CloseIcon: () => (/* binding */ CloseIcon),
/* harmony export */   CoronaIcon: () => (/* binding */ CoronaIcon),
/* harmony export */   DocumentIcon: () => (/* binding */ DocumentIcon),
/* harmony export */   DownloadIcon: () => (/* binding */ DownloadIcon),
/* harmony export */   EditIcon: () => (/* binding */ EditIcon),
/* harmony export */   EmailIcon: () => (/* binding */ EmailIcon),
/* harmony export */   EuroIcon: () => (/* binding */ EuroIcon),
/* harmony export */   ExternalLinkIcon: () => (/* binding */ ExternalLinkIcon),
/* harmony export */   FacebookIcon: () => (/* binding */ FacebookIcon),
/* harmony export */   FavoriteIcon: () => (/* binding */ FavoriteIcon),
/* harmony export */   FileIcon: () => (/* binding */ FileIcon),
/* harmony export */   FilestorageIcon: () => (/* binding */ FilestorageIcon),
/* harmony export */   GridIcon: () => (/* binding */ GridIcon),
/* harmony export */   HamburgerIcon: () => (/* binding */ HamburgerIcon),
/* harmony export */   HideIcon: () => (/* binding */ HideIcon),
/* harmony export */   HouseIcon: () => (/* binding */ HouseIcon),
/* harmony export */   HouseWithEuroIcon: () => (/* binding */ HouseWithEuroIcon),
/* harmony export */   ImageIcon: () => (/* binding */ ImageIcon),
/* harmony export */   InboxIcon: () => (/* binding */ InboxIcon),
/* harmony export */   InstagramIcon: () => (/* binding */ InstagramIcon),
/* harmony export */   LinkedInIcon: () => (/* binding */ LinkedInIcon),
/* harmony export */   ListIcon: () => (/* binding */ ListIcon),
/* harmony export */   LogOutIcon: () => (/* binding */ LogOutIcon),
/* harmony export */   MapIcon: () => (/* binding */ MapIcon),
/* harmony export */   MegaphoneIcon: () => (/* binding */ MegaphoneIcon),
/* harmony export */   MessageIcon: () => (/* binding */ MessageIcon),
/* harmony export */   ParkingIcon: () => (/* binding */ ParkingIcon),
/* harmony export */   SearchIcon: () => (/* binding */ SearchIcon),
/* harmony export */   SettingsIcon: () => (/* binding */ SettingsIcon),
/* harmony export */   ShareIcon: () => (/* binding */ ShareIcon),
/* harmony export */   ShowIcon: () => (/* binding */ ShowIcon),
/* harmony export */   SpinnerIcon: () => (/* binding */ SpinnerIcon),
/* harmony export */   StaffIcon: () => (/* binding */ StaffIcon),
/* harmony export */   StarterIcon: () => (/* binding */ StarterIcon),
/* harmony export */   SvgIcon: () => (/* binding */ SvgIcon),
/* harmony export */   TrashIcon: () => (/* binding */ TrashIcon),
/* harmony export */   TwitterIcon: () => (/* binding */ TwitterIcon),
/* harmony export */   TwitterXIcon: () => (/* binding */ TwitterXIcon),
/* harmony export */   UncheckedBoxIcon: () => (/* binding */ UncheckedBoxIcon),
/* harmony export */   UserIcon: () => (/* binding */ UserIcon),
/* harmony export */   UserLoggedInIcon: () => (/* binding */ UserLoggedInIcon),
/* harmony export */   WalletIcon: () => (/* binding */ WalletIcon),
/* harmony export */   WhatsAppIcon: () => (/* binding */ WhatsAppIcon),
/* harmony export */   YouTubeIcon: () => (/* binding */ YouTubeIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};var SvgIcon = function (_a) {
    var _b;
    var className = _a.className, _c = _a.component, component = _c === void 0 ? 'svg' : _c, _d = _a.focusable, focusable = _d === void 0 ? 'false' : _d, _e = _a.shapeRendering, shapeRendering = _e === void 0 ? 'auto' : _e, _f = _a.useDefaultClass, useDefaultClass = _f === void 0 ? true : _f, props = __rest(_a, ["className", "component", "focusable", "shapeRendering", "useDefaultClass"]);
    var iconClassName = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])({ 'denhaag-icon': useDefaultClass }, className);
    var Component = component;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, __assign({ className: iconClassName, focusable: focusable, "aria-hidden": (_b = props['aria-hidden']) !== null && _b !== void 0 ? _b : true, shapeRendering: shapeRendering }, props), props.children));
};var css_248z = ".denhaag-icon{fill:currentColor;display:inline-block;flex-shrink:0;font-size:1.5rem;height:1em;transition:fill .2s cubic-bezier(.4,0,.2,1) 0ms;width:1em}";
        if (typeof document !== 'undefined') { 

          const head = document.head || document.getElementsByTagName('head')[0];
          const style = document.createElement('style');
          style.type = 'text/css';
          style.nonce = window.NONCE;
        
          {
            head.appendChild(style);
          }
        
          if (style.styleSheet) {
            style.styleSheet.cssText = css_248z;
          } else {
            style.appendChild(document.createTextNode(css_248z));
          }
        }var _path$_;
function _extends$11() { return _extends$11 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$11.apply(null, arguments); }
var SvgArrowLeft = function SvgArrowLeft(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$11({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$_ || (_path$_ = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M11.707 18.707a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 1 1 1.414 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414l4.293 4.293a1 1 0 0 1 0 1.414"
  })));
};
var Memo$11 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgArrowLeft);var _path$Z;
function _extends$10() { return _extends$10 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$10.apply(null, arguments); }
var SvgArrowRight = function SvgArrowRight(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$10({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$Z || (_path$Z = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414"
  })));
};
var Memo$10 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgArrowRight);var _path$Y;
function _extends$$() { return _extends$$ = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$$.apply(null, arguments); }
var SvgChevronDown = function SvgChevronDown(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$$({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$Y || (_path$Y = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M5.293 8.293a1 1 0 0 1 1.414 0L12 13.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414"
  })));
};
var Memo$$ = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgChevronDown);var _path$X;
function _extends$_() { return _extends$_ = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$_.apply(null, arguments); }
var SvgChevronRight = function SvgChevronRight(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$_({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$X || (_path$X = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M9.293 18.707a1 1 0 0 1 0-1.414L14.586 12 9.293 6.707a1 1 0 0 1 1.414-1.414l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0"
  })));
};
var Memo$_ = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgChevronRight);var _path$W;
function _extends$Z() { return _extends$Z = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$Z.apply(null, arguments); }
var SvgChevronUp = function SvgChevronUp(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$Z({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$W || (_path$W = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M11.293 7.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414z"
  })));
};
var Memo$Z = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgChevronUp);var _path$V;
function _extends$Y() { return _extends$Y = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$Y.apply(null, arguments); }
var SvgChevronLeft = function SvgChevronLeft(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$Y({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$V || (_path$V = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "m14.3 18.7-6-6c-.4-.4-.4-1 0-1.4l6-6c.4-.4 1-.4 1.4 0s.4 1 0 1.4L10.4 12l5.3 5.3c.4.4.4 1 0 1.4s-1 .4-1.4 0"
  })));
};
var Memo$Y = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgChevronLeft);var _path$U;
function _extends$X() { return _extends$X = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$X.apply(null, arguments); }
var SvgCall = function SvgCall(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$X({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$U || (_path$U = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M3.833 4h4.49L9.77 7.618l-2.325 1.55A1 1 0 0 0 7 10c.002.094 0 .001 0 .001v.021a2 2 0 0 0 .006.134q.008.124.035.33c.039.27.114.642.26 1.08.293.88.87 2.019 1.992 3.141s2.261 1.698 3.14 1.992c.439.146.81.22 1.082.26a4 4 0 0 0 .463.04l.013.001h.007s.113-.006.002 0a1 1 0 0 0 .894-.553l.67-1.34 4.436.74v4.32c-2.111.305-7.813.606-12.293-3.874S3.527 6.11 3.833 4m5.24 6.486 1.806-1.204a2 2 0 0 0 .748-2.407L10.18 3.257A2 2 0 0 0 8.323 2H3.78c-.909 0-1.764.631-1.913 1.617-.34 2.242-.801 8.864 4.425 14.09s11.847 4.764 14.09 4.425c.986-.15 1.617-1.004 1.617-1.913v-4.372a2 2 0 0 0-1.671-1.973l-4.436-.739a2 2 0 0 0-2.118 1.078l-.346.693a5 5 0 0 1-.363-.105c-.62-.206-1.481-.63-2.359-1.508s-1.302-1.739-1.508-2.36a5 5 0 0 1-.125-.447"
  })));
};
var Memo$X = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgCall);var _path$T;
function _extends$W() { return _extends$W = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$W.apply(null, arguments); }
var SvgEmail = function SvgEmail(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$W({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$T || (_path$T = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm3.519 0L12 11.671 18.481 6zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16z"
  })));
};
var Memo$W = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgEmail);var _path$S;
function _extends$V() { return _extends$V = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$V.apply(null, arguments); }
var SvgMessage = function SvgMessage(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$V({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$S || (_path$S = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-4.586l-2.707 2.707a1 1 0 0 1-1.414 0L8.586 19H4a2 2 0 0 1-2-2zm18 0H4v11h5a1 1 0 0 1 .707.293L12 19.586l2.293-2.293A1 1 0 0 1 15 17h5zM6 9.5a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1"
  })));
};
var Memo$V = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgMessage);var _path$R;
function _extends$U() { return _extends$U = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$U.apply(null, arguments); }
var SvgClose = function SvgClose(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$U({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$R || (_path$R = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414"
  })));
};
var Memo$U = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgClose);var _path$Q;
function _extends$T() { return _extends$T = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$T.apply(null, arguments); }
var SvgChecked = function SvgChecked(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$T({
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }, props), _path$Q || (_path$Q = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "currentColor",
    strokeWidth: 1.75,
    d: "M20.664 5.253a1 1 0 0 1 .083 1.411l-10.666 12a1 1 0 0 1-1.495 0l-5.333-6a1 1 0 0 1 1.494-1.328l4.586 5.159 9.92-11.16a1 1 0 0 1 1.411-.082Z"
  })));
};
var Memo$T = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgChecked);var _path$P;
function _extends$S() { return _extends$S = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$S.apply(null, arguments); }
var SvgDownload = function SvgDownload(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$S({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em"
  }, props), _path$P || (_path$P = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 13v4a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-4M5 8l5 5 5-5M10 13V1"
  })));
};
var Memo$S = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgDownload);var _path$O, _path2$e;
function _extends$R() { return _extends$R = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$R.apply(null, arguments); }
var SvgEdit = function SvgEdit(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$R({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 19 18"
  }, props), _path$O || (_path$O = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M16 11.26v4.45a1.66 1.66 0 0 1-.49 1.17 1.64 1.64 0 0 1-1.18.49H2.66A1.66 1.66 0 0 1 1 15.71V4.04a1.67 1.67 0 0 1 .48-1.18 1.7 1.7 0 0 1 1.18-.49h4.45"
  })), _path2$e || (_path2$e = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "m14.33.71 3.33 3.33-8.33 8.33H6V9.04Z"
  })));
};
var Memo$R = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgEdit);var _path$N;
function _extends$Q() { return _extends$Q = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$Q.apply(null, arguments); }
var SvgExternalLink = function SvgExternalLink(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$Q({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$N || (_path$N = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M14 5a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V6.414l-9.293 9.293a1 1 0 0 1-1.414-1.414L17.586 5zM3 7a2 2 0 0 1 2-2h5a1 1 0 1 1 0 2H5v12h12v-5a1 1 0 1 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
  })));
};
var Memo$Q = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgExternalLink);var _path$M;
function _extends$P() { return _extends$P = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$P.apply(null, arguments); }
var SvgFavorite = function SvgFavorite(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$P({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$M || (_path$M = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M12 2.5a1 1 0 0 1 .894.553l2.58 5.158 5.67.824a1 1 0 0 1 .554 1.706l-4.127 4.024.928 5.674a1 1 0 0 1-1.455 1.044L12 18.807l-5.044 2.676a1 1 0 0 1-1.455-1.044l.928-5.674-4.127-4.024a1 1 0 0 1 .554-1.706l5.67-.824 2.58-5.158A1 1 0 0 1 12 2.5m0 3.236-1.918 3.836a1 1 0 0 1-.75.543l-4.184.608 3.05 2.973a1 1 0 0 1 .289.878L7.8 18.772l3.731-1.98a1 1 0 0 1 .938 0l3.731 1.98-.687-4.198a1 1 0 0 1 .289-.877l3.05-2.974-4.183-.608a1 1 0 0 1-.75-.543z"
  })));
};
var Memo$P = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgFavorite);var _path$L;
function _extends$O() { return _extends$O = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$O.apply(null, arguments); }
var SvgGrid = function SvgGrid(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$O({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$L || (_path$L = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M3 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 0H5v4h4zm4 0a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm6 0h-4v4h4zM3 15a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 0H5v4h4zm4 0a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2zm6 0h-4v4h4z"
  })));
};
var Memo$O = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgGrid);var _path$K;
function _extends$N() { return _extends$N = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$N.apply(null, arguments); }
var SvgHamburger = function SvgHamburger(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$N({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$K || (_path$K = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M3 5a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M3 12a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1M3 19a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1",
    clipRule: "evenodd"
  })));
};
var Memo$N = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgHamburger);var _path$J;
function _extends$M() { return _extends$M = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$M.apply(null, arguments); }
var SvgHide = function SvgHide(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$M({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$J || (_path$J = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M4.707 3.293a1 1 0 0 0-1.414 1.414l2.424 2.424c-1.43 1.076-2.678 2.554-3.611 4.422a1 1 0 0 0 0 .894C4.264 16.764 8.096 19 12 19c1.555 0 3.1-.355 4.53-1.055l2.763 2.762a1 1 0 0 0 1.414-1.414zm10.307 13.135c-.98.383-2 .572-3.014.572-2.969 0-6.002-1.62-7.87-5 .817-1.479 1.858-2.62 3.018-3.437l2.144 2.144a3 3 0 0 0 4.001 4.001zM18.552 13.896c.483-.556.926-1.187 1.318-1.896C18.002 8.62 14.97 7 12 7q-.168 0-.336.007L9.879 5.223A10.2 10.2 0 0 1 12 5c3.903 0 7.736 2.236 9.894 6.553a1 1 0 0 1 0 .894 13 13 0 0 1-1.925 2.865z"
  })));
};
var Memo$M = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgHide);var _path$I;
function _extends$L() { return _extends$L = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$L.apply(null, arguments); }
var SvgList = function SvgList(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$L({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$I || (_path$I = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M4 7a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2H5a1 1 0 0 1-1-1m5 0a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1m-5 5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m5 0a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1m-5 5a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1m5 0a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2h-9a1 1 0 0 1-1-1"
  })));
};
var Memo$L = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgList);var _path$H;
function _extends$K() { return _extends$K = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$K.apply(null, arguments); }
var SvgLogOut = function SvgLogOut(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$K({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$H || (_path$H = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M2 6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v2a1 1 0 1 1-2 0V6H4v12h9v-2a1 1 0 1 1 2 0v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm15.293 2.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L18.586 13H9a1 1 0 1 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 0-1.414"
  })));
};
var Memo$K = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgLogOut);var _path$G;
function _extends$J() { return _extends$J = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$J.apply(null, arguments); }
var SvgSearch = function SvgSearch(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$J({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$G || (_path$G = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M10 4a6 6 0 1 0 0 12 6 6 0 0 0 0-12m-8 6a8 8 0 1 1 14.32 4.906l5.387 5.387a1 1 0 0 1-1.414 1.414l-5.387-5.387A8 8 0 0 1 2 10"
  })));
};
var Memo$J = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgSearch);var _path$F;
function _extends$I() { return _extends$I = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$I.apply(null, arguments); }
var SvgShare = function SvgShare(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$I({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }, props), _path$F || (_path$F = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6M18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"
  })));
};
var Memo$I = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgShare);var _path$E, _path2$d;
function _extends$H() { return _extends$H = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$H.apply(null, arguments); }
var SvgShow = function SvgShow(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$H({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$E || (_path$E = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
  })), _path2$d || (_path2$d = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M21.894 11.553C19.736 7.236 15.904 5 12 5s-7.736 2.236-9.894 6.553a1 1 0 0 0 0 .894C4.264 16.764 8.096 19 12 19s7.736-2.236 9.894-6.553a1 1 0 0 0 0-.894M12 17c-2.969 0-6.002-1.62-7.87-5C5.998 8.62 9.03 7 12 7s6.002 1.62 7.87 5c-1.868 3.38-4.901 5-7.87 5"
  })));
};
var Memo$H = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgShow);var _path$D;
function _extends$G() { return _extends$G = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$G.apply(null, arguments); }
var SvgSpinner = function SvgSpinner(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$G({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$D || (_path$D = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M20.5 12A8.5 8.5 0 1 1 12 3.5s1 0 1 1-1 1-1 1a6.5 6.5 0 1 0 6.5 6.5s0-1 1-1 1 1 1 1"
  })));
};
var Memo$G = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgSpinner);var _path$C;
function _extends$F() { return _extends$F = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$F.apply(null, arguments); }
var SvgStarter = function SvgStarter(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$F({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$C || (_path$C = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M12 2a1 1 0 0 1 .894.553l9 18a1 1 0 0 1-1.11 1.423L12 20.024l-8.783 1.952a1 1 0 0 1-1.111-1.423l9-18A1 1 0 0 1 12 2m1 16.198 6.166 1.37L13 7.236zM11 7.236 4.834 19.568 11 18.198z"
  })));
};
var Memo$F = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgStarter);var _path$B;
function _extends$E() { return _extends$E = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$E.apply(null, arguments); }
var SvgTrash = function SvgTrash(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$E({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$B || (_path$B = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2h4a1 1 0 1 1 0 2h-1.069l-.867 12.142A2 2 0 0 1 17.069 22H6.93a2 2 0 0 1-1.995-1.858L4.07 8H3a1 1 0 0 1 0-2h4zm2 2h6V4H9zM6.074 8l.857 12H17.07l.857-12zM10 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1"
  })));
};
var Memo$E = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgTrash);function _extends$D() { return _extends$D = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$D.apply(null, arguments); }
var SvgUncheckedbox = function SvgUncheckedbox(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$D({
    xmlns: "http://www.w3.org/2000/svg",
    xmlSpace: "preserve",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }, props), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    width: 19,
    height: 19,
    x: -9.5,
    y: -9.5,
    rx: 0.5,
    ry: 0.5,
    style: {
      stroke: "currentColor",
      strokeWidth: 1,
      strokeDasharray: "none",
      strokeLinecap: "butt",
      strokeDashoffset: 0,
      strokeLinejoin: "miter",
      strokeMiterlimit: 4,
      fill: "#fff",
      fillRule: "nonzero",
      opacity: 1
    },
    transform: "translate(12 12)"
  }));
};
var Memo$D = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgUncheckedbox);var _g$1, _defs;
function _extends$C() { return _extends$C = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$C.apply(null, arguments); }
var SvgAlertTriangleFilled = function SvgAlertTriangleFilled(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$C({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 20 21"
  }, props), _g$1 || (_g$1 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    clipPath: "url(#alert-triangle-filled_svg__a)"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#E15601",
    stroke: "#E15601",
    d: "M8.575 3.717 1.516 15.5A1.667 1.667 0 0 0 2.941 18h14.117a1.665 1.665 0 0 0 1.425-2.5L11.425 3.717a1.667 1.667 0 0 0-2.85 0"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "#fff",
    d: "M10 14.667h.008M10 8v3.333"
  }))), _defs || (_defs = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("clipPath", {
    id: "alert-triangle-filled_svg__a"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "#fff",
    d: "M0 .5h20v20H0z"
  })))));
};
var Memo$C = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgAlertTriangleFilled);var _g;
function _extends$B() { return _extends$B = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$B.apply(null, arguments); }
var SvgAlertTriangle = function SvgAlertTriangle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$B({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }, props), _g || (_g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0M12 17h.01M12 9v4"
  }))));
};
var Memo$B = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgAlertTriangle);var _path$A, _path2$c;
function _extends$A() { return _extends$A = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$A.apply(null, arguments); }
var SvgCheckCircle = function SvgCheckCircle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$A({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }, props), _path$A || (_path$A = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M22 11.08V12a10 10 0 1 1-5.93-9.14"
  })), _path2$c || (_path2$c = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M22 4 12 14.01l-3-3"
  })));
};
var Memo$A = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgCheckCircle);var _path$z, _path2$b, _path3$5;
function _extends$z() { return _extends$z = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$z.apply(null, arguments); }
var SvgCircleHelp = function SvgCircleHelp(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$z({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$z || (_path$z = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12"
  })), _path2$b || (_path2$b = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M12 14a1 1 0 0 1-1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1M10.5 16.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
  })), _path3$5 || (_path3$5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M12.39 7.811c-.957-.045-1.76.49-1.904 1.353a1 1 0 0 1-1.972-.328c.356-2.136 2.303-3.102 3.971-3.022.854.04 1.733.347 2.409.979C15.587 7.44 16 8.368 16 9.5c0 1.291-.508 2.249-1.383 2.832-.803.535-1.788.668-2.617.668a1 1 0 1 1 0-2c.67 0 1.186-.117 1.508-.332.25-.167.492-.46.492-1.168 0-.618-.212-1.003-.472-1.246-.277-.259-.68-.42-1.138-.443"
  })));
};
var Memo$z = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgCircleHelp);var _path$y, _path2$a;
function _extends$y() { return _extends$y = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$y.apply(null, arguments); }
var SvgCircleInformation = function SvgCircleInformation(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$y({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$y || (_path$y = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12"
  })), _path2$a || (_path2$a = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M12 10a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1M13.5 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"
  })));
};
var Memo$y = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgCircleInformation);var _path$x, _path2$9;
function _extends$x() { return _extends$x = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$x.apply(null, arguments); }
var SvgCircleWarning = function SvgCircleWarning(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$x({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$x || (_path$x = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12"
  })), _path2$9 || (_path2$9 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M12 14a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v6a1 1 0 0 1-1 1M10.5 16.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0"
  })));
};
var Memo$x = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgCircleWarning);var _path$w, _path2$8;
function _extends$w() { return _extends$w = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$w.apply(null, arguments); }
var SvgSettings = function SvgSettings(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$w({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$w || (_path$w = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M12 4a1 1 0 0 0-1 1c0 1.692-2.046 2.54-3.243 1.343a1 1 0 1 0-1.414 1.414C7.54 8.954 6.693 11 5 11a1 1 0 1 0 0 2c1.692 0 2.54 2.046 1.343 3.243a1 1 0 0 0 1.414 1.414C8.954 16.46 11 17.307 11 19a1 1 0 1 0 2 0c0-1.692 2.046-2.54 3.243-1.343a1 1 0 1 0 1.414-1.414C16.46 15.046 17.307 13 19 13a1 1 0 1 0 0-2c-1.692 0-2.54-2.046-1.343-3.243a1 1 0 0 0-1.414-1.414C15.046 7.54 13 6.693 13 5a1 1 0 0 0-1-1m-2.992.777a3 3 0 0 1 5.984 0 3 3 0 0 1 4.23 4.231 3 3 0 0 1 .001 5.984 3 3 0 0 1-4.231 4.23 3 3 0 0 1-5.984 0 3 3 0 0 1-4.231-4.23 3 3 0 0 1 0-5.984 3 3 0 0 1 4.231-4.231"
  })), _path2$8 || (_path2$8 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-2.828-.828a4 4 0 1 1 5.656 5.656 4 4 0 0 1-5.656-5.656"
  })));
};
var Memo$w = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgSettings);var _path$v;
function _extends$v() { return _extends$v = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$v.apply(null, arguments); }
var SvgArchive = function SvgArchive(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$v({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$v || (_path$v = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-1.017 1.742Q21 8.868 21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9q0-.131.017-.258A2 2 0 0 1 2 7zm18 2V5H4v2zM5 9v10h14V9zm3 3a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"
  })));
};
var Memo$v = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgArchive);var _path$u;
function _extends$u() { return _extends$u = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$u.apply(null, arguments); }
var SvgBasketball = function SvgBasketball(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$u({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$u || (_path$u = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.055 11.555c1.99.209 3.806 1 5.274 2.202l1.257-1.257L5.68 7.594a7.96 7.96 0 0 0-1.625 3.961m3.04-5.375L12 11.086l1.257-1.257a9.95 9.95 0 0 1-2.202-5.274 7.96 7.96 0 0 0-3.96 1.625m5.976-1.609a7.96 7.96 0 0 0 1.61 3.835l2.225-2.226a7.96 7.96 0 0 0-3.835-1.609m5.249 3.023L16.094 9.82a7.96 7.96 0 0 0 3.835 1.609 7.96 7.96 0 0 0-1.61-3.835m1.625 5.851a9.95 9.95 0 0 1-5.274-2.202L13.414 12.5l4.906 4.906a7.96 7.96 0 0 0 1.625-3.961m-3.04 5.375L12 13.914l-1.257 1.257a9.95 9.95 0 0 1 2.202 5.274 7.96 7.96 0 0 0 3.96-1.625m-5.976 1.609a7.96 7.96 0 0 0-1.61-3.835L7.095 18.82a7.96 7.96 0 0 0 3.835 1.609M5.68 17.406l2.226-2.226a7.96 7.96 0 0 0-3.835-1.609 7.96 7.96 0 0 0 1.61 3.835M2 12.5c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10",
    clipRule: "evenodd"
  })));
};
var Memo$u = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgBasketball);var _path$t;
function _extends$t() { return _extends$t = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$t.apply(null, arguments); }
var SvgBed = function SvgBed(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$t({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$t || (_path$t = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M2 18.5v-11h2v6h6v-6h9a3 3 0 0 1 3 3v8h-2v-3H4v3zm18-5v-3a1 1 0 0 0-1-1h-7v4zm-15-3a2 2 0 1 1 4 0 2 2 0 0 1-4 0",
    clipRule: "evenodd"
  })));
};
var Memo$t = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgBed);var _path$s;
function _extends$s() { return _extends$s = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$s.apply(null, arguments); }
var SvgBook = function SvgBook(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$s({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$s || (_path$s = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M4 6.634q.21-.087.503-.182A9.8 9.8 0 0 1 7.5 6a9.8 9.8 0 0 1 2.997.452q.293.096.503.181v10.88A11.8 11.8 0 0 0 7.5 17c-1.46 0-2.649.248-3.5.513zm8-1.749c-.226-.1-.524-.219-.888-.337A11.8 11.8 0 0 0 7.5 4c-1.526 0-2.755.271-3.612.548a9 9 0 0 0-1.001.389 6 6 0 0 0-.357.18l-.025.014-.009.005-.003.002h-.001c-.002.002-.247.147-.002.002A1 1 0 0 0 2 6v13a1 1 0 0 0 1.51.86l-.005.003h.001l.002-.001.001-.001.037-.02q.056-.03.182-.09c.17-.078.43-.188.775-.3A9.8 9.8 0 0 1 7.5 19a9.8 9.8 0 0 1 2.997.451 7 7 0 0 1 .775.3 4 4 0 0 1 .223.112m0 0h-.001l-.002-.001-.001-.001c.314.185.704.185 1.018 0l.037-.02q.056-.03.182-.09a7 7 0 0 1 .775-.3A9.8 9.8 0 0 1 16.5 19a9.8 9.8 0 0 1 2.997.451 7 7 0 0 1 .775.3 4 4 0 0 1 .219.11A1 1 0 0 0 22 19V6a1 1 0 0 0-.49-.86l-.002-.001h-.001l-.003-.003-.01-.005-.024-.014-.08-.044a6 6 0 0 0-.277-.136 9 9 0 0 0-1-.389A11.8 11.8 0 0 0 16.5 4c-1.525 0-2.755.271-3.612.548a9 9 0 0 0-.888.337m8 1.749v10.879A11.8 11.8 0 0 0 16.5 17c-1.46 0-2.649.248-3.5.513V6.633q.21-.085.503-.181A9.8 9.8 0 0 1 16.5 6a9.8 9.8 0 0 1 2.997.452q.293.096.503.181m.49.227.005.002h-.001zm0 13 .004.002-.002-.002"
  })));
};
var Memo$s = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgBook);var _path$r, _path2$7;
function _extends$r() { return _extends$r = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$r.apply(null, arguments); }
var SvgBuilding = function SvgBuilding(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$r({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 24 24"
  }, props), _path$r || (_path$r = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 2.25c-.464 0-.91.184-1.238.512A1.75 1.75 0 0 0 8.25 4v4.469a.75.75 0 0 0-.781 0l-5 5A.75.75 0 0 0 2.25 14v7a.75.75 0 0 0 .75.75h18a.75.75 0 0 0 .75-.75V4A1.752 1.752 0 0 0 20 2.25Zm0 1.5h10c.067 0 .129.025.176.072A.25.25 0 0 1 20.25 4v16.25h-6.5V14a.75.75 0 0 0-.219-.531L9.75 9.688V4a.25.25 0 0 1 .072-.178A.25.25 0 0 1 10 3.75m-2 6.313.469.468 3.781 3.78v5.939h-3.5V17a.75.75 0 0 0-.75-.75.75.75 0 0 0-.75.75v3.25h-3.5v-5.94z"
  })), _path2$7 || (_path2$7 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M13 6.25a.75.75 0 0 0-.75.75v.01a.75.75 0 0 0 .75.75.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75M17 6.25a.75.75 0 0 0-.75.75v.01a.75.75 0 0 0 .75.75.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75M17 10.25a.75.75 0 0 0-.75.75v.01a.75.75 0 0 0 .75.75.75.75 0 0 0 .75-.75V11a.75.75 0 0 0-.75-.75M17 14.25a.75.75 0 0 0-.75.75v.01a.75.75 0 0 0 .75.75.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75"
  })));
};
var Memo$r = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgBuilding);var _path$q;
function _extends$q() { return _extends$q = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$q.apply(null, arguments); }
var SvgCalendar = function SvgCalendar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$q({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$q || (_path$q = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M9 2a1 1 0 0 1 1 1v1h4V3a1 1 0 1 1 2 0v1h3a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3V3a1 1 0 0 1 1-1M8 6H5v3h14V6h-3v1a1 1 0 1 1-2 0V6h-4v1a1 1 0 0 1-2 0zm11 5H5v8h14z"
  })));
};
var Memo$q = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgCalendar);var _path$p;
function _extends$p() { return _extends$p = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$p.apply(null, arguments); }
var SvgCar = function SvgCar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$p({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$p || (_path$p = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4.072 6.129A1 1 0 0 1 5 5.5h9a1 1 0 0 1 .78.375l3.7 4.625H19a3 3 0 0 1 3 3v4a1 1 0 0 1-1 1h-1.17a3.001 3.001 0 0 1-5.66 0H9.83a3.001 3.001 0 0 1-5.66 0H3a1 1 0 0 1-1-1v-6a1 1 0 0 1 .072-.371zM4.17 16.5a3.001 3.001 0 0 1 5.658 0h4.342a3.001 3.001 0 0 1 5.658 0H20v-3a1 1 0 0 0-1-1H4v4zm.306-6H11v-3H5.677zM13 7.5v3h2.92l-2.4-3zm-6 9a1 1 0 1 0 0 2 1 1 0 0 0 0-2m10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
    clipRule: "evenodd"
  })));
};
var Memo$p = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgCar);var _path$o;
function _extends$o() { return _extends$o = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$o.apply(null, arguments); }
var SvgCard = function SvgCard(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$o({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$o || (_path$o = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M22 6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2zm-2 2H4V6h16zM4 11h16v7H4z"
  })));
};
var Memo$o = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgCard);var _path$n;
function _extends$n() { return _extends$n = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$n.apply(null, arguments); }
var SvgClipboard = function SvgClipboard(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$n({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$n || (_path$n = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1M5 5v16h14V5h-2v3H7V5z",
    clipRule: "evenodd"
  })));
};
var Memo$n = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgClipboard);var _path$m, _path2$6, _path3$4, _path4, _path5, _path6, _path7, _path8;
function _extends$m() { return _extends$m = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$m.apply(null, arguments); }
var SvgCorona = function SvgCorona(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$m({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$m || (_path$m = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M11.733 16.286c2.43 0 4.4-1.92 4.4-4.286 0-2.367-1.97-4.286-4.4-4.286s-4.4 1.92-4.4 4.286c0 2.367 1.97 4.286 4.4 4.286m0 1.904c3.51 0 6.356-2.771 6.356-6.19s-2.846-6.19-6.356-6.19S5.378 8.58 5.378 12s2.845 6.19 6.355 6.19",
    clipRule: "evenodd"
  })), _path2$6 || (_path2$6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M12.222 2c.54 0 .978.426.978.952V5.81a.965.965 0 0 1-.978.952.965.965 0 0 1-.978-.952V2.952c0-.526.438-.952.978-.952",
    clipRule: "evenodd"
  })), _path3$4 || (_path3$4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M9.289 2.952c0-.526.438-.952.978-.952h3.91c.54 0 .979.426.979.952a.965.965 0 0 1-.978.953h-3.911a.965.965 0 0 1-.978-.953M12.222 22a.965.965 0 0 1-.978-.952V18.19c0-.526.438-.953.978-.953s.978.427.978.953v2.857a.965.965 0 0 1-.978.952",
    clipRule: "evenodd"
  })), _path4 || (_path4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M15.156 21.048a.965.965 0 0 1-.978.952h-3.911a.965.965 0 0 1-.978-.952c0-.526.438-.953.978-.953h3.91c.54 0 .979.427.979.953M20.891 7.46a.94.94 0 0 1-.358 1.3l-2.54 1.429a.99.99 0 0 1-1.336-.349.94.94 0 0 1 .358-1.3l2.54-1.43a.99.99 0 0 1 1.336.35",
    clipRule: "evenodd"
  })), _path5 || (_path5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M18.578 5.46a.99.99 0 0 1 1.335.35l1.956 3.299a.94.94 0 0 1-.358 1.3.99.99 0 0 1-1.336-.348l-1.955-3.3a.94.94 0 0 1 .358-1.3M3.109 17.46a.94.94 0 0 1 .358-1.302l2.54-1.429a.99.99 0 0 1 1.336.35.94.94 0 0 1-.358 1.3l-2.54 1.429a.99.99 0 0 1-1.336-.349",
    clipRule: "evenodd"
  })), _path6 || (_path6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M5.422 19.457a.99.99 0 0 1-1.335-.348l-1.956-3.3a.94.94 0 0 1 .358-1.3.99.99 0 0 1 1.336.348l1.955 3.3a.94.94 0 0 1-.358 1.3M20.891 17.46a.99.99 0 0 1-1.336.348l-2.54-1.429a.94.94 0 0 1-.358-1.3.99.99 0 0 1 1.336-.35l2.54 1.43a.94.94 0 0 1 .358 1.3",
    clipRule: "evenodd"
  })), _path7 || (_path7 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M21.511 14.509a.94.94 0 0 1 .358 1.3l-1.956 3.3a.99.99 0 0 1-1.335.348.94.94 0 0 1-.358-1.3l1.955-3.3a.99.99 0 0 1 1.336-.348M3.109 7.46a.99.99 0 0 1 1.336-.35l2.54 1.43a.94.94 0 0 1 .358 1.3.99.99 0 0 1-1.336.349L3.467 8.76a.94.94 0 0 1-.358-1.3",
    clipRule: "evenodd"
  })), _path8 || (_path8 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M2.489 10.41a.94.94 0 0 1-.358-1.301l1.956-3.3a.99.99 0 0 1 1.335-.348.94.94 0 0 1 .358 1.3l-1.955 3.3a.99.99 0 0 1-1.336.349",
    clipRule: "evenodd"
  })));
};
var Memo$m = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgCorona);var _path$l;
function _extends$l() { return _extends$l = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$l.apply(null, arguments); }
var SvgDocument = function SvgDocument(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$l({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$l || (_path$l = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M4 4a2 2 0 0 1 2-2h8a1 1 0 0 1 .707.293l5 5A1 1 0 0 1 20 8v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm13.586 4L14 4.414V8zM12 4H6v16h12V10h-5a1 1 0 0 1-1-1zm-4 9a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1"
  })));
};
var Memo$l = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgDocument);var _path$k, _path2$5, _path3$3;
function _extends$k() { return _extends$k = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$k.apply(null, arguments); }
var SvgEuro = function SvgEuro(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$k({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, props), _path$k || (_path$k = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10 1.75a8.252 8.252 0 0 0-5.834 2.416 8.25 8.25 0 0 0-1.787 8.99 8.3 8.3 0 0 0 1.787 2.678 8.25 8.25 0 0 0 8.99 1.787 8.3 8.3 0 0 0 2.678-1.787 8.3 8.3 0 0 0 1.787-2.678A8.247 8.247 0 0 0 10 1.75m0 1.5a6.75 6.75 0 0 1 6.236 4.166 6.754 6.754 0 0 1-3.652 8.82 6.754 6.754 0 0 1-8.82-3.652 6.754 6.754 0 0 1 3.652-8.82A6.8 6.8 0 0 1 10 3.25"
  })), _path2$5 || (_path2$5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M10.002 5.084c-2.348 0-4.084 2.291-4.084 4.916s1.736 4.916 4.084 4.916c.957 0 1.836-.4 2.512-1.035a.75.75 0 0 0 .035-1.06.75.75 0 0 0-1.06-.034c-.44.412-.944.629-1.487.629-1.335 0-2.584-1.44-2.584-3.416 0-1.977 1.249-3.416 2.584-3.416.544 0 1.047.217 1.486.629a.75.75 0 0 0 1.06-.033.75.75 0 0 0-.032-1.06c-.676-.635-1.557-1.036-2.514-1.036"
  })), _path3$3 || (_path3$3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M5.832 8a.75.75 0 0 0-.75.75.75.75 0 0 0 .75.75h3.334a.75.75 0 0 0 .75-.75.75.75 0 0 0-.75-.75zM5.832 10.5a.75.75 0 0 0-.75.75.75.75 0 0 0 .75.75h3.334a.75.75 0 0 0 .75-.75.75.75 0 0 0-.75-.75z"
  })));
};
var Memo$k = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgEuro);var _path$j, _path2$4, _path3$2;
function _extends$j() { return _extends$j = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$j.apply(null, arguments); }
var SvgFilestorage = function SvgFilestorage(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$j({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, props), _path$j || (_path$j = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4.166 2.584a2.417 2.417 0 1 0 0 4.832h11.668a2.417 2.417 0 1 0 0-4.832Zm0 1.5h11.668a.9.9 0 0 1 .646.268h.002a.915.915 0 0 1 0 1.296h-.002a.9.9 0 0 1-.646.268H4.166a.915.915 0 1 1 0-1.832"
  })), _path2$4 || (_path2$4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M4.168 5.916a.75.75 0 0 0-.75.75V15a2.42 2.42 0 0 0 2.416 2.416h8.334A2.417 2.417 0 0 0 16.584 15V6.666a.75.75 0 0 0-.75-.75.75.75 0 0 0-.75.75V15a.916.916 0 0 1-.916.916H5.834A.915.915 0 0 1 4.918 15V6.666a.75.75 0 0 0-.75-.75"
  })), _path3$2 || (_path3$2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M8.332 9.25a.75.75 0 0 0-.75.75.75.75 0 0 0 .75.75h3.334a.75.75 0 0 0 .75-.75.75.75 0 0 0-.75-.75z"
  })));
};
var Memo$j = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgFilestorage);var _path$i, _path2$3;
function _extends$i() { return _extends$i = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$i.apply(null, arguments); }
var SvgFile = function SvgFile(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$i({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 25"
  }, props), _path$i || (_path$i = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 2.5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-11z"
  })), _path2$3 || (_path2$3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13 2.5v7h7"
  })));
};
var Memo$i = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgFile);var _path$h;
function _extends$h() { return _extends$h = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$h.apply(null, arguments); }
var SvgHouse = function SvgHouse(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$h({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$h || (_path$h = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M11.336 2.253a1 1 0 0 1 1.328 0l9 8a1 1 0 0 1-1.328 1.494L20 11.45V19a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7.55l-.336.297a1 1 0 0 1-1.328-1.494zM6 9.67V19h3v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5h3V9.671l-6-5.333zM13 19v-4h-2v4z"
  })));
};
var Memo$h = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgHouse);var _path$g, _path2$2, _path3$1;
function _extends$g() { return _extends$g = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$g.apply(null, arguments); }
var SvgHouseWithEuro = function SvgHouseWithEuro(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$g({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, props), _path$g || (_path$g = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "m9.469 1.969-7.5 7.5A.75.75 0 0 0 2.5 10.75h.916v5.084a2.42 2.42 0 0 0 2.418 2.416h5a.75.75 0 0 0 .75-.75.75.75 0 0 0-.75-.75h-5a.92.92 0 0 1-.648-.268v-.002a.91.91 0 0 1-.27-.646V10a.75.75 0 0 0-.678-.676L10 3.563l5.303 5.3a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06l-5.832-5.834a.75.75 0 0 0-1.062 0"
  })), _path2$2 || (_path2$2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M9.166 10.084A2.417 2.417 0 0 0 6.75 12.5v5a.75.75 0 0 0 .75.75.75.75 0 0 0 .75-.75v-5a.915.915 0 0 1 .916-.916h1.668c.18 0 .342.05.482.137a.75.75 0 0 0 1.034-.242.75.75 0 0 0-.243-1.034 2.4 2.4 0 0 0-1.273-.361zM15.418 11.75a2 2 0 0 0 0 4h.834a.5.5 0 1 1 0 1h-2.084a.75.75 0 0 0-.75.75.75.75 0 0 0 .75.75h2.084a2 2 0 0 0 0-4h-.834a.499.499 0 0 1-.354-.854.5.5 0 0 1 .354-.146h2.084a.75.75 0 0 0 .75-.75.75.75 0 0 0-.75-.75z"
  })), _path3$1 || (_path3$1 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M15.832 10.916a.75.75 0 0 0-.75.75v.834a.75.75 0 0 0 .75.75.75.75 0 0 0 .75-.75v-.834a.75.75 0 0 0-.75-.75m0 5.834a.75.75 0 0 0-.75.75v.834a.75.75 0 0 0 .75.75.75.75 0 0 0 .75-.75V17.5a.75.75 0 0 0-.75-.75"
  })));
};
var Memo$g = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgHouseWithEuro);var _path$f, _path2$1;
function _extends$f() { return _extends$f = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$f.apply(null, arguments); }
var SvgImage = function SvgImage(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$f({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 25"
  }, props), _path$f || (_path$f = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 3.5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-14a2 2 0 0 0-2-2"
  })), _path2$1 || (_path2$1 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M8.5 10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M21 15.5l-5-5-11 11"
  })));
};
var Memo$f = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgImage);var _path$e;
function _extends$e() { return _extends$e = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$e.apply(null, arguments); }
var SvgInbox = function SvgInbox(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$e({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$e || (_path$e = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm2 9v5h14v-5h-2.28l-.771 2.316A1 1 0 0 1 15 17H9a1 1 0 0 1-.949-.684L7.28 14zm14-2V5H5v7h2.28a2 2 0 0 1 1.897 1.367L9.72 15h4.558l.544-1.633A2 2 0 0 1 16.721 12z"
  })));
};
var Memo$e = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgInbox);var _path$d;
function _extends$d() { return _extends$d = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$d.apply(null, arguments); }
var SvgMap = function SvgMap(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$d({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "currentColor",
    viewBox: "0 0 20 20"
  }, props), _path$d || (_path$d = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    d: "M7.236 2.543a.83.83 0 0 1 .527 0l4.736 1.579 3.64-1.214a1.667 1.667 0 0 1 2.194 1.582v9.91c0 .717-.46 1.354-1.14 1.58l-4.43 1.477a.83.83 0 0 1-.527 0l-4.737-1.579-3.64 1.214a1.667 1.667 0 0 1-2.193-1.581V5.6c0-.718.46-1.355 1.14-1.582zm1.097 11.856 3.333 1.112V5.6L8.333 4.49zM6.666 4.49 3.333 5.602v9.91l3.333-1.112zm6.667 1.112v9.91l3.333-1.112V4.49z"
  })));
};
var Memo$d = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgMap);var _path$c;
function _extends$c() { return _extends$c = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$c.apply(null, arguments); }
var SvgMegaphone = function SvgMegaphone(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$c({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$c || (_path$c = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M17.502 2.135A1 1 0 0 1 18 3v4c1.185 0 2.25.516 2.981 1.333A4 4 0 0 1 22 11c0 1.024-.386 1.96-1.019 2.667A4 4 0 0 1 18 15v4a1 1 0 0 1-1.496.868L10 16.152V21a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5.734l6.77-3.868a1 1 0 0 1 .998.003M10 14a1 1 0 0 1 .496.132L16 17.277V4.723l-5.504 3.145A1 1 0 0 1 10 8H4v6zm-4 2v4h2v-4zm12-3c.592 0 1.123-.256 1.491-.667.317-.354.509-.82.509-1.333s-.192-.979-.509-1.333A2 2 0 0 0 18 9z"
  })));
};
var Memo$c = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgMegaphone);var _rect, _path$b;
function _extends$b() { return _extends$b = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$b.apply(null, arguments); }
var SvgParking = function SvgParking(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$b({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }, props), _rect || (_rect = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    width: 16,
    height: 16,
    x: 4,
    y: 4,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    rx: 2
  })), _path$b || (_path$b = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M9.5 8v8h1.877v-2.473h1.382c1.791 0 2.741-1.213 2.741-2.749C15.5 9.266 14.567 8 12.781 8zm1.871 1.489h.973c.767 0 1.25.457 1.25 1.289 0 .938-.562 1.29-1.466 1.29h-.757z"
  })));
};
var Memo$b = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgParking);var _path$a;
function _extends$a() { return _extends$a = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$a.apply(null, arguments); }
var SvgStaff = function SvgStaff(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$a({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$a || (_path$a = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M10 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8M4 8a6 6 0 1 1 12 0A6 6 0 0 1 4 8m12.828-4.243a1 1 0 0 1 1.415 0 6 6 0 0 1 0 8.486 1 1 0 1 1-1.415-1.415 4 4 0 0 0 0-5.656 1 1 0 0 1 0-1.415m.702 13a1 1 0 0 1 1.212-.727c1.328.332 2.169 1.18 2.652 2.148.468.935.606 1.98.606 2.822a1 1 0 1 1-2 0c0-.657-.112-1.363-.394-1.928-.267-.533-.677-.934-1.349-1.102a1 1 0 0 1-.727-1.212M6.5 18C5.24 18 4 19.213 4 21a1 1 0 1 1-2 0c0-2.632 1.893-5 4.5-5h7c2.607 0 4.5 2.368 4.5 5a1 1 0 1 1-2 0c0-1.787-1.24-3-2.5-3z"
  })));
};
var Memo$a = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgStaff);var _path$9, _path2, _path3;
function _extends$9() { return _extends$9 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$9.apply(null, arguments); }
var SvgUserLoggedIn = function SvgUserLoggedIn(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$9({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24"
  }, props), _path$9 || (_path$9 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "none",
    stroke: "#248641",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10.5 7 12 9l5.5-6.5"
  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M17 8a5 5 0 1 1-5-5"
  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M8 18a3 3 0 0 0-3 3 1 1 0 1 1-2 0 5 5 0 0 1 5-5h8a5 5 0 0 1 5 5 1 1 0 1 1-2 0 3 3 0 0 0-3-3z"
  })));
};
var Memo$9 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgUserLoggedIn);var _path$8;
function _extends$8() { return _extends$8 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$8.apply(null, arguments); }
var SvgUser = function SvgUser(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$8({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$8 || (_path$8 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8M6 8a6 6 0 1 1 12 0A6 6 0 0 1 6 8m2 10a3 3 0 0 0-3 3 1 1 0 1 1-2 0 5 5 0 0 1 5-5h8a5 5 0 0 1 5 5 1 1 0 1 1-2 0 3 3 0 0 0-3-3z"
  })));
};
var Memo$8 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgUser);var _path$7;
function _extends$7() { return _extends$7 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$7.apply(null, arguments); }
var SvgWallet = function SvgWallet(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$7({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$7 || (_path$7 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M8.161 13.666h2.167v1.111H7.772a3.6 3.6 0 0 0-.044.556c0 .189.016.378.044.556h2.556v1.11H8.16c.383.673.989 1.112 1.678 1.112.439 0 .861-.178 1.222-.517l.406-.378.76.811-.405.378c-.566.534-1.255.817-1.978.817-1.283 0-2.388-.911-2.905-2.222h-1.05v-1.111h.767a5 5 0 0 1-.04-.556c0-.189.017-.372.04-.556h-.767v-1.11h1.05c.517-1.312 1.628-2.223 2.905-2.223.728 0 1.412.283 1.984.816l.405.378-.76.812-.406-.378c-.361-.34-.784-.517-1.223-.517-.688 0-1.294.439-1.677 1.111zm13.833-.555v4.45c0 .611-.494 1.105-1.105 1.111h-.561v1.111A2.216 2.216 0 0 1 18.11 22h-15A1.11 1.11 0 0 1 2 20.889V9.772A1.11 1.11 0 0 1 3.111 8.66h6.583a3.334 3.334 0 0 1-3.172-4.055A3.32 3.32 0 0 1 9.05 2.077a3.342 3.342 0 0 1 4.061 3.255 3.337 3.337 0 0 1 3.333 3.323h1.667c1.228 0 2.222.994 2.222 2.222V12h.556A1.11 1.11 0 0 1 22 13.111zM11.44 8.66h3.333c0-.917-.75-1.656-1.666-1.656a1.67 1.67 0 0 0-1.667 1.655M9.778 6.998c.922 0 1.666-.744 1.666-1.667 0-.922-.744-1.666-1.666-1.666S8.11 4.41 8.11 5.332C8.111 6.255 8.856 7 9.778 7m8.883 11.673h-2.739a1.664 1.664 0 0 1-1.666-1.667v-3.339c0-.922.744-1.667 1.666-1.667h2.74v-1.116a.557.557 0 0 0-.556-.556H3.66v10.006h14.45c.306 0 .55-.244.55-.55zm1.667-5.006h-4.456v3.34h4.456zm-2.778 2.5a.832.832 0 1 0 0-1.666.832.832 0 1 0 0 1.666"
  })));
};
var Memo$7 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgWallet);var _path$6;
function _extends$6() { return _extends$6 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$6.apply(null, arguments); }
var SvgFacebook = function SvgFacebook(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$6({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$6 || (_path$6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M9.956 12.877V22h3.536v-9.111h2.947l.44-3.563h-3.387V7.057c0-1.03.276-1.738 1.693-1.738H17v-3.18C16.686 2.094 15.61 2 14.358 2c-2.612 0-4.402 1.655-4.402 4.697v2.626H7v3.554z"
  })));
};
var Memo$6 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgFacebook);var _path$5;
function _extends$5() { return _extends$5 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$5.apply(null, arguments); }
var SvgInstagram = function SvgInstagram(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$5({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$5 || (_path$5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M12 2c2.717 0 3.056.01 4.122.06s1.79.217 2.428.465c.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122-.218 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06s-3.056-.01-4.122-.06-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.772-1.153 4.9 4.9 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12s.01-3.056.06-4.122.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2m0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10m6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6"
  })));
};
var Memo$5 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgInstagram);var _path$4;
function _extends$4() { return _extends$4 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$4.apply(null, arguments); }
var SvgLinkedin = function SvgLinkedin(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$4({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$4 || (_path$4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M17.86 22h4.139L22 14.668c0-3.598-.776-6.363-4.97-6.363-2.017 0-3.368 1.109-3.924 2.158h-.053v-1.82H9.077V22h4.139v-6.61c0-1.742.33-3.428 2.487-3.428 2.126 0 2.157 1.993 2.157 3.542zM2 4.406a2.403 2.403 0 1 0 4.806 0 2.403 2.403 0 1 0-4.806 0M2.327 22h4.15V8.643h-4.15z"
  })));
};
var Memo$4 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgLinkedin);var _path$3;
function _extends$3() { return _extends$3 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$3.apply(null, arguments); }
var SvgTwitter = function SvgTwitter(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$3({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$3 || (_path$3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M21.96 5.936a8.3 8.3 0 0 1-2.353.646 4.13 4.13 0 0 0 1.802-2.27 8.5 8.5 0 0 1-2.605.987 4.1 4.1 0 0 0-6.986 3.735 11.61 11.61 0 0 1-8.451-4.272 4 4 0 0 0-.555 2.063 4.1 4.1 0 0 0 1.823 3.413 4.1 4.1 0 0 1-1.857-.513v.05a4.1 4.1 0 0 0 3.288 4.023 4.2 4.2 0 0 1-1.843.07 4.11 4.11 0 0 0 3.837 2.848 8.22 8.22 0 0 1-5.085 1.754q-.487 0-.975-.056a11.66 11.66 0 0 0 6.297 1.841c7.545 0 11.666-6.246 11.666-11.654 0-.175 0-.35-.013-.525.8-.574 1.5-1.3 2.05-2.124z"
  })));
};
var Memo$3 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgTwitter);var _path$2;
function _extends$2() { return _extends$2 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$2.apply(null, arguments); }
var SvgTwitterX = function SvgTwitterX(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$2({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$2 || (_path$2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M13.712 10.79 20.413 3h-1.588l-5.818 6.763L8.36 3H3l7.027 10.227L3 21.396h1.588l6.144-7.143 4.908 7.143H21zm-2.174 2.527-.713-1.018L5.16 4.195H7.6l4.571 6.54.712 1.019 5.943 8.5h-2.439z"
  })));
};
var Memo$2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgTwitterX);var _path$1;
function _extends$1() { return _extends$1 = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends$1.apply(null, arguments); }
var SvgWhatsapp = function SvgWhatsapp(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends$1({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path$1 || (_path$1 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M17.04 14.184c-.276-.138-1.62-.795-1.87-.886-.25-.093-.434-.137-.617.137-.18.27-.707.884-.865 1.066-.16.178-.32.192-.593.068-.275-.137-1.157-.426-2.202-1.36-.814-.73-1.36-1.623-1.522-1.898-.16-.275-.017-.427.12-.564.124-.124.275-.316.413-.48.133-.165.177-.275.272-.454.091-.193.045-.344-.023-.48-.069-.138-.616-1.485-.845-2.023-.22-.535-.447-.467-.616-.467-.158-.014-.34-.014-.524-.014-.183 0-.48.068-.73.33-.25.274-.958.934-.958 2.268s.98 2.626 1.117 2.819c.137.178 1.93 2.928 4.675 4.11.655.276 1.164.44 1.562.577.655.209 1.252.18 1.724.111.526-.083 1.62-.66 1.848-1.307.233-.646.233-1.182.165-1.306s-.248-.192-.523-.316zm-4.984 6.754h-.015a9.17 9.17 0 0 1-4.634-1.265l-.33-.197-3.437.894.921-3.341-.219-.344a9.05 9.05 0 0 1-1.39-4.822c0-4.99 4.084-9.06 9.114-9.06 2.433 0 4.716.948 6.436 2.667a8.97 8.97 0 0 1 2.667 6.407c-.004 4.99-4.089 9.061-9.108 9.061zM19.81 4.162C17.72 2.142 14.97 1 12.041 1 6.008 1 1.095 5.89 1.093 11.902c0 1.921.503 3.795 1.462 5.45L1 23l5.807-1.514c1.6.864 3.4 1.323 5.234 1.326h.006c6.036 0 10.95-4.891 10.953-10.905 0-2.91-1.137-5.65-3.204-7.71"
  })));
};
var Memo$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgWhatsapp);var _path;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var SvgYoutube = function SvgYoutube(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    fill: "none",
    viewBox: "0 0 24 24"
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fill: "currentColor",
    d: "M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022M10 15.5l6-3.5-6-3.5z"
  })));
};
var Memo = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.memo)(SvgYoutube);var buildIcon = function (svg, props) { return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SvgIcon, __assign({ component: svg }, props)); };
// Arrows
var ArrowLeftIcon = function (props) { return buildIcon(Memo$11, props); };
var ArrowRightIcon = function (props) { return buildIcon(Memo$10, props); };
var ChevronDownIcon = function (props) { return buildIcon(Memo$$, props); };
var ChevronRightIcon = function (props) { return buildIcon(Memo$_, props); };
var ChevronUpIcon = function (props) { return buildIcon(Memo$Z, props); };
var ChevronLeftIcon = function (props) { return buildIcon(Memo$Y, props); };
// Communication
var CallIcon = function (props) { return buildIcon(Memo$X, props); };
var EmailIcon = function (props) { return buildIcon(Memo$W, props); };
var MessageIcon = function (props) { return buildIcon(Memo$V, props); };
// Functional
var CloseIcon = function (props) { return buildIcon(Memo$U, props); };
var CheckedIcon = function (props) { return buildIcon(Memo$T, props); };
var DownloadIcon = function (props) { return buildIcon(Memo$S, props); };
var EditIcon = function (props) { return buildIcon(Memo$R, props); };
var ExternalLinkIcon = function (props) { return buildIcon(Memo$Q, props); };
var FavoriteIcon = function (props) { return buildIcon(Memo$P, props); };
var GridIcon = function (props) { return buildIcon(Memo$O, props); };
var HamburgerIcon = function (props) { return buildIcon(Memo$N, props); };
var HideIcon = function (props) { return buildIcon(Memo$M, props); };
var ListIcon = function (props) { return buildIcon(Memo$L, props); };
var LogOutIcon = function (props) { return buildIcon(Memo$K, props); };
var SearchIcon = function (props) { return buildIcon(Memo$J, props); };
var ShareIcon = function (props) { return buildIcon(Memo$I, props); };
var ShowIcon = function (props) { return buildIcon(Memo$H, props); };
var SpinnerIcon = function (props) { return buildIcon(Memo$G, props); };
var StarterIcon = function (props) { return buildIcon(Memo$F, props); };
var TrashIcon = function (props) { return buildIcon(Memo$E, props); };
var UncheckedBoxIcon = function (props) { return buildIcon(Memo$D, props); };
// Informational
var AlertTriangleFilledIcon = function (props) { return buildIcon(Memo$C, props); };
var AlertTriangleIcon = function (props) { return buildIcon(Memo$B, props); };
var CheckCircleIcon = function (props) { return buildIcon(Memo$A, props); };
var CircleHelpIcon = function (props) { return buildIcon(Memo$z, props); };
var CircleInformationIcon = function (props) { return buildIcon(Memo$y, props); };
var CircleWarningIcon = function (props) { return buildIcon(Memo$x, props); };
var SettingsIcon = function (props) { return buildIcon(Memo$w, props); };
// Objects
var ArchiveIcon = function (props) { return buildIcon(Memo$v, props); };
var BasketballIcon = function (props) { return buildIcon(Memo$u, props); };
var BedIcon = function (props) { return buildIcon(Memo$t, props); };
var BookIcon = function (props) { return buildIcon(Memo$s, props); };
var BuildingIcon = function (props) { return buildIcon(Memo$r, props); };
var CalendarIcon = function (props) { return buildIcon(Memo$q, props); };
var CarIcon = function (props) { return buildIcon(Memo$p, props); };
var CardIcon = function (props) { return buildIcon(Memo$o, props); };
var ClipboardIcon = function (props) { return buildIcon(Memo$n, props); };
var CoronaIcon = function (props) { return buildIcon(Memo$m, props); };
var DocumentIcon = function (props) { return buildIcon(Memo$l, props); };
var EuroIcon = function (props) { return buildIcon(Memo$k, props); };
var FilestorageIcon = function (props) { return buildIcon(Memo$j, props); };
var FileIcon = function (props) { return buildIcon(Memo$i, props); };
var HouseIcon = function (props) { return buildIcon(Memo$h, props); };
var HouseWithEuroIcon = function (props) { return buildIcon(Memo$g, props); };
var MapIcon = function (props) { return buildIcon(Memo$d, props); };
var ImageIcon = function (props) { return buildIcon(Memo$f, props); };
var InboxIcon = function (props) { return buildIcon(Memo$e, props); };
var ParkingIcon = function (props) { return buildIcon(Memo$b, props); };
var StaffIcon = function (props) { return buildIcon(Memo$a, props); };
var UserLoggedInIcon = function (props) { return buildIcon(Memo$9, props); };
var UserIcon = function (props) { return buildIcon(Memo$8, props); };
var WalletIcon = function (props) { return buildIcon(Memo$7, props); };
// Social
var FacebookIcon = function (props) { return buildIcon(Memo$6, props); };
var InstagramIcon = function (props) { return buildIcon(Memo$5, props); };
var LinkedInIcon = function (props) { return buildIcon(Memo$4, props); };
var TwitterIcon = function (props) { return buildIcon(Memo$3, props); };
var TwitterXIcon = function (props) { return buildIcon(Memo$2, props); };
var WhatsAppIcon = function (props) { return buildIcon(Memo$1, props); };
var YouTubeIcon = function (props) { return buildIcon(Memo, props); };
// Misc
var MegaphoneIcon = function (props) { return buildIcon(Memo$c, props); };//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/button-react/dist/index.mjs":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/button-react/dist/index.mjs ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   PrimaryActionButton: () => (/* binding */ PrimaryActionButton),
/* harmony export */   SecondaryActionButton: () => (/* binding */ SecondaryActionButton),
/* harmony export */   SubtleButton: () => (/* binding */ SubtleButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");



function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const Button = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ appearance, busy, disabled, children, className, hint, icon, label, pressed, type, ...restProps }, ref) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", { ref: ref, className: clsx('utrecht-button', busy && 'utrecht-button--busy', disabled && 'utrecht-button--disabled', type === 'submit' && 'utrecht-button--submit', appearance === 'primary-action-button' && 'utrecht-button--primary-action', appearance === 'secondary-action-button' && 'utrecht-button--secondary-action', appearance === 'subtle-button' && 'utrecht-button--subtle', hint === 'danger' && 'utrecht-button--danger', hint === 'warning' && 'utrecht-button--warning', hint === 'ready' && 'utrecht-button--ready', pressed === true && 'utrecht-button--pressed', className), "aria-busy": busy || undefined, "aria-pressed": typeof pressed === 'boolean' ? pressed : undefined, disabled: disabled, type: type || 'button', ...restProps, children: [icon, label && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { className: "utrecht-button__label", children: label }), children] }));
});
Button.displayName = 'Button';
const PrimaryActionButton = ({ ...args }) => {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button, { ...args, appearance: "primary-action-button" });
};
PrimaryActionButton.displayName = 'PrimaryActionButton';
const SecondaryActionButton = ({ ...args }) => {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button, { ...args, appearance: "secondary-action-button" });
};
SecondaryActionButton.displayName = 'SecondaryActionButton';
const SubtleButton = ({ ...args }) => {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Button, { ...args, appearance: "subtle-button" });
};
SubtleButton.displayName = 'SubtleButton';


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/checkbox-react/dist/index.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/checkbox-react/dist/index.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Checkbox: () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");



function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const Checkbox = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ appearance = 'custom', disabled, indeterminate = false, inputRequired, invalid, required, className, ...restProps }, ref) => {
    // What's the correct way to use useRef and forwardRef together?
    // https://stackoverflow.com/a/68163315
    // `indeterminate` is has no TypeScript definition in React.
    // `indeterminate` renders an attribute, not a property in React.
    let internalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, () => internalRef.current);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (internalRef.current) {
            internalRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { ...restProps, ref: internalRef, type: "checkbox", className: clsx('utrecht-checkbox', 'utrecht-checkbox--html-input', {
            'utrecht-checkbox--disabled': disabled,
            'utrecht-checkbox--custom': appearance === 'custom',
            'utrecht-checkbox--invalid': invalid,
            'utrecht-checkbox--indeterminate': indeterminate,
            'utrecht-checkbox--required': required || inputRequired,
        }, className), "aria-checked": indeterminate ? 'mixed' : undefined, "aria-invalid": invalid || undefined, "aria-required": required ? required : undefined, disabled: disabled, required: inputRequired }));
});
Checkbox.displayName = 'Checkbox';


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/combobox-react/dist/index.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/combobox-react/dist/index.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Combobox: () => (/* binding */ Combobox),
/* harmony export */   ComboboxPopover: () => (/* binding */ ComboboxPopover)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");



function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const Combobox = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ className, ...restProps }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: clsx('utrecht-combobox', className), ...restProps, ref: ref })));
Combobox.displayName = 'Combobox';
const ComboboxPopover = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ className, position, ...restProps }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: clsx('utrecht-combobox__popover', {
        'utrecht-search-bar__popover--block-end': !position || position === 'block-end',
    }, className), ...restProps, ref: ref })));
ComboboxPopover.displayName = 'ComboboxPopover';


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/component-library-react/dist/index.mjs":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/component-library-react/dist/index.mjs ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Accordion: () => (/* binding */ Accordion),
/* harmony export */   AccordionProvider: () => (/* binding */ AccordionProvider),
/* harmony export */   AccordionSection: () => (/* binding */ AccordionSection),
/* harmony export */   ActionGroup: () => (/* reexport safe */ _utrecht_action_group_react__WEBPACK_IMPORTED_MODULE_7__.ActionGroup),
/* harmony export */   Alert: () => (/* binding */ Alert),
/* harmony export */   AlertDialog: () => (/* binding */ AlertDialog),
/* harmony export */   Article: () => (/* binding */ Article),
/* harmony export */   Backdrop: () => (/* binding */ Backdrop),
/* harmony export */   BadgeCounter: () => (/* binding */ BadgeCounter),
/* harmony export */   BadgeList: () => (/* binding */ BadgeList),
/* harmony export */   Blockquote: () => (/* binding */ Blockquote),
/* harmony export */   BreadcrumbNav: () => (/* binding */ BreadcrumbNav),
/* harmony export */   BreadcrumbNavLink: () => (/* binding */ BreadcrumbNavLink),
/* harmony export */   BreadcrumbNavSeparator: () => (/* binding */ BreadcrumbNavSeparator),
/* harmony export */   Button: () => (/* reexport safe */ _utrecht_button_react__WEBPACK_IMPORTED_MODULE_5__.Button),
/* harmony export */   ButtonGroup: () => (/* reexport safe */ _utrecht_button_group_react__WEBPACK_IMPORTED_MODULE_9__.ButtonGroup),
/* harmony export */   ButtonLink: () => (/* binding */ ButtonLink),
/* harmony export */   Checkbox: () => (/* reexport safe */ _utrecht_checkbox_react__WEBPACK_IMPORTED_MODULE_10__.Checkbox),
/* harmony export */   Code: () => (/* binding */ Code),
/* harmony export */   CodeBlock: () => (/* binding */ CodeBlock),
/* harmony export */   ColorSample: () => (/* binding */ ColorSample),
/* harmony export */   ColumnLayout: () => (/* binding */ ColumnLayout),
/* harmony export */   Combobox: () => (/* reexport safe */ _utrecht_combobox_react__WEBPACK_IMPORTED_MODULE_11__.Combobox),
/* harmony export */   ComboboxPopover: () => (/* reexport safe */ _utrecht_combobox_react__WEBPACK_IMPORTED_MODULE_11__.ComboboxPopover),
/* harmony export */   CurrencyData: () => (/* binding */ CurrencyData),
/* harmony export */   DataBadge: () => (/* reexport safe */ _utrecht_data_badge_react__WEBPACK_IMPORTED_MODULE_12__.DataBadge),
/* harmony export */   DataList: () => (/* binding */ DataList),
/* harmony export */   DataListActions: () => (/* binding */ DataListActions),
/* harmony export */   DataListItem: () => (/* binding */ DataListItem),
/* harmony export */   DataListKey: () => (/* binding */ DataListKey),
/* harmony export */   DataListValue: () => (/* binding */ DataListValue),
/* harmony export */   DataPlaceholder: () => (/* binding */ DataPlaceholder),
/* harmony export */   Document: () => (/* binding */ Document),
/* harmony export */   Drawer: () => (/* binding */ Drawer),
/* harmony export */   Emphasis: () => (/* binding */ Emphasis),
/* harmony export */   Fieldset: () => (/* reexport safe */ _utrecht_fieldset_react__WEBPACK_IMPORTED_MODULE_13__.Fieldset),
/* harmony export */   FieldsetLegend: () => (/* reexport safe */ _utrecht_fieldset_react__WEBPACK_IMPORTED_MODULE_13__.FieldsetLegend),
/* harmony export */   Figure: () => (/* binding */ Figure),
/* harmony export */   FigureCaption: () => (/* binding */ FigureCaption),
/* harmony export */   FormField: () => (/* reexport safe */ _utrecht_form_field_react__WEBPACK_IMPORTED_MODULE_14__.FormField),
/* harmony export */   FormFieldCheckbox: () => (/* reexport safe */ _utrecht_form_field_checkbox_react__WEBPACK_IMPORTED_MODULE_15__.FormFieldCheckbox),
/* harmony export */   FormFieldDescription: () => (/* reexport safe */ _utrecht_form_field_description_react__WEBPACK_IMPORTED_MODULE_16__.FormFieldDescription),
/* harmony export */   FormFieldErrorMessage: () => (/* reexport safe */ _utrecht_form_field_error_message_react__WEBPACK_IMPORTED_MODULE_17__.FormFieldErrorMessage),
/* harmony export */   FormFieldTextarea: () => (/* binding */ FormFieldTextarea),
/* harmony export */   FormFieldTextbox: () => (/* binding */ FormFieldTextbox),
/* harmony export */   FormLabel: () => (/* reexport safe */ _utrecht_form_label_react__WEBPACK_IMPORTED_MODULE_18__.FormLabel),
/* harmony export */   FormToggle: () => (/* binding */ FormToggle),
/* harmony export */   HTMLContent: () => (/* binding */ HTMLContent),
/* harmony export */   Heading: () => (/* binding */ Heading),
/* harmony export */   Heading1: () => (/* binding */ Heading1),
/* harmony export */   Heading2: () => (/* binding */ Heading2),
/* harmony export */   Heading3: () => (/* binding */ Heading3),
/* harmony export */   Heading4: () => (/* binding */ Heading4),
/* harmony export */   Heading5: () => (/* binding */ Heading5),
/* harmony export */   Heading6: () => (/* binding */ Heading6),
/* harmony export */   HeadingGroup: () => (/* binding */ HeadingGroup),
/* harmony export */   IBANData: () => (/* binding */ IBANData),
/* harmony export */   Icon: () => (/* binding */ Icon),
/* harmony export */   Image: () => (/* binding */ Image),
/* harmony export */   IndexCharNav: () => (/* binding */ IndexCharNav),
/* harmony export */   Link: () => (/* reexport safe */ _utrecht_link_react__WEBPACK_IMPORTED_MODULE_8__.Link),
/* harmony export */   LinkButton: () => (/* binding */ LinkButton),
/* harmony export */   LinkList: () => (/* binding */ LinkList),
/* harmony export */   LinkListLink: () => (/* binding */ LinkListLink),
/* harmony export */   LinkSocial: () => (/* binding */ LinkSocial),
/* harmony export */   ListSocial: () => (/* binding */ ListSocial),
/* harmony export */   ListSocialItem: () => (/* binding */ ListSocialItem),
/* harmony export */   Listbox: () => (/* reexport safe */ _utrecht_listbox_react__WEBPACK_IMPORTED_MODULE_20__.Listbox),
/* harmony export */   ListboxOption: () => (/* reexport safe */ _utrecht_listbox_react__WEBPACK_IMPORTED_MODULE_20__.ListboxOption),
/* harmony export */   ListboxOptionGroup: () => (/* reexport safe */ _utrecht_listbox_react__WEBPACK_IMPORTED_MODULE_20__.ListboxOptionGroup),
/* harmony export */   Logo: () => (/* binding */ Logo),
/* harmony export */   LogoImage: () => (/* binding */ LogoImage),
/* harmony export */   Mark: () => (/* binding */ Mark),
/* harmony export */   MultilineData: () => (/* binding */ MultilineData),
/* harmony export */   NavBar: () => (/* binding */ NavBar),
/* harmony export */   NavList: () => (/* binding */ NavList),
/* harmony export */   NavListLink: () => (/* binding */ NavListLink),
/* harmony export */   NavListLinkButton: () => (/* binding */ NavListLinkButton),
/* harmony export */   NumberBadge: () => (/* binding */ NumberBadge),
/* harmony export */   NumberData: () => (/* binding */ NumberData),
/* harmony export */   OpenFormsContainer: () => (/* reexport safe */ _utrecht_open_forms_container_react__WEBPACK_IMPORTED_MODULE_23__.OpenFormsContainer),
/* harmony export */   OrderedList: () => (/* binding */ OrderedList),
/* harmony export */   OrderedListItem: () => (/* binding */ OrderedListItem),
/* harmony export */   Page: () => (/* binding */ Page),
/* harmony export */   PageContent: () => (/* binding */ PageContent),
/* harmony export */   PageFooter: () => (/* binding */ PageFooter),
/* harmony export */   PageHeader: () => (/* binding */ PageHeader),
/* harmony export */   Paragraph: () => (/* binding */ Paragraph),
/* harmony export */   PreHeading: () => (/* binding */ PreHeading),
/* harmony export */   PreserveData: () => (/* binding */ PreserveData),
/* harmony export */   PrimaryActionButton: () => (/* reexport safe */ _utrecht_button_react__WEBPACK_IMPORTED_MODULE_5__.PrimaryActionButton),
/* harmony export */   RadioButton: () => (/* reexport safe */ _utrecht_radio_button_react__WEBPACK_IMPORTED_MODULE_24__.RadioButton),
/* harmony export */   RichText: () => (/* binding */ RichText),
/* harmony export */   ScrollLink: () => (/* binding */ ScrollLink),
/* harmony export */   SecondaryActionButton: () => (/* reexport safe */ _utrecht_button_react__WEBPACK_IMPORTED_MODULE_5__.SecondaryActionButton),
/* harmony export */   Select: () => (/* binding */ Select),
/* harmony export */   SelectOption: () => (/* binding */ SelectOption),
/* harmony export */   Separator: () => (/* binding */ Separator),
/* harmony export */   SkipLink: () => (/* binding */ SkipLink),
/* harmony export */   SpotlightSection: () => (/* binding */ SpotlightSection),
/* harmony export */   StatusBadge: () => (/* binding */ StatusBadge),
/* harmony export */   Strong: () => (/* binding */ Strong),
/* harmony export */   Subscript: () => (/* binding */ Subscript),
/* harmony export */   SubtleButton: () => (/* reexport safe */ _utrecht_button_react__WEBPACK_IMPORTED_MODULE_5__.SubtleButton),
/* harmony export */   Superscript: () => (/* binding */ Superscript),
/* harmony export */   Surface: () => (/* binding */ Surface),
/* harmony export */   Table: () => (/* binding */ Table),
/* harmony export */   TableBody: () => (/* binding */ TableBody),
/* harmony export */   TableCaption: () => (/* binding */ TableCaption),
/* harmony export */   TableCell: () => (/* binding */ TableCell),
/* harmony export */   TableContainer: () => (/* binding */ TableContainer),
/* harmony export */   TableFooter: () => (/* binding */ TableFooter),
/* harmony export */   TableHeader: () => (/* binding */ TableHeader),
/* harmony export */   TableHeaderCell: () => (/* binding */ TableHeaderCell),
/* harmony export */   TableOfContents: () => (/* binding */ TableOfContents),
/* harmony export */   TableOfContentsLink: () => (/* binding */ TableOfContentsLink),
/* harmony export */   TableOfContentsList: () => (/* binding */ TableOfContentsList),
/* harmony export */   TableOfContentsListItem: () => (/* binding */ TableOfContentsListItem),
/* harmony export */   TableRow: () => (/* binding */ TableRow),
/* harmony export */   Textarea: () => (/* binding */ Textarea),
/* harmony export */   Textbox: () => (/* reexport safe */ _utrecht_textbox_react__WEBPACK_IMPORTED_MODULE_19__.Textbox),
/* harmony export */   URLData: () => (/* binding */ URLData),
/* harmony export */   UnorderedList: () => (/* binding */ UnorderedList),
/* harmony export */   UnorderedListItem: () => (/* binding */ UnorderedListItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var _utrecht_button_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @utrecht/button-react */ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/button-react/dist/index.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _utrecht_action_group_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @utrecht/action-group-react */ "./node_modules/@utrecht/action-group-react/dist/index.mjs");
/* harmony import */ var _utrecht_link_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @utrecht/link-react */ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/link-react/dist/index.mjs");
/* harmony import */ var _utrecht_button_group_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @utrecht/button-group-react */ "./node_modules/@utrecht/button-group-react/dist/index.mjs");
/* harmony import */ var _utrecht_checkbox_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @utrecht/checkbox-react */ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/checkbox-react/dist/index.mjs");
/* harmony import */ var _utrecht_combobox_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @utrecht/combobox-react */ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/combobox-react/dist/index.mjs");
/* harmony import */ var _utrecht_data_badge_react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @utrecht/data-badge-react */ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/data-badge-react/dist/index.mjs");
/* harmony import */ var _utrecht_fieldset_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @utrecht/fieldset-react */ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/fieldset-react/dist/index.mjs");
/* harmony import */ var _utrecht_form_field_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @utrecht/form-field-react */ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/form-field-react/dist/index.mjs");
/* harmony import */ var _utrecht_form_field_checkbox_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @utrecht/form-field-checkbox-react */ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/form-field-checkbox-react/dist/index.mjs");
/* harmony import */ var _utrecht_form_field_description_react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @utrecht/form-field-description-react */ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/form-field-description-react/dist/index.mjs");
/* harmony import */ var _utrecht_form_field_error_message_react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @utrecht/form-field-error-message-react */ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/form-field-error-message-react/dist/index.mjs");
/* harmony import */ var _utrecht_form_label_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @utrecht/form-label-react */ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/form-label-react/dist/index.mjs");
/* harmony import */ var _utrecht_textbox_react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @utrecht/textbox-react */ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/textbox-react/dist/index.mjs");
/* harmony import */ var _utrecht_listbox_react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @utrecht/listbox-react */ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/listbox-react/dist/index.mjs");
/* harmony import */ var _babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @babel/runtime/helpers/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _utrecht_open_forms_container_react__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @utrecht/open-forms-container-react */ "./node_modules/@utrecht/open-forms-container-react/dist/index.mjs");
/* harmony import */ var _utrecht_radio_button_react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @utrecht/radio-button-react */ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/radio-button-react/dist/index.mjs");

































var _excluded$1h = ["level", "className"];
function ownKeys$1i(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1i(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1i(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1i(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var HTMLHeading = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var level = _ref.level,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$1h);
  var HeadingX = level === 1 ? 'h1' : level === 2 ? 'h2' : level === 3 ? 'h3' : level === 4 ? 'h4' : level === 5 ? 'h5' : level === 6 ? 'h6' : 'p';
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(HeadingX, _objectSpread$1i(_objectSpread$1i({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(className)
  }, restProps), {}, {
    ref: ref
  }));
});
HTMLHeading.displayName = 'HTMLHeading';

var _excluded$1g = ["appearance", "className", "level"];
function ownKeys$1h(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1h(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1h(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1h(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Heading = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var appearance = _ref.appearance,
    className = _ref.className,
    level = _ref.level,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$1g);
  var appearances = ['utrecht-heading-1', 'utrecht-heading-2', 'utrecht-heading-3', 'utrecht-heading-4', 'utrecht-heading-5', 'utrecht-heading-6'];
  var HeadingX = level === 2 ? 'h2' : level === 3 ? 'h3' : level === 4 ? 'h4' : level === 5 ? 'h5' : level === 6 ? 'h6' : 'h1';
  var headingClassName = appearance && appearances.indexOf(appearance) !== -1 ? appearance : appearances[level - 1] || 'utrecht-heading-1';
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(HeadingX, _objectSpread$1h(_objectSpread$1h({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(headingClassName, className)
  }, restProps), {}, {
    ref: ref
  }));
});
Heading.displayName = 'Heading';

var _excluded$1f = ["id", "label", "className", "headingLevel", "expanded", "disabled", "section", "children", "buttonRef", "onActivate", "onButtonBlur", "onButtonFocus", "icon"],
  _excluded2$7 = ["children", "group", "headingLevel", "heading"];
function ownKeys$1g(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1g(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1g(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1g(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var IconChevronDown = function IconChevronDown() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", {
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "8",
    viewBox: "0 0 14 8",
    fill: "currentColor",
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("defs", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("clipPath", {
        id: "clippath",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("rect", {
          width: "14",
          height: "8",
          style: {
            fill: 'none',
            strokeWidth: '0px'
          }
        })
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("g", {
      style: {
        clipPath: 'url(#clippath)'
      },
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "m7,8c-.26,0-.51-.1-.71-.29L.29,1.71C-.1,1.32-.1.68.29.29S1.32-.1,1.71.29l5.29,5.29L12.29.29c.39-.39,1.02-.39,1.41,0s.39,1.02,0,1.41l-6,6c-.2.2-.45.29-.71.29Z",
        style: {
          strokeWidth: '0px'
        }
      })
    })]
  });
};
/**
 * Find the first item in an array
 */
var firstItem = function firstItem(items) {
  return items.length >= 1 ? items[0] : undefined;
};
/**
 * Find the last item in an array
 */
var lastItem = function lastItem(items) {
  return items.length >= 1 ? items[items.length - 1] : undefined;
};
/**
 * Find the next item in an array, compared to an item in the array
 */
var nextItem = function nextItem(items, item) {
  var currentIndex = item ? items.indexOf(item) : -1;
  return currentIndex >= 0 && currentIndex + 1 <= items.length - 1 ? items[currentIndex + 1] : undefined;
};
/**
 * Find the previous item in an array, compared to an item in the array
 */
var previousItem = function previousItem(items, item) {
  var currentIndex = item ? items.indexOf(item) : -1;
  return currentIndex >= 0 && currentIndex - 1 <= items.length - 1 ? items[currentIndex - 1] : undefined;
};
var AccordionSection = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var id = _ref.id,
    label = _ref.label,
    className = _ref.className,
    _ref$headingLevel = _ref.headingLevel,
    headingLevel = _ref$headingLevel === void 0 ? 1 : _ref$headingLevel,
    _ref$expanded = _ref.expanded,
    expanded = _ref$expanded === void 0 ? false : _ref$expanded,
    disabled = _ref.disabled,
    section = _ref.section,
    children = _ref.children,
    buttonRef = _ref.buttonRef,
    onActivate = _ref.onActivate,
    onButtonBlur = _ref.onButtonBlur,
    onButtonFocus = _ref.onButtonFocus,
    icon = _ref.icon,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$1f);
  var panelAttributes = {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-accordion__panel', {
      'utrecht-accordion__panel--expanded': expanded
    }),
    // Use the `hidden` attribute so the toggle works even without CSS
    hidden: !expanded,
    // Use the `aria-hidden` attribute too, so it even works when CSS
    // doesn't use `display: none` to make transitions.
    'aria-hidden': !expanded
  };
  var iconStart = icon ? icon : icon === null ? null : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(IconChevronDown, {});
  var idPrefix = 'utrecht-accordion';
  var idSuffix = id || (0,react__WEBPACK_IMPORTED_MODULE_3__.useId)();
  var buttonId = "".concat(idPrefix).concat(idSuffix, "-button");
  var panelId = "".concat(idPrefix).concat(idSuffix, "-panel");
  // We render `__section` as `div` for a specific reasons:
  // - when a user navigates to the `region` landmark we want the first
  //   content of the landmark to be the actual content, instead of starting
  //   with the button that controls the region.
  // - we only want expanded sections to show up as landmarks
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", _objectSpread$1g(_objectSpread$1g({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-accordion__section', className),
    id: id,
    ref: ref
  }, props), {}, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(HTMLHeading, {
      level: headingLevel,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-accordion__header'),
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_utrecht_button_react__WEBPACK_IMPORTED_MODULE_5__.Button, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-accordion__button'),
        appearance: "subtle-button",
        "aria-expanded": expanded === true,
        "aria-controls": panelId,
        disabled: disabled,
        id: buttonId,
        onClick: function onClick() {
          return typeof onActivate === 'function' && onActivate(ref);
        },
        onFocus: function onFocus() {
          return typeof onButtonFocus === 'function' && onButtonFocus(ref);
        },
        onBlur: function onBlur() {
          return typeof onButtonBlur === 'function' && onButtonBlur(ref);
        },
        ref: buttonRef,
        children: [iconStart && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "utrecht-accordion__button-icon",
          children: iconStart
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "utrecht-accordion__button-label",
          children: label
        })]
      })
    }), section ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", _objectSpread$1g(_objectSpread$1g({
      id: panelId,
      "aria-labelledby": buttonId
    }, panelAttributes), {}, {
      children: children
    })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", _objectSpread$1g(_objectSpread$1g({
      id: panelId
    }, panelAttributes), {}, {
      children: children
    }))]
  }));
});
AccordionSection.displayName = 'AccordionSection';
var Accordion = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref2, ref) {
  var children = _ref2.children,
    group = _ref2.group,
    headingLevel = _ref2.headingLevel,
    heading = _ref2.heading,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, _excluded2$7);
  var headingId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useId)();
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [!!heading && typeof headingLevel === 'number' && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Heading, {
      level: headingLevel,
      children: heading
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", _objectSpread$1g(_objectSpread$1g({
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-accordion'),
      role: group ? 'group' : undefined,
      "aria-labelledby": group ? headingId : undefined
    }, props), {}, {
      ref: ref,
      children: children
    }))]
  });
});
Accordion.displayName = 'Accordion';
var useAccordion = function useAccordion(sections, ref) {
  // const sections: AccordionSectionProviderProps[] = [];
  var refs = sections.map(function (_) {
    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  });
  var buttonRefs = sections.map(function (_) {
    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  });
  return {
    ref: ref,
    refs: refs,
    buttonRefs: buttonRefs,
    /* ForwardedRef of the last section to receive focus */
    activeElement: null,
    /* ForwardedRef for each section, in document order */
    sections: sections,
    focusNextSection: function focusNextSection(activeElement) {
      var _nextSection$current;
      var index = refs.indexOf(activeElement);
      var buttonRef = index >= 0 ? buttonRefs[index] : undefined;
      var nextSection = buttonRef ? nextItem(buttonRefs, buttonRef) : undefined;
      nextSection === null || nextSection === void 0 || (_nextSection$current = nextSection.current) === null || _nextSection$current === void 0 || _nextSection$current.focus();
    },
    focusFirstSection: function focusFirstSection() {
      var _firstSection$current;
      var firstSection = firstItem(buttonRefs);
      firstSection === null || firstSection === void 0 || (_firstSection$current = firstSection.current) === null || _firstSection$current === void 0 || _firstSection$current.focus();
    },
    focusPreviousSection: function focusPreviousSection(activeElement) {
      var _previousSection$curr;
      var index = refs.indexOf(activeElement);
      var buttonRef = index >= 0 ? buttonRefs[index] : undefined;
      var previousSection = buttonRef ? previousItem(buttonRefs, buttonRef) : undefined;
      previousSection === null || previousSection === void 0 || (_previousSection$curr = previousSection.current) === null || _previousSection$curr === void 0 || _previousSection$curr.focus();
    },
    focusLastSection: function focusLastSection() {
      var _firstSection$current2;
      var firstSection = lastItem(buttonRefs);
      firstSection === null || firstSection === void 0 || (_firstSection$current2 = firstSection.current) === null || _firstSection$current2 === void 0 || _firstSection$current2.focus();
    }
  };
};
var AccordionProvider = function AccordionProvider(_ref4) {
  var sections = _ref4.sections,
    icon = _ref4.icon,
    heading = _ref4.heading,
    headingLevel = _ref4.headingLevel;
  var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  var _useAccordion = useAccordion(sections, ref),
    refs = _useAccordion.refs,
    buttonRefs = _useAccordion.buttonRefs,
    focusNextSection = _useAccordion.focusNextSection,
    focusFirstSection = _useAccordion.focusFirstSection,
    focusLastSection = _useAccordion.focusLastSection,
    focusPreviousSection = _useAccordion.focusPreviousSection;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
    _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
    activeElement = _useState2[0],
    setActiveElement = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(sections),
    _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
    sectionsState = _useState4[0],
    setSectionsState = _useState4[1];
  var handleButtonFocus = function handleButtonFocus(ref) {
    setActiveElement(ref);
  };
  var handleButtonBlur = function handleButtonBlur(_) {
    setActiveElement(null);
  };
  var handleKeyDown = function handleKeyDown(evt) {
    if (evt.code === 'End') {
      focusLastSection();
    } else if (evt.code === 'Home') {
      focusFirstSection();
    } else if (evt.code === 'ArrowDown') {
      if (activeElement) {
        focusNextSection(activeElement);
      }
    } else if (evt.code === 'ArrowUp') {
      if (activeElement) {
        focusPreviousSection(activeElement);
      }
    } else {
      // Do not `preventDefault()`
      return;
    }
    // Prevent scrolling the page
    evt.preventDefault();
  };
  var sectionHeadingLevel = typeof headingLevel === 'number' ? headingLevel + (heading ? 1 : 0) : undefined;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Accordion, {
    heading: heading,
    headingLevel: headingLevel,
    onKeyDown: handleKeyDown,
    ref: ref,
    children: sectionsState.map(function (section, index) {
      var handleActivate = function handleActivate(ref) {
        var activatedIndex = refs.indexOf(ref);
        // const activatedSection = activatedIndex >= 0 ? sections[index] : undefined;
        setSectionsState(sectionsState.map(function (section, index) {
          if (index === activatedIndex) {
            return _objectSpread$1g(_objectSpread$1g({}, section), {}, {
              expanded: !section.expanded
            });
          } else {
            return section;
          }
        }));
      };
      return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(AccordionSection, _objectSpread$1g(_objectSpread$1g({
        headingLevel: sectionHeadingLevel
      }, section), {}, {
        icon: icon,
        ref: refs[index],
        buttonRef: buttonRefs[index],
        key: index,
        onButtonFocus: handleButtonFocus,
        onButtonBlur: handleButtonBlur,
        onActivate: handleActivate
      }), section.body);
    })
  });
};
AccordionProvider.displayName = 'AccordionProvider';

var _excluded$1e = ["children", "className", "icon", "type", "role"];
function ownKeys$1f(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1f(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1f(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1f(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var enumGuard = function enumGuard(values) {
  return function (x) {
    return values.includes(x);
  };
};
var TYPES = ['error', 'warning', 'info', 'ok'];
var isAlertType = enumGuard(TYPES);
var typeToRole = {
  info: 'status',
  ok: 'status',
  warning: 'alert',
  error: 'alert'
};
var Alert = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    icon = _ref.icon,
    type = _ref.type,
    role = _ref.role,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$1e);
  var computedType = isAlertType(type) ? type : 'info';
  var computedRole = role || typeToRole[computedType];
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", _objectSpread$1f(_objectSpread$1f({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-alert', "utrecht-alert--".concat(computedType), className),
    children: [icon && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "utrecht-alert__icon",
      children: icon
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "utrecht-alert__content",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "utrecht-alert__message",
        role: computedRole,
        children: children
      })
    })]
  }));
});
Alert.displayName = 'Alert';

var _excluded$1d = ["children", "className", "icon", "type"];
function ownKeys$1e(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1e(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1e(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1e(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var AlertDialog = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    icon = _ref.icon,
    type = _ref.type,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$1d);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("dialog", _objectSpread$1e(_objectSpread$1e({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-alert-dialog', {
      'utrecht-alert-dialog--error': type === 'error',
      'utrecht-alert-dialog--info': type === 'info',
      'utrecht-alert-dialog--warning': type === 'warning',
      className: className
    }),
    children: [icon && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "utrecht-alert-dialog__icon",
      children: icon
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "utrecht-alert-dialog__message",
      children: children
    })]
  }));
});
AlertDialog.displayName = 'AlertDialog';

var _excluded$1c = ["children", "className"];
function ownKeys$1d(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1d(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1d(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1d(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Article = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$1c);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("article", _objectSpread$1d(_objectSpread$1d({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-article', className),
    children: children
  }));
});
Article.displayName = 'Article';

var _excluded$1b = ["children", "className"];
function ownKeys$1c(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1c(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1c(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1c(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Backdrop = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$1b);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", _objectSpread$1c(_objectSpread$1c({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-backdrop', className),
    children: children
  }));
});
Backdrop.displayName = 'Backdrop';

var _excluded$1a = ["children", "className", "value"];
function ownKeys$1b(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1b(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1b(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1b(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var BadgeCounter = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    value = _ref.value,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$1a);
  var props = _objectSpread$1b({
    children: children,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-badge-counter', className)
  }, restProps);
  return typeof value !== 'undefined' ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("data", _objectSpread$1b(_objectSpread$1b({}, props), {}, {
    value: value,
    ref: ref
  })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", _objectSpread$1b(_objectSpread$1b({}, props), {}, {
    ref: ref
  }));
});
BadgeCounter.displayName = 'BadgeCounter';

var _excluded$19 = ["children", "className"];
function ownKeys$1a(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1a(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1a(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1a(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var BadgeList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$19);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", _objectSpread$1a(_objectSpread$1a({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-badge-list', className),
    children: children
  }));
});
BadgeList.displayName = 'BadgeList';

var _excluded$18 = ["aside", "attribution", "className", "children", "cite", "figure", "caption", "lang"];
function ownKeys$19(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$19(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$19(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$19(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Blockquote = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var aside = _ref.aside,
    attribution = _ref.attribution,
    className = _ref.className,
    children = _ref.children,
    cite = _ref.cite,
    figure = _ref.figure,
    caption = _ref.caption,
    lang = _ref.lang,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$18);
  var quote = children;
  var captionElement = caption || attribution ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("figcaption", {
    className: "utrecht-blockquote__caption",
    children: caption || attribution
  }) : null;
  var blockquoteAttrs = {
    cite: cite,
    lang: lang
  };
  return aside && (figure || captionElement) ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("aside", _objectSpread$19(_objectSpread$19({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-blockquote', className)
  }, restProps), {}, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("figure", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-blockquote__figure'),
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("blockquote", _objectSpread$19(_objectSpread$19({
        className: "utrecht-blockquote__quote"
      }, blockquoteAttrs), {}, {
        ref: ref,
        children: quote
      })), captionElement]
    })
  })) : aside ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("aside", _objectSpread$19(_objectSpread$19({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-blockquote', className)
  }, restProps), {}, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("blockquote", _objectSpread$19(_objectSpread$19({
      className: "utrecht-blockquote__quote"
    }, blockquoteAttrs), {}, {
      ref: ref,
      children: quote
    }))
  })) : figure || captionElement ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("figure", _objectSpread$19(_objectSpread$19({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-blockquote', className)
  }, restProps), {}, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("blockquote", _objectSpread$19(_objectSpread$19({
      className: "utrecht-blockquote__quote"
    }, blockquoteAttrs), {}, {
      ref: ref,
      children: quote
    })), captionElement]
  })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("blockquote", _objectSpread$19(_objectSpread$19(_objectSpread$19({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-blockquote', 'utrecht-blockquote--html-blockquote', className)
  }, blockquoteAttrs), restProps), {}, {
    ref: ref,
    children: quote
  }));
});
Blockquote.displayName = 'Blockquote';

var _excluded$17 = ["appearance", "children", "className", "headingLevel", "label"],
  _excluded2$6 = ["className", "children"],
  _excluded3$3 = ["className", "children"],
  _excluded4$2 = ["children", "disabled", "current", "href", "index", "rel", "role", "Link", "className"];
function ownKeys$18(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$18(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$18(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$18(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var useMicrodataItem = function useMicrodataItem(_ref) {
  var prop = _ref.prop,
    type = _ref.type;
  return {
    itemScope: true,
    itemType: type,
    itemProp: prop
  };
};
var useMicrodataProp = function useMicrodataProp(prop) {
  return {
    itemProp: prop
  };
};
var BreadcrumbNav = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref2, ref) {
  var appearance = _ref2.appearance,
    children = _ref2.children,
    className = _ref2.className,
    _ref2$headingLevel = _ref2.headingLevel,
    headingLevel = _ref2$headingLevel === void 0 ? 2 : _ref2$headingLevel,
    label = _ref2.label,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, _excluded$17);
  var headingId = label ? (0,react__WEBPACK_IMPORTED_MODULE_3__.useId)() : undefined;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("nav", _objectSpread$18(_objectSpread$18({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-breadcrumb-nav', 'utrecht-breadcrumb-nav--html-ol', {
      'utrecht-breadcrumb-nav--arrows': appearance === 'arrows'
    }, className),
    "aria-labelledby": headingId,
    children: [label && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Heading, {
      id: headingId,
      className: "utrecht-breadcrumb-nav__heading",
      level: headingLevel,
      "aria-hidden": "true",
      children: label
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ol", _objectSpread$18(_objectSpread$18({
      className: "utrecht-breadcrumb-nav__list utrecht-breadcrumb-nav__list--html-ol"
    }, useMicrodataItem({
      type: 'https://schema.org/BreadcrumbList'
    })), {}, {
      children: children
    }))]
  }));
});
BreadcrumbNav.displayName = 'BreadcrumbNav';
var BreadcrumbNavItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref3, ref) {
  var className = _ref3.className,
    children = _ref3.children,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, _excluded2$6);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", _objectSpread$18(_objectSpread$18(_objectSpread$18({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-breadcrumb-nav__item', className)
  }, useMicrodataItem({
    type: 'https://schema.org/ListItem',
    prop: 'itemListElement'
  })), {}, {
    ref: ref
  }, restProps), {}, {
    children: children
  }));
});
BreadcrumbNavItem.displayName = 'BreadcrumbNavItem';
var BreadcrumbNavSeparator = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref4, ref) {
  var className = _ref4.className,
    children = _ref4.children,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref4, _excluded3$3);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", _objectSpread$18(_objectSpread$18({
    "aria-hidden": "true",
    hidden: true,
    style: {
      display: 'var(--_utrecht-breadcrumb-nav-separator-display, block)'
    },
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-breadcrumb-nav__separator', 'utrecht-breadcrumb-nav__separator--html-li', className),
    ref: ref
  }, restProps), {}, {
    children: children
  }));
});
BreadcrumbNavSeparator.displayName = 'BreadcrumbNavSeparator';
var BreadcrumbNavLink = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref5, ref) {
  var children = _ref5.children,
    disabled = _ref5.disabled,
    current = _ref5.current,
    href = _ref5.href,
    index = _ref5.index,
    rel = _ref5.rel,
    role = _ref5.role,
    _ref5$Link = _ref5.Link,
    Link$1 = _ref5$Link === void 0 ? _utrecht_link_react__WEBPACK_IMPORTED_MODULE_8__.Link : _ref5$Link,
    className = _ref5.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref5, _excluded4$2);
  var DefaultLinkComponent = Link$1;
  var LinkComponent = Link$1 || DefaultLinkComponent;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(BreadcrumbNavItem, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(LinkComponent, _objectSpread$18(_objectSpread$18(_objectSpread$18({
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-breadcrumb-nav__link', className, {
        'utrecht-breadcrumb-nav__link--current': current,
        'utrecht-breadcrumb-nav__link--disabled': disabled,
        'utrecht-breadcrumb-nav__link--first': index === 0
      }),
      href: disabled ? undefined : href,
      rel: rel,
      role: role || (disabled ? 'link' : undefined),
      "aria-current": current && 'page',
      "aria-disabled": disabled ? 'true' : undefined
    }, useMicrodataProp('item')), restProps), {}, {
      ref: ref,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", _objectSpread$18(_objectSpread$18({
        className: "utrecht-breadcrumb-nav__text"
      }, useMicrodataProp('name')), {}, {
        children: children
      })), typeof index === 'number' ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", _objectSpread$18(_objectSpread$18({}, useMicrodataProp('position')), {}, {
        content: String(index + 1)
      })) : null]
    }))
  });
});
BreadcrumbNavLink.displayName = 'BreadcrumbNavLink';

var _excluded$16 = ["appearance", "children", "className", "external", "href", "placeholder", "role"];
function ownKeys$17(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$17(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$17(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$17(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var onKeyDown = function onKeyDown(evt) {
  var _evt$target;
  if (evt.key === ' ' && typeof ((_evt$target = evt.target) === null || _evt$target === void 0 ? void 0 : _evt$target.click) === 'function') {
    // Prevent other side-effects, such as scrolling
    evt.preventDefault();
    // Navigate to the link target
    evt.target.click();
  }
};
var ButtonLink = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var appearance = _ref.appearance,
    children = _ref.children,
    className = _ref.className,
    external = _ref.external,
    href = _ref.href,
    placeholder = _ref.placeholder,
    role = _ref.role,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$16);
  var props = restProps;
  if (role === 'button') {
    // When this link is announced as button by accessibility tools,
    // it should also behave like a button. Links are not activated
    // using `Space`, so we need to implement that behaviour here
    // to reach parity with the `button` element.
    props = _objectSpread$17(_objectSpread$17({}, restProps), {}, {
      onKeyDown: onKeyDown
    });
  }
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", _objectSpread$17(_objectSpread$17({
    href: placeholder ? undefined : href,
    ref: ref,
    role: role || (placeholder ? 'link' : undefined),
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-button-link', 'utrecht-button-link--html-a', {
      'utrecht-button-link--external': external,
      'utrecht-button-link--primary-action': appearance === 'primary-action-button',
      'utrecht-button-link--secondary-action': appearance === 'secondary-action-button',
      'utrecht-button-link--subtle': appearance === 'subtle-button',
      'utrecht-button-link--placeholder': placeholder
    }, className),
    rel: external ? 'external noopener noreferrer' : undefined,
    "aria-disabled": placeholder ? 'true' : undefined
  }, props), {}, {
    children: children
  }));
});
ButtonLink.displayName = 'ButtonLink';

var _excluded$15 = ["children", "className"];
function ownKeys$16(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$16(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$16(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$16(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Code = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$15);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code", _objectSpread$16(_objectSpread$16({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-code', className)
  }, restProps), {}, {
    children: children
  }));
});
Code.displayName = 'Code';

var _excluded$14 = ["children", "className"];
function ownKeys$15(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$15(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$15(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$15(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var CodeBlock = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$14);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("pre", _objectSpread$15(_objectSpread$15({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-code-block', className)
  }, restProps), {}, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("code", {
      className: "utrecht-code-block__content",
      children: children
    })
  }));
});
CodeBlock.displayName = 'CodeBlock';

var _excluded$13 = ["children", "className", "color", "style"];
function ownKeys$14(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$14(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$14(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$14(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ColorSample = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    color = _ref.color,
    style = _ref.style,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$13);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("data", _objectSpread$14(_objectSpread$14({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-color-sample', className),
    style: _objectSpread$14(_objectSpread$14({}, style), {}, {
      color: color
    }),
    value: color
  }, restProps), {}, {
    children: children
  }));
});
ColorSample.displayName = 'ColorSample';

var _excluded$12 = ["children", "className", "rule"];
function ownKeys$13(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$13(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$13(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$13(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ColumnLayout = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    rule = _ref.rule,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$12);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", _objectSpread$13(_objectSpread$13({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-column-layout', {
      'utrecht-column-layout--rule': rule
    }, className),
    ref: ref
  }, restProps), {}, {
    children: children
  }));
});
ColumnLayout.displayName = 'ColumnLayout';

var _excluded$11 = ["children", "currency", "amount", "locale", "className"];
function ownKeys$12(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$12(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$12(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$12(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var formatLabel = function formatLabel(locale, currency, amount) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: Number.isInteger(amount) ? 0 : undefined,
    useGrouping: false
  }).format(amount)
  // Remove whitespace
  .replace(/[\s]+/g, '')
  // Replace dash (U+002D) with minus sign (U+2212)
  .replace('-', "\u2212");
};
var formatVisually = function formatVisually(locale, currency, amount) {
  var formatted = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency
  }).format(amount);
  // Replace dash (U+002D) with minus sign (U+2212)
  formatted = formatted.replace(/-/, "\u2212");
  // Move the minus to before the currency
  if ((locale === 'nl' || locale === 'nl-NL') && /\u2212/.test(formatted)) {
    formatted = formatted.replace(/(.+)\u2212(.+)/, "\u2212 $1$2");
  }
  // Replace white space with non-breaking space
  formatted = formatted.replace(/ /g, "\xA0");
  return formatted;
};
var CurrencyData = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    _ref$currency = _ref.currency,
    currency = _ref$currency === void 0 ? 'EUR' : _ref$currency,
    amount = _ref.amount,
    _ref$locale = _ref.locale,
    locale = _ref$locale === void 0 ? 'nl-NL' : _ref$locale,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$11);
  var number = typeof amount === 'string' ? parseFloat(amount) : amount;
  var labelFormatted = formatLabel(locale, currency, number);
  var visuallyFormatted = formatVisually(locale, currency, number);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("data", _objectSpread$12(_objectSpread$12({}, restProps), {}, {
    ref: ref,
    value: "".concat(currency, " ").concat(amount),
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-currency-data', number < 0 && 'utrecht-currency-data--negative', number > 0 && 'utrecht-currency-data--positive', className),
    "aria-label": labelFormatted,
    children: children || visuallyFormatted
  }));
});
CurrencyData.displayName = 'CurrencyData';

var _excluded$10 = ["children", "className"];
function ownKeys$11(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$11(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$11(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$11(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Document = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$10);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", _objectSpread$11(_objectSpread$11({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-document', className),
    children: children
  }));
});
Document.displayName = 'Document';

var _excluded$$ = ["appearance", "children", "className"],
  _excluded2$5 = ["children", "className"],
  _excluded3$2 = ["children", "className"],
  _excluded4$1 = ["children", "className"];
function ownKeys$10(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$10(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$10(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$10(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DataList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var appearance = _ref.appearance,
    children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$$);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("dl", _objectSpread$10(_objectSpread$10({}, restProps), {}, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-data-list', 'utrecht-data-list--html-dl', appearance === 'rows' && 'utrecht-data-list--rows', className),
    ref: ref,
    children: children
  }));
});
DataList.displayName = 'DataList';
var DataListItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref2, ref) {
  var children = _ref2.children,
    className = _ref2.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, _excluded2$5);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", _objectSpread$10(_objectSpread$10({}, restProps), {}, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-data-list__item', className),
    ref: ref,
    children: children
  }));
});
DataListItem.displayName = 'DataListItem';
var DataListKey = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref3, ref) {
  var children = _ref3.children,
    className = _ref3.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, _excluded3$2);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("dt", _objectSpread$10(_objectSpread$10({}, restProps), {}, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-data-list__item-key', className),
    ref: ref,
    children: children
  }));
});
DataListKey.displayName = 'DataListKey';
var DataListValue = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref4, ref) {
  var value = _ref4.value,
    children = _ref4.children,
    className = _ref4.className,
    emptyDescription = _ref4.emptyDescription,
    multiline = _ref4.multiline,
    notranslate = _ref4.notranslate;
  var empty = value === '' || value === null;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("dd", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-data-list__item-value', 'utrecht-data-list__item-value--html-dd', className, multiline && 'utrecht-data-list__item-value--multiline'),
    translate: typeof notranslate === 'boolean' ? notranslate ? 'no' : 'yes' : undefined,
    ref: ref,
    children: empty ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      "aria-label": emptyDescription,
      children: "-"
    }) : children
  });
});
DataListValue.displayName = 'DataListValue';
var DataListActions = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref5, ref) {
  var children = _ref5.children,
    className = _ref5.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref5, _excluded4$1);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("dd", _objectSpread$10(_objectSpread$10({}, restProps), {}, {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-data-list__actions', 'utrecht-data-list__actions--html-dd', className),
    ref: ref,
    children: children
  }));
});
DataListActions.displayName = 'DataListActions';

var _excluded$_ = ["align", "children", "className", "modal"];
function ownKeys$$(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$$(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$$(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$$(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Drawer = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var align = _ref.align,
    children = _ref.children,
    className = _ref.className,
    modal = _ref.modal,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$_);
  var dialogRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useImperativeHandle)(ref, function () {
    return dialogRef.current;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    if (modal && restProps.open && dialogRef !== null && dialogRef !== void 0 && dialogRef.current) {
      // Dialog must not be `open` initially, prevent the following error:
      // "Cannot call showModal() on an open non-modal dialog"
      dialogRef.current.close();
      dialogRef.current.showModal();
    }
  });
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("dialog", _objectSpread$$(_objectSpread$$({}, restProps), {}, {
    ref: dialogRef,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-drawer', {
      'utrecht-drawer--block-end': align === 'block-end',
      'utrecht-drawer--block-start': align === 'block-start',
      'utrecht-drawer--inline-end': align === 'inline-end',
      'utrecht-drawer--inline-start': align === 'inline-start' || !align
    }, className),
    children: children
  }));
});
Drawer.displayName = 'Drawer';

var _excluded$Z = ["children", "className"];
function ownKeys$_(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$_(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$_(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$_(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Emphasis = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$Z);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("em", _objectSpread$_(_objectSpread$_({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-emphasis', 'utrecht-emphasis--stressed', className)
  }, restProps), {}, {
    children: children
  }));
});
Emphasis.displayName = 'Emphasis';

var _excluded$Y = ["className", "children"];
function ownKeys$Z(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$Z(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$Z(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$Z(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Figure = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
    children = _ref.children,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$Y);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("figure", _objectSpread$Z(_objectSpread$Z({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-figure', className),
    children: children
  }));
});
Figure.displayName = 'Figure';

var _excluded$X = ["className", "children"];
function ownKeys$Y(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$Y(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$Y(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$Y(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var FigureCaption = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
    children = _ref.children,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$X);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("figcaption", _objectSpread$Y(_objectSpread$Y({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-figure__caption', className),
    children: children
  }));
});
FigureCaption.displayName = 'FigureCaption';

var _excluded$W = ["dir", "disabled", "inputRequired", "invalid", "readOnly", "required", "className"];
function ownKeys$X(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$X(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$X(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$X(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Textarea = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var dir = _ref.dir,
    disabled = _ref.disabled,
    inputRequired = _ref.inputRequired,
    invalid = _ref.invalid,
    readOnly = _ref.readOnly,
    required = _ref.required,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$W);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("textarea", _objectSpread$X(_objectSpread$X({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-textarea', 'utrecht-textarea--html-textarea', disabled && 'utrecht-textarea--disabled', invalid && 'utrecht-textarea--invalid', readOnly && 'utrecht-textarea--readonly', (required || inputRequired) && 'utrecht-textarea--required', className),
    dir: dir !== null && dir !== void 0 ? dir : 'auto',
    disabled: disabled,
    readOnly: readOnly,
    "aria-required": required ? required : undefined,
    required: inputRequired,
    "aria-invalid": invalid || undefined
  }));
});
Textarea.displayName = 'Textarea';

var _excluded$V = ["autoComplete", "children", "cols", "defaultValue", "description", "disabled", "errorMessage", "inputDir", "inputRequired", "invalid", "label", "maxLength", "minLength", "name", "onBlur", "onChange", "onFocus", "onInput", "placeholder", "readOnly", "required", "rows", "status", "inputRef", "value"];
function ownKeys$W(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$W(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$W(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$W(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var FormFieldTextarea = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var autoComplete = _ref.autoComplete,
    children = _ref.children,
    cols = _ref.cols,
    defaultValue = _ref.defaultValue,
    description = _ref.description,
    disabled = _ref.disabled,
    errorMessage = _ref.errorMessage,
    inputDir = _ref.inputDir,
    inputRequired = _ref.inputRequired,
    invalid = _ref.invalid,
    label = _ref.label,
    maxLength = _ref.maxLength,
    minLength = _ref.minLength,
    name = _ref.name,
    onBlur = _ref.onBlur,
    onChange = _ref.onChange,
    onFocus = _ref.onFocus,
    onInput = _ref.onInput,
    placeholder = _ref.placeholder,
    readOnly = _ref.readOnly,
    required = _ref.required,
    rows = _ref.rows,
    status = _ref.status,
    inputRef = _ref.inputRef,
    value = _ref.value,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$V);
  var inputId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useId)();
  var descriptionId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useId)();
  var statusId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useId)();
  var errorMessageId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useId)();
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_utrecht_form_field_react__WEBPACK_IMPORTED_MODULE_14__.FormField, _objectSpread$W(_objectSpread$W({
    invalid: invalid,
    ref: ref
  }, props), {}, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "utrecht-form-field__label",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_utrecht_form_label_react__WEBPACK_IMPORTED_MODULE_18__.FormLabel, {
        htmlFor: inputId,
        children: label
      })
    }), description && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_utrecht_form_field_description_react__WEBPACK_IMPORTED_MODULE_16__.FormFieldDescription, {
      className: "utrecht-form-field__description",
      id: descriptionId,
      children: description
    }), invalid && errorMessage && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_utrecht_form_field_error_message_react__WEBPACK_IMPORTED_MODULE_17__.FormFieldErrorMessage, {
      className: "utrecht-form-field__error-message",
      id: errorMessageId,
      children: errorMessage
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "utrecht-form-field__input",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Textarea, {
        "aria-describedby": (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, descriptionId, description), errorMessageId, invalid), statusId, status)) || undefined,
        autoComplete: autoComplete,
        cols: cols,
        defaultValue: defaultValue,
        dir: inputDir,
        disabled: disabled,
        id: inputId,
        inputRequired: inputRequired,
        invalid: invalid,
        maxLength: maxLength,
        minLength: minLength,
        name: name,
        onBlur: onBlur,
        onChange: onChange,
        onFocus: onFocus,
        onInput: onInput,
        placeholder: placeholder,
        readOnly: readOnly,
        ref: inputRef,
        required: required,
        rows: rows,
        value: value
      })
    }), status && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "utrecht-form-field__status",
      id: statusId,
      children: status
    }), children]
  }));
});
FormFieldTextarea.displayName = 'FormFieldTextarea';

var _excluded$U = ["name", "invalid", "disabled", "label", "errorMessage", "description", "readOnly", "status", "autoComplete", "list", "min", "max", "minLength", "maxLength", "step", "placeholder", "pattern", "required", "inputRequired", "inputDir", "type", "value", "onChange", "onInput", "onFocus", "onBlur", "defaultValue", "size", "children", "inputRef"];
function ownKeys$V(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$V(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$V(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$V(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var FormFieldTextbox = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var name = _ref.name,
    invalid = _ref.invalid,
    disabled = _ref.disabled,
    label = _ref.label,
    errorMessage = _ref.errorMessage,
    description = _ref.description,
    readOnly = _ref.readOnly,
    status = _ref.status,
    autoComplete = _ref.autoComplete,
    list = _ref.list,
    min = _ref.min,
    max = _ref.max,
    minLength = _ref.minLength,
    maxLength = _ref.maxLength,
    step = _ref.step,
    placeholder = _ref.placeholder,
    pattern = _ref.pattern,
    required = _ref.required,
    inputRequired = _ref.inputRequired,
    inputDir = _ref.inputDir,
    type = _ref.type,
    value = _ref.value,
    onChange = _ref.onChange,
    onInput = _ref.onInput,
    onFocus = _ref.onFocus,
    onBlur = _ref.onBlur,
    defaultValue = _ref.defaultValue,
    size = _ref.size,
    children = _ref.children,
    inputRef = _ref.inputRef,
    props = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$U);
  var inputId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useId)();
  var descriptionId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useId)();
  var statusId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useId)();
  var errorMessageId = (0,react__WEBPACK_IMPORTED_MODULE_3__.useId)();
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_utrecht_form_field_react__WEBPACK_IMPORTED_MODULE_14__.FormField, _objectSpread$V(_objectSpread$V({
    invalid: invalid,
    ref: ref
  }, props), {}, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "utrecht-form-field__label",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_utrecht_form_label_react__WEBPACK_IMPORTED_MODULE_18__.FormLabel, {
        htmlFor: inputId,
        children: label
      })
    }), description && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_utrecht_form_field_description_react__WEBPACK_IMPORTED_MODULE_16__.FormFieldDescription, {
      className: "utrecht-form-field__description",
      id: descriptionId,
      children: description
    }), invalid && errorMessage && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_utrecht_form_field_error_message_react__WEBPACK_IMPORTED_MODULE_17__.FormFieldErrorMessage, {
      className: "utrecht-form-field__error-message",
      id: errorMessageId,
      children: errorMessage
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "utrecht-form-field__input",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_utrecht_textbox_react__WEBPACK_IMPORTED_MODULE_19__.Textbox, {
        ref: inputRef,
        id: inputId,
        name: name,
        type: type || 'text',
        autoComplete: autoComplete,
        "aria-describedby": (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, descriptionId, description), errorMessageId, invalid), statusId, status)) || undefined,
        invalid: invalid,
        dir: inputDir || 'auto',
        disabled: disabled,
        min: min,
        max: max,
        minLength: minLength,
        maxLength: maxLength,
        pattern: pattern,
        placeholder: placeholder,
        readOnly: readOnly,
        required: required,
        inputRequired: inputRequired,
        value: value,
        onFocus: onFocus,
        onBlur: onBlur,
        onInput: onInput,
        onChange: onChange,
        defaultValue: defaultValue,
        list: list,
        size: size,
        step: step
      })
    }), status && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "utrecht-form-field__status",
      id: statusId,
      children: status
    }), children]
  }));
});
FormFieldTextbox.displayName = 'FormFieldTextbox';

var _excluded$T = ["checked", "disabled", "invalid", "id", "hidden", "required", "role", "tabIndex", "className"];
function ownKeys$U(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$U(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$U(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$U(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var FormToggle = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var checked = _ref.checked,
    disabled = _ref.disabled,
    invalid = _ref.invalid,
    id = _ref.id,
    hidden = _ref.hidden,
    required = _ref.required,
    role = _ref.role,
    tabIndex = _ref.tabIndex,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$T);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-form-toggle', 'utrecht-form-toggle--html-checkbox', {
      'utrecht-form-toggle--disabled': disabled,
      'utrecht-form-toggle--invalid': invalid,
      'utrecht-form-toggle--required': required
    }, className),
    hidden: hidden,
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("input", _objectSpread$U({
      id: id,
      "aria-invalid": invalid || undefined,
      type: "checkbox",
      className: "utrecht-form-toggle__checkbox",
      defaultChecked: checked || undefined,
      disabled: disabled || undefined,
      required: required,
      ref: ref,
      role: role,
      tabIndex: tabIndex
    }, restProps)), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("label", {
      htmlFor: id,
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-form-toggle__track', 'utrecht-form-toggle__track--html-label'),
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "utrecht-form-toggle__thumb"
      })
    })]
  });
});
FormToggle.displayName = 'FormToggle';

var _excluded$S = ["children", "className"];
function ownKeys$T(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$T(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$T(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$T(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var HTMLContent = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$S);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", _objectSpread$T(_objectSpread$T({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-html', className),
    children: children
  }));
});
HTMLContent.displayName = 'HTMLContent';

var _excluded$R = ["children", "className"];
function ownKeys$S(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$S(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$S(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$S(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Heading1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$R);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", _objectSpread$S(_objectSpread$S({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-heading-1', className),
    children: children
  }));
});
Heading1.displayName = 'Heading1';

var _excluded$Q = ["children", "className"];
function ownKeys$R(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$R(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$R(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$R(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Heading2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$Q);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", _objectSpread$R(_objectSpread$R({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-heading-2', className),
    children: children
  }));
});
Heading2.displayName = 'Heading2';

var _excluded$P = ["children", "className"];
function ownKeys$Q(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$Q(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$Q(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$Q(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Heading3 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$P);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", _objectSpread$Q(_objectSpread$Q({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-heading-3', className),
    children: children
  }));
});
Heading3.displayName = 'Heading3';

var _excluded$O = ["children", "className"];
function ownKeys$P(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$P(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$P(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$P(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Heading4 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$O);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", _objectSpread$P(_objectSpread$P({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-heading-4', className),
    children: children
  }));
});
Heading4.displayName = 'Heading4';

var _excluded$N = ["children", "className"];
function ownKeys$O(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$O(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$O(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$O(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Heading5 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$N);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h5", _objectSpread$O(_objectSpread$O({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-heading-5', className),
    children: children
  }));
});
Heading5.displayName = 'Heading5';

var _excluded$M = ["children", "className"];
function ownKeys$N(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$N(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$N(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$N(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Heading6 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$M);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h6", _objectSpread$N(_objectSpread$N({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-heading-6', className),
    children: children
  }));
});
Heading6.displayName = 'Heading6';

var _excluded$L = ["children", "className"];
function ownKeys$M(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$M(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$M(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$M(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var HeadingGroup = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$L);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("hgroup", _objectSpread$M(_objectSpread$M({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-heading-group', className),
    children: children
  }));
});
HeadingGroup.displayName = 'HeadingGroup';

var _excluded$K = ["children", "value", "className"];
function ownKeys$L(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$L(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$L(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$L(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
/* Exported only for unit tests, not part of the public API */
var normalizeIBAN = function normalizeIBAN(iban) {
  return iban
  // Remove whitespace and word separator characters such as the dash
  .replace(/[\s+\W]+/g, '').toUpperCase();
};
/* Exported only for unit tests, not part of the public API */
var formatIBAN = function formatIBAN(normalizedIBAN) {
  return normalizedIBAN
  // Add a space after every four characters, except at the end
  .replace(/(.{4})(?!$)/g, '$1 ');
};
var IBANData = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    value = _ref.value,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$K);
  var normalized = normalizeIBAN(value);
  var formatted = formatIBAN(normalized);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("data", _objectSpread$L(_objectSpread$L({}, restProps), {}, {
    ref: ref,
    value: normalized,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-iban-data', className),
    translate: "no",
    children: children || formatted
  }));
});
IBANData.displayName = 'IBANData';

var _excluded$J = ["children", "className", "role"];
function ownKeys$K(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$K(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$K(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$K(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Icon = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    _ref$role = _ref.role,
    role = _ref$role === void 0 ? 'presentation' : _ref$role,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$J);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", _objectSpread$K(_objectSpread$K({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-icon', className),
    role: role,
    "aria-hidden": role === 'presentation' ? 'true' : undefined
  }, restProps), {}, {
    children: children
  }));
});
Icon.displayName = 'Icon';

var _excluded$I = ["component", "currentChar", "characters", "onLinkClick", "Link"];
function ownKeys$J(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$J(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$J(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$J(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var IndexCharNav = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var component = _ref.component,
    currentChar = _ref.currentChar,
    characters = _ref.characters,
    onLinkClick = _ref.onLinkClick,
    Link = _ref.Link,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$I);
  var LinkComponent = Link ? Link : ButtonLink;
  var links = [];
  if (component === 'button') {
    links = characters.map(function (_ref2) {
      var _char = _ref2["char"],
        disabled = _ref2.disabled;
      var current = currentChar === _char;
      return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.createElement)(_utrecht_button_react__WEBPACK_IMPORTED_MODULE_5__.Button, _objectSpread$J(_objectSpread$J({}, restProps), {}, {
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])({
          'utrecht-index-char-nav__link--current': current
        }),
        ref: ref,
        key: _char,
        appearance: current ? 'primary-action-button' : 'secondary-action-button',
        disabled: disabled,
        onClick: function onClick() {
          return typeof onLinkClick === 'function' && onLinkClick(_char);
        },
        pressed: current
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        translate: "no",
        children: _char
      }));
    });
  } else {
    links = characters.map(function (_ref3) {
      var _char2 = _ref3["char"],
        disabled = _ref3.disabled,
        href = _ref3.href;
      var current = currentChar === _char2;
      var customLinkComponentStyle = (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-button-link', 'utrecht-button-link--html-a', 'utrecht-index-char-nav__link', {
        'utrecht-index-char-nav__link--current': current,
        'utrecht-button-link--primary-action': current,
        'utrecht-button-link--secondary-action': !current,
        'utrecht-index-char-nav__link--disabled': disabled,
        'utrecht-button-link--placeholder': disabled
      });
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(LinkComponent, _objectSpread$J(_objectSpread$J({
        ref: ref,
        appearance: Link ? undefined : current ? 'primary-action-button' : 'secondary-action-button',
        href: href,
        className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])(Link && customLinkComponentStyle, 'utrecht-index-char-nav__link', {
          'utrecht-index-char-nav__link--disabled': disabled,
          'utrecht-index-char-nav__link--current': current
        }),
        "aria-current": current ? 'page' : undefined,
        "aria-disabled": disabled,
        placeholder: Link ? undefined : disabled,
        onClick: function onClick() {
          return typeof onLinkClick === 'function' && onLinkClick(_char2);
        }
      }, restProps), {}, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          translate: "no",
          children: _char2
        })
      }), _char2);
    });
  }
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "utrecht-index-char-nav",
    role: "group",
    children: links
  });
});
IndexCharNav.displayName = 'IndexCharNav';

var _excluded$H = ["className", "photo"];
function ownKeys$I(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$I(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$I(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$I(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Image = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
    photo = _ref.photo,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$H);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", _objectSpread$I(_objectSpread$I({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-img', {
      'utrecht-img--photo': photo
    }, className)
  }));
});
Image.displayName = 'Image';

var _excluded$G = ["children", "disabled", "inline", "className", "pressed", "type"];
function ownKeys$H(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$H(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$H(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$H(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var LinkButton = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    disabled = _ref.disabled,
    inline = _ref.inline,
    className = _ref.className,
    pressed = _ref.pressed,
    type = _ref.type,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$G);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", _objectSpread$H(_objectSpread$H({
    ref: ref,
    "aria-pressed": typeof pressed === 'boolean' ? pressed : undefined,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-link-button', 'utrecht-link-button--html-button', {
      'utrecht-link-button--disabled': disabled,
      'utrecht-link-button--inline': inline,
      'utrecht-link-button--pressed': pressed
    }, className),
    disabled: disabled,
    type: type || 'button'
  }, restProps), {}, {
    children: children
  }));
});
LinkButton.displayName = 'LinkButton';

var _excluded$F = ["children", "className", "external"];
function ownKeys$G(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$G(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$G(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$G(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var LinkSocial = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    external = _ref.external,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$F);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", _objectSpread$G(_objectSpread$G({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-link-social', className),
    rel: external !== false ? 'external noopener noreferrer' : undefined,
    children: children
  }));
});
LinkSocial.displayName = 'LinkSocial';

var _excluded$E = ["className", "icon", "children"],
  _excluded2$4 = ["children", "icon", "links", "className"];
function ownKeys$F(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$F(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$F(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$F(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var LinkListLink = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
    icon = _ref.icon,
    children = _ref.children,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$E);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-link-list__item', className),
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_utrecht_link_react__WEBPACK_IMPORTED_MODULE_8__.Link, _objectSpread$F(_objectSpread$F({
      className: "utrecht-link-list__link"
    }, restProps), {}, {
      ref: ref,
      children: [icon, (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
        className: "utrecht-link-list__link-text",
        children: children
      })]
    }))
  });
});
LinkListLink.displayName = 'LinkListLink';
var LinkList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref2, ref) {
  var children = _ref2.children,
    icon = _ref2.icon,
    links = _ref2.links,
    className = _ref2.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, _excluded2$4);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("ul", _objectSpread$F(_objectSpread$F({
    role: "list",
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-link-list', 'utrecht-link-list--html-ul', className)
  }, restProps), {}, {
    children: [children, Array.isArray(links) && links.map(function (linkProps, index) {
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(LinkListLink, _objectSpread$F({
        icon: typeof icon === 'function' ? icon() : undefined
      }, linkProps), index);
    })]
  }));
});
LinkList.displayName = 'LinkList';

var ListSocial = function ListSocial(_ref) {
  var children = _ref.children;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-list-social'),
    children: children
  });
};
var ListSocialItem = function ListSocialItem(_ref2) {
  var children = _ref2.children;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-list-social__item'),
    children: children
  });
};

var _excluded$D = ["children", "className", "caption"];
function ownKeys$E(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$E(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$E(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$E(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Logo = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    caption = _ref.caption,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$D);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("figure", _objectSpread$E(_objectSpread$E({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-logo', className)
  }, restProps), {}, {
    children: [children, caption && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("figcaption", {
      className: "utrecht-logo__caption",
      children: caption
    })]
  }));
});
Logo.displayName = 'Logo';

function ownKeys$D(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$D(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$D(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$D(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var LogoImage = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var restProps = (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_22__["default"])({}, ((0,_babel_runtime_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_21__["default"])(_ref), _ref));
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("svg", _objectSpread$D(_objectSpread$D({
    width: "192",
    height: "100",
    viewBox: "0 0 192 100",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: ref
  }, restProps), {}, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("g", {
      clipPath: "url(#clip0_908_6292)",
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M124.75 61.3114C126.41 60.4985 127.932 59.5127 129.264 58.3712C129.558 57.9561 129.887 57.6448 130.267 57.4373C132.844 54.8084 134.453 51.4013 134.453 47.2331C134.453 47.2331 134.453 44.2583 134.453 43.5147C134.349 43.5492 134.245 43.5665 134.124 43.5665C134.003 43.5665 133.882 43.5492 133.761 43.5147L133.484 45.0885C130.924 44.6043 131.201 42.0619 132.931 41.1971C133.917 40.6955 134.228 40.3323 133.934 39.9519C133.847 39.8481 133.744 39.7962 133.623 39.7962C133.259 39.7962 132.723 40.194 132.204 40.5745C131.979 40.7474 131.685 40.8339 131.374 40.8339C130.7 40.8339 129.973 40.4015 129.662 39.3811L128.763 39.8827C128.607 37.9629 129.8 37.0117 131.011 37.0117C131.582 37.0117 132.17 37.2192 132.619 37.6343C132.792 37.79 132.965 37.8591 133.138 37.8591C133.692 37.8591 134.072 37.1673 133.329 36.7695C132.619 36.389 131.945 35.213 132.602 34.4693L131.53 33.4662C132.014 33.1721 132.533 33.0338 133.017 33.0338C133.536 33.0338 134.038 33.2067 134.453 33.5526V19.9932C134.124 19.924 133.744 19.5954 133.744 19.1285C133.744 18.6096 134.055 18.2983 134.453 18.1426V17.0184C133.64 17.1914 133.034 17.693 132.792 18.3848L131.651 18.4021C131.599 17.5373 132.014 16.759 132.896 16.465V15.3408C132.152 15.4965 131.668 15.8597 131.374 16.1883C131.288 16.2748 131.219 16.3785 131.132 16.4823L130.267 16.4996C130.233 15.6694 130.648 14.9257 131.426 14.6663V14.1474H128.261H92.2871H89.122V14.6663C89.9176 14.9257 90.3327 15.6694 90.2808 16.4996L89.4161 16.4823C89.3469 16.3785 89.2604 16.292 89.1739 16.1883C88.8799 15.877 88.3783 15.5138 87.652 15.3408V16.465C88.5167 16.759 88.9318 17.5373 88.8972 18.4021L87.7557 18.3848C87.5136 17.693 86.9083 17.2087 86.0954 17.0184V18.1426C86.4932 18.2983 86.7872 18.6096 86.7872 19.1285C86.7872 19.5781 86.424 19.924 86.0954 19.9932V33.5353C86.5105 33.1894 86.9947 33.0338 87.5136 33.0338C88.0151 33.0338 88.534 33.1894 89.001 33.4662L87.9287 34.4693C88.5686 35.2303 87.8941 36.389 87.2023 36.7695C86.4586 37.1673 86.8564 37.8591 87.3925 37.8591C87.5655 37.8591 87.7384 37.79 87.9114 37.6343C88.3611 37.2192 88.9491 37.0117 89.5198 37.0117C90.7305 37.0117 91.9239 37.9456 91.7682 39.8827L90.8343 39.3638C90.523 40.3842 89.7966 40.8166 89.122 40.8166C88.8107 40.8166 88.5167 40.7301 88.2919 40.5572C87.773 40.1767 87.2369 39.7789 86.8737 39.7789C86.7526 39.7789 86.6315 39.8308 86.5624 39.9346C86.2856 40.315 86.5797 40.6955 87.5655 41.1798C89.3123 42.0446 89.589 44.587 87.012 45.0712L86.7353 43.4974C86.6142 43.532 86.4932 43.5492 86.3721 43.5492C86.2683 43.5492 86.1646 43.532 86.0608 43.5147V47.2331C86.0608 51.4186 87.6865 54.8257 90.2808 57.4546C90.6094 57.6448 90.9207 57.9388 91.1975 58.3193C92.5292 59.4954 94.0858 60.4812 95.7634 61.3114C95.7634 61.3114 124.75 61.3114 124.75 61.3114Z",
        fill: "white"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M135.162 2.40404C135.162 2.21379 135.145 2.04084 135.127 1.85059H132.516C132.498 3.33798 132.118 4.77348 131.461 5.89766C131.011 6.65865 130.475 7.22939 129.87 7.5753H130.06C132.879 7.59259 135.162 5.27504 135.162 2.40404ZM132.516 12.3142C132.308 12.2796 132.118 12.2623 131.91 12.2623C131.755 12.2623 131.599 12.2796 131.443 12.2969C130.959 12.3488 130.475 12.5044 130.094 12.7811C129.662 13.0925 129.351 13.6113 129.333 14.1648H130.146C130.509 13.8707 130.942 13.6632 131.409 13.5594V14.6836C130.613 14.943 130.198 15.6867 130.25 16.5169L131.115 16.4996C131.184 16.3958 131.27 16.3094 131.357 16.2056C131.651 15.8943 132.152 15.5311 132.879 15.3581V16.4823C132.014 16.7763 131.599 17.5546 131.634 18.4194L132.775 18.4021C133.035 17.6757 133.674 17.1741 134.539 17.0185V18.1254C134.09 18.2637 133.726 18.575 133.726 19.1458C133.726 19.6473 134.176 20.0105 134.539 20.0105L134.505 20.9618C134.505 20.9618 134.505 20.9618 134.522 20.9618C134.764 20.9618 134.972 20.8926 135.196 20.7888C135.906 20.4083 136.182 19.5781 136.165 18.8172L137.203 18.3156C137.203 18.3502 137.22 18.3848 137.22 18.4367C137.306 19.0766 137.22 19.6992 137.012 20.2354L138.967 22.0859C139.347 21.152 139.849 20.27 140.454 19.4571C140.679 19.1804 140.904 18.9036 141.146 18.6615C140.299 18.0216 139.261 17.226 138.915 16.9666C137.825 16.1537 136.822 15.2544 135.784 14.3723C135.145 13.8361 134.487 13.3 133.796 12.833C133.398 12.5736 132.965 12.4007 132.516 12.3142ZM150.658 46.6451C150.814 46.7316 150.97 46.7662 151.125 46.7662C151.506 46.7662 151.869 46.5586 152.077 46.23C152.042 46.0398 151.973 45.8322 151.921 45.642C151.748 45.1231 151.488 44.6216 151.125 44.1373C150.658 43.5147 150.036 42.9439 149.206 42.477C149.084 42.4078 148.946 42.3213 148.79 42.2348C149.344 42.9093 149.673 43.3936 149.88 43.8087C150.105 44.2238 150.209 44.5524 150.364 44.8637C150.312 44.9156 150.278 44.9675 150.243 45.0194C149.863 45.5901 150.088 46.3511 150.658 46.6451ZM70.6335 43.7914C70.8411 43.3936 71.1697 42.892 71.7231 42.2175C71.5848 42.304 71.4291 42.3905 71.308 42.4597C70.4779 42.9266 69.8552 43.4974 69.3883 44.12C69.0251 44.6043 68.7829 45.1231 68.5927 45.6247C68.5235 45.8149 68.4716 46.0225 68.437 46.2127C68.6446 46.5413 69.0078 46.7489 69.3883 46.7489C69.5439 46.7489 69.6996 46.7143 69.8552 46.6278C70.426 46.3338 70.6508 45.5728 70.253 44.9848C70.2184 44.9329 70.1839 44.881 70.132 44.8291C70.3049 44.5351 70.4087 44.2065 70.6335 43.7914ZM142.287 13.1098C142.495 13.1098 142.72 13.0925 142.945 13.0752C142.27 12.833 141.734 12.4352 141.388 11.8818C140.904 11.1381 140.835 10.3425 141.025 9.63342C140.99 9.63342 140.956 9.65072 140.921 9.65072C140.108 9.82367 139.693 10.4463 139.849 11.2765C140.074 12.5217 140.852 13.1098 142.287 13.1098ZM152.163 48.0633C152.18 47.8904 152.198 47.7174 152.198 47.5272C151.869 47.7174 151.488 47.8212 151.108 47.8212C150.762 47.8212 150.451 47.7347 150.139 47.579C149.534 47.2677 149.119 46.697 148.998 46.0225C148.912 45.5901 148.963 45.1404 149.136 44.7426C149.136 44.7426 149.136 44.7253 149.119 44.7253C148.652 44.6389 148.133 44.5697 147.562 44.5005C146.611 44.3967 145.746 44.3448 144.951 44.3448C137.514 44.3448 136.909 48.4265 136.909 48.4265C135.75 52.7676 139.226 54.7219 139.226 54.7219C139.226 54.7219 140.022 58.6825 138.258 60.1872L136.424 59.5646L135.508 59.2533L134.989 59.0803C134.159 57.9043 132.81 57.0741 131.53 57.0741C130.285 57.0741 129.091 57.8697 128.503 59.9278L129.8 59.6511C129.8 60.9828 130.233 61.3287 130.907 61.3287C131.046 61.3287 131.201 61.3114 131.357 61.2941C131.547 61.2595 131.737 61.2249 131.945 61.1903C132.585 61.0693 133.052 60.9309 133.38 60.9309C133.692 60.9309 133.899 61.052 134.02 61.3806C134.193 61.8822 133.709 62.1935 133.086 62.3491C131.564 62.695 130.7 63.7673 130.976 65.2028C131.046 65.5314 131.149 65.86 131.34 66.2232C131.409 66.3789 131.495 66.5173 131.599 66.6729C131.599 66.6729 131.616 66.6729 131.616 66.6902L133.121 65.7736C133.346 65.9984 133.605 66.0849 133.865 66.0849C134.435 66.0849 134.989 65.6698 135.196 65.3066C135.214 65.272 135.231 65.2374 135.248 65.2028C135.421 64.8569 135.439 64.4591 135.439 64.0959C135.439 63.8884 135.421 63.6809 135.421 63.4906C135.421 63.2658 135.421 63.0755 135.473 62.9372C135.56 62.6604 135.784 62.4702 136.027 62.3664C136.113 62.3318 136.217 62.3145 136.303 62.3145C136.459 62.3145 136.615 62.3664 136.753 62.4702C137.116 62.7296 137.116 63.1274 137.064 63.5252C137.012 63.9403 136.943 64.3208 137.168 64.6667C137.185 64.7013 137.203 64.7186 137.22 64.7532C137.306 64.8569 137.41 64.9607 137.514 65.0472C137.583 65.0991 137.894 65.3239 137.894 65.4104L137.739 67.2437C138.707 67.1745 139.78 66.9669 140.299 66.0849C140.402 65.9119 140.489 65.6871 140.541 65.4623C140.731 64.7877 140.817 63.9576 140.921 62.7988C141.354 62.6258 141.734 62.401 142.063 62.107C142.478 61.7438 142.806 61.2941 142.997 60.7234C143.515 59.1668 143.965 56.0537 143.273 52.7676C143.273 52.7676 150.243 51.9028 151.748 51.1418C151.886 50.0868 152.025 49.0318 152.163 48.0633ZM146.023 7.93849C146.023 7.93849 145.072 8.50924 145.262 9.40858C145.574 10.0658 145.971 10.7403 146.473 11.3283L147.441 10.3598C148.583 9.30481 149.586 8.92432 150.416 8.92432C151.506 8.92432 152.267 9.61613 152.578 10.4117C153.062 11.6224 153.01 12.5909 152.838 13.2135C152.699 13.6805 152.319 14.061 151.454 14.1302C151.298 14.1475 151.125 14.1475 150.952 14.1475C149.171 14.1475 146.836 13.5075 146.836 13.5075C146.473 15.4446 146.248 15.8251 149.015 15.8251C149.655 15.8251 150.451 15.8078 151.437 15.7732L148.669 17.0358C148.358 17.0185 148.064 17.0012 147.77 17.0012C145.729 17.0012 144.103 17.6065 142.824 18.5923C142.53 18.8172 142.253 19.0593 141.993 19.3187C141.008 20.3218 140.299 21.5671 139.797 22.8815C139.659 23.262 139.538 23.6425 139.434 24.023C138.898 26.0293 138.828 28.122 139.105 29.7996C139.313 29.5402 139.52 29.298 139.762 29.0559L139.883 28.9348C140.714 28.122 142.115 26.7211 143.792 25.8563C144.415 25.3029 145.003 24.7494 145.574 24.1441C146.801 22.8469 147.891 21.4114 148.704 19.7857C148.202 21.5325 147.355 23.2101 146.352 24.7494C145.954 25.3547 145.539 25.9428 145.107 26.5135C144.726 26.6692 144.38 26.8421 144.034 27.0497C142.564 27.8798 141.319 29.1597 140.593 29.8861C140.16 30.3012 139.814 30.7681 139.486 31.2524C139.226 31.6329 139.001 32.0134 138.759 32.4112C138.586 32.7052 138.396 33.0165 138.223 33.3105C137.445 34.5731 136.407 35.8183 135.819 35.8183C135.612 35.8183 135.456 35.6627 135.387 35.3168C135.075 33.7429 134.09 33.0511 133.017 33.0511C132.516 33.0511 131.997 33.2067 131.53 33.4835L132.602 34.4866C131.962 35.2476 132.637 36.4064 133.329 36.7869C134.072 37.1846 133.674 37.8764 133.138 37.8764C132.965 37.8764 132.792 37.8073 132.619 37.6516C132.17 37.2365 131.582 37.029 131.011 37.029C129.8 37.029 128.607 37.9629 128.763 39.9L129.697 39.3811C130.008 40.4015 130.734 40.8339 131.409 40.8339C131.72 40.8339 132.014 40.7474 132.239 40.5745C132.758 40.194 133.294 39.7962 133.657 39.7962C133.778 39.7962 133.899 39.8481 133.968 39.9519C134.245 40.3324 133.951 40.7129 132.965 41.1971C131.219 42.0619 130.942 44.6043 133.519 45.0885L133.796 43.5147C133.917 43.5493 134.038 43.5666 134.159 43.5666C134.902 43.5666 135.421 42.9093 135.508 42.4251C135.629 41.716 135.594 41.2836 135.629 40.8339C135.646 40.4361 135.906 40.2632 136.165 40.2632C136.476 40.2632 136.788 40.488 136.822 40.8858C136.874 41.6295 136.857 42.598 138.171 42.8229L138.586 44.1546C139.832 43.7222 141.077 42.2867 138.811 39.8654C138.777 38.6374 140.074 37.9283 141.89 36.9079C142.201 36.735 142.53 36.5447 142.858 36.3545C143.031 36.2507 143.204 36.1469 143.377 36.0432C143.74 35.8183 145.141 34.7979 146.369 33.7429L147.441 34.3136C147.217 34.5039 146.974 34.7114 146.698 34.9536C145.591 35.8702 144.397 36.7696 143.948 37.029C143.861 37.0809 143.775 37.1328 143.688 37.1846C144.864 38.2742 146.127 39.2255 147.268 39.9865C147.735 40.2978 148.185 40.5918 148.6 40.8512C149.015 41.1106 149.413 41.3355 149.742 41.5257C150.658 42.0446 151.385 42.6845 151.938 43.4109C152.301 43.8779 152.578 44.3794 152.786 44.881C152.993 45.3653 153.132 45.8668 153.201 46.3684C153.235 46.5413 153.253 46.697 153.27 46.8699C153.304 47.3369 153.287 47.7866 153.235 48.219C153.166 48.6859 153.114 49.1529 153.045 49.6199C152.959 50.329 152.889 51.0208 152.838 51.7299C152.768 52.5601 152.734 53.3729 152.734 54.1858C152.734 56.6763 153.114 58.4577 154.844 60.1526C156.089 61.3806 157.836 61.6746 159.531 61.7957C160.413 61.8476 162.886 62.2108 164.564 62.4702C165.532 62.6086 166.259 63.4214 166.31 64.4072C166.38 65.739 166.362 67.4858 165.895 68.0738L163.612 67.7625C163.076 66.9669 161.796 66.3443 160.551 66.3443C159.583 66.3443 158.631 66.7248 158.095 67.7279C157.94 68.0219 157.801 68.3678 157.732 68.7829C157.715 68.904 157.697 69.0251 157.68 69.1634L158.407 68.8694L158.822 68.6965C158.839 68.8002 158.856 68.8867 158.874 68.9732C159.116 69.9763 159.635 70.3395 160.257 70.3395C160.551 70.3395 160.862 70.253 161.191 70.132C161.226 70.1147 161.26 70.0974 161.312 70.0801C161.9 69.8379 162.315 69.6477 162.627 69.6477C162.834 69.6477 162.99 69.7342 163.128 69.9763C163.318 70.3049 163.128 70.5816 162.8 70.8065C162.696 70.8756 162.557 70.9448 162.436 70.9967C160.69 71.7231 160.188 73.418 161.796 75.1821L163.007 74.1098C163.197 74.2309 163.388 74.2828 163.561 74.2828C164.149 74.2828 164.685 73.7466 164.823 73.3489C165.048 72.7435 164.806 72.0517 164.719 71.5502C164.702 71.4118 164.685 71.2734 164.702 71.1697C164.737 70.8929 164.927 70.6681 165.152 70.547C165.255 70.4952 165.359 70.4606 165.48 70.4606C165.584 70.4606 165.688 70.4779 165.792 70.5297C165.895 70.5816 165.982 70.6508 166.051 70.7373C166.207 70.9275 166.241 71.187 166.241 71.4464C166.241 71.5847 166.241 71.7404 166.259 71.8788C166.293 72.1209 166.362 72.3457 166.57 72.536C166.674 72.6225 166.777 72.6916 166.881 72.7608C166.95 72.7954 167.279 72.9511 167.296 73.0202L167.452 74.7152C168.663 74.4212 169.994 73.8331 169.666 71.9479C169.614 71.6366 169.51 71.2734 169.337 70.8756C169.285 70.7373 169.216 70.5816 169.13 70.426C170.185 69.9071 170.876 68.9213 171.049 67.7625C171.205 66.7075 171.032 62.9545 170.911 60.8098C170.859 59.9451 170.202 59.236 169.354 59.1149C168.386 58.9766 167.141 58.7863 166.224 58.5961C164.771 58.2848 163.37 57.6448 163.042 56.6071C162.765 55.7078 162.921 55.604 163.007 54.6874C163.076 53.9783 163.163 53.2519 163.215 52.5428C163.215 52.439 163.232 52.3179 163.232 52.2142C163.249 51.7991 163.232 51.3667 163.18 50.9516C163.267 51.0035 163.353 51.0554 163.439 51.1073C163.716 51.2629 164.01 51.3667 164.304 51.4532C164.633 51.5396 164.961 51.5742 165.307 51.5742C166.034 51.5742 166.743 51.384 167.383 50.9862C168.542 50.2771 169.216 49.0491 169.181 47.7001C169.13 45.2961 167.763 43.6012 166.449 41.9581C165.826 41.1798 165.169 40.367 164.685 39.5022C163.145 36.735 162.782 33.7256 163.612 30.5606C163.976 29.177 164.806 27.9317 165.688 26.6C166.016 26.0984 166.328 25.6315 166.639 25.1126C166.639 25.1126 167.331 25.4239 167.781 25.3201C167.902 25.2856 168.023 25.2337 168.161 25.1472C169.216 24.49 170.34 21.8092 170.288 18.5923C170.254 16.0326 169.648 13.9053 168.455 12.1585C168.715 12.8849 168.939 13.6459 169.078 14.4069C169.233 15.2371 169.285 16.1018 169.233 16.932C169.181 17.7795 169.008 18.5923 168.732 19.3533C168.853 18.5404 168.853 17.7276 168.749 16.932C168.645 16.1364 168.438 15.3754 168.144 14.649C167.884 14.0091 167.573 13.3865 167.21 12.7984C167.452 14.2858 167.452 15.7905 167.054 17.6584C166.812 18.8172 166.31 19.9241 165.878 20.8926C165.48 21.7746 165.186 22.4837 165.065 23.0718C164.927 23.7117 165.013 24.196 165.446 24.5938C165.377 24.7148 165.29 24.8359 165.221 24.9569C165.031 25.251 164.823 25.5623 164.616 25.8736C163.716 27.2399 162.782 28.6408 162.367 30.232C161.468 33.691 161.883 37.1155 163.561 40.1421C164.097 41.1106 164.788 41.9581 165.446 42.7883C166.674 44.3275 167.85 45.7803 167.902 47.752C167.919 48.6513 167.487 49.4296 166.726 49.8966C165.93 50.3809 164.979 50.4155 164.166 50.0177C164.149 50.0004 164.114 50.0004 164.097 49.9831C163.474 49.6545 162.921 49.0318 162.592 48.3054C162.575 48.2708 162.575 48.2363 162.557 48.2017C162.16 47.0429 161.675 45.9014 161.122 44.8118C159.496 41.5603 157.473 38.5164 156.193 35.0919C155.086 32.1517 155.587 28.5716 155.587 28.5716C156.712 29.0213 158.355 29.0732 158.355 29.0732C158.303 25.4066 166.172 16.8974 161.381 6.52029C161.053 7.05644 160.62 7.60989 160.015 8.18063L159.583 8.59571V7.09103C162.09 4.49675 160.932 2.02354 159.998 1.19337C159.289 1.4528 158.476 2.23109 157.87 3.18232L156.815 2.83642C157.075 2.40404 157.369 1.98895 157.697 1.60846C157.594 1.53928 157.49 1.48739 157.369 1.4701C157.317 1.4701 157.248 1.4528 157.161 1.4528C155.587 1.4528 149.672 2.81912 149.084 3.13043L148.617 4.72159C147.009 5.15397 145.522 6.01873 144.467 6.58947C144.553 7.03914 145.037 8.05956 146.023 7.93849ZM157.767 18.0908C158.199 16.8974 158.545 15.6694 158.822 14.4242C158.683 15.704 158.493 16.9666 158.199 18.2291C157.905 19.4917 157.507 20.7196 157.04 21.9303C156.573 23.141 156.037 24.317 155.484 25.4758C155.034 26.3924 154.567 27.2918 154.1 28.1911C153.668 28.0528 153.149 27.8279 152.578 27.4993C153.91 25.5796 155.19 23.6252 156.262 21.5671C156.833 20.4429 157.352 19.2841 157.767 18.0908ZM153.218 19.9759C152.941 20.8061 152.665 21.6536 152.319 22.4837C151.973 23.3139 151.54 24.1268 151.091 24.8878C150.814 25.3547 150.537 25.8217 150.261 26.2887C149.672 26.0811 149.084 25.9601 148.514 25.9255C149.015 25.3374 149.534 24.7321 150.018 24.1441C150.572 23.4696 151.073 22.7951 151.54 22.0859C151.99 21.3596 152.405 20.5986 152.803 19.8203C153.201 19.042 153.581 18.2464 153.979 17.4681C153.737 18.2983 153.477 19.1458 153.218 19.9759ZM152.872 5.01561C151.661 6.20898 151.264 6.93537 151.264 6.93537C149.655 7.00455 149.309 5.98414 149.309 4.98102C150.883 5.4134 152.872 5.01561 152.872 5.01561ZM131.426 8.68219H89.1567V11.2073C89.7274 11.2592 90.4538 11.4494 91.0937 11.8991C91.8201 12.4352 92.2698 13.2654 92.2871 14.1129V14.1475H128.244V14.1129C128.261 13.2654 128.711 12.4352 129.437 11.8991C130.094 11.4148 130.855 11.2419 131.426 11.19V8.68219ZM98.0118 13.2308L94.5355 11.5013L98.0118 9.77178L101.488 11.5013L98.0118 13.2308ZM110.274 13.0406C108.579 13.0406 107.196 12.3488 107.196 11.5013C107.196 10.6538 108.579 9.96203 110.274 9.96203C111.969 9.96203 113.353 10.6538 113.353 11.5013C113.353 12.3488 111.969 13.0406 110.274 13.0406ZM122.536 13.2308L119.06 11.5013L122.536 9.77178L126.013 11.5013L122.536 13.2308ZM86.4413 61.3806C86.5624 61.052 86.7699 60.9309 87.0812 60.9309C87.4099 60.9309 87.8768 61.052 88.5167 61.1903C88.7243 61.2249 88.9145 61.2595 89.1048 61.2941C89.2604 61.3114 89.4161 61.3287 89.5545 61.3287C90.229 61.3287 90.6613 61.0001 90.6613 59.6511L91.9585 59.9278C91.3704 57.8697 90.1771 57.0741 88.9318 57.0741C87.652 57.0741 86.303 57.9216 85.4728 59.0803L84.9539 59.2533L84.0719 59.5992L82.2386 60.2218C80.4572 58.7171 81.2701 54.7565 81.2701 54.7565C81.2701 54.7565 84.7464 52.8022 83.5876 48.4611C83.5876 48.4611 82.9823 44.3794 75.5454 44.3794C74.7498 44.3794 73.885 44.4313 72.9338 44.5351C72.363 44.6043 71.8442 44.6735 71.3772 44.7599C71.3772 44.7599 71.3772 44.7772 71.3599 44.7772C71.5329 45.175 71.5848 45.6247 71.4983 46.0571C71.3772 46.7316 70.9621 47.3023 70.3568 47.6136C70.0628 47.7693 69.7342 47.8558 69.3883 47.8558C69.0078 47.8558 68.6446 47.752 68.2987 47.5617C68.2987 47.752 68.316 47.9249 68.3333 48.0979C68.4716 49.0664 68.61 50.1041 68.6965 51.1937C70.2012 51.9547 77.1711 52.8195 77.1711 52.8195C76.4966 56.1056 76.929 59.2187 77.4478 60.7753C77.6381 61.346 77.9667 61.7957 78.3818 62.1589C78.7104 62.4529 79.0909 62.6777 79.5233 62.8507C79.6097 63.9922 79.6962 64.8396 79.9037 65.5141C79.9556 65.7563 80.0421 65.9638 80.1459 66.1368C80.6647 67.0188 81.737 67.2264 82.7056 67.2955L82.5499 65.4623C82.5499 65.3758 82.8785 65.1509 82.9304 65.0991C83.0342 65.0126 83.1379 64.9088 83.2244 64.805C83.2417 64.7704 83.259 64.7532 83.2763 64.7186C83.5011 64.3554 83.432 63.9749 83.3801 63.5771C83.3282 63.1793 83.3282 62.7815 83.6914 62.5221C83.8298 62.4183 83.9854 62.3664 84.1411 62.3664C84.2448 62.3664 84.3313 62.3837 84.4178 62.4183C84.6599 62.5048 84.8848 62.7123 84.9712 62.989C85.0231 63.1274 85.0231 63.3177 85.0231 63.5425C85.0231 63.7327 85.0058 63.9403 85.0058 64.1478C85.0058 64.511 85.0404 64.9088 85.1961 65.2547C85.2134 65.2893 85.2307 65.3239 85.248 65.3585C85.4555 65.7044 86.0089 66.1368 86.5797 66.1368C86.8391 66.1368 87.0985 66.0503 87.3234 65.8255L88.8281 66.7421C88.8281 66.7421 88.8454 66.7421 88.8454 66.7248C88.9491 66.5691 89.0183 66.4135 89.1048 66.2751C89.2777 65.9119 89.3988 65.5833 89.468 65.2547C89.7447 63.8019 88.8799 62.7469 87.358 62.401C86.7699 62.2108 86.2684 61.8994 86.4413 61.3806ZM143.066 69.3883C142.651 68.7483 142.149 68.2987 141.682 67.9528C141.509 67.849 141.336 67.7625 141.146 67.6587L140.662 67.4166C139.832 68.1257 138.707 68.2987 137.877 68.3505L136.615 68.437L136.718 67.1745L136.822 65.86C136.684 65.739 136.545 65.6006 136.407 65.4277C136.407 65.4104 136.39 65.4104 136.39 65.3931C136.338 65.5487 136.269 65.7044 136.182 65.8428C135.802 66.5 134.902 67.1572 133.917 67.1572C133.657 67.1572 133.415 67.1053 133.173 67.0188L132.602 67.3647C132.637 67.3993 132.689 67.4339 132.723 67.4685C134.574 69.1807 135.957 69.371 138.31 69.9071C139.901 70.2703 141.388 71.187 141.89 72.83C142.184 73.7812 142.132 74.8189 142.08 75.8048C142.08 75.8048 145.331 73.9542 143.602 70.3049C143.464 70.0455 143.273 69.7169 143.066 69.3883ZM120.876 68.1257C119.856 67.088 118.766 66.206 117.676 65.6871C116.777 65.2547 115.878 64.9607 115.03 64.7704C114.477 64.6494 113.941 64.5629 113.439 64.511C113.145 64.4764 112.868 64.4591 112.592 64.4418C111.865 64.4764 111.087 64.4937 110.274 64.4937C109.461 64.4937 108.683 64.4764 107.957 64.4418C107.68 64.4591 107.403 64.4764 107.092 64.511C106.59 64.5629 106.054 64.6494 105.501 64.7704C104.653 64.9607 103.754 65.2547 102.854 65.6871C101.765 66.2232 100.675 67.088 99.6548 68.1257C99.5857 68.1949 99.5338 68.2468 99.4819 68.316C97.2681 70.72 97.8561 73.0721 97.8561 73.0721C97.8561 73.0721 100.693 69.3018 104.93 69.3018C106.953 69.3018 108.7 69.9763 109.6 70.426L110.257 70.7719L110.914 70.426C111.813 69.9936 113.56 69.3018 115.584 69.3018C119.821 69.3018 122.657 73.0721 122.657 73.0721C122.657 73.0721 123.263 70.72 121.032 68.316C120.997 68.2641 120.945 68.1949 120.876 68.1257ZM98.8766 67.3647C100.554 65.6698 102.405 64.5975 104.082 64.0268C102.56 63.7846 101.263 63.4733 100.105 63.1101C99.9835 63.1101 99.8624 63.0928 99.7413 63.0928C99.3781 63.0928 99.0149 63.1101 98.6863 63.1447C97.7178 63.2658 96.8011 63.4387 95.9191 63.4387C93.6188 63.4387 91.5953 63.0928 89.9522 62.6431C90.1252 62.868 90.2809 63.1101 90.3846 63.3868C90.644 64.0268 90.6959 64.7532 90.5403 65.4968C90.6095 65.5141 90.6613 65.5314 90.7305 65.5487C91.0418 65.6179 91.3359 65.6871 91.578 65.7217C92.045 65.8082 92.3217 65.8255 92.3217 65.8255C92.3217 65.8255 91.9066 66.0503 91.3186 66.4481C90.6095 66.9323 89.6582 67.6587 88.8454 68.5408C85.0231 72.7435 89.2431 75.9258 89.2431 75.9258C89.2431 75.9258 88.3092 71.7923 90.2981 70.4779C93.4805 68.4024 95.1754 70.1838 98.7382 67.4685C98.7901 67.4685 98.8247 67.4166 98.8766 67.3647ZM87.9287 67.3993L87.358 67.0534C87.1331 67.1399 86.8737 67.1918 86.6143 67.1918C85.6112 67.1918 84.7118 66.5346 84.3486 65.8773C84.2621 65.7217 84.193 65.5833 84.1411 65.4277C84.1411 65.445 84.1238 65.445 84.1238 65.4623C83.9854 65.6352 83.847 65.7736 83.7087 65.8946L83.8125 67.2091L83.9162 68.4716L82.6537 68.3851C81.8235 68.3333 80.7166 68.1603 79.8692 67.4512L79.3849 67.6933C79.1946 67.7971 79.0217 67.8836 78.8487 67.9874C78.3645 68.3333 77.8802 68.7829 77.4651 69.4229C77.2403 69.7515 77.0673 70.0628 76.929 70.3741C75.1995 74.0234 78.451 75.874 78.451 75.874C78.3991 74.8881 78.3645 73.8504 78.6412 72.8992C79.1428 71.2561 80.6301 70.3568 82.2213 69.9763C84.5907 69.4229 85.9571 69.2499 87.8076 67.5377C87.8595 67.4685 87.8941 67.4339 87.9287 67.3993ZM129.212 66.4827C128.624 66.0849 128.209 65.86 128.209 65.86C128.209 65.86 128.503 65.8255 128.953 65.7563C129.195 65.7217 129.489 65.6525 129.8 65.5833C129.852 65.566 129.921 65.5487 129.991 65.5314C129.835 64.7877 129.887 64.0613 130.146 63.4214C130.25 63.162 130.406 62.9026 130.579 62.6777C128.936 63.1274 126.912 63.4733 124.612 63.4733C123.73 63.4733 122.813 63.2831 121.845 63.1793C121.516 63.1447 121.153 63.1274 120.79 63.1274C120.668 63.1274 120.565 63.1274 120.444 63.1274C119.285 63.4906 117.97 63.8019 116.466 64.0441C118.143 64.6148 119.994 65.6698 121.672 67.382C121.723 67.4339 121.758 67.4685 121.793 67.5204C125.355 70.2357 127.05 68.4543 130.233 70.5297C132.222 71.8269 131.288 75.9777 131.288 75.9777C131.288 75.9777 135.49 72.7954 131.686 68.5927C130.873 67.6933 129.904 66.9496 129.212 66.4827ZM170.738 71.8615C170.859 72.6052 170.79 73.2624 170.513 73.8504C169.925 75.0957 168.628 75.5453 167.711 75.7875L166.483 76.0988L166.362 74.8362L166.241 73.6602C166.138 73.591 166.016 73.5045 165.913 73.418C165.895 73.5218 165.861 73.6256 165.826 73.7293C165.532 74.5422 164.598 75.3724 163.543 75.3724C163.439 75.3724 163.336 75.3724 163.232 75.3551L162.488 76.0123L161.693 76.7214L160.966 75.9258C159.946 74.8189 159.531 73.5737 159.79 72.4322C159.877 72.069 160.015 71.7231 160.223 71.4118C159.583 71.4118 159.012 71.1697 158.58 70.72C158.424 70.547 158.268 70.3568 158.164 70.132L158.095 70.1492L156.418 70.8411L156.608 69.0424C156.608 68.9732 156.625 68.9213 156.625 68.8521C155.881 68.9732 154.982 69.2499 153.841 69.6823C153.685 69.7688 153.512 69.8379 153.356 69.8898C153.27 69.9244 153.201 69.959 153.114 69.9763C153.477 70.1838 153.841 70.3914 154.169 70.5989C155.812 71.6539 156.936 72.7954 157.525 73.9888C157.888 74.3693 158.286 74.7844 158.718 75.2513C160.499 77.1538 162.903 78.0359 165.377 78.0359C169.614 78.0359 173.99 75.4243 175.529 70.8238C175.512 70.8411 173.419 71.5502 170.738 71.8615ZM153.495 71.481C151.298 70.0974 148.877 69.3191 148.877 69.3191C149.309 69.3537 149.707 69.371 150.088 69.371C151.039 69.371 151.817 69.2499 152.457 69.0597C152.82 68.9559 153.149 68.8175 153.426 68.6792C155.449 67.6414 155.518 65.7909 155.518 65.7909C153.91 66.8805 152.492 67.261 151.177 67.261C149.482 67.261 147.943 66.6556 146.369 66.2059C145.902 66.0676 145.435 66.0157 144.986 66.0157C143.688 66.0157 142.564 66.5 141.924 66.8459C142.737 67.3474 143.429 67.9874 143.965 68.8002C144.173 69.1288 144.363 69.4574 144.519 69.7688C145.037 70.4779 145.366 71.1005 145.885 71.5156C147.078 72.5187 148.739 72.7262 150.243 72.83C154.809 73.1759 156.677 77.2922 156.677 77.2922C157.058 76.3409 156.988 75.4416 156.625 74.6287C156.054 73.3834 154.826 72.3284 153.495 71.481ZM78.5893 66.8459C77.9494 66.5 76.8425 66.0157 75.5281 66.0157C75.0784 66.0157 74.6287 66.0676 74.1444 66.2059C72.5533 66.6556 71.0313 67.261 69.3364 67.261C68.022 67.261 66.6038 66.8978 64.9953 65.7909C64.9953 65.7909 65.0818 67.6414 67.088 68.6792C67.3647 68.8175 67.6933 68.9559 68.0565 69.0597C68.6965 69.2499 69.4921 69.371 70.426 69.371C70.8065 69.371 71.2043 69.3537 71.6366 69.3191C71.6366 69.3191 69.2153 70.0974 67.0188 71.481C65.6871 72.3284 64.4592 73.3834 63.9057 74.6287C63.5425 75.4416 63.4733 76.3236 63.8538 77.2922C63.8538 77.2922 65.7044 73.1759 70.2876 72.83C71.7923 72.7089 73.4353 72.5014 74.646 71.5156C75.1649 71.0832 75.4935 70.4606 76.0123 69.7688C76.168 69.4401 76.3582 69.1288 76.5658 68.8002C77.0846 67.9874 77.7764 67.3301 78.5893 66.8459ZM51.4013 70.4433C51.3321 70.5989 51.2629 70.7546 51.1937 70.8929C51.0381 71.2907 50.917 71.6366 50.8651 71.9652C50.5192 73.8504 51.8683 74.4385 53.0789 74.7325L53.2346 73.0375C53.2519 72.9684 53.5805 72.8127 53.6497 72.7781C53.7534 72.7089 53.8745 72.6398 53.961 72.5533C54.1685 72.363 54.2377 72.1382 54.2723 71.8961C54.2896 71.7577 54.2896 71.6193 54.2896 71.4637C54.3069 71.2043 54.3415 70.9448 54.4798 70.7546C54.549 70.6681 54.6182 70.5989 54.7393 70.547C54.843 70.4952 54.9468 70.4779 55.0506 70.4779C55.1716 70.4779 55.2754 70.5124 55.3792 70.5643C55.604 70.6854 55.7943 70.9102 55.8289 71.187C55.8461 71.2907 55.8289 71.4291 55.8116 71.5675C55.7251 72.069 55.483 72.7608 55.7078 73.3662C55.8462 73.7639 56.3823 74.3001 56.9703 74.3001C57.1606 74.3001 57.3335 74.2482 57.5238 74.1271L58.7344 75.1994C60.3429 73.4353 59.8413 71.7404 58.0945 71.014C57.9562 70.9621 57.8351 70.8929 57.7313 70.8238C57.4027 70.5989 57.2125 70.3049 57.4027 69.9936C57.5411 69.7515 57.6967 69.665 57.9043 69.665C58.2156 69.665 58.6134 69.8552 59.2187 70.0974C59.2533 70.1147 59.2879 70.132 59.3398 70.1492C59.6684 70.2703 59.9797 70.3568 60.2737 70.3568C60.8963 70.3568 61.3979 69.9936 61.6573 68.9905C61.6746 68.904 61.6919 68.8002 61.7092 68.7138L62.1243 68.8867L62.8507 69.1807C62.8334 69.0596 62.8161 68.9213 62.7988 68.8002C62.7296 68.3851 62.5913 68.0392 62.4356 67.7452C61.8995 66.7594 60.9482 66.3616 59.9797 66.3616C58.7344 66.3616 57.4546 66.9842 56.9185 67.7798L54.6355 68.0911C54.1685 67.5031 54.1512 65.7736 54.2204 64.4245C54.2723 63.4387 54.9987 62.6431 55.9672 62.4875C57.6276 62.2454 60.1181 61.8822 61.0001 61.813C62.6777 61.6919 64.4246 61.3979 65.6871 60.1699C67.4166 58.4577 67.7971 56.6763 67.7971 54.2031C67.7971 53.3902 67.7625 52.5773 67.6933 51.7472C67.6415 51.0381 67.555 50.329 67.4858 49.6372C67.4339 49.1702 67.3647 48.7032 67.2956 48.2363C67.2264 47.8039 67.2264 47.3369 67.261 46.8872C67.2783 46.7143 67.2956 46.5586 67.3302 46.3857C67.4166 45.8841 67.555 45.3998 67.7452 44.8983C67.9528 44.3794 68.2468 43.8952 68.5927 43.4282C69.1461 42.7018 69.8725 42.0619 70.7892 41.543C71.1178 41.3528 71.5156 41.1279 71.9307 40.8685C72.3458 40.6091 72.7954 40.3324 73.2624 40.0038C74.4039 39.2428 75.6664 38.2915 76.8425 37.2019C76.756 37.15 76.6695 37.0982 76.5831 37.0463C76.1507 36.7869 74.9573 35.9048 73.8331 34.9709C73.5564 34.746 73.3143 34.5385 73.0894 34.3309L74.1617 33.7602C75.407 34.8152 76.7906 35.8529 77.1538 36.0605C77.3268 36.1642 77.4997 36.268 77.6727 36.3718C78.0013 36.562 78.3299 36.7523 78.6412 36.9252C80.4572 37.9629 81.7543 38.672 81.7197 39.8827C79.4714 42.304 80.6993 43.7395 81.9446 44.1719L82.3597 42.8402C83.6741 42.6153 83.6568 41.6468 83.7087 40.9031C83.7433 40.5053 84.0546 40.2805 84.3659 40.2805C84.6253 40.2805 84.8848 40.4534 84.9021 40.8512C84.9366 41.2836 84.9021 41.7333 85.0231 42.4424C85.1096 42.9266 85.6284 43.5839 86.3721 43.5839C86.4932 43.5839 86.6143 43.5666 86.7353 43.532L87.0121 45.1058C89.5718 44.6216 89.295 42.0792 87.5655 41.2144C86.5797 40.7129 86.2684 40.3497 86.5624 39.9692C86.6489 39.8481 86.7526 39.8135 86.8737 39.8135C87.2369 39.8135 87.7731 40.2113 88.2919 40.5918C88.5167 40.7647 88.8108 40.8512 89.1221 40.8512C89.7966 40.8512 90.523 40.4188 90.8343 39.3984L91.7682 39.9173C91.9239 37.9975 90.7305 37.0463 89.5199 37.0463C88.9491 37.0463 88.3611 37.2538 87.9114 37.6689C87.7385 37.8246 87.5655 37.8937 87.3926 37.8937C86.8391 37.8937 86.4586 37.2019 87.2023 36.8041C87.9114 36.4237 88.5859 35.2476 87.9287 34.5039L89.001 33.5008C88.5167 33.2067 87.9979 33.0684 87.5136 33.0684C86.4413 33.0684 85.4555 33.7602 85.1442 35.3341C85.075 35.6973 84.9193 35.8356 84.7118 35.8356C84.1238 35.8356 83.0861 34.5731 82.3078 33.3278C82.1175 33.0338 81.9446 32.7225 81.7716 32.4285C81.5468 32.0307 81.3047 31.6502 81.0452 31.2697C80.7166 30.7854 80.3707 30.3185 79.9383 29.9034C79.2119 29.177 77.9494 27.9144 76.4966 27.067C76.1507 26.8767 75.7875 26.6865 75.4243 26.5308C74.9919 25.9601 74.5595 25.372 74.179 24.7667C73.1586 23.2101 72.3112 21.5498 71.8269 19.803C72.6225 21.446 73.7294 22.8815 74.9573 24.1614C75.5281 24.7667 76.1161 25.3201 76.7387 25.8736C78.4164 26.7384 79.8173 28.1393 80.6474 28.9521L80.7685 29.0732C81.0106 29.3153 81.2355 29.5575 81.4257 29.8169C81.7024 28.122 81.6333 26.0293 81.0971 24.0403C80.9933 23.6598 80.8723 23.262 80.7339 22.8988C80.2324 21.5671 79.5233 20.3218 78.5374 19.336C78.278 19.0766 78.0013 18.8345 77.7073 18.6096C76.4274 17.6238 74.8017 17.0185 72.7608 17.0185C72.4668 17.0185 72.1728 17.0358 71.8615 17.0531L69.0943 15.7905C70.0801 15.8078 70.8757 15.8424 71.5156 15.8424C74.2828 15.8424 74.058 15.4619 73.6948 13.5248C73.6948 13.5248 71.3599 14.1648 69.5785 14.1648C69.4056 14.1648 69.2326 14.1648 69.077 14.1475C68.2122 14.0783 67.8317 13.6978 67.6933 13.2308C67.5204 12.6082 67.4685 11.6397 67.9528 10.429C68.2641 9.63342 69.0251 8.94161 70.1147 8.94161C70.9448 8.94161 71.948 9.3394 73.0894 10.3771L74.058 11.3456C74.5595 10.7576 74.9573 10.0831 75.2686 9.42588C75.4762 8.52653 74.5077 7.95579 74.5077 7.95579C75.4935 8.07686 75.9777 7.05644 76.1334 6.58947C75.0784 6.01873 73.5737 5.15397 71.9826 4.72159L71.5156 3.13043C70.9103 2.81912 64.9953 1.4528 63.4387 1.4528C63.3523 1.4528 63.3004 1.4528 63.2312 1.4701C63.1101 1.48739 62.9891 1.53928 62.9026 1.60846C63.2312 1.97166 63.5252 2.38674 63.7846 2.83642L62.7296 3.18232C62.1416 2.23109 61.3287 1.43551 60.6023 1.19337C59.6511 2.02354 58.5096 4.49675 61.0174 7.09103V8.59571L60.585 8.18063C59.9797 7.60989 59.5473 7.05644 59.2187 6.52029C54.428 16.8974 62.2973 25.4066 62.2454 29.0732C62.2454 29.0732 63.8884 29.0213 65.0126 28.5716C65.0126 28.5716 65.5142 32.1517 64.4073 35.0919C63.1274 38.5164 61.1039 41.5603 59.4781 44.8118C58.9247 45.9187 58.4404 47.0429 58.0426 48.2017C58.0253 48.2363 58.0253 48.2708 58.0081 48.3054C57.6794 49.0145 57.126 49.6372 56.5034 49.9831C56.4861 50.0004 56.4515 50.0004 56.4342 50.0177C55.6213 50.4327 54.6701 50.3809 53.8745 49.8966C53.0962 49.4296 52.6811 48.634 52.6984 47.752C52.7503 45.7803 53.9091 44.3275 55.1543 42.7883C55.8116 41.9581 56.5034 41.1106 57.0395 40.1421C58.7172 37.1155 59.1322 33.691 58.2329 30.232C57.8178 28.6408 56.8839 27.2399 55.9845 25.8736C55.777 25.5623 55.5867 25.2683 55.3792 24.9569C55.2927 24.8359 55.2235 24.7148 55.1543 24.5938C55.5867 24.196 55.6732 23.7117 55.5348 23.0718C55.4138 22.4837 55.1025 21.7746 54.722 20.8926C54.2896 19.9241 53.788 18.8172 53.5459 17.6584C53.1481 15.7905 53.1481 14.2858 53.3902 12.7984C53.027 13.3865 52.7157 14.0091 52.4563 14.649C52.1623 15.3754 51.9547 16.1364 51.851 16.932C51.7472 17.7276 51.7472 18.5404 51.8683 19.3533C51.5915 18.5923 51.4186 17.7622 51.3667 16.932C51.3148 16.0845 51.3667 15.2371 51.5224 14.4069C51.6607 13.6459 51.8683 12.8849 52.145 12.1585C50.9516 13.9053 50.3463 16.0326 50.3117 18.5923C50.2771 21.8092 51.384 24.5073 52.439 25.1472C52.5774 25.2337 52.6984 25.2856 52.8195 25.3201C53.2692 25.4239 53.961 25.1126 53.961 25.1126C54.2723 25.6315 54.5836 26.0984 54.9122 26.6C55.7943 27.9317 56.6244 29.1943 56.9876 30.5606C57.8005 33.7256 57.4546 36.735 55.9153 39.5022C55.4311 40.367 54.7911 41.1798 54.1512 41.9581C52.8368 43.6012 51.4705 45.2961 51.4186 47.7001C51.384 49.0491 52.0585 50.2771 53.2173 50.9862C53.8399 51.3667 54.5663 51.5742 55.2927 51.5742C55.6213 51.5742 55.9672 51.5223 56.2958 51.4532C56.5898 51.3667 56.8839 51.2629 57.1606 51.1073C57.2471 51.0554 57.3335 51.0035 57.42 50.9516C57.3681 51.3667 57.3508 51.7991 57.3681 52.2142C57.3681 52.3179 57.3854 52.439 57.3854 52.5428C57.4373 53.2519 57.5411 53.9783 57.593 54.6874C57.6794 55.604 57.8351 55.7078 57.5584 56.6071C57.2298 57.6448 55.8289 58.2675 54.3761 58.5961C53.4594 58.8036 52.2142 58.9939 51.2456 59.1149C50.3809 59.236 49.741 59.9451 49.6891 60.8098C49.568 62.9372 49.395 66.7075 49.5507 67.7625C49.6545 68.9386 50.3463 69.9244 51.4013 70.4433ZM71.2216 4.98102C71.2216 5.96684 70.8584 7.00455 69.2672 6.93537C69.2672 6.93537 68.8521 6.20898 67.6588 5.01561C67.6415 5.01561 69.6304 5.4134 71.2216 4.98102ZM67.7106 19.8203C68.1084 20.5986 68.5235 21.3596 68.9732 22.0859C69.4402 22.8123 69.9417 23.4869 70.4952 24.1441C70.9794 24.7321 71.4983 25.3374 71.9999 25.9255C71.4291 25.9601 70.8584 26.0811 70.253 26.2887C69.9763 25.8217 69.6996 25.3547 69.4229 24.8878C68.9732 24.1268 68.5581 23.3139 68.1949 22.4837C67.849 21.6536 67.555 20.8234 67.2956 19.9759C67.0188 19.1458 66.7767 18.2983 66.5346 17.4508C66.9324 18.2464 67.3129 19.042 67.7106 19.8203ZM65.0472 25.4758C64.4764 24.317 63.9403 23.141 63.4906 21.9303C63.0236 20.7196 62.6432 19.4744 62.3318 18.2291C62.0378 16.9666 61.8303 15.704 61.7092 14.4242C61.9859 15.6694 62.3318 16.8974 62.7642 18.0908C63.1966 19.2841 63.7155 20.4429 64.2862 21.5671C65.3585 23.6252 66.6383 25.5796 67.9701 27.4993C67.3993 27.8279 66.8805 28.0528 66.4481 28.1911C65.9638 27.2918 65.4969 26.3924 65.0472 25.4758ZM97.7524 5.11938H98.9457C99.2571 6.1225 99.7586 6.96996 100.381 7.59259H102.803C102.197 7.24669 101.644 6.67595 101.211 5.91496C100.554 4.79077 100.174 3.35527 100.156 1.86789H96.732C96.7147 3.35527 96.3342 4.79077 95.6769 5.91496C95.2273 6.67595 94.6911 7.24669 94.0858 7.59259H96.3515C96.9395 6.96996 97.4411 6.1225 97.7524 5.11938ZM90.7651 7.59259H91.0245C90.4192 7.24669 89.8658 6.67595 89.4334 5.91496C88.7762 4.79077 88.3957 3.35527 88.3784 1.86789H85.6976C85.6803 2.02354 85.6803 2.1792 85.6803 2.35215C85.6457 5.18856 87.9979 7.59259 90.7651 7.59259ZM109.686 5.11938H110.879C111.191 6.1225 111.692 6.96996 112.315 7.59259H114.892C114.287 7.24669 113.75 6.67595 113.301 5.91496C112.644 4.79077 112.263 3.35527 112.246 1.86789H108.51C108.493 3.35527 108.112 4.79077 107.455 5.91496C107.005 6.67595 106.469 7.24669 105.864 7.59259H108.285C108.873 6.96996 109.375 6.1225 109.686 5.11938ZM66.3616 70.6162C66.6902 70.4087 67.0361 70.2011 67.4166 69.9936C67.3302 69.959 67.261 69.9244 67.1745 69.9071C67.0015 69.8379 66.8459 69.7688 66.6902 69.6996C65.5487 69.2499 64.6494 68.9905 63.9057 68.8694C63.9057 68.9386 63.923 68.9905 63.923 69.0597L64.1132 70.8584L62.4356 70.1665L62.3664 70.1492C62.2454 70.3741 62.107 70.5643 61.9513 70.7373C61.519 71.187 60.9482 71.4291 60.3083 71.4291C60.5158 71.7404 60.6542 72.0863 60.7407 72.4495C61.0001 73.591 60.5677 74.8362 59.5646 75.9431L58.8382 76.7387L58.0426 76.0296L57.2989 75.3724C57.1952 75.3897 57.0914 75.3897 56.9876 75.3897C55.9326 75.3897 54.9987 74.5595 54.7047 73.7466C54.6701 73.6429 54.6355 73.5391 54.6182 73.4353C54.5144 73.5218 54.3934 73.6083 54.2896 73.6775L54.1685 74.8535L54.0475 76.1161L52.8195 75.8048C51.9029 75.5799 50.6057 75.113 50.0177 73.8677C49.741 73.2797 49.6718 72.6225 49.7928 71.8788C47.1121 71.5675 45.0021 70.8584 45.0021 70.8584C46.5413 75.4762 50.917 78.0704 55.1543 78.0704C57.6276 78.0704 60.0489 77.1884 61.813 75.2859C62.2454 74.8362 62.6259 74.4039 63.0064 74.0234C63.5944 72.8127 64.7186 71.6712 66.3616 70.6162ZM121.81 5.11938H123.003C123.315 6.1225 123.816 6.96996 124.439 7.59259H126.808C126.203 7.24669 125.649 6.67595 125.217 5.91496C124.56 4.79077 124.179 3.35527 124.162 1.86789H120.617C120.599 3.35527 120.219 4.79077 119.562 5.91496C119.112 6.67595 118.576 7.22939 117.97 7.59259H120.392C120.997 6.96996 121.499 6.1225 121.81 5.11938ZM80.0767 19.4398C80.682 20.2354 81.1836 21.1347 81.5641 22.0687L83.5184 20.2008C83.3109 19.6646 83.2417 19.042 83.3109 18.4021C83.3109 18.3675 83.3282 18.3329 83.3282 18.281L84.3659 18.7826C84.3313 19.5609 84.6253 20.3737 85.3344 20.7542C85.5593 20.8753 85.7495 20.9272 86.0089 20.9272C86.0089 20.9272 86.0089 20.9272 86.0262 20.9272L85.9917 19.9759C86.3376 19.9759 86.8045 19.6127 86.8045 19.1112C86.8045 18.5404 86.4413 18.2291 85.9917 18.0908V16.9839C86.8564 17.1395 87.4963 17.6584 87.7558 18.3675L88.8972 18.3848C88.9491 17.52 88.534 16.7417 87.652 16.4477V15.3235C88.3957 15.4792 88.8799 15.8424 89.174 16.171C89.2604 16.2575 89.3296 16.3612 89.4161 16.465L90.2809 16.4823C90.3154 15.6521 89.9004 14.9085 89.1221 14.649V13.5248C89.6063 13.6286 90.0214 13.8189 90.3846 14.1302H91.1975C91.1802 13.594 90.8689 13.0752 90.4365 12.7466C90.0733 12.4871 89.6063 12.3315 89.1394 12.2623C88.9664 12.245 88.7762 12.2277 88.6032 12.2277C88.413 12.2277 88.24 12.245 88.0498 12.2796C87.5828 12.3488 87.1158 12.539 86.718 12.7984C86.0262 13.2654 85.369 13.8016 84.7291 14.3377C83.6914 15.2025 82.6883 16.1191 81.5987 16.932C81.2528 17.1914 80.1978 17.987 79.3676 18.6269C79.627 18.9036 79.8519 19.1631 80.0767 19.4398ZM80.682 11.2765C80.8377 10.4463 80.4226 9.84096 79.6097 9.65072C79.5751 9.65072 79.5405 9.63342 79.506 9.63342C79.6962 10.3425 79.6097 11.1208 79.1428 11.8818C78.7969 12.4179 78.2607 12.833 77.5862 13.0752C77.811 13.1098 78.0359 13.1098 78.2434 13.1098C79.6789 13.1098 80.4572 12.5217 80.682 11.2765Z",
        fill: "white"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M66.5691 89.1393C65.2201 89.1393 64.217 89.6582 63.5598 90.6959C62.9544 89.6582 62.0205 89.1393 60.7753 89.1393C59.53 89.1393 58.5961 89.6236 57.9734 90.5748V89.3988H55.8461V99.2051H57.9734V93.7053C57.9734 92.8578 58.181 92.2179 58.5788 91.7682C58.9766 91.3358 59.5127 91.111 60.1526 91.111C60.7407 91.111 61.1903 91.3012 61.5189 91.6644C61.8476 92.0449 62.0032 92.5638 62.0032 93.2383V99.1878H64.1305V93.688C64.1305 92.8232 64.3208 92.1833 64.7013 91.7509C65.0818 91.3185 65.6006 91.111 66.2578 91.111C66.8459 91.111 67.3128 91.3012 67.6587 91.6644C68.0046 92.0449 68.1776 92.5638 68.1776 93.2383V99.1878H70.3049V93.0999C70.3049 91.8893 69.959 90.9207 69.2845 90.1943C68.5754 89.5025 67.676 89.1393 66.5691 89.1393Z",
        fill: "#CC0000"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M180.06 89.1393C178.676 89.1393 177.656 89.6409 177.016 90.644V85.4555H174.889V99.1878H177.016V93.9301C177.016 92.9789 177.241 92.2698 177.708 91.8028C178.158 91.3358 178.763 91.111 179.507 91.111C180.181 91.111 180.717 91.3012 181.115 91.699C181.513 92.0968 181.703 92.6502 181.703 93.3939V99.2051H183.83V93.1864C183.83 91.9238 183.484 90.938 182.793 90.2289C182.084 89.5025 181.184 89.1393 180.06 89.1393Z",
        fill: "#CC0000"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M36.1988 94.1203H40.7993C40.5918 95.0716 40.1075 95.8326 39.3292 96.4033C38.5683 96.9741 37.5651 97.2508 36.3545 97.2508C34.8325 97.2508 33.6045 96.7838 32.6706 95.8499C31.7367 94.9159 31.2697 93.7572 31.2697 92.3389C31.2697 90.9207 31.7367 89.7447 32.6706 88.8107C33.6045 87.8768 34.7806 87.3925 36.2161 87.3925C37.0982 87.3925 37.911 87.6001 38.6374 87.9979C39.3638 88.3956 39.9 88.9318 40.2632 89.5717L41.8198 87.8941C41.2663 87.1677 40.5745 86.5451 39.727 86.0781C38.672 85.4901 37.496 85.196 36.2161 85.196C34.1753 85.196 32.4631 85.8878 31.0794 87.2715C29.6958 88.6551 29.004 90.3327 29.004 92.3216C29.004 94.3279 29.6958 96.0055 31.0794 97.3891C32.4631 98.7555 34.2099 99.4473 36.3372 99.4473C38.3434 99.4473 39.9692 98.8419 41.1971 97.6486C42.4424 96.4552 43.065 94.9159 43.065 93.0307V92.1141H36.1988V94.1203Z",
        fill: "#CC0000"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M191.233 91.4396V89.3988H188.794V86.6488H186.667V89.3988H184.868V91.4396H186.667V96.1439C186.667 97.4237 187.013 98.3058 187.722 98.79C188.431 99.2743 189.59 99.4127 191.215 99.2051V97.3027C190.679 97.3373 190.23 97.3372 189.866 97.32C189.503 97.3027 189.226 97.1989 189.054 97.0259C188.863 96.853 188.777 96.559 188.777 96.1439V91.4396C188.777 91.4396 191.233 91.4396 191.233 91.4396Z",
        fill: "#CC0000"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M49.4642 89.1393C47.9422 89.1393 46.697 89.6409 45.7285 90.6267C44.7772 91.6126 44.293 92.8405 44.293 94.3106C44.293 95.798 44.7772 97.0432 45.7631 98.0118C46.7489 98.9803 48.0287 99.4819 49.6372 99.4819C51.3321 99.4819 52.6638 98.8938 53.6151 97.7523L52.1796 96.3168C51.6088 97.1297 50.7787 97.5275 49.6545 97.5275C48.8416 97.5275 48.1498 97.32 47.5963 96.9222C47.0256 96.5244 46.6797 95.9536 46.524 95.21H54.3415C54.3933 94.8468 54.4279 94.5527 54.4279 94.3279C54.4279 92.8924 53.961 91.6644 53.0443 90.6613C52.0931 89.6409 50.8997 89.1393 49.4642 89.1393ZM46.4895 93.4804C46.6278 92.7367 46.9737 92.1487 47.4926 91.7163C48.0114 91.2839 48.6686 91.0764 49.4469 91.0764C50.1387 91.0764 50.7441 91.2839 51.2629 91.6817C51.7818 92.0795 52.1104 92.6849 52.2487 93.4804H46.4895Z",
        fill: "#CC0000"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M76.9117 89.1393C75.3897 89.1393 74.1445 89.6409 73.1759 90.6267C72.2074 91.6126 71.7231 92.8405 71.7231 94.3106C71.7231 95.798 72.2074 97.0432 73.1932 98.0118C74.1791 98.9803 75.4589 99.4819 77.0674 99.4819C78.7623 99.4819 80.094 98.8938 81.0452 97.7523L79.6097 96.3168C79.039 97.1297 78.2088 97.5275 77.0846 97.5275C76.2718 97.5275 75.58 97.32 75.0265 96.9222C74.4558 96.5244 74.1099 95.9536 73.9542 95.21H81.7716C81.8235 94.8468 81.8581 94.5527 81.8581 94.3279C81.8581 92.8924 81.3911 91.6644 80.4745 90.6613C79.5233 89.6409 78.3472 89.1393 76.9117 89.1393ZM73.9196 93.4804C74.058 92.7367 74.4039 92.1487 74.9227 91.7163C75.4416 91.2839 76.0988 91.0764 76.8771 91.0764C77.5689 91.0764 78.1742 91.2839 78.6931 91.6817C79.212 92.0795 79.5406 92.6849 79.6789 93.4804H73.9196Z",
        fill: "#CC0000"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M87.9806 89.1393C86.4586 89.1393 85.2133 89.6409 84.2448 90.6267C83.2763 91.6126 82.792 92.8405 82.792 94.3106C82.792 95.798 83.2763 97.0432 84.2621 98.0118C85.2479 98.9803 86.5278 99.4819 88.1362 99.4819C89.8311 99.4819 91.1629 98.8938 92.1141 97.7523L90.6786 96.3168C90.1079 97.1297 89.2777 97.5275 88.1535 97.5275C87.3406 97.5275 86.6488 97.32 86.0954 96.9222C85.5246 96.5244 85.1787 95.9536 85.0231 95.21H92.8405C92.8924 94.8468 92.927 94.5527 92.927 94.3279C92.927 92.8924 92.46 91.6644 91.5434 90.6613C90.6094 89.6409 89.4333 89.1393 87.9806 89.1393ZM85.0058 93.4804C85.1441 92.7367 85.49 92.1487 86.0089 91.7163C86.5278 91.2839 87.185 91.0764 87.9633 91.0764C88.6551 91.0764 89.2604 91.2839 89.7793 91.6817C90.2981 92.0795 90.6267 92.6849 90.7651 93.4804H85.0058Z",
        fill: "#CC0000"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M116.777 89.1393C115.255 89.1393 114.01 89.6409 113.041 90.6267C112.073 91.6126 111.589 92.8405 111.589 94.3106C111.589 95.798 112.073 97.0432 113.059 98.0118C114.044 98.9803 115.324 99.4819 116.933 99.4819C118.628 99.4819 119.959 98.8938 120.911 97.7523L119.475 96.3168C118.904 97.1297 118.074 97.5275 116.95 97.5275C116.137 97.5275 115.445 97.32 114.892 96.9222C114.321 96.5244 113.975 95.9536 113.82 95.21H121.637C121.689 94.8468 121.723 94.5527 121.723 94.3279C121.723 92.8924 121.257 91.6644 120.34 90.6613C119.406 89.6409 118.213 89.1393 116.777 89.1393ZM113.802 93.4804C113.941 92.7367 114.287 92.1487 114.805 91.7163C115.324 91.2839 115.981 91.0764 116.76 91.0764C117.452 91.0764 118.057 91.2839 118.576 91.6817C119.095 92.0795 119.423 92.6849 119.562 93.4804H113.802Z",
        fill: "#CC0000"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M158.199 89.1393C156.677 89.1393 155.432 89.6409 154.463 90.6267C153.495 91.6126 153.01 92.8405 153.01 94.3106C153.01 95.798 153.495 97.0432 154.481 98.0118C155.466 98.9803 156.746 99.4819 158.355 99.4819C160.05 99.4819 161.381 98.8938 162.333 97.7523L160.897 96.3168C160.326 97.1297 159.496 97.5275 158.372 97.5275C157.559 97.5275 156.867 97.32 156.314 96.9222C155.743 96.5244 155.397 95.9536 155.242 95.21H163.059C163.111 94.8468 163.145 94.5527 163.145 94.3279C163.145 92.8924 162.678 91.6644 161.762 90.6613C160.828 89.6409 159.652 89.1393 158.199 89.1393ZM155.224 93.4804C155.363 92.7367 155.708 92.1487 156.227 91.7163C156.746 91.2839 157.403 91.0764 158.182 91.0764C158.873 91.0764 159.479 91.2839 159.998 91.6817C160.517 92.0795 160.845 92.6849 160.984 93.4804H155.224Z",
        fill: "#CC0000"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M108.337 86.6488H106.21V89.3988H104.411V91.4396H106.21V96.1439C106.21 97.4237 106.556 98.3058 107.265 98.79C107.974 99.2743 109.133 99.4127 110.758 99.2051V97.3027C110.222 97.3373 109.772 97.3372 109.409 97.32C109.046 97.3027 108.769 97.1989 108.596 97.0259C108.406 96.853 108.32 96.559 108.32 96.1439V91.4396H110.758V89.3988H108.32L108.337 86.6488C108.337 86.6488 108.32 86.6488 108.337 86.6488Z",
        fill: "#CC0000"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M135.819 94.5181C135.819 95.3483 135.577 96.0228 135.075 96.5244C134.591 97.0259 133.847 97.2681 132.862 97.2681C131.876 97.2681 131.149 97.0259 130.648 96.5244C130.164 96.0228 129.904 95.3656 129.904 94.5181V85.4728H127.638V94.6565C127.638 96.1266 128.123 97.2854 129.091 98.1674C130.06 99.0322 131.305 99.4646 132.844 99.4646C134.384 99.4646 135.629 99.0322 136.597 98.1674C137.566 97.3027 138.05 96.1266 138.05 94.6565V85.4728H135.785V94.5181H135.819Z",
        fill: "#CC0000"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M143.36 86.6488H141.232V89.3988H139.434V91.4396H141.232V96.1439C141.232 97.4237 141.578 98.3058 142.287 98.79C142.996 99.2743 144.155 99.4127 145.781 99.2051V97.3027C145.245 97.3373 144.795 97.3372 144.432 97.32C144.069 97.3027 143.792 97.1989 143.619 97.0259C143.429 96.853 143.342 96.559 143.342 96.1439V91.4396H145.781V89.3988H143.342V86.6488H143.36Z",
        fill: "#CC0000"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M99.6029 89.1393C98.2193 89.1393 97.1989 89.6409 96.559 90.644V89.3815H94.4316V99.1878H96.559V93.9301C96.559 92.9789 96.7838 92.2698 97.2508 91.8028C97.7004 91.3358 98.3058 91.111 99.0495 91.111C99.724 91.111 100.26 91.3012 100.658 91.699C101.056 92.0968 101.246 92.6503 101.246 93.394V99.2051H103.373V93.1864C103.373 91.9239 103.027 90.938 102.336 90.2289C101.626 89.5025 100.727 89.1393 99.6029 89.1393Z",
        fill: "#CC0000"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M149.655 91.0418V89.3987H147.528V99.2051H149.655V94.2587C149.655 93.2556 149.949 92.5292 150.555 92.0968C151.16 91.6644 151.869 91.4742 152.682 91.5261V89.2258C151.195 89.2258 150.191 89.8311 149.655 91.0418Z",
        fill: "#CC0000"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M172.122 95.798C171.672 96.7319 170.807 97.3546 169.752 97.5102C169.735 97.5102 169.718 97.5102 169.7 97.5102C169.562 97.5275 169.406 97.5448 169.251 97.5448C167.521 97.5448 166.189 96.2131 166.189 94.3106C166.189 92.4081 167.521 91.0764 169.251 91.0764C169.406 91.0764 169.545 91.0937 169.683 91.111C169.7 91.111 169.718 91.111 169.735 91.111C170.79 91.2494 171.637 91.872 172.104 92.7713L173.522 91.3531C172.589 90.0041 171.032 89.1566 169.251 89.1566C166.38 89.1566 164.097 91.405 164.097 94.3279C164.097 97.2335 166.38 99.4819 169.251 99.4819C171.049 99.4819 172.606 98.5998 173.54 97.2508L172.122 95.798Z",
        fill: "#CC0000"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M110.274 13.0405C111.974 13.0405 113.353 12.3514 113.353 11.5013C113.353 10.6512 111.974 9.96201 110.274 9.96201C108.574 9.96201 107.196 10.6512 107.196 11.5013C107.196 12.3514 108.574 13.0405 110.274 13.0405Z",
        fill: "#CC0000"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M101.471 11.5013L98.0118 9.75447L94.5355 11.5013L98.0118 13.2308L101.471 11.5013Z",
        fill: "#CC0000"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M126.013 11.5013L122.536 9.75447L119.077 11.5013L122.536 13.2308L126.013 11.5013Z",
        fill: "#CC0000"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M175.183 69.8206C175.148 69.8379 173.125 70.4951 170.565 70.7892C171.395 70.0801 171.949 69.0769 172.122 67.9355C172.243 67.0707 172.208 64.6494 171.983 60.7753C171.914 59.3916 170.859 58.2502 169.493 58.0772C168.213 57.9043 167.158 57.7313 166.449 57.5756C164.979 57.247 164.183 56.7109 164.079 56.3304C163.941 55.9153 163.958 55.8634 164.01 55.4829C164.028 55.31 164.062 55.1024 164.097 54.8257C164.131 54.5144 164.149 54.2204 164.2 53.8918C164.252 53.494 164.287 53.0789 164.322 52.6638C164.322 52.6465 164.322 52.6119 164.322 52.5946C164.65 52.6638 164.996 52.6984 165.325 52.6984C166.241 52.6984 167.158 52.4563 167.954 51.9547C169.441 51.0381 170.306 49.4642 170.271 47.7174C170.202 44.9502 168.663 43.0131 167.296 41.3182C166.674 40.5399 166.068 39.7962 165.636 39.0179C164.235 36.4928 163.906 33.7602 164.667 30.8719C164.979 29.6785 165.757 28.4852 166.587 27.2399C166.76 26.9805 166.933 26.7038 167.106 26.4443C167.227 26.4616 167.348 26.4789 167.469 26.4789C167.988 26.4789 168.42 26.306 168.732 26.1157C170.721 24.8878 171.413 20.8753 171.378 18.6269C171.326 13.9226 169.475 10.5328 165.757 8.26709L164.477 7.48881L164.961 8.90702C166.086 12.1758 166.691 14.1993 165.982 17.4854C165.757 18.5404 165.307 19.5436 164.875 20.5121C164.2 22.0341 163.543 23.5041 164.114 24.6975C163.976 24.9051 163.837 25.1299 163.699 25.3374C162.748 26.7729 161.762 28.2603 161.312 30.0244C160.344 33.7602 160.793 37.4614 162.609 40.7301C163.18 41.7679 163.906 42.6672 164.598 43.532C165.757 44.9848 166.777 46.23 166.812 47.8385C166.829 48.513 166.397 48.8762 166.155 49.0318C165.671 49.3258 165.1 49.3431 164.598 49.0837C164.2 48.8762 163.82 48.4611 163.578 47.9768C163.197 46.8526 162.713 45.6766 162.056 44.3794C161.468 43.2034 160.828 42.0446 160.205 40.9204C159.064 38.845 157.974 36.8906 157.179 34.7633C156.573 33.1203 156.504 31.2351 156.539 30.0244C157.403 30.1801 158.164 30.2147 158.303 30.2147L159.427 30.2493L159.41 29.1251C159.392 28.2776 160.067 26.8075 160.828 25.0953C162.921 20.4602 166.086 13.4729 162.021 5.46528C161.987 5.41339 161.969 5.34421 161.935 5.29232C162.108 4.73888 162.16 4.23732 162.142 3.82223C162.125 2.28296 161.364 1.0723 160.672 0.449675L160.188 0.0172952L159.583 0.224837C159.185 0.363199 158.804 0.605331 158.424 0.899349C158.164 0.657217 157.836 0.484265 157.455 0.432379C157.352 0.415084 157.248 0.415084 157.109 0.415084C155.432 0.415084 149.327 1.7987 148.531 2.21378L148.116 2.42132L147.978 2.871L147.684 3.89142C146.335 4.34109 145.107 5.0156 144.19 5.51716C144.069 5.58634 143.948 5.65552 143.827 5.70741L143.135 6.0879L143.291 6.86619C143.308 6.98725 143.913 10.0312 145.677 12.0893L145.764 12.1758C145.331 12.2104 144.951 12.245 144.605 12.245C143.55 12.245 142.72 11.9337 142.322 11.311C141.699 10.3425 142.149 9.30481 142.876 8.76865C142.478 8.5957 142.097 8.49193 141.63 8.49193C141.354 8.49193 141.042 8.52652 140.696 8.613C139.313 8.92431 138.534 10.0831 138.794 11.484C139.088 13.1616 140.264 14.1993 142.305 14.1993C142.72 14.1993 143.152 14.1647 143.636 14.0783C144.328 13.9572 145.037 13.7497 145.746 13.5248C145.746 13.5594 145.729 13.5767 145.729 13.6113C145.556 14.5798 145.401 15.41 145.937 16.0845C144.449 16.3612 143.1 16.9839 141.959 17.9178C141.025 17.2087 139.762 16.2575 139.572 16.1018C138.828 15.5484 138.137 14.943 137.393 14.3204C137.099 14.061 136.788 13.8016 136.476 13.5421C135.836 13.006 135.145 12.4525 134.401 11.9337C133.847 11.5532 133.208 11.311 132.516 11.2246V8.16332C134.712 7.19479 136.251 4.96372 136.251 2.42132C136.251 1.85058 136.182 1.31443 136.027 0.795578H131.374C131.409 1.10689 131.426 1.4182 131.426 1.74681C131.426 4.51404 130.042 6.95266 128.33 6.95266C126.618 6.95266 125.234 4.51404 125.234 1.74681C125.234 1.4182 125.252 1.10689 125.286 0.795578H119.458C119.492 1.10689 119.51 1.4182 119.51 1.74681C119.51 4.51404 118.126 6.95266 116.414 6.95266C114.702 6.95266 113.318 4.51404 113.318 1.74681C113.318 1.4182 113.335 1.10689 113.37 0.795578H107.351C107.386 1.10689 107.403 1.4182 107.403 1.74681C107.403 4.51404 106.019 6.95266 104.307 6.95266C102.595 6.95266 101.211 4.51404 101.211 1.74681C101.211 1.4182 101.229 1.10689 101.263 0.795578H95.5732C95.6078 1.10689 95.6251 1.4182 95.6251 1.74681C95.6251 4.51404 94.2415 6.95266 92.5292 6.95266C90.817 6.95266 89.4334 4.51404 89.4334 1.74681C89.4334 1.4182 89.4507 1.10689 89.4853 0.795578H84.7637C84.6253 1.29714 84.5562 1.81599 84.5562 2.35214C84.5562 4.80806 85.9917 7.00455 88.0498 8.04226V11.2246C87.358 11.311 86.6835 11.5532 86.1127 11.951C85.369 12.4525 84.6772 13.0233 84.0373 13.5594C83.726 13.8188 83.432 14.0783 83.1207 14.3377C82.377 14.9603 81.6852 15.5657 80.9415 16.1191C80.7512 16.2575 79.4887 17.2087 78.5547 17.9351C77.4132 17.0012 76.0815 16.3785 74.5768 16.1018C75.113 15.41 74.9573 14.5798 74.7844 13.6286C74.7844 13.6113 74.7671 13.5767 74.7671 13.5421C75.4762 13.7843 76.1853 13.9745 76.8771 14.0956C77.3614 14.182 77.7937 14.2166 78.2088 14.2166C80.2497 14.2166 81.4257 13.1789 81.7197 11.5013C81.9792 10.1004 81.2009 8.94161 79.8173 8.63029C79.4714 8.56111 79.1601 8.50923 78.8833 8.50923C78.4164 8.50923 78.0359 8.613 77.6381 8.78595C78.3645 9.3221 78.8142 10.3598 78.1915 11.3283C77.7937 11.9683 76.9463 12.2623 75.9086 12.2623C75.5454 12.2623 75.1649 12.2277 74.7844 12.1585L74.8709 12.072C76.635 10.0139 77.2403 6.98725 77.2576 6.84889L77.4132 6.07061L76.7214 5.69011C76.6004 5.62093 76.4793 5.56905 76.3582 5.49987C75.4243 4.99831 74.2136 4.32379 72.8646 3.87412L72.5706 2.8537L72.4322 2.40403L72.0171 2.19649C71.2216 1.7814 65.1164 0.397789 63.4387 0.397789C63.3177 0.397789 63.1966 0.397789 63.0928 0.415084C62.7123 0.46697 62.3837 0.639922 62.1243 0.882054C61.7438 0.570741 61.346 0.345904 60.9655 0.207542L60.3602 0L59.8586 0.397789C59.1668 1.02042 58.4058 2.23108 58.3885 3.77035C58.3885 4.18543 58.4404 4.68699 58.5961 5.24044C58.5615 5.30962 58.5269 5.36151 58.5096 5.41339C54.4452 13.4211 57.6103 20.4083 59.703 25.0434C60.464 26.7383 61.1385 28.2084 61.1212 29.0732L61.1039 30.1974L62.2281 30.1628C62.3491 30.1628 63.1101 30.1282 63.9922 29.9725C64.0268 31.1832 63.9749 33.0857 63.3523 34.7114C62.5567 36.8387 61.4671 38.7931 60.3256 40.8685C59.703 41.9927 59.0631 43.1515 58.475 44.3275C57.8351 45.6247 57.3335 46.8008 56.953 47.9249C56.7109 48.4092 56.3477 48.8243 55.9326 49.0318C55.4311 49.2913 54.8603 49.274 54.3761 48.9799C54.1166 48.8243 53.7016 48.4611 53.7188 47.7866C53.7534 46.1954 54.7566 44.9329 55.9326 43.4801C56.6244 42.6153 57.3335 41.7333 57.9216 40.6783C59.7376 37.4095 60.1872 33.7083 59.2187 29.9725C58.769 28.2084 57.7832 26.7211 56.832 25.2856C56.6936 25.078 56.5553 24.8532 56.4169 24.6456C56.9876 23.4523 56.3477 21.9822 55.6559 20.4602C55.2235 19.4917 54.7739 18.4885 54.549 17.4335C53.8399 14.1302 54.4452 12.1239 55.5694 8.85513L56.0537 7.43693L54.7739 8.21521C51.0554 10.4809 49.2048 13.8707 49.1529 18.575C49.1183 20.8234 49.8274 24.8532 51.7991 26.0638C52.1104 26.2541 52.5255 26.427 53.0616 26.427C53.1827 26.427 53.2865 26.4097 53.4248 26.3924C53.5978 26.6519 53.7707 26.9286 53.9437 27.188C54.7739 28.4333 55.5521 29.6266 55.8634 30.82C56.6071 33.7083 56.2785 36.4582 54.8949 38.966C54.4625 39.7443 53.8745 40.488 53.2346 41.2663C51.8683 42.9612 50.329 44.881 50.2598 47.6655C50.2252 49.395 51.09 50.9862 52.5774 51.9028C53.3729 52.4044 54.2896 52.6465 55.2062 52.6465C55.5521 52.6465 55.8807 52.6119 56.2094 52.5427C56.2094 52.56 56.2094 52.5946 56.2094 52.6119C56.2439 53.027 56.2785 53.4421 56.3304 53.8399C56.365 54.1685 56.3996 54.4625 56.4342 54.7738C56.4515 55.0506 56.4861 55.2581 56.5207 55.4311C56.5726 55.7943 56.5898 55.8634 56.4515 56.2785C56.3304 56.659 55.5521 57.1952 54.082 57.5238C53.3729 57.6794 52.3179 57.8524 51.0381 58.0253C49.6718 58.2156 48.6168 59.3571 48.5476 60.7234C48.34 64.5975 48.2882 67.0188 48.4092 67.8836C48.5822 69.0251 49.1356 70.0282 49.9658 70.7373C47.4061 70.4433 45.3653 69.7687 45.348 69.7687L43.2899 69.0769L43.9817 71.1351C44.7945 73.5564 46.3338 75.5972 48.4611 77.0327C50.4328 78.3645 52.8022 79.0909 55.1543 79.0909C58.0253 79.0909 60.6369 78.0186 62.5221 76.0642C62.5394 76.6003 62.6432 77.1192 62.8507 77.6554L63.8019 80.0248L64.8569 77.7072C64.9261 77.5689 66.5346 74.179 70.3741 73.885C72.0171 73.7639 73.885 73.5218 75.3378 72.3111C75.3378 72.3111 75.3378 72.3111 75.3551 72.3111C75.3551 72.7089 75.3897 73.0894 75.4935 73.4699C76.0123 75.6145 77.8629 76.7041 77.9321 76.7387L79.6443 77.7245L79.5406 75.7529C79.506 74.9054 79.4541 73.9369 79.6962 73.1413C80.1286 71.7058 81.6333 71.1697 82.4807 70.9621C82.6883 70.9102 82.8958 70.8583 83.0861 70.8238C84.487 70.5124 85.6285 70.253 86.8045 69.5612C86.303 70.547 86.0954 71.5502 86.1992 72.5706C86.4413 75.113 88.5167 76.7041 88.6032 76.7733L90.9727 78.5547L90.3154 75.6664C90.0733 74.5595 89.8831 72.0344 90.9035 71.3772C92.166 70.547 93.1173 70.4433 94.2242 70.3222C95.1408 70.2184 96.1266 70.0974 97.2854 69.5958C96.3861 71.5847 96.7666 73.2105 96.8011 73.297L97.3546 75.4935L98.7209 73.6775C98.7382 73.6429 101.298 70.3395 104.93 70.3395C107.559 70.3395 109.686 71.6366 109.703 71.6539L110.274 71.9998L110.845 71.6539C110.862 71.6366 112.989 70.3395 115.618 70.3395C119.25 70.3395 121.81 73.6602 121.827 73.6775L123.194 75.4935L123.747 73.297C123.764 73.2105 124.162 71.5847 123.263 69.5958C124.422 70.0974 125.407 70.2184 126.324 70.3222C127.431 70.4433 128.399 70.5643 129.645 71.3772C130.665 72.0517 130.492 74.5595 130.233 75.6664L129.576 78.5547L131.945 76.7733C132.031 76.7041 134.107 75.113 134.349 72.5706C134.453 71.5502 134.245 70.547 133.744 69.5612C134.92 70.2357 136.061 70.4951 137.462 70.8238C137.652 70.8756 137.86 70.9102 138.067 70.9621C138.915 71.1524 140.42 71.7058 140.852 73.1413C141.094 73.9369 141.042 74.9054 141.008 75.7529L140.904 77.7245L142.616 76.7387C142.703 76.6868 144.553 75.6145 145.055 73.4699C145.141 73.0894 145.193 72.6916 145.193 72.3111C145.193 72.3111 145.193 72.3111 145.21 72.3111C146.663 73.5218 148.531 73.7466 150.174 73.885C154.014 74.179 155.622 77.5689 155.691 77.7072L156.746 80.0248L157.697 77.6554C157.905 77.1192 158.026 76.5831 158.026 76.0642C159.911 78.0186 162.523 79.0909 165.394 79.0909C167.746 79.0909 170.115 78.3645 172.087 77.0327C174.214 75.5972 175.771 73.5564 176.567 71.1351L177.258 69.0769L175.183 69.8206ZM142.287 13.1097C140.835 13.1097 140.074 12.5217 139.849 11.2765C139.693 10.4463 140.108 9.84096 140.921 9.65071C140.956 9.65071 140.99 9.63341 141.025 9.63341C140.835 10.3425 140.921 11.1208 141.388 11.8818C141.734 12.4179 142.27 12.833 142.945 13.0752C142.72 13.0924 142.495 13.1097 142.287 13.1097ZM79.1255 11.8818C79.6097 11.1381 79.6789 10.3425 79.4887 9.63341C79.5233 9.63341 79.5578 9.65071 79.5924 9.65071C80.4053 9.82366 80.8204 10.4463 80.6647 11.2765C80.4399 12.5217 79.6616 13.1097 78.2261 13.1097C78.0186 13.1097 77.7937 13.0924 77.5689 13.0752C78.2434 12.833 78.7796 12.4352 79.1255 11.8818ZM142.011 19.3014C142.27 19.042 142.547 18.7999 142.841 18.575C144.121 17.5892 145.746 16.9839 147.787 16.9839C148.081 16.9839 148.375 17.0012 148.687 17.0185L151.454 15.7559C150.468 15.7732 149.673 15.8078 149.033 15.8078C146.265 15.8078 146.49 15.4273 146.853 13.4902C146.853 13.4902 149.188 14.1302 150.97 14.1302C151.143 14.1302 151.316 14.1302 151.471 14.1129C152.336 14.0437 152.716 13.6632 152.855 13.1962C153.028 12.5736 153.08 11.6051 152.595 10.3944C152.284 9.59882 151.523 8.90702 150.434 8.90702C149.603 8.90702 148.6 9.30481 147.459 10.3425L146.49 11.311C145.989 10.723 145.591 10.0485 145.28 9.39128C145.072 8.49193 146.041 7.92119 146.041 7.92119C145.055 8.04226 144.57 7.02184 144.415 6.55487C145.47 5.98413 146.974 5.11937 148.566 4.68699L149.033 3.09584C149.638 2.78452 155.553 1.4182 157.109 1.4182C157.196 1.4182 157.248 1.4182 157.317 1.4355C157.438 1.45279 157.559 1.50468 157.646 1.57386C157.317 1.93706 157.023 2.35214 156.764 2.80182L157.819 3.14772C158.407 2.19649 159.219 1.40091 159.946 1.15878C160.897 1.98895 162.039 4.46216 159.531 7.05643V8.56111L159.963 8.14603C160.568 7.57529 161.001 7.02184 161.329 6.48569C166.12 16.8628 158.251 25.372 158.303 29.0386C158.303 29.0386 156.66 28.9867 155.536 28.537C155.536 28.537 155.034 32.1171 156.141 35.0573C157.421 38.4818 159.444 41.5257 161.07 44.7772C161.623 45.8841 162.108 47.0083 162.506 48.1671C162.523 48.2017 162.523 48.2363 162.54 48.2708C162.869 48.9799 163.422 49.6026 164.045 49.9485C164.062 49.9658 164.097 49.9658 164.114 49.9831C164.927 50.3981 165.878 50.3463 166.674 49.862C167.452 49.395 167.867 48.5995 167.85 47.7174C167.798 45.7457 166.639 44.293 165.394 42.7537C164.737 41.9235 164.045 41.076 163.509 40.1075C161.831 37.0809 161.416 33.6564 162.315 30.1974C162.73 28.6062 163.664 27.2053 164.564 25.839C164.771 25.5277 164.961 25.2337 165.169 24.9224C165.255 24.8013 165.325 24.6802 165.394 24.5592C164.961 24.1614 164.875 23.6771 165.013 23.0372C165.134 22.4491 165.446 21.74 165.826 20.858C166.259 19.8895 166.76 18.7826 167.002 17.6238C167.4 15.7559 167.4 14.2512 167.158 12.7638C167.521 13.3519 167.832 13.9745 168.092 14.6144C168.386 15.3408 168.593 16.1018 168.697 16.8974C168.801 17.693 168.801 18.5058 168.68 19.3187C168.957 18.5577 169.13 17.7276 169.181 16.8974C169.233 16.0499 169.181 15.2025 169.026 14.3723C168.887 13.6113 168.68 12.8503 168.403 12.1239C169.597 13.8707 170.202 15.998 170.236 18.5577C170.271 21.7746 169.164 24.4727 168.109 25.1126C167.971 25.1991 167.85 25.251 167.729 25.2856C167.279 25.3893 166.587 25.078 166.587 25.078C166.276 25.5969 165.965 26.0638 165.636 26.5654C164.754 27.8971 163.924 29.1597 163.561 30.526C162.748 33.691 163.094 36.7004 164.633 39.4676C165.117 40.3324 165.757 41.1452 166.397 41.9235C167.711 43.5666 169.078 45.2615 169.13 47.6655C169.164 49.0145 168.49 50.2425 167.331 50.9516C166.708 51.3321 165.982 51.5396 165.255 51.5396C164.927 51.5396 164.581 51.4877 164.252 51.4186C163.958 51.3321 163.664 51.2283 163.388 51.0727C163.301 51.0208 163.215 50.9689 163.128 50.917C163.18 51.3321 163.197 51.7645 163.18 52.1796C163.18 52.2833 163.163 52.4044 163.163 52.5082C163.111 53.2173 163.007 53.9437 162.955 54.6528C162.869 55.5694 162.713 55.6732 162.99 56.5725C163.318 57.6102 164.719 58.2329 166.172 58.5615C167.089 58.769 168.334 58.9593 169.303 59.0803C170.167 59.2014 170.807 59.9105 170.859 60.7753C170.98 62.9026 171.153 66.6729 170.997 67.7279C170.825 68.8867 170.15 69.8725 169.078 70.3914C169.147 70.547 169.216 70.7027 169.285 70.8411C169.441 71.2388 169.562 71.5847 169.614 71.9134C169.96 73.7985 168.611 74.3866 167.4 74.6806L167.244 72.9857C167.227 72.9165 166.899 72.7608 166.829 72.7262C166.726 72.657 166.604 72.5879 166.518 72.5014C166.31 72.3111 166.241 72.0863 166.207 71.8442C166.189 71.7058 166.189 71.5674 166.189 71.4118C166.172 71.1524 166.138 70.8929 165.999 70.7027C165.93 70.6162 165.861 70.547 165.74 70.4951C165.636 70.4433 165.532 70.426 165.428 70.426C165.307 70.426 165.204 70.4606 165.1 70.5124C164.875 70.6335 164.685 70.8583 164.65 71.1351C164.633 71.2388 164.65 71.3772 164.667 71.5156C164.754 72.0171 164.996 72.7089 164.771 73.3143C164.633 73.7121 164.097 74.2482 163.509 74.2482C163.318 74.2482 163.145 74.1963 162.955 74.0753L161.745 75.1476C160.136 73.3834 160.638 71.6885 162.384 70.9621C162.523 70.9102 162.644 70.8411 162.748 70.7719C163.076 70.547 163.267 70.253 163.076 69.9417C162.938 69.6996 162.782 69.6131 162.575 69.6131C162.263 69.6131 161.866 69.8033 161.26 70.0455C161.226 70.0628 161.191 70.0801 161.139 70.0974C160.811 70.2184 160.499 70.3049 160.205 70.3049C159.583 70.3049 159.081 69.9417 158.822 68.9386C158.804 68.8521 158.787 68.7483 158.77 68.6619L158.355 68.8348L157.628 69.1288C157.646 69.0078 157.663 68.8694 157.68 68.7483C157.749 68.3332 157.888 67.9874 158.043 67.6933C158.58 66.7075 159.531 66.3097 160.499 66.3097C161.745 66.3097 163.024 66.9323 163.561 67.7279L165.843 68.0392C166.31 67.4512 166.328 65.7217 166.259 64.3727C166.207 63.3868 165.48 62.5913 164.512 62.4356C162.851 62.1935 160.361 61.8303 159.479 61.7611C157.801 61.64 156.054 61.346 154.792 60.118C153.062 58.4058 152.682 56.6244 152.682 54.1512C152.682 53.3383 152.716 52.5255 152.786 51.6953C152.838 50.9862 152.924 50.2771 152.993 49.5853C153.045 49.1183 153.114 48.6513 153.183 48.1844C153.253 47.752 153.253 47.285 153.218 46.8353C153.201 46.6624 153.183 46.5067 153.149 46.3338C153.062 45.8322 152.924 45.348 152.734 44.8464C152.526 44.3275 152.232 43.8433 151.886 43.3763C151.333 42.6499 150.606 42.01 149.69 41.4911C149.361 41.3009 148.963 41.076 148.548 40.8166C148.133 40.5572 147.684 40.2805 147.217 39.9519C146.075 39.1909 144.813 38.2396 143.636 37.15C143.723 37.0982 143.809 37.0463 143.896 36.9944C144.328 36.735 145.522 35.8529 146.646 34.919C146.923 34.6941 147.165 34.4866 147.39 34.279L146.317 33.7083C145.072 34.7633 143.688 35.801 143.325 36.0086C143.152 36.1123 142.979 36.2161 142.806 36.3199C142.478 36.5101 142.149 36.7004 141.838 36.8733C140.022 37.911 138.725 38.6201 138.759 39.8308C141.008 42.2521 139.78 43.6876 138.534 44.12L138.119 42.7883C136.805 42.5634 136.822 41.5949 136.77 40.8512C136.736 40.4534 136.424 40.2286 136.113 40.2286C135.854 40.2286 135.594 40.4015 135.577 40.7993C135.542 41.2317 135.577 41.6814 135.456 42.3905C135.369 42.8747 134.851 43.532 134.107 43.532C133.986 43.532 133.865 43.5147 133.744 43.4801L133.467 45.0539C130.907 44.5697 131.184 42.0273 132.913 41.1625C133.899 40.661 134.211 40.2978 133.917 39.9173C133.83 39.8135 133.726 39.7616 133.605 39.7616C133.242 39.7616 132.706 40.1594 132.187 40.5399C131.962 40.7129 131.668 40.7993 131.357 40.7993C130.682 40.7993 129.956 40.3669 129.645 39.3465L128.763 39.8827C128.607 37.9629 129.8 37.0117 131.011 37.0117C131.582 37.0117 132.17 37.2192 132.619 37.6343C132.792 37.79 132.965 37.8591 133.138 37.8591C133.692 37.8591 134.072 37.1673 133.329 36.7695C132.619 36.3891 131.945 35.213 132.602 34.4693L131.53 33.4662C132.014 33.1722 132.533 33.0338 133.017 33.0338C134.09 33.0338 135.075 33.7256 135.387 35.2995C135.456 35.6627 135.612 35.801 135.819 35.801C136.407 35.801 137.445 34.5385 138.223 33.2932C138.413 32.9992 138.586 32.6879 138.759 32.3939C138.984 31.9961 139.226 31.6156 139.486 31.2351C139.814 30.7508 140.16 30.2839 140.593 29.8688C141.319 29.1424 142.581 27.8798 144.034 27.0324C144.38 26.8421 144.743 26.6519 145.107 26.4962C145.539 25.9255 145.971 25.3374 146.352 24.7321C147.372 23.1755 148.22 21.5152 148.704 19.7684C147.908 21.4114 146.802 22.8469 145.574 24.1268C145.003 24.7321 144.415 25.2855 143.792 25.839C142.115 26.7038 140.714 28.1047 139.883 28.9175L139.762 29.0386C139.52 29.2807 139.295 29.5229 139.105 29.7823C138.828 28.0874 138.898 25.9947 139.434 24.0057C139.538 23.6252 139.659 23.2274 139.797 22.8642C140.299 21.5498 141.025 20.3045 142.011 19.3014ZM148.479 12.4352C149.136 12.2104 149.794 12.0374 150.416 12.0374C150.935 12.0374 151.419 12.1585 151.869 12.4179C151.852 12.6255 151.817 12.7984 151.8 12.8849C151.8 12.9022 151.8 12.9022 151.8 12.9022C151.8 12.9022 151.713 12.9887 151.367 13.0233C151.246 13.0406 151.108 13.0406 150.952 13.0406C150.278 13.0406 149.517 12.9368 148.842 12.8157C148.168 12.712 147.147 12.4871 147.147 12.4871C147.044 11.9337 147.13 11.3456 147.338 11.3629C147.58 11.4148 147.753 12.0029 148.479 12.4352ZM147.77 11.5705L148.185 11.1381C149.223 10.2042 149.967 9.99661 150.399 9.99661C151.177 9.99661 151.488 10.6019 151.558 10.7922C151.627 10.9651 151.679 11.1381 151.731 11.2938C151.316 11.1035 150.866 11.0343 150.399 11.0343C149.569 11.0343 148.687 11.2938 147.77 11.5705ZM154.93 64.8915C153.65 65.7563 152.457 66.1714 151.194 66.1714C150.018 66.1714 148.877 65.8254 147.666 65.445C147.338 65.3412 147.009 65.2374 146.663 65.1509C146.127 64.9953 145.556 64.9261 144.986 64.9261C143.602 64.9261 142.409 65.3758 141.63 65.7736C141.717 65.4795 141.993 64.3727 141.993 63.5252C143.014 62.9545 143.723 62.1416 144.069 61.0866C144.588 59.5127 145.003 56.7282 144.588 53.7188C145.401 53.6151 146.559 53.4421 147.718 53.2519C148.981 53.0443 150.018 52.8368 150.779 52.6465C151.143 52.56 151.437 52.4736 151.696 52.3871C151.661 52.9924 151.644 53.5978 151.644 54.2031C151.644 55.7078 151.783 56.832 152.094 57.8178C152.474 58.9939 153.114 60.0143 154.065 60.9482C155.587 62.4529 157.628 62.7815 159.427 62.9026C160.067 62.9545 161.831 63.1793 164.373 63.5598C164.823 63.629 165.186 64.0095 165.204 64.4764C165.273 65.7217 165.221 66.4654 165.152 66.8805L164.149 66.7421C163.318 65.8427 161.9 65.2547 160.517 65.2547C158.77 65.2547 157.455 66.1714 156.867 67.7279C156.556 67.7625 156.21 67.8144 155.864 67.9009C156.521 66.8978 156.573 65.9638 156.591 65.8427L156.677 63.6809L154.93 64.8915ZM137.549 65.0818C137.445 64.9953 137.341 64.8915 137.255 64.7877C137.237 64.7532 137.22 64.7359 137.203 64.7013C136.978 64.3381 137.047 63.9576 137.099 63.5598C137.151 63.162 137.151 62.7642 136.788 62.5048C136.649 62.401 136.494 62.3491 136.338 62.3491C136.234 62.3491 136.148 62.3664 136.061 62.401C135.819 62.4875 135.594 62.695 135.508 62.9717C135.456 63.1101 135.456 63.3004 135.456 63.5252C135.456 63.7154 135.473 63.923 135.473 64.1305C135.473 64.4937 135.439 64.8915 135.283 65.2374C135.266 65.272 135.248 65.3066 135.231 65.3412C135.023 65.6871 134.47 66.1195 133.899 66.1195C133.64 66.1195 133.38 66.033 133.156 65.8082L131.651 66.7248C131.651 66.7248 131.634 66.7248 131.634 66.7075C131.53 66.5519 131.461 66.3962 131.374 66.2578C131.201 65.8946 131.08 65.566 131.011 65.2374C130.734 63.7846 131.599 62.7296 133.121 62.3837C133.744 62.2454 134.245 61.9167 134.055 61.4152C133.934 61.0866 133.726 60.9655 133.415 60.9655C133.086 60.9655 132.619 61.0866 131.98 61.2249C131.772 61.2595 131.582 61.2941 131.392 61.3287C131.236 61.346 131.08 61.3633 130.942 61.3633C130.267 61.3633 129.835 61.0347 129.835 59.6857L128.538 59.9624C129.126 57.9043 130.319 57.1087 131.564 57.1087C132.844 57.1087 134.193 57.9561 135.023 59.1149L135.542 59.2879L136.459 59.5992L138.292 60.2218C140.074 58.7171 139.261 54.7565 139.261 54.7565C139.261 54.7565 135.784 52.8022 136.943 48.4611C136.943 48.4611 137.549 44.3794 144.986 44.3794C145.781 44.3794 146.646 44.4313 147.597 44.5351C148.168 44.6043 148.687 44.6734 149.154 44.7599C149.154 44.7599 149.154 44.7772 149.171 44.7772C148.998 45.175 148.946 45.6247 149.033 46.0571C149.154 46.7316 149.569 47.3023 150.174 47.6136C150.468 47.7693 150.797 47.8558 151.143 47.8558C151.523 47.8558 151.886 47.752 152.232 47.5617C152.232 47.752 152.215 47.9249 152.198 48.0979C152.059 49.0664 151.921 50.1041 151.834 51.1937C150.33 51.9547 143.36 52.8195 143.36 52.8195C144.034 56.1056 143.602 59.2187 143.083 60.7753C142.893 61.346 142.564 61.7957 142.149 62.1589C141.82 62.4529 141.44 62.6777 141.008 62.8507C140.921 63.9922 140.835 64.8396 140.627 65.5141C140.575 65.7563 140.489 65.9638 140.385 66.1368C139.866 67.0188 138.794 67.2264 137.825 67.2955L137.981 65.4623C137.929 65.3585 137.618 65.1336 137.549 65.0818ZM140.022 39.5541C140.316 39.0871 141.302 38.551 142.322 37.9629C142.443 37.8937 142.581 37.8246 142.72 37.7381C142.91 37.911 143.1 38.084 143.291 38.2569C143.758 38.672 144.242 39.0698 144.726 39.4503L144.743 39.4676L147.13 41.9581C147.753 42.6153 148.185 43.1169 148.479 43.532L145.003 43.2898C143.291 43.2898 141.907 43.4974 140.783 43.826C140.938 43.5838 141.06 43.3071 141.129 43.0304C141.405 41.716 140.765 40.488 140.022 39.5541ZM149.897 43.7914C149.69 43.3936 149.361 42.892 148.808 42.2175C148.946 42.304 149.102 42.3905 149.223 42.4597C150.053 42.9266 150.676 43.4974 151.143 44.12C151.506 44.6043 151.748 45.1231 151.938 45.6247C152.007 45.8149 152.059 46.0225 152.094 46.2127C151.886 46.5413 151.523 46.7489 151.143 46.7489C150.987 46.7489 150.831 46.7143 150.676 46.6278C150.105 46.3338 149.88 45.5728 150.278 44.9848C150.312 44.9329 150.347 44.881 150.399 44.8291C150.226 44.5351 150.105 44.2065 149.897 43.7914ZM133.778 12.833C134.47 13.3 135.127 13.8361 135.767 14.3723C136.805 15.2371 137.808 16.1537 138.898 16.9666C139.244 17.226 140.299 18.0216 141.129 18.6615C140.887 18.9209 140.662 19.1804 140.437 19.4571C139.832 20.2527 139.33 21.152 138.949 22.0859L136.995 20.2354C137.203 19.6992 137.272 19.0766 137.203 18.4367C137.203 18.4021 137.185 18.3675 137.185 18.3156L136.148 18.8172C136.182 19.5954 135.888 20.4083 135.179 20.7888C134.954 20.9099 134.764 20.9618 134.505 20.9618C134.505 20.9618 134.505 20.9618 134.487 20.9618L134.522 20.0105C134.176 20.0105 133.709 19.6473 133.709 19.1458C133.709 18.575 134.072 18.2637 134.522 18.1253V17.0185C133.657 17.1741 133.017 17.693 132.758 18.4021L131.616 18.4194C131.564 17.5546 131.98 16.7763 132.862 16.4823V15.3581C132.118 15.5138 131.634 15.877 131.34 16.2056C131.253 16.2921 131.184 16.3958 131.097 16.4996L130.233 16.5169C130.198 15.6867 130.613 14.943 131.392 14.6836V13.5594C130.907 13.6632 130.492 13.8534 130.129 14.1648H129.316C129.333 13.6286 129.645 13.1097 130.077 12.7811C130.458 12.5044 130.942 12.3488 131.426 12.2969C131.582 12.2796 131.737 12.2623 131.893 12.2623C132.101 12.2623 132.308 12.2796 132.498 12.3142C132.965 12.4006 133.398 12.5736 133.778 12.833ZM131.461 5.91495C132.118 4.79076 132.498 3.35526 132.516 1.86788H135.127C135.145 2.05813 135.162 2.23108 135.162 2.42132C135.162 5.27503 132.879 7.59258 130.06 7.59258H129.87C130.475 7.22938 131.011 6.67594 131.461 5.91495ZM119.544 5.91495C120.202 4.79076 120.582 3.35526 120.599 1.86788H124.145C124.162 3.35526 124.543 4.79076 125.2 5.91495C125.65 6.67594 126.186 7.24668 126.791 7.59258H124.422C123.816 6.96996 123.315 6.12249 122.986 5.11937H121.793C121.481 6.12249 120.98 6.96996 120.357 7.59258H117.936C118.558 7.22938 119.112 6.67594 119.544 5.91495ZM107.455 5.91495C108.112 4.79076 108.493 3.35526 108.51 1.86788H112.246C112.263 3.35526 112.644 4.79076 113.301 5.91495C113.75 6.67594 114.287 7.22938 114.892 7.59258H112.315C111.71 6.96996 111.208 6.12249 110.879 5.11937H109.686C109.375 6.12249 108.873 6.96996 108.251 7.59258H105.829C106.452 7.22938 107.005 6.67594 107.455 5.91495ZM95.6597 5.91495C96.3169 4.79076 96.6974 3.35526 96.7147 1.86788H100.139C100.156 3.35526 100.537 4.79076 101.194 5.91495C101.644 6.67594 102.18 7.24668 102.785 7.59258H100.364C99.7586 6.96996 99.2571 6.12249 98.9284 5.11937H97.7351C97.4238 6.12249 96.9222 6.96996 96.2996 7.59258H94.0339C94.6738 7.22938 95.2273 6.67594 95.6597 5.91495ZM85.6457 2.33485C85.6457 2.17919 85.6457 2.02354 85.663 1.85058H88.3438C88.3611 3.33797 88.7416 4.77347 89.3988 5.89766C89.8485 6.65864 90.3846 7.22938 90.99 7.57529H90.7305C87.9979 7.59258 85.6457 5.18855 85.6457 2.33485ZM81.616 16.9493C82.7056 16.1364 83.7087 15.2371 84.7464 14.355C85.3863 13.8188 86.0435 13.2827 86.7353 12.8157C87.1331 12.539 87.5828 12.3661 88.0671 12.2969C88.24 12.2623 88.4303 12.245 88.6205 12.245C88.7935 12.245 88.9664 12.2623 89.1567 12.2796C89.6236 12.3488 90.0906 12.4871 90.4538 12.7638C90.8862 13.0752 91.1975 13.594 91.2148 14.1475H90.4019C90.0387 13.8534 89.6063 13.6459 89.1394 13.5421V14.6663C89.935 14.9257 90.35 15.6694 90.2982 16.4996L89.4334 16.4823C89.3642 16.3785 89.2777 16.2921 89.1913 16.1883C88.8972 15.877 88.3957 15.5138 87.6693 15.3408V16.465C88.534 16.759 88.9491 17.5373 88.9145 18.4021L87.7731 18.3848C87.5136 17.6584 86.8737 17.1568 86.0089 17.0012V18.1081C86.4586 18.2464 86.8218 18.5577 86.8218 19.1285C86.8218 19.63 86.3721 19.9932 86.0089 19.9932L86.0435 20.9445C86.0435 20.9445 86.0435 20.9445 86.0262 20.9445C85.7841 20.9445 85.5766 20.8753 85.3517 20.7715C84.6426 20.391 84.3659 19.5608 84.3832 18.7999L83.3455 18.2983C83.3455 18.3329 83.3282 18.3675 83.3282 18.4194C83.2417 19.0593 83.3282 19.6819 83.5357 20.2181L81.5814 22.0859C81.2009 21.152 80.6993 20.2699 80.094 19.4571C79.8692 19.1804 79.6443 18.9036 79.4022 18.6615C80.2151 18.0043 81.2701 17.2087 81.616 16.9493ZM49.4815 67.7798C49.3259 66.7248 49.4988 62.9717 49.6199 60.8271C49.6718 59.9624 50.329 59.2533 51.1765 59.1322C52.145 58.9939 53.3902 58.8036 54.3069 58.6134C55.7597 58.3021 57.1606 57.6621 57.4892 56.6244C57.7659 55.7251 57.6103 55.6213 57.5238 54.7046C57.4546 53.9955 57.3681 53.2691 57.3162 52.56C57.3162 52.4563 57.299 52.3352 57.299 52.2314C57.2817 51.8164 57.2989 51.384 57.3508 50.9689C57.2644 51.0208 57.1779 51.0727 57.0914 51.1245C56.8147 51.2802 56.5207 51.384 56.2266 51.4705C55.898 51.5569 55.5694 51.5915 55.2235 51.5915C54.4971 51.5915 53.788 51.4013 53.1481 51.0035C51.9893 50.2944 51.3148 49.0664 51.3494 47.7174C51.4013 45.3134 52.7676 43.6184 54.082 41.9754C54.7047 41.1971 55.3619 40.3842 55.8462 39.5195C57.3854 36.7523 57.7486 33.7429 56.9185 30.5779C56.5553 29.1943 55.7251 27.949 54.843 26.6173C54.5144 26.1157 54.2031 25.6487 53.8918 25.1299C53.8918 25.1299 53.2 25.4412 52.7503 25.3374C52.6293 25.3028 52.5082 25.251 52.3698 25.1645C51.3148 24.5073 50.1906 21.8265 50.2425 18.6096C50.2771 16.0499 50.8824 13.9226 52.0758 12.1758C51.8164 12.9022 51.5915 13.6632 51.4532 14.4242C51.2975 15.2543 51.2456 16.1191 51.2975 16.9493C51.3494 17.7967 51.5224 18.6096 51.7991 19.3706C51.678 18.5577 51.678 17.7449 51.7818 16.9493C51.8856 16.1537 52.0931 15.3927 52.3871 14.6663C52.6465 14.0264 52.9579 13.4038 53.3211 12.8157C53.0789 14.3031 53.0789 15.8078 53.4767 17.6757C53.7188 18.8344 54.2204 19.9413 54.6528 20.9099C55.0506 21.7919 55.3446 22.501 55.4657 23.0891C55.604 23.729 55.5175 24.2132 55.0852 24.611C55.1543 24.7321 55.2408 24.8532 55.31 24.9742C55.5003 25.2683 55.7078 25.5796 55.9153 25.8909C56.8147 27.2572 57.7486 28.6581 58.1637 30.2493C59.0631 33.7083 58.648 37.1327 56.9703 40.1594C56.4342 41.1279 55.7424 41.9754 55.0852 42.8056C53.8572 44.3448 52.6811 45.7976 52.6293 47.7693C52.612 48.6686 53.0443 49.4469 53.8053 49.9139C54.6009 50.3982 55.5521 50.4327 56.365 50.035C56.3823 50.0177 56.4169 50.0177 56.4342 50.0004C57.0568 49.6718 57.6103 49.0491 57.9389 48.3227C57.9562 48.2881 57.9562 48.2535 57.9735 48.219C58.3713 47.0602 58.8555 45.9187 59.409 44.8291C61.0347 41.5776 63.0582 38.5337 64.3381 35.1092C65.445 32.169 64.9434 28.5889 64.9434 28.5889C63.8192 29.0386 62.1762 29.0905 62.1762 29.0905C62.2281 25.4239 54.3588 16.9147 59.1495 6.53758C59.4781 7.07373 59.9105 7.62717 60.5159 8.19791L60.9482 8.613V7.10832C58.4404 4.51404 59.5992 2.04083 60.5331 1.21066C61.2423 1.47009 62.0551 2.24837 62.6605 3.19961L63.7155 2.8537C63.456 2.42132 63.162 2.00624 62.8334 1.62575C62.9372 1.55657 63.041 1.50468 63.162 1.48739C63.2139 1.48739 63.2831 1.47009 63.3696 1.47009C64.9434 1.47009 70.8584 2.83641 71.4464 3.14772L71.9653 4.72158C73.5737 5.15396 75.0611 6.01872 76.1161 6.58946C75.9432 7.03914 75.4589 8.05955 74.4904 7.95578C74.4904 7.95578 75.4416 8.52652 75.2513 9.42587C74.94 10.0831 74.5422 10.7576 74.0407 11.3456L73.0722 10.3771C71.9307 9.3221 70.9275 8.94161 70.0974 8.94161C69.0078 8.94161 68.2468 9.63341 67.9355 10.429C67.4512 11.6397 67.5031 12.6082 67.6761 13.2308C67.8144 13.6978 68.1949 14.0783 69.0597 14.1475C69.2153 14.1647 69.3883 14.1648 69.5612 14.1648C71.3426 14.1648 73.6775 13.5248 73.6775 13.5248C74.0407 15.4619 74.2655 15.8424 71.4983 15.8424C70.8584 15.8424 70.0628 15.8251 69.077 15.7905L71.8442 17.053C72.1555 17.0357 72.4495 17.0185 72.7435 17.0185C74.7844 17.0185 76.4101 17.6238 77.69 18.6096C77.984 18.8344 78.2607 19.0766 78.5201 19.336C79.506 20.3391 80.2151 21.5844 80.7166 22.8988C80.855 23.2793 80.9761 23.6598 81.0798 24.0403C81.616 26.0465 81.6852 28.1393 81.4084 29.8169C81.2009 29.5575 80.9933 29.3153 80.7512 29.0732L80.6301 28.9521C79.8 28.1393 78.3991 26.7383 76.7214 25.8736C76.0988 25.3201 75.5108 24.7667 74.94 24.1614C73.7121 22.8642 72.6225 21.4287 71.8096 19.803C72.3112 21.5498 73.1586 23.2274 74.1618 24.7667C74.5595 25.372 74.9746 25.9601 75.407 26.5308C75.7875 26.6865 76.1334 26.8594 76.4793 27.067C77.9494 27.8971 79.1946 29.177 79.921 29.9034C80.3534 30.3184 80.6993 30.7854 81.0279 31.2697C81.2874 31.6502 81.5122 32.0307 81.7543 32.4285C81.9273 32.7225 82.1175 33.0338 82.2905 33.3278C83.0688 34.5904 84.1065 35.8356 84.6945 35.8356C84.9021 35.8356 85.0577 35.68 85.1269 35.334C85.4382 33.7602 86.424 33.0684 87.4963 33.0684C87.9979 33.0684 88.5168 33.224 88.9837 33.5008L87.9114 34.5039C88.5513 35.2649 87.8768 36.4236 87.185 36.8041C86.4413 37.2019 86.8391 37.8937 87.3753 37.8937C87.5482 37.8937 87.7212 37.8246 87.8941 37.6689C88.3438 37.2538 88.9318 37.0463 89.5026 37.0463C90.7132 37.0463 91.9066 37.9802 91.7509 39.9173L90.817 39.3984C90.5057 40.4188 89.7793 40.8512 89.1048 40.8512C88.7935 40.8512 88.4995 40.7647 88.2746 40.5918C87.7558 40.2113 87.2196 39.8135 86.8564 39.8135C86.7353 39.8135 86.6143 39.8654 86.5451 39.9692C86.2684 40.3497 86.5624 40.7301 87.5482 41.2144C89.295 42.0792 89.5718 44.6216 86.9948 45.1058L86.718 43.532C86.597 43.5666 86.4759 43.5838 86.3549 43.5838C85.6112 43.5838 85.0923 42.9266 85.0058 42.4424C84.8848 41.7333 84.9194 41.3009 84.8848 40.8512C84.8675 40.4534 84.608 40.2805 84.3486 40.2805C84.0373 40.2805 83.726 40.5053 83.6914 40.9031C83.6395 41.6468 83.6568 42.6153 82.3424 42.8402L81.9273 44.1719C80.682 43.7395 79.4368 42.304 81.7025 39.8827C81.737 38.6547 80.4399 37.9456 78.6239 36.9252C78.3126 36.7523 77.984 36.562 77.6554 36.3718C77.4824 36.268 77.3095 36.1642 77.1365 36.0604C76.7733 35.8356 75.3724 34.8152 74.1445 33.7602L73.0722 34.3309C73.297 34.5212 73.5391 34.7287 73.8158 34.9708C74.9227 35.8875 76.1161 36.7868 76.5658 37.0463C76.6523 37.0982 76.7387 37.15 76.8252 37.2019C75.6491 38.2915 74.3866 39.2428 73.2451 40.0037C72.7781 40.3151 72.3285 40.6091 71.9134 40.8685C71.4983 41.1279 71.1005 41.3528 70.7719 41.543C69.8552 42.0619 69.1289 42.7018 68.5754 43.4282C68.2122 43.8952 67.9355 44.3967 67.7279 44.8983C67.5204 45.3825 67.382 45.8841 67.3129 46.3857C67.2783 46.5586 67.261 46.7143 67.2437 46.8872C67.2091 47.3542 67.2264 47.8039 67.2783 48.2363C67.3475 48.7032 67.3993 49.1702 67.4685 49.6372C67.555 50.3463 67.6242 51.0381 67.6761 51.7472C67.7452 52.5773 67.7798 53.3902 67.7798 54.2031C67.7798 56.6936 67.3993 58.475 65.6698 60.1699C64.4246 61.3979 62.6777 61.6919 60.9828 61.813C60.1008 61.8649 57.6276 62.2281 55.9499 62.4875C54.9814 62.6258 54.255 63.4387 54.2031 64.4245C54.1339 65.7563 54.1512 67.5031 54.6182 68.0911L56.9012 67.7798C57.4373 66.9842 58.7172 66.3616 59.9624 66.3616C60.9309 66.3616 61.8822 66.7421 62.4183 67.7452C62.574 68.0392 62.7123 68.3851 62.7815 68.8002C62.7988 68.9213 62.8161 69.0424 62.8334 69.1807L62.107 68.8867L61.6919 68.7137C61.6746 68.8175 61.6573 68.904 61.64 68.9905C61.3979 69.9936 60.8791 70.3568 60.2564 70.3568C59.9624 70.3568 59.6511 70.2703 59.3225 70.1492C59.2879 70.1319 59.2533 70.1147 59.2014 70.0974C58.6134 69.8552 58.1983 69.665 57.887 69.665C57.6794 69.665 57.5238 69.7515 57.3854 69.9936C57.1952 70.3222 57.3854 70.5989 57.714 70.8238C57.8178 70.8929 57.9562 70.9621 58.0772 71.014C59.824 71.7404 60.3256 73.4353 58.7172 75.1994L57.5065 74.1271C57.3162 74.2482 57.126 74.3001 56.953 74.3001C56.365 74.3001 55.8289 73.7639 55.6905 73.3661C55.4657 72.7608 55.7078 72.069 55.7943 71.5674C55.8116 71.4291 55.8289 71.2907 55.8116 71.187C55.777 70.9102 55.5867 70.6854 55.3619 70.5643C55.2581 70.5124 55.1543 70.4779 55.0333 70.4779C54.9295 70.4779 54.8257 70.4951 54.722 70.547C54.6182 70.5989 54.5317 70.6681 54.4625 70.7546C54.3069 70.9448 54.2723 71.2043 54.2723 71.4637C54.2723 71.602 54.2723 71.7577 54.255 71.8961C54.2204 72.1382 54.1512 72.363 53.9437 72.5533C53.8399 72.6397 53.7361 72.7089 53.6324 72.7781C53.5632 72.8127 53.2346 72.9684 53.2173 73.0375L53.0616 74.7325C51.851 74.4385 50.5192 73.8504 50.8478 71.9652C50.8997 71.6539 51.0035 71.2907 51.1765 70.8929C51.2283 70.7546 51.2975 70.5989 51.384 70.4433C50.3463 69.9244 49.6545 68.9386 49.4815 67.7798ZM70.1147 12.0374C70.7373 12.0374 71.3772 12.1931 72.0517 12.4352C72.7781 11.9856 72.9338 11.4148 73.2105 11.3802C73.4181 11.3629 73.5045 11.951 73.4008 12.5044C73.4008 12.5044 72.3803 12.7293 71.7058 12.833C71.0313 12.9541 70.2703 13.0579 69.5958 13.0579C69.4402 13.0579 69.3018 13.0579 69.1807 13.0406C68.8521 13.006 68.7484 12.9368 68.7484 12.9195C68.7484 12.9195 68.7484 12.9195 68.7484 12.9022C68.7138 12.7984 68.6792 12.6428 68.6792 12.4352C69.1116 12.1585 69.5958 12.0374 70.1147 12.0374ZM68.7829 11.2938C68.8175 11.1381 68.8867 10.9651 68.9559 10.7922C69.0251 10.6019 69.3364 9.99661 70.1147 9.99661C70.5644 9.99661 71.308 10.1869 72.3285 11.1381L72.7435 11.5705C71.8269 11.2765 70.9275 11.0343 70.0974 11.0343C69.6477 11.0343 69.2153 11.1208 68.7829 11.2938ZM82.2213 60.2218L84.0719 59.5992L84.9885 59.2879L85.5074 59.1149C86.3376 57.9388 87.6866 57.1087 88.9664 57.1087C90.2117 57.1087 91.405 57.9043 91.9931 59.9624L90.6959 59.6857C90.6959 61.0174 90.2636 61.3633 89.589 61.3633C89.4507 61.3633 89.295 61.346 89.1394 61.3287C88.9491 61.2941 88.7589 61.2595 88.5513 61.2249C87.9114 61.1039 87.4444 60.9655 87.1158 60.9655C86.8045 60.9655 86.597 61.0866 86.4759 61.4152C86.303 61.9167 86.7872 62.2281 87.4099 62.3837C88.9318 62.7296 89.7966 63.8019 89.5199 65.2374C89.4507 65.566 89.3469 65.8946 89.1567 66.2578C89.0875 66.4135 89.001 66.5519 88.8972 66.7075C88.8972 66.7075 88.8799 66.7075 88.8799 66.7248L87.3753 65.8082C87.1504 66.033 86.891 66.1195 86.6316 66.1195C86.0608 66.1195 85.5074 65.7044 85.2998 65.3412C85.2825 65.3066 85.2653 65.272 85.248 65.2374C85.075 64.8915 85.0577 64.4937 85.0577 64.1305C85.0577 63.923 85.075 63.7154 85.075 63.5252C85.075 63.3004 85.075 63.1101 85.0231 62.9717C84.9366 62.695 84.7118 62.5048 84.4697 62.401C84.3832 62.3664 84.2794 62.3491 84.193 62.3491C84.0373 62.3491 83.8816 62.401 83.7433 62.5048C83.3801 62.7642 83.3801 63.162 83.432 63.5598C83.4839 63.9749 83.553 64.3554 83.3282 64.7013C83.3109 64.7359 83.2936 64.7532 83.2763 64.7877C83.1898 64.8915 83.0861 64.9953 82.9823 65.0818C82.9131 65.1336 82.6018 65.3585 82.6018 65.445L82.7575 67.2782C81.7889 67.2091 80.7166 67.0015 80.1978 66.1195C80.094 65.9465 80.0075 65.7217 79.9556 65.4968C79.7654 64.8223 79.6789 63.9922 79.5751 62.8334C79.1428 62.6604 78.7623 62.4356 78.4337 62.1416C78.0186 61.7784 77.69 61.3287 77.4997 60.758C76.9809 59.2014 76.5312 56.0883 77.223 52.8022C77.223 52.8022 70.253 51.9374 68.7484 51.1764C68.6446 50.0868 68.5235 49.0318 68.3852 48.0806C68.3679 47.9076 68.3506 47.7347 68.3506 47.5444C68.6792 47.7347 69.0597 47.8385 69.4402 47.8385C69.7861 47.8385 70.0974 47.752 70.4087 47.5963C71.014 47.285 71.4291 46.7143 71.5502 46.0398C71.6367 45.6074 71.5848 45.1577 71.4118 44.7599C71.4118 44.7599 71.4118 44.7426 71.4291 44.7426C71.8961 44.6561 72.4149 44.587 72.9857 44.5178C73.9369 44.414 74.8017 44.3621 75.5972 44.3621C83.0342 44.3621 83.6395 48.4438 83.6395 48.4438C84.7983 52.7849 81.322 54.7392 81.322 54.7392C81.322 54.7392 80.4572 58.7171 82.2213 60.2218ZM63.9057 65.8427C63.9057 65.9638 63.9749 66.8978 64.6321 67.9009C64.2689 67.8144 63.9403 67.7625 63.629 67.7279C63.041 66.1714 61.7265 65.2547 59.9797 65.2547C58.5961 65.2547 57.1779 65.8427 56.3477 66.7421L55.3446 66.8805C55.2754 66.4481 55.2235 65.7044 55.2927 64.4764C55.31 64.0095 55.6732 63.629 56.1229 63.5598C58.6653 63.1793 60.4294 62.9372 61.0693 62.9026C62.868 62.7815 64.9088 62.4529 66.4308 60.9482C67.382 60.0143 68.0393 58.9766 68.4025 57.8178C68.7138 56.832 68.8521 55.7251 68.8521 54.2031C68.8521 53.5978 68.8348 52.9924 68.8002 52.3871C69.0597 52.4736 69.371 52.56 69.7169 52.6465C70.4779 52.8368 71.5156 53.0443 72.7781 53.2519C73.9369 53.4421 75.0957 53.6151 75.9086 53.7188C75.4935 56.7455 75.8913 59.5127 76.4274 61.0866C76.7733 62.1243 77.4824 62.9545 78.5028 63.5252C78.5028 64.6321 78.8487 65.739 78.8487 65.7736C78.0705 65.3758 76.8771 64.9261 75.4935 64.9261C74.9227 64.9261 74.352 65.0126 73.8158 65.1509C73.4699 65.2547 73.1413 65.3585 72.8127 65.445C71.6021 65.8082 70.4779 66.1714 69.2845 66.1714C68.022 66.1714 66.8286 65.7736 65.5488 64.8915L63.7673 63.6809L63.9057 65.8427ZM70.2703 45.0021C70.6508 45.5901 70.4433 46.3511 69.8725 46.6451C69.7169 46.7316 69.5612 46.7662 69.4056 46.7662C69.0251 46.7662 68.6619 46.5586 68.4543 46.23C68.4889 46.0398 68.5581 45.8322 68.61 45.642C68.7829 45.1231 69.0424 44.6216 69.4056 44.1373C69.8725 43.5147 70.4952 42.9439 71.3253 42.477C71.4464 42.4078 71.5848 42.3213 71.7404 42.2348C71.187 42.9093 70.8584 43.3936 70.6508 43.8087C70.426 44.2238 70.3222 44.5524 70.1666 44.8637C70.1839 44.8983 70.2357 44.9502 70.2703 45.0021ZM77.2403 38.2742C77.4305 38.1013 77.6208 37.9283 77.811 37.7554C77.9494 37.8246 78.0705 37.911 78.2088 37.9802C79.2292 38.551 80.1978 39.1044 80.5091 39.5714C79.7654 40.488 79.1082 41.7333 79.4368 43.0304C79.506 43.3071 79.627 43.5838 79.7827 43.826C78.6585 43.4974 77.2749 43.2898 75.5627 43.2898L72.0863 43.532C72.3803 43.1169 72.7954 42.6153 73.4354 41.9581L75.8221 39.4676L75.8394 39.4503C76.2891 39.0871 76.7733 38.6893 77.2403 38.2742ZM61.813 75.2686C60.0316 77.1711 57.6276 78.0531 55.1543 78.0531C50.917 78.0531 46.5413 75.4416 45.0021 70.8411C45.0021 70.8411 47.0948 71.5502 49.7928 71.8615C49.6718 72.6052 49.741 73.2624 50.0177 73.8504C50.6057 75.0957 51.9029 75.5453 52.8195 75.7875L54.0475 76.0988L54.1685 74.8362L54.2896 73.6602C54.3934 73.591 54.5144 73.5045 54.6182 73.418C54.6355 73.5218 54.6701 73.6256 54.7047 73.7293C54.9987 74.5422 55.9326 75.3724 56.9876 75.3724C57.0914 75.3724 57.1952 75.3724 57.299 75.3551L58.0426 76.0123L58.8382 76.7214L59.5646 75.9258C60.585 74.8189 61.0001 73.5737 60.7407 72.4322C60.6542 72.069 60.5159 71.7231 60.3083 71.4118C60.9482 71.4118 61.519 71.1697 61.9514 70.72C62.107 70.547 62.2627 70.3568 62.3664 70.132L62.4356 70.1492L64.1133 70.8411L63.923 69.0424C63.923 68.9732 63.9057 68.9213 63.9057 68.8521C64.6494 68.9732 65.5488 69.2499 66.6902 69.6823C66.8459 69.7688 67.0188 69.8379 67.1745 69.8898C67.261 69.9244 67.3302 69.959 67.4166 69.9763C67.0534 70.1838 66.6902 70.3914 66.3616 70.5989C64.7186 71.6539 63.5944 72.7954 63.0064 73.9888C62.6432 74.4039 62.2454 74.8189 61.813 75.2686ZM74.6287 71.5156C73.4354 72.5187 71.775 72.7262 70.2703 72.83C65.7044 73.1759 63.8365 77.2922 63.8365 77.2922C63.456 76.3409 63.5252 75.4416 63.8884 74.6287C64.4419 73.3834 65.6871 72.3111 67.0015 71.481C69.198 70.0974 71.6194 69.3191 71.6194 69.3191C71.187 69.3537 70.7892 69.371 70.4087 69.371C69.4575 69.371 68.6792 69.2499 68.0393 69.0596C67.6761 68.9559 67.3474 68.8175 67.0707 68.6792C65.0472 67.6414 64.978 65.7909 64.978 65.7909C66.5865 66.8805 68.0047 67.261 69.3191 67.261C71.014 67.261 72.5533 66.6556 74.1272 66.2059C74.5941 66.0676 75.0611 66.0157 75.5108 66.0157C76.8079 66.0157 77.9321 66.5 78.572 66.8459C77.7591 67.3474 77.0673 67.9873 76.5312 68.8002C76.3236 69.1288 76.1334 69.4574 75.9777 69.7687C75.4762 70.4779 75.1476 71.1005 74.6287 71.5156ZM82.2213 69.9417C80.6301 70.3049 79.1428 71.2215 78.6412 72.8646C78.3472 73.8158 78.3991 74.8535 78.451 75.8394C78.451 75.8394 75.1995 73.9888 76.929 70.3395C77.0673 70.0455 77.2576 69.7169 77.4651 69.3883C77.8802 68.7483 78.3818 68.2987 78.8487 67.9528C79.0217 67.849 79.1946 67.7625 79.3849 67.6587L79.8692 67.4166C80.6993 68.1257 81.8235 68.2987 82.6537 68.3505L83.9162 68.437L83.8125 67.1745L83.7087 65.86C83.8471 65.739 83.9854 65.6006 84.1238 65.4277C84.1238 65.4104 84.1411 65.4104 84.1411 65.3931C84.193 65.5487 84.2621 65.7044 84.3486 65.8427C84.7291 66.5 85.6285 67.1572 86.6143 67.1572C86.8737 67.1572 87.1158 67.1053 87.358 67.0188L87.9287 67.3647C87.8941 67.3993 87.8422 67.4339 87.8076 67.4685C85.9571 69.2153 84.5907 69.4056 82.2213 69.9417ZM131.288 75.9604C131.288 75.9604 132.222 71.8269 130.233 70.5124C127.05 68.437 125.355 70.2184 121.793 67.5031C121.758 67.4512 121.706 67.4166 121.672 67.3647C119.994 65.6698 118.143 64.5975 116.466 64.0268C115.307 64.217 114.027 64.3554 112.609 64.4245C112.886 64.4418 113.162 64.4591 113.456 64.4937C113.958 64.5456 114.494 64.6321 115.048 64.7532C115.895 64.9434 116.794 65.2374 117.694 65.6698C118.783 66.2059 119.873 67.0707 120.893 68.1084C120.963 68.1776 121.014 68.2295 121.066 68.2987C123.28 70.7027 122.692 73.0548 122.692 73.0548C122.692 73.0548 119.856 69.2845 115.618 69.2845C113.595 69.2845 111.848 69.959 110.949 70.4087L110.291 70.7546L109.634 70.4087C108.735 69.9763 106.988 69.2845 104.964 69.2845C100.727 69.2845 97.8907 73.0548 97.8907 73.0548C97.8907 73.0548 97.2854 70.7027 99.5165 68.2987C99.5684 68.2295 99.6376 68.1776 99.6894 68.1084C100.71 67.0707 101.799 66.1886 102.889 65.6698C103.788 65.2374 104.688 64.9434 105.535 64.7532C106.089 64.6321 106.625 64.5456 107.126 64.4937C107.42 64.4591 107.714 64.4418 107.991 64.4245C106.573 64.3554 105.293 64.217 104.117 64.0268C102.439 64.5975 100.589 65.6525 98.9111 67.3647C98.8593 67.4166 98.8247 67.4512 98.7901 67.5031C95.2273 70.2184 93.5324 68.437 90.35 70.5124C88.3611 71.8096 89.295 75.9604 89.295 75.9604C89.295 75.9604 85.0923 72.7781 88.8972 68.5754C89.6928 67.6933 90.6614 66.9669 91.3705 66.4827C91.9585 66.0849 92.3736 65.86 92.3736 65.86C92.3736 65.86 92.0277 65.8255 91.578 65.739C91.3359 65.7044 91.0418 65.6352 90.7305 65.566C90.6786 65.5487 90.6095 65.5314 90.5403 65.5141C90.6959 64.7704 90.6441 64.044 90.3846 63.4041C90.2809 63.1447 90.1252 62.8853 89.9522 62.6604C91.5953 63.1101 93.6188 63.456 95.9191 63.456C96.8011 63.456 97.7178 63.2658 98.6863 63.162C99.0149 63.1274 99.3781 63.1101 99.7413 63.1101C99.8624 63.1101 99.9835 63.1101 100.105 63.1274C99.2052 62.8507 98.4096 62.5394 97.6832 62.2281C97.0952 62.3145 96.5071 62.401 95.9191 62.401C94.1031 62.401 92.4773 62.1762 91.0764 61.8476C91.3359 61.5881 91.4915 61.2941 91.5953 60.9655L91.7509 61.0001L93.5151 61.3806L93.0135 59.6338C92.0796 56.3477 89.8658 56.0018 88.9491 56.0018C87.479 56.0018 85.8879 56.8493 84.8329 58.181L82.5845 58.942C82.0829 58.0253 82.1175 56.3996 82.2559 55.3792C82.6537 55.0851 83.2244 54.5836 83.7433 53.8399C84.5389 52.7157 85.3344 50.8305 84.6426 48.2017C84.5734 47.8558 84.2102 46.524 82.792 45.348L83.0515 44.5005L83.2763 43.7568C83.6222 43.6184 83.8989 43.4109 84.1065 43.1861C84.4178 43.826 85.0231 44.414 85.7841 44.6043L85.9052 45.2615L86.0954 46.403L87.2196 46.1954C88.7762 45.9014 89.8139 44.9329 90.0041 43.6184C90.0906 43.0304 89.9868 42.4251 89.7274 41.8716C90.3154 41.7333 90.8516 41.4047 91.2494 40.9031L92.7195 41.7333L92.8578 39.9692C92.9789 38.4299 92.4255 37.4614 91.9412 36.9425C91.3186 36.268 90.4192 35.8875 89.4853 35.8875C89.3815 35.8875 89.295 35.8875 89.1913 35.9048C89.2086 35.8183 89.2431 35.7318 89.2604 35.6454C89.3123 35.3513 89.3123 35.0573 89.2604 34.7633L89.762 34.2963L90.8689 33.2586L89.5718 32.4803C88.9145 32.0826 88.2054 31.875 87.4963 31.875C86.3203 31.875 84.9712 32.4803 84.2967 34.1061C84.02 33.7775 83.6568 33.3105 83.259 32.6706C83.1034 32.4112 82.9477 32.1517 82.792 31.8923C82.6191 31.5983 82.4288 31.287 82.2386 30.993V30.9757C82.8093 28.8311 82.792 25.8909 81.9446 23.1582L84.0719 21.1347C84.2794 21.3768 84.5389 21.5671 84.8156 21.7054C85.2134 21.913 85.5766 22.0168 85.9917 22.0168H86.0089L87.1331 21.9995V20.6159C87.1677 20.5813 87.2196 20.5467 87.2542 20.5121C87.5655 20.2181 87.7558 19.8549 87.8249 19.4398L88.8627 19.4571L89.9004 19.4744L89.9522 18.4367C89.9695 18.1253 89.935 17.8313 89.8831 17.5373H90.2636L91.3013 17.5546L91.3532 16.5169C91.3705 16.0499 91.3013 15.6003 91.1456 15.2025H91.1802H92.2871L92.2525 14.0956C92.2352 13.2308 91.7855 12.4006 91.0591 11.8818C90.4192 11.4148 89.6928 11.2419 89.1221 11.19V8.66488H131.392V11.1727C130.821 11.2246 130.06 11.3975 129.403 11.8818C128.676 12.4179 128.226 13.2481 128.209 14.0956L128.175 15.2025H129.281H129.316C129.16 15.6003 129.074 16.0499 129.109 16.5169L129.16 17.5546L130.198 17.5373H130.579C130.509 17.814 130.492 18.1253 130.509 18.4367L130.561 19.4744L131.599 19.4571L132.637 19.4398C132.706 19.8376 132.896 20.2181 133.207 20.5121C133.242 20.5467 133.294 20.5813 133.329 20.6159V21.9995L134.453 22.0168H134.47C134.885 22.0168 135.248 21.913 135.646 21.7054C135.923 21.5498 136.182 21.3595 136.39 21.1347L138.517 23.1582C137.67 25.8909 137.635 28.8311 138.223 30.9757V30.993C138.033 31.287 137.843 31.5983 137.67 31.8923C137.514 32.1517 137.358 32.4112 137.203 32.6706C136.822 33.2932 136.442 33.7948 136.165 34.1234C135.49 32.4976 134.141 31.8923 132.965 31.8923C132.256 31.8923 131.547 32.0998 130.89 32.4976L129.593 33.2759L130.7 34.3136L131.201 34.7806C131.149 35.0573 131.149 35.3513 131.201 35.6627C131.219 35.7491 131.236 35.8356 131.27 35.9221C131.167 35.9221 131.08 35.9048 130.976 35.9048C130.025 35.9048 129.126 36.2853 128.52 36.9598C128.036 37.4959 127.483 38.4472 127.604 39.9865L127.742 41.7506L129.212 40.9204C129.61 41.4047 130.146 41.7333 130.734 41.8889C130.475 42.4424 130.371 43.0304 130.458 43.6357C130.648 44.9675 131.686 45.936 133.242 46.2127L134.366 46.4203L134.557 45.2788L134.678 44.6216C135.456 44.414 136.061 43.8433 136.355 43.2034C136.563 43.4282 136.839 43.6184 137.185 43.7741L137.376 44.3967L137.41 44.5178L137.67 45.3653C136.251 46.5586 135.888 47.8731 135.819 48.219C135.127 50.8478 135.923 52.733 136.718 53.8572C137.237 54.6009 137.808 55.1024 138.206 55.3965C138.344 56.4169 138.379 58.0426 137.877 58.9593L135.629 58.1983C134.557 56.8665 132.983 56.0191 131.513 56.0191C130.596 56.0191 128.382 56.365 127.448 59.6511L126.947 61.3979L128.711 61.0174L128.866 60.9828C128.97 61.2941 129.126 61.6054 129.385 61.8649C127.984 62.1762 126.359 62.4183 124.543 62.4183C123.955 62.4183 123.367 62.3318 122.778 62.2453C122.052 62.5567 121.257 62.868 120.357 63.1447C120.478 63.1447 120.582 63.1447 120.703 63.1447C121.066 63.1447 121.429 63.162 121.758 63.1966C122.727 63.3176 123.643 63.4906 124.525 63.4906C126.826 63.4906 128.849 63.1447 130.492 62.695C130.319 62.9199 130.164 63.162 130.06 63.4387C129.8 64.0786 129.748 64.805 129.904 65.5487C129.835 65.566 129.783 65.5833 129.714 65.6006C129.403 65.6698 129.109 65.739 128.866 65.7736C128.399 65.86 128.123 65.8773 128.123 65.8773C128.123 65.8773 128.538 66.1022 129.126 66.5C129.835 66.9842 130.786 67.7106 131.599 68.5927C135.49 72.7781 131.288 75.9604 131.288 75.9604ZM142.08 75.8394C142.132 74.8535 142.166 73.8158 141.89 72.8646C141.388 71.2215 139.901 70.3222 138.31 69.9417C135.94 69.3883 134.574 69.2153 132.723 67.5031C132.689 67.4685 132.637 67.4339 132.602 67.3993L133.173 67.0534C133.398 67.1399 133.657 67.1918 133.917 67.1918C134.92 67.1918 135.819 66.5346 136.182 65.8773C136.269 65.7217 136.338 65.5833 136.39 65.4277C136.39 65.445 136.407 65.445 136.407 65.4623C136.545 65.6352 136.684 65.7736 136.822 65.8946L136.718 67.2091L136.615 68.4716L137.877 68.3851C138.707 68.3333 139.814 68.1603 140.662 67.4512L141.146 67.6933C141.336 67.7971 141.509 67.8836 141.682 67.9873C142.166 68.3333 142.651 68.7829 143.066 69.4229C143.291 69.7515 143.464 70.0628 143.602 70.3741C145.331 73.9888 142.08 75.8394 142.08 75.8394ZM156.66 77.3094C156.66 77.3094 154.809 73.1932 150.226 72.8473C148.721 72.7262 147.078 72.5187 145.868 71.5329C145.349 71.1005 145.02 70.4779 144.501 69.786C144.346 69.4574 144.155 69.1461 143.948 68.8175C143.412 68.0046 142.737 67.3474 141.907 66.8632C142.547 66.5173 143.654 66.033 144.968 66.033C145.418 66.033 145.868 66.0849 146.352 66.2232C147.943 66.6729 149.465 67.2782 151.16 67.2782C152.474 67.2782 153.893 66.915 155.501 65.8082C155.501 65.8082 155.415 67.6587 153.408 68.6964C153.132 68.8348 152.803 68.9732 152.44 69.0769C151.8 69.2672 151.004 69.3883 150.07 69.3883C149.69 69.3883 149.292 69.371 148.86 69.3364C148.86 69.3364 151.281 70.1147 153.477 71.4983C154.809 72.3457 156.037 73.4007 156.591 74.646C156.971 75.4589 157.058 76.3409 156.66 77.3094ZM165.377 78.0531C162.903 78.0531 160.482 77.1711 158.718 75.2686C158.285 74.8189 157.905 74.3866 157.525 74.0061C156.936 72.7954 155.812 71.6712 154.169 70.6162C153.841 70.4087 153.495 70.2011 153.114 69.9936C153.201 69.959 153.27 69.9244 153.356 69.9071C153.529 69.8379 153.685 69.7688 153.841 69.6996C154.982 69.2499 155.881 68.9905 156.625 68.8694C156.625 68.9386 156.608 68.9905 156.608 69.0596L156.418 70.8583L158.095 70.1665L158.164 70.1492C158.286 70.3741 158.424 70.5643 158.58 70.7373C159.012 71.187 159.583 71.4291 160.223 71.4291C160.015 71.7404 159.877 72.0863 159.79 72.4495C159.531 73.591 159.963 74.8362 160.966 75.9431L161.693 76.7387L162.488 76.0296L163.232 75.3724C163.336 75.3897 163.439 75.3897 163.543 75.3897C164.598 75.3897 165.532 74.5595 165.826 73.7466C165.861 73.6429 165.895 73.5391 165.913 73.4353C166.034 73.5218 166.138 73.6083 166.241 73.6775L166.362 74.8535L166.483 76.1161L167.711 75.8048C168.628 75.5799 169.925 75.113 170.513 73.8677C170.79 73.2797 170.859 72.6225 170.738 71.8788C173.419 71.5674 175.529 70.8583 175.529 70.8583C173.972 75.4589 169.597 78.0531 165.377 78.0531ZM71.2216 4.98101C69.6477 5.41339 67.6588 4.99831 67.6588 4.99831C68.8694 6.19167 69.2672 6.91807 69.2672 6.91807C70.8584 7.00455 71.2216 5.96684 71.2216 4.98101ZM149.309 4.98101C149.309 5.96684 149.673 7.00455 151.264 6.93537C151.264 6.93537 151.679 6.20897 152.872 5.0156C152.872 5.0156 150.883 5.41339 149.309 4.98101ZM150.261 26.2887C150.537 25.8217 150.814 25.3547 151.091 24.8878C151.54 24.1268 151.955 23.3139 152.319 22.4837C152.665 21.6536 152.959 20.8234 153.218 19.9759C153.495 19.1458 153.737 18.2983 153.979 17.4508C153.599 18.2464 153.218 19.0247 152.803 19.803C152.405 20.5813 151.99 21.3423 151.54 22.0686C151.073 22.795 150.572 23.4696 150.018 24.1268C149.534 24.7148 149.015 25.3201 148.514 25.9082C149.084 25.9774 149.673 26.0811 150.261 26.2887ZM68.2122 22.4837C68.5581 23.3139 68.9905 24.1268 69.4402 24.8878C69.7169 25.3547 69.9936 25.8217 70.2703 26.2887C70.8584 26.0811 71.4464 25.9601 72.0171 25.9255C71.5156 25.3374 70.9967 24.7321 70.5125 24.1441C69.959 23.4696 69.4575 22.795 68.9905 22.0859C68.5408 21.3595 68.1257 20.5986 67.7279 19.8203C67.3302 19.042 66.9497 18.2464 66.5519 17.4681C66.794 18.3156 67.0534 19.1458 67.3129 19.9932C67.5723 20.8234 67.8663 21.6536 68.2122 22.4837ZM67.9528 27.4993C66.6211 25.5796 65.3412 23.6252 64.2689 21.5671C63.6809 20.4429 63.162 19.2841 62.7469 18.0908C62.3145 16.8974 61.9686 15.6694 61.6919 14.4242C61.8303 15.704 62.0205 16.9666 62.3145 18.2291C62.6086 19.4917 63.0064 20.7196 63.4733 21.9303C63.9403 23.1409 64.4764 24.317 65.0299 25.4758C65.4796 26.3924 65.9465 27.2918 66.4135 28.1911C66.8632 28.0528 67.382 27.8279 67.9528 27.4993ZM154.083 28.1911C154.567 27.2918 155.034 26.3924 155.466 25.4758C156.037 24.317 156.573 23.1409 157.023 21.9303C157.49 20.7196 157.87 19.4744 158.182 18.2291C158.476 16.9666 158.683 15.704 158.804 14.4242C158.528 15.6694 158.182 16.8974 157.749 18.0908C157.317 19.2841 156.798 20.4429 156.227 21.5671C155.155 23.6252 153.875 25.5796 152.544 27.4993C153.149 27.8279 153.65 28.0528 154.083 28.1911Z",
        fill: "#CC0000"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M128.469 14.1474H128.244H92.2871H92.1314L91.6298 15.2025H128.745L128.469 14.1474ZM133.38 20.5467V33.0511C133.761 33.1203 134.124 33.2759 134.435 33.5353V20.7542L133.38 20.5467ZM133.761 43.5147L133.484 45.0885C133.45 45.0885 133.415 45.0712 133.38 45.0712V47.2504C133.38 50.1733 132.516 52.8368 130.838 55.137C130.423 55.6905 129.973 56.2266 129.472 56.7455L88.3265 15.5657C88.1362 15.4792 87.9114 15.3927 87.652 15.3408V16.465C88.5167 16.759 88.9318 17.5373 88.8972 18.4021L87.7557 18.3848C87.5136 17.693 86.9083 17.2087 86.0954 17.0184V18.1426C86.4932 18.2983 86.7872 18.6096 86.7872 19.1285C86.7872 19.5781 86.424 19.924 86.0954 19.9932V33.4489C86.5105 33.103 87.012 32.9819 87.5309 32.9819C88.0324 32.9819 88.534 33.1721 89.001 33.4489L87.9287 34.452C88.5686 35.213 87.8941 36.3717 87.2023 36.7522C86.4586 37.15 86.8564 37.8418 87.3925 37.8418C87.5655 37.8418 87.7384 37.7727 87.9114 37.617C88.3611 37.2019 88.9491 36.9944 89.5198 36.9944C90.7305 36.9944 91.9239 37.9283 91.7682 39.8654L90.8343 39.3465C90.523 40.3669 89.7965 40.7993 89.122 40.7993C88.8107 40.7993 88.5167 40.7128 88.2919 40.5399C87.773 40.1594 87.2369 39.7616 86.8737 39.7616C86.7526 39.7616 86.6315 39.8135 86.5624 39.9173C86.2856 40.2978 86.5797 40.6782 87.5655 41.1625C89.2258 41.9927 89.5544 44.3794 87.3752 45.0193L87.012 45.0539L86.7353 43.4801C86.6142 43.5147 86.4932 43.532 86.3721 43.532C86.2683 43.532 86.1646 43.5147 86.0608 43.4974V47.2158C86.0608 50.8997 87.3233 53.9782 89.3815 56.4515C89.3988 56.4687 89.4161 56.486 89.4161 56.5033C89.4852 56.5898 89.5717 56.6763 89.6409 56.7628C89.6582 56.7801 89.6755 56.7974 89.6928 56.8146C89.7793 56.9184 89.8657 57.0049 89.9522 57.1087C89.9522 57.1087 89.9522 57.126 89.9695 57.126C90.056 57.2297 90.1598 57.3162 90.2462 57.42L90.2635 57.4373C90.3846 57.5065 90.4884 57.5929 90.5921 57.6794C90.7997 57.8524 91.0072 58.0599 91.1802 58.302C92.5119 59.4781 94.0685 60.4639 95.7461 61.2941C95.9363 61.3979 96.1266 61.5016 96.3341 61.5881C99.1014 62.9717 103.148 64.4764 110.222 64.4764C117.296 64.4764 121.343 62.9717 124.11 61.5881C124.318 61.4843 124.508 61.3806 124.698 61.2941C126.359 60.4812 127.881 59.4954 129.212 58.3539C129.247 58.302 129.281 58.2501 129.316 58.1983C129.333 58.181 129.351 58.1637 129.368 58.1291C129.385 58.1118 129.403 58.0772 129.437 58.0599C129.454 58.0253 129.489 58.008 129.506 57.9734C129.524 57.9561 129.524 57.9388 129.541 57.9388C129.575 57.9042 129.61 57.8697 129.645 57.8351L129.662 57.8178C129.697 57.7832 129.731 57.7486 129.766 57.714C129.766 57.714 129.766 57.714 129.783 57.6967C129.818 57.6621 129.869 57.6275 129.904 57.5929C129.991 57.5238 130.077 57.4719 130.163 57.42C130.181 57.4027 130.198 57.4027 130.215 57.3854C132.792 54.7565 134.401 51.3494 134.401 47.1812V43.5147C134.297 43.5492 134.193 43.5665 134.072 43.5665C134.003 43.5665 133.882 43.5492 133.761 43.5147Z",
        fill: "#CC0000"
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("path", {
        d: "M11.9378 1H0V99.487H11.9378V1Z",
        fill: "#FFCC00"
      })]
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("defs", {
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("clipPath", {
        id: "clip0_908_6292",
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("rect", {
          width: "192",
          height: "100",
          fill: "white"
        })
      })
    })]
  }));
});
LogoImage.displayName = 'LogoImage';

var _excluded$C = ["children", "className"];
function ownKeys$C(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$C(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$C(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$C(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Mark = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$C);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("mark", _objectSpread$C(_objectSpread$C({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-mark', className)
  }, restProps), {}, {
    children: children
  }));
});
Mark.displayName = 'Mark';

var _excluded$B = ["children", "className"];
function ownKeys$B(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$B(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$B(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$B(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var MultilineData = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$B);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("pre", _objectSpread$B(_objectSpread$B({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-multiline-data', 'utrecht-multiline-data--html-pre', className)
  }, restProps), {}, {
    children: children
  }));
});
MultilineData.displayName = 'MultilineData';

var NavBar = function NavBar(_ref) {
  var appearance = _ref.appearance,
    children = _ref.children;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    className: "utrecht-nav-bar",
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-nav-bar__content', {
        'utrecht-nav-bar__content--center': appearance === 'center'
      }),
      children: children
    })
  });
};
NavBar.displayName = 'NavBar';

var _excluded$A = ["appearance", "children", "className"],
  _excluded2$3 = ["center", "children", "className"],
  _excluded3$1 = ["center", "children", "className"];
function ownKeys$A(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$A(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$A(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$A(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var NavList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var appearance = _ref.appearance,
    children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$A);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", _objectSpread$A(_objectSpread$A({
    role: "list",
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-nav-list', {
      'utrecht-nav-list--center': appearance === 'center'
    }, className),
    ref: ref
  }, restProps), {}, {
    children: children
  }));
});
NavList.displayName = 'NavList';
var NavListLink = function NavListLink(_ref2) {
  var center = _ref2.center,
    children = _ref2.children,
    className = _ref2.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, _excluded2$3);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-nav-list__item', {
      'utrecht-nav-list__item--center': center
    }, className),
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_utrecht_link_react__WEBPACK_IMPORTED_MODULE_8__.Link, _objectSpread$A(_objectSpread$A({
      className: "utrecht-nav-list__link"
    }, restProps), {}, {
      children: children
    }))
  });
};
NavListLink.displayName = 'NavListLink';
var NavListLinkButton = function NavListLinkButton(_ref3) {
  var center = _ref3.center,
    children = _ref3.children,
    className = _ref3.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, _excluded3$1);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", {
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-nav-list__item', {
      'utrecht-nav-list__item--center': center
    }, className),
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(LinkButton, _objectSpread$A(_objectSpread$A({
      className: "utrecht-nav-list__link"
    }, restProps), {}, {
      children: children
    }))
  });
};
NavListLinkButton.displayName = 'NavListLinkButton';

var _excluded$z = ["children", "className", "value"];
function ownKeys$z(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$z(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$z(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$z(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var NumberBadge = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    value = _ref.value,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$z);
  var props = _objectSpread$z({
    children: children,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-number-badge', className)
  }, restProps);
  return typeof value !== 'undefined' ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("data", _objectSpread$z(_objectSpread$z({}, props), {}, {
    value: value,
    ref: ref
  })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", _objectSpread$z(_objectSpread$z({}, props), {}, {
    ref: ref
  }));
});
NumberBadge.displayName = 'NumberBadge';

var _excluded$y = ["children", "className", "value"];
function ownKeys$y(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$y(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$y(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$y(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var NumberData = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    value = _ref.value,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$y);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("data", _objectSpread$y(_objectSpread$y({
    value: typeof value === 'string' || typeof value === 'number' ? String(value) : undefined
  }, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-number-data', className),
    children: children
  }));
});
NumberData.displayName = 'NumberData';

var _excluded$x = ["children", "className"];
function ownKeys$x(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$x(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$x(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$x(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var OrderedList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$x);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ol", _objectSpread$x(_objectSpread$x({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-ordered-list', className),
    children: children
  }));
});
OrderedList.displayName = 'OrderedList';

var _excluded$w = ["children", "className"];
function ownKeys$w(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$w(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$w(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$w(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var OrderedListItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$w);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", _objectSpread$w(_objectSpread$w({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-ordered-list__item', className),
    children: children
  }));
});
OrderedListItem.displayName = 'OrderedListItem';

var _excluded$v = ["children", "className"];
function ownKeys$v(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$v(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$v(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$v(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Page = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$v);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", _objectSpread$v(_objectSpread$v({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-page', className),
    children: children
  }));
});
Page.displayName = 'Page';

var _excluded$u = ["children", "className"],
  _excluded2$2 = ["children", "className"];
function ownKeys$u(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$u(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$u(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$u(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var PageContent = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$u);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", _objectSpread$u(_objectSpread$u({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-page-content', className),
    children: children
  }));
});
PageContent.displayName = 'PageContent';
var PageContentMain = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref2, ref) {
  var children = _ref2.children,
    className = _ref2.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, _excluded2$2);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("main", _objectSpread$u(_objectSpread$u({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-page-content__main', className),
    children: children
  }));
});
PageContentMain.displayName = 'PageContentMain';

var _excluded$t = ["children", "className"];
function ownKeys$t(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$t(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$t(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$t(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var PageFooter = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$t);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("footer", _objectSpread$t(_objectSpread$t({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-page-footer', className),
    children: children
  }));
});
PageFooter.displayName = 'PageFooter';

var _excluded$s = ["children", "className"];
function ownKeys$s(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$s(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$s(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$s(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var PageHeader = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$s);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("header", _objectSpread$s(_objectSpread$s({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-page-header', className),
    children: children
  }));
});
PageHeader.displayName = 'PageHeader';

var _excluded$r = ["children", "className", "lead", "small", "appearance"];
function ownKeys$r(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$r(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$r(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$r(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Paragraph = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    lead = _ref.lead,
    small = _ref.small,
    appearance = _ref.appearance,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$r);
  var isLead = appearance === 'lead' || !!lead;
  var isSmall = appearance === 'small' || !!small;
  // Ignore combinations of `lead` and `small`
  isLead = isLead !== isSmall ? isLead : false;
  isSmall = isSmall !== isLead ? isSmall : false;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", _objectSpread$r(_objectSpread$r({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-paragraph', isLead && "utrecht-paragraph--lead", isSmall && "utrecht-paragraph--small", className),
    children: isLead ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("b", {
      className: "utrecht-paragraph__b",
      children: children
    }) : isSmall ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("small", {
      className: "utrecht-paragraph__small",
      children: children
    }) : children
  }));
});
Paragraph.displayName = 'Paragraph';

var _excluded$q = ["loading", "className"];
function ownKeys$q(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$q(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$q(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$q(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DataPlaceholder = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var loading = _ref.loading,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$q);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", _objectSpread$q({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-data-placeholder', {
      'utrecht-data-placeholder--loading': loading
    }, className)
  }, restProps));
});
DataPlaceholder.displayName = 'DataPlaceholder';

var _excluded$p = ["children", "className"];
function ownKeys$p(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$p(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$p(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$p(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var PreHeading = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$p);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", _objectSpread$p(_objectSpread$p({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-pre-heading', className),
    children: children
  }));
});
PreHeading.displayName = 'PreHeading';

var _excluded$o = ["children", "className", "dateTime", "value"];
function ownKeys$o(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$o(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$o(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$o(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var PreserveData = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    dateTime = _ref.dateTime,
    value = _ref.value,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$o);
  var props = _objectSpread$o({
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("bdi", {
      translate: "no",
      children: children
    }),
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-preserve-data', className)
  }, restProps);
  return typeof dateTime !== 'undefined' ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("time", _objectSpread$o(_objectSpread$o({}, props), {}, {
    dateTime: dateTime,
    ref: ref
  })) : typeof value !== 'undefined' ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("data", _objectSpread$o(_objectSpread$o({}, props), {}, {
    value: value,
    ref: ref
  })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("bdi", _objectSpread$o(_objectSpread$o({
    translate: "no",
    ref: ref
  }, props), {}, {
    children: children
  }));
});
PreserveData.displayName = 'PreserveData';

var _excluded$n = ["className", "children"];
function ownKeys$n(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$n(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$n(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$n(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var RichText = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
    children = _ref.children,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$n);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", _objectSpread$n(_objectSpread$n({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-rich-text', className),
    children: children
  }));
});
RichText.displayName = 'RichText';

var _excluded$m = ["children"];
function ownKeys$m(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$m(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$m(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$m(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var scrollToTop = function scrollToTop() {
  var reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (reduceMotionQuery.matches) {
    // If prefers-reduced-motion is set to reduce, instantly jump to the top
    window.scrollTo(0, 0);
  } else {
    // If not, use smooth scrolling animation
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
};
var ScrollLink = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$m);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(ButtonLink, _objectSpread$m(_objectSpread$m({
    href: "#top",
    onClick: scrollToTop,
    ref: ref
  }, restProps), {}, {
    children: children
  }));
});
ScrollLink.displayName = 'ScrollLink';

var _excluded$l = ["busy", "invalid", "required", "className", "noscript", "children"],
  _excluded2$1 = ["disabled", "invalid", "value", "children", "className"];
function ownKeys$l(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$l(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$l(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$l(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Select = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var busy = _ref.busy,
    invalid = _ref.invalid,
    required = _ref.required,
    className = _ref.className,
    noscript = _ref.noscript,
    children = _ref.children,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$l);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("select", _objectSpread$l(_objectSpread$l({
    "aria-busy": busy || undefined,
    "aria-invalid": invalid || undefined,
    required: noscript ? required : false,
    "aria-required": noscript ? undefined : required || undefined,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-select', 'utrecht-select--html-select', busy && 'utrecht-select--busy', invalid && 'utrecht-select--invalid', required && 'utrecht-select--required', className),
    ref: ref
  }, restProps), {}, {
    children: children
  }));
});
Select.displayName = 'Select';
var SelectOption = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref2, ref) {
  var disabled = _ref2.disabled,
    invalid = _ref2.invalid,
    value = _ref2.value,
    children = _ref2.children,
    className = _ref2.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, _excluded2$1);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("option", _objectSpread$l(_objectSpread$l({}, restProps), {}, {
    ref: ref,
    disabled: disabled,
    value: value,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-select__option', disabled && 'utrecht-select__option--disabled', invalid && 'utrecht-select__option--invalid', className),
    children: children
  }));
});
SelectOption.displayName = 'SelectOption';

var _excluded$k = ["className", "children"];
function ownKeys$k(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$k(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$k(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$k(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
// Do not pass `children` along with `restProps` and use _children as it's unused
var Separator = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var className = _ref.className;
    _ref.children;
    var restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$k);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("hr", _objectSpread$k(_objectSpread$k({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-separator', className)
  }));
});
Separator.displayName = 'Separator';

var _excluded$j = ["children", "className"];
function ownKeys$j(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$j(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$j(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$j(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var SkipLink = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$j);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", _objectSpread$j(_objectSpread$j({
      ref: ref
    }, restProps), {}, {
      className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-skip-link', 'utrecht-skip-link--visible-on-focus', className),
      children: children
    }))
  });
});
SkipLink.displayName = 'SkipLink';

var _excluded$i = ["aside", "children", "className", "type"];
function ownKeys$i(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$i(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$i(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$i(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var SpotlightSection = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var aside = _ref.aside,
    children = _ref.children,
    className = _ref.className,
    type = _ref.type,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$i);
  var props = _objectSpread$i(_objectSpread$i({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-spotlight-section', (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({}, "utrecht-spotlight-section--".concat(type), type), className)
  });
  return aside ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("aside", _objectSpread$i(_objectSpread$i({}, props), {}, {
    children: children
  })) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", _objectSpread$i(_objectSpread$i({}, props), {}, {
    children: children
  }));
});
SpotlightSection.displayName = 'SpotlightSection';

var _excluded$h = ["className", "status"];
function ownKeys$h(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$h(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$h(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$h(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var StatusBadge = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
    status = _ref.status,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$h);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", _objectSpread$h(_objectSpread$h({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-badge-status', "utrecht-badge-status--".concat(status ? status : 'neutral'), className)
  }, restProps), {}, {
    ref: ref
  }));
});
StatusBadge.displayName = 'StatusBadge';

var _excluded$g = ["children", "className"];
function ownKeys$g(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$g(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$g(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$g(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Strong = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$g);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", _objectSpread$g(_objectSpread$g({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-emphasis', 'utrecht-emphasis--strong', className)
  }, restProps), {}, {
    children: children
  }));
});
Strong.displayName = 'Strong';

var _excluded$f = ["children", "className", "openType"];
function ownKeys$f(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$f(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$f(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$f(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Subscript = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    openType = _ref.openType,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$f);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("sub", _objectSpread$f(_objectSpread$f({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-subscript', {
      'utrecht-subscript--open-type': openType
    }, className)
  }, restProps), {}, {
    children: children
  }));
});
Subscript.displayName = 'Subscript';

var _excluded$e = ["children", "className", "openType"];
function ownKeys$e(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$e(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$e(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$e(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Superscript = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    openType = _ref.openType,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$e);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("sup", _objectSpread$e(_objectSpread$e({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-superscript', {
      'utrecht-superscript--open-type': openType
    }, className)
  }, restProps), {}, {
    children: children
  }));
});
Superscript.displayName = 'Superscript';

var _excluded$d = ["children", "className"];
function ownKeys$d(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$d(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$d(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$d(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Surface = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$d);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", _objectSpread$d(_objectSpread$d({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-surface', className),
    children: children
  }));
});
Surface.displayName = 'Surface';

var _excluded$c = ["overflowInline", "children", "className"];
function ownKeys$c(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$c(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$c(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$c(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TableContainer = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var overflowInline = _ref.overflowInline,
    children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$c);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", _objectSpread$c(_objectSpread$c({
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-table-container', {
      'utrecht-table-container--overflow-inline': overflowInline
    }, className)
  }, restProps), {}, {
    children: children
  }));
});
TableContainer.displayName = 'TableContainer';

var _excluded$b = ["busy", "children", "className"];
function ownKeys$b(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$b(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$b(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$b(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Table = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var busy = _ref.busy,
    children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$b);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("table", _objectSpread$b(_objectSpread$b({
    "aria-busy": busy
  }, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-table', {
      'utrecht-table--busy': busy
    }, className),
    children: children
  }));
});
Table.displayName = 'Table';

var _excluded$a = ["children", "className"];
function ownKeys$a(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$a(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$a(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$a(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TableBody = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$a);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tbody", _objectSpread$a(_objectSpread$a({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-table__body', className),
    children: children
  }));
});
TableBody.displayName = 'TableBody';

var _excluded$9 = ["children", "className"];
function ownKeys$9(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$9(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$9(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$9(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TableCaption = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$9);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("caption", _objectSpread$9(_objectSpread$9({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-table__caption', className),
    children: children
  }));
});
TableCaption.displayName = 'TableCaption';

var _excluded$8 = ["children", "className", "numericColumn", "selected"];
function ownKeys$8(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$8(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$8(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$8(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TableCell = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    numericColumn = _ref.numericColumn,
    selected = _ref.selected,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$8);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("td", _objectSpread$8(_objectSpread$8({
    "aria-selected": selected ? true : undefined
  }, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-table__cell', {
      'utrecht-table__cell--selected': selected,
      'utrecht-table__cell--numeric-column': numericColumn
    }, className),
    children: children
  }));
});
TableCell.displayName = 'TableCell';

var _excluded$7 = ["children", "className", "sticky"];
function ownKeys$7(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$7(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$7(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$7(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TableFooter = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    sticky = _ref.sticky,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$7);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tfoot", _objectSpread$7(_objectSpread$7({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-table__footer', {
      'utrecht-table__footer--sticky': sticky
    }, className),
    children: children
  }));
});
TableFooter.displayName = 'TableFooter';

var _excluded$6 = ["children", "className", "sticky"];
function ownKeys$6(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$6(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$6(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$6(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TableHeader = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    sticky = _ref.sticky,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$6);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("thead", _objectSpread$6(_objectSpread$6({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-table__header', {
      'utrecht-table__header--sticky': sticky
    }, className),
    children: children
  }));
});
TableHeader.displayName = 'TableHeader';

var _excluded$5 = ["children", "className", "numericColumn", "selected", "sticky", "scope"];
function ownKeys$5(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$5(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$5(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$5(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TableHeaderCell = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    numericColumn = _ref.numericColumn,
    selected = _ref.selected,
    sticky = _ref.sticky,
    scope = _ref.scope,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$5);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("th", _objectSpread$5(_objectSpread$5({
    "aria-selected": selected ? true : undefined,
    scope: scope
  }, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-table__header-cell', {
      'utrecht-table__header-cell--numeric-column': numericColumn,
      'utrecht-table__header-cell--selected': selected,
      'utrecht-table__header-cell--sticky-inline': sticky && scope === 'row',
      'utrecht-table__header-cell--sticky-block': sticky && scope === 'col'
    }, className),
    children: children
  }));
});
TableHeaderCell.displayName = 'TableHeaderCell';

var _excluded$4 = ["children", "className"],
  _excluded2 = ["children", "className"],
  _excluded3 = ["children", "className"],
  _excluded4 = ["children", "className", "label"];
function ownKeys$4(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$4(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$4(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TableOfContents = function TableOfContents(_ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$4);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", _objectSpread$4(_objectSpread$4({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__.clsx)('utrecht-table-of-contents', className)
  }, restProps), {}, {
    children: children
  }));
};
var TableOfContentsList = function TableOfContentsList(_ref2) {
  var children = _ref2.children,
    className = _ref2.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref2, _excluded2);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", _objectSpread$4(_objectSpread$4({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__.clsx)('utrecht-table-of-contents__list', className)
  }, restProps), {}, {
    children: children
  }));
};
var TableOfContentsListItem = function TableOfContentsListItem(_ref3) {
  var children = _ref3.children,
    className = _ref3.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref3, _excluded3);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", _objectSpread$4(_objectSpread$4({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__.clsx)('utrecht-table-of-contents__list-item', className)
  }, restProps), {}, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      className: "utrecht-table-of-contents__list-item-body",
      children: children
    })
  }));
};
var TableOfContentsLink = function TableOfContentsLink(_ref4) {
  var children = _ref4.children,
    className = _ref4.className,
    label = _ref4.label,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref4, _excluded4);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_utrecht_link_react__WEBPACK_IMPORTED_MODULE_8__.Link, _objectSpread$4(_objectSpread$4({
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__.clsx)('utrecht-table-of-contents__link', className)
  }, restProps), {}, {
    children: [label && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      className: "utrecht-table-of-contents__list-item-label",
      children: label
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
      className: "utrecht-table-of-contents__list-item-title",
      children: children
    })]
  }));
};

var _excluded$3 = ["children", "className", "selected"];
function ownKeys$3(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var TableRow = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    selected = _ref.selected,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$3);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("tr", _objectSpread$3(_objectSpread$3({
    "aria-selected": selected ? true : undefined
  }, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-table__row', {
      'utrecht-table__row--selected': selected
    }, className),
    children: children
  }));
});
TableRow.displayName = 'TableRow';

var _excluded$2 = ["children", "className"];
function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var URLData = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$2);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("bdi", _objectSpread$2(_objectSpread$2({
    translate: "no"
  }, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-url-data', className),
    children: children
  }));
});
URLData.displayName = 'URLData';

var _excluded$1 = ["children", "className"];
function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var UnorderedList = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded$1);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", _objectSpread$1(_objectSpread$1({
    role: "list"
  }, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-unordered-list', className),
    children: children
  }));
});
UnorderedList.displayName = 'UnorderedList';

var _excluded = ["children", "className"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var UnorderedListItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(function (_ref, ref) {
  var children = _ref.children,
    className = _ref.className,
    restProps = (0,_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_ref, _excluded);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li", _objectSpread(_objectSpread({}, restProps), {}, {
    ref: ref,
    className: (0,clsx__WEBPACK_IMPORTED_MODULE_6__["default"])('utrecht-unordered-list__item', className),
    children: children
  }));
});
UnorderedListItem.displayName = 'UnorderedListItem';


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/data-badge-react/dist/index.mjs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/data-badge-react/dist/index.mjs ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataBadge: () => (/* binding */ DataBadge)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");



function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const DataBadge = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ children, className, dateTime, value, ...restProps }, ref) => {
    const props = {
        children,
        className: clsx('utrecht-data-badge', className),
        ...restProps,
    };
    return typeof dateTime !== 'undefined' ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("time", { ...props, dateTime: dateTime, ref: ref })) : typeof value !== 'undefined' ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("data", { ...props, value: value, ref: ref })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", { ...props, ref: ref }));
});
DataBadge.displayName = 'DataBadge';


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/fieldset-react/dist/index.mjs":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/fieldset-react/dist/index.mjs ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fieldset: () => (/* binding */ Fieldset),
/* harmony export */   FieldsetLegend: () => (/* binding */ FieldsetLegend),
/* harmony export */   FieldsetOnly: () => (/* binding */ FieldsetOnly)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");



function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const FieldsetLegend = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ className, children, ...restProps }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("legend", { ...restProps, ref: ref, className: clsx('utrecht-form-fieldset__legend', 'utrecht-form-fieldset__legend--html-legend', className), children: children })));
FieldsetLegend.displayName = 'FieldsetLegend';

const Fieldset = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ 'aria-describedby': ariaDescribedby, 'aria-label': ariaLabel, 'aria-labelledby': ariaLabelledby, className, children, disabled, form, invalid, name, required, role, ...restProps }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ...restProps, ref: ref, className: clsx('utrecht-form-fieldset', disabled && 'utrecht-form-fieldset--disabled', invalid && 'utrecht-form-fieldset--invalid', className), children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("fieldset", { "aria-describedby": ariaDescribedby, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledby, "aria-invalid": role === 'radiogroup' ? invalid || undefined : undefined, "aria-required": role === 'radiogroup' ? required || undefined : undefined, disabled: disabled, form: form, name: name, role: role, className: clsx('utrecht-form-fieldset__fieldset', 'utrecht-form-fieldset--html-fieldset'), children: children }) })));
Fieldset.displayName = 'Fieldset';
const FieldsetOnly = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ className, children, disabled, invalid, ...restProps }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("fieldset", { ...restProps, ref: ref, "aria-invalid": invalid || undefined, disabled: disabled, className: clsx('utrecht-form-fieldset', 'utrecht-form-fieldset--html-fieldset', disabled && 'utrecht-form-fieldset--disabled', invalid && 'utrecht-form-fieldset--invalid', className), children: children })));
FieldsetOnly.displayName = 'Fieldset';


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/form-field-checkbox-react/dist/index.mjs":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/form-field-checkbox-react/dist/index.mjs ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormFieldCheckbox: () => (/* binding */ FormFieldCheckbox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");



function r$5(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r$5(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx$5(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r$5(e))&&(n&&(n+=" "),n+=t);return n}

const Checkbox = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ appearance = 'custom', disabled, indeterminate = false, inputRequired, invalid, required, className, ...restProps }, ref) => {
    // What's the correct way to use useRef and forwardRef together?
    // https://stackoverflow.com/a/68163315
    // `indeterminate` is has no TypeScript definition in React.
    // `indeterminate` renders an attribute, not a property in React.
    let internalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, () => internalRef.current);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
        if (internalRef.current) {
            internalRef.current.indeterminate = indeterminate;
        }
    }, [indeterminate]);
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { ...restProps, ref: internalRef, type: "checkbox", className: clsx$5('utrecht-checkbox', 'utrecht-checkbox--html-input', {
            'utrecht-checkbox--disabled': disabled,
            'utrecht-checkbox--custom': appearance === 'custom',
            'utrecht-checkbox--invalid': invalid,
            'utrecht-checkbox--indeterminate': indeterminate,
            'utrecht-checkbox--required': required || inputRequired,
        }, className), "aria-checked": indeterminate ? 'mixed' : undefined, "aria-invalid": invalid || undefined, "aria-required": required ? required : undefined, disabled: disabled, required: inputRequired }));
});
Checkbox.displayName = 'Checkbox';

function r$4(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r$4(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx$4(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r$4(e))&&(n&&(n+=" "),n+=t);return n}

const FormFieldDescription = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ invalid, valid, warning, className, children, ...restProps }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ...restProps, ref: ref, className: clsx$4('utrecht-form-field-description', invalid && 'utrecht-form-field-description--invalid', valid && 'utrecht-form-field-description--valid', warning && 'utrecht-form-field-description--warning', className), children: children })));
FormFieldDescription.displayName = 'FormFieldDescription';

function r$3(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r$3(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx$3(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r$3(e))&&(n&&(n+=" "),n+=t);return n}

const FormFieldErrorMessage = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ className, children, ...restProps }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ...restProps, ref: ref, className: clsx$3('utrecht-form-field-error-message', className), children: children })));
FormFieldErrorMessage.displayName = 'FormFieldErrorMessage';

function r$2(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r$2(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx$2(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r$2(e))&&(n&&(n+=" "),n+=t);return n}

const FormField = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ className, children, description, errorMessage, input, invalid, label, type, ...restProps }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { ...restProps, ref: ref, className: clsx$2('utrecht-form-field', {
        'utrecht-form-field--invalid': invalid,
        'utrecht-form-field--checkbox': type === 'checkbox',
        'utrecht-form-field--radio': type === 'radio',
        'utrecht-form-field--text': !type || type === 'text',
    }, className), children: [label && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "utrecht-form-field__label", children: label }), description && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "utrecht-form-field__description", children: description }), input && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "utrecht-form-field__input", children: input }), errorMessage && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "utrecht-form-field__error-message", children: errorMessage }), children] })));
FormField.displayName = 'FormField';

function r$1(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r$1(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx$1(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r$1(e))&&(n&&(n+=" "),n+=t);return n}

const FormLabel = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ children, className, type, disabled, checked, ...restProps }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { ...restProps, ref: ref, className: clsx$1('utrecht-form-label', type && `utrecht-form-label--${type}`, disabled && 'utrecht-form-label--disabled', checked && 'utrecht-form-label--checked', className), children: children })));
FormLabel.displayName = 'FormLabel';

function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const FormFieldCheckbox = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ checked, children, defaultChecked, defaultValue, description, disabled, errorMessage, indeterminate, inputRef, inputRequired, invalid, label, name, onBlur, onChange, onFocus, onInput, required, status, value, ...props }, ref) => {
    const inputId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    const descriptionId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    const statusId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    const errorMessageId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FormField, { invalid: invalid, type: "checkbox", ref: ref, ...props, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "utrecht-form-field__label utrecht-form-field__label--checkbox", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(FormLabel, { type: "checkbox", htmlFor: inputId, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Checkbox, { "aria-describedby": clsx({
                                [descriptionId]: description,
                                [errorMessageId]: invalid,
                                [statusId]: status,
                            }) || undefined, checked: checked, className: "utrecht-form-field__input", defaultChecked: defaultChecked, defaultValue: defaultValue, disabled: disabled, id: inputId, indeterminate: indeterminate, ref: inputRef, inputRequired: inputRequired, invalid: invalid, name: name, onBlur: onBlur, onChange: onChange, onFocus: onFocus, onInput: onInput, required: required, value: value }), label] }) }), description && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FormFieldDescription, { className: "utrecht-form-field__description", id: descriptionId, children: description })), invalid && errorMessage && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(FormFieldErrorMessage, { className: "utrecht-form-field__error-message", id: errorMessageId, children: errorMessage })), status && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "utrecht-form-field__status", id: statusId, children: status })), children] }));
});
FormFieldCheckbox.displayName = 'FormFieldCheckbox';


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/form-field-description-react/dist/index.mjs":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/form-field-description-react/dist/index.mjs ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormFieldDescription: () => (/* binding */ FormFieldDescription)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");



function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const FormFieldDescription = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ invalid, valid, warning, className, children, ...restProps }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ...restProps, ref: ref, className: clsx('utrecht-form-field-description', invalid && 'utrecht-form-field-description--invalid', valid && 'utrecht-form-field-description--valid', warning && 'utrecht-form-field-description--warning', className), children: children })));
FormFieldDescription.displayName = 'FormFieldDescription';


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/form-field-error-message-react/dist/index.mjs":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/form-field-error-message-react/dist/index.mjs ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormFieldErrorMessage: () => (/* binding */ FormFieldErrorMessage)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");



function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const FormFieldErrorMessage = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ className, children, ...restProps }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { ...restProps, ref: ref, className: clsx('utrecht-form-field-error-message', className), children: children })));
FormFieldErrorMessage.displayName = 'FormFieldErrorMessage';


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/form-field-react/dist/index.mjs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/form-field-react/dist/index.mjs ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormField: () => (/* binding */ FormField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");



function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const FormField = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ className, children, description, errorMessage, input, invalid, label, type, ...restProps }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { ...restProps, ref: ref, className: clsx('utrecht-form-field', {
        'utrecht-form-field--invalid': invalid,
        'utrecht-form-field--checkbox': type === 'checkbox',
        'utrecht-form-field--radio': type === 'radio',
        'utrecht-form-field--text': !type || type === 'text',
    }, className), children: [label && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "utrecht-form-field__label", children: label }), description && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "utrecht-form-field__description", children: description }), input && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "utrecht-form-field__input", children: input }), errorMessage && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "utrecht-form-field__error-message", children: errorMessage }), children] })));
FormField.displayName = 'FormField';


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/form-label-react/dist/index.mjs":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/form-label-react/dist/index.mjs ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormLabel: () => (/* binding */ FormLabel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");



function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const FormLabel = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ children, className, type, disabled, checked, ...restProps }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", { ...restProps, ref: ref, className: clsx('utrecht-form-label', type && `utrecht-form-label--${type}`, disabled && 'utrecht-form-label--disabled', checked && 'utrecht-form-label--checked', className), children: children })));
FormLabel.displayName = 'FormLabel';


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/link-react/dist/index.mjs":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/link-react/dist/index.mjs ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Link: () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");



function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const Link = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ boxContent, children, className, external, href, placeholder, role, ...restProps }, ref) => (
// "utrecht-link--telephone" does not have a corresponding API,
// since it is primarily a basis for implementing input[href^="tel"].
// Telephone number rendering in React is best achieved using composition
// of the TelephoneValue component.
(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { href: placeholder ? undefined : href, ref: ref, role: role || (placeholder ? 'link' : undefined), className: clsx('utrecht-link', 'utrecht-link--html-a', {
        'utrecht-link--box-content': boxContent,
        'utrecht-link--external': external,
        'utrecht-link--placeholder': placeholder,
    }, className), "aria-disabled": placeholder ? 'true' : undefined, rel: external ? 'external noopener noreferrer' : undefined, ...restProps, children: children })));
Link.displayName = 'Link';


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/listbox-react/dist/index.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/listbox-react/dist/index.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Listbox: () => (/* binding */ Listbox),
/* harmony export */   ListboxOption: () => (/* binding */ ListboxOption),
/* harmony export */   ListboxOptionGroup: () => (/* binding */ ListboxOptionGroup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");



function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const Listbox = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ children, className, disabled, invalid, multiple, readOnly, required, ...restProps }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: clsx('utrecht-listbox', 'utrecht-listbox--html-div', {
        'utrecht-listbox--disabled': disabled,
        'utrecht-listbox--invalid': invalid,
        'utrecht-listbox--read-only': readOnly,
    }, className), role: "listbox", "aria-disabled": disabled || undefined, "aria-invalid": invalid || undefined, "aria-multiselectable": multiple || undefined, "aria-readonly": readOnly || undefined, "aria-required": required || undefined, tabIndex: 0, ...restProps, ref: ref, children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { className: "utrecht-listbox__list", role: "none", children: children }) })));
Listbox.displayName = 'Listbox';
const ListboxOptionGroup = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ children, label, ...restProps }, ref) => {
    const id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)();
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", { className: "utrecht-listbox__group", role: "group", "aria-labelledby": id, ...restProps, ref: ref, children: [label && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { id: id, className: "utrecht-listbox__group-label", children: label })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("ul", { children: children })] }));
});
ListboxOptionGroup.displayName = 'ListboxOptionGroup';
const ListboxOption = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ active, className, disabled, selected, ...restProps }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("li", { className: clsx('utrecht-listbox__option', 'utrecht-listbox__option--html-li', {
        'utrecht-listbox__option--active': active,
        'utrecht-listbox__option--disabled': disabled,
        'utrecht-listbox__option--selected': selected,
    }, className), "aria-disabled": disabled || undefined, "aria-selected": selected ? 'true' : 'false', role: "option", ...restProps, ref: ref })));
ListboxOption.displayName = 'ListboxOption';


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/radio-button-react/dist/index.mjs":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/radio-button-react/dist/index.mjs ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RadioButton: () => (/* binding */ RadioButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");



function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const RadioButton = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ disabled, required, className, invalid, ...restProps }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { type: "radio", "aria-invalid": invalid || undefined, disabled: disabled, required: required, ref: ref, className: clsx('utrecht-radio-button', 'utrecht-radio-button--html-input', disabled && 'utrecht-radio-button--disabled', invalid && 'utrecht-radio-button--invalid', className), ...restProps })));
RadioButton.displayName = 'RadioButton';


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/textbox-react/dist/index.mjs":
/*!************************************************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/file/node_modules/@utrecht/textbox-react/dist/index.mjs ***!
  \************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Textbox: () => (/* binding */ Textbox)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");



function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const Textbox = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ dir, disabled, invalid, readOnly, required, inputRequired, className, type = 'text', inputMode, ...restProps }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { ...restProps, ref: ref, type: type, className: clsx('utrecht-textbox', 'utrecht-textbox--html-input', disabled && 'utrecht-textbox--disabled', invalid && 'utrecht-textbox--invalid', readOnly && 'utrecht-textbox--readonly', (required || inputRequired) && 'utrecht-textbox--required', className), dir: dir ?? 'auto', disabled: disabled, readOnly: readOnly, "aria-required": required ? required : undefined, required: inputRequired, "aria-invalid": invalid || undefined, inputMode: inputMode || (type === 'number' ? 'numeric' : undefined) })));
Textbox.displayName = 'Textbox';


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@utrecht/action-group-react/dist/index.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@utrecht/action-group-react/dist/index.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionGroup: () => (/* binding */ ActionGroup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");



function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const hasManyElements = (children) => Array.isArray(children) &&
    children.reduce((count, item) => ((0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(item) ? count + 1 : count), 0) >= 2;
const ActionGroup = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ children, className, direction, ...restProps }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { role: hasManyElements(children) ? 'group' : undefined, ...restProps, ref: ref, className: clsx('utrecht-action-group', {
        'utrecht-action-group--column': direction === 'column',
        'utrecht-action-group--row': direction === 'row',
    }, className), children: children })));
ActionGroup.displayName = 'ActionGroup';


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@utrecht/button-group-react/dist/index.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@utrecht/button-group-react/dist/index.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ButtonGroup: () => (/* binding */ ButtonGroup)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");



function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const hasManyElements = (children) => Array.isArray(children) &&
    children.reduce((count, item) => ((0,react__WEBPACK_IMPORTED_MODULE_1__.isValidElement)(item) ? count + 1 : count), 0) >= 2;
const ButtonGroup = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ children, className, direction, ...restProps }, ref) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", { role: hasManyElements(children) ? 'group' : undefined, ...restProps, ref: ref, className: clsx('utrecht-button-group', {
        'utrecht-button-group--column': direction === 'column',
        'utrecht-button-group--row': direction === 'row',
    }, className), children: children })));
ButtonGroup.displayName = 'ButtonGroup';


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/@utrecht/open-forms-container-react/dist/index.mjs":
/*!*************************************************************************!*\
  !*** ./node_modules/@utrecht/open-forms-container-react/dist/index.mjs ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OpenFormsContainer: () => (/* binding */ OpenFormsContainer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");


function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}

const OpenFormsContainer = ({ children, className, ...restProps }) => {
    return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: clsx('utrecht-open-forms-container', className), ...restProps, children: children }));
};


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/clsx/dist/clsx.mjs":
/*!*****************************************!*\
  !*** ./node_modules/clsx/dist/clsx.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clsx: () => (/* binding */ clsx),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ "./resources/blocks/zaak/components/DescriptionList.js":
/*!*************************************************************!*\
  !*** ./resources/blocks/zaak/components/DescriptionList.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DescriptionList: () => (/* binding */ DescriptionList)
/* harmony export */ });
/* harmony import */ var _gemeente_denhaag_descriptionlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gemeente-denhaag/descriptionlist */ "./node_modules/@gemeente-denhaag/descriptionlist/dist/mjs/index.js");
/* harmony import */ var _gemeente_denhaag_descriptionlist_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gemeente-denhaag/descriptionlist/index.css */ "./node_modules/@gemeente-denhaag/descriptionlist/dist/index.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const DescriptionList = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_gemeente_denhaag_descriptionlist__WEBPACK_IMPORTED_MODULE_0__.DescriptionList, {
  ...props
});

/***/ }),

/***/ "./resources/blocks/zaak/components/File.js":
/*!**************************************************!*\
  !*** ./resources/blocks/zaak/components/File.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   File: () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var _gemeente_denhaag_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gemeente-denhaag/file */ "./node_modules/@gemeente-denhaag/file/dist/mjs/index.js");
/* harmony import */ var _gemeente_denhaag_file_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gemeente-denhaag/file/index.css */ "./node_modules/@gemeente-denhaag/file/dist/index.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const File = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_gemeente_denhaag_file__WEBPACK_IMPORTED_MODULE_0__.File, {
  ...props
});

/***/ }),

/***/ "./resources/js/utils/dataset-to-props.js":
/*!************************************************!*\
  !*** ./resources/js/utils/dataset-to-props.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   datasetToProps: () => (/* binding */ datasetToProps)
/* harmony export */ });
/**
 * Convert DOM dataset attributes (data-foo-bar) to camelCase props.
 * Example: { appearance: "default", subTitle: "Hello" }
 */
const datasetToProps = dataset => {
  const props = {};
  Object.entries(dataset).forEach(([key, value]) => {
    let parsed = value;
    try {
      parsed = JSON.parse(value);
    } catch {
      // leave as string
    }
    const propName = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    props[propName] = parsed;
  });
  return props;
};

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************************!*\
  !*** ./resources/blocks/zaak/view.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_utils_dataset_to_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../js/utils/dataset-to-props */ "./resources/js/utils/dataset-to-props.js");
/* harmony import */ var _components_DescriptionList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/DescriptionList */ "./resources/blocks/zaak/components/DescriptionList.js");
/* harmony import */ var _components_File__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/File */ "./resources/blocks/zaak/components/File.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const components = {
  '.js-nlds-denhaag-description-list-component': _components_DescriptionList__WEBPACK_IMPORTED_MODULE_2__.DescriptionList,
  '.js-nlds-denhaag-file-component': _components_File__WEBPACK_IMPORTED_MODULE_3__.File
};
document.addEventListener('DOMContentLoaded', () => {
  Object.entries(components).forEach(([selector, Component]) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      const props = (0,_js_utils_dataset_to_props__WEBPACK_IMPORTED_MODULE_1__.datasetToProps)(el.dataset);
      const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(el);
      root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Component, {
        ...props
      }));
    });
  });
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map