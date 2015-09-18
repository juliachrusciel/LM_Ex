router.get('/angular', function(req, res, next) {
  // response: render the '/views/angular.ejs' template and
  // give it the data of { title: 'Tasker', library: "Angular"}
  res.render('angular', { title: 'Tasker', library: 'Angular' });
});


// step 1:
// Create a new service students, with the following functions:
// 1) A function index(), that returns a list of  5 students with the following data structure:
// {id: 1, grade: 9, profile: {firstName: 'Adam', lastName: 'Smith'}} (the value you are returning can be hardcoded, no need to worry about backend api calls)

// function index() {
//   return list = [ id, grade, profile ];
//   var id = [1, 2, 3, 4, 5] ;
//   var grade = [9, 10, 11, 12, 9];
//   var profile = {firstName, lastName};
//
//
//   return list.push.;
// };
