
/* Setup general page controller */
MetronicApp.controller('SupportSettingsController', ['$rootScope', '$scope', '$filter', 'settings', 'createDialog', function($rootScope, $scope, $filter, settings, createDialog) {
    $scope.$on('$viewContentLoaded', function() {   
    	// initialize core components
    	Metronic.initAjax();

    	// set default layout mode
        $rootScope.settings.layout.pageSidebarClosed = true;
    });
	
	$scope.frm = {};
	$scope.topicst = true;
	$scope.reportst = false;
	$scope.checkedRep=false;
	$scope.sforms = [
            { 
				id: 1,
				name: 'Form 1',
				date_added: '01/09/2015',
				date_submitted: '01/09/2015'
            },
			{ 
				id: 2,
				name: 'Leave Application Form',
				date_added: '31/08/2015',
				date_submitted: '01/09/2015'
            },
			{ 
				id: 3,
				name: 'School Transfer Form',
				date_added: '31/08/2015',
				date_submitted: '31/08/2015'
            },
			{ 
				id: 4,
				name: 'Transport Request Form',
				date_added: '30/08/2015',
				date_submitted: '30/08/2015'
            }
        ];
	
	
	$scope.checkedIndexs = [];
	$scope.selectedAll= false;
	$scope.checkAll = function () {
		$scope.selectedTemplate = {};
		$scope.checkedIndexs = [];
        if ($scope.selectedAll) {
            $scope.selectedAll = true;

        } else {
            $scope.selectedAll = false;
            $scope.checkedIndexs.length = 0;
        }
        angular.forEach($scope.sforms, function (form, key) {
            if ($scope.selectedAll) {
                $scope.checkedIndexs.push($scope.sforms[key].id);
            }
            form.checked = $scope.selectedAll;
        });
    };
	
	$scope.checkedRow = function (id) {
		$scope.selectedTemplate = {};
		if ($scope.checkedIndexs.indexOf(id) === -1) {
            $scope.checkedIndexs.push(id);
        }
        else {
            $scope.checkedIndexs.splice($scope.checkedIndexs.indexOf(id), 1);
        }
	};
	
	$scope.closeRight = function() {
		$scope.selectedTemplate = {};
		$scope.checkedIndexs = [];
		$scope.selectedAll= false;
		angular.forEach($scope.sforms, function (form, key) {
           form.checked = false;
        });
		$scope.checkedIndexs.length = 0;
	}
	
	$scope.datepickerOptions = {
		format: 'dd/mm/yyyy',
		startDate: "2015-08-01",
		autoclose: true,
		weekStart: 0
	};
		
}]);
