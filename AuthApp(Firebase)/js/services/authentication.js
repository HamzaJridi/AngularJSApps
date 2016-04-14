myApp.factory('Authentication',
    ['$rootScope', '$location', '$firebaseAuth', '$firebaseObject','FIREBASE_URL',
    function($rootScope, $location, $firebaseAuth, $firebaseObject,FIREBASE_URL){
        //create afirebase obj to refer to the app's url
        var ref = new Firebase(FIREBASE_URL);
        //hold the auth data from firebase
        var auth = $firebaseAuth(ref);

        //display msg to the logged user
        auth.$onAuth(function(authUser) {
           if (authUser) {
               var userRef = new Firebase(FIREBASE_URL + 'users/' + authUser.uid);
               var userObj = $firebaseObject(userRef);
               $rootScope.currentUser = userObj;
           } else {
               $rootScope.currentUser = '';
           }
        });


        var myObject = {
            //the user param is from the reg ctrller
            login: function(user){
                auth.$authWithPassword({
                    email:user.email,//from the login form
                    password:user.password
                }).then(function(regUser){
                    //redirect to succes page
                    $location.path('/success');
                }).catch(function(error) {
                    $rootScope.message = error.message ;
                });
            },//login

            logout:function() {
                return auth.$unauth();
            },//logout

            requireAuth: function() {
                return auth.$requireAuth();
            },//require Authentication

            register:function(user) {
                //create a new user with email and pwd
                auth.$createUser({
                    //get data from form's input fields
                    email: user.email,
                    password : user.password
                }).then(function(regUser){
                    //usr promise to be sure that firebase has succefully created a user
                    var regRef = new Firebase(FIREBASE_URL + 'users')
                        .child(regUser.uid).set({
                            date: Firebase.ServerValue.TIMESTAMP,
                            regUser: regUser.uid,
                            firstname: user.firstname,//from the register form
                            lastname: user.lastname,
                            email:user.email
                        });//user infos

                    //log in the user after registering
                    myObject.login(user);

                    //catch an error in case of a used email
                }).catch(function(error){
                    $rootScope.message = error.message;

                })//create user
            }//register
        };

        return myObject
    }]);//factory