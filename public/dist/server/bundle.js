/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/server";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(1);

function modules() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    return state;
}

function cms() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    return state;
}

var rootReducer = (0, _redux.combineReducers)({
    modules: modules,
    cms: cms
});

exports.default = rootReducer;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(5);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _fs = __webpack_require__(6);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(7);

var _path2 = _interopRequireDefault(_path);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(8);

var _server2 = _interopRequireDefault(_server);

var _App = __webpack_require__(9);

var _App2 = _interopRequireDefault(_App);

var _configureStore = __webpack_require__(15);

var _configureStore2 = _interopRequireDefault(_configureStore);

var _rootReducer = __webpack_require__(2);

var _rootReducer2 = _interopRequireDefault(_rootReducer);

var _helpers = __webpack_require__(17);

var _helpers2 = _interopRequireDefault(_helpers);

var _reactRedux = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

var port = process.env.port || 3001;

var MenuLocator = function MenuLocator() {
    this.menus = [{
        id: 1,
        path: "/",
        title: "Home",
        rootId: 3
    }, {
        id: 2,
        path: "/about",
        title: "About",
        rootId: 1
    }, {
        id: 3,
        path: "/jobs",
        title: "Jobs",
        rootId: 1
    }, {
        id: 4,
        path: "/us",
        title: "Us",
        rootId: 3
    }];
};
MenuLocator.prototype.GetMenu = function (publicPath) {
    return this.menus.filter(function (val, id) {
        return val.path === publicPath;
    })[0];
};
MenuLocator.prototype.GetAll = function () {
    return this.menus;
};

var ModulesService = function ModulesService() {
    this.modules = [{
        id: 3,
        Menuid: 1,
        ModuleTypeId: 3,
        Settings: {
            headingType: 2,
            heading: "Überschrift"
        }
    }, {
        id: 1,
        Menuid: 1,
        ModuleTypeId: 1,
        Settings: { content: "Hi! I'm content!" }
    }, {
        id: 2,
        Menuid: 1,
        ModuleTypeId: 2,
        Settings: { src: "https://www.wien.info/media/images/altstadt-panorama-mit-stephansdom-und-karlskirche-19to1.jpeg" }
    }, {
        id: 4,
        Menuid: 3,
        ModuleTypeId: 3,
        Settings: { heading: "Jobs", headingType: 1 }
    }];
};
ModulesService.prototype.GetModules = function (menuid) {
    return this.modules.filter(function (val, inx) {
        return val.Menuid === menuid;
    });
};

app.use("/public", _express2.default.static('public'));

app.get("*", function (req, res) {

    var menus = new MenuLocator();
    var modules = new ModulesService();

    var menu = menus.GetMenu(req.url);

    var allMenus = menus.GetAll();

    var templatepath = _path2.default.resolve("public", "index.html");
    var template = _fs2.default.readFileSync(templatepath).toString();

    try {
        var found = modules.GetModules(menu.id);

        var initialState = {
            modules: found,
            cms: {
                adminEdit: false
            },
            menus: allMenus
        };

        if (_helpers2.default.USE_SSR) {
            var reactHtml = _server2.default.renderToStaticMarkup(_react2.default.createElement(_App2.default, { store: initialState }));
            template = template.replace("<!-- ::SSR:: -->", reactHtml);
        }
        template = template.replace("<!-- ::PRELOADED_STATE:: -->", "<script>window.__PRELOADED_STATE__ = " + JSON.stringify(initialState) + "</script>");

        var clientBundle = "bundle";
        if (initialState.cms.adminEdit) {
            clientBundle = "bundle-admin";
        }
        template = template.replace("<!-- ::CLIENT_BUNDLE:: -->", "<script src=\"public/dist/client/" + clientBundle + ".js\"></script>");
    } catch (e) {
        template = template.replace("<!-- ::SSR:: -->", "<div class='error'>Request: " + req.path + "<br>" + e.toString() + "</div>");
    }

    res.end(template);
});

app.listen(port, function () {
    console.log("Listenin on port " + port);
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Content = __webpack_require__(10);

var _Content2 = _interopRequireDefault(_Content);

var _Image = __webpack_require__(11);

var _Image2 = _interopRequireDefault(_Image);

var _Heading = __webpack_require__(13);

var _Heading2 = _interopRequireDefault(_Heading);

var _Menu = __webpack_require__(14);

var _Menu2 = _interopRequireDefault(_Menu);

var _AdminToggle = __webpack_require__(12);

var _AdminToggle2 = _interopRequireDefault(_AdminToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/// #if ADMIN


/// #endif


var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App(props) {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
        // console.log(this.props);
    }

    _createClass(App, [{
        key: "render",
        value: function render() {
            var children = [];
            for (var i = 0; i < this.props.store.modules.length; i++) {
                var el = null;
                var module = this.props.store.modules[i];
                switch (module.ModuleTypeId) {
                    case 1:
                        el = _react2.default.createElement(_Content2.default, { key: i, module: module, cms: this.props.store.cms });
                        break;
                    case 2:
                        el = _react2.default.createElement(_Image2.default, { key: i, module: module, cms: this.props.store.cms });
                        break;
                    case 3:
                        el = _react2.default.createElement(_Heading2.default, { key: i, module: module, cms: this.props.store.cms });
                        break;
                }
                if (el != null) children.push(el);
            }

            /// #if ADMIN
            if (this.props.store.cms.adminEdit) {
                children.push(_react2.default.createElement(_AdminToggle2.default, { key: -1, cms: this.props.store.cms }));
            }
            /// #endif

            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "header",
                    null,
                    _react2.default.createElement(_Menu2.default, { rootId: "1", menus: this.props.store.menus })
                ),
                children,
                _react2.default.createElement(
                    "footer",
                    null,
                    _react2.default.createElement(_Menu2.default, { rootId: "3", menus: this.props.store.menus })
                )
            );
        }
    }, {
        key: "handleClick",
        value: function handleClick() {
            this.setState({
                count: this.state.count + 1
            });
        }
    }]);

    return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import { connect } from "react-redux";

var Content = function (_React$Component) {
    _inherits(Content, _React$Component);

    function Content(props) {
        _classCallCheck(this, Content);

        var _this = _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).call(this, props));

        _this.state = {
            value: _this.props.module.Settings.content
        };
        return _this;
    }

    _createClass(Content, [{
        key: "render",
        value: function render() {
            var cont = this.props.module.Settings.content;

            /// #if ADMIN
            if (this.props.cms.adminEdit) {
                cont = _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("input", { type: "text", value: this.state.value, onChange: this.handleContentChange.bind(this) }),
                    _react2.default.createElement(
                        "button",
                        { onClick: this.handleContentSave.bind(this) },
                        "Save"
                    )
                );
            }
            /// #endif

            return _react2.default.createElement(
                "div",
                null,
                cont
            );
        }
    }, {
        key: "handleContentChange",
        value: function handleContentChange(e) {
            this.setState({
                value: e.target.value
            });
        }
    }, {
        key: "handleContentSave",
        value: function handleContentSave(e) {
            if (this.state.value === this.props.module.Settings.content) return;
            console.log("save");

            e.preventDefault();
        }
    }]);

    return Content;
}(_react2.default.Component);

// const mapStateToProps = function(state) {
//     return {
//         modules: state.modules,
//         cms: state.cms
//     }
// }

// export default connect(mapStateToProps)(Content)


exports.default = Content;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Image = function (_React$Component) {
    _inherits(Image, _React$Component);

    function Image(props) {
        _classCallCheck(this, Image);

        return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).call(this, props));
    }

    _createClass(Image, [{
        key: "render",
        value: function render() {
            var edit = null;

            /// #if ADMIN
            if (this.props.cms.adminEdit) {
                edit = _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(
                        "button",
                        null,
                        "Edit"
                    )
                );
            }
            /// #endif

            return _react2.default.createElement(
                "div",
                null,
                edit,
                _react2.default.createElement(
                    "figure",
                    null,
                    _react2.default.createElement("img", { src: this.props.module.Settings.src })
                )
            );
        }
    }]);

    return Image;
}(_react2.default.Component);

exports.default = Image;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import { connect } from "react-redux"

var AdminToggle = function (_React$Component) {
    _inherits(AdminToggle, _React$Component);

    function AdminToggle(props) {
        _classCallCheck(this, AdminToggle);

        return _possibleConstructorReturn(this, (AdminToggle.__proto__ || Object.getPrototypeOf(AdminToggle)).call(this, props));
    }

    _createClass(AdminToggle, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                { id: "admin-toggle" },
                _react2.default.createElement(
                    "label",
                    { htmlFor: "admint" },
                    "Admin mode"
                ),
                _react2.default.createElement("input", { type: "checkbox", name: "admint", checked: this.props.cms.adminEdit, onChange: this.handleChange.bind(this) })
            );
        }
    }, {
        key: "handleChange",
        value: function handleChange() {}
    }]);

    return AdminToggle;
}(_react2.default.Component);

// const mapStateToProps = function(state) {
//     return {
//         cms: state.cms
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onAdminToggle: () => {
//             dispatch(toggleAdmin())
//         }
//     }
// }

exports.default = AdminToggle; // connect(mapStateToProps, mapDispatchToProps)(AdminToggle)

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Heading = function (_React$Component) {
    _inherits(Heading, _React$Component);

    function Heading(props) {
        _classCallCheck(this, Heading);

        var _this = _possibleConstructorReturn(this, (Heading.__proto__ || Object.getPrototypeOf(Heading)).call(this, props));

        _this.state = {
            value: _this.props.module.Settings.heading,
            type: _this.props.module.Settings.headingType
        };
        return _this;
    }

    _createClass(Heading, [{
        key: "render",
        value: function render() {
            var HeadingTag = "h" + this.props.module.Settings.headingType;
            var content = _react2.default.createElement(
                HeadingTag,
                null,
                this.props.module.Settings.heading
            );
            /// #if ADMIN
            if (this.props.cms.adminEdit) {
                content = _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement("input", { type: "text", value: this.state.value, onChange: this.handleHeadingChanged.bind(this) }),
                    _react2.default.createElement(
                        "select",
                        { onChange: this.handleTypeChanged.bind(this), value: this.state.type },
                        _react2.default.createElement(
                            "option",
                            { value: "1" },
                            "H1"
                        ),
                        _react2.default.createElement(
                            "option",
                            { value: "2" },
                            "H2"
                        ),
                        _react2.default.createElement(
                            "option",
                            { value: "3" },
                            "H3"
                        ),
                        _react2.default.createElement(
                            "option",
                            { value: "4" },
                            "H4"
                        ),
                        _react2.default.createElement(
                            "option",
                            { value: "5" },
                            "H5"
                        ),
                        _react2.default.createElement(
                            "option",
                            { value: "6" },
                            "H6"
                        )
                    ),
                    _react2.default.createElement(
                        "button",
                        null,
                        "Save"
                    )
                );
            }
            /// #endif
            return _react2.default.createElement(
                "div",
                null,
                content
            );
        }
    }, {
        key: "handleHeadingChanged",
        value: function handleHeadingChanged(e) {
            this.setState({
                value: e.target.value
            });
        }
    }, {
        key: "handleTypeChanged",
        value: function handleTypeChanged(e) {
            this.setState({
                type: e.target.value
            });
        }
    }]);

    return Heading;
}(_react2.default.Component);

exports.default = Heading;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu(props) {
        _classCallCheck(this, Menu);

        return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));
    }

    _createClass(Menu, [{
        key: "getThisRootMenus",
        value: function getThisRootMenus() {
            var _this2 = this;

            return this.props.menus.filter(function (el) {
                return el.rootId == _this2.props.rootId;
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "nav",
                null,
                _react2.default.createElement(
                    "ul",
                    null,
                    this.getThisRootMenus().map(function (element, inx) {
                        return _react2.default.createElement(
                            "li",
                            { key: inx },
                            _react2.default.createElement(
                                "a",
                                { href: element.path },
                                element.title
                            )
                        );
                    })
                )
            );
        }
    }]);

    return Menu;
}(_react2.default.Component);

exports.default = Menu;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(1);

var _reduxPromise = __webpack_require__(16);

var _reduxPromise2 = _interopRequireDefault(_reduxPromise);

var _rootReducer = __webpack_require__(2);

var _rootReducer2 = _interopRequireDefault(_rootReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middleware = [_reduxPromise2.default];

var composeEnhancers = _redux.compose;
if (typeof window != "undefined") {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
}

function configureStore(initialState) {
    return (0, _redux.createStore)(_rootReducer2.default, initialState, composeEnhancers(_redux.applyMiddleware.apply(undefined, middleware)));
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("redux-promise");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
    USE_SSR: true
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })
/******/ ]);