"use strict";
self["webpackHotUpdatesvelte_app"]("main",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var unified__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unified */ "./node_modules/unified/lib/index.js");
/* harmony import */ var rehype_parse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rehype-parse */ "./node_modules/rehype-parse/index.js");
/* harmony import */ var rehype_minify_whitespace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rehype-minify-whitespace */ "./node_modules/rehype-minify-whitespace/index.js");
/* harmony import */ var _App_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.svelte */ "./src/App.svelte");




const omitDeep = __webpack_require__(/*! omit-deep-lodash */ "./node_modules/omit-deep-lodash/lib/index.js");

document.querySelectorAll(".oissu").forEach((element) => {
  const ast = omitDeep(
    (0,unified__WEBPACK_IMPORTED_MODULE_1__.unified)()
      .use(rehype_parse__WEBPACK_IMPORTED_MODULE_2__["default"], {
        fragment: true,
        verbose: false,
      })

      .use(rehype_minify_whitespace__WEBPACK_IMPORTED_MODULE_3__["default"])
      .parse(element.outerHTML),
    "position"
  );
  // const ast = unified()
  //     .use(rehypeParse, {
  //         fragment: true,
  //         verbose: false,
  //     })
  //     .parse(element.outerHTML);
  console.debug("ast");
  console.debug(ast);
  element.innerHTML = "";
  new _App_svelte__WEBPACK_IMPORTED_MODULE_0__["default"]({
    target: element,
    props: {
      ast: ast,
    },
  });
  // }
});

// export default app;


/***/ }),

/***/ "./node_modules/hast-util-embedded/index.js":
/*!**************************************************!*\
  !*** ./node_modules/hast-util-embedded/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "embedded": () => (/* binding */ embedded)
/* harmony export */ });
/* harmony import */ var hast_util_is_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hast-util-is-element */ "./node_modules/hast-util-is-element/index.js");
/**
 * @typedef {import('hast').Element & {tagName: 'audio'|'canvas'|'embed'|'iframe'|'img'|'math'|'object'|'picture'|'svg'|'video'}} Embedded
 * @typedef {import('hast-util-is-element').AssertPredicate<Embedded>} AssertEmbedded
 */



/**
 * Check if a node is an embedded element.
 * @type {AssertEmbedded}
 */
// @ts-ignore Sure, the assertion matches.
const embedded = (0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_0__.convertElement)([
  'audio',
  'canvas',
  'embed',
  'iframe',
  'img',
  'math',
  'object',
  'picture',
  'svg',
  'video'
])


/***/ }),

/***/ "./node_modules/hast-util-is-element/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hast-util-is-element/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isElement": () => (/* binding */ isElement),
/* harmony export */   "convertElement": () => (/* binding */ convertElement)
/* harmony export */ });
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 * @typedef {import('hast').Element} Element
 *
 * @typedef {string} TagName
 * @typedef {null|undefined|TagName|TestFunctionAnything|Array.<TagName|TestFunctionAnything>} Test
 */

/**
 * @template {Element} T
 * @typedef {null|undefined|T['tagName']|TestFunctionPredicate<T>|Array.<T['tagName']|TestFunctionPredicate<T>>} PredicateTest
 */

/**
 * Check if an element passes a test
 *
 * @callback TestFunctionAnything
 * @param {Element} element
 * @param {number|null|undefined} [index]
 * @param {Parent|null|undefined} [parent]
 * @returns {boolean|void}
 */

/**
 * Check if an element passes a certain node test
 *
 * @template {Element} X
 * @callback TestFunctionPredicate
 * @param {Element} element
 * @param {number|null|undefined} [index]
 * @param {Parent|null|undefined} [parent]
 * @returns {element is X}
 */

/**
 * Check if a node is an element and passes a certain node test
 *
 * @callback AssertAnything
 * @param {unknown} [node]
 * @param {number|null|undefined} [index]
 * @param {Parent|null|undefined} [parent]
 * @returns {boolean}
 */

/**
 * Check if a node is an element and passes a certain node test
 *
 * @template {Element} Y
 * @callback AssertPredicate
 * @param {unknown} [node]
 * @param {number|null|undefined} [index]
 * @param {Parent|null|undefined} [parent]
 * @returns {node is Y}
 */

// Check if `node` is an `element` and whether it passes the given test.
const isElement =
  /**
   * Check if a node is an element and passes a test.
   * When a `parent` node is known the `index` of node should also be given.
   *
   * @type {(
   *   (() => false) &
   *   (<T extends Element = Element>(node: unknown, test?: PredicateTest<T>, index?: number, parent?: Parent, context?: unknown) => node is T) &
   *   ((node: unknown, test: Test, index?: number, parent?: Parent, context?: unknown) => boolean)
   * )}
   */
  (
    /**
     * Check if a node passes a test.
     * When a `parent` node is known the `index` of node should also be given.
     *
     * @param {unknown} [node] Node to check
     * @param {Test} [test] When nullish, checks if `node` is a `Node`.
     * When `string`, works like passing `function (node) {return node.type === test}`.
     * When `function` checks if function passed the node is true.
     * When `array`, checks any one of the subtests pass.
     * @param {number} [index] Position of `node` in `parent`
     * @param {Parent} [parent] Parent of `node`
     * @param {unknown} [context] Context object to invoke `test` with
     * @returns {boolean} Whether test passed and `node` is an `Element` (object with `type` set to `element` and `tagName` set to a non-empty string).
     */
    // eslint-disable-next-line max-params
    function (node, test, index, parent, context) {
      const check = convertElement(test)

      if (
        index !== undefined &&
        index !== null &&
        (typeof index !== 'number' ||
          index < 0 ||
          index === Number.POSITIVE_INFINITY)
      ) {
        throw new Error('Expected positive finite index for child node')
      }

      if (
        parent !== undefined &&
        parent !== null &&
        (!parent.type || !parent.children)
      ) {
        throw new Error('Expected parent node')
      }

      // @ts-expect-error Looks like a node.
      if (!node || !node.type || typeof node.type !== 'string') {
        return false
      }

      if (
        (parent === undefined || parent === null) !==
        (index === undefined || index === null)
      ) {
        throw new Error('Expected both parent and index')
      }

      return check.call(context, node, index, parent)
    }
  )

const convertElement =
  /**
   * @type {(
   *   (<T extends Element>(test: T['tagName']|TestFunctionPredicate<T>) => AssertPredicate<T>) &
   *   ((test?: Test) => AssertAnything)
   * )}
   */
  (
    /**
     * Generate an assertion from a check.
     * @param {Test} [test]
     * When nullish, checks if `node` is a `Node`.
     * When `string`, works like passing `function (node) {return node.type === test}`.
     * When `function` checks if function passed the node is true.
     * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
     * When `array`, checks any one of the subtests pass.
     * @returns {AssertAnything}
     */
    function (test) {
      if (test === undefined || test === null) {
        return element
      }

      if (typeof test === 'string') {
        return tagNameFactory(test)
      }

      if (typeof test === 'object') {
        return anyFactory(test)
      }

      if (typeof test === 'function') {
        return castFactory(test)
      }

      throw new Error('Expected function, string, or array as test')
    }
  )

/**
 * @param {Array.<TagName|TestFunctionAnything>} tests
 * @returns {AssertAnything}
 */
function anyFactory(tests) {
  /** @type {Array.<AssertAnything>} */
  const checks = []
  let index = -1

  while (++index < tests.length) {
    checks[index] = convertElement(tests[index])
  }

  return castFactory(any)

  /**
   * @this {unknown}
   * @param {unknown[]} parameters
   * @returns {boolean}
   */
  function any(...parameters) {
    let index = -1

    while (++index < checks.length) {
      if (checks[index].call(this, ...parameters)) {
        return true
      }
    }

    return false
  }
}

/**
 * Utility to convert a string into a function which checks a given node’s tag
 * name for said string.
 *
 * @param {TagName} check
 * @returns {AssertAnything}
 */
function tagNameFactory(check) {
  return tagName

  /**
   * @param {unknown} node
   * @returns {boolean}
   */
  function tagName(node) {
    return element(node) && node.tagName === check
  }
}

/**
 * @param {TestFunctionAnything} check
 * @returns {AssertAnything}
 */
function castFactory(check) {
  return assertion

  /**
   * @this {unknown}
   * @param {unknown} node
   * @param {Array.<unknown>} parameters
   * @returns {boolean}
   */
  function assertion(node, ...parameters) {
    // @ts-expect-error: fine.
    return element(node) && Boolean(check.call(this, node, ...parameters))
  }
}

/**
 * Utility to return true if this is an element.
 * @param {unknown} node
 * @returns {node is Element}
 */
function element(node) {
  return Boolean(
    node &&
      typeof node === 'object' &&
      // @ts-expect-error Looks like a node.
      node.type === 'element' &&
      // @ts-expect-error Looks like an element.
      typeof node.tagName === 'string'
  )
}


/***/ }),

/***/ "./node_modules/hast-util-whitespace/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hast-util-whitespace/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "whitespace": () => (/* binding */ whitespace)
/* harmony export */ });
/**
 * @param {unknown} thing
 * @returns {boolean}
 */
function whitespace(thing) {
  /** @type {string} */
  var value =
    // @ts-ignore looks like a node.
    thing && typeof thing === 'object' && thing.type === 'text'
      ? // @ts-ignore looks like a text.
        thing.value || ''
      : thing

  // HTML whitespace expression.
  // See <https://html.spec.whatwg.org/#space-character>.
  return typeof value === 'string' && value.replace(/[ \t\n\f\r]/g, '') === ''
}


/***/ }),

/***/ "./node_modules/rehype-minify-whitespace/block.js":
/*!********************************************************!*\
  !*** ./node_modules/rehype-minify-whitespace/block.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "blocks": () => (/* binding */ blocks)
/* harmony export */ });
// See: <https://html.spec.whatwg.org/#the-css-user-agent-style-sheet-and-presentational-hints>
const blocks = [
  'address', // Flow content.
  'article', // Sections and headings.
  'aside', // Sections and headings.
  'blockquote', // Flow content.
  'body', // Page.
  'br', // Contribute whitespace intrinsically.
  'caption', // Similar to block.
  'center', // Flow content, legacy.
  'col', // Similar to block.
  'colgroup', // Similar to block.
  'dd', // Lists.
  'dialog', // Flow content.
  'dir', // Lists, legacy.
  'div', // Flow content.
  'dl', // Lists.
  'dt', // Lists.
  'figcaption', // Flow content.
  'figure', // Flow content.
  'footer', // Flow content.
  'form', // Flow content.
  'h1', // Sections and headings.
  'h2', // Sections and headings.
  'h3', // Sections and headings.
  'h4', // Sections and headings.
  'h5', // Sections and headings.
  'h6', // Sections and headings.
  'head', // Page.
  'header', // Flow content.
  'hgroup', // Sections and headings.
  'hr', // Flow content.
  'html', // Page.
  'legend', // Flow content.
  'li', // Block-like.
  'li', // Similar to block.
  'listing', // Flow content, legacy
  'main', // Flow content.
  'menu', // Lists.
  'nav', // Sections and headings.
  'ol', // Lists.
  'optgroup', // Similar to block.
  'option', // Similar to block.
  'p', // Flow content.
  'plaintext', // Flow content, legacy
  'pre', // Flow content.
  'section', // Sections and headings.
  'summary', // Similar to block.
  'table', // Similar to block.
  'tbody', // Similar to block.
  'td', // Block-like.
  'td', // Similar to block.
  'tfoot', // Similar to block.
  'th', // Block-like.
  'th', // Similar to block.
  'thead', // Similar to block.
  'tr', // Similar to block.
  'ul', // Lists.
  'wbr', // Contribute whitespace intrinsically.
  'xmp' // Flow content, legacy
]


/***/ }),

/***/ "./node_modules/rehype-minify-whitespace/content.js":
/*!**********************************************************!*\
  !*** ./node_modules/rehype-minify-whitespace/content.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content)
/* harmony export */ });
const content = [
  // Form.
  'button',
  'input',
  'select',
  'textarea'
]


/***/ }),

/***/ "./node_modules/rehype-minify-whitespace/index.js":
/*!********************************************************!*\
  !*** ./node_modules/rehype-minify-whitespace/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rehypeMinifyWhitespace)
/* harmony export */ });
/* harmony import */ var hast_util_is_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hast-util-is-element */ "./node_modules/hast-util-is-element/index.js");
/* harmony import */ var hast_util_embedded__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hast-util-embedded */ "./node_modules/hast-util-embedded/index.js");
/* harmony import */ var unist_util_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-is */ "./node_modules/unist-util-is/index.js");
/* harmony import */ var hast_util_whitespace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hast-util-whitespace */ "./node_modules/hast-util-whitespace/index.js");
/* harmony import */ var _block_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.js */ "./node_modules/rehype-minify-whitespace/block.js");
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content.js */ "./node_modules/rehype-minify-whitespace/content.js");
/* harmony import */ var _skippable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skippable.js */ "./node_modules/rehype-minify-whitespace/skippable.js");
/**
 * @fileoverview
 *   Collapse whitespace.
 *
 *   Normally, collapses to a single space.
 *   If `newlines: true`, collapses whitespace containing newlines to `'\n'`
 *   instead of `' '`.
 * @example
 *   <h1>Heading</h1>
 *   <p><strong>This</strong> and <em>that</em></p>
 */

/**
 * @typedef {import('hast').Root} Root
 * @typedef {import('hast').Element} Element
 * @typedef {import('hast').Text} Text
 * @typedef {Root|Root['children'][number]} Node
 *
 * @typedef Options
 * @property {boolean} [newlines=false]
 *   If `newlines: true`, collapses whitespace containing newlines to `'\n'`
 *   instead of `' '`.
 *   The default is to collapse to a single space.
 *
 * @typedef {'pre'|'nowrap'|'pre-wrap'|'normal'} Whitespace
 *
 * @typedef Context
 * @property {ReturnType<collapseFactory>} collapse
 * @property {Whitespace} whitespace
 * @property {boolean} [before]
 * @property {boolean} [after]
 *
 * @typedef Result
 * @property {boolean} remove
 * @property {boolean} ignore
 * @property {boolean} stripAtStart
 */









const ignorableNode = (0,unist_util_is__WEBPACK_IMPORTED_MODULE_0__.convert)(['doctype', 'comment'])

/**
 * Collapse whitespace.
 *
 * Normally, collapses to a single space.
 * If `newlines: true`, collapses whitespace containing newlines to `'\n'`
 * instead of `' '`.
 *
 * @type {import('unified').Plugin<[Options?] | void[], Root>}
 */
function rehypeMinifyWhitespace(options = {}) {
  const collapse = collapseFactory(
    options.newlines ? replaceNewlines : replaceWhitespace
  )

  return (tree) => {
    minify(tree, {collapse, whitespace: 'normal'})
  }
}

/**
 * @param {Node} node
 * @param {Context} context
 * @returns {Result}
 */
function minify(node, context) {
  if ('children' in node) {
    const settings = Object.assign({}, context)

    if (node.type === 'root' || blocklike(node)) {
      settings.before = true
      settings.after = true
    }

    settings.whitespace = inferWhiteSpace(node, context)

    return all(node, settings)
  }

  if (node.type === 'text') {
    if (context.whitespace === 'normal') {
      return minifyText(node, context)
    }

    // Naïve collapse, but no trimming:
    if (context.whitespace === 'nowrap') {
      node.value = context.collapse(node.value)
    }

    // The `pre-wrap` or `pre` whitespace settings are neither collapsed nor
    // trimmed.
  }

  return {remove: false, ignore: ignorableNode(node), stripAtStart: false}
}

/**
 * @param {Text} node
 * @param {Context} context
 * @returns {Result}
 */
function minifyText(node, context) {
  const value = context.collapse(node.value)
  const result = {remove: false, ignore: false, stripAtStart: false}
  let start = 0
  let end = value.length

  if (context.before && removable(value.charAt(0))) {
    start++
  }

  if (start !== end && removable(value.charAt(end - 1))) {
    if (context.after) {
      end--
    } else {
      result.stripAtStart = true
    }
  }

  if (start === end) {
    result.remove = true
  } else {
    node.value = value.slice(start, end)
  }

  return result
}

/**
 * @param {Root|Element} parent
 * @param {Context} context
 * @returns {Result}
 */
function all(parent, context) {
  let before = context.before
  const after = context.after
  const children = parent.children
  let length = children.length
  let index = -1

  while (++index < length) {
    const result = minify(
      children[index],
      Object.assign({}, context, {
        before,
        after: collapsableAfter(children, index, after)
      })
    )

    if (result.remove) {
      children.splice(index, 1)
      index--
      length--
    } else if (!result.ignore) {
      before = result.stripAtStart
    }

    // If this element, such as a `<select>` or `<img>`, contributes content
    // somehow, allow whitespace again.
    if (content(children[index])) {
      before = false
    }
  }

  return {remove: false, ignore: false, stripAtStart: Boolean(before || after)}
}

/**
 * @param {Node[]} nodes
 * @param {number} index
 * @param {boolean|undefined} [after]
 * @returns {boolean|undefined}
 */
function collapsableAfter(nodes, index, after) {
  while (++index < nodes.length) {
    const node = nodes[index]
    let result = inferBoundary(node)

    if (result === undefined && 'children' in node && !skippable(node)) {
      result = collapsableAfter(node.children, -1)
    }

    if (typeof result === 'boolean') {
      return result
    }
  }

  return after
}

/**
 * Infer two types of boundaries:
 *
 * 1. `true` — boundary for which whitespace around it does not contribute
 *    anything
 * 2. `false` — boundary for which whitespace around it *does* contribute
 *
 * No result (`undefined`) is returned if it is unknown.
 *
 * @param {Node} node
 * @returns {boolean|undefined}
 */
function inferBoundary(node) {
  if (node.type === 'element') {
    if (content(node)) {
      return false
    }

    if (blocklike(node)) {
      return true
    }

    // Unknown: either depends on siblings if embedded or metadata, or on
    // children.
  } else if (node.type === 'text') {
    if (!(0,hast_util_whitespace__WEBPACK_IMPORTED_MODULE_1__.whitespace)(node)) {
      return false
    }
  } else if (!ignorableNode(node)) {
    return false
  }
}

/**
 * Infer whether a node is skippable.
 *
 * @param {Node} node
 * @returns {boolean}
 */
function content(node) {
  return (0,hast_util_embedded__WEBPACK_IMPORTED_MODULE_2__.embedded)(node) || (0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_3__.isElement)(node, _content_js__WEBPACK_IMPORTED_MODULE_4__.content)
}

/**
 * See: <https://html.spec.whatwg.org/#the-css-user-agent-style-sheet-and-presentational-hints>
 *
 * @param {Element} node
 * @returns {boolean}
 */
function blocklike(node) {
  return (0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_3__.isElement)(node, _block_js__WEBPACK_IMPORTED_MODULE_5__.blocks)
}

/**
 * @param {Element|Root} node
 * @returns {boolean}
 */
function skippable(node) {
  return (
    Boolean(
      'properties' in node && node.properties && node.properties.hidden
    ) ||
    ignorableNode(node) ||
    (0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_3__.isElement)(node, _skippable_js__WEBPACK_IMPORTED_MODULE_6__.skippable)
  )
}

/**
 * @param {string} character
 * @returns {boolean}
 */
function removable(character) {
  return character === ' ' || character === '\n'
}

/**
 * @param {string} value
 * @returns {string}
 */
function replaceNewlines(value) {
  const match = /\r?\n|\r/.exec(value)
  return match ? match[0] : ' '
}

/**
 * @returns {string}
 */
function replaceWhitespace() {
  return ' '
}

/**
 * @param {(value: string) => string} replace
 */
function collapseFactory(replace) {
  return collapse

  /**
   * @param {string} value
   * @returns {string}
   */
  function collapse(value) {
    return String(value).replace(/[\t\n\v\f\r ]+/g, replace)
  }
}

/**
 * We don’t support void elements here (so `nobr wbr` -> `normal` is ignored).
 *
 * @param {Root|Element} node
 * @param {Context} context
 * @returns {Whitespace}
 */
function inferWhiteSpace(node, context) {
  if ('tagName' in node && node.properties) {
    switch (node.tagName) {
      case 'listing':
      case 'plaintext':
      case 'xmp':
        return 'pre'
      case 'nobr':
        return 'nowrap'
      case 'pre':
        return node.properties.wrap ? 'pre-wrap' : 'pre'
      case 'td':
      case 'th':
        return node.properties.noWrap ? 'nowrap' : context.whitespace
      case 'textarea':
        return 'pre-wrap'
      default:
    }
  }

  return context.whitespace
}


/***/ }),

/***/ "./node_modules/rehype-minify-whitespace/skippable.js":
/*!************************************************************!*\
  !*** ./node_modules/rehype-minify-whitespace/skippable.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skippable": () => (/* binding */ skippable)
/* harmony export */ });
const skippable = [
  'area',
  'base',
  'basefont',
  'dialog',
  'datalist',
  'head',
  'link',
  'meta',
  'noembed',
  'noframes',
  'param',
  'rp',
  'script',
  'source',
  'style',
  'template',
  'track',
  'title'
]


/***/ }),

/***/ "./node_modules/unist-util-is/index.js":
/*!*********************************************!*\
  !*** ./node_modules/unist-util-is/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "is": () => (/* binding */ is),
/* harmony export */   "convert": () => (/* binding */ convert)
/* harmony export */ });
/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist').Parent} Parent
 *
 * @typedef {string} Type
 * @typedef {Object<string, unknown>} Props
 *
 * @typedef {null|undefined|Type|Props|TestFunctionAnything|Array.<Type|Props|TestFunctionAnything>} Test
 */

/**
 * Check if a node passes a test
 *
 * @callback TestFunctionAnything
 * @param {Node} node
 * @param {number|null|undefined} [index]
 * @param {Parent|null|undefined} [parent]
 * @returns {boolean|void}
 */

/**
 * Check if a node passes a certain node test
 *
 * @template {Node} X
 * @callback TestFunctionPredicate
 * @param {Node} node
 * @param {number|null|undefined} [index]
 * @param {Parent|null|undefined} [parent]
 * @returns {node is X}
 */

/**
 * @callback AssertAnything
 * @param {unknown} [node]
 * @param {number|null|undefined} [index]
 * @param {Parent|null|undefined} [parent]
 * @returns {boolean}
 */

/**
 * Check if a node passes a certain node test
 *
 * @template {Node} Y
 * @callback AssertPredicate
 * @param {unknown} [node]
 * @param {number|null|undefined} [index]
 * @param {Parent|null|undefined} [parent]
 * @returns {node is Y}
 */

const is =
  /**
   * Check if a node passes a test.
   * When a `parent` node is known the `index` of node should also be given.
   *
   * @type {(
   *   (<T extends Node>(node: unknown, test: T['type']|Partial<T>|TestFunctionPredicate<T>|Array.<T['type']|Partial<T>|TestFunctionPredicate<T>>, index?: number|null|undefined, parent?: Parent|null|undefined, context?: unknown) => node is T) &
   *   ((node?: unknown, test?: Test, index?: number|null|undefined, parent?: Parent|null|undefined, context?: unknown) => boolean)
   * )}
   */
  (
    /**
     * Check if a node passes a test.
     * When a `parent` node is known the `index` of node should also be given.
     *
     * @param {unknown} [node] Node to check
     * @param {Test} [test]
     * When nullish, checks if `node` is a `Node`.
     * When `string`, works like passing `function (node) {return node.type === test}`.
     * When `function` checks if function passed the node is true.
     * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
     * When `array`, checks any one of the subtests pass.
     * @param {number|null|undefined} [index] Position of `node` in `parent`
     * @param {Parent|null|undefined} [parent] Parent of `node`
     * @param {unknown} [context] Context object to invoke `test` with
     * @returns {boolean} Whether test passed and `node` is a `Node` (object with `type` set to non-empty `string`).
     */
    // eslint-disable-next-line max-params
    function is(node, test, index, parent, context) {
      const check = convert(test)

      if (
        index !== undefined &&
        index !== null &&
        (typeof index !== 'number' ||
          index < 0 ||
          index === Number.POSITIVE_INFINITY)
      ) {
        throw new Error('Expected positive finite index')
      }

      if (
        parent !== undefined &&
        parent !== null &&
        (!is(parent) || !parent.children)
      ) {
        throw new Error('Expected parent node')
      }

      if (
        (parent === undefined || parent === null) !==
        (index === undefined || index === null)
      ) {
        throw new Error('Expected both parent and index')
      }

      // @ts-expect-error Looks like a node.
      return node && node.type && typeof node.type === 'string'
        ? Boolean(check.call(context, node, index, parent))
        : false
    }
  )

const convert =
  /**
   * @type {(
   *   (<T extends Node>(test: T['type']|Partial<T>|TestFunctionPredicate<T>) => AssertPredicate<T>) &
   *   ((test?: Test) => AssertAnything)
   * )}
   */
  (
    /**
     * Generate an assertion from a check.
     * @param {Test} [test]
     * When nullish, checks if `node` is a `Node`.
     * When `string`, works like passing `function (node) {return node.type === test}`.
     * When `function` checks if function passed the node is true.
     * When `object`, checks that all keys in test are in node, and that they have (strictly) equal values.
     * When `array`, checks any one of the subtests pass.
     * @returns {AssertAnything}
     */
    function (test) {
      if (test === undefined || test === null) {
        return ok
      }

      if (typeof test === 'string') {
        return typeFactory(test)
      }

      if (typeof test === 'object') {
        return Array.isArray(test) ? anyFactory(test) : propsFactory(test)
      }

      if (typeof test === 'function') {
        return castFactory(test)
      }

      throw new Error('Expected function, string, or object as test')
    }
  )
/**
 * @param {Array.<Type|Props|TestFunctionAnything>} tests
 * @returns {AssertAnything}
 */
function anyFactory(tests) {
  /** @type {Array.<AssertAnything>} */
  const checks = []
  let index = -1

  while (++index < tests.length) {
    checks[index] = convert(tests[index])
  }

  return castFactory(any)

  /**
   * @this {unknown}
   * @param {unknown[]} parameters
   * @returns {boolean}
   */
  function any(...parameters) {
    let index = -1

    while (++index < checks.length) {
      if (checks[index].call(this, ...parameters)) return true
    }

    return false
  }
}

/**
 * Utility to assert each property in `test` is represented in `node`, and each
 * values are strictly equal.
 *
 * @param {Props} check
 * @returns {AssertAnything}
 */
function propsFactory(check) {
  return castFactory(all)

  /**
   * @param {Node} node
   * @returns {boolean}
   */
  function all(node) {
    /** @type {string} */
    let key

    for (key in check) {
      // @ts-expect-error: hush, it sure works as an index.
      if (node[key] !== check[key]) return false
    }

    return true
  }
}

/**
 * Utility to convert a string into a function which checks a given node’s type
 * for said string.
 *
 * @param {Type} check
 * @returns {AssertAnything}
 */
function typeFactory(check) {
  return castFactory(type)

  /**
   * @param {Node} node
   */
  function type(node) {
    return node && node.type === check
  }
}

/**
 * Utility to convert a string into a function which checks a given node’s type
 * for said string.
 * @param {TestFunctionAnything} check
 * @returns {AssertAnything}
 */
function castFactory(check) {
  return assertion

  /**
   * @this {unknown}
   * @param {Array.<unknown>} parameters
   * @returns {boolean}
   */
  function assertion(...parameters) {
    // @ts-expect-error: spreading is fine.
    return Boolean(check.call(this, ...parameters))
  }
}

// Utility to return true.
function ok() {
  return true
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b0def39c764d829a1e3b")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.2104c6ef7f8a12546693.hot-update.js.map