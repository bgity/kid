/* Setup general page controller */
MetronicApp.controller('StudentManagementController', ['$rootScope', '$scope', 'settings', 'createDialog', function($rootScope, $scope, settings, createDialog) {
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
				student_id: 'STU1234',
				firstname: 'Avinash', 
				lastname: 'More',
				bio: {
						gender: 'Male',
						dob: '25/10/2013',
						est_grad_date: '21/08/2016',
						school: 'Kidzee Malad',
						grade: 'Nursery',
						division: 'A'
						
						
					},
				contact: {
						phone: 9875463211,
						address: '#05, Street, Asha Nagar, Kandivli',
						emergency_cname: 'Prashant More',
						emergency_cnumber: 3126549873,
						family: [
								{
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
										]
								},
								{ 
									siblings: [
											{ 
												student_id: 'STU9879',
												name: 'Ram More',
												grade: 'KG',
												division: 'B'
											}
										]
								}
							]
					},
				enrollment: {
						start_date: '21/08/2015',
						est_end_date: '21/08/2016',
						curicullum: 'Enhancing communication skills',
						curr_class: '',
						curr_division: '',
						subjects: [
								{subject: 'Sensory Time', teacher: 'Maria Joseph'},
								{subject: 'Story Time', teacher: 'Sam T'}
							],
						transport: {
							flag: 'yes',
							route: 'ROUTE-20',
							coordinator: 'Ramesh',
							driver: 'Raju'
						}
					},
				attendance: { total: 30, attended: 24, absent:4, excused: 2 },
				medical: {
					
					},
				notes: {
						note:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
						attachments: [{name: 'Document 1', date:'25/08/2015'},{name: 'Document 2', date:'22/08/2015'}]
					}
            },
            { 
				id: 2,
				student_id: 'STU1235',
				firstname: 'Pinky', 
				lastname: 'Mhatre',
				bio: {
						gender: 'Female',
						dob: '25/12/2014',
						est_grad_date: '21/08/2016',
						school: 'Kidzee Malad',
						grade: 'PG',
						division: 'B'
						
						
					},
				contact: {
						phone: 6549873512,
						address: '#08, Street, Anand Nagar, Malad',
						emergency_cname: 'Deepak Mhatre',
						emergency_cnumber: 9876544561,
						family: [
								{
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
										]
								},
								{
									siblings: [
											{ 
												student_id: 'STU888',
												name: 'Rohan Mhatre',
												grade: 'KG',
												division: 'A'
											}
										]
								}
							]
					},
				enrollment: {
						start_date: '21/06/2015',
						est_end_date: '21/03/2016',
						curicullum: 'Learning by exploration',
						curr_class: '',
						curr_division: '',
						subjects: [
								{subject: 'Sensory Time', teacher: 'Maria Joseph'},
								{subject: 'Story Time', teacher: 'Sam T'},
								{subject: 'Creative Time', teacher: 'Sam T'}
							],
						transport: {
							flag: 'yes',
							route: 'ROUTE-10',
							coordinator: 'Sanju',
							driver: 'Ram'
						}
					},
				attendance: { total: 30, attended: 28, absent:1, excused: 1 },
				medical: {
					
					},
				notes: {
						note:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
						attachments: [{name: 'Document 1', date:'25/08/2015'},{name: 'Document 2', date:'22/08/2015'}]
					}
            },
            { 
				id: 3,
				student_id: 'STU9879',
				firstname: 'Ram', 
				lastname: 'More',
				bio: {
						gender: 'Male',
						dob: '10/12/2011',
						est_grad_date: '31/03/2016',
						school: 'Kidzee Malad',
						grade: 'KG',
						division: 'B'
						
						
					},
				contact: {
						phone: 9875463211,
						address: '#05, Street, Asha Nagar, Kandivli',
						emergency_cname: 'Prashant More',
						emergency_cnumber: 3126549873,
						family: [
								{
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
										]
								},
								{
									siblings: [
											{ 
												student_id: 'STU1234',
												name: 'Avinash More',
												grade: 'Nursery',
												division: 'A'
											}
										]
								}
							]
					},
				enrollment: {
						start_date: '15/06/2015',
						est_end_date: '31/03/2016',
						curicullum: 'Personal Social and Emotional Development',
						curr_class: '',
						curr_division: '',
						subjects: [
								{subject: 'Science Time', teacher: 'Raghav Patel'},
								{subject: 'Public Speaking', teacher: 'Sam T'},
								{subject: 'Creative Time', teacher: 'Sam T'}
							],
						transport: {
							flag: 'yes',
							route: 'ROUTE-20',
							coordinator: 'Ramesh',
							driver: 'Raju'
						}
					},
				attendance: { total: 30, attended: 25, absent:3, excused: 2 },
				medical: {
					
					},
				notes: {
						note:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
						attachments: [{name: 'Document 1', date:'25/08/2015'},{name: 'Document 2', date:'22/08/2015'}]
					}
            },
			{ 
				id: 4,
				student_id: 'STU888',
				firstname: 'Rohan', 
				lastname: 'Mhatre',
				bio: {
						gender: 'Male',
						dob: '10/10/2011',
						est_grad_date: '31/03/2016',
						school: 'Kidzee Malad',
						grade: 'KG',
						division: 'A'
						
						
					},
				contact: {
						phone: 9865321477,
						address: '#08, Street, Anand Nagar, Malad',
						emergency_cname: 'Deepak Mhatre',
						emergency_cnumber: 9876544561,
						family: [
								{
									parents:[
											{
												id:'PA1334',
												name: 'Deepak Mhatre',
												relation: 'father'
											},
											{
												id:'PA1335',
												name: 'Suman Mhatre',
												relation: 'mother'
											}
										]
								},
								{
									siblings: [
											{ 
												student_id: 'STU1234',
												name: 'Pinky Mhatre',
												grade: 'PG',
												division: 'B'
											}
										]
								}
							]
					},
				enrollment: {
						start_date: '15/06/2015',
						est_end_date: '31/03/2016',
						curicullum: 'Personal Social and Emotional Development',
						curr_class: '',
						curr_division: '',
						subjects: [
								{subject: 'Science Time', teacher: 'Raghav Patel'},
								{subject: 'Public Speaking', teacher: 'Sam T'},
								{subject: 'Creative Time', teacher: 'Sam T'}
							],
						transport: {
							flag: 'yes',
							route: 'ROUTE-20',
							coordinator: 'Ramesh',
							driver: 'Raju'
						}
					},
				attendance: { total: 30, attended: 27, absent:1, excused: 2 },
				medical: {
					
					},
				notes: {
						note:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
						attachments: [{name: 'Document 1', date:'25/08/2015'},{name: 'Document 2', date:'22/08/2015'}]
					}
            }
        ];
	
	$scope.checkedIndexs = [];
	$scope.selectedAll= false;
	$scope.checkAll = function () {
		$scope.selectedTemplate = {};
		$scope.checkedIndexs = [];
		console.log($scope.selectedAll)
        if ($scope.selectedAll) {

            $scope.selectedAll = true;
            $scope.enableDelete = true;

        } else {
            $scope.selectedAll = false;
            $scope.enableDelete = false;
            $scope.checkedIndexs.length = 0;
        }
        angular.forEach($scope.students, function (student, key) {
			console.log("yes")
            if ($scope.selectedAll) {
                $scope.checkedIndexs.push($scope.students[key].id);
            }
            student.checked = $scope.selectedAll;
        });
    };
	
	$scope.checkedStudent = function (studentid) {
		$scope.selectedTemplate = {};
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
	
	$scope.filterOptions = {
		grades: [
		  {id : 0, name : 'Grade' },
		  {id : 1, name : 'PG' },
		  {id : 2, name : 'Nursery' },
		  {id : 3, name : 'KG' }
		],
		divisions:[
			{ id: 0, name: 'Division' },
            { id: 1, name: 'A' }, 
			{ id: 2, name: 'B' },
			{ id: 3, name: 'C' },
			{ id: 4, name: 'D' },
			{ id: 5, name: 'E' }
        ],
		schools: [
		  {id : 0, name : 'School' },
		  {id : 1, name : 'Kidzee Malad' },
		  {id : 2, name : 'Kidzee Goregaon' },
		  {id : 3, name : 'Kidzee Kandivli' }
		]
	  };
	  
	 $scope.filterItem = {
		grade: $scope.filterOptions.grades[0],
		division: $scope.filterOptions.divisions[0],
		school: $scope.filterOptions.schools[0]
	  };
	  
	$scope.customFilter = function (data) {
		if (data.bio.grade === $scope.filterItem.grade.name) {
		  return true;
		} else if ($scope.filterItem.grade.name === "Grade") {
		  return true;
		} else {
		  return false;
		}
		
		if (data.bio.division === $scope.filterItem.division.name) {
		  return true;
		} else if ($scope.filterItem.division.name === "Division") {
		  return true;
		} else {
		  return false;
		}
		
		if (data.bio.school === $scope.filterItem.school.name) {
		  return true;
		} else if ($scope.filterItem.school.name === "School") {
		  return true;
		} else {
		  return false;
		}
	};
	
	$scope.selectedTemplate = {};
	$scope.getRandomSpan = Math.floor((Math.random()*1000)+1);
	
	$scope.grades = [
            { id: 1, name: 'Play Group', subjects : [{subject:'Sensory Time', teacher:'Maria Joseph'},{subject:'Story Time', teacher:'Sam T'},{subject:'Creative Time', teacher:'Sam T'}] }, 
			{ id: 2, name: 'Nursery', subjects : [{subject:'Sensory Time', teacher:'Maria Joseph'},{subject:'Story Time', teacher:'Sam T'}] },
			{ id: 3, name: 'Kindergarten', subjects : [{subject:'Science Time', teacher:'Raghav Patel'},{subject:'Public Speaking', teacher:'Sam T'},{subject:'Creative Time', teacher:'Sam T'}] }
        ];
		
	$scope.divisions = [
            { id: 1, name: 'A' }, 
			{ id: 2, name: 'B' },
			{ id: 3, name: 'C' },
			{ id: 4, name: 'D' },
			{ id: 5, name: 'E' }
        ];
		
	$scope.routes = [
            { id: 1, name: 'Route 10', coordinator:'Sanju', driver:'Ram' }, 
			{ id: 2, name: 'Route 20', coordinator:'Ramesh', driver:'Raju' },
			{ id: 3, name: 'Route 30', coordinator:'Dileep', driver:'Johnny' }
        ];
	
	$scope.deleteStudentView = function (pid, name) {
		createDialog({
            id: 'delStudent',
			template:  angular.element(
                    '<div class="row-fluid">' +
                    ' <div>' +
                    '   <div class="codebox" style="text-align:center;">' +
                    '    <h4>Are you sure you want to delete Student <b>"'+name+'"</b>?</h4> ' +
                    '   </div>\n' +
                    ' </div>\n' +
                    '</div>'),
            title: 'Delete Student',
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
	
	$scope.addParents = function (frm) {     
       if (typeof  frm.parents == 'undefined') {
             frm.parents = [];
        }
        frm.parents.push({parent_id:'', parent_name: '', parent_relation: ''});
    }
	
	$scope.addSiblings = function (frm) {     
       if (typeof  frm.siblings == 'undefined') {
             frm.siblings = [];
        }
        frm.siblings.push({sibling_id:'', sibling_name: '', sib_grade: '', sib_division: ''});
    }
	
	$scope.addVaccination = function (frm) {     
       if (typeof  frm.vaccinations == 'undefined') {
             frm.vaccinations = [];
        }
        frm.vaccinations.push({vaccination_name:'', vaccination_due: '', vaccination_completed: ''});
    }
	
	$scope.addAttachments = function (frm) {     
       if (typeof  frm.attachments == 'undefined') {
             frm.attachments = [];
        }
        frm.attachments.push({attachment:''});
    }
	
	var year = new Date().getFullYear();
	var range = [];
	range.push(year);
	for(var i=1;i<5;i++) {
	  range.push(year - i);
	}
	$scope.years = range;
	$scope.terms = [1,2,3];
	
	$scope.datepickerOptions = {
		format: 'dd/mm/yyyy',
		startDate: "2015-08-01",
		autoclose: true,
		weekStart: 0
	};
	
	$scope.curicullums = ['Learning by exploration','Building communication skills','Encouraging positive peer interaction','Enhancing communication skills','Personal Social and Emotional Development']
	
}]);
