
/* Setup general page controller */
MetronicApp.controller('ProgressReportController', ['$rootScope', '$scope', '$filter', 'settings', '$modal', 'Scopes', 'createDialog', function($rootScope, $scope, $filter, settings, $modal, Scopes, createDialog) {
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
	$scope.topics = [
            { 
				id: 1,
				name: 'Topic1',
				comments: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
				status: 1,
				attachment: 1,
				date: '25/08/2015',
				students: [
						{
						
							name: 'Avinash More',
							comments: 'Dummy text of the printing and typesetting industry'
						},
						{
							name: 'Pinky Mhatre',
							comments: 'Dummy text of the printing and typesetting industry'
						},
						{
							name: 'Ram More',
							comments: 'Dummy text of the printing and typesetting industry'
						},
						{
							name: 'Rohan Mhatre',
							comments: 'Dummy text of the printing and typesetting industry'
						},
						{
							name: 'Jaideep Sahni',
							comments: 'Dummy text of the printing and typesetting industry'
						}
				]
            },
			{ 
				id: 2,
				name: 'Topic2',
				comments: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
				status: 3,
				attachment: 0,
				date: '24/08/2015',
				students: [
						{
							name: 'Avinash More',
							comments: 'Dummy text of the printing and typesetting industry'
						},
						{
							name: 'Pinky Mhatre',
							comments: 'Dummy text of the printing and typesetting industry'
						},
						{
							name: 'Ram More',
							comments: 'Dummy text of the printing and typesetting industry'
						},
						{
							name: 'Rohan Mhatre',
							comments: 'Dummy text of the printing and typesetting industry'
						},
						{
							name: 'Jaideep Sahni',
							comments: 'Dummy text of the printing and typesetting industry'
						}
				]
            },
			{ 
				id: 3,
				name: 'Topic3',
				comments: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
				status: 2,
				attachment: 1,
				date: '20/08/2015',
				students: [
						{
							name: 'Avinash More',
							comments: 'Dummy text of the printing and typesetting industry'
						},
						{
							name: 'Pinky Mhatre',
							comments: 'Dummy text of the printing and typesetting industry'
						},
						{
							name: 'Ram More',
							comments: 'Dummy text of the printing and typesetting industry'
						},
						{
							name: 'Rohan Mhatre',
							comments: 'Dummy text of the printing and typesetting industry'
						},
						{
							name: 'Jaideep Sahni',
							comments: 'Dummy text of the printing and typesetting industry'
						}
				]
            },
			{ 
				id: 4,
				name: 'Topic4',
				comments: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
				status: 2,
				attachment: 0,
				date: '20/08/2015',
				students: [
						{
							name: 'Avinash More',
							comments: 'Dummy text of the printing and typesetting industry'
						},
						{
							name: 'Pinky Mhatre',
							comments: 'Dummy text of the printing and typesetting industry'
						},
						{
							name: 'Ram More',
							comments: 'Dummy text of the printing and typesetting industry'
						},
						{
							name: 'Rohan Mhatre',
							comments: 'Dummy text of the printing and typesetting industry'
						},
						{
							name: 'Jaideep Sahni',
							comments: 'Dummy text of the printing and typesetting industry'
						}
				]
            }
        ];
	
	
	$scope.checkedIndexs = [];
	$scope.selectedAll= false;
	$scope.checkAll = function () {
		$scope.checkedIndexs = [];
        if ($scope.selectedAll) {
            $scope.selectedAll = true;

        } else {
            $scope.selectedAll = false;
            $scope.checkedIndexs.length = 0;
        }
        angular.forEach($scope.topics, function (topic, key) {
            if ($scope.selectedAll) {
                $scope.checkedIndexs.push($scope.topics[key].id);
            }
            topic.checked = $scope.selectedAll;
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
		  {id : 2, name : 'Schools' },
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
		} else if ($scope.filterItem.school.name === "Schools") {
		  return true;
		} else {
		  return false;
		}
	};
	/* End */
	
	$scope.getRandomSpan = Math.floor((Math.random()*1000)+1);
	
	$scope.grades = [
			{ id: 0, name: 'Grades' }, 
            { id: 1, name: 'Play Group' }, 
			{ id: 2, name: 'Nursery' },
			{ id: 3, name: 'Kindergarten' }
        ];
	$scope.divisions = [
			{ id: 0, name: 'Divisions' }, 
            { id: 1, name: 'A' }, 
			{ id: 2, name: 'B' },
			{ id: 3, name: 'C' },
			{ id: 4, name: 'D' },
			{ id: 5, name: 'E' }
        ];
	
	$scope.checkStu = function() {
		$scope.checkedRep=true;
	}
	
	var year = new Date().getFullYear();
	var range = [];
	range.push(year);
	for(var i=1;i<5;i++) {
	  range.push(year - i);
	}
	$scope.years = range; 
	
	$scope.generater=false;
	$scope.genReport = function() {
		$scope.generater=true;
	}
	
	$scope.subjects = [
            { id: 1, name: 'History' }, 
			{ id: 2, name: 'Mathematics' },
			{ id: 3, name: 'English' }
     ];
	 
	 $scope.termreport= true;
	 $scope.reportgen = false;
	 $scope.activeTab = function(id) {
		 if(id=='termreport') {
			$scope.termreport= true;
			$scope.reportgen = false;
			$scope.checkedRep=false;
		 }
		 else {
			$scope.termreport= false;
			$scope.reportgen = true;
			$scope.checkedRep=false;
		 }
	 }
	 
	 $scope.closeRight = function() {
		 $scope.checkedRep=false;
	 }
	 
	 $scope.datepickerOptions = {
		format: 'dd/mm/yyyy',
		startDate: "2015-08-01",
		autoclose: true,
		weekStart: 0
	};
		
}]);
