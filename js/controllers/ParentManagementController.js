
/* Setup general page controller */
MetronicApp.controller('ParentManagementController', ['$rootScope', '$scope', '$filter', 'settings', '$modal', 'Scopes', 'createDialog', function($rootScope, $scope, $filter, settings, $modal, Scopes, createDialog) {
    $scope.$on('$viewContentLoaded', function() {   
    	// initialize core components
    	Metronic.initAjax();

    	// set default layout mode
        $rootScope.settings.layout.pageSidebarClosed = true;
    });
	
	$scope.frm = {};
	$scope.selectedTemplate = {};
	$scope.userst = true;
	$scope.parents = [
            { 
				id: 1,
                firstname: 'Prashant', 
                lastname: 'More',
				parent_id: 'PA1332',
				school: 'Kidzee Malad',
				contact_no: 9876543211,
				bio: {
						gender:"Male",
						dob:"12/08/1980",
						blood_group: "O +ve"
				},
				contact: {
						home_address: '#05, Street, Kandivli',
						home_phone: 9875463211,
						work_address: '#001, Gokuldham, Goregaon',
						work_phone: 02654789863,
						alt_phone: 9876544562,
						email_address: 'pmore@gmail.com'
				},
				links: {
						relation:[
								{
									id:'PA1333',
									name: 'Suman More',
									relation: 'wife'
								}
								],
						students: [
								{
									id:'STU1234',
									name: 'Avinash More',
									grade: 'Nursery',
									division: 'A'
								},
								{
									id:'STU9879',
									name: 'Ram More',
									grade: 'KG',
									division: 'B'
									
								}
							]
						}
					
            },
            { 
				id: 2,
                firstname: 'Deepak', 
                lastname: 'Mhatre',
				parent_id: 'PA1334',
				school: 'Kidzee Malad',
				contact_no: 7889994562,
				bio: {
						gender:"Male",
						dob:"12/08/1978",
						blood_group: "O -ve"
				},
				contact: {
						home_address: '#07, Street, Malad',
						home_phone: 9854321123,
						work_address: 'A51, MIDC, Andheri',
						work_phone: 02222789863,
						alt_phone: 7889455612,
						email_address: 'dmhatre@gmail.com'
				},
				links: {
						relation:[
								{
									id:'PA1335',
									name: 'Seema Mhatre',
									relation: 'wife'
								}
								],
						students: [
								{
									id:'STU1235',
									name: 'Pinky Mhatre',
									grade: 'PG',
									division: 'B'
								},
								{
									id:'STU888',
									name: 'Rohan Mhatre',
									grade: 'KG',
									division: 'A'
									
								}
						]
					}
            },
            { 
				id: 3,
                firstname: 'Seema', 
                lastname: 'Mhatre',
				parent_id: 'PA1335',
				school: 'Kidzee Malad',
				contact_no: 2288996548,
				bio: {
						gender:"Female",
						dob:"12/08/1981",
						blood_group: "A -ve"
				},
				contact: {
						home_address: '#07, Street, Malad',
						home_phone: 9854321123,
						work_address: '',
						work_phone: '',
						alt_phone: 7898455698,
						email_address: 'seema@gmail.com'
				},
				links: {
						relation:[
								{
									id:'PA1334',
									name: 'Deepak Mhatre',
									relation: 'husband'
								}
							],
						students: [
								{
									id:'STU1235',
									name: 'Pinky Mhatre',
									grade: 'PG',
									division: 'B'
								},
								{
									id:'STU888',
									name: 'Rohan Mhatre',
									grade: 'KG',
									division: 'A'
									
								}
							]
						}
            },
			{ 
				id: 4,
                firstname: 'Suman', 
                lastname: 'More',
				parent_id: 'PA1333',
				school: 'Kidzee Malad',
				contact_no: 7889546532,
				bio: {
						gender:"Female",
						dob:"12/08/1983",
						blood_group: "A +ve"
				},
				contact: {
						home_address: '#05, Street, Kandivli',
						home_phone: 9875463211,
						work_address: '#001, Asha Nagar, Kandivli',
						work_phone: 02654789999,
						alt_phone: 9920878798,
						email_address: 'suman@gmail.com'
				},
				links: {
						relation:[
								{
									id:'PA1332',
									name: 'Prashant More',
									relation: 'husband'
								}
								],
						students: [
								{
									id:'STU1234',
									name: 'Avinash More',
									grade: 'Nursery',
									division: 'A'
								},
								{
									id:'STU9879',
									name: 'Ram More',
									grade: 'KG',
									division: 'B'
									
								}
						]
					}
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
        angular.forEach($scope.parents, function (parent, key) {
            if ($scope.selectedAll) {
                $scope.checkedIndexs.push($scope.parents[key].id);
            }
            parent.checked = $scope.selectedAll;
        });
    };
	
	$scope.checkedParent = function (parentid) {
		$scope.selectedTemplate = {};
		if ($scope.checkedIndexs.indexOf(parentid) === -1) {
            $scope.checkedIndexs.push(parentid);
            $scope.enableDelete = true;
        }
        else {
            $scope.checkedIndexs.splice($scope.checkedIndexs.indexOf(parentid), 1);
            if ($scope.checkedIndexs.length === 0) {
                $scope.enableDelete = false;
            }
        }
	};
	
	/* Start Dropdown filter of listing */
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
	/* End */
	
	/* Added for seraching multiple columns using single text field */
	$scope.search = function (row) {
        return (angular.lowercase(row.firstname).indexOf($scope.query || '') !== -1 || angular.lowercase(row.lastname).indexOf($scope.query || '') !== -1);
    };
	
	$scope.getRandomSpan = Math.floor((Math.random()*1000)+1);
	
	/* Add Row Option */
	$scope.addParents = function (frm) {     
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
	
}]);
