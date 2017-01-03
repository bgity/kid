
/* Setup general page controller */
MetronicApp.controller('FeesManagementController', ['$rootScope', '$scope', '$filter', 'settings', function($rootScope, $scope, $filter, settings) {
    $scope.$on('$viewContentLoaded', function() {   
    	// initialize core components
    	Metronic.initAjax();

    	// set default layout mode
        $rootScope.settings.layout.pageSidebarClosed = true;
    });
	
	$scope.frm = {};
	$scope.closeWind = false;
	$scope.editFee = false;
	$scope.students = [
            { 
				id:1,
				student_id:'STU1234',
				name: 'Avinash More',
				grade: 'Nursery',
				division: 'A',
				school: 1,
				parents:[
					{
						id:'PA1332',
						name: 'Prashant More',
						relation: 'father'
					},
					{
						id:'PA1333',
						name: 'Suman More',
						relation: 'mother'
					}
				],
				status: 1,
				terms: [
					{
						name:'Term 1',
						status: 1
					},
					{
						name:'Term 2',
						status: 1
					},
					{
						name:'Term 3',
						status: 0
					},
					{
						name:'Term 4',
						status: 0
					}
				]
			},
			{
				id:2,
				student_id:'STU9879',
				name: 'Ram More',
				grade: 'KG',
				division: 'B',
				school: 1,
				parents:[
					{
						id:'PA1332',
						name: 'Prashant More',
						relation: 'father'
					},
					{
						id:'PA1333',
						name: 'Suman More',
						relation: 'mother'
					}
				],
				status:2,
				terms: [
					{
						name:'Term 1',
						status: 1
					},
					{
						name:'Term 2',
						status: 3
					},
					{
						name:'Term 3',
						status: 0
					},
					{
						name:'Term 4',
						status: 0
					}
				]
			},
			{
				id:3,
				student_id:'STU1235',
				name: 'Pinky Mhatre',
				grade: 'PG',
				division: 'B',
				school: 1,
				parents:[
					{
						id:'PA1334',
						name: 'Deepak Mhatre',
						relation: 'father'
					},
					{
						id:'PA1335',
						name: 'Seema Mhatre',
						relation: 'mother'
					}
				],
				status:2,
				terms: [
					{
						name:'Term 1',
						status: 1
					},
					{
						name:'Term 2',
						status: 3
					},
					{
						name:'Term 3',
						status: 0
					},
					{
						name:'Term 4',
						status: 0
					}
				]
			},
			{
				id:4,
				student_id:'STU888',
				name: 'Rohan Mhatre',
				grade: 'KG',
				division: 'A',
				school: 1,
				parents:[
					{
						id:'PA1334',
						name: 'Deepak Mhatre',
						relation: 'father'
					},
					{
						id:'PA1335',
						name: 'Seema Mhatre',
						relation: 'mother'
					}
				],
				status:3,
				terms: [
					{
						name:'Term 1',
						status: 3
					},
					{
						name:'Term 2',
						status: 3
					},
					{
						name:'Term 3',
						status: 0
					},
					{
						name:'Term 4',
						status: 0
					}
				]
			}
		];
	
	
	$scope.checkedIndexs = [];
	$scope.selectedAll= false;
	$scope.checkAll = function () {
		$scope.closeWind = true;
		$scope.checkedIndexs = [];
        if ($scope.selectedAll) {
            $scope.selectedAll = true;

        } else {
            $scope.selectedAll = false;
            $scope.checkedIndexs.length = 0;
        }
        angular.forEach($scope.students, function (parent, key) {
            if ($scope.selectedAll) {
                $scope.checkedIndexs.push($scope.students[key].id);
            }
            parent.checked = $scope.selectedAll;
        });
    };
	
	$scope.checkedStudent = function (studentid) {
		$scope.closeWind = false;
		if ($scope.checkedIndexs.indexOf(studentid) === -1) {
            $scope.checkedIndexs.push(studentid);
            $scope.enableDelete = true;
        }
        else {
            $scope.checkedIndexs.splice($scope.checkedIndexs.indexOf(studentid), 1);
            if ($scope.checkedIndexs.length === 0) {
                $scope.enableDelete = false;
            }
        }
	};
	
	/* Start Dropdown filter of listing */
	$scope.filterOptions = {
		schools: [
		  {id : 0, name : 'Show All' },
		  {id : 1, name : 'Kidzee Malad' },
		  {id : 2, name : 'Kidzee Goregaon' },
		  {id : 3, name : 'Kidzee Kandivli' }
		]
	  };
	  
	 $scope.filterItem = {
		school: $scope.filterOptions.schools[0]
	  };
	  
	$scope.customFilter = function (data) {
		if (data.school === $scope.filterItem.school.id) {
		  return true;
		} else if ($scope.filterItem.school.id === 0) {
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
		
	$scope.closeWindow = function()
	{
		$scope.closeWind = true;
		$scope.checkedIndexs = [];
		console.log("ads")
	}
	
}]);
