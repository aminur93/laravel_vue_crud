(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Categories.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_category_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/category_service */ "./resources/js/services/category_service.js");


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
  name: "categories",
  data: function data() {
    return {
      comName: "Category",
      categories: [],
      categoryData: {
        name: "",
        image: ""
      },
      moreExist: false,
      nextPage: 0,
      editCategoryData: {},
      errors: {}
    };
  },
  mounted: function mounted() {
    this.loadCategories();
  },
  methods: {
    loadCategories: function () {
      var _loadCategories = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_category_service__WEBPACK_IMPORTED_MODULE_1__["loadCategories"]();

              case 3:
                response = _context.sent;
                this.categories = response.data.categories;
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: 'Category Data Not Found',
                  time: 5000
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      function loadCategories() {
        return _loadCategories.apply(this, arguments);
      }

      return loadCategories;
    }(),
    attachImage: function attachImage() {
      //to use some file todo
      this.categoryData.image = this.$refs.newCategoryImage.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.newCategoryImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.categoryData.image);
    },
    hideNewcategoryModal: function hideNewcategoryModal() {
      //hide modal
      this.$refs.newCategoryModal.hide();
    },
    showNewCategoryModal: function showNewCategoryModal() {
      //show Modal
      this.$refs.newCategoryModal.show();
    },
    createCategory: function () {
      var _createCategory = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // store category into database
                formData = new FormData();
                formData.append('name', this.categoryData.name);
                formData.append('image', this.categoryData.image);
                _context2.prev = 3;
                _context2.next = 6;
                return _services_category_service__WEBPACK_IMPORTED_MODULE_1__["createCategories"](formData);

              case 6:
                response = _context2.sent;
                this.loadCategories();
                this.hideNewcategoryModal();
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                this.categoryData.name = '';
                this.categoryData.image = '';
                _context2.next = 23;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](3);
                _context2.t1 = _context2.t0.response.status;
                _context2.next = _context2.t1 === 422 ? 19 : 21;
                break;

              case 19:
                this.errors = _context2.t0.response.data.errors;
                return _context2.abrupt("break", 23);

              case 21:
                this.flashMessage.error({
                  message: 'Something Went Wrong',
                  time: 5000
                });
                return _context2.abrupt("break", 23);

              case 23:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 14]]);
      }));

      function createCategory() {
        return _createCategory.apply(this, arguments);
      }

      return createCategory;
    }(),
    deleteCategory: function () {
      var _deleteCategory = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(category) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (window.confirm("Are you sure want to delete ".concat(category.name))) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _context3.prev = 2;
                _context3.next = 5;
                return _services_category_service__WEBPACK_IMPORTED_MODULE_1__["deleteCategory"](category.id);

              case 5:
                response = _context3.sent;
                this.loadCategories();
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                _context3.next = 13;
                break;

              case 10:
                _context3.prev = 10;
                _context3.t0 = _context3["catch"](2);
                this.flashMessage.error({
                  message: _context3.t0.response.data.message,
                  time: 5000
                });

              case 13:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[2, 10]]);
      }));

      function deleteCategory(_x) {
        return _deleteCategory.apply(this, arguments);
      }

      return deleteCategory;
    }(),
    hideEditCategoryModal: function hideEditCategoryModal() {
      this.$refs.editCategoryModal.hide();
    },
    showEditCategoryModal: function showEditCategoryModal() {
      this.$refs.editCategoryModal.show();
    },
    editCategory: function editCategory(category) {
      this.editCategoryData = category;
      this.showEditCategoryModal();
    },
    editAttachImage: function editAttachImage() {
      this.editCategoryData.image = this.$refs.editCategoryImage.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.editCategoryImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.editCategoryData.image);
    },
    updateCategory: function () {
      var _updateCategory = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                console.log('update category');
                formData = new FormData();
                formData.append('name', this.editCategoryData.name);
                formData.append('image', this.editCategoryData.image);
                formData.append('_method', 'put');
                _context4.prev = 5;
                _context4.next = 8;
                return _services_category_service__WEBPACK_IMPORTED_MODULE_1__["updateCategory"](this.editCategoryData.id, formData);

              case 8:
                response = _context4.sent;
                this.categories.map(function (category) {
                  if (category.id == response.data.id) {
                    for (var key in response.data) {
                      category[key] = response.data[key];
                    }
                  }
                });
                this.hideEditCategoryModal();
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                this.loadCategories();
                _context4.next = 18;
                break;

              case 15:
                _context4.prev = 15;
                _context4.t0 = _context4["catch"](5);
                this.flashMessage.error({
                  message: _context4.t0.response.data.message,
                  time: 5000
                });

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[5, 15]]);
      }));

      function updateCategory() {
        return _updateCategory.apply(this, arguments);
      }

      return updateCategory;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************/
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
        _c("h1", { staticClass: "mt-4" }, [_vm._v(_vm._s(_vm.comName))]),
        _vm._v(" "),
        _c("ol", { staticClass: "breadcrumb mb-4" }, [
          _c("li", { staticClass: "breadcrumb-item active" }, [
            _vm._v(_vm._s(_vm.comName))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-header" }, [
                _c("div", { staticClass: "text-left" }, [
                  _c("span", [_vm._v("Category Management")]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-light float-right",
                      attrs: { type: "button" },
                      on: { click: _vm.showNewCategoryModal }
                    },
                    [
                      _c("span", { staticClass: "fa fa-plus" }),
                      _vm._v(" Create New")
                    ]
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c("div", { staticClass: "table-responsive" }, [
                  _c(
                    "table",
                    {
                      staticClass: "table table-bordered",
                      attrs: {
                        id: "dataTable",
                        width: "100%",
                        cellspacing: "0"
                      }
                    },
                    [
                      _vm._m(0),
                      _vm._v(" "),
                      _vm._m(1),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.categories, function(category, index) {
                          return _c("tr", { key: index }, [
                            _c("td", [_vm._v(_vm._s(index + 1))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(category.name))]),
                            _vm._v(" "),
                            _c("td", [
                              _c("img", {
                                staticClass: "image-table",
                                attrs: {
                                  src:
                                    _vm.$store.state.serverPath +
                                    "/storage/" +
                                    category.image,
                                  alt: category.name
                                }
                              })
                            ]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-sm btn-primary",
                                  on: {
                                    click: function($event) {
                                      return _vm.editCategory(category)
                                    }
                                  }
                                },
                                [_c("span", { staticClass: "fa fa-edit" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "btn btn-sm btn-danger",
                                  on: {
                                    click: function($event) {
                                      return _vm.deleteCategory(category)
                                    }
                                  }
                                },
                                [_c("span", { staticClass: "fa fa-trash" })]
                              )
                            ])
                          ])
                        }),
                        0
                      )
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "newCategoryModal",
          attrs: { "hide-footer": "", title: "Add new category" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.createCategory($event)
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
                        value: _vm.categoryData.name,
                        expression: "categoryData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "name",
                      placeholder: "Enter name"
                    },
                    domProps: { value: _vm.categoryData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.categoryData, "name", $event.target.value)
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
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "image" } }, [
                    _vm._v("Image : ")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    ref: "newCategoryImage",
                    staticClass: "form-control",
                    attrs: { type: "file", id: "image" },
                    on: { change: _vm.attachImage }
                  }),
                  _vm._v(" "),
                  _vm.errors.image
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.image[0]))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _vm.categoryData.image.name
                    ? _c("div", [
                        _c("img", {
                          ref: "newCategoryImageDisplay",
                          staticClass: "w-150px",
                          attrs: { src: "" }
                        })
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
                      on: { click: _vm.hideNewcategoryModal }
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
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "editCategoryModal",
          attrs: { "hide-footer": "", title: "Edit category" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updateCategory($event)
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
                        value: _vm.editCategoryData.name,
                        expression: "editCategoryData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "name",
                      placeholder: "Enter name"
                    },
                    domProps: { value: _vm.editCategoryData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editCategoryData,
                          "name",
                          $event.target.value
                        )
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
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "image" } }, [
                    _vm._v("Image : ")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    ref: "editCategoryImage",
                    staticClass: "form-control",
                    attrs: { type: "file", id: "image" },
                    on: { change: _vm.editAttachImage }
                  }),
                  _vm._v(" "),
                  _vm.errors.image
                    ? _c("div", { staticClass: "invalid-feedback" }, [
                        _vm._v(_vm._s(_vm.errors.image[0]))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("br"),
                  _vm._v(" "),
                  _c("div", [
                    _c("img", {
                      ref: "editCategoryImageDisplay",
                      staticClass: "w-150px",
                      attrs: {
                        src:
                          _vm.$store.state.serverPath +
                          "/storage/" +
                          _vm.editCategoryData.image
                      }
                    })
                  ])
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
                      on: { click: _vm.hideEditCategoryModal }
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
                      _vm._v(" Edit")
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
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Id")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Image")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("tfoot", [
      _c("tr", [
        _c("th", [_vm._v("Id")]),
        _vm._v(" "),
        _c("th", [_vm._v("Name")]),
        _vm._v(" "),
        _c("th", [_vm._v("Image")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/services/category_service.js":
/*!***************************************************!*\
  !*** ./resources/js/services/category_service.js ***!
  \***************************************************/
/*! exports provided: createCategories, loadCategories, deleteCategory, updateCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCategories", function() { return createCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategories", function() { return loadCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteCategory", function() { return deleteCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCategory", function() { return updateCategory; });
/* harmony import */ var _http_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_services */ "./resources/js/services/http_services.js");
/**
 * Created by aminur on 9/7/20.
 */

function createCategories(data) {
  return Object(_http_services__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/api/category', data);
}
function loadCategories() {
  return Object(_http_services__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/api/category');
}
function deleteCategory(id) {
  return Object(_http_services__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/api/category/".concat(id));
}
function updateCategory(id, data) {
  return Object(_http_services__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("/api/category/".concat(id), data);
}

/***/ }),

/***/ "./resources/js/views/Categories.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Categories.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Categories_vue_vue_type_template_id_53f0967b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Categories.vue?vue&type=template&id=53f0967b&scoped=true& */ "./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&scoped=true&");
/* harmony import */ var _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories.vue?vue&type=script&lang=js& */ "./resources/js/views/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Categories_vue_vue_type_template_id_53f0967b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Categories_vue_vue_type_template_id_53f0967b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "53f0967b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Categories.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Categories.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Categories.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Categories.vue?vue&type=template&id=53f0967b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Categories.vue?vue&type=template&id=53f0967b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Categories_vue_vue_type_template_id_53f0967b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);