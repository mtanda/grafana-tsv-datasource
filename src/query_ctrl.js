import {QueryCtrl} from 'app/plugins/sdk';

export class TsvDatasourceQueryCtrl extends QueryCtrl {
  constructor($scope, $injector, uiSegmentSrv) {
    super($scope, $injector);

    this.scope = $scope;
    this.uiSegmentSrv = uiSegmentSrv;
    this.target.target = this.target.target || '';
  }
}

TsvDatasourceQueryCtrl.templateUrl = 'partials/query.editor.html';
