"use strict";
self["webpackHotUpdatesvelte_app"]("main",{

/***/ "./src/parse.js":
/*!**********************!*\
  !*** ./src/parse.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parse)
/* harmony export */ });
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unified */ "./node_modules/unified/lib/index.js");
/* harmony import */ var rehype_dom_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rehype-dom-stringify */ "./node_modules/rehype-dom-stringify/index.js");




function parse(ast) {
  let story = [];
  // let currentUnit = {};
  ast.forEach((unit) => {
    const stringifiedChildren = (0,unified__WEBPACK_IMPORTED_MODULE_0__.unified)()
      .use(rehype_dom_stringify__WEBPACK_IMPORTED_MODULE_1__["default"], { fragment: true })
      .stringify(unit);
    console.log(unit);
    // if(unit.)
    switch (unit.tagName) {
      case "p":
        // if (unit.children) {
        // }
        // if(story[story.length-1].type === "line" && story[story.length-1].speaker)
        break;
      case "blockquote":
        break;
    }

    unit.type = "root";

    // console.debug(stringifiedChildren);
    // story.push({
    //     content: stringifiedChildren,
    // });
  });
  return story;
}


/***/ }),

/***/ "./node_modules/hast-util-to-dom/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hast-util-to-dom/lib/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDom": () => (/* binding */ toDom)
/* harmony export */ });
/* harmony import */ var web_namespaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web-namespaces */ "./node_modules/web-namespaces/index.js");
/* harmony import */ var property_information__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! property-information */ "./node_modules/property-information/index.js");
/* harmony import */ var property_information__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! property-information */ "./node_modules/property-information/lib/find.js");
/**
 * @typedef {import('hast').Parent} HastParent
 * @typedef {import('hast').Root} HastRoot
 * @typedef {import('hast').DocType} HastDoctype
 * @typedef {import('hast').Element} HastElement
 * @typedef {import('hast').Text} HastText
 * @typedef {import('hast').Comment} HastComment
 * @typedef {HastParent['children'][number]} HastChild
 * @typedef {HastChild|HastRoot} HastNode
 *
 * @typedef Options
 * @property {boolean} [fragment=false] Whether a DOM fragment should be returned
 * @property {Document} [document] Document interface to use (default: `globalThis.document`)
 * @property {string} [namespace] `namespace` to use to create elements
 *
 * @typedef Context
 * @property {Document} doc
 * @property {boolean} [fragment=false]
 * @property {string} [namespace]
 * @property {string} [impliedNamespace]
 */




/* eslint-env browser */

/**
 * @param {HastNode} node
 * @param {Context} [ctx]
 */
function transform(node, ctx) {
  switch (node.type) {
    case 'root':
      return root(node, ctx)
    case 'text':
      return text(node, ctx)
    case 'element':
      return element(node, ctx)
    case 'doctype':
      return doctype(node, ctx)
    case 'comment':
      return comment(node, ctx)
    default:
      return element(node, ctx)
  }
}

/**
 * Create a document.
 *
 * @param {HastRoot} node
 * @param {Context} ctx
 * @returns {XMLDocument|DocumentFragment|HTMLHtmlElement}
 */
function root(node, ctx) {
  const {doc, fragment, namespace: ctxNamespace} = ctx
  const {children = []} = node
  const {length: childrenLength} = children

  let namespace = ctxNamespace
  let rootIsDocument = childrenLength === 0

  for (let i = 0; i < childrenLength; i += 1) {
    const child = children[i]

    if (child.type === 'element' && child.tagName === 'html') {
      const {properties = {}} = child

      // If we have a root HTML node, we don’t need to render as a fragment.
      rootIsDocument = true

      // Take namespace of the first child.
      if (typeof ctxNamespace === 'undefined') {
        namespace = String(properties.xmlns || '') || web_namespaces__WEBPACK_IMPORTED_MODULE_0__.webNamespaces.html
      }
    }
  }

  // The root node will be a Document, DocumentFragment, or HTMLElement.
  /** @type {XMLDocument|DocumentFragment|HTMLHtmlElement} */
  let result

  if (rootIsDocument) {
    result = doc.implementation.createDocument(namespace, '', null)
  } else if (fragment) {
    result = doc.createDocumentFragment()
  } else {
    result = doc.createElement('html')
  }

  return appendAll(result, children, {
    ...ctx,
    fragment,
    namespace,
    impliedNamespace: namespace
  })
}

/**
 * Create a `doctype`.
 *
 * @param {HastDoctype} _
 * @param {Context} ctx
 * @returns {DocumentType}
 */
function doctype(_, {doc}) {
  return doc.implementation.createDocumentType('html', '', '')
}

/**
 * Create a `text`.
 *
 * @param {HastText} node
 * @param {Context} ctx
 * @returns {Text}
 */
function text(node, {doc}) {
  return doc.createTextNode(node.value)
}

/**
 * Create a `comment`.
 *
 * @param {HastComment} node
 * @param {Context} ctx
 * @returns {Comment}
 */
function comment(node, {doc}) {
  return doc.createComment(node.value)
}

/**
 * Create an `element`.
 *
 * @param {HastElement} node
 * @param {Context} ctx
 * @returns {Element}
 */
// eslint-disable-next-line complexity
function element(node, ctx) {
  const {namespace, doc} = ctx
  let impliedNamespace = ctx.impliedNamespace || namespace
  const {
    tagName = impliedNamespace === web_namespaces__WEBPACK_IMPORTED_MODULE_0__.webNamespaces.svg ? 'g' : 'div',
    properties = {},
    children = []
  } = node

  if (
    (impliedNamespace === null ||
      impliedNamespace === undefined ||
      impliedNamespace === web_namespaces__WEBPACK_IMPORTED_MODULE_0__.webNamespaces.html) &&
    tagName === 'svg'
  ) {
    impliedNamespace = web_namespaces__WEBPACK_IMPORTED_MODULE_0__.webNamespaces.svg
  }

  const schema = impliedNamespace === web_namespaces__WEBPACK_IMPORTED_MODULE_0__.webNamespaces.svg ? property_information__WEBPACK_IMPORTED_MODULE_1__.svg : property_information__WEBPACK_IMPORTED_MODULE_1__.html

  const result =
    impliedNamespace === null || impliedNamespace === undefined
      ? doc.createElement(tagName)
      : doc.createElementNS(impliedNamespace, tagName)

  // Add HTML attributes.
  const props = Object.keys(properties)
  const {length} = props

  for (let i = 0; i < length; i += 1) {
    const key = props[i]

    const {
      attribute,
      property,
      // `mustUseAttribute`,
      mustUseProperty,
      boolean,
      booleanish,
      overloadedBoolean,
      // `number`,
      // `defined`,
      commaSeparated
      // `spaceSeparated`,
      // `commaOrSpaceSeparated`,
    } = (0,property_information__WEBPACK_IMPORTED_MODULE_2__.find)(schema, key)

    let value = properties[key]

    if (Array.isArray(value)) {
      value = value.join(commaSeparated ? ', ' : ' ')
    }

    if (mustUseProperty) {
      result[property] = value
    }

    if (boolean || (overloadedBoolean && typeof value === 'boolean')) {
      if (value) {
        result.setAttribute(attribute, '')
      } else {
        result.removeAttribute(attribute)
      }
    } else if (booleanish) {
      result.setAttribute(attribute, String(value))
    } else if (value === true) {
      result.setAttribute(attribute, '')
    } else if (value || value === 0 || value === '') {
      result.setAttribute(attribute, String(value))
    }
  }

  return appendAll(result, children, {...ctx, impliedNamespace})
}

/**
 * Add all children.
 *
 * @template {Node} N
 * @param {N} node
 * @param {Array.<HastChild>} children
 * @param {Context} ctx
 * @returns {N}
 */
function appendAll(node, children, ctx) {
  let index = -1

  while (++index < children.length) {
    // eslint-disable-next-line unicorn/prefer-dom-node-append
    node.appendChild(transform(children[index], ctx))
  }

  return node
}

/**
 * Transform a hast tree to a DOM tree
 *
 * @param {HastNode} node
 * @param {Options} [options]
 * @returns {Node}
 */
function toDom(node, options = {}) {
  const {document: doc = document, ...rest} = options
  return transform(node, {doc, ...rest})
}


/***/ }),

/***/ "./node_modules/rehype-dom-stringify/index.js":
/*!****************************************************!*\
  !*** ./node_modules/rehype-dom-stringify/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/index.js */ "./node_modules/rehype-dom-stringify/lib/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/rehype-dom-stringify/lib/index.js":
/*!********************************************************!*\
  !*** ./node_modules/rehype-dom-stringify/lib/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ stringify)
/* harmony export */ });
/* harmony import */ var hast_util_to_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hast-util-to-dom */ "./node_modules/hast-util-to-dom/lib/index.js");
/* harmony import */ var web_namespaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! web-namespaces */ "./node_modules/web-namespaces/index.js");
/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast-util-to-dom').Options} Options
 */




const htmlXmlnsExpression = new RegExp(` xmlns="${web_namespaces__WEBPACK_IMPORTED_MODULE_0__.webNamespaces.html}"`, 'g')

/** @type {import('unified').Plugin<[Options?] | void[], Root, string>} */
function stringify(options) {
  const config = /** @type {Options} */ (this.data('settings'))
  const settings = {...options, ...config}

  if (settings.fragment === null || settings.fragment === undefined) {
    settings.fragment = true
  }

  Object.assign(this, {Compiler: compiler})

  /** @type {import('unified').CompilerFunction<Root, string>} */
  function compiler(tree) {
    const node = (0,hast_util_to_dom__WEBPACK_IMPORTED_MODULE_1__.toDom)(tree, settings)
    const serialized = new XMLSerializer().serializeToString(node)

    // XMLSerializer puts xmlns on root elements (typically the document
    // element, but in case of a fragment all of the fragments children).
    // We’re using the DOM, and we focus on HTML, so we can always remove HTML
    // XMLNS attributes (HTML inside SVG does not need to have an XMLNS).
    return serialized.replace(htmlXmlnsExpression, '')
  }
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9ed8371b4418ac08e4dc")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.cc83228356a6b821ac1d.hot-update.js.map