(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@ionic/core/dist/esm-es5/ion-alert-ios.entry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm-es5/ion-alert-ios.entry.js ***!
  \**********************************************************************/
/*! exports provided: ion_alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_alert", function() { return Alert; });
/* harmony import */ var _core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-57385ee8.js */ "./node_modules/@ionic/core/dist/esm-es5/core-57385ee8.js");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-3c7f3790.js */ "./node_modules/@ionic/core/dist/esm-es5/config-3c7f3790.js");
/* harmony import */ var _helpers_e0fdb9d0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-e0fdb9d0.js */ "./node_modules/@ionic/core/dist/esm-es5/helpers-e0fdb9d0.js");
/* harmony import */ var _animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animation-86ecfd53.js */ "./node_modules/@ionic/core/dist/esm-es5/animation-86ecfd53.js");
/* harmony import */ var _overlays_12eacdf8_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./overlays-12eacdf8.js */ "./node_modules/@ionic/core/dist/esm-es5/overlays-12eacdf8.js");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "./node_modules/@ionic/core/dist/esm-es5/theme-18cbe2cc.js");
/* harmony import */ var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-3476b023.js */ "./node_modules/@ionic/core/dist/esm-es5/index-3476b023.js");







/**
 * iOS Alert Enter Animation
 */
var iosEnterAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    var backdropAnimation = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    var wrapperAnimation = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.3);
    wrapperAnimation
        .addElement(baseEl.querySelector('.alert-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.01, transform: 'scale(1.1)' },
        { offset: 1, opacity: 1, transform: 'scale(1)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * iOS Alert Leave Animation
 */
var iosLeaveAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    var backdropAnimation = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    var wrapperAnimation = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.3, 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.alert-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.99, transform: 'scale(1)' },
        { offset: 1, opacity: 0, transform: 'scale(0.9)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(200)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Alert Enter Animation
 */
var mdEnterAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    var backdropAnimation = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    var wrapperAnimation = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.01, 0.32);
    wrapperAnimation
        .addElement(baseEl.querySelector('.alert-wrapper'))
        .keyframes([
        { offset: 0, opacity: 0.01, transform: 'scale(0.9)' },
        { offset: 1, opacity: 1, transform: 'scale(1)' }
    ]);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(150)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Alert Leave Animation
 */
var mdLeaveAnimation = function (baseEl) {
    var baseAnimation = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    var backdropAnimation = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    var wrapperAnimation = Object(_animation_86ecfd53_js__WEBPACK_IMPORTED_MODULE_3__["c"])();
    backdropAnimation
        .addElement(baseEl.querySelector('ion-backdrop'))
        .fromTo('opacity', 0.32, 0);
    wrapperAnimation
        .addElement(baseEl.querySelector('.alert-wrapper'))
        .fromTo('opacity', 0.99, 0);
    return baseAnimation
        .addElement(baseEl)
        .easing('ease-in-out')
        .duration(150)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};
var Alert = /** @class */ (function () {
    function Alert(hostRef) {
        var _this = this;
        Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.processedInputs = [];
        this.processedButtons = [];
        this.presented = false;
        this.mode = Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        /**
         * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
         */
        this.keyboardClose = true;
        /**
         * Array of buttons to be added to the alert.
         */
        this.buttons = [];
        /**
         * Array of input to show in the alert.
         */
        this.inputs = [];
        /**
         * If `true`, the alert will be dismissed when the backdrop is clicked.
         */
        this.backdropDismiss = true;
        /**
         * If `true`, the alert will be translucent.
         * Only applies when the mode is `"ios"` and the device supports
         * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
         */
        this.translucent = false;
        /**
         * If `true`, the alert will animate.
         */
        this.animated = true;
        this.onBackdropTap = function () {
            _this.dismiss(undefined, _overlays_12eacdf8_js__WEBPACK_IMPORTED_MODULE_4__["B"]);
        };
        this.dispatchCancelHandler = function (ev) {
            var role = ev.detail.role;
            if (Object(_overlays_12eacdf8_js__WEBPACK_IMPORTED_MODULE_4__["i"])(role)) {
                var cancelButton = _this.processedButtons.find(function (b) { return b.role === 'cancel'; });
                _this.callButtonHandler(cancelButton);
            }
        };
        Object(_overlays_12eacdf8_js__WEBPACK_IMPORTED_MODULE_4__["d"])(this.el);
        this.didPresent = Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionAlertDidPresent", 7);
        this.willPresent = Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionAlertWillPresent", 7);
        this.willDismiss = Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionAlertWillDismiss", 7);
        this.didDismiss = Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "ionAlertDidDismiss", 7);
    }
    Alert.prototype.buttonsChanged = function () {
        var buttons = this.buttons;
        this.processedButtons = buttons.map(function (btn) {
            return (typeof btn === 'string')
                ? { text: btn, role: btn.toLowerCase() === 'cancel' ? 'cancel' : undefined }
                : btn;
        });
    };
    Alert.prototype.inputsChanged = function () {
        var _this = this;
        var inputs = this.inputs;
        // An alert can be created with several different inputs. Radios,
        // checkboxes and inputs are all accepted, but they cannot be mixed.
        var inputTypes = new Set(inputs.map(function (i) { return i.type; }));
        if (inputTypes.has('checkbox') && inputTypes.has('radio')) {
            console.warn("Alert cannot mix input types: " + (Array.from(inputTypes.values()).join('/')) + ". Please see alert docs for more info.");
        }
        this.inputType = inputTypes.values().next().value;
        this.processedInputs = inputs.map(function (i, index) { return ({
            type: i.type || 'text',
            name: i.name || "" + index,
            placeholder: i.placeholder || '',
            value: i.value,
            label: i.label,
            checked: !!i.checked,
            disabled: !!i.disabled,
            id: i.id || "alert-input-" + _this.overlayIndex + "-" + index,
            handler: i.handler,
            min: i.min,
            max: i.max
        }); });
    };
    Alert.prototype.componentWillLoad = function () {
        this.inputsChanged();
        this.buttonsChanged();
    };
    /**
     * Present the alert overlay after it has been created.
     */
    Alert.prototype.present = function () {
        return Object(_overlays_12eacdf8_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this, 'alertEnter', iosEnterAnimation, mdEnterAnimation);
    };
    /**
     * Dismiss the alert overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the alert.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the alert.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */
    Alert.prototype.dismiss = function (data, role) {
        return Object(_overlays_12eacdf8_js__WEBPACK_IMPORTED_MODULE_4__["f"])(this, data, role, 'alertLeave', iosLeaveAnimation, mdLeaveAnimation);
    };
    /**
     * Returns a promise that resolves when the alert did dismiss.
     */
    Alert.prototype.onDidDismiss = function () {
        return Object(_overlays_12eacdf8_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.el, 'ionAlertDidDismiss');
    };
    /**
     * Returns a promise that resolves when the alert will dismiss.
     */
    Alert.prototype.onWillDismiss = function () {
        return Object(_overlays_12eacdf8_js__WEBPACK_IMPORTED_MODULE_4__["g"])(this.el, 'ionAlertWillDismiss');
    };
    Alert.prototype.rbClick = function (selectedInput) {
        for (var _i = 0, _a = this.processedInputs; _i < _a.length; _i++) {
            var input = _a[_i];
            input.checked = input === selectedInput;
        }
        this.activeId = selectedInput.id;
        Object(_overlays_12eacdf8_js__WEBPACK_IMPORTED_MODULE_4__["s"])(selectedInput.handler, selectedInput);
        this.el.forceUpdate();
    };
    Alert.prototype.cbClick = function (selectedInput) {
        selectedInput.checked = !selectedInput.checked;
        Object(_overlays_12eacdf8_js__WEBPACK_IMPORTED_MODULE_4__["s"])(selectedInput.handler, selectedInput);
        this.el.forceUpdate();
    };
    Alert.prototype.buttonClick = function (button) {
        var role = button.role;
        var values = this.getValues();
        if (Object(_overlays_12eacdf8_js__WEBPACK_IMPORTED_MODULE_4__["i"])(role)) {
            return this.dismiss({ values: values }, role);
        }
        var returnData = this.callButtonHandler(button, values);
        if (returnData !== false) {
            return this.dismiss(Object.assign({ values: values }, returnData), button.role);
        }
        return Promise.resolve(false);
    };
    Alert.prototype.callButtonHandler = function (button, data) {
        if (button && button.handler) {
            // a handler has been provided, execute it
            // pass the handler the values from the inputs
            var returnData = Object(_overlays_12eacdf8_js__WEBPACK_IMPORTED_MODULE_4__["s"])(button.handler, data);
            if (returnData === false) {
                // if the return value of the handler is false then do not dismiss
                return false;
            }
            if (typeof returnData === 'object') {
                return returnData;
            }
        }
        return {};
    };
    Alert.prototype.getValues = function () {
        if (this.processedInputs.length === 0) {
            // this is an alert without any options/inputs at all
            return undefined;
        }
        if (this.inputType === 'radio') {
            // this is an alert with radio buttons (single value select)
            // return the one value which is checked, otherwise undefined
            var checkedInput = this.processedInputs.find(function (i) { return !!i.checked; });
            return checkedInput ? checkedInput.value : undefined;
        }
        if (this.inputType === 'checkbox') {
            // this is an alert with checkboxes (multiple value select)
            // return an array of all the checked values
            return this.processedInputs.filter(function (i) { return i.checked; }).map(function (i) { return i.value; });
        }
        // this is an alert with text inputs
        // return an object of all the values with the input name as the key
        var values = {};
        this.processedInputs.forEach(function (i) {
            values[i.name] = i.value || '';
        });
        return values;
    };
    Alert.prototype.renderAlertInputs = function (labelledBy) {
        switch (this.inputType) {
            case 'checkbox': return this.renderCheckbox(labelledBy);
            case 'radio': return this.renderRadio(labelledBy);
            default: return this.renderInput(labelledBy);
        }
    };
    Alert.prototype.renderCheckbox = function (labelledby) {
        var _this = this;
        var inputs = this.processedInputs;
        var mode = Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        if (inputs.length === 0) {
            return null;
        }
        return (Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-checkbox-group", "aria-labelledby": labelledby }, inputs.map(function (i) { return (Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", onClick: function () { return _this.cbClick(i); }, "aria-checked": "" + i.checked, id: i.id, disabled: i.disabled, tabIndex: 0, role: "checkbox", class: {
                'alert-tappable': true,
                'alert-checkbox': true,
                'alert-checkbox-button': true,
                'ion-focusable': true,
                'alert-checkbox-button-disabled': i.disabled || false
            } }, Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-button-inner" }, Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-checkbox-icon" }, Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-checkbox-inner" })), Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-checkbox-label" }, i.label)), mode === 'md' && Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null))); })));
    };
    Alert.prototype.renderRadio = function (labelledby) {
        var _this = this;
        var inputs = this.processedInputs;
        if (inputs.length === 0) {
            return null;
        }
        return (Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-radio-group", role: "radiogroup", "aria-labelledby": labelledby, "aria-activedescendant": this.activeId }, inputs.map(function (i) { return (Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", onClick: function () { return _this.rbClick(i); }, "aria-checked": "" + i.checked, disabled: i.disabled, id: i.id, tabIndex: 0, class: {
                'alert-radio-button': true,
                'alert-tappable': true,
                'alert-radio': true,
                'ion-focusable': true,
                'alert-radio-button-disabled': i.disabled || false
            }, role: "radio" }, Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-button-inner" }, Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-radio-icon" }, Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-radio-inner" })), Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-radio-label" }, i.label)))); })));
    };
    Alert.prototype.renderInput = function (labelledby) {
        var inputs = this.processedInputs;
        if (inputs.length === 0) {
            return null;
        }
        return (Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-input-group", "aria-labelledby": labelledby }, inputs.map(function (i) { return (Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-input-wrapper" }, Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { placeholder: i.placeholder, value: i.value, type: i.type, min: i.min, max: i.max, onInput: function (e) { return i.value = e.target.value; }, id: i.id, disabled: i.disabled, tabIndex: 0, class: {
                'alert-input': true,
                'alert-input-disabled': i.disabled || false
            } }))); })));
    };
    Alert.prototype.renderAlertButtons = function () {
        var _this = this;
        var buttons = this.processedButtons;
        var mode = Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        var alertButtonGroupClass = {
            'alert-button-group': true,
            'alert-button-group-vertical': buttons.length > 2
        };
        return (Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: alertButtonGroupClass }, buttons.map(function (button) { return Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", class: buttonClass(button), tabIndex: 0, onClick: function () { return _this.buttonClick(button); } }, Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "alert-button-inner" }, button.text), mode === 'md' && Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect", null)); })));
    };
    Alert.prototype.render = function () {
        var _a;
        var _b = this, overlayIndex = _b.overlayIndex, header = _b.header, subHeader = _b.subHeader;
        var mode = Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["d"])(this);
        var hdrId = "alert-" + overlayIndex + "-hdr";
        var subHdrId = "alert-" + overlayIndex + "-sub-hdr";
        var msgId = "alert-" + overlayIndex + "-msg";
        var labelledById;
        if (header !== undefined) {
            labelledById = hdrId;
        }
        else if (subHeader !== undefined) {
            labelledById = subHdrId;
        }
        return (Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "dialog", "aria-modal": "true", style: {
                zIndex: "" + (20000 + overlayIndex),
            }, class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["g"])(this.cssClass)), (_a = {}, _a[mode] = true, _a['alert-translucent'] = this.translucent, _a)), onIonAlertWillDismiss: this.dispatchCancelHandler, onIonBackdropTap: this.onBackdropTap }, Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-backdrop", { tappable: this.backdropDismiss }), Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-wrapper" }, Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "alert-head" }, header && Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", { id: hdrId, class: "alert-title" }, header), subHeader && Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", { id: subHdrId, class: "alert-sub-title" }, subHeader)), Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { id: msgId, class: "alert-message", innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_6__["s"])(this.message) }), this.renderAlertInputs(labelledById), this.renderAlertButtons())));
    };
    Object.defineProperty(Alert.prototype, "el", {
        get: function () { return Object(_core_57385ee8_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert, "watchers", {
        get: function () {
            return {
                "buttons": ["buttonsChanged"],
                "inputs": ["inputsChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Alert, "style", {
        get: function () { return ".sc-ion-alert-ios-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-ios-h{display:none}.alert-top.sc-ion-alert-ios-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-ios{margin-top:0}.alert-sub-title.sc-ion-alert-ios, .alert-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-ios{margin-top:5px;font-weight:400}.alert-message.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-ios::-webkit-scrollbar, .alert-message.sc-ion-alert-ios::-webkit-scrollbar, .alert-radio-group.sc-ion-alert-ios::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-ios{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-ios{display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-ios, .alert-tappable.ion-focused.sc-ion-alert-ios{background:var(--ion-color-step-100,#e6e6e6)}.alert-button-inner.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.alert-checkbox-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios, .alert-input-disabled.sc-ion-alert-ios, .alert-radio-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{cursor:default;opacity:.5;pointer-events:none}.alert-tappable.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:normal;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:strict}.alert-button.sc-ion-alert-ios, .alert-checkbox.sc-ion-alert-ios, .alert-input.sc-ion-alert-ios, .alert-radio.sc-ion-alert-ios{outline:none}.alert-checkbox-icon.sc-ion-alert-ios, .alert-checkbox-inner.sc-ion-alert-ios, .alert-radio-icon.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-alert-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-100,#f9f9f9));--max-width:270px;font-size:14px}.alert-wrapper.sc-ion-alert-ios{border-radius:13px;-webkit-box-shadow:none;box-shadow:none;overflow:hidden}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){.alert-translucent.sc-ion-alert-ios-h .alert-wrapper.sc-ion-alert-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.9);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.alert-head.sc-ion-alert-ios{padding-left:16px;padding-right:16px;padding-top:12px;padding-bottom:7px;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-head.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-title.sc-ion-alert-ios{margin-top:8px;color:var(--ion-text-color,#000);font-size:17px;font-weight:600}.alert-sub-title.sc-ion-alert-ios{color:var(--ion-color-step-600,#666);font-size:14px}.alert-input-group.sc-ion-alert-ios, .alert-message.sc-ion-alert-ios{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:21px;color:var(--ion-text-color,#000);font-size:13px;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-input-group.sc-ion-alert-ios, .alert-message.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-message.sc-ion-alert-ios{max-height:240px}.alert-message.sc-ion-alert-ios:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:12px}.alert-input.sc-ion-alert-ios{border-radius:4px;margin-top:10px;padding-left:6px;padding-right:6px;padding-top:6px;padding-bottom:6px;border:.55px solid var(--ion-color-step-250,#bfbfbf);background-color:var(--ion-background-color,#fff);-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-input.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px}}.alert-input.sc-ion-alert-ios::-webkit-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-moz-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios:-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-clear{display:none}.alert-checkbox-group.sc-ion-alert-ios, .alert-radio-group.sc-ion-alert-ios{-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:240px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);overflow-y:auto;-webkit-overflow-scrolling:touch}.alert-tappable.sc-ion-alert-ios{height:44px}.alert-radio-label.sc-ion-alert-ios{padding-left:13px;padding-right:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;color:var(--ion-text-color,#000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-radio-label.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px}}[aria-checked=true].sc-ion-alert-ios .alert-radio-label.sc-ion-alert-ios{color:var(--ion-color-primary,#3880ff)}.alert-radio-icon.sc-ion-alert-ios{position:relative;-ms-flex-order:1;order:1;min-width:30px}[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:7px;top:-7px;position:absolute;width:6px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary,#3880ff)}[dir=rtl].sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios, [dir=rtl] .sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios, [dir=rtl].sc-ion-alert-ios [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:unset;right:unset;right:7px}.alert-checkbox-label.sc-ion-alert-ios{padding-left:13px;padding-right:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-text-color,#000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-checkbox-label.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px}}.alert-checkbox-icon.sc-ion-alert-ios{border-radius:50%;margin-left:16px;margin-right:6px;margin-top:10px;margin-bottom:10px;position:relative;width:24px;height:24px;border-width:1px;border-style:solid;border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)));background-color:var(--ion-item-background,var(--ion-background-color,#fff));contain:strict}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-checkbox-icon.sc-ion-alert-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:6px;margin-inline-end:6px}}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-icon.sc-ion-alert-ios{border-color:var(--ion-color-primary,#3880ff);background-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:9px;top:4px;position:absolute;width:5px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:1px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-background-color,#fff)}[dir=rtl].sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios, [dir=rtl] .sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios, [dir=rtl].sc-ion-alert-ios [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:unset;right:unset;right:9px}.alert-button-group.sc-ion-alert-ios{margin-right:-.55px;-ms-flex-wrap:wrap;flex-wrap:wrap}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-button-group.sc-ion-alert-ios{margin-right:unset;-webkit-margin-end:-.55px;margin-inline-end:-.55px}}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:0;-ms-flex:1 1 auto;flex:1 1 auto;min-width:50%;height:44px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);border-right:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);background-color:transparent;color:var(--ion-color-primary,#3880ff);font-size:17px;overflow:hidden}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child, [dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child, [dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:first-child{border-right:0}.alert-button.sc-ion-alert-ios:last-child{border-right:0;font-weight:700}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child, [dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child, [dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child{border-right:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2)}.alert-button.activated.sc-ion-alert-ios{background-color:rgba(var(--ion-text-color-rgb,0,0,0),.1)}"; },
        enumerable: true,
        configurable: true
    });
    return Alert;
}());
var buttonClass = function (button) {
    return Object.assign({ 'alert-button': true, 'ion-focusable': true, 'ion-activatable': true }, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["g"])(button.cssClass));
};



/***/ })

}]);
//# sourceMappingURL=5.js.map