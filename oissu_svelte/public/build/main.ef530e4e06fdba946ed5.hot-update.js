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
/* harmony import */ var rehype_stringify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rehype-stringify */ "./node_modules/rehype-stringify/index.js");





const omitDeep = __webpack_require__(/*! omit-deep-lodash */ "./node_modules/omit-deep-lodash/lib/index.js");

document.querySelectorAll(".oissu").forEach((element) => {
  const ast = omitDeep(
    (0,unified__WEBPACK_IMPORTED_MODULE_1__.unified)()
      .use(rehype_parse__WEBPACK_IMPORTED_MODULE_2__["default"], {
        fragment: true,
      })

      .use(rehype_minify_whitespace__WEBPACK_IMPORTED_MODULE_3__["default"])
      .use(rehype_stringify__WEBPACK_IMPORTED_MODULE_4__["default"])
      .use(rehype_parse__WEBPACK_IMPORTED_MODULE_2__["default"], {
        fragment: true,
      })
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

/***/ "./node_modules/ccount/index.js":
/*!**************************************!*\
  !*** ./node_modules/ccount/index.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ccount": () => (/* binding */ ccount)
/* harmony export */ });
/**
 * Count how often a character (or substring) is used in a string.
 *
 * @param {string} value
 *   Value to search in.
 * @param {string} character
 *   Character (or substring) to look for.
 * @return {number}
 *   Number of times `character` occurred in `value`.
 */
function ccount(value, character) {
  const source = String(value)

  if (typeof character !== 'string') {
    throw new TypeError('Expected character')
  }

  let count = 0
  let index = source.indexOf(character)

  while (index !== -1) {
    count++
    index = source.indexOf(character, index + character.length)
  }

  return count
}


/***/ }),

/***/ "./node_modules/character-entities-html4/index.js":
/*!********************************************************!*\
  !*** ./node_modules/character-entities-html4/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "characterEntitiesHtml4": () => (/* binding */ characterEntitiesHtml4)
/* harmony export */ });
/**
 * Map of named character references from HTML 4.
 *
 * @type {Record<string, string>}
 */
const characterEntitiesHtml4 = {
  nbsp: ' ',
  iexcl: '¡',
  cent: '¢',
  pound: '£',
  curren: '¤',
  yen: '¥',
  brvbar: '¦',
  sect: '§',
  uml: '¨',
  copy: '©',
  ordf: 'ª',
  laquo: '«',
  not: '¬',
  shy: '­',
  reg: '®',
  macr: '¯',
  deg: '°',
  plusmn: '±',
  sup2: '²',
  sup3: '³',
  acute: '´',
  micro: 'µ',
  para: '¶',
  middot: '·',
  cedil: '¸',
  sup1: '¹',
  ordm: 'º',
  raquo: '»',
  frac14: '¼',
  frac12: '½',
  frac34: '¾',
  iquest: '¿',
  Agrave: 'À',
  Aacute: 'Á',
  Acirc: 'Â',
  Atilde: 'Ã',
  Auml: 'Ä',
  Aring: 'Å',
  AElig: 'Æ',
  Ccedil: 'Ç',
  Egrave: 'È',
  Eacute: 'É',
  Ecirc: 'Ê',
  Euml: 'Ë',
  Igrave: 'Ì',
  Iacute: 'Í',
  Icirc: 'Î',
  Iuml: 'Ï',
  ETH: 'Ð',
  Ntilde: 'Ñ',
  Ograve: 'Ò',
  Oacute: 'Ó',
  Ocirc: 'Ô',
  Otilde: 'Õ',
  Ouml: 'Ö',
  times: '×',
  Oslash: 'Ø',
  Ugrave: 'Ù',
  Uacute: 'Ú',
  Ucirc: 'Û',
  Uuml: 'Ü',
  Yacute: 'Ý',
  THORN: 'Þ',
  szlig: 'ß',
  agrave: 'à',
  aacute: 'á',
  acirc: 'â',
  atilde: 'ã',
  auml: 'ä',
  aring: 'å',
  aelig: 'æ',
  ccedil: 'ç',
  egrave: 'è',
  eacute: 'é',
  ecirc: 'ê',
  euml: 'ë',
  igrave: 'ì',
  iacute: 'í',
  icirc: 'î',
  iuml: 'ï',
  eth: 'ð',
  ntilde: 'ñ',
  ograve: 'ò',
  oacute: 'ó',
  ocirc: 'ô',
  otilde: 'õ',
  ouml: 'ö',
  divide: '÷',
  oslash: 'ø',
  ugrave: 'ù',
  uacute: 'ú',
  ucirc: 'û',
  uuml: 'ü',
  yacute: 'ý',
  thorn: 'þ',
  yuml: 'ÿ',
  fnof: 'ƒ',
  Alpha: 'Α',
  Beta: 'Β',
  Gamma: 'Γ',
  Delta: 'Δ',
  Epsilon: 'Ε',
  Zeta: 'Ζ',
  Eta: 'Η',
  Theta: 'Θ',
  Iota: 'Ι',
  Kappa: 'Κ',
  Lambda: 'Λ',
  Mu: 'Μ',
  Nu: 'Ν',
  Xi: 'Ξ',
  Omicron: 'Ο',
  Pi: 'Π',
  Rho: 'Ρ',
  Sigma: 'Σ',
  Tau: 'Τ',
  Upsilon: 'Υ',
  Phi: 'Φ',
  Chi: 'Χ',
  Psi: 'Ψ',
  Omega: 'Ω',
  alpha: 'α',
  beta: 'β',
  gamma: 'γ',
  delta: 'δ',
  epsilon: 'ε',
  zeta: 'ζ',
  eta: 'η',
  theta: 'θ',
  iota: 'ι',
  kappa: 'κ',
  lambda: 'λ',
  mu: 'μ',
  nu: 'ν',
  xi: 'ξ',
  omicron: 'ο',
  pi: 'π',
  rho: 'ρ',
  sigmaf: 'ς',
  sigma: 'σ',
  tau: 'τ',
  upsilon: 'υ',
  phi: 'φ',
  chi: 'χ',
  psi: 'ψ',
  omega: 'ω',
  thetasym: 'ϑ',
  upsih: 'ϒ',
  piv: 'ϖ',
  bull: '•',
  hellip: '…',
  prime: '′',
  Prime: '″',
  oline: '‾',
  frasl: '⁄',
  weierp: '℘',
  image: 'ℑ',
  real: 'ℜ',
  trade: '™',
  alefsym: 'ℵ',
  larr: '←',
  uarr: '↑',
  rarr: '→',
  darr: '↓',
  harr: '↔',
  crarr: '↵',
  lArr: '⇐',
  uArr: '⇑',
  rArr: '⇒',
  dArr: '⇓',
  hArr: '⇔',
  forall: '∀',
  part: '∂',
  exist: '∃',
  empty: '∅',
  nabla: '∇',
  isin: '∈',
  notin: '∉',
  ni: '∋',
  prod: '∏',
  sum: '∑',
  minus: '−',
  lowast: '∗',
  radic: '√',
  prop: '∝',
  infin: '∞',
  ang: '∠',
  and: '∧',
  or: '∨',
  cap: '∩',
  cup: '∪',
  int: '∫',
  there4: '∴',
  sim: '∼',
  cong: '≅',
  asymp: '≈',
  ne: '≠',
  equiv: '≡',
  le: '≤',
  ge: '≥',
  sub: '⊂',
  sup: '⊃',
  nsub: '⊄',
  sube: '⊆',
  supe: '⊇',
  oplus: '⊕',
  otimes: '⊗',
  perp: '⊥',
  sdot: '⋅',
  lceil: '⌈',
  rceil: '⌉',
  lfloor: '⌊',
  rfloor: '⌋',
  lang: '〈',
  rang: '〉',
  loz: '◊',
  spades: '♠',
  clubs: '♣',
  hearts: '♥',
  diams: '♦',
  quot: '"',
  amp: '&',
  lt: '<',
  gt: '>',
  OElig: 'Œ',
  oelig: 'œ',
  Scaron: 'Š',
  scaron: 'š',
  Yuml: 'Ÿ',
  circ: 'ˆ',
  tilde: '˜',
  ensp: ' ',
  emsp: ' ',
  thinsp: ' ',
  zwnj: '‌',
  zwj: '‍',
  lrm: '‎',
  rlm: '‏',
  ndash: '–',
  mdash: '—',
  lsquo: '‘',
  rsquo: '’',
  sbquo: '‚',
  ldquo: '“',
  rdquo: '”',
  bdquo: '„',
  dagger: '†',
  Dagger: '‡',
  permil: '‰',
  lsaquo: '‹',
  rsaquo: '›',
  euro: '€'
}


/***/ }),

/***/ "./node_modules/character-entities-legacy/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/character-entities-legacy/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "characterEntitiesLegacy": () => (/* binding */ characterEntitiesLegacy)
/* harmony export */ });
/**
 * List of legacy HTML named character references that don’t need a trailing semicolon.
 *
 * @type {Array<string>}
 */
const characterEntitiesLegacy = [
  'AElig',
  'AMP',
  'Aacute',
  'Acirc',
  'Agrave',
  'Aring',
  'Atilde',
  'Auml',
  'COPY',
  'Ccedil',
  'ETH',
  'Eacute',
  'Ecirc',
  'Egrave',
  'Euml',
  'GT',
  'Iacute',
  'Icirc',
  'Igrave',
  'Iuml',
  'LT',
  'Ntilde',
  'Oacute',
  'Ocirc',
  'Ograve',
  'Oslash',
  'Otilde',
  'Ouml',
  'QUOT',
  'REG',
  'THORN',
  'Uacute',
  'Ucirc',
  'Ugrave',
  'Uuml',
  'Yacute',
  'aacute',
  'acirc',
  'acute',
  'aelig',
  'agrave',
  'amp',
  'aring',
  'atilde',
  'auml',
  'brvbar',
  'ccedil',
  'cedil',
  'cent',
  'copy',
  'curren',
  'deg',
  'divide',
  'eacute',
  'ecirc',
  'egrave',
  'eth',
  'euml',
  'frac12',
  'frac14',
  'frac34',
  'gt',
  'iacute',
  'icirc',
  'iexcl',
  'igrave',
  'iquest',
  'iuml',
  'laquo',
  'lt',
  'macr',
  'micro',
  'middot',
  'nbsp',
  'not',
  'ntilde',
  'oacute',
  'ocirc',
  'ograve',
  'ordf',
  'ordm',
  'oslash',
  'otilde',
  'ouml',
  'para',
  'plusmn',
  'pound',
  'quot',
  'raquo',
  'reg',
  'sect',
  'shy',
  'sup1',
  'sup2',
  'sup3',
  'szlig',
  'thorn',
  'times',
  'uacute',
  'ucirc',
  'ugrave',
  'uml',
  'uuml',
  'yacute',
  'yen',
  'yuml'
]


/***/ }),

/***/ "./node_modules/hast-util-to-html/lib/comment.js":
/*!*******************************************************!*\
  !*** ./node_modules/hast-util-to-html/lib/comment.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "comment": () => (/* binding */ comment)
/* harmony export */ });
/* harmony import */ var stringify_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stringify-entities */ "./node_modules/stringify-entities/lib/index.js");
/**
 * @typedef {import('./types.js').Handle} Handle
 * @typedef {import('./types.js').Comment} Comment
 */



/**
 * @type {Handle}
 * @param {Comment} node
 */
function comment(ctx, node) {
  // See: <https://html.spec.whatwg.org/multipage/syntax.html#comments>
  return ctx.bogusComments
    ? '<?' +
        (0,stringify_entities__WEBPACK_IMPORTED_MODULE_0__.stringifyEntities)(
          node.value,
          Object.assign({}, ctx.entities, {subset: ['>']})
        ) +
        '>'
    : '<!--' + node.value.replace(/^>|^->|<!--|-->|--!>|<!-$/g, encode) + '-->'

  /**
   * @param {string} $0
   */
  function encode($0) {
    return (0,stringify_entities__WEBPACK_IMPORTED_MODULE_0__.stringifyEntities)(
      $0,
      Object.assign({}, ctx.entities, {subset: ['<', '>']})
    )
  }
}


/***/ }),

/***/ "./node_modules/hast-util-to-html/lib/constants.js":
/*!*********************************************************!*\
  !*** ./node_modules/hast-util-to-html/lib/constants.js ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "constants": () => (/* binding */ constants)
/* harmony export */ });
// Maps of subsets.
// Each value is a matrix of tuples.
// The first value causes parse errors, the second is valid.
// Of both values, the first value is unsafe, and the second is safe.
const constants = {
  // See: <https://html.spec.whatwg.org/#attribute-name-state>.
  name: [
    ['\t\n\f\r &/=>'.split(''), '\t\n\f\r "&\'/=>`'.split('')],
    ['\0\t\n\f\r "&\'/<=>'.split(''), '\0\t\n\f\r "&\'/<=>`'.split('')]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(unquoted)-state>.
  unquoted: [
    ['\t\n\f\r &>'.split(''), '\0\t\n\f\r "&\'<=>`'.split('')],
    ['\0\t\n\f\r "&\'<=>`'.split(''), '\0\t\n\f\r "&\'<=>`'.split('')]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(single-quoted)-state>.
  single: [
    ["&'".split(''), '"&\'`'.split('')],
    ["\0&'".split(''), '\0"&\'`'.split('')]
  ],
  // See: <https://html.spec.whatwg.org/#attribute-value-(double-quoted)-state>.
  double: [
    ['"&'.split(''), '"&\'`'.split('')],
    ['\0"&'.split(''), '\0"&\'`'.split('')]
  ]
}


/***/ }),

/***/ "./node_modules/hast-util-to-html/lib/doctype.js":
/*!*******************************************************!*\
  !*** ./node_modules/hast-util-to-html/lib/doctype.js ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "doctype": () => (/* binding */ doctype)
/* harmony export */ });
/**
 * @typedef {import('./types.js').Handle} Handle
 */

/**
 * @type {Handle}
 */
function doctype(ctx) {
  return (
    '<!' +
    (ctx.upperDoctype ? 'DOCTYPE' : 'doctype') +
    (ctx.tightDoctype ? '' : ' ') +
    'html>'
  )
}


/***/ }),

/***/ "./node_modules/hast-util-to-html/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/hast-util-to-html/lib/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toHtml": () => (/* binding */ toHtml)
/* harmony export */ });
/* harmony import */ var property_information__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! property-information */ "./node_modules/property-information/index.js");
/* harmony import */ var html_void_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html-void-elements */ "./node_modules/html-void-elements/index.js");
/* harmony import */ var _omission_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./omission/index.js */ "./node_modules/hast-util-to-html/lib/omission/index.js");
/* harmony import */ var _tree_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree.js */ "./node_modules/hast-util-to-html/lib/tree.js");
/**
 * @typedef {import('./types.js').Node} Node
 * @typedef {import('./types.js').Options} Options
 * @typedef {import('./types.js').Context} Context
 * @typedef {import('./types.js').Quote} Quote
 */






/**
 * @param {Node|Array.<Node>} node
 * @param {Options} [options]
 * @returns {string}
 */
function toHtml(node, options = {}) {
  const quote = options.quote || '"'
  /** @type {Quote} */
  const alternative = quote === '"' ? "'" : '"'

  if (quote !== '"' && quote !== "'") {
    throw new Error('Invalid quote `' + quote + '`, expected `\'` or `"`')
  }

  /** @type {Context} */
  const context = {
    valid: options.allowParseErrors ? 0 : 1,
    safe: options.allowDangerousCharacters ? 0 : 1,
    schema: options.space === 'svg' ? property_information__WEBPACK_IMPORTED_MODULE_0__.svg : property_information__WEBPACK_IMPORTED_MODULE_0__.html,
    omit: options.omitOptionalTags ? _omission_index_js__WEBPACK_IMPORTED_MODULE_1__.omission : undefined,
    quote,
    alternative,
    smart: options.quoteSmart,
    unquoted: options.preferUnquoted,
    tight: options.tightAttributes,
    upperDoctype: options.upperDoctype,
    tightDoctype: options.tightDoctype,
    bogusComments: options.bogusComments,
    tightLists: options.tightCommaSeparatedLists,
    tightClose: options.tightSelfClosing,
    collapseEmpty: options.collapseEmptyAttributes,
    dangerous: options.allowDangerousHtml,
    voids: options.voids || html_void_elements__WEBPACK_IMPORTED_MODULE_2__.htmlVoidElements.concat(),
    entities: options.entities || {},
    close: options.closeSelfClosing,
    closeEmpty: options.closeEmptyElements
  }

  return (0,_tree_js__WEBPACK_IMPORTED_MODULE_3__.one)(
    context,
    // @ts-ignore Assume `node` does not contain a root.
    Array.isArray(node) ? {type: 'root', children: node} : node,
    null,
    null
  )
}


/***/ }),

/***/ "./node_modules/hast-util-to-html/lib/omission/closing.js":
/*!****************************************************************!*\
  !*** ./node_modules/hast-util-to-html/lib/omission/closing.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closing": () => (/* binding */ closing)
/* harmony export */ });
/* harmony import */ var hast_util_is_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hast-util-is-element */ "./node_modules/hast-util-is-element/index.js");
/* harmony import */ var _util_comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/comment.js */ "./node_modules/hast-util-to-html/lib/omission/util/comment.js");
/* harmony import */ var _util_siblings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/siblings.js */ "./node_modules/hast-util-to-html/lib/omission/util/siblings.js");
/* harmony import */ var _util_whitespace_start_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/whitespace-start.js */ "./node_modules/hast-util-to-html/lib/omission/util/whitespace-start.js");
/* harmony import */ var _omission_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./omission.js */ "./node_modules/hast-util-to-html/lib/omission/omission.js");
/**
 * @typedef {import('../types.js').OmitHandle} OmitHandle
 */







const closing = (0,_omission_js__WEBPACK_IMPORTED_MODULE_0__.omission)({
  html,
  head: headOrColgroupOrCaption,
  body,
  p,
  li,
  dt,
  dd,
  rt: rubyElement,
  rp: rubyElement,
  optgroup,
  option,
  menuitem,
  colgroup: headOrColgroupOrCaption,
  caption: headOrColgroupOrCaption,
  thead,
  tbody,
  tfoot,
  tr,
  td: cells,
  th: cells
})

/**
 * Macro for `</head>`, `</colgroup>`, and `</caption>`.
 *
 * @type {OmitHandle}
 */
function headOrColgroupOrCaption(_, index, parent) {
  const next = (0,_util_siblings_js__WEBPACK_IMPORTED_MODULE_1__.siblingAfter)(parent, index, true)
  return !next || (!(0,_util_comment_js__WEBPACK_IMPORTED_MODULE_2__.comment)(next) && !(0,_util_whitespace_start_js__WEBPACK_IMPORTED_MODULE_3__.whitespaceStart)(next))
}

/**
 * Whether to omit `</html>`.
 *
 * @type {OmitHandle}
 */
function html(_, index, parent) {
  const next = (0,_util_siblings_js__WEBPACK_IMPORTED_MODULE_1__.siblingAfter)(parent, index)
  return !next || !(0,_util_comment_js__WEBPACK_IMPORTED_MODULE_2__.comment)(next)
}

/**
 * Whether to omit `</body>`.
 *
 * @type {OmitHandle}
 */
function body(_, index, parent) {
  const next = (0,_util_siblings_js__WEBPACK_IMPORTED_MODULE_1__.siblingAfter)(parent, index)
  return !next || !(0,_util_comment_js__WEBPACK_IMPORTED_MODULE_2__.comment)(next)
}

/**
 * Whether to omit `</p>`.
 *
 * @type {OmitHandle}
 */
function p(_, index, parent) {
  const next = (0,_util_siblings_js__WEBPACK_IMPORTED_MODULE_1__.siblingAfter)(parent, index)
  return next
    ? (0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_4__.isElement)(next, [
        'address',
        'article',
        'aside',
        'blockquote',
        'details',
        'div',
        'dl',
        'fieldset',
        'figcaption',
        'figure',
        'footer',
        'form',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'header',
        'hgroup',
        'hr',
        'main',
        'menu',
        'nav',
        'ol',
        'p',
        'pre',
        'section',
        'table',
        'ul'
      ])
    : !parent ||
        // Confusing parent.
        !(0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_4__.isElement)(parent, [
          'a',
          'audio',
          'del',
          'ins',
          'map',
          'noscript',
          'video'
        ])
}

/**
 * Whether to omit `</li>`.
 *
 * @type {OmitHandle}
 */
function li(_, index, parent) {
  const next = (0,_util_siblings_js__WEBPACK_IMPORTED_MODULE_1__.siblingAfter)(parent, index)
  return !next || (0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_4__.isElement)(next, 'li')
}

/**
 * Whether to omit `</dt>`.
 *
 * @type {OmitHandle}
 */
function dt(_, index, parent) {
  const next = (0,_util_siblings_js__WEBPACK_IMPORTED_MODULE_1__.siblingAfter)(parent, index)
  return next && (0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_4__.isElement)(next, ['dt', 'dd'])
}

/**
 * Whether to omit `</dd>`.
 *
 * @type {OmitHandle}
 */
function dd(_, index, parent) {
  const next = (0,_util_siblings_js__WEBPACK_IMPORTED_MODULE_1__.siblingAfter)(parent, index)
  return !next || (0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_4__.isElement)(next, ['dt', 'dd'])
}

/**
 * Whether to omit `</rt>` or `</rp>`.
 *
 * @type {OmitHandle}
 */
function rubyElement(_, index, parent) {
  const next = (0,_util_siblings_js__WEBPACK_IMPORTED_MODULE_1__.siblingAfter)(parent, index)
  return !next || (0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_4__.isElement)(next, ['rp', 'rt'])
}

/**
 * Whether to omit `</optgroup>`.
 *
 * @type {OmitHandle}
 */
function optgroup(_, index, parent) {
  const next = (0,_util_siblings_js__WEBPACK_IMPORTED_MODULE_1__.siblingAfter)(parent, index)
  return !next || (0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_4__.isElement)(next, 'optgroup')
}

/**
 * Whether to omit `</option>`.
 *
 * @type {OmitHandle}
 */
function option(_, index, parent) {
  const next = (0,_util_siblings_js__WEBPACK_IMPORTED_MODULE_1__.siblingAfter)(parent, index)
  return !next || (0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_4__.isElement)(next, ['option', 'optgroup'])
}

/**
 * Whether to omit `</menuitem>`.
 *
 * @type {OmitHandle}
 */
function menuitem(_, index, parent) {
  const next = (0,_util_siblings_js__WEBPACK_IMPORTED_MODULE_1__.siblingAfter)(parent, index)
  return !next || (0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_4__.isElement)(next, ['menuitem', 'hr', 'menu'])
}

/**
 * Whether to omit `</thead>`.
 *
 * @type {OmitHandle}
 */
function thead(_, index, parent) {
  const next = (0,_util_siblings_js__WEBPACK_IMPORTED_MODULE_1__.siblingAfter)(parent, index)
  return next && (0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_4__.isElement)(next, ['tbody', 'tfoot'])
}

/**
 * Whether to omit `</tbody>`.
 *
 * @type {OmitHandle}
 */
function tbody(_, index, parent) {
  const next = (0,_util_siblings_js__WEBPACK_IMPORTED_MODULE_1__.siblingAfter)(parent, index)
  return !next || (0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_4__.isElement)(next, ['tbody', 'tfoot'])
}

/**
 * Whether to omit `</tfoot>`.
 *
 * @type {OmitHandle}
 */
function tfoot(_, index, parent) {
  return !(0,_util_siblings_js__WEBPACK_IMPORTED_MODULE_1__.siblingAfter)(parent, index)
}

/**
 * Whether to omit `</tr>`.
 *
 * @type {OmitHandle}
 */
function tr(_, index, parent) {
  const next = (0,_util_siblings_js__WEBPACK_IMPORTED_MODULE_1__.siblingAfter)(parent, index)
  return !next || (0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_4__.isElement)(next, 'tr')
}

/**
 * Whether to omit `</td>` or `</th>`.
 *
 * @type {OmitHandle}
 */
function cells(_, index, parent) {
  const next = (0,_util_siblings_js__WEBPACK_IMPORTED_MODULE_1__.siblingAfter)(parent, index)
  return !next || (0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_4__.isElement)(next, ['td', 'th'])
}


/***/ }),

/***/ "./node_modules/hast-util-to-html/lib/omission/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/hast-util-to-html/lib/omission/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "omission": () => (/* binding */ omission)
/* harmony export */ });
/* harmony import */ var _opening_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./opening.js */ "./node_modules/hast-util-to-html/lib/omission/opening.js");
/* harmony import */ var _closing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./closing.js */ "./node_modules/hast-util-to-html/lib/omission/closing.js");
/**
 * @typedef {import('../types.js').Omission} Omission
 */




/** @type {Omission} */
const omission = {opening: _opening_js__WEBPACK_IMPORTED_MODULE_0__.opening, closing: _closing_js__WEBPACK_IMPORTED_MODULE_1__.closing}


/***/ }),

/***/ "./node_modules/hast-util-to-html/lib/omission/omission.js":
/*!*****************************************************************!*\
  !*** ./node_modules/hast-util-to-html/lib/omission/omission.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "omission": () => (/* binding */ omission)
/* harmony export */ });
/**
 * @typedef {import('../types.js').OmitHandle} OmitHandle
 */

const own = {}.hasOwnProperty

/**
 * Factory to check if a given node can have a tag omitted.
 *
 * @param {Object.<string, OmitHandle>} handlers
 * @returns {OmitHandle}
 */
function omission(handlers) {
  return omit

  /**
   * Check if a given node can have a tag omitted.
   *
   * @type {OmitHandle}
   */
  function omit(node, index, parent) {
    return (
      own.call(handlers, node.tagName) &&
      handlers[node.tagName](node, index, parent)
    )
  }
}


/***/ }),

/***/ "./node_modules/hast-util-to-html/lib/omission/opening.js":
/*!****************************************************************!*\
  !*** ./node_modules/hast-util-to-html/lib/omission/opening.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "opening": () => (/* binding */ opening)
/* harmony export */ });
/* harmony import */ var hast_util_is_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hast-util-is-element */ "./node_modules/hast-util-is-element/index.js");
/* harmony import */ var _util_comment_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/comment.js */ "./node_modules/hast-util-to-html/lib/omission/util/comment.js");
/* harmony import */ var _util_siblings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/siblings.js */ "./node_modules/hast-util-to-html/lib/omission/util/siblings.js");
/* harmony import */ var _util_whitespace_start_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/whitespace-start.js */ "./node_modules/hast-util-to-html/lib/omission/util/whitespace-start.js");
/* harmony import */ var _closing_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./closing.js */ "./node_modules/hast-util-to-html/lib/omission/closing.js");
/* harmony import */ var _omission_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./omission.js */ "./node_modules/hast-util-to-html/lib/omission/omission.js");
/**
 * @typedef {import('../types.js').OmitHandle} OmitHandle
 * @typedef {import('../types.js').Child} Child
 */








const opening = (0,_omission_js__WEBPACK_IMPORTED_MODULE_0__.omission)({
  html,
  head,
  body,
  colgroup,
  tbody
})

/**
 * Whether to omit `<html>`.
 *
 * @type {OmitHandle}
 */
function html(node) {
  const head = (0,_util_siblings_js__WEBPACK_IMPORTED_MODULE_1__.siblingAfter)(node, -1)
  return !head || !(0,_util_comment_js__WEBPACK_IMPORTED_MODULE_2__.comment)(head)
}

/**
 * Whether to omit `<head>`.
 *
 * @type {OmitHandle}
 */
function head(node) {
  const children = node.children
  /** @type {Array.<string>} */
  const seen = []
  let index = -1
  /** @type {Child} */
  let child

  while (++index < children.length) {
    child = children[index]
    if ((0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_3__.isElement)(child, ['title', 'base'])) {
      if (seen.includes(child.tagName)) return false
      seen.push(child.tagName)
    }
  }

  return children.length > 0
}

/**
 * Whether to omit `<body>`.
 *
 * @type {OmitHandle}
 */
function body(node) {
  const head = (0,_util_siblings_js__WEBPACK_IMPORTED_MODULE_1__.siblingAfter)(node, -1, true)

  return (
    !head ||
    (!(0,_util_comment_js__WEBPACK_IMPORTED_MODULE_2__.comment)(head) &&
      !(0,_util_whitespace_start_js__WEBPACK_IMPORTED_MODULE_4__.whitespaceStart)(head) &&
      !(0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_3__.isElement)(head, ['meta', 'link', 'script', 'style', 'template']))
  )
}

/**
 * Whether to omit `<colgroup>`.
 * The spec describes some logic for the opening tag, but it’s easier to
 * implement in the closing tag, to the same effect, so we handle it there
 * instead.
 *
 * @type {OmitHandle}
 */
function colgroup(node, index, parent) {
  const previous = (0,_util_siblings_js__WEBPACK_IMPORTED_MODULE_1__.siblingBefore)(parent, index)
  const head = (0,_util_siblings_js__WEBPACK_IMPORTED_MODULE_1__.siblingAfter)(node, -1, true)

  // Previous colgroup was already omitted.
  if (
    (0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_3__.isElement)(previous, 'colgroup') &&
    (0,_closing_js__WEBPACK_IMPORTED_MODULE_5__.closing)(previous, parent.children.indexOf(previous), parent)
  ) {
    return false
  }

  return head && (0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_3__.isElement)(head, 'col')
}

/**
 * Whether to omit `<tbody>`.
 *
 * @type {OmitHandle}
 */
function tbody(node, index, parent) {
  const previous = (0,_util_siblings_js__WEBPACK_IMPORTED_MODULE_1__.siblingBefore)(parent, index)
  const head = (0,_util_siblings_js__WEBPACK_IMPORTED_MODULE_1__.siblingAfter)(node, -1)

  // Previous table section was already omitted.
  if (
    (0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_3__.isElement)(previous, ['thead', 'tbody']) &&
    (0,_closing_js__WEBPACK_IMPORTED_MODULE_5__.closing)(previous, parent.children.indexOf(previous), parent)
  ) {
    return false
  }

  return head && (0,hast_util_is_element__WEBPACK_IMPORTED_MODULE_3__.isElement)(head, 'tr')
}


/***/ }),

/***/ "./node_modules/hast-util-to-html/lib/omission/util/comment.js":
/*!*********************************************************************!*\
  !*** ./node_modules/hast-util-to-html/lib/omission/util/comment.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "comment": () => (/* binding */ comment)
/* harmony export */ });
/* harmony import */ var unist_util_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-is */ "./node_modules/unist-util-is/index.js");
/**
 * @typedef {import('../../types.js').Comment} Comment
 */



/** @type {import('unist-util-is').AssertPredicate<Comment>} */
// @ts-ignore
const comment = (0,unist_util_is__WEBPACK_IMPORTED_MODULE_0__.convert)('comment')


/***/ }),

/***/ "./node_modules/hast-util-to-html/lib/omission/util/siblings.js":
/*!**********************************************************************!*\
  !*** ./node_modules/hast-util-to-html/lib/omission/util/siblings.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "siblingAfter": () => (/* binding */ siblingAfter),
/* harmony export */   "siblingBefore": () => (/* binding */ siblingBefore)
/* harmony export */ });
/* harmony import */ var hast_util_whitespace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hast-util-whitespace */ "./node_modules/hast-util-whitespace/index.js");
/**
 * @typedef {import('../../types.js').Parent} Parent
 * @typedef {import('../../types.js').Child} Child
 */



const siblingAfter = siblings(1)
const siblingBefore = siblings(-1)

/**
 * Factory to check siblings in a direction.
 *
 * @param {number} increment
 */
function siblings(increment) {
  return sibling

  /**
   * Find applicable siblings in a direction.
   *
   * @param {Parent} parent
   * @param {number} index
   * @param {boolean} [includeWhitespace=false]
   * @returns {Child}
   */
  function sibling(parent, index, includeWhitespace) {
    const siblings = parent && parent.children
    let offset = index + increment
    let next = siblings && siblings[offset]

    if (!includeWhitespace) {
      while (next && (0,hast_util_whitespace__WEBPACK_IMPORTED_MODULE_0__.whitespace)(next)) {
        offset += increment
        next = siblings[offset]
      }
    }

    return next
  }
}


/***/ }),

/***/ "./node_modules/hast-util-to-html/lib/omission/util/whitespace-start.js":
/*!******************************************************************************!*\
  !*** ./node_modules/hast-util-to-html/lib/omission/util/whitespace-start.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "whitespaceStart": () => (/* binding */ whitespaceStart)
/* harmony export */ });
/* harmony import */ var unist_util_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-is */ "./node_modules/unist-util-is/index.js");
/* harmony import */ var hast_util_whitespace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hast-util-whitespace */ "./node_modules/hast-util-whitespace/index.js");
/**
 * @typedef {import('../../types.js').Node} Node
 * @typedef {import('../../types.js').Text} Text
 */




/** @type {import('unist-util-is').AssertPredicate<Text>} */
// @ts-ignore
const isText = (0,unist_util_is__WEBPACK_IMPORTED_MODULE_0__.convert)('text')

/**
 * Check if `node` starts with whitespace.
 *
 * @param {Node} node
 * @returns {boolean}
 */
function whitespaceStart(node) {
  return isText(node) && (0,hast_util_whitespace__WEBPACK_IMPORTED_MODULE_1__.whitespace)(node.value.charAt(0))
}


/***/ }),

/***/ "./node_modules/hast-util-to-html/lib/raw.js":
/*!***************************************************!*\
  !*** ./node_modules/hast-util-to-html/lib/raw.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "raw": () => (/* binding */ raw)
/* harmony export */ });
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text.js */ "./node_modules/hast-util-to-html/lib/text.js");
/**
 * @typedef {import('./types.js').Handle} Handle
 * @typedef {import('./types.js').Raw} Raw
 */



/**
 * @type {Handle}
 * @param {Raw} node
 */
function raw(ctx, node, index, parent) {
  // @ts-ignore Hush.
  return ctx.dangerous ? node.value : (0,_text_js__WEBPACK_IMPORTED_MODULE_0__.text)(ctx, node, index, parent)
}


/***/ }),

/***/ "./node_modules/hast-util-to-html/lib/text.js":
/*!****************************************************!*\
  !*** ./node_modules/hast-util-to-html/lib/text.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "text": () => (/* binding */ text)
/* harmony export */ });
/* harmony import */ var stringify_entities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stringify-entities */ "./node_modules/stringify-entities/lib/index.js");
/**
 * @typedef {import('./types.js').Handle} Handle
 * @typedef {import('./types.js').Text} Text
 */



/**
 * @type {Handle}
 * @param {Text} node
 */
function text(ctx, node, _, parent) {
  // Check if content of `node` should be escaped.
  return parent &&
    parent.type === 'element' &&
    // @ts-expect-error: hush.
    (parent.tagName === 'script' || parent.tagName === 'style')
    ? node.value
    : (0,stringify_entities__WEBPACK_IMPORTED_MODULE_0__.stringifyEntities)(
        node.value,
        Object.assign({}, ctx.entities, {subset: ['<', '&']})
      )
}


/***/ }),

/***/ "./node_modules/hast-util-to-html/lib/tree.js":
/*!****************************************************!*\
  !*** ./node_modules/hast-util-to-html/lib/tree.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "one": () => (/* binding */ one),
/* harmony export */   "all": () => (/* binding */ all),
/* harmony export */   "element": () => (/* binding */ element)
/* harmony export */ });
/* harmony import */ var property_information__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! property-information */ "./node_modules/property-information/index.js");
/* harmony import */ var property_information__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! property-information */ "./node_modules/property-information/lib/find.js");
/* harmony import */ var space_separated_tokens__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! space-separated-tokens */ "./node_modules/space-separated-tokens/index.js");
/* harmony import */ var comma_separated_tokens__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! comma-separated-tokens */ "./node_modules/comma-separated-tokens/index.js");
/* harmony import */ var stringify_entities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! stringify-entities */ "./node_modules/stringify-entities/lib/index.js");
/* harmony import */ var ccount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ccount */ "./node_modules/ccount/index.js");
/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants.js */ "./node_modules/hast-util-to-html/lib/constants.js");
/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.js */ "./node_modules/hast-util-to-html/lib/comment.js");
/* harmony import */ var _doctype_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doctype.js */ "./node_modules/hast-util-to-html/lib/doctype.js");
/* harmony import */ var _raw_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./raw.js */ "./node_modules/hast-util-to-html/lib/raw.js");
/* harmony import */ var _text_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text.js */ "./node_modules/hast-util-to-html/lib/text.js");
/**
 * @typedef {import('./types.js').Handle} Handle
 * @typedef {import('./types.js').Element} Element
 * @typedef {import('./types.js').Context} Context
 * @typedef {import('./types.js').Properties} Properties
 * @typedef {import('./types.js').PropertyValue} PropertyValue
 * @typedef {import('./types.js').Parent} Parent
 */












/**
 * @type {Object.<string, Handle>}
 */
const handlers = {
  comment: _comment_js__WEBPACK_IMPORTED_MODULE_0__.comment,
  doctype: _doctype_js__WEBPACK_IMPORTED_MODULE_1__.doctype,
  element,
  // @ts-ignore `raw` is nonstandard
  raw: _raw_js__WEBPACK_IMPORTED_MODULE_2__.raw,
  // @ts-ignore `root` is a parent.
  root: all,
  text: _text_js__WEBPACK_IMPORTED_MODULE_3__.text
}

const own = {}.hasOwnProperty

/**
 * @type {Handle}
 */
function one(ctx, node, index, parent) {
  if (!node || !node.type) {
    throw new Error('Expected node, not `' + node + '`')
  }

  if (!own.call(handlers, node.type)) {
    throw new Error('Cannot compile unknown node `' + node.type + '`')
  }

  return handlers[node.type](ctx, node, index, parent)
}

/**
 * Serialize all children of `parent`.
 *
 * @type {Handle}
 * @param {Parent} parent
 */
function all(ctx, parent) {
  /** @type {Array.<string>} */
  const results = []
  const children = (parent && parent.children) || []
  let index = -1

  while (++index < children.length) {
    results[index] = one(ctx, children[index], index, parent)
  }

  return results.join('')
}

/**
 * @type {Handle}
 * @param {Element} node
 */
// eslint-disable-next-line complexity
function element(ctx, node, index, parent) {
  const schema = ctx.schema
  const omit = schema.space === 'svg' ? undefined : ctx.omit
  let selfClosing =
    schema.space === 'svg'
      ? ctx.closeEmpty
      : ctx.voids.includes(node.tagName.toLowerCase())
  /** @type {Array.<string>} */
  const parts = []
  /** @type {string} */
  let last

  if (schema.space === 'html' && node.tagName === 'svg') {
    ctx.schema = property_information__WEBPACK_IMPORTED_MODULE_4__.svg
  }

  const attrs = serializeAttributes(ctx, node.properties)

  const content = all(
    ctx,
    schema.space === 'html' && node.tagName === 'template' ? node.content : node
  )

  ctx.schema = schema

  // If the node is categorised as void, but it has children, remove the
  // categorisation.
  // This enables for example `menuitem`s, which are void in W3C HTML but not
  // void in WHATWG HTML, to be stringified properly.
  if (content) selfClosing = false

  if (attrs || !omit || !omit.opening(node, index, parent)) {
    parts.push('<', node.tagName, attrs ? ' ' + attrs : '')

    if (selfClosing && (schema.space === 'svg' || ctx.close)) {
      last = attrs.charAt(attrs.length - 1)
      if (
        !ctx.tightClose ||
        last === '/' ||
        (last && last !== '"' && last !== "'")
      ) {
        parts.push(' ')
      }

      parts.push('/')
    }

    parts.push('>')
  }

  parts.push(content)

  if (!selfClosing && (!omit || !omit.closing(node, index, parent))) {
    parts.push('</' + node.tagName + '>')
  }

  return parts.join('')
}

/**
 * @param {Context} ctx
 * @param {Properties} props
 * @returns {string}
 */
function serializeAttributes(ctx, props) {
  /** @type {Array.<string>} */
  const values = []
  let index = -1
  /** @type {string} */
  let key
  /** @type {string} */
  let value
  /** @type {string} */
  let last

  for (key in props) {
    if (props[key] !== undefined && props[key] !== null) {
      value = serializeAttribute(ctx, key, props[key])
      if (value) values.push(value)
    }
  }

  while (++index < values.length) {
    last = ctx.tight ? values[index].charAt(values[index].length - 1) : null

    // In tight mode, don’t add a space after quoted attributes.
    if (index !== values.length - 1 && last !== '"' && last !== "'") {
      values[index] += ' '
    }
  }

  return values.join('')
}

/**
 * @param {Context} ctx
 * @param {string} key
 * @param {PropertyValue} value
 * @returns {string}
 */
// eslint-disable-next-line complexity
function serializeAttribute(ctx, key, value) {
  const info = (0,property_information__WEBPACK_IMPORTED_MODULE_5__.find)(ctx.schema, key)
  let quote = ctx.quote
  /** @type {string} */
  let result

  if (info.overloadedBoolean && (value === info.attribute || value === '')) {
    value = true
  } else if (
    info.boolean ||
    (info.overloadedBoolean && typeof value !== 'string')
  ) {
    value = Boolean(value)
  }

  if (
    value === undefined ||
    value === null ||
    value === false ||
    (typeof value === 'number' && Number.isNaN(value))
  ) {
    return ''
  }

  const name = (0,stringify_entities__WEBPACK_IMPORTED_MODULE_6__.stringifyEntities)(
    info.attribute,
    Object.assign({}, ctx.entities, {
      // Always encode without parse errors in non-HTML.
      subset:
        _constants_js__WEBPACK_IMPORTED_MODULE_7__.constants.name[ctx.schema.space === 'html' ? ctx.valid : 1][ctx.safe]
    })
  )

  // No value.
  // There is currently only one boolean property in SVG: `[download]` on
  // `<a>`.
  // This property does not seem to work in browsers (FF, Sa, Ch), so I can’t
  // test if dropping the value works.
  // But I assume that it should:
  //
  // ```html
  // <!doctype html>
  // <svg viewBox="0 0 100 100">
  //   <a href=https://example.com download>
  //     <circle cx=50 cy=40 r=35 />
  //   </a>
  // </svg>
  // ```
  //
  // See: <https://github.com/wooorm/property-information/blob/main/lib/svg.js>
  if (value === true) return name

  value =
    typeof value === 'object' && 'length' in value
      ? // `spaces` doesn’t accept a second argument, but it’s given here just to
        // keep the code cleaner.
        (info.commaSeparated ? comma_separated_tokens__WEBPACK_IMPORTED_MODULE_8__.stringify : space_separated_tokens__WEBPACK_IMPORTED_MODULE_9__.stringify)(value, {
          padLeft: !ctx.tightLists
        })
      : String(value)

  if (ctx.collapseEmpty && !value) return name

  // Check unquoted value.
  if (ctx.unquoted) {
    result = (0,stringify_entities__WEBPACK_IMPORTED_MODULE_6__.stringifyEntities)(
      value,
      Object.assign({}, ctx.entities, {
        subset: _constants_js__WEBPACK_IMPORTED_MODULE_7__.constants.unquoted[ctx.valid][ctx.safe],
        attribute: true
      })
    )
  }

  // If we don’t want unquoted, or if `value` contains character references when
  // unquoted…
  if (result !== value) {
    // If the alternative is less common than `quote`, switch.
    if (ctx.smart && (0,ccount__WEBPACK_IMPORTED_MODULE_10__.ccount)(value, quote) > (0,ccount__WEBPACK_IMPORTED_MODULE_10__.ccount)(value, ctx.alternative)) {
      quote = ctx.alternative
    }

    result =
      quote +
      (0,stringify_entities__WEBPACK_IMPORTED_MODULE_6__.stringifyEntities)(
        value,
        Object.assign({}, ctx.entities, {
          // Always encode without parse errors in non-HTML.
          subset: (quote === "'" ? _constants_js__WEBPACK_IMPORTED_MODULE_7__.constants.single : _constants_js__WEBPACK_IMPORTED_MODULE_7__.constants.double)[
            ctx.schema.space === 'html' ? ctx.valid : 1
          ][ctx.safe],
          attribute: true
        })
      ) +
      quote
  }

  // Don’t add a `=` for unquoted empties.
  return name + (result ? '=' + result : result)
}


/***/ }),

/***/ "./node_modules/html-void-elements/index.js":
/*!**************************************************!*\
  !*** ./node_modules/html-void-elements/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "htmlVoidElements": () => (/* binding */ htmlVoidElements)
/* harmony export */ });
/**
 * List of HTML void tag names.
 *
 * @type {Array<string>}
 */
const htmlVoidElements = [
  'area',
  'base',
  'basefont',
  'bgsound',
  'br',
  'col',
  'command',
  'embed',
  'frame',
  'hr',
  'image',
  'img',
  'input',
  'isindex',
  'keygen',
  'link',
  'menuitem',
  'meta',
  'nextid',
  'param',
  'source',
  'track',
  'wbr'
]


/***/ }),

/***/ "./node_modules/rehype-stringify/index.js":
/*!************************************************!*\
  !*** ./node_modules/rehype-stringify/index.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/index.js */ "./node_modules/rehype-stringify/lib/index.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./node_modules/rehype-stringify/lib/index.js":
/*!****************************************************!*\
  !*** ./node_modules/rehype-stringify/lib/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rehypeStringify)
/* harmony export */ });
/* harmony import */ var hast_util_to_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hast-util-to-html */ "./node_modules/hast-util-to-html/lib/index.js");
/**
 * @typedef {import('hast').Root} Root
 * @typedef {Root|Root['children'][number]} Node
 * @typedef {import('hast-util-to-html').Options} Options
 */



/** @type {import('unified').Plugin<[Options]|void[], Node, string>} */
function rehypeStringify(config) {
  const processorSettings = /** @type {Options} */ (this.data('settings'))
  const settings = Object.assign({}, processorSettings, config)

  Object.assign(this, {Compiler: compiler})

  /**
   * @type {import('unified').CompilerFunction<Node, string>}
   */
  function compiler(tree) {
    return (0,hast_util_to_html__WEBPACK_IMPORTED_MODULE_0__.toHtml)(tree, settings)
  }
}


/***/ }),

/***/ "./node_modules/stringify-entities/lib/constant/dangerous.js":
/*!*******************************************************************!*\
  !*** ./node_modules/stringify-entities/lib/constant/dangerous.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dangerous": () => (/* binding */ dangerous)
/* harmony export */ });
/**
 * List of legacy (that don’t need a trailing `;`) named references which could,
 * depending on what follows them, turn into a different meaning
 *
 * @type {Array.<string>}
 */
const dangerous = [
  'cent',
  'copy',
  'divide',
  'gt',
  'lt',
  'not',
  'para',
  'times'
]


/***/ }),

/***/ "./node_modules/stringify-entities/lib/core.js":
/*!*****************************************************!*\
  !*** ./node_modules/stringify-entities/lib/core.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "core": () => (/* binding */ core)
/* harmony export */ });
/**
 * @typedef {Object} CoreOptions
 * @property {string[]} [subset=[]]
 *   Whether to only escape the given subset of characters.
 * @property {boolean} [escapeOnly=false]
 *   Whether to only escape possibly dangerous characters.
 *   Those characters are `"`, `&`, `'`, `<`, `>`, and `` ` ``.
 *
 * @typedef {Object} FormatOptions
 * @property {(code: number, next: number, options: CoreWithFormatOptions) => string} format
 *   Format strategy.
 *
 * @typedef {CoreOptions & FormatOptions & import('./util/format-smart.js').FormatSmartOptions} CoreWithFormatOptions
 */

/**
 * Encode certain characters in `value`.
 *
 * @param {string} value
 * @param {CoreWithFormatOptions} options
 * @returns {string}
 */
function core(value, options) {
  value = value.replace(
    options.subset ? charactersToExpression(options.subset) : /["&'<>`]/g,
    basic
  )

  if (options.subset || options.escapeOnly) {
    return value
  }

  return (
    value
      // Surrogate pairs.
      .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, surrogate)
      // BMP control characters (C0 except for LF, CR, SP; DEL; and some more
      // non-ASCII ones).
      .replace(
        // eslint-disable-next-line no-control-regex, unicorn/no-hex-escape
        /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
        basic
      )
  )

  /**
   * @param {string} pair
   * @param {number} index
   * @param {string} all
   */
  function surrogate(pair, index, all) {
    return options.format(
      (pair.charCodeAt(0) - 0xd800) * 0x400 +
        pair.charCodeAt(1) -
        0xdc00 +
        0x10000,
      all.charCodeAt(index + 2),
      options
    )
  }

  /**
   * @param {string} character
   * @param {number} index
   * @param {string} all
   */
  function basic(character, index, all) {
    return options.format(
      character.charCodeAt(0),
      all.charCodeAt(index + 1),
      options
    )
  }
}

/**
 * @param {string[]} subset
 * @returns {RegExp}
 */
function charactersToExpression(subset) {
  /** @type {string[]} */
  const groups = []
  let index = -1

  while (++index < subset.length) {
    groups.push(subset[index].replace(/[|\\{}()[\]^$+*?.]/g, '\\$&'))
  }

  return new RegExp('(?:' + groups.join('|') + ')', 'g')
}


/***/ }),

/***/ "./node_modules/stringify-entities/lib/index.js":
/*!******************************************************!*\
  !*** ./node_modules/stringify-entities/lib/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stringifyEntities": () => (/* binding */ stringifyEntities),
/* harmony export */   "stringifyEntitiesLight": () => (/* binding */ stringifyEntitiesLight)
/* harmony export */ });
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./node_modules/stringify-entities/lib/core.js");
/* harmony import */ var _util_format_smart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/format-smart.js */ "./node_modules/stringify-entities/lib/util/format-smart.js");
/* harmony import */ var _util_format_basic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/format-basic.js */ "./node_modules/stringify-entities/lib/util/format-basic.js");
/**
 * @typedef {import('./core.js').CoreOptions & import('./util/format-smart.js').FormatSmartOptions} Options
 * @typedef {import('./core.js').CoreOptions} LightOptions
 */





/**
 * Encode special characters in `value`.
 *
 * @param {string} value
 *   Value to encode.
 * @param {Options} [options]
 *   Configuration.
 * @returns {string}
 *   Encoded value.
 */
function stringifyEntities(value, options) {
  return (0,_core_js__WEBPACK_IMPORTED_MODULE_0__.core)(value, Object.assign({format: _util_format_smart_js__WEBPACK_IMPORTED_MODULE_1__.formatSmart}, options))
}

/**
 * Encode special characters in `value` as hexadecimals.
 *
 * @param {string} value
 *   Value to encode.
 * @param {LightOptions} [options]
 *   Configuration.
 * @returns {string}
 *   Encoded value.
 */
function stringifyEntitiesLight(value, options) {
  return (0,_core_js__WEBPACK_IMPORTED_MODULE_0__.core)(value, Object.assign({format: _util_format_basic_js__WEBPACK_IMPORTED_MODULE_2__.formatBasic}, options))
}


/***/ }),

/***/ "./node_modules/stringify-entities/lib/util/format-basic.js":
/*!******************************************************************!*\
  !*** ./node_modules/stringify-entities/lib/util/format-basic.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatBasic": () => (/* binding */ formatBasic)
/* harmony export */ });
/**
 * The smallest way to encode a character.
 *
 * @param {number} code
 * @returns {string}
 */
function formatBasic(code) {
  return '&#x' + code.toString(16).toUpperCase() + ';'
}


/***/ }),

/***/ "./node_modules/stringify-entities/lib/util/format-smart.js":
/*!******************************************************************!*\
  !*** ./node_modules/stringify-entities/lib/util/format-smart.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formatSmart": () => (/* binding */ formatSmart)
/* harmony export */ });
/* harmony import */ var _to_hexadecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./to-hexadecimal.js */ "./node_modules/stringify-entities/lib/util/to-hexadecimal.js");
/* harmony import */ var _to_decimal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./to-decimal.js */ "./node_modules/stringify-entities/lib/util/to-decimal.js");
/* harmony import */ var _to_named_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./to-named.js */ "./node_modules/stringify-entities/lib/util/to-named.js");
/**
 * @typedef {Object} FormatSmartOptions
 * @property {boolean} [useNamedReferences=false]
 *   Prefer named character references (`&amp;`) where possible.
 * @property {boolean} [useShortestReferences=false]
 *   Prefer the shortest possible reference, if that results in less bytes.
 *   **Note**: `useNamedReferences` can be omitted when using `useShortestReferences`.
 * @property {boolean} [omitOptionalSemicolons=false]
 *   Whether to omit semicolons when possible.
 *   **Note**: This creates what HTML calls “parse errors” but is otherwise still valid HTML — don’t use this except when building a minifier.
 *   Omitting semicolons is possible for certain named and numeric references in some cases.
 * @property {boolean} [attribute=false]
 *   Create character references which don’t fail in attributes.
 *   **Note**: `attribute` only applies when operating dangerously with
 *   `omitOptionalSemicolons: true`.
 */





/**
 * Configurable ways to encode a character yielding pretty or small results.
 *
 * @param {number} code
 * @param {number} next
 * @param {FormatSmartOptions} options
 * @returns {string}
 */
function formatSmart(code, next, options) {
  let numeric = (0,_to_hexadecimal_js__WEBPACK_IMPORTED_MODULE_0__.toHexadecimal)(code, next, options.omitOptionalSemicolons)
  /** @type {string|undefined} */
  let named

  if (options.useNamedReferences || options.useShortestReferences) {
    named = (0,_to_named_js__WEBPACK_IMPORTED_MODULE_1__.toNamed)(
      code,
      next,
      options.omitOptionalSemicolons,
      options.attribute
    )
  }

  // Use the shortest numeric reference when requested.
  // A simple algorithm would use decimal for all code points under 100, as
  // those are shorter than hexadecimal:
  //
  // * `&#99;` vs `&#x63;` (decimal shorter)
  // * `&#100;` vs `&#x64;` (equal)
  //
  // However, because we take `next` into consideration when `omit` is used,
  // And it would be possible that decimals are shorter on bigger values as
  // well if `next` is hexadecimal but not decimal, we instead compare both.
  if (
    (options.useShortestReferences || !named) &&
    options.useShortestReferences
  ) {
    const decimal = (0,_to_decimal_js__WEBPACK_IMPORTED_MODULE_2__.toDecimal)(code, next, options.omitOptionalSemicolons)

    if (decimal.length < numeric.length) {
      numeric = decimal
    }
  }

  return named &&
    (!options.useShortestReferences || named.length < numeric.length)
    ? named
    : numeric
}


/***/ }),

/***/ "./node_modules/stringify-entities/lib/util/to-decimal.js":
/*!****************************************************************!*\
  !*** ./node_modules/stringify-entities/lib/util/to-decimal.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDecimal": () => (/* binding */ toDecimal)
/* harmony export */ });
/**
 * Configurable ways to encode characters as decimal references.
 *
 * @param {number} code
 * @param {number} next
 * @param {boolean|undefined} omit
 * @returns {string}
 */
function toDecimal(code, next, omit) {
  const value = '&#' + String(code)
  return omit && next && !/\d/.test(String.fromCharCode(next))
    ? value
    : value + ';'
}


/***/ }),

/***/ "./node_modules/stringify-entities/lib/util/to-hexadecimal.js":
/*!********************************************************************!*\
  !*** ./node_modules/stringify-entities/lib/util/to-hexadecimal.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toHexadecimal": () => (/* binding */ toHexadecimal)
/* harmony export */ });
/**
 * Configurable ways to encode characters as hexadecimal references.
 *
 * @param {number} code
 * @param {number} next
 * @param {boolean|undefined} omit
 * @returns {string}
 */
function toHexadecimal(code, next, omit) {
  const value = '&#x' + code.toString(16).toUpperCase()
  return omit && next && !/[\dA-Fa-f]/.test(String.fromCharCode(next))
    ? value
    : value + ';'
}


/***/ }),

/***/ "./node_modules/stringify-entities/lib/util/to-named.js":
/*!**************************************************************!*\
  !*** ./node_modules/stringify-entities/lib/util/to-named.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toNamed": () => (/* binding */ toNamed)
/* harmony export */ });
/* harmony import */ var character_entities_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! character-entities-legacy */ "./node_modules/character-entities-legacy/index.js");
/* harmony import */ var character_entities_html4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! character-entities-html4 */ "./node_modules/character-entities-html4/index.js");
/* harmony import */ var _constant_dangerous_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constant/dangerous.js */ "./node_modules/stringify-entities/lib/constant/dangerous.js");




const own = {}.hasOwnProperty

/**
 * `characterEntitiesHtml4` but inverted.
 *
 * @type {Object.<string, string>}
 */
const characters = {}

/** @type {string} */
let key

for (key in character_entities_html4__WEBPACK_IMPORTED_MODULE_0__.characterEntitiesHtml4) {
  if (own.call(character_entities_html4__WEBPACK_IMPORTED_MODULE_0__.characterEntitiesHtml4, key)) {
    characters[character_entities_html4__WEBPACK_IMPORTED_MODULE_0__.characterEntitiesHtml4[key]] = key
  }
}

/**
 * Configurable ways to encode characters as named references.
 *
 * @param {number} code
 * @param {number} next
 * @param {boolean|undefined} omit
 * @param {boolean|undefined} attribute
 * @returns {string}
 */
function toNamed(code, next, omit, attribute) {
  const character = String.fromCharCode(code)

  if (own.call(characters, character)) {
    const name = characters[character]
    const value = '&' + name

    if (
      omit &&
      character_entities_legacy__WEBPACK_IMPORTED_MODULE_1__.characterEntitiesLegacy.includes(name) &&
      !_constant_dangerous_js__WEBPACK_IMPORTED_MODULE_2__.dangerous.includes(name) &&
      (!attribute ||
        (next &&
          next !== 61 /* `=` */ &&
          /[^\da-z]/i.test(String.fromCharCode(next))))
    ) {
      return value
    }

    return value + ';'
  }

  return ''
}


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8df4fb8c0528d0841390")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.ef530e4e06fdba946ed5.hot-update.js.map