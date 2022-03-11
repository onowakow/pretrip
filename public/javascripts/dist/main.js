/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/javascripts/src/attributeClickHandlers/attributeClickHandlers.js":
/*!*********************************************************************************!*\
  !*** ./public/javascripts/src/attributeClickHandlers/attributeClickHandlers.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _forComponentAreAllAttributesSelected_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forComponentAreAllAttributesSelected.js */ \"./public/javascripts/src/attributeClickHandlers/forComponentAreAllAttributesSelected.js\");\n\n\n// User's localStorage. Not for important or secure info.\nconst localStorage = window.localStorage;\n\nconst toggleableNodeList = document.querySelectorAll('.toggleable');\nconst componentsNodeList = document.querySelectorAll('.component');\n\n// Reset buttons\nconst resetLocalStorageButtonNodeList =\n  document.querySelectorAll('.resetLocalStorage');\n\nif (resetLocalStorageButtonNodeList) {\n  resetLocalStorageButtonNodeList.forEach((element) => {\n    element.addEventListener('click', () => {\n      localStorage.clear();\n      updateAllAttributeChecksToLocalStorage();\n      updateAllComponentsToLocalStorage();\n    });\n  });\n}\n\n// Attribute select\nconst handleAttributeClick = (e) => {\n  const component = e.path[1];\n  const isChecked = e.target.checked;\n  // JSON format {\"id\": \"index\"}\n  const id = e.target.id;\n  localStorage.setItem(id, isChecked);\n\n  const allSelected = (0,_forComponentAreAllAttributesSelected_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(component);\n\n  if (allSelected === true) {\n    component.scrollIntoView(true);\n    component.classList.add('complete');\n    return;\n  }\n\n  if (allSelected === false) {\n    component.classList.remove('complete');\n    return;\n  }\n\n  if (allSelected === undefined) {\n    // Component does not have attributes.\n    return;\n  }\n};\n\nconst updateAllAttributeChecksToLocalStorage = () => {\n  // update checks to reflect local storage and add event handlers\n  if (toggleableNodeList) {\n    toggleableNodeList.forEach((attribute) => {\n      attribute.checked =\n        localStorage.getItem(attribute.id) === 'true' ? true : false;\n      attribute.addEventListener('click', (e) => handleAttributeClick(e));\n    });\n  }\n};\n\nconst updateAllComponentsToLocalStorage = () => {\n  if (componentsNodeList) {\n    componentsNodeList.forEach((component) => {\n      const allSelected = (0,_forComponentAreAllAttributesSelected_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(component);\n      if (allSelected === true) {\n        component.classList.add('complete');\n      } else {\n        component.classList.remove('complete');\n      }\n    });\n  }\n};\n\n// Must be in order: update attribute checks then update components\nupdateAllAttributeChecksToLocalStorage();\nupdateAllComponentsToLocalStorage();\n\n\n//# sourceURL=webpack://pretrip/./public/javascripts/src/attributeClickHandlers/attributeClickHandlers.js?");

/***/ }),

/***/ "./public/javascripts/src/attributeClickHandlers/forComponentAreAllAttributesSelected.js":
/*!***********************************************************************************************!*\
  !*** ./public/javascripts/src/attributeClickHandlers/forComponentAreAllAttributesSelected.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst forComponentAreAllAttributesSelected = (componentElement) => {\n  const attributeElementsArr = componentElement.querySelectorAll('.attribute');\n  // Make sure the elements have attributes\n  if (!attributeElementsArr) return undefined;\n\n  // Check if all attributes are selected/checked\n  let allAreChecked = true;\n  attributeElementsArr.forEach((attribute) => {\n    if (attribute.checked === false) {\n      allAreChecked = false;\n    }\n  });\n\n  if (allAreChecked === true) {\n    return true;\n  } else return false;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forComponentAreAllAttributesSelected);\n\n\n//# sourceURL=webpack://pretrip/./public/javascripts/src/attributeClickHandlers/forComponentAreAllAttributesSelected.js?");

/***/ }),

/***/ "./public/javascripts/src/index.js":
/*!*****************************************!*\
  !*** ./public/javascripts/src/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _attributeClickHandlers_attributeClickHandlers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributeClickHandlers/attributeClickHandlers */ \"./public/javascripts/src/attributeClickHandlers/attributeClickHandlers.js\");\n/* harmony import */ var _subsectionEdit_subsectionEdit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subsectionEdit/subsectionEdit */ \"./public/javascripts/src/subsectionEdit/subsectionEdit.js\");\n/* harmony import */ var _subsectionEdit_subsectionEdit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_subsectionEdit_subsectionEdit__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n//# sourceURL=webpack://pretrip/./public/javascripts/src/index.js?");

/***/ }),

/***/ "./public/javascripts/src/subsectionEdit/subsectionEdit.js":
/*!*****************************************************************!*\
  !*** ./public/javascripts/src/subsectionEdit/subsectionEdit.js ***!
  \*****************************************************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://pretrip/./public/javascripts/src/subsectionEdit/subsectionEdit.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./public/javascripts/src/index.js");
/******/ 	
/******/ })()
;