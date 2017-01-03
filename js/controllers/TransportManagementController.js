
/* Setup general page controller */
MetronicApp.controller('TransportManagementController', ['$rootScope', '$scope', '$filter', 'settings', 'createDialog', function($rootScope, $scope, $filter, settings, createDialog) {
    $scope.$on('$viewContentLoaded', function() {   
    	// initialize core components
    	Metronic.initAjax();

    	// set default layout mode
        $rootScope.settings.layout.pageSidebarClosed = true;
    });
	
	$scope.frm = {};
	$scope.selectedTemplate = {};
	$scope.selectedTemplate.path = "views/transport/overview.html";
	$scope.vehiclest = true;
	$scope.driverst = false;
	$scope.coordinatorst = false;
	
	$scope.chartConfig = {
        options: {
            chart: {
                type: 'column'
            }
        },
        series: [{
            data: [10, 8],
			color: '#f3565d',
			name: 'Actual'
        },
		{
            data: [8, 7],
			color:'#ffd800',
			name: 'Expected'
        }],
        title: {
			text: 'Statistics'
		},
		subtitle: {
			text: 'Time wasted because of delay'
		},
		size: {
			height: "300"
		},
		yAxis: {
            min: 0,
            title: {
                text: 'Time (hours)'
            }
        },
		xAxis: {
             categories: [
                'Route10',
                'Route20'
            ],
        },
        loading: false
    }
	
	$scope.routes = [
				{
					id:1,
					route_no: 'ROUTE10',
					start_point: 'Kandivli',
					end_point: 'Malad',
					distance: '5 kms',
					stops: 8,
					trip_time: '30 mins',
					school: 1,
					total_students:20,
					vehicle_no: 'MH02-1234',
					coordinator: 'Sanju',
					driver: 'Ram'
				},
				{
					id:2,
					route_no: 'ROUTE20',
					start_point: 'Andheri',
					end_point: 'Malad',
					distance: '10 kms',
					stops: 15,
					trip_time: '50 mins',
					school: 1,
					total_students:24,
					vehicle_no: 'MH02-7750',
					coordinator: 'Ramesh',
					driver: 'Raju'
				},
				{
					id:3,
					route_no: 'ROUTE30',
					start_point: 'Andheri',
					end_point: 'Goregaon',
					distance: '7 kms',
					stops: 12,
					trip_time: '35 mins',
					school: 2,
					total_students:22,
					vehicle_no: 'MH02-9878',
					coordinator:'Dileep', 
					driver:'Johnny'
				},
				{
					id:4,
					route_no: 'ROUTE40',
					start_point: 'Borivli',
					end_point: 'Goregaon',
					distance: '12 kms',
					stops: 18,
					trip_time: '60 mins',
					school: 2,
					total_students:30,
					vehicle_no: 'MH02-2525',
					coordinator:'Mahesh', 
					driver:'Chirag'
				}
	]
	
	$scope.vehicles = [
				{
					id:1,
					vehicle_id: 1234,
					pur_date: '30/10/2009',
					vehicle_no: 'MH02-1234',
					coordinator: 'Sanju',
					driver: 'Ram',
					school: 1,
					school_name: 'Kidzee Malad',
					route: 'ROUTE10',
					add_notes: 'Lorem ipsum dolor net'
				},
				{
					id:2,
					vehicle_id: 1235,
					pur_date: '20/12/2012',
					vehicle_no: 'MH02-7750',
					coordinator: 'Ramesh',
					driver: 'Raju',
					school: 1,
					school_name: 'Kidzee Malad',
					route: 'ROUTE20',
					add_notes: 'Lorem ipsum dolor net'
				},
				{
					id:3,
					vehicle_id: 1236,
					pur_date: '01/02/2014',
					vehicle_no: 'MH02-9878',
					coordinator:'Dileep', 
					driver:'Johnny',
					school: 2,
					school_name: 'Kidzee Goregaon',
					route: 'ROUTE30',
					add_notes: 'Lorem ipsum dolor net'
				},
				{
					id:4,
					vehicle_id: 1237,
					pur_date: '08/08/2013',
					vehicle_no: 'MH02-2525',
					coordinator:'Mahesh', 
					driver:'Chirag',
					school: 2,
					school_name: 'Kidzee Goregaon',
					route: 'ROUTE40',
					add_notes: 'Lorem ipsum dolor net'
				}
	];
	
	$scope.drivers = [
				{
					id:1,
					emp_id: 98987,
					name: 'Ram',
					school: 1,
					school_name: 'Kidzee Malad',
					route: 'ROUTE10',
					add_notes: 'Lorem ipsum dolor net',
					phone: 9876543213,
					address: '#3, Street, Malad',
					email: 'ram@gmail.com'
				},
				{
					id:2,
					emp_id: 22333,
					name: 'Raju',
					school: 1,
					school_name: 'Kidzee Malad',
					route: 'ROUTE20',
					add_notes: 'Lorem ipsum dolor net',
					phone: 9988765432,
					address: '#05, Nagar, Malad',
					email: 'raju@gmail.com'
				},
				{
					id:3,
					emp_id: 98745,
					name: 'Johnny',
					school: 2,
					school_name: 'Kidzee Goregaon',
					route: 'ROUTE30',
					add_notes: 'Lorem ipsum dolor net',
					phone: 7788765432,
					address: '#15, Nagar, Kandivali',
					email: 'johnny@gmail.com'
				},
				{
					id:4,
					emp_id: 78887,
					name: 'Chirag',
					school: 2,
					school_name: 'Kidzee Goregaon',
					route: 'ROUTE40',
					add_notes: 'Lorem ipsum dolor net',
					phone: 1234567899,
					address: '#15, Street, Andheri',
					email: 'chirag@gmail.com'
				}
	];
	
	$scope.coordinators = [
				{
					id:1,
					emp_id: 1231,
					name: 'Sanju',
					school: 1,
					school_name: 'Kidzee Malad',
					route: 'ROUTE10',
					add_notes: 'Lorem ipsum dolor net',
					phone: 7788996655,
					address: '#3, Street, Malad',
					email: 'sanju@gmail.com'
				},
				{
					id:2,
					emp_id: 6521,
					name: 'Ramesh',
					school: 1,
					school_name: 'Kidzee Malad',
					route: 'ROUTE20',
					add_notes: 'Lorem ipsum dolor net',
					phone: 9988765432,
					address: '#05, Nagar, Malad',
					email: 'ramesh@gmail.com'
				},
				{
					id:3,
					emp_id: 4411,
					name: 'Dileep',
					school: 2,
					school_name: 'Kidzee Goregaon',
					route: 'ROUTE30',
					add_notes: 'Lorem ipsum dolor net',
					phone: 7788765432,
					address: '#15, Nagar, Kandivali',
					email: 'dileep@gmail.com'
				},
				{
					id:4,
					emp_id: 5522,
					name: 'Mahesh',
					school: 2,
					school_name: 'Kidzee Goregaon',
					route: 'ROUTE40',
					add_notes: 'Lorem ipsum dolor net',
					phone: 1234567899,
					address: '#15, Street, Andheri',
					email: 'mahesh@gmail.com'
				}
	];
	
	$scope.checkedIndexs = [];
	$scope.selectedAll= false;
	$scope.checkAll = function (scopeVar) {
		
		$scope.checkedIndexs = [];
		if(scopeVar == 'vehicles')
			objScope = $scope.vehicles;
		else if(scopeVar == 'drivers')
			objScope = $scope.drivers;
		else if(scopeVar == 'coordinators')
			objScope = $scope.coordinators;
		else	
			objScope = $scope.routes;

        if ($scope.selectedAll) {
            $scope.selectedAll = true;

        } else {
            $scope.selectedAll = false;
            $scope.checkedIndexs.length = 0;
        }
        angular.forEach(objScope, function (parent, key) {
            if ($scope.selectedAll) {
                $scope.checkedIndexs.push(objScope[key].id);
            }
            parent.checked = $scope.selectedAll;
        });
    };
	
	$scope.checkedRoute = function (checkedid) {
		if ($scope.checkedIndexs.indexOf(checkedid) === -1) {
            $scope.checkedIndexs.push(checkedid);
        }
        else {
            $scope.checkedIndexs.splice($scope.checkedIndexs.indexOf(checkedid), 1);
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
	
	
	$scope.getRandomSpan = Math.floor((Math.random()*1000)+1);
	
	/* Add Row Option */
	$scope.addTransports = function (frm) {     
       if (typeof  frm.relation == 'undefined') {
             frm.relation = [];
        }
        frm.relation.push({parent_id:'', parent_name: '', parent_relation: ''});
    }
	
	$scope.addStudents = function (frm) {     
       if (typeof  frm.students == 'undefined') {
             frm.students = [];
        }
        frm.students.push({student_id:'', student_name: '', stu_grade: '', stu_division: ''});
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
		
	$scope.deleteRouteView = function (pid, name, type) {
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
	
	$scope.activeTab = function(id) {
		$scope.checkedIndexs = [];
		if(id =='driverst') {
			$scope.driverst=true;
			$scope.vehiclest=false;
			$scope.coordinatorst=false;
		}
		else if(id =='coordinatorst') {
			$scope.coordinatorst=true;
			$scope.driverst=false;
			$scope.vehiclest=false;
		}
		else {
			$scope.vehiclest=true;
			$scope.driverst=false;
			$scope.coordinatorst=false;
		}
	}
	
}]);
