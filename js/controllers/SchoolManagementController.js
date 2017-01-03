/* Setup general page controller */
MetronicApp.controller('SchoolManagementController', ['$rootScope', '$scope', 'settings', 'createDialog', function($rootScope, $scope, settings, createDialog) {
    $scope.$on('$viewContentLoaded', function() {   
    	// initialize core components
    	Metronic.initAjax();

    	// set default layout mode
        $rootScope.settings.layout.pageSidebarClosed = true;
    });
	
	
	$scope.schools = [
            { 
				id: 1,
                name: 'Kidzee Kandivli', 
                address: '#05, Street',
				city: 'Kandivli',
				state: 'Maharashtra',
				school_id: 'KID1234',
				phone: 9875463211,
				email: 'kkidzee@kidzee.com',
				capacity: 250,
				grade: 'CBSE'
            },
            { 
				id: 2,
                name: 'Kidzee Malad', 
                address: '#07, Street',
				city: 'Malad',
				state: 'Maharashtra',
				school_id: 'KID1235',
				phone: 9854321123,
				email: 'mkidzee@kidzee.com',
				capacity: 300,
				grade: 'ICSE'
            },
            { 
				id: 3,
                name: 'Kidzee Goregaon', 
                address: '#17, Street',
				city: 'Goregaon',
				state: 'Maharashtra',
				school_id: 'KID1236',
				phone: 9854321987,
				email: 'gkidzee@kidzee.com',
				capacity: 500,
				grade: 'CBSE'
            }
        ];
	
	$scope.checkedIndexs = [];
	$scope.selectedAll= false;
	$scope.checkAll = function () {
		$scope.selectedTemplate = {};
		$scope.checkedIndexs = [];
        if ($scope.selectedAll) {

            $scope.selectedAll = true;
            $scope.enableDelete = true;

        } else {
            $scope.selectedAll = false;
            $scope.enableDelete = false;
            $scope.checkedIndexs.length = 0;
        }
        angular.forEach($scope.schools, function (school, key) {
            if ($scope.selectedAll) {
                $scope.checkedIndexs.push($scope.schools[key].id);
            }
            school.checked = $scope.selectedAll;
        });
    };
	
	$scope.checkedSchool = function (schoolid) {
		$scope.selectedTemplate = {};
		if ($scope.checkedIndexs.indexOf(schoolid) === -1) {
			$scope.checkedIndexs.push(schoolid);
            $scope.enableDelete = true;
        }
        else {
            $scope.checkedIndexs.splice($scope.checkedIndexs.indexOf(schoolid), 1);
            if ($scope.checkedIndexs.length === 0) {
                $scope.enableDelete = false;
            }
        }
	};
	
	$scope.filterOptions = {
		cities: [
		  {id : 2, name : 'Show All' },
		  {id : 3, name : 'Malad' },
		  {id : 4, name : 'Goregaon' },
		  {id : 5, name : 'Kandivli' }
		]
	  };
	  
	 $scope.filterItem = {
		city: $scope.filterOptions.cities[0]
	  };
	  
	$scope.customFilter = function (data) {
		if (data.city === $scope.filterItem.city.name) {
		  return true;
		} else if ($scope.filterItem.city.name === "Show All") {
		  return true;
		} else {
		  return false;
		}
	};
	
	$scope.selectedTemplate = {};
	$scope.getRandomSpan = Math.floor((Math.random()*1000)+1);
	
	$scope.grades = [
					{
						id: 1,
						name: 'SSE'
					},
					{
						id: 2,
						name: 'ICSE'
					},
					{
						id: 3,
						name: 'CBSE'
					}
				];	
	$scope.frm = {};
	$scope.frm.grade = $scope.grades[2].id;
				
	$scope.accessrules = [
						{ 
							id:1,
							name: 'User Management',
							perms: [{"view":"View", "add":"Add", "edit":"Edit", "del":"Delete"}]
		
						},
						{ 
							id:2,
							name: 'School Management',
							perms: [{"view":"View", "add":"Add", "edit":"Edit", "del":"Delete"}]
		
						},
						{ 
							id:3,
							name: 'Student Management',
							perms: [{"view":"View", "add":"Add", "edit":"Edit", "del":"Delete"}]
		
						},
						{ 
							id:4,
							name: 'Parents Management',
							perms: [{"view":"View", "add":"Add", "edit":"Edit", "del":"Delete"}]
		
						},
						{ 
							id:5,
							name: 'Calendar Management',
							perms: [{"view":"View", "add":"Add", "edit":"Edit", "del":"Delete"}]
		
						},
						{ 
							id:6,
							name: 'Transport Management',
							perms: [{"view":"View", "add":"Add", "edit":"Edit", "del":"Delete"}]
		
						},
						{ 
							id:7,
							name: 'Attendance Management',
							perms: [{"view":"View", "add":"Add", "edit":"Edit", "del":"Delete"}]
		
						},
						{ 
							id:8,
							name: 'Communication Management',
							perms: [{"view":"View", "add":"Add", "edit":"Edit", "del":"Delete"}]
		
						},
						{ 
							id:9,
							name: 'Learning Centre Management',
							perms: [{"view":"View", "add":"Add", "edit":"Edit", "del":"Delete"}]
		
						},
						{ 
							id:10,
							name: 'Progress Report Management',
							perms: [{"view":"View", "add":"Add", "edit":"Edit", "del":"Delete"}]
		
						},
						{ 
							id:11,
							name: 'Media Centre Management',
							perms: [{"view":"View", "add":"Add", "edit":"Edit", "del":"Delete"}]
		
						}
	];
	
	$scope.deleteSchoolView = function (pid, name) {
		createDialog({
            id: 'delSchool',
			template:  angular.element(
                    '<div class="row-fluid">' +
                    ' <div>' +
                    '   <div class="codebox" style="text-align:center;">' +
                    '    <h4>Are you sure you want to delete School <b>"'+name+'"</b>?</h4> ' +
                    '   </div>\n' +
                    ' </div>\n' +
                    '</div>'),
            title: 'Delete School',
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

	
}]);
