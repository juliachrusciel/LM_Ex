

Step 1:
Create a new service students, with the following functions:
1) A function index(), that returns a list of  5 students with the following data structure:
{id: 1, grade: 9, profile: {firstName: 'Adam', lastName: 'Smith'}} (the value you are returning can be hardcoded, no need to worry about backend api calls)

Step 2:
Create a controller and view that together show the list of students in a table (using the index() function call from the students service in Step 1):
Student ID          |              Student Last Name, Student First Name    | Grade

Additionally, allow the table to be sorted by last name or grade (by clicking on the header cell for that column)

Step 3:
Create a new service homeworkAssignments with the following functions:
1) A function index() that returns a list of 3 homework assignments with a data structure similar to:
{id: 23, name: 'Reading 1'}
2) A function byStudent(studentId) that returns a list of 3 homework grades for a student, with a data structure like:
{homeworkAssignmentId: 23, studentId: 1, score: 83} (the scores are randomly generated 0-100, the homeworkAssignmentId should match up with the hardcoded "id" values from the index() function from Step 1)

Step 4:
Create a filter that accepts a homeworkAssignmentID as the parameter, and returns a string  that is the name of the homework assignment (where the name comes from your homeworkAssignments service from Step 3)

Step 5:
Create a new view/controller on a separate page from step 2 that has a studentId parameter (for example: /students/:studentId/homework) and displays a table of homework assignments for the studentID:
HomeworkAssignment ID | HomeworkAssignment Name | Score

Step 6:
Link your table from Step 2 to the page/view in Step 5 (so clicking a student name takes you to their homework scores page)
