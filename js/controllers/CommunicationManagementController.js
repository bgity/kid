
/* Setup general page controller */
MetronicApp.controller('CommunicationManagementController', ['$rootScope', '$scope', 'settings', 'Scopes', '$modal', function($rootScope, $scope, settings, Scopes, $modal) {
    $scope.$on('$viewContentLoaded', function() {   
    	// initialize core components
    	Metronic.initAjax();

    	// set default layout mode
        $rootScope.settings.layout.pageSidebarClosed = true;
    });
	$scope.selectedTemplate = {};
	$scope.frm = {};
	
	$scope.selectedTemplate.path = "views/communication/inbox.html";
	
	$scope.inbox = [
					{
						id:1,
						name: 'Kidzee Malad',
						subject: 'School Trip',
						message: 'School Trip is planned to be conducted on so and so date. So, please get prepared.School Trip is planned to be conducted on so and so date. So, please get prepared.School Trip is planned to be conducted on so and so date. So, please get prepared.School Trip is planned to be conducted on so and so date. So, please get prepared.',
						time: '10:00 AM',
						attachment: '',
						read: ''
					},
					{
						id:2,
						name: 'Robert Daniel',
						subject: 'Meeting',
						message: 'Meeting is planned to be conducted on so and so date. So, please be available on the same day.',
						time: 'August 25',
						attachment: 'yes',
						read: 'yes'
					},
					{
						id:3,
						name: 'Kidzee Malad',
						subject: 'Holiday List',
						message: 'Holiday List Holiday List Holiday List Holiday List Holiday List Holiday List.',
						time: 'August 25',
						attachment: 'yes',
						read: 'yes'
					},
					{
						id:4,
						name: 'Maria Joseph',
						subject: 'Exam preparation',
						message: 'Exam preparation Exam preparation Exam preparation Exam preparation Exam preparation Exam preparation Exam preparation Exam preparation.',
						time: 'August 24',
						attachment: '',
						read: 'yes'
					},
				]
				
	$scope.alerts = [
					{
						id:1,
						name: 'Prashant More',
						title: 'Improvements',
						message: 'Improvements to be included in the school for grades and divisions.',
						time: '02:27 PM'
					},
					{
						id:2,
						name: 'Suman More',
						title: 'Complaint',
						message: 'The transport is not mainitaining the time properly.',
						time: 'August 22'
					},
					{
						id:3,
						name: 'Seema Mhatre',
						title: 'Information',
						message: 'Lorem ipsum dolor dolor dolor dolor dolor dolor dolor dolor dolor dolor.',
						time: 'August 21'
					},
					{
						id:4,
						name: 'Maria Joseph',
						title: 'Exam',
						message: 'Exam preparation Exam preparation Exam preparation Exam preparation Exam preparation Exam preparation Exam preparation Exam preparation.',
						time: 'August 20'
					},
				]
	
	$scope.groups = [
            
			{ 
				id: 1,
                name: 'Kidzee', 
                members_count: 3,
				subject: 'General',
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
                name: 'Teachers Group', 
                members_count: 1,
				subject: 'Teachers',
				members: [{
							id: 1,
							firstname:'John',
							lastname:'Smith',
							role: 'Teacher'
						},
						{
							id: 7,
							firstname:'Raghav',
							lastname:'Patel',
							role: 'Teacher'
						}
						]
            },
			{ 
				id: 3,
                name: 'VParents', 
                members_count: 3,
				subject: 'Parents',
				members: [{
							id: 4,
							firstname:'Maria',
							lastname:'Joseph',
							role: 'Parent'
						},
						{
							id: 6,
							firstname:'Sam',
							lastname:'T',
							role: 'Parent'
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
                name: 'General', 
                members_count: 2,
				subject: 'School',
				members: [{
							id: 5,
							firstname:'Rahul',
							lastname:'Ram',
							role: 'Teacher'
						},
						{
							id: 8,
							firstname:'Vincent',
							lastname:'Roy',
							role: 'Parent'
						}
						
						]
            }
		]
		
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
	
	
	$scope.posts = [{
						id: 1,
						from_name: 'From Name',
						from_role: 'Teacher',
						to_name: 'To Name',
						to_role: 'Parent',
						message:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.'
					},
					{
						id: 2,
						from_name: 'From Name',
						from_role: 'Parent',
						to_name: 'To Name',
						to_role: 'Parent',
						message:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
					},
					{
						id: 3,
						from_name: 'From Name',
						from_role: 'Teacher',
						to_name: 'To Name',
						to_role: 'Teacher',
						message:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.'
					},
					{
						id: 4,
						from_name: 'From Name',
						from_role: 'Parent',
						to_name: 'To Name',
						to_role: 'Parent',
						message:'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.'
					},
					{
						id: 5,
						from_name: 'From Name',
						from_role: 'Teacher',
						to_name: 'To Name',
						to_role: 'Teacher',
						message:'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.'
					},
					{
						id: 6,
						from_name: 'From Name',
						from_role: 'Teacher',
						to_name: 'To Name',
						to_role: 'Parent',
						message:'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
					},
					{
						id: 7,
						from_name: 'From Name',
						from_role: 'Teacher',
						to_name: 'To Name',
						to_role: 'Parent',
						message:'Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.'
					},
					{
						id: 8,
						from_name: 'From Name',
						from_role: 'Teacher',
						to_name: 'To Name',
						to_role: 'Teacher',
						message:'All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. '
					}
				]
				
	$scope.feedbacks = [{
							id:1,
							from_name: 'Maria Joseph',
							role: 'Teacher',
							datetime: '12:20',
							message: 'Message Message Message Message Message Message Message Message Message Message'
						},
						{
							id:2,
							from_name: 'Sam Raghav',
							role: 'Teacher',
							datetime: '12:00',
							message: 'Message Message Message Message Message Message Message Message Message Message'
						},
						{
							id:3,
							from_name: 'Prashant More',
							role: 'Parent',
							datetime: '26 Aug 14:30',
							message: 'Message Message Message Message Message Message Message Message Message Message'
						},
						{
							id:4,
							from_name: 'Deepal Mhatre',
							role: 'Parent',
							datetime: '26 Aug 14:00',
							message: 'Message Message Message Message Message Message Message Message Message Message'
						},
						{
							id:5,
							from_name: 'Maria Joseph',
							role: 'Teacher',
							datetime: '26 Aug 13:50',
							message: 'Message Message Message Message Message Message Message Message Message Message'
						}
					]
	
	$scope.checkedIndexs = [];
	$scope.selectedAll = false;
	$scope.checkAll = function (scopeVar) {
		$scope.selectedInnerTemplate = {};
		var objScope = {};
		if(scopeVar == 'inbox')
			objScope = $scope.inbox;
		else if(scopeVar == 'alerts')
			objScope = $scope.alerts;
		else if(scopeVar == 'groups')
			objScope = $scope.groups;
		
		$scope.checkedIndexs = [];
		if ($scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
            $scope.checkedIndexs.length = 0;
        }
        angular.forEach(objScope, function (message,key) {
            if ($scope.selectedAll) {
                $scope.checkedIndexs.push(objScope[key].id);
            }
            message.checked = $scope.selectedAll;
        });
    };
	
	$scope.checkedMessage = function (id,type) {
		$scope.selectedInnerTemplate = {};
		if(type == 'mod') {
			$scope.checkedIndexs = [];
		}
			
		if ($scope.checkedIndexs.indexOf(id) === -1) {
			$scope.checkedIndexs.push(id);
			if(type == 'mod') {
				$scope.frm.message = $scope.posts[$scope.checkedIndexs.indexOf(id)].message;
			}
            $scope.enableDelete = true;
        }
        else {
            $scope.checkedIndexs.splice($scope.checkedIndexs.indexOf(id), 1);
            if ($scope.checkedIndexs.length === 0) {
                $scope.enableDelete = false;
            }
        }
	};
	
	/* For Group Members */
	$scope.checkedMemIndexs = [];
	$scope.selectedMemAll= false;
	$scope.checkMemAll = function () {
		console.log($scope.selectedMemAll)
		$scope.checkedMemIndexs = [];
        
		angular.forEach($scope.groups[$scope.checkedIndexs-1].members, function (member, key) {
			
			if ($scope.selectedMemAll) {
				$scope.checkedMemIndexs.push($scope.groups[$scope.checkedIndexs-1].members[key].id);
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
	};
	
	Scopes.store('CommunicationManagementController', $scope);
	
	/* Selected row  */
	$scope.selectedRow = null;
	$scope.setClickedRow = function(index){  
		$scope.selectedRow = index;
	}
	
}]);

MetronicApp.controller('ModalInstanceCtrl', function ($rootScope, $scope, $modalInstance, Scopes) {
	$scope.users = Scopes.get('CommunicationManagementController').users;

	$scope.ok = function () {
		$modalInstance.close();
	};

	$scope.cancel = function () {
		$modalInstance.dismiss('cancel');
	};
});
