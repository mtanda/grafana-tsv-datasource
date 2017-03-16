'use strict';

System.register(['app/plugins/sdk'], function (_export, _context) {
  "use strict";

  var QueryCtrl, TsvDatasourceQueryCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  return {
    setters: [function (_appPluginsSdk) {
      QueryCtrl = _appPluginsSdk.QueryCtrl;
    }],
    execute: function () {
      _export('TsvDatasourceQueryCtrl', TsvDatasourceQueryCtrl = function (_QueryCtrl) {
        _inherits(TsvDatasourceQueryCtrl, _QueryCtrl);

        function TsvDatasourceQueryCtrl($scope, $injector, uiSegmentSrv) {
          _classCallCheck(this, TsvDatasourceQueryCtrl);

          var _this = _possibleConstructorReturn(this, (TsvDatasourceQueryCtrl.__proto__ || Object.getPrototypeOf(TsvDatasourceQueryCtrl)).call(this, $scope, $injector));

          _this.scope = $scope;
          _this.uiSegmentSrv = uiSegmentSrv;
          _this.target.target = _this.target.target || '';
          return _this;
        }

        return TsvDatasourceQueryCtrl;
      }(QueryCtrl));

      _export('TsvDatasourceQueryCtrl', TsvDatasourceQueryCtrl);

      TsvDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';
    }
  };
});
//# sourceMappingURL=query_ctrl.js.map
