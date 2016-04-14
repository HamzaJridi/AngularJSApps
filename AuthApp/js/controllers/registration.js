myApp.controller('RegistrationController',
    ['$scope', '$firebaseAuth','FIREBASE_URL',
        function($scope, $firebaseAuth, FIREBASE_URL){
            //create an obj to refer to the app's url
            var ref = new Firebase(FIREBASE_URL);
            //hold the auth data from firebase
            var auth = $firebaseAuth(ref);

            $scope.login = function() {
                $scope.message = "Welcome " + $scope.user.email;
        };//login

        $scope.register = function() {
            //create a new user with email and pwd
            auth.$createUser({
                //get data from form's input fields
                email: $scope.user.email,
                password : $scope.user.password
            //usr promise to be sure that firebase has succefully created a user
            }).then(function(regUser){
                $scope.message = "Hi " + $scope.user.firstname + ", Thanks for registering";
            //catch an error in case of a used email
            }).catch(function(error){
                $scope.message = error.message;

            })//create user
        };//register
}]);//Controller

