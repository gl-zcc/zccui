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
  '.button {\n  background: none;\n  padding: 5px 9px;\n  border-radius: 4px;\n  border: none;\n  background: #d3d2ce;\n  color: #fff;\n  font-size: 14px;\n  margin-right: 10px;\n}\n.primary {\n  background: gold;\n}\n.red {\n  background: #d83232;\n}\n';
styleInject(css_248z);

console.log(css_248z);

function Button(props) {
  return /*#__PURE__*/ React__default['default'].createElement(
    'button',
    {
      className:
        css_248z.button +
        ' ' +
        (css_248z[props.type] ? css_248z[props.type] : css_248z.define),
    },
    props.children || 'button',
  );
}

exports.Button = Button;
exports.Foo = index;
