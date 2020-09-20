(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Brand.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Brand.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/brand_service */ "./resources/js/services/brand_service.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "brand",
  data: function data() {
    return {
      brands: [],
      brandData: {
        name: ''
      },
      errors: {}
    };
  },
  mounted: function mounted() {
    this.loadAllBrand();
  },
  methods: {
    loadAllBrand: function () {
      var _loadAllBrand = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_brand_service__WEBPACK_IMPORTED_MODULE_1__["loadBrand"]();

              case 3:
                response = _context.sent;
                this.brands = response.data.brand;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: 'Brand data not found',
                  time: 5000
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function loadAllBrand() {
        return _loadAllBrand.apply(this, arguments);
      }

      return loadAllBrand;
    }(),
    showNewBrandModal: function showNewBrandModal() {
      //show Modal
      this.$refs.newBrandModal.show();
    },
    hideNewBrandModal: function hideNewBrandModal() {
      this.$refs.newBrandModal.hide();
    },
    createBrand: function () {
      var _createBrand = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                formData = new FormData();
                formData.append('name', this.brandData.name);
                _context2.next = 5;
                return _services_brand_service__WEBPACK_IMPORTED_MODULE_1__["createBrand"](formData);

              case 5:
                response = _context2.sent;
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                this.hideNewBrandModal();
                _context2.next = 19;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                _context2.t1 = _context2.t0.response.status;
                _context2.next = _context2.t1 === 422 ? 15 : 17;
                break;

              case 15:
                this.errors = _context2.t0.response.data.errors;
                return _context2.abrupt("break", 19);

              case 17:
                this.flashMessage.error({
                  message: 'Something Went Wrong',
                  time: 5000
                });
                return _context2.abrupt("break", 19);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 10]]);
      }));

      function createBrand() {
        return _createBrand.apply(this, arguments);
      }

      return createBrand;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Brand.vue?vue&type=template&id=4a825678&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Brand.vue?vue&type=template&id=4a825678& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "container-fluid" }, [
        _c("h1", { staticClass: "mt-4" }, [_vm._v("Brand")]),
        _vm._v(" "),
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("div", { staticClass: "text-left" }, [
                  _c("span", [_vm._v("Brand Management")]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-light float-right",
                      attrs: { type: "button" },
                      on: { click: _vm.showNewBrandModal }
                    },
                    [
                      _c("span", { staticClass: "fa fa-plus" }),
                      _vm._v(" Create New")
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _vm._m(1)
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "newBrandModal",
          attrs: { "hide-footer": "", title: "Add new Brand" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.createBrand($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [_vm._v("Name : ")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.brandData.name,
                        expression: "brandData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "name",
                      placeholder: "Enter Brand Name"
                    },
                    domProps: { value: _vm.brandData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.brandData, "name", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm.errors.name
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.name[0]))
                      ])
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "text-right" }, [
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-default",
                      attrs: { type: "button" },
                      on: { click: _vm.hideNewBrandModal }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary",
                      attrs: { type: "submit" }
                    },
                    [
                      _c("span", { staticClass: "fa fa-check" }),
                      _vm._v(" Save")
                    ]
                  )
                ])
              ]
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", { staticClass: "breadcrumb mb-4" }, [
      _c("li", { staticClass: "breadcrumb-item active" }, [_vm._v("Brand")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body" }, [
      _c("div", { staticClass: "table-responsive" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/brand_service.js":
/*!************************************************!*\
  !*** ./resources/js/services/brand_service.js ***!
  \************************************************/
/*! exports provided: loadBrand, createBrand */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadBrand", function() { return loadBrand; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBrand", function() { return createBrand; });
/* harmony import */ var _http_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_services */ "./resources/js/services/http_services.js");

function loadBrand() {
  return Object(_http_services__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/api/brand');
}
function createBrand(data) {
  return Object(_http_services__WEBPACK_IMPORTED_MODULE_0__["http"])().post('/api/brand/store', data);
}

/***/ }),

/***/ "./resources/js/views/Brand.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Brand.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Brand_vue_vue_type_template_id_4a825678___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brand.vue?vue&type=template&id=4a825678& */ "./resources/js/views/Brand.vue?vue&type=template&id=4a825678&");
/* harmony import */ var _Brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Brand.vue?vue&type=script&lang=js& */ "./resources/js/views/Brand.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Brand_vue_vue_type_template_id_4a825678___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Brand_vue_vue_type_template_id_4a825678___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Brand.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Brand.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Brand.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Brand.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Brand.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Brand.vue?vue&type=template&id=4a825678&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Brand.vue?vue&type=template&id=4a825678& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_template_id_4a825678___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Brand.vue?vue&type=template&id=4a825678& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Brand.vue?vue&type=template&id=4a825678&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_template_id_4a825678___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_template_id_4a825678___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);