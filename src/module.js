import {TsvDatasource} from './datasource';
import {TsvDatasourceQueryCtrl} from './query_ctrl';

class TsvConfigCtrl {}
TsvConfigCtrl.templateUrl = 'partials/config.html';

class TsvQueryOptionsCtrl {}
TsvQueryOptionsCtrl.templateUrl = 'partials/query.options.html';

export {
  TsvDatasource as Datasource,
  TsvDatasourceQueryCtrl as QueryCtrl,
  TsvConfigCtrl as ConfigCtrl,
  TsvQueryOptionsCtrl as QueryOptionsCtrl
};
