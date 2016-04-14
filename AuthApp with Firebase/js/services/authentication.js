myApp.factory('Authentication',
    ['$rootScope', '$location', '$firebaseAuth','FIREBASE_URL',
    function($rootScope, $location, $firebaseAuth, FIREBASE_URL){
        //create an obj to refer to the app's url
        var ref = new Firebase(FIREBASE_URL);
        //hold the auth data from firebase
        var auth = $firebaseAuth(ref);

        return {
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

            register:function(user) {
                //create a new user with email and pwd
                auth.$createUser({
                    //get data from form's input fields
                    email: user.email,
                    password : user.password
                    //usr promise to be sure that firebase has succefully created a user
                }).then(function(regUser){
                    var regRef = new Firebase(FIREBASE_URL + 'users')
                        .child(regUser.uid).set({
                            date: Firebase.ServerValue.TIMESTAMP,
                            regUser: regUser.uid,
                            firstname: user.firstname,//from the register form
                            lastname: user.lastname,
                            email:user.email
                        });//user infos

                    $rootScope.message = "Hi " + user.firstname + ", Thanks for registering";
                    //catch an error in case of a used email
                }).catch(function(error){
                    $rootScope.message = error.message;

                })//create user
            }//register
        };
    }]);//factory