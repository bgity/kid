
/* Setup general page controller */
MetronicApp.controller('CalendarManagementController', ['$rootScope', '$scope', '$filter', 'settings', '$modal', 'moment', 'createDialog', function($rootScope, $scope, $filter, settings, $modal, moment, createDialog) {
    $scope.$on('$viewContentLoaded', function() {   
    	// initialize core components
    	Metronic.initAjax();

    	// set default layout mode
        $rootScope.settings.layout.pageSidebarClosed = true;
    });
	
	$scope.frm = {};
	$scope.selectedTemplate = {};
	$scope.selectedTemplate.path = "views/calendar/settings.html";
	
	$scope.addCalendar = function (frm) {     
       if (typeof  frm.calendars == 'undefined') {
             frm.calendars = [];
        }
        frm.calendars.push({title:'', from_date: '', to_date: ''});
    }
	
	$scope.addHoliday = function (frm) {     
       if (typeof  frm.holidays == 'undefined') {
             frm.holidays = [];
        }
        frm.holidays.push({holiday_title:'', holiday_from_date: '', holiday_to_date: ''});
    }
	
	$scope.addEvent = function (frm) {     
       if (typeof  frm.events == 'undefined') {
             frm.events = [];
        }
        frm.events.push({event_title:'', event_from_date: '', event_to_date: ''});
    }
	
	$scope.addICSEEvent = function (frm) {     
       if (typeof  frm.icse_events == 'undefined') {
             frm.icse_events = [];
        }
        frm.icse_events.push({title:'', description:'', from_date: '', to_date: ''});
    }
	
	$scope.addDeliverable = function (frm) {     
       if (typeof  frm.deliverables == 'undefined') {
             frm.deliverables = [];
        }
        frm.deliverables.push({title:'', description:'', from_date: '', to_date: ''});
    }
	
	var year = new Date().getFullYear();
	var range = [];
	range.push(year);
	for(var i=1;i<5;i++) {
	  range.push(year - i);
	}
	$scope.years = range;
	
	$scope.events = [
					{	id:1, event_title: 'PM Term I',	event_from_date: '31/08/2015', event_to_date: '31/08/2015' },
					{	id:2, event_title: 'PM Term II', event_from_date: '08/10/2015', event_to_date: '09/10/2015' },
					{	id:3, event_title: 'PM Term III', event_from_date: '20/12/2015', event_to_date: '21/12/2015' },
					{	id:4, event_title: 'PM Term IV', event_from_date: '05/02/2016',	event_to_date: '06/02/2016' }
	];
	
	$scope.icse_events = [
					{	id:1, title: 'PM Term I', description: 'Description', from_date: '31/08/2015', to_date: '31/08/2015' },
					{	id:2, title: 'PM Term II', description: 'Description', from_date: '08/10/2015', to_date: '09/10/2015' },
					{	id:3, title: 'PM Term III', description: 'Description', from_date: '20/12/2015', to_date: '21/12/2015' },
					{	id:4, title: 'PM Term IV', description: 'Description', from_date: '05/02/2016',	to_date: '06/02/2016' }
	];
	
	
	$scope.subjects = [
            { id: 1, name: 'History' }, 
			{ id: 2, name: 'Mathematics' },
			{ id: 3, name: 'English' }
        ];
		
	$scope.grades = [
            { id: 1, name: 'Play Group'}, 
			{ id: 2, name: 'Nursery'},
			{ id: 3, name: 'Kindergarten' }
        ];
	
	$scope.divisions = [
            { id: 1, name: 'A' }, 
			{ id: 2, name: 'B' },
			{ id: 3, name: 'C' },
			{ id: 4, name: 'D' },
			{ id: 5, name: 'E' }
        ];
		
	/* Calendar plugin options */
	var vm = this;

    //These variables MUST be set as a minimum for the calendar to work
    $scope.calendarView = 'month';
    $scope.calendarDay = new Date();
    $scope.events = [
      {
        title: 'Event 1',
        type: 'info',
        startsAt: moment().startOf('week').add(2, 'days').add(8, 'hours').toDate(),
        endsAt: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
		startTime: moment().startOf('week').add(1, 'week').add(8, 'hours').toDate(),
		endTime: moment().startOf('week').add(1, 'week').add(9, 'hours').toDate(),
        draggable: true,
        resizable: true,
		venue: 'School Ground',
		org_by: 'Kidzee Malad'
      }, {
        title: 'Event 2',
        type: 'info',
        startsAt: moment().add(1, 'day').toDate(),
        endsAt: moment().add(5, 'days').toDate(),
		startTime: moment().add(1, 'day').toDate(),
		endTime: moment().add(5, 'days').toDate(),
        draggable: true,
        resizable: true,
		venue: 'School Ground',
		org_by: 'Kidzee Malad'
      }, {
        title: 'Event 3',
        type: 'info',
        startsAt: moment().startOf('day').add(7, 'hours').toDate(),
        endsAt: moment().startOf('day').add(19, 'hours').toDate(),
		startTime: moment().startOf('day').add(7, 'hours').toDate(),
		endTime: moment().startOf('day').add(19, 'hours').toDate(),
        recursOn: 'year',
        draggable: true,
        resizable: true,
		venue: 'School Ground',
		org_by: 'Kidzee Malad'
      }
    ];
	
	function showModal(action, event) {
      $modal.open({
        templateUrl: 'modalContent.html',
        controller: function() {
          var vm = this;
          vm.action = action;
          vm.event = event;
        },
        controllerAs: 'vm'
      });
    }

    $scope.eventClicked = function(event) {
      showModal('View Event', event);
    };

    $scope.eventEdited = function(event) {
      showModal('Edit Event', event);
    };

    $scope.eventDeleted = function(event) {
      showModal('Delete Event', event);
    };

    $scope.eventTimesChanged = function(event) {
      showModal('Dropped or resized', event);
    };
	
	$scope.addEvent = function(event) {
      showModal('Add Event', event);
    };

    $scope.toggle = function($event, field, event) {
      $event.preventDefault();
      $event.stopPropagation();
      event[field] = !event[field];
    };
	
	$scope.datepickerOptions = {
		format: 'dd/mm/yyyy',
		startDate: "2015-08-01",
		autoclose: true,
		weekStart: 0
	};
	
}]);
