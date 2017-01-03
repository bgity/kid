
/* Setup general page controller */
MetronicApp.controller('UserManagementController', ['$rootScope', '$scope', '$filter', 'settings', '$modal', 'Scopes', 'createDialog', function($rootScope, $scope, $filter, settings, $modal, Scopes, createDialog) {
    $scope.$on('$viewContentLoaded', function() {   
    	// initialize core components
    	Metronic.initAjax();

    	// set default layout mode
        $rootScope.settings.layout.pageSidebarClosed = true;
    });
	
	$scope.frm = {};
	$scope.selectedTemplate = {};
	$scope.userst = true;
	$scope.users = [
            { 
				id: 1,
                firstname: 'John', 
                lastname: 'Smith',
				role: 'School Admin',
				position: 'Manager',
				address: '#05, Street',
				city: 'Kandivli',
				state: 'Maharashtra',
				school: 'Kidzee Kandivli',
				phone: 9875463211,
				email: 'john@gmail.com'
            },
            { 
				id: 2,
                firstname: 'Rakesh', 
                lastname: 'Maria',
				role: 'School Admin',
				position: 'Principal',
				address: '#07, Street',
				city: 'Goregaon',
				state: 'Maharashtra',
				school: 'Kidzee Goregaon',
				phone: 9854321123,
				email: 'rakesh@yahoo.com'
            },
            { 
				id: 3,
                firstname: 'Rahul', 
                lastname: 'Rohan',
				role: 'School Admin',
				position: 'Vice Principal',
				address: '#15, Street',
				city: 'Goregaon',
				state: 'Maharashtra',
				school: 'Kidzee Goregaon',
				phone: 9874747474,
				email: 'rahul@gmail.com'
            },
			{ 
				id: 4,
                firstname: 'Maria', 
                lastname: 'Joseph',
				role: 'Teacher',
				position: 'Teacher',
				address: '#05, Street',
				city: 'Malad',
				state: 'Maharashtra',
				school: 'Kidzee Malad',
				phone: 98705050132,
				email: 'maria@hotmail.com'
            },
			{ 
				id: 5,
                firstname: 'Rahul', 
                lastname: 'Ram',
				role: 'School Admin',
				position: 'Admin',
				address: '#09, Street',
				city: 'Malad',
				state: 'Maharashtra',
				school: 'Kidzee Malad',
				phone: 9638527411,
				email: 'rahulram@gmail.com'
            },
			{ 
				id: 6,
                firstname: 'Sam', 
                lastname: 'T',
				role: 'Teacher',
				position: 'Teacher',
				address: '#05, Street',
				city: 'Borivli',
				state: 'Maharashtra',
				school: 'Kidzee Kandivli',
				phone: 9820636353,
				email: 'samt@gmail.com'
            },
			{ 
				id: 7,
                firstname: 'Raghav', 
                lastname: 'Patel',
				role: 'Teacher',
				position: 'Teacher',
				address: '#01, Street',
				city: 'Malad',
				state: 'Maharashtra',
				school: 'Kidzee Kandivli',
				phone: 9845562315,
				email: 'raghavr@gmail.com'
            },
        ];
	
	$scope.roles = [
					{
						id: 1,
						name: 'Franchisee'
		
					},
					{
						id: 2,
						name: 'School Admin'
		
					},
					{
						id: 3,
						name: 'Teacher'
		
					}
				];
	$scope.frm.role = $scope.roles[1].id;
	
	Scopes.store('UserManagementController', $scope);;
	
	/* For Users */
	
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
        angular.forEach($scope.users, function (user, key) {
            if ($scope.selectedAll) {
                $scope.checkedIndexs.push($scope.users[key].id);
            }
            user.checked = $scope.selectedAll;
        });
    };
	//$scope.checkAll = UserCheck.checkedIndexes($scope.users, $scope.selectedAll, $scope.checkedIndexs);
	//console.log($scope.checkAll);
	
	//$scope.checkAll = MyFactory.setTest;
	
	$scope.checkedUser = function (userid) {
		$scope.selectedTemplate = {};
		if ($scope.checkedIndexs.indexOf(userid) === -1) {
            $scope.checkedIndexs.push(userid);
            $scope.enableDelete = true;
        }
        else {
            $scope.checkedIndexs.splice($scope.checkedIndexs.indexOf(userid), 1);
            if ($scope.checkedIndexs.length === 0) {
                $scope.enableDelete = false;
            }
        }
	};
	
	$scope.filterOptions = {
		schools: [
		  {id : 2, name : 'Show All' },
		  {id : 3, name : 'Kidzee Malad' },
		  {id : 4, name : 'Kidzee Goregaon' },
		  {id : 5, name : 'Kidzee Kandivli' }
		]
	  };
	  
	 $scope.filterItem = {
		school: $scope.filterOptions.schools[0]
	  };
	  
	$scope.customFilter = function (data) {
		if (data.school === $scope.filterItem.school.name) {
		  return true;
		} else if ($scope.filterItem.school.name === "Show All") {
		  return true;
		} else {
		  return false;
		}
	};
	
	/* For groups */
	$scope.checkedGrpIndexs = [];
	$scope.selectedGrpAll= false;
	$scope.checkAllGrp = function () {
		console.log($scope.selectedGrpAll)
		$scope.checkedGrpIndexs = [];
        if ($scope.selectedGrpAll) {

            $scope.selectedGrpAll = true;
            $scope.enableDelete = true;

        } else {
            $scope.selectedGrpAll = false;
            $scope.enableDelete = false;
            $scope.checkedGrpIndexs.length = 0;
        }
		
		console.log($scope.groups)
                
        angular.forEach($scope.groups, function (group, key) {
            if ($scope.selectedGrpAll) {
				$scope.checkedGrpIndexs.push($scope.groups[key].id);
            }
			
            group.checked = $scope.selectedGrpAll;
			console.log(group.checked)
        });
    };
	$scope.groups = [
            
			{ 
				id: 1,
                name: 'Kidzee Principals', 
                members_count: 3,
				members: [{
							id: 2,
							firstname:'Rakesh',
							lastname:'Maria',
							role: 'School Admin'
						},
						{
							id: 3,
							firstname:'Rahul',
							lastname:'Rohan',
							role: 'School Admin'
						},
						{
							id: 5,
							firstname:'Rahul',
							lastname:'Ram',
							role: 'School Admin'
						}]
            },
			{ 
				id: 2,
                name: 'Kidzee Managers', 
                members_count: 1,
				members: [{
							id: 1,
							firstname:'John',
							lastname:'Smith',
							role: 'School Admin'
						}]
            },
			{ 
				id: 3,
                name: 'Kidzee Teachers', 
                members_count: 3,
				members: [{
							id: 4,
							firstname:'Maria',
							lastname:'Joseph',
							role: 'Teacher'
						},
						{
							id: 6,
							firstname:'Sam',
							lastname:'T',
							role: 'Teacher'
						},
						{
							id: 7,
							firstname:'Raghav',
							lastname:'Patel',
							role: 'Teacher'
						}]
            },
			{ 
				id: 4,
                name: 'Kidzee Admins', 
                members_count: 1,
				members: [{
							id: 5,
							firstname:'Rahul',
							lastname:'Ram',
							role: 'School Admin'
						}]
            }
		]
		
	$scope.checkedGroup = function (groupid) {
		if ($scope.checkedGrpIndexs.indexOf(groupid) === -1) {
            $scope.checkedGrpIndexs.push(groupid);
            $scope.enableDelete = true;
        }
        else {
            $scope.checkedGrpIndexs.splice($scope.checkedGrpIndexs.indexOf(groupid), 1);
            if ($scope.checkedGrpIndexs.length === 0) {
                $scope.enableDelete = false;
            }
        }
	};
	
	/* For Group Members */
	$scope.checkedMemIndexs = [];
	$scope.selectedMemAll= false;
	$scope.checkMemAll = function () {
		$scope.checkedMemIndexs = [];
        
		angular.forEach($scope.groups[$scope.checkedGrpIndexs-1].members, function (member, key) {
			
			if ($scope.selectedMemAll) {
				$scope.checkedMemIndexs.push($scope.groups[$scope.checkedGrpIndexs-1].members[key].id);
            }
			member.checked = $scope.selectedMemAll;
        });
    };
	
	$scope.checkedMember = function (memberid) {
		if ($scope.checkedMemIndexs.indexOf(memberid) === -1) {
            $scope.checkedMemIndexs.push(memberid);
            $scope.enableDelete = true;
        }
        else {
            $scope.checkedMemIndexs.splice($scope.checkedMemIndexs.indexOf(memberid), 1);
            if ($scope.checkedMemIndexs.length === 0) {
                $scope.enableDelete = false;
            }
        }
	};
	
	
	/* For Modal */
	$scope.open = function (size) {
		
		var modalInstance = $modal.open({
		  templateUrl: 'myModalContent.html',
		  controller: 'ModalInstanceCtrl',
		  size: size,
		  resolve: {
			items: function () {
			  return $scope.users;
			}
		  }
		});

		/*modalInstance.result.then(function (selectedItem) {
		  $scope.selected = selectedItem;
		}, function () {
		  $log.info('Modal dismissed at: ' + new Date());
		});*/
	};
	
	
	/* For Access */
	$scope.accessrules = [
						{ 
							id:1,
							name: 'User Management',
							perms: [
									{id:1, name:"Create a new Super Admin", access:0, tip: 'Add a new Super Admin to the application.'}, 
									{id:2, name:"Create admin users", access:1, tip: 'Add a new admin to the application.'}, 
									{id:3, name:"Manage Roles", access:1, tip: 'Manage the roles of all the users on the application.'}, 
									{id:4, name:"Manage Users", access:3, tip: 'Manage the details of all the users on the application.'}, 
									{id:5, name:"Manage Access Rights", access:2, tip: 'Allows to customise the access to the module depending on the role/position of the user in the system. For example parents may be denied access to the same amount of modules give to a teacher or an admin.'}, 
									{id:6, name:"Group Management", access:3, tip: 'Manage all the groups that have been created on a particular school\'s application.'}
									]
		
						},
						{ 
							id:2,
							name: 'School Management',
							perms: [{id:1, name:"View"}, {id:2, name:"Add"}, {id:3, name:"Edit"}, {id:4, name:"Delete"}]
		
						},
						{ 
							id:3,
							name: 'Student Management',
							perms: [{id:1, name:"View"}, {id:2, name:"Add"}, {id:3, name:"Edit"}, {id:4, name:"Delete"}]
		
						},
						{ 
							id:4,
							name: 'Parents Management',
							perms: [{id:1, name:"View"}, {id:2, name:"Add"}, {id:3, name:"Edit"}, {id:4, name:"Delete"}]
		
						},
						{ 
							id:5,
							name: 'Calendar Management',
							perms: [{id:1, name:"View"}, {id:2, name:"Add"}, {id:3, name:"Edit"}, {id:4, name:"Delete"}]
		
						},
						{ 
							id:6,
							name: 'Transport Management',
							perms: [{id:1, name:"View"}, {id:2, name:"Add"}, {id:3, name:"Edit"}, {id:4, name:"Delete"}]
		
						},
						{ 
							id:7,
							name: 'Attendance Management',
							perms: [{id:1, name:"View"}, {id:2, name:"Add"}, {id:3, name:"Edit"}, {id:4, name:"Delete"}]
		
						},
						{ 
							id:8,
							name: 'Communication Management',
							perms: [{id:1, name:"View"}, {id:2, name:"Add"}, {id:3, name:"Edit"}, {id:4, name:"Delete"}]
		
						},
						{ 
							id:9,
							name: 'Learning Centre Management',
							perms: [{id:1, name:"View"}, {id:2, name:"Add"}, {id:3, name:"Edit"}, {id:4, name:"Delete"}]
		
						},
						{ 
							id:10,
							name: 'Progress Report Management',
							perms: [{id:1, name:"View"}, {id:2, name:"Add"}, {id:3, name:"Edit"}, {id:4, name:"Delete"}]
		
						},
						{ 
							id:11,
							name: 'Media Centre Management',
							perms: [{id:1, name:"View"}, {id:2, name:"Add"}, {id:3, name:"Edit"}, {id:4, name:"Delete"}]
		
						},
						{ 
							id:12,
							name: 'Support & Settings',
							perms: [{id:1, name:"View"}, {id:2, name:"Add"}, {id:3, name:"Edit"}, {id:4, name:"Delete"}]
		
						}
	]
	
	$scope.schools = [
            { 
				id: 1,
                name: 'Kidzee Kandivli'
            },
            { 
				id: 2,
                name: 'Kidzee Malad'
            },
            { 
				id: 3,
                name: 'Kidzee Goregaon'
            }
        ];
		
	$scope.getRandomSpan = Math.floor((Math.random()*1000)+1);
	
	$scope.classes = [
            { 
				id: 1,
                grade: 1,
				division: 1
            },
            { 
				id: 2,
                grade: 2,
				division: 2
            },
            { 
				id: 3,
                grade: 3,
				division: 1
            }
        ];
	
	$scope.addFields = function (frm) {     
       if (typeof  frm.classes == 'undefined') {
             frm.classes = [];
        }
        frm.classes.push({grade:'', division: ''});
    }
	
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
		
	$scope.deleteView = function (pid, name, type) {
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
	
	$scope.showGrade = function(gclass) {
		var selected = [];
		if(gclass.grade) {
		  selected = $filter('filter')($scope.grades, {id: gclass.grade});
		}
		return selected.length ? selected[0].name : 'Not set';
	};
	
	$scope.showDivision = function(gclass) {
		var selected = [];
		if(gclass.division) {
		  selected = $filter('filter')($scope.divisions, {id: gclass.division});
		}
		return selected.length ? selected[0].name : 'Not set';
	};
		
}]);

MetronicApp.controller('ModalInstanceCtrl', function ($rootScope, $scope, $modalInstance, Scopes) {
	console.log("UserManagementController::variable1", Scopes.get('UserManagementController').groups);
	$scope.users = Scopes.get('UserManagementController').users;

	$scope.ok = function () {
		$modalInstance.close();
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
});



/*MetronicApp.factory('UserCheck', function () {
	
	console.log("hi")
    return {
		checkedIndexes:	function(value,selectedAll,checkedIndexs) {
		//$scope.checkedIndexs = [];
        if (selectedAll) {

            selectedAll = true;
            enableDelete = true;

        } else {
            selectedAll = false;
            enableDelete = false;
            checkedIndexs.length = 0;
        }
        angular.forEach(value, function (user, key) {
            if (selectedAll) {
                checkedIndexs.push(value[key].id);
            }
            user.checked = selectedAll;
        });

		}
	}
});*/

/*MetronicApp.factory('MyFactory', [function () {
    return {
        setTest: function(obj) {
            alert(obj.firstname);
        }
    };
}]);*/