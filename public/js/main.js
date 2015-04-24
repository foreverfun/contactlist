(function(){
  var app = angular.module("contactlistapp", []);

  app.controller('CLCtrl', ['$scope', '$http', function($scope, $http){

    // ========================================================
    // display all contact info in the database via http get
    var displayContactList = function() {
      $http.get('/contactlist').success(function(response){
        //console.log(response);
        $scope.contactlist = response;
        $scope.person = "";
      })
    }

    displayContactList();

    // ========================================================
    // add a new contact in the database via http post 
    
    // addPerson function pass data from add new contact form to database via http post
    var addPerson = function() {
      $http.post('/contactlist', $scope.person).success(function(response){
        displayContactList();
      });
      
      $('#addContactDialog').modal('hide');
      
    }

    // add new contact form shows, when add new contact button is clicked
    $scope.showAddForm = function() {
        $('#addContactDialog').modal('show');
    }

    // click add button in add new contact form will trigger addPerson function
    $('#addBtn').on('click', addPerson); 
    
    // ========================================================
    // delete a contact from database via http delete 
    $scope.deletePerson = function(id) {
      console.log(id);
      $http.delete('/contactlist/'+id).success(function(response){
        displayContactList();
      });
    }

    //===========================================================
    // update a contact in database via http put
    // this function will retrieve the data from database
    var editPerson = function(id) {
      //console.log(id);
      $http.get('/contactlist/'+id).success(function(response){
        //$scope.person = response;
        console.log(response);
        $scope.person = response;
      });
    }

    // when edit button is clicked, editPerson function is called to retrieve the info
    // the edit contact dialog box shows with info retrieved from database
    $scope.showEditForm = function(id) {
      // console.log(id);
      editPerson(id);
      $('#editContactDialog').modal('show');  
    }

    // updatePerson will retrieve the data from edit contact form and pass to database via http.put
    var updatePerson = function() {
      if ($scope.person._id) {
        $http.put('/contactlist/'+$scope.person._id, $scope.person).success(function(response){
          displayContactList();
        })
      }
      $('#editContactDialog').modal('hide');  
    } 

    // when update button is clicked, updatePerson is called
    $('#updateBtn').on('click', updatePerson);
  }]);
})();