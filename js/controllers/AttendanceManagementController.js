
/* Setup general page controller */
MetronicApp.controller('AttendanceManagementController', ['$rootScope', '$scope', '$filter', 'settings', '$modal', 'Scopes', 'createDialog', function($rootScope, $scope, $filter, settings, $modal, Scopes, createDialog) {
    $scope.$on('$viewContentLoaded', function() {   
    	// initialize core components
    	Metronic.initAjax();

    	// set default layout mode
        $rootScope.settings.layout.pageSidebarClosed = true;
    });
	
	$scope.frm = {};
	$scope.students = [
            { 
				id: 1,
                name: 'Avinash More', 
                present: 48,
				absent: 5,
				late: 5,
				excused: 2,
				school: 1,
				grade: 2,
				division: 1
            },
            { 
				id: 2,
                name: 'Pinky Mhatre ', 
                present: 52,
				absent: 5,
				late: 3,
				excused: 0,
				school: 1,
				grade: 1,
				division: 2
            },
            { 
				id: 3,
                name: 'Ram More', 
                present: 54,
				absent: 6,
				late: 0,
				excused: 0,
				school: 1,
				grade: 3,
				division: 2
            },
			{ 
				id: 4,
                name: 'Rohan Mhatre', 
                present: 58,
				absent: 1,
				late: 0,
				excused: 1,
				school: 1,
				grade: 3,
				division: 1
            },
			{ 
				id: 5,
                name: 'Ajith W', 
                present: 40,
				absent: 15,
				late: 2,
				excused: 3,
				school: 3,
				grade: 2,
				division: 2
            },
			{ 
				id: 6,
                name: 'Suresh Sam', 
                present: 56,
				absent: 0,
				late: 4,
				excused: 0,
				school: 3,
				grade: 2,
				division: 1
            },
			{ 
				id: 7,
                name: 'Rakesh Tape', 
                present: 44,
				absent: 6,
				late: 5,
				excused: 5,
				school: 2,
				grade: 3,
				division: 2
            },
			{ 
				id: 8,
                name: 'Lokesh Anand', 
                present: 60,
				absent: 0,
				late: 0,
				excused: 0,
				school: 2,
				grade: 3,
				division: 1
            },
			{ 
				id: 9,
                name: 'Deepthi U', 
                present: 58,
				absent: 0,
				late: 0,
				excused: 2,
				school: 2,
				grade: 1,
				division: 2
            }
        ];
	
	
	/* Start Dropdown filter of listing */
	$scope.filterOptions = [{
		schools: [
		  {id : 0, name : 'Show All' },
		  {id : 1, name : 'Kidzee Malad' },
		  {id : 2, name : 'Kidzee Goregaon' },
		  {id : 3, name : 'Kidzee Kandivli' }
		]
	  },
	  {
		grades: [
			{id : 0, name : 'Show All' },
			{ id: 1, name: 'Play Group' }, 
			{ id: 2, name: 'Nursery' },
			{ id: 3, name: 'Kindergarten' }
		]  
	  },
	  {
		divisions: [
			{id : 0, name : 'Show All' },
			{ id: 1, name: 'A' }, 
			{ id: 2, name: 'B' },
			{ id: 3, name: 'C' },
			{ id: 4, name: 'D' },
			{ id: 5, name: 'E' }
		]
	  }];
	  
	 $scope.filterSchool = {
		school: $scope.filterOptions[0].schools[0]
	  };
	  
	$scope.customSchoolFilter = function (data) {
		if (data.school === $scope.filterSchool.school.id) {
		  return true;
		} else if ($scope.filterSchool.school.id === 0) {
		  return true;
		} else {
		  return false;
		}
	};
	
	$scope.filterGrade = {
		grade: $scope.filterOptions[1].grades[0]
	  };
	  
	$scope.customGradeFilter = function (data) {
		if (data.grade === $scope.filterGrade.grade.id) {
		  return true;
		} else if ($scope.filterGrade.grade.id === 0) {
		  return true;
		} else {
		  return false;
		}
	};
	
	$scope.filterDivision = {
		division: $scope.filterOptions[2].divisions[0]
	  };
	  
	$scope.customDivisionFilter = function (data) {
		if (data.division === $scope.filterDivision.division.id) {
		  return true;
		} else if ($scope.filterDivision.division.id === 0) {
		  return true;
		} else {
		  return false;
		}
	};
	/* End */
	
	$scope.grades = [
            { id: 1, name: 'Play Group' }, 
			{ id: 2, name: 'Nursery' },
			{ id: 3, name: 'Kindergarten' }
        ];
	$scope.divisions = [
            { id: 1, name: 'A' }, 
			{ id: 2, name: 'B' },
			{ id: 3, name: 'C' },
			{ id: 4, name: 'D' },
			{ id: 5, name: 'E' }
        ];
		
	$scope.deleteParentView = function (pid, name, type) {
		createDialog({
            id: 'delView',
			template:  angular.element(
                    '<div class="row-fluid">' +
                    ' <div>' +
                    '   <div class="codebox" style="text-align:center;">' +
                    '    <h4>Are you sure you want to delete '+type+' <b>"'+name+'"</b>?</h4> ' +
                    '   </div>\n' +
                    ' </div>\n' +
                    '</div>'),
            title: 'Delete '+type,
            backdrop: true,
            footerTemplate: ' <div style="width:100%; padding:5px 5px 25px 5px; text-align:center;">' +
                    '<button class="btn btn-sm green"  ng-click="$modalSuccess()">Ok</button><button class="btn btn-sm red" style="margin-left:10px;" ng-click="$modalCancel()">Cancel</button>' +
                    '</div>',
            success: {label: 'Save', fn: function () {
                    console.log('Ok')
                }}
        }
        );
    };
	
	$scope.addAttend = false;
	$scope.editAttend = false;
	
	$scope.selectedDay = [];
	var now = new Date();
	$scope.currDay = now.getUTCDate();
	
	$scope.selectDate = function() {
		
		$scope.selectedDay = $filter('date')($scope.dt, 'd');
		if($scope.selectedDay < $scope.currDay)
		{
			$scope.editAttend = true;
			$scope.addAttend = false;
		}
		else
		{
			$scope.addAttend = true;
			$scope.editAttend = false;
		}
	};
	$scope.toggleMin = function() {
		//$scope.minDate = $scope.minDate ? null : new Date();
		$scope.maxDate = $scope.maxDate ? null : new Date();
	};
	$scope.toggleMin();
	
	
	
}]);

MetronicApp.filter('sumOfValue', function () {
    return function (data, key) {
		if (typeof (data) === 'undefined' && typeof (key) === 'undefined') {
			return 0;
		}
		var sum = 0;
		for (var i = 0; i < data.length; i++) {
			sum = sum + parseInt(data[i][key]);
		}
		return sum;
	}
});