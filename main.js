(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kino6052\Documents\Repos\mediawiki-test\storybooks\angular\aeroaquaponic\src\main.ts */"zUnb");


/***/ }),

/***/ "0oYm":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _general_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../general.service */ "j8bs");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function MenuComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_div_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const item_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onClickHandler(item_r1.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.text);
} }
class MenuComponent {
    constructor(generalService) {
        this.generalService = generalService;
        this.items = [];
        this.onClickHandler = (id) => {
            this.generalService.scrollToId(id);
        };
        this.color = 'black';
    }
    ngOnInit() { }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_general_service__WEBPACK_IMPORTED_MODULE_1__["GeneralService"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["aeroaquaponic-menu"]], inputs: { items: "items", onClickHandler: "onClickHandler", color: "color" }, decls: 4, vars: 1, consts: [[1, "container"], [1, "filler"], [1, "navbar"], [4, "ngFor", "ngForOf"], [3, "click"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MenuComponent_div_3_Template, 3, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   .filler[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.container[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 6.05vw;\n  align-items: center;\n  justify-content: center;\n}\n.container[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-family: spartan, sans-serif;\n  width: 12.5vw;\n  height: 6vw;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n}\n.container[_ngcontent-%COMP%]   .navbar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 1.75vw;\n  line-height: 1.75vw;\n}\n.white[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n}\n.white[_ngcontent-%COMP%]:hover {\n  -webkit-text-decoration: underline 3px solid white;\n          text-decoration: underline 3px solid white;\n}\n.black[_ngcontent-%COMP%] {\n  color: black;\n  text-decoration: none;\n}\n.black[_ngcontent-%COMP%]:hover {\n  -webkit-text-decoration: underline 3px solid black;\n          text-decoration: underline 3px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUNGO0FBQUU7RUFDRSxPQUFBO0FBRUo7QUFBRTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFFSjtBQURJO0VBS0UsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsT0FBQTtBQUROO0FBVE07RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBV1I7QUFFQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBQUNGO0FBQUU7RUFDRSxrREFBQTtVQUFBLDBDQUFBO0FBRUo7QUFFQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtBQUNGO0FBQUU7RUFDRSxrREFBQTtVQUFBLDBDQUFBO0FBRUoiLCJmaWxlIjoibWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gICYgLmZpbGxlciB7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuICAmIC5uYXZiYXIge1xyXG4gICAgZmxleDogMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYuMDV2dztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICYgZGl2IHtcclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjc1dnc7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzV2dztcclxuICAgICAgfVxyXG4gICAgICBmb250LWZhbWlseTogc3BhcnRhbiwgc2Fucy1zZXJpZjtcclxuICAgICAgd2lkdGg6IDEyLjV2dztcclxuICAgICAgaGVpZ2h0OiA2dnc7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLndoaXRlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgM3B4IHNvbGlkIHdoaXRlO1xyXG4gIH1cclxufVxyXG5cclxuLmJsYWNrIHtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICY6aG92ZXIge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgM3B4IHNvbGlkIGJsYWNrO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aeroaquaponic-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss'],
            }]
    }], function () { return [{ type: _general_service__WEBPACK_IMPORTED_MODULE_1__["GeneralService"] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onClickHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "1Ger":
/*!**************************************************************!*\
  !*** ./src/app/composites/sections/about/about.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutComponent, data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/section/section.component */ "Rtmn");
/* harmony import */ var _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/heading/heading.component */ "7ldv");
/* harmony import */ var _components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/spacer/spacer.component */ "vrXP");
/* harmony import */ var _components_typography_typography_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/typography/typography.component */ "QhSr");
/* harmony import */ var _profile_card_container_profile_card_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../profile-card-container/profile-card-container.component */ "bd0T");
/* harmony import */ var _social_social_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../social/social.component */ "O0zL");








class AboutComponent {
    constructor() {
        this.title = data.title;
        this.subtitle = data.subtitle;
        this.text = data.text;
        this.profiles = data.profiles;
    }
    ngOnInit() { }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["aeroaquaponic-about"]], inputs: { title: "title", subtitle: "subtitle", text: "text", profiles: "profiles" }, decls: 10, vars: 4, consts: [["id", "about"], [3, "title", "subtitle"], ["height", "4"], [3, "profiles"], ["height", "8"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aeroaquaponic-section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aeroaquaponic-heading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aeroaquaponic-spacer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "aeroaquaponic-typography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aeroaquaponic-spacer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "aeroaquaponic-profile-card-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aeroaquaponic-spacer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "aeroaquaponic-social");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "aeroaquaponic-spacer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("title", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("subtitle", ctx.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("profiles", ctx.profiles);
    } }, directives: [_components_section_section_component__WEBPACK_IMPORTED_MODULE_1__["SectionComponent"], _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_2__["HeadingComponent"], _components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_3__["SpacerComponent"], _components_typography_typography_component__WEBPACK_IMPORTED_MODULE_4__["TypographyComponent"], _profile_card_container_profile_card_container_component__WEBPACK_IMPORTED_MODULE_5__["ProfileCardContainerComponent"], _social_social_component__WEBPACK_IMPORTED_MODULE_6__["SocialComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aeroaquaponic-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss'],
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], profiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const data = {
    title: 'About Us',
    subtitle: 'Our Team',
    text: `We are a non-profit organization of scientists and engineers who want to bring a change to the world. Our goal is to provide tools to achieve the goal of self-sufficiency. This great feat will not be possible without you. Only together can we achieve this.`,
    profiles: [
        {
            name: 'Cam Schubert',
            description: 'Director of Community Development',
            imageUrl: 'https://aeroaquaponic.org/images/cam.jpg',
            link: 'https://aeroaquaponic.fandom.com/wiki/Cam_Schubert_-_Director_of_Community_Development',
        },
        {
            name: 'Kirill Novik',
            description: 'Director of Research and Development',
            imageUrl: 'https://aeroaquaponic.org/images/kirill.jpg',
            link: 'https://aeroaquaponic.fandom.com/wiki/Kirill_Novik_-_Research_and_Development_Director',
        },
        {
            name: 'Dmitry Dementyev',
            description: 'Senior Researcher in Aquaculture',
            imageUrl: 'https://aeroaquaponic.org/images/dima.png',
            link: 'https://aeroaquaponic.fandom.com/wiki/Dmitry_Dementyev_-_Director_of_Research',
        },
        {
            name: 'Darrah Herman',
            description: 'Director of Ecosystem Balance',
            imageUrl: 'https://aeroaquaponic.org/images/darrah.jpeg',
            link: 'https://aeroaquaponic.fandom.com/wiki/Darrah_Herman_-_Director_of_Ecosystem_Balance',
        },
        {
            name: 'Jameson Owens',
            description: 'Director of Community Outreach',
            imageUrl: 'https://aeroaquaponic.org/images/jameson.jpeg',
            link: 'https://aeroaquaponic.fandom.com/wiki/Jameson_Owens_-_Director_of_Community_Outreach',
        },
        {
            name: 'Nikita Novik',
            description: 'Creative Director',
            imageUrl: 'https://aeroaquaponic.org/images/nikita.jpeg',
            link: 'https://aeroaquaponic.fandom.com/wiki/Nikita_Novik_-_Creative_Director',
        },
    ],
};


/***/ }),

/***/ "6awA":
/*!********************************************************************!*\
  !*** ./src/app/composites/sections/projects/projects.component.ts ***!
  \********************************************************************/
/*! exports provided: ProjectsComponent, data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/section/section.component */ "Rtmn");
/* harmony import */ var _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/heading/heading.component */ "7ldv");
/* harmony import */ var _components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/spacer/spacer.component */ "vrXP");
/* harmony import */ var _components_typography_typography_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/typography/typography.component */ "QhSr");
/* harmony import */ var _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/timeline/timeline.component */ "LsEZ");







class ProjectsComponent {
    constructor() {
        this.title = data.title;
        this.subtitle = data.subtitle;
        this.text = data.text;
        this.items = data.items;
    }
    ngOnInit() { }
}
ProjectsComponent.ɵfac = function ProjectsComponent_Factory(t) { return new (t || ProjectsComponent)(); };
ProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsComponent, selectors: [["aeroaquaponic-projects"]], inputs: { title: "title", subtitle: "subtitle", text: "text", items: "items" }, decls: 8, vars: 4, consts: [["id", "projects"], [3, "title", "subtitle"], ["height", "4"], [3, "items"], ["height", "8"]], template: function ProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aeroaquaponic-section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aeroaquaponic-heading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aeroaquaponic-spacer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "aeroaquaponic-typography");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aeroaquaponic-spacer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "aeroaquaponic-timeline", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aeroaquaponic-spacer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("subtitle", ctx.subtitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items);
    } }, directives: [_components_section_section_component__WEBPACK_IMPORTED_MODULE_1__["SectionComponent"], _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_2__["HeadingComponent"], _components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_3__["SpacerComponent"], _components_typography_typography_component__WEBPACK_IMPORTED_MODULE_4__["TypographyComponent"], _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_5__["TimelineComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aeroaquaponic-projects',
                templateUrl: './projects.component.html',
                styleUrls: ['./projects.component.scss'],
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const data = {
    title: 'Projects',
    subtitle: "Let's make this happen!",
    text: `At Aeroaquaponic, we believe that the solution that will change the dead-end
  direction of modern society lies in sustainability. However, not the
  sustainability that comes from the industry, but the one that comes from the
  eco-communities. We believe that communities that are capable of producing
  most and, ideally, all of their food and being self-sufficient are the
  answer. It is a countermeasure to consumerism which is the driving force
  behind unsustainable resource utilization.`,
    items: [
        {
            title: 'Groundwork',
            description: 'We will need to gather information about what is out there already in order to find best candidates for collaboration.',
            link: 'https://aeroaquaponic.fandom.com/wiki/Self-sufficiency_Research',
            linkText: 'Learn more',
        },
        {
            title: 'Unit of Self-Sufficiency',
            description: 'We will work together on the proof-of-concept of Unit of Self-Sufficiency.',
            link: 'https://aeroaquaponic.fandom.com/wiki/Unit_of_Self-sufficiency_Proof_of_Concept',
            linkText: 'Learn more',
        },
        {
            title: 'Self-sufficiency Guide',
            description: 'Once the other two objectives are complete we would like to let the world know how to achieve this goal.',
            link: 'https://aeroaquaponic.fandom.com/wiki/Aeroaquaponic_Informational_Infrastructure',
            linkText: 'Learn more',
        },
    ],
};


/***/ }),

/***/ "7ldv":
/*!*********************************************************!*\
  !*** ./src/app/components/heading/heading.component.ts ***!
  \*********************************************************/
/*! exports provided: HeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingComponent", function() { return HeadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _spacer_spacer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spacer/spacer.component */ "vrXP");



class HeadingComponent {
    constructor() {
        this.title = '';
        this.subtitle = '';
        this.version = 'black';
    }
    ngOnInit() { }
}
HeadingComponent.ɵfac = function HeadingComponent_Factory(t) { return new (t || HeadingComponent)(); };
HeadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeadingComponent, selectors: [["aeroaquaponic-heading"]], inputs: { title: "title", subtitle: "subtitle", version: "version" }, decls: 6, vars: 3, consts: [[3, "className"], ["height", "1"]], template: function HeadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aeroaquaponic-spacer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("className", "container " + ctx.version);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.subtitle);
    } }, directives: [_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_1__["SpacerComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-size: 6.25vw;\n  line-height: 6.25vw;\n  font-family: spartan, sans-serif;\n  text-align: center;\n  width: 100%;\n}\n.container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-size: 2.34vw;\n  line-height: 2.34vw;\n  font-family: spartan;\n  font-weight: 400;\n  text-align: center;\n  width: 100%;\n}\n.container.black[_ngcontent-%COMP%] {\n  color: black;\n}\n.container.white[_ngcontent-%COMP%] {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUVKO0FBQUU7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBRUo7QUFBRTtFQUNFLFlBQUE7QUFFSjtBQUFFO0VBQ0UsWUFBQTtBQUVKIiwiZmlsZSI6ImhlYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAmIGgxIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDYuMjV2dztcclxuICAgIGxpbmUtaGVpZ2h0OiA2LjI1dnc7XHJcbiAgICBmb250LWZhbWlseTogc3BhcnRhbiwgc2Fucy1zZXJpZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAmIGgyIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDIuMzR2dztcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjM0dnc7XHJcbiAgICBmb250LWZhbWlseTogc3BhcnRhbjtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgJi5ibGFjayB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gICYud2hpdGUge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aeroaquaponic-heading',
                templateUrl: './heading.component.html',
                styleUrls: ['./heading.component.scss'],
            }]
    }], function () { return []; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], version: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "7psr":
/*!*******************************************************!*\
  !*** ./src/app/components/button/button.component.ts ***!
  \*******************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function ButtonComponent_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.iconLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { "background-color": a0 }; };
class ButtonComponent {
    constructor() {
        /**
         * Is this the principal call to action on the page?
         */
        this.primary = true;
        /**
         * How large should the button be?
         */
        this.size = 'medium';
        /**
         * Button contents
         *
         * @required
         */
        this.label = 'Button';
        this.iconLink = '';
        /**
         * Optional click handler
         */
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get classes() {
        const mode = this.primary
            ? 'storybook-button--primary'
            : 'storybook-button--secondary';
        return ['storybook-button', `storybook-button--${this.size}`, mode];
    }
}
ButtonComponent.ɵfac = function ButtonComponent_Factory(t) { return new (t || ButtonComponent)(); };
ButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ButtonComponent, selectors: [["aeroaquaponic-button"]], inputs: { primary: "primary", backgroundColor: "backgroundColor", size: "size", label: "label", iconLink: "iconLink" }, outputs: { onClick: "onClick" }, decls: 4, vars: 6, consts: [[1, "container"], ["type", "button", 3, "ngClass", "ngStyle", "click"], [3, "src", 4, "ngIf"], [3, "src"]], template: function ButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_1_listener($event) { return ctx.onClick.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ButtonComponent_img_2_Template, 1, 1, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classes)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.backgroundColor));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.iconLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.label, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  align-items: center;\n  justify-content: center;\n  \n}\n.container[_ngcontent-%COMP%]   .storybook-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 19.5vw;\n  height: 4.68vw;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  border: none;\n  margin: 0 4px;\n  font-size: 1.75vw;\n  line-height: 1.75vw;\n  font-weight: 400;\n  font-family: \"Work Sans\";\n  transition: 0.1s;\n}\n.container[_ngcontent-%COMP%]   .storybook-button[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   .storybook-button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: flex;\n  height: 2.6vw;\n  width: 2.6vw;\n  margin-right: 1.5vw;\n}\n.container[_ngcontent-%COMP%]   .storybook-button--primary[_ngcontent-%COMP%] {\n  background: #51ac2b;\n  color: white;\n}\n.container[_ngcontent-%COMP%]   .storybook-button--secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxidXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFrQ0E7Ozs7Ozs7Ozs7O0tBQUE7QUFyQkY7QUFaRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQWNKO0FBYkk7RUFDRSxzQkFBQTtFQUNBLGVBQUE7QUFlTjtBQWJJO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFlTjtBQVpFO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0FBY0o7QUFaRTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQWNKIiwiZmlsZSI6ImJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAuc3Rvcnlib29rLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDE5LjV2dztcclxuICAgIGhlaWdodDogNC42OHZ3O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBtYXJnaW46IDAgNHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjc1dnc7XHJcbiAgICBsaW5lLWhlaWdodDogMS43NXZ3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiO1xyXG4gICAgdHJhbnNpdGlvbjogMC4xcztcclxuICAgICY6aG92ZXIge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBoZWlnaHQ6IDIuNnZ3O1xyXG4gICAgICB3aWR0aDogMi42dnc7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMS41dnc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zdG9yeWJvb2stYnV0dG9uLS1wcmltYXJ5IHtcclxuICAgIGJhY2tncm91bmQ6ICM1MWFjMmI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5zdG9yeWJvb2stYnV0dG9uLS1zZWNvbmRhcnkge1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIC8qIC5zdG9yeWJvb2stYnV0dG9uLS1zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbiAgfVxyXG4gIC5zdG9yeWJvb2stYnV0dG9uLS1tZWRpdW0ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMTFweCAyMHB4O1xyXG4gIH1cclxuICAuc3Rvcnlib29rLWJ1dHRvbi0tbGFyZ2Uge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMTJweCAyNHB4O1xyXG4gIH0gKi9cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aeroaquaponic-button',
                templateUrl: './button.component.html',
                styleUrls: ['./button.component.scss'],
            }]
    }], null, { primary: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], backgroundColor: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], iconLink: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ALQe":
/*!****************************************************************!*\
  !*** ./src/app/composites/sections/donate/donate.component.ts ***!
  \****************************************************************/
/*! exports provided: DonateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateComponent", function() { return DonateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/section/section.component */ "Rtmn");
/* harmony import */ var _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/heading/heading.component */ "7ldv");
/* harmony import */ var _components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/spacer/spacer.component */ "vrXP");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/button/button.component */ "7psr");






class DonateComponent {
    constructor() {
        this.onClickHandler = (e) => {
            const a = document.createElement('a');
            a.setAttribute('target', '_blank');
            a.setAttribute('href', 'https://ko-fi.com/aeroaquaponic');
            a.click();
        };
    }
    ngOnInit() { }
}
DonateComponent.ɵfac = function DonateComponent_Factory(t) { return new (t || DonateComponent)(); };
DonateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DonateComponent, selectors: [["aeroaquaponic-donate"]], inputs: { onClickHandler: "onClickHandler" }, decls: 5, vars: 2, consts: [["id", "support"], ["title", "Support Us", "subtitle", "Make Your Contribution!"], ["height", "4"], ["label", "Buy Us Coffee", 3, "primary", "iconLink", "onClick"], ["height", "8"]], template: function DonateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aeroaquaponic-section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aeroaquaponic-heading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aeroaquaponic-spacer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "aeroaquaponic-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function DonateComponent_Template_aeroaquaponic_button_onClick_3_listener($event) { return ctx.onClickHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "aeroaquaponic-spacer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("primary", false)("iconLink", "https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/5c91bddac6c3aa6b3718fd86_kofisvglofo.svg");
    } }, directives: [_components_section_section_component__WEBPACK_IMPORTED_MODULE_1__["SectionComponent"], _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_2__["HeadingComponent"], _components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_3__["SpacerComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb25hdGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DonateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aeroaquaponic-donate',
                templateUrl: './donate.component.html',
                styleUrls: ['./donate.component.scss'],
            }]
    }], function () { return []; }, { onClickHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DsDN":
/*!************************************************************!*\
  !*** ./src/app/composites/sections/main/main.component.ts ***!
  \************************************************************/
/*! exports provided: MainComponent, MainSectionData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainSectionData", function() { return MainSectionData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_general_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/general.service */ "j8bs");
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/section/section.component */ "Rtmn");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/menu/menu.component */ "0oYm");
/* harmony import */ var _components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/spacer/spacer.component */ "vrXP");
/* harmony import */ var _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/heading/heading.component */ "7ldv");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/button/button.component */ "7psr");








class MainComponent {
    constructor(generalService) {
        this.generalService = generalService;
        this.title = MainSectionData.title;
        this.subtitle = MainSectionData.subtitle;
        this.items = MainSectionData.items;
        this.onClickHandler = (id) => {
            this.generalService.scrollToId(id);
        };
    }
    ngOnInit() { }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_general_service__WEBPACK_IMPORTED_MODULE_1__["GeneralService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["aeroaquaponic-main"]], inputs: { title: "title", subtitle: "subtitle", items: "items", onClickHandler: "onClickHandler" }, decls: 8, vars: 6, consts: [["id", "grass", "src", "https://aeroaquaponic.org/images/grass-fb.png"], ["id", "diagonals", "src", "https://aeroaquaponic.org/images/Diagonals.svg"], [3, "items", "color"], ["height", "20"], [3, "title", "subtitle", "version"], ["height", "4"], [3, "label", "click"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aeroaquaponic-section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aeroaquaponic-menu", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "aeroaquaponic-spacer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aeroaquaponic-heading", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "aeroaquaponic-spacer", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "aeroaquaponic-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainComponent_Template_aeroaquaponic_button_click_7_listener() { return ctx.onClickHandler("#cards"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items)("color", "white");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("subtitle", ctx.subtitle)("version", "white");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Learn More");
    } }, directives: [_components_section_section_component__WEBPACK_IMPORTED_MODULE_2__["SectionComponent"], _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_3__["MenuComponent"], _components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_4__["SpacerComponent"], _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_5__["HeadingComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_6__["ButtonComponent"]], styles: ["[_nghost-%COMP%]     .section {\n  height: 50vw;\n  overflow-y: visible;\n}\n\nimg[_ngcontent-%COMP%] {\n  display: flex;\n  position: absolute;\n  width: 100%;\n}\n\n#grass[_ngcontent-%COMP%] {\n  z-index: -2;\n}\n\n#diagonals[_ngcontent-%COMP%] {\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUFBO0VBQ0UsV0FBQTtBQUdGOztBQURBO0VBQ0UsV0FBQTtBQUlGIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLnNlY3Rpb24ge1xyXG4gIGhlaWdodDogNTB2dztcclxuICBvdmVyZmxvdy15OiB2aXNpYmxlO1xyXG59XHJcbmltZyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI2dyYXNzIHtcclxuICB6LWluZGV4OiAtMjtcclxufVxyXG4jZGlhZ29uYWxzIHtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aeroaquaponic-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss'],
            }]
    }], function () { return [{ type: src_app_general_service__WEBPACK_IMPORTED_MODULE_1__["GeneralService"] }]; }, { title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], subtitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onClickHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const MainSectionData = {
    title: 'AEROAQUAPONIC',
    subtitle: 'Forming the Units of Self-sufficiency',
    items: [
        {
            text: 'Overview',
            link: '#overview',
        },
        {
            text: 'Projects',
            link: '#projects',
        },
        {
            text: 'Donate',
            link: '#support',
        },
        {
            text: 'About',
            link: '#about',
        },
    ],
};


/***/ }),

/***/ "G4NA":
/*!*****************************************************!*\
  !*** ./src/app/components/video/video.component.ts ***!
  \*****************************************************/
/*! exports provided: VideoComponent, VideoComponentData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponentData", function() { return VideoComponentData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");



let apiLoaded = false;
class VideoComponent {
    constructor() {
        this.onError = (e) => console.warn(e);
        this.handlePlayerReady = (event) => {
            const target = event.target;
            target === null || target === void 0 ? void 0 : target.mute();
            target === null || target === void 0 ? void 0 : target.playVideo();
        };
        this.handleStateChange = (event) => {
            // @ts-ignore
            const data = event.data;
            if (data !== 0)
                return;
            const target = event.target;
            target === null || target === void 0 ? void 0 : target.mute();
            target === null || target === void 0 ? void 0 : target.stopVideo();
            target === null || target === void 0 ? void 0 : target.playVideo();
        };
        this.videoId = VideoComponentData.videoId;
        this.getWidth = () => (window.innerWidth / 100) * 50;
        this.getHeight = () => (window.innerWidth / 100) * 28.2;
        this.width = this.getWidth();
        this.height = this.getHeight();
    }
    ngOnInit() {
        if (!apiLoaded) {
            console.warn(1);
            // This code loads the IFrame Player API code asynchronously, according to the instructions at
            // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';
            document.body.appendChild(tag);
            apiLoaded = true;
        }
        window.addEventListener('resize', () => {
            this.width = this.getWidth();
            this.height = this.getHeight();
        });
    }
}
VideoComponent.ɵfac = function VideoComponent_Factory(t) { return new (t || VideoComponent)(); };
VideoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VideoComponent, selectors: [["aeroaquaponic-video"]], inputs: { videoId: "videoId" }, decls: 2, vars: 3, consts: [[1, "video"], [1, "player", 3, "width", "height", "videoId", "ready", "stateChange"]], template: function VideoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "youtube-player", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ready", function VideoComponent_Template_youtube_player_ready_1_listener($event) { return ctx.handlePlayerReady($event); })("stateChange", function VideoComponent_Template_youtube_player_stateChange_1_listener($event) { return ctx.handleStateChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.width)("height", ctx.height)("videoId", ctx.videoId);
    } }, directives: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_1__["YouTubePlayer"]], styles: [".video[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  height: auto;\n  align-items: center;\n  justify-content: center;\n}\n.video[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%] {\n  box-shadow: 0px 0px 16px gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aWRlby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjtBQUFFO0VBQ0UsNkJBQUE7QUFFSiIsImZpbGUiOiJ2aWRlby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWRlbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAucGxheWVyIHtcclxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTZweCBncmF5O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: './video.component.html',
                styleUrls: ['./video.component.scss'],
                selector: 'aeroaquaponic-video',
            }]
    }], null, { videoId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const VideoComponentData = {
    videoId: 'jO_HwylS6gk',
};


/***/ }),

/***/ "LsEZ":
/*!***********************************************************!*\
  !*** ./src/app/components/timeline/timeline.component.ts ***!
  \***********************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function TimelineComponent_div_1_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.linkText);
} }
function TimelineComponent_div_1_a_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", item_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.linkText);
} }
function TimelineComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TimelineComponent_div_1_a_8_Template, 2, 2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TimelineComponent_div_1_a_19_Template, 2, 2, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.link);
} }
class TimelineComponent {
    constructor() {
        this.items = [];
    }
    ngOnInit() { }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(); };
TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["aeroaquaponic-timeline"]], inputs: { items: "items" }, decls: 2, vars: 1, consts: [[1, "timeline-container"], ["class", "timeline-item-container", 4, "ngFor", "ngForOf"], [1, "timeline-item-container"], [1, "left"], [1, "card"], [1, "timeline-item-content"], ["target", "_blank", 3, "href", 4, "ngIf"], [1, "bar"], [1, "line"], [1, "point"], [1, "right"], ["target", "_blank", 3, "href"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TimelineComponent_div_1_Template, 20, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".timeline-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-item-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-areas: \"left bar right\";\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-item-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  box-shadow: 0px 0px 1vw lightgrey;\n  width: 100%;\n  height: 100%;\n  flex-direction: column;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-item-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .timeline-item-content[_ngcontent-%COMP%] {\n  margin: 2vw;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-item-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .timeline-item-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.56vw;\n  line-height: 1.56vw;\n  font-family: spartan, sans-serif;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-item-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .timeline-item-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.18vw;\n  line-height: 1.56vw;\n  font-family: \"Work Sans\", sans-serif;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-item-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .timeline-item-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #51ac2b;\n  font-weight: bold;\n  font-size: 1.18vw;\n  line-height: 1.56vw;\n  font-family: \"Work Sans\", sans-serif;\n  text-decoration: none;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-item-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .timeline-item-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  -webkit-text-decoration: underline 3px solid #51ac2b;\n          text-decoration: underline 3px solid #51ac2b;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-item-container[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  grid-area: left;\n  align-self: end;\n  width: 30vw;\n  margin: 2vw;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-item-container[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  grid-area: right;\n  align-self: start;\n  width: 30vw;\n  margin: 2vw;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-item-container[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  grid-area: bar;\n  align-self: center;\n  width: 3vw;\n  height: 105%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-item-container[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: #51ac2b;\n  border-radius: 100vw;\n  height: 100%;\n  width: 0.5vw;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-item-container[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]   .point[_ngcontent-%COMP%] {\n  display: flex;\n  width: 2vw;\n  height: 2vw;\n  background: #51ac2b;\n  position: absolute;\n  border-radius: 10vw;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-item-container[_ngcontent-%COMP%]:nth-child(odd)   .right[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: none;\n}\n.timeline-container[_ngcontent-%COMP%]   .timeline-item-container[_ngcontent-%COMP%]:nth-child(even)   .left[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0aW1lbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQUU7RUFDRSxhQUFBO0VBQ0EscUNBQUE7QUFFSjtBQURJO0VBQ0UsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUdOO0FBRk07RUFDRSxXQUFBO0FBSVI7QUFIUTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQUtWO0FBSFE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7QUFLVjtBQUhRO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7QUFLVjtBQUpVO0VBQ0Usb0RBQUE7VUFBQSw0Q0FBQTtBQU1aO0FBREk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBR047QUFESTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUdOO0FBREk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBR047QUFGTTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBSVI7QUFIUTtFQUNFLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUtWO0FBRU07RUFDRSxhQUFBO0FBQVI7QUFNTTtFQUNFLGFBQUE7QUFKUiIsImZpbGUiOiJ0aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lbGluZS1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICAudGltZWxpbmUtaXRlbS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibGVmdCBiYXIgcmlnaHRcIjtcclxuICAgIC5jYXJkIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxdncgbGlnaHRncmV5O1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAmIC50aW1lbGluZS1pdGVtLWNvbnRlbnQge1xyXG4gICAgICAgIG1hcmdpbjogMnZ3O1xyXG4gICAgICAgICYgaDEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjU2dnc7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41NnZ3O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNwYXJ0YW4sIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYgcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMTh2dztcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU2dnc7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJiBhIHtcclxuICAgICAgICAgIGNvbG9yOiAjNTFhYzJiO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMTh2dztcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU2dnc7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAzcHggc29saWQgIzUxYWMyYjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5sZWZ0IHtcclxuICAgICAgZ3JpZC1hcmVhOiBsZWZ0O1xyXG4gICAgICBhbGlnbi1zZWxmOiBlbmQ7XHJcbiAgICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgICBtYXJnaW46IDJ2dztcclxuICAgIH1cclxuICAgIC5yaWdodCB7XHJcbiAgICAgIGdyaWQtYXJlYTogcmlnaHQ7XHJcbiAgICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG4gICAgICB3aWR0aDogMzB2dztcclxuICAgICAgbWFyZ2luOiAydnc7XHJcbiAgICB9XHJcbiAgICAuYmFyIHtcclxuICAgICAgZ3JpZC1hcmVhOiBiYXI7XHJcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDN2dztcclxuICAgICAgaGVpZ2h0OiAxMDUlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLmxpbmUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjNTFhYzJiO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMC41dnc7XHJcbiAgICAgICAgLnBvaW50IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB3aWR0aDogMnZ3O1xyXG4gICAgICAgICAgaGVpZ2h0OiAydnc7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTFhYzJiO1xyXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTB2dztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLnRpbWVsaW5lLWl0ZW0tY29udGFpbmVyOm50aC1jaGlsZChvZGQpIHtcclxuICAgIC5yaWdodCB7XHJcbiAgICAgIC5jYXJkIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50aW1lbGluZS1pdGVtLWNvbnRhaW5lcjpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgLmxlZnQge1xyXG4gICAgICAuY2FyZCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aeroaquaponic-timeline',
                templateUrl: './timeline.component.html',
                styleUrls: ['./timeline.component.scss'],
            }]
    }], function () { return []; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "O0zL":
/*!*******************************************************!*\
  !*** ./src/app/composites/social/social.component.ts ***!
  \*******************************************************/
/*! exports provided: SocialComponent, SocialComponentData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponent", function() { return SocialComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialComponentData", function() { return SocialComponentData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SocialComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", icon_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", icon_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class SocialComponent {
    constructor() {
        this.icons = SocialComponentData;
    }
    ngOnInit() { }
}
SocialComponent.ɵfac = function SocialComponent_Factory(t) { return new (t || SocialComponent)(); };
SocialComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialComponent, selectors: [["aeroaquaponic-social"]], inputs: { icons: "icons" }, decls: 2, vars: 1, consts: [[1, "container"], ["target", "_blank", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href"], [3, "src"]], template: function SocialComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SocialComponent_a_1_Template, 2, 2, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.icons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-direction: row;\n  height: 4.1vw;\n  width: 100%;\n  border-radius: 50vw;\n  background-size: cover;\n  background-position: center;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.17vw;\n}\n.container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  transition: 0.1s;\n  margin: 0 3vw;\n}\n.container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 100vw;\n  height: 4.1vw;\n  width: 4.1vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzb2NpYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBQ0Y7QUFBRTtFQUNFLGdCQUFBO0VBU0EsYUFBQTtBQU5KO0FBRkk7RUFDRSxxQkFBQTtBQUlOO0FBRkk7RUFDRSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBSU4iLCJmaWxlIjoic29jaWFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgaGVpZ2h0OiA0LjF2dztcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1MHZ3O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjE3dnc7XHJcbiAgYSB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMHZ3O1xyXG4gICAgICBoZWlnaHQ6IDQuMXZ3O1xyXG4gICAgICB3aWR0aDogNC4xdnc7XHJcbiAgICB9XHJcbiAgICBtYXJnaW46IDAgM3Z3O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aeroaquaponic-social',
                templateUrl: './social.component.html',
                styleUrls: ['./social.component.scss'],
            }]
    }], function () { return []; }, { icons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const SocialComponentData = [
    {
        link: 'https://www.youtube.com/channel/UCGes3ATrv3cOwRb39wo2iXQ',
        image: 'https://aeroaquaponic.org/images/youtube.png',
    },
    {
        link: 'https://www.facebook.com/aeroaquaponic2020',
        image: 'https://aeroaquaponic.org/images/facebook.png',
    },
    {
        link: 'https://twitter.com/aeroaquaponic',
        image: 'https://aeroaquaponic.org/images/twitter.png',
    },
    {
        link: 'https://www.instagram.com/aeroaquaponic/',
        image: 'https://aeroaquaponic.org/images/kickstarter.png',
    },
    {
        link: 'https://www.linkedin.com/company/aeroaquaponic',
        image: 'https://aeroaquaponic.org/images/linkedin.png',
    },
];


/***/ }),

/***/ "Q4H4":
/*!***************************************!*\
  !*** ./src/app/video/video.module.ts ***!
  \***************************************/
/*! exports provided: VideoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoModule", function() { return VideoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/youtube-player */ "TIDI");
/* harmony import */ var _components_video_video_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/video/video.component */ "G4NA");




class VideoModule {
}
VideoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VideoModule });
VideoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VideoModule_Factory(t) { return new (t || VideoModule)(); }, imports: [[_angular_youtube_player__WEBPACK_IMPORTED_MODULE_1__["YouTubePlayerModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VideoModule, { declarations: [_components_video_video_component__WEBPACK_IMPORTED_MODULE_2__["VideoComponent"]], imports: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_1__["YouTubePlayerModule"]], exports: [_components_video_video_component__WEBPACK_IMPORTED_MODULE_2__["VideoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_youtube_player__WEBPACK_IMPORTED_MODULE_1__["YouTubePlayerModule"]],
                declarations: [_components_video_video_component__WEBPACK_IMPORTED_MODULE_2__["VideoComponent"]],
                exports: [_components_video_video_component__WEBPACK_IMPORTED_MODULE_2__["VideoComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "QhSr":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["*"];
class TypographyComponent {
    constructor() {
        this.text = '';
        this.isCentered = true;
    }
    ngOnInit() { }
}
TypographyComponent.ɵfac = function TypographyComponent_Factory(t) { return new (t || TypographyComponent)(); };
TypographyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TypographyComponent, selectors: [["aeroaquaponic-typography"]], inputs: { text: "text", isCentered: "isCentered" }, ngContentSelectors: _c0, decls: 4, vars: 3, template: function TypographyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("centered", ctx.isCentered);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");
    } }, styles: ["div[_ngcontent-%COMP%] {\n  display: flex;\n}\ndiv[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 79.88vw;\n  margin: 0;\n  line-height: 2.24vw;\n  font-size: 1.75vw;\n  font-family: \"Work Sans\", sans-serif;\n}\n.centered[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBUUUsYUFBQTtBQU5GO0FBREU7RUFDRSxjQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtBQUdKO0FBQ0E7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFFRiIsImZpbGUiOiJ0eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICBwIHtcclxuICAgIHdpZHRoOiA3OS44OHZ3O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIuMjR2dztcclxuICAgIGZvbnQtc2l6ZTogMS43NXZ3O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmNlbnRlcmVkIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TypographyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aeroaquaponic-typography',
                templateUrl: './typography.component.html',
                styleUrls: ['./typography.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, { text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isCentered: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Rtmn":
/*!*********************************************************!*\
  !*** ./src/app/components/section/section.component.ts ***!
  \*********************************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



const _c0 = function (a0) { return { isDebugging: a0, section: true }; };
const _c1 = ["*"];
class SectionComponent {
    constructor() {
        this.isDebugging = false;
        this.id = '';
    }
    ngOnInit() { }
}
SectionComponent.ɵfac = function SectionComponent_Factory(t) { return new (t || SectionComponent)(); };
SectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SectionComponent, selectors: [["aeroaquaponic-section"]], inputs: { isDebugging: "isDebugging", id: "id" }, ngContentSelectors: _c1, decls: 2, vars: 4, consts: [[3, "id", "ngClass"]], template: function SectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.isDebugging));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: ["div[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUFDRiIsImZpbGUiOiJzZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZGl2IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aeroaquaponic-section',
                templateUrl: './section.component.html',
                styleUrls: ['./section.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return []; }, { isDebugging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _pages_page_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/page/page.component */ "aUng");



class AppComponent {
    constructor() {
        this.title = 'aeroaquaponic';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "aeroaquaponic-page");
    } }, directives: [_pages_page_page_component__WEBPACK_IMPORTED_MODULE_1__["PageComponent"]], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Red+Hat+Display|Work+Sans:500,700&display=swap\");\n@font-face {\n  font-family: spartan;\n  src: url('LeagueSpartan.woff');\n  font-weight: normal;\n}\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  font-family: spartan sans sans-serif;\n  margin: 0 !important;\n  padding: 0 !important;\n  scroll-behavior: smooth;\n  overflow-x: hidden;\n}\n.isDebugging[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLHFHQUFBO0FBRVI7RUFDRSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUdBOztFQUVFLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFERjtBQUlBO0VBQ0UscUJBQUE7QUFERiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1SZWQrSGF0K0Rpc3BsYXl8V29yaytTYW5zOjUwMCw3MDAmZGlzcGxheT1zd2FwXCIpO1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6IHNwYXJ0YW47XHJcbiAgc3JjOiB1cmwoLi4vYXNzZXRzL0xlYWd1ZVNwYXJ0YW4ud29mZik7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuaHRtbCxcclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IHNwYXJ0YW4gc2FucyBzYW5zLXNlcmlmO1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbn1cclxuXHJcbi5pc0RlYnVnZ2luZyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/button/button.component */ "7psr");
/* harmony import */ var _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/heading/heading.component */ "7ldv");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/menu/menu.component */ "0oYm");
/* harmony import */ var _components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/profile-card/profile-card.component */ "lxY5");
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/section/section.component */ "Rtmn");
/* harmony import */ var _components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/spacer/spacer.component */ "vrXP");
/* harmony import */ var _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/timeline/timeline.component */ "LsEZ");
/* harmony import */ var _components_typography_typography_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/typography/typography.component */ "QhSr");
/* harmony import */ var _composites_profile_card_container_profile_card_container_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./composites/profile-card-container/profile-card-container.component */ "bd0T");
/* harmony import */ var _composites_sections_about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./composites/sections/about/about.component */ "1Ger");
/* harmony import */ var _composites_sections_main_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./composites/sections/main/main.component */ "DsDN");
/* harmony import */ var _composites_sections_projects_projects_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./composites/sections/projects/projects.component */ "6awA");
/* harmony import */ var _pages_page_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/page/page.component */ "aUng");
/* harmony import */ var _video_video_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./video/video.module */ "Q4H4");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/card/card.component */ "lXt9");
/* harmony import */ var _composites_cards_container_cards_container_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./composites/cards-container/cards-container.component */ "pOS1");
/* harmony import */ var _composites_sections_overview_overview_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./composites/sections/overview/overview.component */ "oitC");
/* harmony import */ var _composites_sections_donate_donate_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./composites/sections/donate/donate.component */ "ALQe");
/* harmony import */ var _composites_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./composites/footer/footer.component */ "plNx");
/* harmony import */ var _composites_social_social_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./composites/social/social.component */ "O0zL");

























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _video_video_module__WEBPACK_IMPORTED_MODULE_17__["VideoModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_typography_typography_component__WEBPACK_IMPORTED_MODULE_11__["TypographyComponent"],
        _components_section_section_component__WEBPACK_IMPORTED_MODULE_8__["SectionComponent"],
        _composites_sections_projects_projects_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsComponent"],
        _composites_sections_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
        _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_5__["HeadingComponent"],
        _components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_7__["ProfileCardComponent"],
        _components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_9__["SpacerComponent"],
        _composites_profile_card_container_profile_card_container_component__WEBPACK_IMPORTED_MODULE_12__["ProfileCardContainerComponent"],
        _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__["TimelineComponent"],
        _composites_sections_main_main_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"],
        _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
        _pages_page_page_component__WEBPACK_IMPORTED_MODULE_16__["PageComponent"],
        _components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_18__["CardComponent"],
        _composites_cards_container_cards_container_component__WEBPACK_IMPORTED_MODULE_19__["CardsContainerComponent"],
        _composites_sections_overview_overview_component__WEBPACK_IMPORTED_MODULE_20__["OverviewComponent"],
        _composites_sections_donate_donate_component__WEBPACK_IMPORTED_MODULE_21__["DonateComponent"],
        _composites_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
        _composites_social_social_component__WEBPACK_IMPORTED_MODULE_23__["SocialComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _video_video_module__WEBPACK_IMPORTED_MODULE_17__["VideoModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_typography_typography_component__WEBPACK_IMPORTED_MODULE_11__["TypographyComponent"],
                    _components_section_section_component__WEBPACK_IMPORTED_MODULE_8__["SectionComponent"],
                    _composites_sections_projects_projects_component__WEBPACK_IMPORTED_MODULE_15__["ProjectsComponent"],
                    _composites_sections_about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                    _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_5__["HeadingComponent"],
                    _components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_7__["ProfileCardComponent"],
                    _components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_9__["SpacerComponent"],
                    _composites_profile_card_container_profile_card_container_component__WEBPACK_IMPORTED_MODULE_12__["ProfileCardContainerComponent"],
                    _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__["TimelineComponent"],
                    _composites_sections_main_main_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"],
                    _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"],
                    _pages_page_page_component__WEBPACK_IMPORTED_MODULE_16__["PageComponent"],
                    _components_button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
                    _components_card_card_component__WEBPACK_IMPORTED_MODULE_18__["CardComponent"],
                    _composites_cards_container_cards_container_component__WEBPACK_IMPORTED_MODULE_19__["CardsContainerComponent"],
                    _composites_sections_overview_overview_component__WEBPACK_IMPORTED_MODULE_20__["OverviewComponent"],
                    _composites_sections_donate_donate_component__WEBPACK_IMPORTED_MODULE_21__["DonateComponent"],
                    _composites_footer_footer_component__WEBPACK_IMPORTED_MODULE_22__["FooterComponent"],
                    _composites_social_social_component__WEBPACK_IMPORTED_MODULE_23__["SocialComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _video_video_module__WEBPACK_IMPORTED_MODULE_17__["VideoModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                exports: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "aUng":
/*!**********************************************!*\
  !*** ./src/app/pages/page/page.component.ts ***!
  \**********************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _composites_sections_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../composites/sections/main/main.component */ "DsDN");
/* harmony import */ var _composites_cards_container_cards_container_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../composites/cards-container/cards-container.component */ "pOS1");
/* harmony import */ var _composites_sections_overview_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../composites/sections/overview/overview.component */ "oitC");
/* harmony import */ var _composites_sections_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../composites/sections/projects/projects.component */ "6awA");
/* harmony import */ var _composites_sections_donate_donate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../composites/sections/donate/donate.component */ "ALQe");
/* harmony import */ var _composites_sections_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../composites/sections/about/about.component */ "1Ger");
/* harmony import */ var _composites_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../composites/footer/footer.component */ "plNx");









class PageComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageComponent.ɵfac = function PageComponent_Factory(t) { return new (t || PageComponent)(); };
PageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageComponent, selectors: [["aeroaquaponic-page"]], decls: 8, vars: 0, template: function PageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aeroaquaponic-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aeroaquaponic-cards-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aeroaquaponic-overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "aeroaquaponic-projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aeroaquaponic-donate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "aeroaquaponic-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aeroaquaponic-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_composites_sections_main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"], _composites_cards_container_cards_container_component__WEBPACK_IMPORTED_MODULE_2__["CardsContainerComponent"], _composites_sections_overview_overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"], _composites_sections_projects_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"], _composites_sections_donate_donate_component__WEBPACK_IMPORTED_MODULE_5__["DonateComponent"], _composites_sections_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _composites_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aeroaquaponic-page',
                templateUrl: './page.component.html',
                styleUrls: ['./page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bd0T":
/*!***************************************************************************************!*\
  !*** ./src/app/composites/profile-card-container/profile-card-container.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ProfileCardContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCardContainerComponent", function() { return ProfileCardContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/profile-card/profile-card.component */ "lxY5");




function ProfileCardContainerComponent_aeroaquaponic_profile_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "aeroaquaponic-profile-card", 1);
} if (rf & 2) {
    const profile_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", profile_r1.name)("description", profile_r1.description)("imageUrl", profile_r1.imageUrl)("link", profile_r1.link);
} }
class ProfileCardContainerComponent {
    constructor() {
        this.profiles = [];
    }
    ngOnInit() { }
}
ProfileCardContainerComponent.ɵfac = function ProfileCardContainerComponent_Factory(t) { return new (t || ProfileCardContainerComponent)(); };
ProfileCardContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileCardContainerComponent, selectors: [["aeroaquaponic-profile-card-container"]], inputs: { profiles: "profiles" }, decls: 2, vars: 1, consts: [[3, "name", "description", "imageUrl", "link", 4, "ngFor", "ngForOf"], [3, "name", "description", "imageUrl", "link"]], template: function ProfileCardContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileCardContainerComponent_aeroaquaponic_profile_card_1_Template, 1, 4, "aeroaquaponic-profile-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.profiles);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _components_profile_card_profile_card_component__WEBPACK_IMPORTED_MODULE_2__["ProfileCardComponent"]], styles: ["div[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLWNhcmQtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUNGIiwiZmlsZSI6InByb2ZpbGUtY2FyZC1jb250YWluZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileCardContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aeroaquaponic-profile-card-container',
                templateUrl: './profile-card-container.component.html',
                styleUrls: ['./profile-card-container.component.scss'],
            }]
    }], function () { return []; }, { profiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "j8bs":
/*!************************************!*\
  !*** ./src/app/general.service.ts ***!
  \************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class GeneralService {
    constructor() {
        this.scrollToId = (id) => {
            var _a;
            const y = (_a = document.querySelector(id)) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().top;
            if (!y)
                return;
            window.scrollTo(0, y);
        };
    }
}
GeneralService.ɵfac = function GeneralService_Factory(t) { return new (t || GeneralService)(); };
GeneralService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GeneralService, factory: GeneralService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "lXt9":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent, CardComponentData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponentData", function() { return CardComponentData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../button/button.component */ "7psr");



class CardComponent {
    constructor() {
        this.image = CardComponentData.image;
        this.title = CardComponentData.title;
        this.text = CardComponentData.text;
        this.label = CardComponentData.label;
        this.link = CardComponentData.link;
        this.onClickHandler = (e) => {
            const a = document.createElement('a');
            a.setAttribute('target', '_blank');
            a.setAttribute('href', this.link);
            a.click();
        };
    }
    ngOnInit() { }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["aeroaquaponic-card"]], inputs: { image: "image", title: "title", text: "text", label: "label", link: "link", onClickHandler: "onClickHandler" }, decls: 9, vars: 4, consts: [[1, "card"], [1, "divider"], [1, "image"], [3, "src"], [3, "label", "onClick"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "aeroaquaponic-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onClick", function CardComponent_Template_aeroaquaponic_button_onClick_8_listener($event) { return ctx.onClickHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx.label);
    } }, directives: [_button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]], styles: [".card[_ngcontent-%COMP%] {\n  font-family: \"Work Sans\", sans-serif;\n  background-color: #494949;\n  justify-content: space-between;\n  padding: 3vw;\n  color: white;\n  display: flex;\n  flex-direction: column;\n  width: 20vw;\n  height: 40vw;\n  border: 0.2vw solid white;\n  line-height: 1.56vw;\n  font-size: 1.2vw;\n}\n.card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  text-transform: uppercase;\n  display: flex;\n  flex: 1;\n  font-family: spartan, sans-serif;\n  margin: 0 0 1vw 0;\n  line-height: 2.56vw;\n  height: 5vw;\n}\n.card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n  height: auto;\n  margin: 0 0 2vw 0;\n}\n.card[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 100vw;\n  display: flex;\n  width: 15vw;\n  height: 15vw;\n}\n.card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 0;\n  display: flex;\n  flex: 5;\n  align-content: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNGO0FBQUU7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBRUo7QUFBRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQURJO0VBQ0Usb0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHTjtBQUFFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0FBRUoiLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDk0OTQ5O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAzdnc7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMjB2dztcclxuICBoZWlnaHQ6IDQwdnc7XHJcbiAgYm9yZGVyOiAwLjJ2dyBzb2xpZCB3aGl0ZTtcclxuICBsaW5lLWhlaWdodDogMS41NnZ3O1xyXG4gIGZvbnQtc2l6ZTogMS4ydnc7XHJcbiAgaDEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZm9udC1mYW1pbHk6IHNwYXJ0YW4sIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW46IDAgMCAxdncgMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjU2dnc7XHJcbiAgICBoZWlnaHQ6IDV2dztcclxuICB9XHJcbiAgLmltYWdlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAwIDAgMnZ3IDA7XHJcbiAgICBpbWcge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDB2dztcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgd2lkdGg6IDE1dnc7XHJcbiAgICAgIGhlaWdodDogMTV2dztcclxuICAgIH1cclxuICB9XHJcbiAgcCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDU7XHJcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aeroaquaponic-card',
                templateUrl: './card.component.html',
                styleUrls: ['./card.component.scss'],
            }]
    }], function () { return []; }, { image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onClickHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const CardComponentData = {
    title: 'Technology',
    text: 'We all want to be independent from the system. We all want to be independent from the system. We all want to be independent from the system.',
    label: 'Learn More',
    image: 'https://aeroaquaponic.org/images/logo.png',
    link: 'https://aeroaquaponic.org',
};


/***/ }),

/***/ "lxY5":
/*!*******************************************************************!*\
  !*** ./src/app/components/profile-card/profile-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileCardComponent", function() { return ProfileCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProfileCardComponent {
    constructor() {
        this.link = '';
        this.imageUrl = '';
        this.name = 'name';
        this.description = 'description';
    }
    onClickHandler(e) {
        const a = document.createElement('a');
        a.setAttribute('target', '_blank');
        a.setAttribute('href', this.link);
        a.click();
    }
    ngOnInit() { }
}
ProfileCardComponent.ɵfac = function ProfileCardComponent_Factory(t) { return new (t || ProfileCardComponent)(); };
ProfileCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileCardComponent, selectors: [["aeroaquaponic-profile-card"]], inputs: { onClickHandler: "onClickHandler", link: "link", imageUrl: "imageUrl", name: "name", description: "description" }, decls: 6, vars: 3, consts: [[1, "container", 3, "click"], [3, "src"], [1, "name"], [1, "description"]], template: function ProfileCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileCardComponent_Template_div_click_0_listener($event) { return ctx.onClickHandler($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
    } }, styles: [".container[_ngcontent-%COMP%] {\n  font-family: \"Work Sans\";\n  display: flex;\n  flex-direction: column;\n  width: 24vw;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5vw;\n  margin: 2vw;\n  transition: 0.1s;\n}\n.container[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n  cursor: pointer;\n}\n.container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 12.5vw;\n  width: 12.5vw;\n  border-radius: 50vw;\n  background-color: grey;\n  background-size: cover;\n  background-position: center;\n}\n.container[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-top: 2vw;\n}\n.container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  text-align: center;\n  font-weight: lighter;\n  margin-top: 1vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUFFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FBRUo7QUFBRTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFFSjtBQUFFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBRUo7QUFBRTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBRUoiLCJmaWxlIjoicHJvZmlsZS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAyNHZ3O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxLjV2dztcclxuICBtYXJnaW46IDJ2dztcclxuICB0cmFuc2l0aW9uOiAwLjFzO1xyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAmIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEyLjV2dztcclxuICAgIHdpZHRoOiAxMi41dnc7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG4gICYgLm5hbWUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tdG9wOiAydnc7XHJcbiAgfVxyXG4gICYgLmRlc2NyaXB0aW9uIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMXZ3O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aeroaquaponic-profile-card',
                templateUrl: './profile-card.component.html',
                styleUrls: ['./profile-card.component.scss'],
            }]
    }], function () { return []; }, { onClickHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], imageUrl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], description: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "oitC":
/*!********************************************************************!*\
  !*** ./src/app/composites/sections/overview/overview.component.ts ***!
  \********************************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_section_section_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/section/section.component */ "Rtmn");
/* harmony import */ var _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/heading/heading.component */ "7ldv");
/* harmony import */ var _components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/spacer/spacer.component */ "vrXP");
/* harmony import */ var _components_video_video_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/video/video.component */ "G4NA");






class OverviewComponent {
    constructor() { }
    ngOnInit() {
    }
}
OverviewComponent.ɵfac = function OverviewComponent_Factory(t) { return new (t || OverviewComponent)(); };
OverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OverviewComponent, selectors: [["aeroaquaponic-overview"]], decls: 5, vars: 2, consts: [["id", "overview"], ["title", "Overview", "subtitle", "Our Vision"], [3, "height"]], template: function OverviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aeroaquaponic-section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aeroaquaponic-heading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aeroaquaponic-spacer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aeroaquaponic-video");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "aeroaquaponic-spacer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("height", 10);
    } }, directives: [_components_section_section_component__WEBPACK_IMPORTED_MODULE_1__["SectionComponent"], _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_2__["HeadingComponent"], _components_spacer_spacer_component__WEBPACK_IMPORTED_MODULE_3__["SpacerComponent"], _components_video_video_component__WEBPACK_IMPORTED_MODULE_4__["VideoComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdmVydmlldy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aeroaquaponic-overview',
                templateUrl: './overview.component.html',
                styleUrls: ['./overview.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "pOS1":
/*!*************************************************************************!*\
  !*** ./src/app/composites/cards-container/cards-container.component.ts ***!
  \*************************************************************************/
/*! exports provided: CardsContainerComponent, CardsContainerComponentData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsContainerComponent", function() { return CardsContainerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsContainerComponentData", function() { return CardsContainerComponentData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/card/card.component */ "lXt9");




function CardsContainerComponent_aeroaquaponic_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "aeroaquaponic-card", 2);
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", card_r1.image)("title", card_r1.title)("text", card_r1.text)("label", card_r1.label)("link", card_r1.link);
} }
class CardsContainerComponent {
    constructor() {
        this.cards = CardsContainerComponentData.cards;
    }
    ngOnInit() { }
}
CardsContainerComponent.ɵfac = function CardsContainerComponent_Factory(t) { return new (t || CardsContainerComponent)(); };
CardsContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardsContainerComponent, selectors: [["aeroaquaponic-cards-container"]], inputs: { cards: "cards" }, decls: 2, vars: 1, consts: [["id", "cards", 1, "container"], [3, "image", "title", "text", "label", "link", 4, "ngFor", "ngForOf"], [3, "image", "title", "text", "label", "link"]], template: function CardsContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CardsContainerComponent_aeroaquaponic_card_1_Template, 1, 5, "aeroaquaponic-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_2__["CardComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  gap: 2vw;\n  margin: 2vw 0 10vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXJkcy1jb250YWluZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6ImNhcmRzLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMnZ3O1xyXG4gIG1hcmdpbjogMnZ3IDAgMTB2dztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CardsContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aeroaquaponic-cards-container',
                templateUrl: './cards-container.component.html',
                styleUrls: ['./cards-container.component.scss'],
            }]
    }], function () { return []; }, { cards: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const CardsContainerComponentData = {
    cards: [
        {
            image: 'https://aeroaquaponic.org/images/technology.png',
            title: 'Technology',
            text: 'Aeroaquaponic systems are a soilless farming technology which combines aeroponics with cyclical aquaponics.',
            label: 'Learn More',
            link: 'https://aeroaquaponic.fandom.com/wiki/Self-sufficiency_Research',
        },
        {
            image: 'https://aeroaquaponic.org/images/unit-of-self-sufficiency.png',
            title: 'Unit of Self-Sufficiency',
            text: 'Unit of self-sufficiency is a model of human existence in which the needs of its members are fulfilled with the minimal sufficient amount of sustainable resources owned by the unit.',
            label: 'Learn More',
            link: 'https://aeroaquaponic.fandom.com/wiki/Unit_of_Self-Sufficiency',
        },
        {
            image: 'https://aeroaquaponic.org/images/logo.png',
            title: 'Free Book',
            text: "Get our free eBook and learn about our ideas on how to solve some of the world's biggest problems.",
            label: 'Learn More',
            link: 'https://aeroaquaponic.fandom.com/wiki/Aeroaquaponic_Vision',
        },
    ],
};


/***/ }),

/***/ "plNx":
/*!*******************************************************!*\
  !*** ./src/app/composites/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent, FooterComponentData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponentData", function() { return FooterComponentData; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function FooterComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", link_r1.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](link_r1.name);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
class FooterComponent {
    constructor() {
        this.logo = FooterComponentData.logo;
        this.links = FooterComponentData.links;
    }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["aeroaquaponic-footer"]], inputs: { logo: "logo", links: "links" }, decls: 10, vars: 5, consts: [[1, "footer"], [1, "logo-container"], [1, "logo", 3, "ngStyle"], [1, "spacer"], [1, "logo-description"], [1, "links"], ["target", "_blank", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 3, "href"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Social Media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FooterComponent_a_9_Template, 2, 2, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "url(" + ctx.logo.link + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.logo.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  height: 30vw;\n  background-color: #333;\n  color: white;\n  font-family: \"Work Sans\", sans-serif;\n  font-size: 1.8vw;\n  line-height: 2vw;\n  justify-content: space-between;\n}\n.footer[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%] {\n  padding: 4vw;\n  display: flex;\n  flex-direction: row;\n}\n.footer[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  width: 10vw;\n  height: 10vw;\n  background-size: contain;\n}\n.footer[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%] {\n  display: flex;\n  width: 2vw;\n  height: 100%;\n}\n.footer[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   .logo-description[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  width: 24vw;\n}\n.footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  padding: 4vw;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n.footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  margin-bottom: 2vw;\n}\n.footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n  margin-bottom: 1vw;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7QUFBRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFFSjtBQURJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQUdOO0FBREk7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFHTjtBQURJO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBR047QUFBRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBQUVKO0FBREk7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBR047QUFESTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUdOIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxLjh2dztcclxuICBsaW5lLWhlaWdodDogMnZ3O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAubG9nby1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNHZ3O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAubG9nbyB7XHJcbiAgICAgIHdpZHRoOiAxMHZ3O1xyXG4gICAgICBoZWlnaHQ6IDEwdnc7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIH1cclxuICAgIC5zcGFjZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB3aWR0aDogMnZ3O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAubG9nby1kZXNjcmlwdGlvbiB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgd2lkdGg6IDI0dnc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5saW5rcyB7XHJcbiAgICBwYWRkaW5nOiA0dnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgIGgyIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAydnc7XHJcbiAgICB9XHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxdnc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aeroaquaponic-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
            }]
    }], function () { return []; }, { logo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], links: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
const FooterComponentData = {
    logo: {
        link: 'https://aeroaquaponic.org/images/logo.png',
        description: "Get our free eBook and learn about our ideas on how to solve some of the world's biggest problems.",
    },
    links: [
        {
            link: 'https://www.youtube.com/channel/UCGes3ATrv3cOwRb39wo2iXQ',
            name: 'YouTube',
        },
        {
            link: 'https://www.instagram.com/aeroaquaponic/',
            name: 'Instagram',
        },
        {
            link: 'https://www.linkedin.com/company/aeroaquaponic',
            name: 'LinkedIn',
        },
        {
            link: 'https://twitter.com/AeroAquaponics',
            name: 'Twitter',
        },
        {
            link: 'https://medium.com/@aeroaquaponic',
            name: 'Medium',
        },
        {
            link: 'https://www.facebook.com/aeroaquaponic2020',
            name: 'Facebook',
        },
    ],
};


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vrXP":
/*!*******************************************************!*\
  !*** ./src/app/components/spacer/spacer.component.ts ***!
  \*******************************************************/
/*! exports provided: SpacerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacerComponent", function() { return SpacerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SpacerComponent {
    constructor() {
        this.height = '1';
    }
    ngOnInit() { }
}
SpacerComponent.ɵfac = function SpacerComponent_Factory(t) { return new (t || SpacerComponent)(); };
SpacerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpacerComponent, selectors: [["aeroaquaponic-spacer"]], inputs: { height: "height" }, decls: 1, vars: 3, template: function SpacerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("display: flex;\n  width: 100%; height: ", ctx.height, "vw;");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGFjZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpacerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'aeroaquaponic-spacer',
                styleUrls: ['./spacer.component.scss'],
                template: `<div
    style="display: flex;
  width: 100%; height: {{ height }}vw;"
  ></div>`,
            }]
    }], function () { return []; }, { height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map