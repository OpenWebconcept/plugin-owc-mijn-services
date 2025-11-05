/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@gemeente-denhaag/card/dist/index.css":
/*!************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/card/dist/index.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/card/dist/mjs/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/card/dist/mjs/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaseCard: () => (/* binding */ CaseCard),
/* harmony export */   CaseCardAction: () => (/* binding */ CaseCardAction),
/* harmony export */   CaseCardBackground: () => (/* binding */ CaseCardBackground),
/* harmony export */   CaseCardBase: () => (/* binding */ CaseCardBase),
/* harmony export */   CaseCardContext: () => (/* binding */ CaseCardContext),
/* harmony export */   CaseCardFooter: () => (/* binding */ CaseCardFooter)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.mjs");
/* harmony import */ var _gemeente_denhaag_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gemeente-denhaag/link */ "./node_modules/@gemeente-denhaag/card/node_modules/@gemeente-denhaag/link/dist/mjs/index.js");
/* harmony import */ var _gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gemeente-denhaag/icons */ "./node_modules/@gemeente-denhaag/card/node_modules/@gemeente-denhaag/icons/dist/mjs/index.js");
/* harmony import */ var _gemeente_denhaag_paragraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @gemeente-denhaag/paragraph */ "./node_modules/@gemeente-denhaag/paragraph/dist/mjs/index.js");
var css_248z = ".denhaag-case-card{background:var(--denhaag-case-card-background-color);border-bottom:var(--denhaag-case-card-border-width,0) var(--denhaag-case-card-border-style,none) var(--denhaag-case-card-border-color,none);border-radius:var(--denhaag-case-card-border-radius);box-sizing:border-box;height:var(--denhaag-case-card-height);padding-block-start:var(--denhaag-case-card-padding-block-start);position:relative;width:100%}.denhaag-case-card:before{background:var(--denhaag-case-card-paper-color);border-radius:0 var(--denhaag-case-card-border-radius) 0 0;content:\"\";display:var(--denhaag-case-card-before-display,block);height:20px;position:absolute;right:8px;top:8px;width:50%}@media (width <= 480px){.denhaag-case-card{--denhaag-case-card-height:none;--denhaag-case-card-background-color:none;--denhaag-case-card-padding-block-start:0px;--denhaag-case-card-border-style:var(--denhaag-case-card-list-border-style);--denhaag-case-card-border-width:var(--denhaag-case-card-list-border-width);--denhaag-case-card-border-color:var(--denhaag-case-card-list-border-color);--denhaag-case-card-before-display:none;--denhaag-case-card-wrapper-gap:var(--denhaag-case-card-list-wrapper-gap);--denhaag-case-card-wrapper-flex-direction:var(--denhaag-case-card-list-wrapper-flex-direction);--denhaag-case-card-wrapper-padding-block-start:var(--denhaag-case-card-list-wrapper-padding-block-start);--denhaag-case-card-wrapper-padding-block-end:var(--denhaag-case-card-list-wrapper-padding-block-end);--denhaag-case-card-wrapper-padding-inline-start:var(--denhaag-case-card-list-wrapper-padding-inline-start);--denhaag-case-card-wrapper-padding-inline-end:var(--denhaag-case-card-list-wrapper-padding-inline-end);--denhaag-case-card-background-background-color:none;--denhaag-case-card-background-hover-transform:none;--denhaag-case-card-background-hover-background-color:var(\n      --denhaag-case-card-list-background-hover-background-color\n    );--denhaag-case-card-title-color:var(--denhaag-case-card-list-title-color);--denhaag-case-card-title-font-size:var(--denhaag-case-card-list-title-font-size);--denhaag-case-card-subtitle-color:var(--denhaag-case-card-list-subtitle-color);--denhaag-case-card-footer-gap:var(--denhaag-case-card-list-footer-gap);--denhaag-case-card-context-color:var(--denhaag-case-card-list-context-color);--denhaag-case-card-list-wrapper-flex-direction:column}}.denhaag-case-card--list{--denhaag-case-card-height:none;--denhaag-case-card-background-color:none;--denhaag-case-card-padding-block-start:0px;--denhaag-case-card-border-style:var(--denhaag-case-card-list-border-style);--denhaag-case-card-border-width:var(--denhaag-case-card-list-border-width);--denhaag-case-card-border-color:var(--denhaag-case-card-list-border-color);--denhaag-case-card-before-display:none;--denhaag-case-card-wrapper-gap:var(--denhaag-case-card-list-wrapper-gap);--denhaag-case-card-wrapper-flex-direction:var(--denhaag-case-card-list-wrapper-flex-direction);--denhaag-case-card-wrapper-padding-block-start:var(--denhaag-case-card-list-wrapper-padding-block-start);--denhaag-case-card-wrapper-padding-block-end:var(--denhaag-case-card-list-wrapper-padding-block-end);--denhaag-case-card-wrapper-padding-inline-start:var(--denhaag-case-card-list-wrapper-padding-inline-start);--denhaag-case-card-wrapper-padding-inline-end:var(--denhaag-case-card-list-wrapper-padding-inline-end);--denhaag-case-card-background-background-color:none;--denhaag-case-card-background-hover-transform:none;--denhaag-case-card-background-hover-background-color:var(\n    --denhaag-case-card-list-background-hover-background-color\n  );--denhaag-case-card-title-color:var(--denhaag-case-card-list-title-color);--denhaag-case-card-title-font-size:var(--denhaag-case-card-list-title-font-size);--denhaag-case-card-subtitle-color:var(--denhaag-case-card-list-subtitle-color);--denhaag-case-card-footer-gap:var(--denhaag-case-card-list-footer-gap);--denhaag-case-card-context-color:var(--denhaag-case-card-list-context-color)}.denhaag-case-card--archived{--denhaag-case-card-background-color:var(--denhaag-case-card-archived-background-color);--denhaag-case-card-color:var(--denhaag-case-card-archived-color);--denhaag-case-card-background-background-color:var(--denhaag-case-card-archived-background-background-color);--denhaag-case-card-title-color:var(--denhaag-case-card-archived-title-color);--denhaag-case-card-subtitle-color:var(--denhaag-case-card-archived-subtitle-color);--denhaag-case-card-context-color:var(--denhaag-case-card-archived-context-color);--denhaag-case-card-action-color:var(--denhaag-case-card-archived-action-color);--denhaag-case-card-action-active-color:var(--denhaag-case-card-archived-action-color)}.denhaag-case-card--focus,.denhaag-case-card:focus-within{outline:var(--denhaag-focus-border)}.denhaag-case-card--hover,.denhaag-case-card:hover,.denhaag-case-card:hover:focus{cursor:pointer}.denhaag-case-card--focus:before,.denhaag-case-card--hover:before,.denhaag-case-card:focus-within:before,.denhaag-case-card:hover:before{top:12px;transform:rotate(-2.45deg);transform-origin:right}.denhaag-case-card--focus .denhaag-case-card__background,.denhaag-case-card--hover .denhaag-case-card__background,.denhaag-case-card:focus-within .denhaag-case-card__background,.denhaag-case-card:hover .denhaag-case-card__background{background-color:var(--denhaag-case-card-background-hover-background-color,var(--denhaag-case-card-background-background-color));transform:var(--denhaag-case-card-background-hover-transform,rotateX(-20deg))}.denhaag-case-card--focus .denhaag-case-card__action,.denhaag-case-card--hover .denhaag-case-card__action,.denhaag-case-card:focus-within .denhaag-case-card__action,.denhaag-case-card:hover .denhaag-case-card__action{color:var(--denhaag-case-card-action-active-color)}.denhaag-case-card__wrapper{background:transparent;border-radius:var(--denhaag-case-card-border-radius);box-sizing:border-box;display:flex;flex-direction:var(--denhaag-case-card-wrapper-flex-direction,column);gap:var(--denhaag-case-card-wrapper-gap,0);height:100%;justify-content:space-between;padding-block-end:var(--denhaag-case-card-wrapper-padding-block-end);padding-block-start:var(--denhaag-case-card-wrapper-padding-block-start);padding-inline-end:var(--denhaag-case-card-wrapper-padding-inline-end);padding-inline-start:var(--denhaag-case-card-wrapper-padding-inline-start);perspective:1800px;width:100%}.denhaag-case-card__background{border-radius:var(--denhaag-case-card-border-radius);border-top-left-radius:0;bottom:0;right:0;top:0;transform-origin:50% 100%;z-index:-1}.denhaag-case-card__background,.denhaag-case-card__background:before{background:var(--denhaag-case-card-background-background-color);left:0;position:absolute}.denhaag-case-card__background:before{border-top-left-radius:var(--denhaag-case-card-border-radius);content:\"\";display:block;height:25px;top:-20px;width:60%}.denhaag-case-card__background:after{background:var(--denhaag-case-card-background-background-color);content:\"\";display:block;height:22px;left:55%;position:absolute;top:-20px;transform:skewX(30deg);width:10%}.denhaag-case-card__title{--nl-paragraph-font-family:var(--denhaag-case-card-title-font-family);--nl-paragraph-font-size:var(--denhaag-case-card-title-font-size);--nl-paragraph-font-weight:var(--denhaag-case-card-title-font-weight);--nl-paragraph-line-height:var(--denhaag-case-card-title-line-height);--nl-paragraph-color:var(--denhaag-case-card-title-color)}.denhaag-case-card__subtitle,.denhaag-case-card__title{line-clamp:2;-webkit-line-clamp:2;-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden}.denhaag-case-card__subtitle{--nl-paragraph-font-family:var(--denhaag-case-card-subtitle-font-family);--nl-paragraph-font-size:var(--denhaag-case-card-subtitle-font-size);--nl-paragraph-font-weight:var(--denhaag-case-card-subtitle-font-weight);--nl-paragraph-line-height:var(--denhaag-case-card-subtitle-line-height);--nl-paragraph-color:var(--denhaag-case-card-subtitle-color);--nl-paragraph-paragraph-margin-block-start:var(--denhaag-case-card-subtitle-margin-block-start)}.denhaag-case-card__footer{align-items:center;display:flex;gap:var(--denhaag-case-card-footer-gap,0);justify-content:space-between}.denhaag-case-card__context{color:var(--denhaag-case-card-context-color)}.denhaag-case-card__action{color:var(--denhaag-case-card-action-color);display:block;margin-inline-start:auto}.denhaag-case-card__action:focus{outline:none}.denhaag-case-card__action:before{--denhaag-case-card-action-before-padding-block:calc(var(--denhaag-case-card-padding-block-start) + var(--denhaag-case-card-wrapper-padding-block-start));content:\"\";inset-block-end:0;inset-block-start:calc(0px - var(--denhaag-case-card-padding-block-start));inset-inline-end:0;inset-inline-start:0;padding-block-end:var(--denhaag-case-card-wrapper-padding-block-end);padding-block-start:var(--denhaag-case-card-action-before-padding-block);padding-inline-end:var(--denhaag-case-card-wrapper-padding-inline-end);padding-inline-start:var(--denhaag-case-card-wrapper-padding-inline-start);position:absolute}.denhaag-case-card__action svg{display:block!important}";
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
};var CaseCardBase = function (_a) {
    var _b = _a.appearance, appearance = _b === void 0 ? 'default' : _b, className = _a.className, props = __rest(_a, ["appearance", "className"]);
    var classNames = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('denhaag-case-card', {
        'denhaag-case-card--archived': appearance === 'archived',
        'denhaag-case-card--list': appearance === 'list',
    }, className);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", __assign({ className: classNames }, props));
};var CaseCardAction = function (_a) {
    var className = _a.className, children = _a.children, _b = _a.Action, Action = _b === void 0 ? _gemeente_denhaag_link__WEBPACK_IMPORTED_MODULE_2__.BasicLink : _b, props = __rest(_a, ["className", "children", "Action"]);
    var classNames = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('denhaag-case-card__action', className);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Action, __assign({}, props, { className: classNames }), children));
};var CaseCardFooter = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classNames = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('denhaag-case-card__footer', className);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", __assign({ className: classNames }, props));
};var CaseCardBackground = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classNames = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('denhaag-case-card__background', className);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", __assign({ className: classNames }, props));
};var CaseCardContext = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classNames = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('denhaag-case-card__context', className);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", __assign({ className: classNames }, props));
};var CaseCardWrapper = function (_a) {
    var className = _a.className, props = __rest(_a, ["className"]);
    var classNames = (0,clsx__WEBPACK_IMPORTED_MODULE_1__["default"])('denhaag-case-card__wrapper', className);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", __assign({ className: classNames }, props));
};var CaseCard = function (_a) {
    var title = _a.title, subTitle = _a.subTitle, context = _a.context, href = _a.href, _b = _a.appearance, appearance = _b === void 0 ? 'default' : _b, _c = _a.Link, Link = _c === void 0 ? _gemeente_denhaag_link__WEBPACK_IMPORTED_MODULE_2__.BasicLink : _c;
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CaseCardBase, { appearance: appearance },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CaseCardWrapper, null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CaseCardBackground, null),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_gemeente_denhaag_paragraph__WEBPACK_IMPORTED_MODULE_4__.Paragraph, { className: "denhaag-case-card__title" }, title),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_gemeente_denhaag_paragraph__WEBPACK_IMPORTED_MODULE_4__.Paragraph, { className: "denhaag-case-card__subtitle" }, subTitle)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CaseCardFooter, null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CaseCardContext, null, context),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CaseCardAction, { "aria-label": title, href: href, Action: Link },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_gemeente_denhaag_icons__WEBPACK_IMPORTED_MODULE_3__.ArrowRightIcon, { className: "denhaag-case-card__arrow" }))))));
};//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/card/node_modules/@gemeente-denhaag/icons/dist/mjs/index.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/card/node_modules/@gemeente-denhaag/icons/dist/mjs/index.js ***!
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

/***/ "./node_modules/@gemeente-denhaag/card/node_modules/@gemeente-denhaag/link/dist/mjs/index.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/card/node_modules/@gemeente-denhaag/link/dist/mjs/index.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BasicLink: () => (/* binding */ BasicLink),
/* harmony export */   Link: () => (/* binding */ Link)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
var css_248z$1 = ".denhaag-link{color:var(--denhaag-link-color);cursor:var(--denhaag-link-cursor,pointer);font-family:inherit;font-size:inherit;font-weight:inherit;line-height:inherit;padding-inline-end:var(--denhaag-link-padding-inline-end,0);padding-inline-start:var(--denhaag-link-padding-inline-start,0);position:relative;text-decoration:var(--denhaag-link-text-decoration)}.denhaag-link--with-icon{--nl-link-text-decoration-line:none;align-items:center;display:inline-flex;gap:var(--denhaag-link-icon-gap);text-decoration:none;vertical-align:var(--denhaag-link-with-icon-vertical-align,baseline)}.denhaag-link--with-small-icon{--denhaag-link-icon-font-size:var(--denhaag-link-small-icon-font-size);--denhaag-link-icon-size:var(--denhaag-link-small-icon-size)}.denhaag-link--with-icon-start{--denhaag-link-icon-order:0;--denhaag-link-padding-inline-start:0}.denhaag-link--external,.denhaag-link--focus,.denhaag-link--hover,.denhaag-link:focus-visible,.denhaag-link:hover{text-decoration:var(--denhaag-link-text-decoration)}.denhaag-link--with-icon-end{--denhaag-link-icon-order:2;--denhaag-link-padding-inline-end:0}.denhaag-link--external{--denhaag-link-icon-align:var(--denhaag-link-external-icon-align)}.denhaag-link--focus,.denhaag-link:focus-visible{--denhaag-link-color:var(--denhaag-link-focus-color);outline:var(--denhaag-link-focus-outline)}.denhaag-link--hover,.denhaag-link:hover{--denhaag-link-color:var(--denhaag-link-hover-color);--denhaag-link-cursor:pointer}.denhaag-link--disabled,.denhaag-link--disabled--hover,.denhaag-link--disabled:hover{--denhaag-link-color:var(--denhaag-link-disabled-color);--denhaag-link-cursor:none;pointer-events:none}.denhaag-link__icon{align-items:var(--denhaag-link-icon-align);display:inline-flex;justify-content:center;order:var(--denhaag-link-icon-order,0);position:relative;vertical-align:text-top}.denhaag-link__icon,.denhaag-link__icon>:first-child{height:var(--denhaag-link-icon-size);width:var(--denhaag-link-icon-size)}.denhaag-link__icon>:first-child{aspect-ratio:1/1;font-size:var(--denhaag-link-icon-font-size);left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}.denhaag-link__sr-only{clip:rect(0,0,0,0);border:0;height:1px;margin-block-end:-1px;margin-block-start:-1px;margin-inline-end:-1px;margin-inline-start:-1px;overflow:hidden;padding-block-end:0;padding-block-start:0;padding-inline-end:0;padding-inline-start:0;position:absolute;width:1px}";
        if (typeof document !== 'undefined') { 

          const head = document.head || document.getElementsByTagName('head')[0];
          const style = document.createElement('style');
          style.type = 'text/css';
          style.nonce = window.NONCE;
        
          {
            head.appendChild(style);
          }
        
          if (style.styleSheet) {
            style.styleSheet.cssText = css_248z$1;
          } else {
            style.appendChild(document.createTextNode(css_248z$1));
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
};function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}var _excluded = ["children", "className", "current", "disabled", "href", "inlineBox"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Link$1 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function Link(props, forwardedRef) {
  var children = props.children,
    className = props.className,
    current = props.current,
    disabled = props.disabled,
    href = props.href,
    inlineBox = props.inlineBox,
    restProps = _objectWithoutProperties(props, _excluded);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", _objectSpread(_objectSpread({
    "aria-current": current || undefined,
    "aria-disabled": disabled,
    className: clsx('nl-link', _defineProperty(_defineProperty(_defineProperty({}, 'nl-link--current', current), 'nl-link--disabled', disabled), 'nl-link--inline-box', inlineBox), className),
    href: disabled ? undefined : href,
    role: disabled ? 'link' : undefined,
    ref: forwardedRef,
    tabIndex: disabled ? 0 : undefined
  }, restProps), {}, {
    children: children
  }));
});
Link$1.displayName = 'Link';var css_248z = ".nl-link:any-link{--_nl-link-forced-colors-color:LinkText;color:var(--_nl-link-state-color,var(--nl-link-color,var(--_nl-link-forced-colors-color)));text-decoration-color:var(--_nl-link-state-text-decoration-color,var(--nl-link-text-decoration-color,currentcolor));text-decoration-line:var(--_nl-link-state-text-decoration-line,var(--nl-link-text-decoration-line,underline));text-decoration-skip-ink:all;text-decoration-thickness:max(var(--_nl-link-state-text-decoration-thickness,var(--nl-link-text-decoration-thickness)),1px);text-underline-offset:var(--nl-link-text-underline-offset)}.nl-link:any-link:hover{--_nl-link-forced-colors-color:LinkText;--_nl-link-state-color:var(--nl-link-hover-color);--_nl-link-state-text-decoration-line:var(--nl-link-hover-text-decoration-line);--_nl-link-state-text-decoration-thickness:var(--nl-link-hover-text-decoration-thickness);text-decoration-skip-ink:none}.nl-link:any-link:active{--_nl-link-forced-colors-color:ActiveText;--_nl-link-state-color:var(--nl-link-active-color)}.nl-link--current:any-link{cursor:var(--nl-link-current-cursor,normal)}.nl-link--inline-box:any-link{color:unset;display:inline-block;text-decoration-line:unset;text-decoration-skip-ink:unset;text-decoration-thickness:unset;text-underline-offset:unset}.nl-link--disabled{--_nl-link-forced-colors-color:GrayText;--_nl-link-state-color:var(--nl-link-disabled-color);cursor:var(--nl-link-disabled-cursor,not-allowed);text-decoration-line:none}";
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
        }var BasicLink = function (_a) {
    var href = _a.href, props = __rest(_a, ["href"]);
    return react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Link$1, __assign({ href: href }, props));
};var Link = function (_a) {
    var _b = _a.icon, icon = _b === void 0 ? undefined : _b, _c = _a.iconAlign, iconAlign = _c === void 0 ? 'end' : _c, children = _a.children, _d = _a.Link, Link = _d === void 0 ? BasicLink : _d, props = __rest(_a, ["icon", "iconAlign", "children", "Link"]);
    var rootClassNames = clsx('denhaag-link', {
        'denhaag-link--disabled': props.disabled,
        'denhaag-link--with-icon': icon !== undefined,
        'denhaag-link--with-icon-start': icon !== undefined && iconAlign === 'start',
        'denhaag-link--with-icon-end': icon !== undefined && iconAlign === 'end',
    }, props.className);
    var iconClassName = clsx('denhaag-link__icon');
    var iconWrapped = react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: iconClassName }, icon);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Link, __assign({ className: rootClassNames }, props),
        icon !== undefined && iconAlign === 'start' ? iconWrapped : '',
        children,
        icon !== undefined && iconAlign === 'end' ? iconWrapped : ''));
};//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/@gemeente-denhaag/paragraph/dist/mjs/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/@gemeente-denhaag/paragraph/dist/mjs/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Paragraph: () => (/* binding */ Paragraph)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}function _objectWithoutPropertiesLoose(r, e) {
  if (null == r) return {};
  var t = {};
  for (var n in r) if ({}.hasOwnProperty.call(r, n)) {
    if (-1 !== e.indexOf(n)) continue;
    t[n] = r[n];
  }
  return t;
}function _objectWithoutProperties(e, t) {
  if (null == e) return {};
  var o,
    r,
    i = _objectWithoutPropertiesLoose(e, t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]);
  }
  return i;
}function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}var _excluded = ["children", "className", "purpose"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), true).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var Paragraph = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function Paragraph(props, forwardedRef) {
  var children = props.children,
    className = props.className,
    purpose = props.purpose,
    restProps = _objectWithoutProperties(props, _excluded);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", _objectSpread(_objectSpread({
    className: clsx('nl-paragraph', _defineProperty({}, 'nl-paragraph--lead', purpose === 'lead'), className),
    ref: forwardedRef
  }, restProps), {}, {
    children: purpose === 'lead' ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b", {
      className: "nl-paragraph__lead",
      children: children
    }) : children
  }));
});
Paragraph.displayName = 'Paragraph';var css_248z = ".nl-paragraph{color:var(--nl-paragraph-color,inherit);font-family:var(--nl-paragraph-font-family,inherit);font-size:var(--nl-paragraph-font-size,inherit);font-weight:var(--nl-paragraph-font-weight,inherit);line-height:var(--nl-paragraph-line-height,inherit);margin-block-end:var(--nl-paragraph-margin-block-end,revert);margin-block-start:var(--nl-paragraph-margin-block-start,revert)}.nl-paragraph--lead{font-size:var(--nl-paragraph-lead-font-size,var(--nl-paragraph-font-size,inherit));font-weight:var(--nl-paragraph-lead-font-weight,var(--nl-paragraph-font-weight,inherit));line-height:var(--nl-paragraph-lead-line-height,var(--nl-paragraph-line-height,inherit));margin-block-end:var(--nl-paragraph-lead-margin-block-end,var(--nl-paragraph-margin-block-end,revert));margin-block-start:var(--nl-paragraph-lead-margin-block-start,var(--nl-paragraph-margin-block-start,revert))}.nl-paragraph__lead{font-weight:inherit}";
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
        }//# sourceMappingURL=index.js.map


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

/***/ "./resources/blocks/mijn-zaken/components/CaseCard.js":
/*!************************************************************!*\
  !*** ./resources/blocks/mijn-zaken/components/CaseCard.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CaseCard: () => (/* binding */ CaseCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gemeente_denhaag_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gemeente-denhaag/card */ "./node_modules/@gemeente-denhaag/card/dist/mjs/index.js");
/* harmony import */ var _gemeente_denhaag_card_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gemeente-denhaag/card/index.css */ "./node_modules/@gemeente-denhaag/card/dist/index.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const CaseCard = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_gemeente_denhaag_card__WEBPACK_IMPORTED_MODULE_1__.CaseCard, {
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
  for (const [key, value] of Object.entries(dataset)) {
    // Convert kebab-case or snake_case to camelCase
    const camelKey = key.replace(/[-_]([a-z])/g, (_, char) => char.toUpperCase());
    props[camelKey] = value;
  }
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
/*!*********************************************!*\
  !*** ./resources/blocks/mijn-zaken/view.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_utils_dataset_to_props__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../js/utils/dataset-to-props */ "./resources/js/utils/dataset-to-props.js");
/* harmony import */ var _components_CaseCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/CaseCard */ "./resources/blocks/mijn-zaken/components/CaseCard.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const components = {
  '.js-nlds-denhaag-case-card-component': _components_CaseCard__WEBPACK_IMPORTED_MODULE_2__.CaseCard
};
document.addEventListener('DOMContentLoaded', () => {
  Object.entries(components).forEach(([selector, Component]) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      const props = (0,_js_utils_dataset_to_props__WEBPACK_IMPORTED_MODULE_1__.datasetToProps)(el.dataset);
      const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createRoot)(el);
      root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Component, {
        ...props
      }));
    });
  });
});
})();

/******/ })()
;
//# sourceMappingURL=view.js.map