/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Checkbox field.  Checked or not checked.
 * @author fraser@google.com (Neil Fraser)
 */
"use strict";

goog.provide("Blockly.FieldCheckbox");

goog.require("Blockly.Field");

/**
 * Class for a checkbox field.
 * @param {string} state The initial state of the field ('TRUE' or 'FALSE').
 * @param {Function=} opt_validator A function that is executed when a new
 *     option is selected.  Its sole argument is the new checkbox state.  If
 *     it returns a value, this becomes the new checkbox state, unless the
 *     value is null, in which case the change is aborted.
 * @extends {Blockly.Field}
 * @constructor
 */
Blockly.FieldCheckbox = function(state, opt_validator) {
  Blockly.FieldCheckbox.superClass_.constructor.call(this, "", opt_validator);
  // Set the initial state.
  this.setValue(state);
  this.addArgType("checkbox");
};
goog.inherits(Blockly.FieldCheckbox, Blockly.Field);

/**
 * Character for the checkmark.
 */
Blockly.FieldCheckbox.CHECK_CHAR = "\u2713";

/**
 * Mouse cursor style when over the hotspot that initiates editability.
 */
Blockly.FieldCheckbox.prototype.CURSOR = "default";

/**
 * Install this checkbox on a block.
 */

/**
 * Size of a checkbox next to a variable reporter.
 * @type {number}
 * @const
 */
Blockly.FieldCheckbox.prototype.CHECKBOX_SIZE = 16;

/**
 * SVG path data for checkmark in checkbox.
 * @type {string}
 * @const
 */
Blockly.FieldCheckbox.prototype.CHECKMARK_PATH =
  "M" +
  Blockly.FieldCheckbox.prototype.CHECKBOX_SIZE / 4 +
  " " +
  Blockly.FieldCheckbox.prototype.CHECKBOX_SIZE / 2 +
  "L" +
  5 * Blockly.FieldCheckbox.prototype.CHECKBOX_SIZE / 12 +
  " " +
  2 * Blockly.FieldCheckbox.prototype.CHECKBOX_SIZE / 3 +
  "L" +
  3 * Blockly.FieldCheckbox.prototype.CHECKBOX_SIZE / 4 +
  " " +
  Blockly.FieldCheckbox.prototype.CHECKBOX_SIZE / 3;

/**
 * Size of the checkbox corner radius
 * @type {number}
 * @const
 */
Blockly.FieldCheckbox.prototype.CHECKBOX_CORNER_RADIUS = 5;

Blockly.FieldCheckbox.prototype.init = function() {
  if (this.fieldGroup_) {
    // Checkbox has already been initialized once.
    return;
  }
  Blockly.FieldCheckbox.superClass_.init.call(this);
  // The checkbox doesn't use the inherited text element.
  // Instead it uses a custom checkmark element that is either visible or not.
  // this.checkElement_ = Blockly.utils.createSvgElement('text',
  //     {'class': 'blocklyText blocklyCheckbox', 'x': -3, 'y': 14},
  //     this.fieldGroup_);

  this.checkElement_ = Blockly.utils.createSvgElement(
    "rect",
    {
      class: "blocklyFlyoutCheckboxPath",
      x: -3,
      y: 7,
      height: this.CHECKBOX_SIZE+2,
      width: this.CHECKBOX_SIZE+2,
      rx: this.CHECKBOX_CORNER_RADIUS,
      ry: this.CHECKBOX_CORNER_RADIUS,
      fill: "#FFF"
    },
    this.fieldGroup_
  );
  Blockly.utils.createSvgElement(
    "rect",
    {
      x: -1,
      y: 9,
      height: this.CHECKBOX_SIZE-2,
      width: this.CHECKBOX_SIZE-2,
      rx: this.CHECKBOX_CORNER_RADIUS,
      ry: this.CHECKBOX_CORNER_RADIUS,
      fill: "#3949AB"
    },
    this.fieldGroup_
  );
  // <use xlink:href="#one"/>
  // var textNode = document.createTextNode(Blockly.FieldCheckbox.CHECK_CHAR);
  // var textNode = document.createTextNode(this.checkElement_);
  // var textNode = document.createTextNode('xlink:href="#one"');

  // this.checkElement_.appendChild(textNode);
  this.checkElement_.style.display = this.state_ ? "block" : "none";
};

/**
 * Return 'TRUE' if the checkbox is checked, 'FALSE' otherwise.
 * @return {string} Current state.
 */
Blockly.FieldCheckbox.prototype.getValue = function() {
  return String(this.state_).toUpperCase();
};

/**
 * Set the checkbox to be checked if newBool is 'TRUE' or true,
 * unchecks otherwise.
 * @param {string|boolean} newBool New state.
 */
Blockly.FieldCheckbox.prototype.setValue = function(newBool) {
  var newState =
    typeof newBool == "string" ? newBool.toUpperCase() == "TRUE" : !!newBool;
  if (this.state_ !== newState) {
    if (this.sourceBlock_ && Blockly.Events.isEnabled()) {
      Blockly.Events.fire(
        new Blockly.Events.BlockChange(
          this.sourceBlock_,
          "field",
          this.name,
          this.state_,
          newState
        )
      );
    }
    this.state_ = newState;
    if (this.checkElement_) {
      this.checkElement_.style.display = newState ? "block" : "none";
    }
  }
};

/**
 * Toggle the state of the checkbox.
 * @private
 */
Blockly.FieldCheckbox.prototype.showEditor_ = function() {
  var newState = !this.state_;
  if (this.sourceBlock_) {
    // Call any validation function, and allow it to override.
    newState = this.callValidator(newState);
  }
  if (newState !== null) {
    this.setValue(String(newState).toUpperCase());
  }
};
