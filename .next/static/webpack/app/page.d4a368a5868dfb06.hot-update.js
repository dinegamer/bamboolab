"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/content-slide.tsx":
/*!**************************************!*\
  !*** ./components/content-slide.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ContentSlide: function() { return /* binding */ ContentSlide; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n\n\n\n// Define animation variants\nconst titleVariants = {\n    initial: {\n        y: 0,\n        scale: 1.5,\n        opacity: 0\n    },\n    animate: {\n        y: 0,\n        scale: 1,\n        opacity: 1,\n        transition: {\n            duration: 1,\n            times: [\n                0,\n                0.5,\n                1\n            ]\n        }\n    }\n};\nconst contentData = {\n    \"Accueil\": {\n        title: \"Bienvenue \\xe0 BambooLab\",\n        content: \"BambooLab est le premier laboratoire de recherche innovant du Sankore Research Institute. \\n    Inspir\\xe9 par la r\\xe9silience et la croissance rapide du bambou, nous incarnons la force, la flexibilit\\xe9 \\n    et l'engagement envers l'innovation durable. Notre laboratoire se concentre sur trois domaines principaux :\\n    l'Intelligence Artificielle, l'Interface Homme-Machine, et l'ICT4Dev (Technologies de l'Information et \\n    de la Communication pour le D\\xe9veloppement).\",\n        author: \"Dr. Aboul Hassane CISSE\",\n        role: \"Directeur de BambooLab\"\n    },\n    \"\\xc0 Propos\": {\n        title: \"Notre Vision\",\n        content: \"BambooLab aspire \\xe0 devenir un centre d'excellence en recherche technologique en Afrique. \\n    Nous croyons en la puissance de l'innovation pour transformer la soci\\xe9t\\xe9 et r\\xe9soudre les d\\xe9fis \\n    du d\\xe9veloppement durable. Notre approche combine expertise technique, engagement social et \\n    collaboration internationale pour cr\\xe9er un impact durable.\",\n        author: \"\\xc9quipe de Direction\",\n        role: \"BambooLab\"\n    },\n    \"Notre \\xc9quipe\": {\n        title: \"Une \\xc9quipe Passionn\\xe9e\",\n        content: \"Notre \\xe9quipe diversifi\\xe9e r\\xe9unit des chercheurs, des \\xe9tudiants et des professionnels \\n    partageant une passion pour l'innovation technologique. Chaque membre apporte une expertise unique, \\n    cr\\xe9ant un environnement dynamique propice \\xe0 la cr\\xe9ativit\\xe9 et \\xe0 l'excellence en recherche.\",\n        author: \"Service RH\",\n        role: \"Gestion des Talents\"\n    },\n    \"Projets\": {\n        title: \"Nos Innovations\",\n        content: \"D\\xe9couvrez nos projets phares en IA, Interface Homme-Machine et ICT4Dev. \\n    Chaque projet vise \\xe0 apporter des solutions concr\\xe8tes aux d\\xe9fis soci\\xe9taux, \\n    en mettant l'accent sur l'\\xe9ducation, la sant\\xe9 et le d\\xe9veloppement durable.\",\n        author: \"\\xc9quipe Projets\",\n        role: \"Coordination R&D\"\n    },\n    \"\\xc9v\\xe9nements\": {\n        title: \"Nos Activit\\xe9s\",\n        content: \"BambooLab organise r\\xe9guli\\xe8rement des \\xe9v\\xe9nements, des ateliers et des s\\xe9minaires \\n    pour partager nos connaissances et cr\\xe9er des opportunit\\xe9s de networking. Rejoignez-nous \\n    pour d\\xe9couvrir les derni\\xe8res innovations et rencontrer des experts passionn\\xe9s.\",\n        author: \"\\xc9quipe \\xc9v\\xe9nementielle\",\n        role: \"Organisation & Communication\"\n    },\n    \"Rejoindre\": {\n        title: \"Rejoignez l'Innovation\",\n        content: \"Nous recherchons constamment des talents passionn\\xe9s par la technologie et l'innovation. \\n    Que vous soyez \\xe9tudiant, chercheur ou professionnel, BambooLab vous offre l'opportunit\\xe9 de \\n    participer \\xe0 des projets innovants et de d\\xe9velopper vos comp\\xe9tences.\",\n        author: \"Recrutement\",\n        role: \"D\\xe9veloppement des Talents\"\n    },\n    \"Partenariats\": {\n        title: \"Collaborons\",\n        content: \"BambooLab d\\xe9veloppe des partenariats strat\\xe9giques avec des universit\\xe9s, des entreprises \\n    et des organisations internationales. Ensemble, nous cr\\xe9ons un \\xe9cosyst\\xe8me d'innovation robuste \\n    pour un impact maximal sur la soci\\xe9t\\xe9.\",\n        author: \"Relations Partenaires\",\n        role: \"D\\xe9veloppement Strat\\xe9gique\"\n    },\n    \"Contact\": {\n        title: \"Contactez-nous\",\n        content: \"Vous souhaitez en savoir plus sur BambooLab ou explorer des opportunit\\xe9s de collaboration ? \\n    Notre \\xe9quipe est \\xe0 votre \\xe9coute. Contactez-nous pour discuter de vos id\\xe9es et d\\xe9couvrir comment \\n    nous pouvons travailler ensemble.\",\n        author: \"Service Communication\",\n        role: \"Relations Externes\"\n    }\n};\nfunction ContentSlide(param) {\n    let { title, onClose } = param;\n    const data = contentData[title] || {\n        title: title,\n        content: \"Contenu en cours de d\\xe9veloppement\",\n        author: \"BambooLab\",\n        role: \"Innovation & Recherche\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        className: \"absolute left-0 top-0 h-screen w-screen bg-black\",\n        initial: {\n            opacity: 0\n        },\n        animate: {\n            opacity: 1\n        },\n        exit: {\n            opacity: 0\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                className: \"flex h-full flex-col p-4 sm:p-8 md:p-12\",\n                initial: {\n                    y: \"100%\"\n                },\n                animate: {\n                    y: 0\n                },\n                transition: {\n                    type: \"spring\",\n                    damping: 30,\n                    stiffness: 300\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.h2, {\n                        className: \"mb-4 text-4xl sm:text-5xl md:text-6xl font-bold text-white\",\n                        variants: titleVariants,\n                        initial: \"initial\",\n                        animate: \"animate\",\n                        children: data.title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dell\\\\Downloads\\\\bamboolab\\\\bamboolab\\\\components\\\\content-slide.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        className: \"mb-8 h-0.5 w-full bg-green-500\",\n                        initial: {\n                            scaleX: 0\n                        },\n                        animate: {\n                            scaleX: 1\n                        },\n                        transition: {\n                            delay: 1,\n                            duration: 0.5\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dell\\\\Downloads\\\\bamboolab\\\\bamboolab\\\\components\\\\content-slide.tsx\",\n                        lineNumber: 114,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n                        className: \"flex-1\",\n                        initial: {\n                            opacity: 0\n                        },\n                        animate: {\n                            opacity: 1\n                        },\n                        transition: {\n                            delay: 1.5,\n                            duration: 0.5\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-6 text-lg sm:text-xl md:text-2xl text-white whitespace-pre-line\",\n                                children: data.content\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\dell\\\\Downloads\\\\bamboolab\\\\bamboolab\\\\components\\\\content-slide.tsx\",\n                                lineNumber: 126,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        src: \"/placeholder.svg?height=64&width=64\",\n                                        alt: \"Profile\",\n                                        width: 64,\n                                        height: 64,\n                                        className: \"mr-4 rounded-full\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\dell\\\\Downloads\\\\bamboolab\\\\bamboolab\\\\components\\\\content-slide.tsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-base sm:text-lg font-semibold text-white\",\n                                                children: data.author\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dell\\\\Downloads\\\\bamboolab\\\\bamboolab\\\\components\\\\content-slide.tsx\",\n                                                lineNumber: 138,\n                                                columnNumber: 15\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"text-sm sm:text-base text-gray-300\",\n                                                children: data.role\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\dell\\\\Downloads\\\\bamboolab\\\\bamboolab\\\\components\\\\content-slide.tsx\",\n                                                lineNumber: 139,\n                                                columnNumber: 15\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\dell\\\\Downloads\\\\bamboolab\\\\bamboolab\\\\components\\\\content-slide.tsx\",\n                                        lineNumber: 137,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\dell\\\\Downloads\\\\bamboolab\\\\bamboolab\\\\components\\\\content-slide.tsx\",\n                                lineNumber: 129,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\dell\\\\Downloads\\\\bamboolab\\\\bamboolab\\\\components\\\\content-slide.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\dell\\\\Downloads\\\\bamboolab\\\\bamboolab\\\\components\\\\content-slide.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"absolute right-4 top-4 sm:right-8 sm:top-8 rounded-full bg-white/10 p-2 text-white backdrop-blur-md\",\n                onClick: onClose,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    xmlns: \"http://www.w3.org/2000/svg\",\n                    className: \"h-6 w-6\",\n                    fill: \"none\",\n                    viewBox: \"0 0 24 24\",\n                    stroke: \"currentColor\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                        strokeLinecap: \"round\",\n                        strokeLinejoin: \"round\",\n                        strokeWidth: 2,\n                        d: \"M6 18L18 6M6 6l12 12\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\dell\\\\Downloads\\\\bamboolab\\\\bamboolab\\\\components\\\\content-slide.tsx\",\n                        lineNumber: 149,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\dell\\\\Downloads\\\\bamboolab\\\\bamboolab\\\\components\\\\content-slide.tsx\",\n                    lineNumber: 148,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\dell\\\\Downloads\\\\bamboolab\\\\bamboolab\\\\components\\\\content-slide.tsx\",\n                lineNumber: 144,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\dell\\\\Downloads\\\\bamboolab\\\\bamboolab\\\\components\\\\content-slide.tsx\",\n        lineNumber: 94,\n        columnNumber: 5\n    }, this);\n}\n_c = ContentSlide;\nvar _c;\n$RefreshReg$(_c, \"ContentSlide\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvY29udGVudC1zbGlkZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0Q7QUFDbEI7QUFFOUIsNEJBQTRCO0FBQzVCLE1BQU1FLGdCQUEwQjtJQUM5QkMsU0FBUztRQUFFQyxHQUFHO1FBQUdDLE9BQU87UUFBS0MsU0FBUztJQUFFO0lBQ3hDQyxTQUFTO1FBQ1BILEdBQUc7UUFDSEMsT0FBTztRQUNQQyxTQUFTO1FBQ1RFLFlBQVk7WUFBRUMsVUFBVTtZQUFHQyxPQUFPO2dCQUFDO2dCQUFHO2dCQUFLO2FBQUU7UUFBQztJQUNoRDtBQUNGO0FBRUEsTUFBTUMsY0FBYztJQUNsQixXQUFXO1FBQ1RDLE9BQU87UUFDUEMsU0FBVTtRQUtWQyxRQUFRO1FBQ1JDLE1BQU07SUFDUjtJQUNBLGVBQVk7UUFDVkgsT0FBTztRQUNQQyxTQUFVO1FBSVZDLFFBQVE7UUFDUkMsTUFBTTtJQUNSO0lBQ0EsbUJBQWdCO1FBQ2RILE9BQU87UUFDUEMsU0FBVTtRQUdWQyxRQUFRO1FBQ1JDLE1BQU07SUFDUjtJQUNBLFdBQVc7UUFDVEgsT0FBTztRQUNQQyxTQUFVO1FBR1ZDLFFBQVE7UUFDUkMsTUFBTTtJQUNSO0lBQ0Esb0JBQWM7UUFDWkgsT0FBTztRQUNQQyxTQUFVO1FBR1ZDLFFBQVE7UUFDUkMsTUFBTTtJQUNSO0lBQ0EsYUFBYTtRQUNYSCxPQUFPO1FBQ1BDLFNBQVU7UUFHVkMsUUFBUTtRQUNSQyxNQUFNO0lBQ1I7SUFDQSxnQkFBZ0I7UUFDZEgsT0FBTztRQUNQQyxTQUFVO1FBR1ZDLFFBQVE7UUFDUkMsTUFBTTtJQUNSO0lBQ0EsV0FBVztRQUNUSCxPQUFPO1FBQ1BDLFNBQVU7UUFHVkMsUUFBUTtRQUNSQyxNQUFNO0lBQ1I7QUFDRjtBQUVPLFNBQVNDLGFBQWEsS0FBMEQ7UUFBMUQsRUFBRUosS0FBSyxFQUFFSyxPQUFPLEVBQTBDLEdBQTFEO0lBQzNCLE1BQU1DLE9BQU9QLFdBQVcsQ0FBQ0MsTUFBa0MsSUFBSTtRQUM3REEsT0FBT0E7UUFDUEMsU0FBUztRQUNUQyxRQUFRO1FBQ1JDLE1BQU07SUFDUjtJQUVBLHFCQUNFLDhEQUFDZixpREFBTUEsQ0FBQ21CLEdBQUc7UUFDVEMsV0FBVTtRQUNWakIsU0FBUztZQUFFRyxTQUFTO1FBQUU7UUFDdEJDLFNBQVM7WUFBRUQsU0FBUztRQUFFO1FBQ3RCZSxNQUFNO1lBQUVmLFNBQVM7UUFBRTs7MEJBRW5CLDhEQUFDTixpREFBTUEsQ0FBQ21CLEdBQUc7Z0JBQ1RDLFdBQVU7Z0JBQ1ZqQixTQUFTO29CQUFFQyxHQUFHO2dCQUFPO2dCQUNyQkcsU0FBUztvQkFBRUgsR0FBRztnQkFBRTtnQkFDaEJJLFlBQVk7b0JBQUVjLE1BQU07b0JBQVVDLFNBQVM7b0JBQUlDLFdBQVc7Z0JBQUk7O2tDQUUxRCw4REFBQ3hCLGlEQUFNQSxDQUFDeUIsRUFBRTt3QkFDUkwsV0FBVTt3QkFDVk0sVUFBVXhCO3dCQUNWQyxTQUFRO3dCQUNSSSxTQUFRO2tDQUVQVyxLQUFLTixLQUFLOzs7Ozs7a0NBRWIsOERBQUNaLGlEQUFNQSxDQUFDbUIsR0FBRzt3QkFDVEMsV0FBVTt3QkFDVmpCLFNBQVM7NEJBQUV3QixRQUFRO3dCQUFFO3dCQUNyQnBCLFNBQVM7NEJBQUVvQixRQUFRO3dCQUFFO3dCQUNyQm5CLFlBQVk7NEJBQUVvQixPQUFPOzRCQUFHbkIsVUFBVTt3QkFBSTs7Ozs7O2tDQUV4Qyw4REFBQ1QsaURBQU1BLENBQUNtQixHQUFHO3dCQUNUQyxXQUFVO3dCQUNWakIsU0FBUzs0QkFBRUcsU0FBUzt3QkFBRTt3QkFDdEJDLFNBQVM7NEJBQUVELFNBQVM7d0JBQUU7d0JBQ3RCRSxZQUFZOzRCQUFFb0IsT0FBTzs0QkFBS25CLFVBQVU7d0JBQUk7OzBDQUV4Qyw4REFBQ29CO2dDQUFFVCxXQUFVOzBDQUNWRixLQUFLTCxPQUFPOzs7Ozs7MENBRWYsOERBQUNNO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ25CLGtEQUFLQTt3Q0FDSjZCLEtBQUk7d0NBQ0pDLEtBQUk7d0NBQ0pDLE9BQU87d0NBQ1BDLFFBQVE7d0NBQ1JiLFdBQVU7Ozs7OztrREFFWiw4REFBQ0Q7OzBEQUNDLDhEQUFDVTtnREFBRVQsV0FBVTswREFBaURGLEtBQUtKLE1BQU07Ozs7OzswREFDekUsOERBQUNlO2dEQUFFVCxXQUFVOzBEQUFzQ0YsS0FBS0gsSUFBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtwRSw4REFBQ21CO2dCQUNDZCxXQUFVO2dCQUNWZSxTQUFTbEI7MEJBRVQsNEVBQUNtQjtvQkFBSUMsT0FBTTtvQkFBNkJqQixXQUFVO29CQUFVa0IsTUFBSztvQkFBT0MsU0FBUTtvQkFBWUMsUUFBTzs4QkFDakcsNEVBQUNDO3dCQUFLQyxlQUFjO3dCQUFRQyxnQkFBZTt3QkFBUUMsYUFBYTt3QkFBR0MsR0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUsvRTtLQXJFZ0I3QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbnRlbnQtc2xpZGUudHN4P2M0ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uLCBWYXJpYW50cyB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuLy8gRGVmaW5lIGFuaW1hdGlvbiB2YXJpYW50c1xuY29uc3QgdGl0bGVWYXJpYW50czogVmFyaWFudHMgPSB7XG4gIGluaXRpYWw6IHsgeTogMCwgc2NhbGU6IDEuNSwgb3BhY2l0eTogMCB9LFxuICBhbmltYXRlOiB7XG4gICAgeTogMCxcbiAgICBzY2FsZTogMSxcbiAgICBvcGFjaXR5OiAxLFxuICAgIHRyYW5zaXRpb246IHsgZHVyYXRpb246IDEsIHRpbWVzOiBbMCwgMC41LCAxXSB9XG4gIH1cbn1cblxuY29uc3QgY29udGVudERhdGEgPSB7XG4gIFwiQWNjdWVpbFwiOiB7XG4gICAgdGl0bGU6IFwiQmllbnZlbnVlIMOgIEJhbWJvb0xhYlwiLFxuICAgIGNvbnRlbnQ6IGBCYW1ib29MYWIgZXN0IGxlIHByZW1pZXIgbGFib3JhdG9pcmUgZGUgcmVjaGVyY2hlIGlubm92YW50IGR1IFNhbmtvcmUgUmVzZWFyY2ggSW5zdGl0dXRlLiBcbiAgICBJbnNwaXLDqSBwYXIgbGEgcsOpc2lsaWVuY2UgZXQgbGEgY3JvaXNzYW5jZSByYXBpZGUgZHUgYmFtYm91LCBub3VzIGluY2Fybm9ucyBsYSBmb3JjZSwgbGEgZmxleGliaWxpdMOpIFxuICAgIGV0IGwnZW5nYWdlbWVudCBlbnZlcnMgbCdpbm5vdmF0aW9uIGR1cmFibGUuIE5vdHJlIGxhYm9yYXRvaXJlIHNlIGNvbmNlbnRyZSBzdXIgdHJvaXMgZG9tYWluZXMgcHJpbmNpcGF1eCA6XG4gICAgbCdJbnRlbGxpZ2VuY2UgQXJ0aWZpY2llbGxlLCBsJ0ludGVyZmFjZSBIb21tZS1NYWNoaW5lLCBldCBsJ0lDVDREZXYgKFRlY2hub2xvZ2llcyBkZSBsJ0luZm9ybWF0aW9uIGV0IFxuICAgIGRlIGxhIENvbW11bmljYXRpb24gcG91ciBsZSBEw6l2ZWxvcHBlbWVudCkuYCxcbiAgICBhdXRob3I6IFwiRHIuIEFib3VsIEhhc3NhbmUgQ0lTU0VcIixcbiAgICByb2xlOiBcIkRpcmVjdGV1ciBkZSBCYW1ib29MYWJcIlxuICB9LFxuICBcIsOAIFByb3Bvc1wiOiB7XG4gICAgdGl0bGU6IFwiTm90cmUgVmlzaW9uXCIsXG4gICAgY29udGVudDogYEJhbWJvb0xhYiBhc3BpcmUgw6AgZGV2ZW5pciB1biBjZW50cmUgZCdleGNlbGxlbmNlIGVuIHJlY2hlcmNoZSB0ZWNobm9sb2dpcXVlIGVuIEFmcmlxdWUuIFxuICAgIE5vdXMgY3JveW9ucyBlbiBsYSBwdWlzc2FuY2UgZGUgbCdpbm5vdmF0aW9uIHBvdXIgdHJhbnNmb3JtZXIgbGEgc29jacOpdMOpIGV0IHLDqXNvdWRyZSBsZXMgZMOpZmlzIFxuICAgIGR1IGTDqXZlbG9wcGVtZW50IGR1cmFibGUuIE5vdHJlIGFwcHJvY2hlIGNvbWJpbmUgZXhwZXJ0aXNlIHRlY2huaXF1ZSwgZW5nYWdlbWVudCBzb2NpYWwgZXQgXG4gICAgY29sbGFib3JhdGlvbiBpbnRlcm5hdGlvbmFsZSBwb3VyIGNyw6llciB1biBpbXBhY3QgZHVyYWJsZS5gLFxuICAgIGF1dGhvcjogXCLDiXF1aXBlIGRlIERpcmVjdGlvblwiLFxuICAgIHJvbGU6IFwiQmFtYm9vTGFiXCJcbiAgfSxcbiAgXCJOb3RyZSDDiXF1aXBlXCI6IHtcbiAgICB0aXRsZTogXCJVbmUgw4lxdWlwZSBQYXNzaW9ubsOpZVwiLFxuICAgIGNvbnRlbnQ6IGBOb3RyZSDDqXF1aXBlIGRpdmVyc2lmacOpZSByw6l1bml0IGRlcyBjaGVyY2hldXJzLCBkZXMgw6l0dWRpYW50cyBldCBkZXMgcHJvZmVzc2lvbm5lbHMgXG4gICAgcGFydGFnZWFudCB1bmUgcGFzc2lvbiBwb3VyIGwnaW5ub3ZhdGlvbiB0ZWNobm9sb2dpcXVlLiBDaGFxdWUgbWVtYnJlIGFwcG9ydGUgdW5lIGV4cGVydGlzZSB1bmlxdWUsIFxuICAgIGNyw6lhbnQgdW4gZW52aXJvbm5lbWVudCBkeW5hbWlxdWUgcHJvcGljZSDDoCBsYSBjcsOpYXRpdml0w6kgZXQgw6AgbCdleGNlbGxlbmNlIGVuIHJlY2hlcmNoZS5gLFxuICAgIGF1dGhvcjogXCJTZXJ2aWNlIFJIXCIsXG4gICAgcm9sZTogXCJHZXN0aW9uIGRlcyBUYWxlbnRzXCJcbiAgfSxcbiAgXCJQcm9qZXRzXCI6IHtcbiAgICB0aXRsZTogXCJOb3MgSW5ub3ZhdGlvbnNcIixcbiAgICBjb250ZW50OiBgRMOpY291dnJleiBub3MgcHJvamV0cyBwaGFyZXMgZW4gSUEsIEludGVyZmFjZSBIb21tZS1NYWNoaW5lIGV0IElDVDREZXYuIFxuICAgIENoYXF1ZSBwcm9qZXQgdmlzZSDDoCBhcHBvcnRlciBkZXMgc29sdXRpb25zIGNvbmNyw6h0ZXMgYXV4IGTDqWZpcyBzb2Npw6l0YXV4LCBcbiAgICBlbiBtZXR0YW50IGwnYWNjZW50IHN1ciBsJ8OpZHVjYXRpb24sIGxhIHNhbnTDqSBldCBsZSBkw6l2ZWxvcHBlbWVudCBkdXJhYmxlLmAsXG4gICAgYXV0aG9yOiBcIsOJcXVpcGUgUHJvamV0c1wiLFxuICAgIHJvbGU6IFwiQ29vcmRpbmF0aW9uIFImRFwiXG4gIH0sXG4gIFwiw4l2w6luZW1lbnRzXCI6IHtcbiAgICB0aXRsZTogXCJOb3MgQWN0aXZpdMOpc1wiLFxuICAgIGNvbnRlbnQ6IGBCYW1ib29MYWIgb3JnYW5pc2UgcsOpZ3VsacOocmVtZW50IGRlcyDDqXbDqW5lbWVudHMsIGRlcyBhdGVsaWVycyBldCBkZXMgc8OpbWluYWlyZXMgXG4gICAgcG91ciBwYXJ0YWdlciBub3MgY29ubmFpc3NhbmNlcyBldCBjcsOpZXIgZGVzIG9wcG9ydHVuaXTDqXMgZGUgbmV0d29ya2luZy4gUmVqb2lnbmV6LW5vdXMgXG4gICAgcG91ciBkw6ljb3V2cmlyIGxlcyBkZXJuacOocmVzIGlubm92YXRpb25zIGV0IHJlbmNvbnRyZXIgZGVzIGV4cGVydHMgcGFzc2lvbm7DqXMuYCxcbiAgICBhdXRob3I6IFwiw4lxdWlwZSDDiXbDqW5lbWVudGllbGxlXCIsXG4gICAgcm9sZTogXCJPcmdhbmlzYXRpb24gJiBDb21tdW5pY2F0aW9uXCJcbiAgfSxcbiAgXCJSZWpvaW5kcmVcIjoge1xuICAgIHRpdGxlOiBcIlJlam9pZ25leiBsJ0lubm92YXRpb25cIixcbiAgICBjb250ZW50OiBgTm91cyByZWNoZXJjaG9ucyBjb25zdGFtbWVudCBkZXMgdGFsZW50cyBwYXNzaW9ubsOpcyBwYXIgbGEgdGVjaG5vbG9naWUgZXQgbCdpbm5vdmF0aW9uLiBcbiAgICBRdWUgdm91cyBzb3lleiDDqXR1ZGlhbnQsIGNoZXJjaGV1ciBvdSBwcm9mZXNzaW9ubmVsLCBCYW1ib29MYWIgdm91cyBvZmZyZSBsJ29wcG9ydHVuaXTDqSBkZSBcbiAgICBwYXJ0aWNpcGVyIMOgIGRlcyBwcm9qZXRzIGlubm92YW50cyBldCBkZSBkw6l2ZWxvcHBlciB2b3MgY29tcMOpdGVuY2VzLmAsXG4gICAgYXV0aG9yOiBcIlJlY3J1dGVtZW50XCIsXG4gICAgcm9sZTogXCJEw6l2ZWxvcHBlbWVudCBkZXMgVGFsZW50c1wiXG4gIH0sXG4gIFwiUGFydGVuYXJpYXRzXCI6IHtcbiAgICB0aXRsZTogXCJDb2xsYWJvcm9uc1wiLFxuICAgIGNvbnRlbnQ6IGBCYW1ib29MYWIgZMOpdmVsb3BwZSBkZXMgcGFydGVuYXJpYXRzIHN0cmF0w6lnaXF1ZXMgYXZlYyBkZXMgdW5pdmVyc2l0w6lzLCBkZXMgZW50cmVwcmlzZXMgXG4gICAgZXQgZGVzIG9yZ2FuaXNhdGlvbnMgaW50ZXJuYXRpb25hbGVzLiBFbnNlbWJsZSwgbm91cyBjcsOpb25zIHVuIMOpY29zeXN0w6htZSBkJ2lubm92YXRpb24gcm9idXN0ZSBcbiAgICBwb3VyIHVuIGltcGFjdCBtYXhpbWFsIHN1ciBsYSBzb2Npw6l0w6kuYCxcbiAgICBhdXRob3I6IFwiUmVsYXRpb25zIFBhcnRlbmFpcmVzXCIsXG4gICAgcm9sZTogXCJEw6l2ZWxvcHBlbWVudCBTdHJhdMOpZ2lxdWVcIlxuICB9LFxuICBcIkNvbnRhY3RcIjoge1xuICAgIHRpdGxlOiBcIkNvbnRhY3Rlei1ub3VzXCIsXG4gICAgY29udGVudDogYFZvdXMgc291aGFpdGV6IGVuIHNhdm9pciBwbHVzIHN1ciBCYW1ib29MYWIgb3UgZXhwbG9yZXIgZGVzIG9wcG9ydHVuaXTDqXMgZGUgY29sbGFib3JhdGlvbiA/IFxuICAgIE5vdHJlIMOpcXVpcGUgZXN0IMOgIHZvdHJlIMOpY291dGUuIENvbnRhY3Rlei1ub3VzIHBvdXIgZGlzY3V0ZXIgZGUgdm9zIGlkw6llcyBldCBkw6ljb3V2cmlyIGNvbW1lbnQgXG4gICAgbm91cyBwb3V2b25zIHRyYXZhaWxsZXIgZW5zZW1ibGUuYCxcbiAgICBhdXRob3I6IFwiU2VydmljZSBDb21tdW5pY2F0aW9uXCIsXG4gICAgcm9sZTogXCJSZWxhdGlvbnMgRXh0ZXJuZXNcIlxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDb250ZW50U2xpZGUoeyB0aXRsZSwgb25DbG9zZSB9OiB7IHRpdGxlOiBzdHJpbmc7IG9uQ2xvc2U6ICgpID0+IHZvaWQgfSkge1xuICBjb25zdCBkYXRhID0gY29udGVudERhdGFbdGl0bGUgYXMga2V5b2YgdHlwZW9mIGNvbnRlbnREYXRhXSB8fCB7XG4gICAgdGl0bGU6IHRpdGxlLFxuICAgIGNvbnRlbnQ6IFwiQ29udGVudSBlbiBjb3VycyBkZSBkw6l2ZWxvcHBlbWVudFwiLFxuICAgIGF1dGhvcjogXCJCYW1ib29MYWJcIixcbiAgICByb2xlOiBcIklubm92YXRpb24gJiBSZWNoZXJjaGVcIlxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdlxuICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgbGVmdC0wIHRvcC0wIGgtc2NyZWVuIHctc2NyZWVuIGJnLWJsYWNrXCJcbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbiAgICA+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGgtZnVsbCBmbGV4LWNvbCBwLTQgc206cC04IG1kOnAtMTJcIlxuICAgICAgICBpbml0aWFsPXt7IHk6ICcxMDAlJyB9fVxuICAgICAgICBhbmltYXRlPXt7IHk6IDAgfX1cbiAgICAgICAgdHJhbnNpdGlvbj17eyB0eXBlOiAnc3ByaW5nJywgZGFtcGluZzogMzAsIHN0aWZmbmVzczogMzAwIH19XG4gICAgICA+XG4gICAgICAgIDxtb3Rpb24uaDJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi00IHRleHQtNHhsIHNtOnRleHQtNXhsIG1kOnRleHQtNnhsIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICB2YXJpYW50cz17dGl0bGVWYXJpYW50c31cbiAgICAgICAgICBpbml0aWFsPVwiaW5pdGlhbFwiXG4gICAgICAgICAgYW5pbWF0ZT1cImFuaW1hdGVcIlxuICAgICAgICA+XG4gICAgICAgICAge2RhdGEudGl0bGV9XG4gICAgICAgIDwvbW90aW9uLmgyPlxuICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTggaC0wLjUgdy1mdWxsIGJnLWdyZWVuLTUwMFwiXG4gICAgICAgICAgaW5pdGlhbD17eyBzY2FsZVg6IDAgfX1cbiAgICAgICAgICBhbmltYXRlPXt7IHNjYWxlWDogMSB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDEsIGR1cmF0aW9uOiAwLjUgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4LTFcIlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDEuNSwgZHVyYXRpb246IDAuNSB9fVxuICAgICAgICA+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNiB0ZXh0LWxnIHNtOnRleHQteGwgbWQ6dGV4dC0yeGwgdGV4dC13aGl0ZSB3aGl0ZXNwYWNlLXByZS1saW5lXCI+XG4gICAgICAgICAgICB7ZGF0YS5jb250ZW50fVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPVwiL3BsYWNlaG9sZGVyLnN2Zz9oZWlnaHQ9NjQmd2lkdGg9NjRcIlxuICAgICAgICAgICAgICBhbHQ9XCJQcm9maWxlXCJcbiAgICAgICAgICAgICAgd2lkdGg9ezY0fVxuICAgICAgICAgICAgICBoZWlnaHQ9ezY0fVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci00IHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIHNtOnRleHQtbGcgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlXCI+e2RhdGEuYXV0aG9yfTwvcD5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBzbTp0ZXh0LWJhc2UgdGV4dC1ncmF5LTMwMFwiPntkYXRhLnJvbGV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtNCB0b3AtNCBzbTpyaWdodC04IHNtOnRvcC04IHJvdW5kZWQtZnVsbCBiZy13aGl0ZS8xMCBwLTIgdGV4dC13aGl0ZSBiYWNrZHJvcC1ibHVyLW1kXCJcbiAgICAgICAgb25DbGljaz17b25DbG9zZX1cbiAgICAgID5cbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC02IHctNlwiIGZpbGw9XCJub25lXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiPlxuICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD17Mn0gZD1cIk02IDE4TDE4IDZNNiA2bDEyIDEyXCIgLz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L21vdGlvbi5kaXY+XG4gIClcbn1cblxuIl0sIm5hbWVzIjpbIm1vdGlvbiIsIkltYWdlIiwidGl0bGVWYXJpYW50cyIsImluaXRpYWwiLCJ5Iiwic2NhbGUiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInRpbWVzIiwiY29udGVudERhdGEiLCJ0aXRsZSIsImNvbnRlbnQiLCJhdXRob3IiLCJyb2xlIiwiQ29udGVudFNsaWRlIiwib25DbG9zZSIsImRhdGEiLCJkaXYiLCJjbGFzc05hbWUiLCJleGl0IiwidHlwZSIsImRhbXBpbmciLCJzdGlmZm5lc3MiLCJoMiIsInZhcmlhbnRzIiwic2NhbGVYIiwiZGVsYXkiLCJwIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJidXR0b24iLCJvbkNsaWNrIiwic3ZnIiwieG1sbnMiLCJmaWxsIiwidmlld0JveCIsInN0cm9rZSIsInBhdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJzdHJva2VXaWR0aCIsImQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/content-slide.tsx\n"));

/***/ })

});