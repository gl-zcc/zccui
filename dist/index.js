'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e };
}

var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);

var index = function (_ref) {
  var title = _ref.title;
  return /*#__PURE__*/ React__default['default'].createElement(
    'h1',
    null,
    title,
  );
};

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z =
  '.index_button__upLUq {\n  background: none;\n  padding: 5px 9px;\n  border-radius: 4px;\n  border: none;\n  background: #d3d2ce;\n  color: #fff;\n  font-size: 14px;\n  margin-right: 10px;\n}\n.index_primary__22HXE {\n  background: gold;\n}\n.index_red__1-Y-1 {\n  background: #d83232;\n}\n';
var styles = {
  button: 'index_button__upLUq',
  primary: 'index_primary__22HXE',
  red: 'index_red__1-Y-1',
};
styleInject(css_248z);

console.log(styles);

function Button(props) {
  return /*#__PURE__*/ React__default['default'].createElement(
    'button',
    {
      className:
        styles.button +
        ' ' +
        (styles[props.type] ? styles[props.type] : styles.define),
    },
    props.children || 'button',
  );
}

exports.Button = Button;
exports.Foo = index;
