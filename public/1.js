(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Products.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_product_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product_services */ "./resources/js/services/product_services.js");


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
  data: function data() {
    return {
      comName: "Product",
      categories: [],
      products: [],
      productData: {
        category_id: '',
        name: '',
        image: ''
      },
      moreExist: false,
      importData: {
        import_file: ''
      },
      fileName: '',
      nextPage: 0,
      editProductData: {},
      errors: {}
    };
  },
  mounted: function mounted() {
    this.loadCategories();
  },
  created: function created() {
    this.loadProducts();
  },
  methods: {
    exportProductData: function () {
      var _exportProductData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _services_product_services__WEBPACK_IMPORTED_MODULE_1__["exportExcel"]();

              case 3:
                _context.next = 8;
                break;

              case 5:
                _context.prev = 5;
                _context.t0 = _context["catch"](0);
                this.flashMessage.error({
                  message: 'Something Went Wrong',
                  time: 5000
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 5]]);
      }));

      function exportProductData() {
        return _exportProductData.apply(this, arguments);
      }

      return exportProductData;
    }(),
    exportPdfProductData: function () {
      var _exportPdfProductData = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _services_product_services__WEBPACK_IMPORTED_MODULE_1__["exportPdf"]();

              case 3:
                response = _context2.sent;
                console.log(response);
                this.flashMessage.success({
                  message: "Product Pdf Download Successfully",
                  time: 5000
                });
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                this.flashMessage.error({
                  message: 'Something Went Wrong',
                  time: 5000
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function exportPdfProductData() {
        return _exportPdfProductData.apply(this, arguments);
      }

      return exportPdfProductData;
    }(),
    loadCategories: function () {
      var _loadCategories = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _services_product_services__WEBPACK_IMPORTED_MODULE_1__["loadCategories"]();

              case 3:
                response = _context3.sent;
                this.categories = response.data;
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                this.flashMessage.error({
                  message: 'category Data Not Found',
                  time: 5000
                });

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 7]]);
      }));

      function loadCategories() {
        return _loadCategories.apply(this, arguments);
      }

      return loadCategories;
    }(),
    loadProducts: function () {
      var _loadProducts = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _services_product_services__WEBPACK_IMPORTED_MODULE_1__["loadProducts"]();

              case 3:
                response = _context4.sent;
                this.products = response.data.data;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExist = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExist = false;
                }

                _context4.next = 11;
                break;

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](0);
                this.flashMessage.error({
                  message: 'Product Data Not Found',
                  time: 5000
                });

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[0, 8]]);
      }));

      function loadProducts() {
        return _loadProducts.apply(this, arguments);
      }

      return loadProducts;
    }(),
    attachImage: function attachImage() {
      //to use some file todo
      this.productData.image = this.$refs.newProductImage.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.newProductImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.productData.image);
    },
    hideNewProductModal: function hideNewProductModal() {
      //hide modal
      this.$refs.newProductModal.hide();
    },
    showNewProductModal: function showNewProductModal() {
      //show Modal
      this.$refs.newProductModal.show();
    },
    importProductModal: function importProductModal() {
      //show Modal
      this.$refs.newImportProductModal.show();
    },
    importHideproductModal: function importHideproductModal() {
      //hide modal
      this.$refs.newImportProductModal.hide();
    },
    uploadExcel: function uploadExcel(e) {
      this.importData.import_file = this.$refs.importProductExcel.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.importFile = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.importData.import_file);
    },
    importProducts: function () {
      var _importProducts = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                formData = new FormData();
                formData.append('import_file', this.importData.import_file);
                _context5.prev = 2;
                _context5.next = 5;
                return _services_product_services__WEBPACK_IMPORTED_MODULE_1__["importProduct"](formData);

              case 5:
                response = _context5.sent;
                //console.log(response);
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                this.importHideproductModal();
                _context5.next = 13;
                break;

              case 10:
                _context5.prev = 10;
                _context5.t0 = _context5["catch"](2);
                this.flashMessage.error({
                  message: _context5.t0.response.data.message,
                  time: 5000
                });

              case 13:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[2, 10]]);
      }));

      function importProducts() {
        return _importProducts.apply(this, arguments);
      }

      return importProducts;
    }(),
    createProducts: function () {
      var _createProducts = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                // store category into database
                formData = new FormData();
                formData.append('category_id', this.productData.category_id);
                formData.append('name', this.productData.name);
                formData.append('image', this.productData.image);
                _context6.prev = 4;
                _context6.next = 7;
                return _services_product_services__WEBPACK_IMPORTED_MODULE_1__["createProducts"](formData);

              case 7:
                response = _context6.sent;
                this.loadProducts();
                this.hideNewProductModal();
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                this.productData.category_id = '', this.productData.name = '';
                this.productData.image = '';
                _context6.next = 24;
                break;

              case 15:
                _context6.prev = 15;
                _context6.t0 = _context6["catch"](4);
                _context6.t1 = _context6.t0.response.status;
                _context6.next = _context6.t1 === 422 ? 20 : 22;
                break;

              case 20:
                this.errors = _context6.t0.response.data.errors;
                return _context6.abrupt("break", 24);

              case 22:
                this.flashMessage.error({
                  message: 'Something Went Wrong',
                  time: 5000
                });
                return _context6.abrupt("break", 24);

              case 24:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[4, 15]]);
      }));

      function createProducts() {
        return _createProducts.apply(this, arguments);
      }

      return createProducts;
    }(),
    deleteProducts: function () {
      var _deleteProducts = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(category) {
        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (window.confirm("Are you sure want to delete ".concat(category.name))) {
                  _context7.next = 2;
                  break;
                }

                return _context7.abrupt("return");

              case 2:
                _context7.prev = 2;
                _context7.next = 5;
                return _services_product_services__WEBPACK_IMPORTED_MODULE_1__["deleteProduct"](category.id);

              case 5:
                response = _context7.sent;
                this.loadProducts();
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                _context7.next = 13;
                break;

              case 10:
                _context7.prev = 10;
                _context7.t0 = _context7["catch"](2);
                this.flashMessage.error({
                  message: _context7.t0.response.data.message,
                  time: 5000
                });

              case 13:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this, [[2, 10]]);
      }));

      function deleteProducts(_x) {
        return _deleteProducts.apply(this, arguments);
      }

      return deleteProducts;
    }(),
    hideEditProductModal: function hideEditProductModal() {
      this.$refs.EditProductModal.hide();
    },
    showEditProductModal: function showEditProductModal() {
      this.$refs.EditProductModal.show();
    },
    editProduct: function editProduct(product) {
      this.editProductData = product;
      this.showEditProductModal();
    },
    editAttachImage: function editAttachImage() {
      this.editProductData.image = this.$refs.editProductImage.files[0];
      var reader = new FileReader();
      reader.addEventListener('load', function () {
        this.$refs.editProductImageDisplay.src = reader.result;
      }.bind(this), false);
      reader.readAsDataURL(this.editProductData.image);
    },
    updateProduct: function () {
      var _updateProduct = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var formData, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                formData = new FormData();
                formData.append('category_id', this.editProductData.category_id);
                formData.append('name', this.editProductData.name);
                formData.append('image', this.editProductData.image);
                formData.append('_method', 'put');
                _context8.prev = 5;
                _context8.next = 8;
                return _services_product_services__WEBPACK_IMPORTED_MODULE_1__["updateProduct"](this.editProductData.id, formData);

              case 8:
                response = _context8.sent;
                this.hideEditProductModal();
                this.flashMessage.success({
                  message: response.data.message,
                  time: 5000
                });
                this.loadProducts();
                _context8.next = 17;
                break;

              case 14:
                _context8.prev = 14;
                _context8.t0 = _context8["catch"](5);
                this.flashMessage.error({
                  message: _context8.t0.response.data.message,
                  time: 5000
                });

              case 17:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this, [[5, 14]]);
      }));

      function updateProduct() {
        return _updateProduct.apply(this, arguments);
      }

      return updateProduct;
    }(),
    loadMore: function () {
      var _loadMore = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var _this = this;

        var response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.prev = 0;
                _context9.next = 3;
                return _services_product_services__WEBPACK_IMPORTED_MODULE_1__["loadMore"](this.nextPage);

              case 3:
                response = _context9.sent;

                if (response.data.current_page < response.data.last_page) {
                  this.moreExist = true;
                  this.nextPage = response.data.current_page + 1;
                } else {
                  this.moreExist = false;
                }

                response.data.data.forEach(function (data) {
                  _this.products.push(data);
                });
                _context9.next = 11;
                break;

              case 8:
                _context9.prev = 8;
                _context9.t0 = _context9["catch"](0);
                this.flashMessage.error({
                  message: 'Some Error',
                  time: 5000
                });

              case 11:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[0, 8]]);
      }));

      function loadMore() {
        return _loadMore.apply(this, arguments);
      }

      return loadMore;
    }()
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
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
                  _c("span", [_vm._v(_vm._s(_vm.comName) + " Management")]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-light ml-2 float-right",
                      attrs: { type: "button" },
                      on: { click: _vm.showNewProductModal }
                    },
                    [
                      _c("span", { staticClass: "fa fa-plus" }),
                      _vm._v(" Create New")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "btn btn-primary ml-2 float-right",
                      attrs: { type: "button" },
                      on: { click: _vm.importProductModal }
                    },
                    [
                      _c("i", { staticClass: "fas fa-file-import" }),
                      _vm._v(" Import Product")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-info ml-2 float-right",
                      on: {
                        click: function($event) {
                          return _vm.exportProductData()
                        }
                      }
                    },
                    [
                      _c("span", { staticClass: "fa fa-cloud" }),
                      _vm._v(" Export Excel")
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "btn btn-success ml-2 float-right",
                      on: {
                        click: function($event) {
                          return _vm.exportPdfProductData()
                        }
                      }
                    },
                    [
                      _c("i", { staticClass: "fas fa-file-pdf" }),
                      _vm._v(" Export Pdf")
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
                        _vm._l(_vm.products, function(product, index) {
                          return _c("tr", { key: index }, [
                            _c("td", [_vm._v(_vm._s(index + 1))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(product.category.name))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(product.name))]),
                            _vm._v(" "),
                            _c("td", [
                              _c("img", {
                                staticClass: "image-table",
                                attrs: {
                                  src:
                                    _vm.$store.state.serverPath +
                                    "/storage/" +
                                    product.image,
                                  alt: product.name
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
                                      return _vm.editProduct(product)
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
                                      return _vm.deleteProducts(product)
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
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.moreExist,
                          expression: "moreExist"
                        }
                      ],
                      staticClass: "text-center"
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary",
                          on: { click: _vm.loadMore }
                        },
                        [
                          _c("span", { staticClass: "fa fa-arrow-down" }),
                          _vm._v(" Load More")
                        ]
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
          ref: "newProductModal",
          attrs: { "hide-footer": "", title: "Add new Product" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.createProducts($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "category_id" } }, [
                    _vm._v("Category : ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.productData.category_id,
                          expression: "productData.category_id"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "category_id" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.productData,
                            "category_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Select Category")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.categories, function(category, index) {
                        return _c(
                          "option",
                          { key: index, domProps: { value: category.id } },
                          [_vm._v(" " + _vm._s(category.name))]
                        )
                      })
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [_vm._v("Name : ")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.productData.name,
                        expression: "productData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "name",
                      placeholder: "Enter name"
                    },
                    domProps: { value: _vm.productData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.productData, "name", $event.target.value)
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
                    ref: "newProductImage",
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
                  _vm.productData.image.name
                    ? _c("div", [
                        _c("img", {
                          ref: "newProductImageDisplay",
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
                      on: { click: _vm.hideNewProductModal }
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
          ref: "newImportProductModal",
          attrs: { "hide-footer": "", title: "Import  Product" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.importProducts($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "import" } }, [
                    _vm._v("Import : ")
                  ]),
                  _vm._v(" "),
                  _c("input", { ref: "importFile", attrs: { type: "hidden" } }),
                  _vm._v(" "),
                  _c("input", {
                    ref: "importProductExcel",
                    staticClass: "form-control",
                    attrs: { type: "file", name: "import_file", id: "import" },
                    on: {
                      change: function($event) {
                        return _vm.uploadExcel($event)
                      }
                    }
                  })
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
                      on: { click: _vm.importHideproductModal }
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
                      _vm._v(" Import Now")
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
          ref: "EditProductModal",
          attrs: { "hide-footer": "", title: "Update Product" }
        },
        [
          _c("div", { staticClass: "d-block" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updateProduct($event)
                  }
                }
              },
              [
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "category_id" } }, [
                    _vm._v("Category : ")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.editProductData.category_id,
                          expression: "editProductData.category_id"
                        }
                      ],
                      staticClass: "form-control",
                      attrs: { id: "category_id" },
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.editProductData,
                            "category_id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "" } }, [
                        _vm._v("Select Category")
                      ]),
                      _vm._v(" "),
                      _vm._l(_vm.categories, function(category, index) {
                        return _c(
                          "option",
                          {
                            key: index,
                            domProps: {
                              value: category.id,
                              selected:
                                category.id == _vm.editProductData.category_id
                            }
                          },
                          [_vm._v(" " + _vm._s(category.name))]
                        )
                      })
                    ],
                    2
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group" }, [
                  _c("label", { attrs: { for: "name" } }, [_vm._v("Name : ")]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.editProductData.name,
                        expression: "editProductData.name"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: {
                      type: "text",
                      id: "name",
                      placeholder: "Enter name"
                    },
                    domProps: { value: _vm.editProductData.name },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(
                          _vm.editProductData,
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
                    ref: "editProductImage",
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
                      ref: "editProductImageDisplay",
                      staticClass: "w-150px",
                      attrs: {
                        src:
                          _vm.$store.state.serverPath +
                          "/storage/" +
                          _vm.editProductData.image
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
                      on: { click: _vm.hideEditProductModal }
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
        _c("th", [_vm._v("Category Name")]),
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
        _c("th", [_vm._v("Category Name")]),
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

/***/ "./resources/js/services/product_services.js":
/*!***************************************************!*\
  !*** ./resources/js/services/product_services.js ***!
  \***************************************************/
/*! exports provided: loadCategories, createProducts, loadProducts, deleteProduct, updateProduct, loadMore, exportExcel, importProduct, exportPdf */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategories", function() { return loadCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createProducts", function() { return createProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProducts", function() { return loadProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProduct", function() { return deleteProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateProduct", function() { return updateProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMore", function() { return loadMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportExcel", function() { return exportExcel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importProduct", function() { return importProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exportPdf", function() { return exportPdf; });
/* harmony import */ var _http_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http_services */ "./resources/js/services/http_services.js");
/**
 * Created by aminur on 9/12/20.
 */

function loadCategories() {
  return Object(_http_services__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/api/get-categories');
}
function createProducts(data) {
  return Object(_http_services__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/api/product', data);
}
function loadProducts() {
  return Object(_http_services__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/api/product');
}
function deleteProduct(id) {
  return Object(_http_services__WEBPACK_IMPORTED_MODULE_0__["http"])()["delete"]("/api/product/".concat(id));
}
function updateProduct(id, data) {
  return Object(_http_services__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post("/api/product/".concat(id), data);
}
function loadMore(nextPage) {
  return Object(_http_services__WEBPACK_IMPORTED_MODULE_0__["http"])().get("/api/product?page=".concat(nextPage));
}
function exportExcel() {
  return Object(_http_services__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/api/export-product', {
    responseType: 'arraybuffer'
  }).then(function (response) {
    var url = window.URL.createObjectURL(new Blob([response.data]));
    var link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'file.xlsx');
    document.body.appendChild(link);
    link.click();
    setTimeout(function () {
      window.URL.revokeObjectURL(url);
    }, 100);
  });
}
function importProduct(data) {
  return Object(_http_services__WEBPACK_IMPORTED_MODULE_0__["httpFile"])().post('/api/import-product', data);
}
function exportPdf() {
  return Object(_http_services__WEBPACK_IMPORTED_MODULE_0__["http"])().get('/api/pdfProductExport', {
    responseType: 'arraybuffer'
  }).then(function (response) {
    var url = window.URL.createObjectURL(new Blob([response.data]));
    var link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'file.pdf');
    document.body.appendChild(link);
    link.click();
  });
}

/***/ }),

/***/ "./resources/js/views/Products.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Products.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Products_vue_vue_type_template_id_eec6f8fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Products.vue?vue&type=template&id=eec6f8fa&scoped=true& */ "./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&scoped=true&");
/* harmony import */ var _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Products.vue?vue&type=script&lang=js& */ "./resources/js/views/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Products_vue_vue_type_template_id_eec6f8fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Products_vue_vue_type_template_id_eec6f8fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "eec6f8fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Products.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Products.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Products.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_eec6f8fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Products.vue?vue&type=template&id=eec6f8fa&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Products.vue?vue&type=template&id=eec6f8fa&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_eec6f8fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Products_vue_vue_type_template_id_eec6f8fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);