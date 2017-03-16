'use strict';

System.register(['./datasource', './query_ctrl'], function (_export, _context) {
  "use strict";

  var TsvDatasource, TsvDatasourceQueryCtrl, TsvConfigCtrl, TsvQueryOptionsCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_datasource) {
      TsvDatasource = _datasource.TsvDatasource;
    }, function (_query_ctrl) {
      TsvDatasourceQueryCtrl = _query_ctrl.TsvDatasourceQueryCtrl;
    }],
    execute: function () {
      _export('ConfigCtrl', TsvConfigCtrl = function TsvConfigCtrl() {
        _classCallCheck(this, TsvConfigCtrl);
      });

      TsvConfigCtrl.templateUrl = 'partials/config.html';

      _export('QueryOptionsCtrl', TsvQueryOptionsCtrl = function TsvQueryOptionsCtrl() {
        _classCallCheck(this, TsvQueryOptionsCtrl);
      });

      TsvQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

      _export('Datasource', TsvDatasource);

      _export('QueryCtrl', TsvDatasourceQueryCtrl);

      _export('ConfigCtrl', TsvConfigCtrl);

      _export('QueryOptionsCtrl', TsvQueryOptionsCtrl);
    }
  };
});
//# sourceMappingURL=module.js.map
