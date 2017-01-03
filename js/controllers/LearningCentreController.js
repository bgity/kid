
/* Setup general page controller */
MetronicApp.controller('LearningCentreController', ['$rootScope', '$scope', '$filter', 'settings', '$modal', 'Scopes', 'createDialog', function($rootScope, $scope, $filter, settings, $modal, Scopes, createDialog) {
    $scope.$on('$viewContentLoaded', function() {   
    	// initialize core components
    	Metronic.initAjax();

    	// set default layout mode
        $rootScope.settings.layout.pageSidebarClosed = true;
    });
	
	$scope.frm = {};
	$scope.selectedTemplate = {};
	$scope.loadcontent = false;
	
	$scope.loadContent = function() {
		$scope.loadcontent = true;
		$scope.selectedTemplate.path ='';
	}
	
	$scope.schools = [
		  {id : 1, name : 'Kidzee Malad' },
		  {id : 2, name : 'Kidzee Goregaon' },
		  {id : 3, name : 'Kidzee Kandivli' }
		];

	$scope.grades = [
            { id: 1, name: 'Play Group' }, 
			{ id: 2, name: 'Nursery' },
			{ id: 3, name: 'Kindergarten' }
        ];
	$scope.subjects = [
            { id: 1, name: 'History' }, 
			{ id: 2, name: 'Mathematics' },
			{ id: 3, name: 'English' }
     ];
	 $scope.topics = [
            { id: 1, name: 'Topic1' }, 
			{ id: 2, name: 'Topic2' },
			{ id: 3, name: 'Topic3' }
     ];
	 $scope.sortby = [
            { id: 1, name: 'Date & Time' }, 
			{ id: 2, name: 'Topic' }
     ];
	 
	 $scope.divisions = [
            { id: 1, name: 'A' }, 
			{ id: 2, name: 'B' },
			{ id: 3, name: 'C' },
			{ id: 4, name: 'D' },
			{ id: 5, name: 'E' }
        ];
		
	$scope.closeRight = function() {
		 $scope.selectedTemplate.path ='';
	 }
	 
	 $scope.datepickerOptions = {
		format: 'dd/mm/yyyy',
		startDate: "2015-08-01",
		autoclose: true,
		weekStart: 0
	};
	
}]);
