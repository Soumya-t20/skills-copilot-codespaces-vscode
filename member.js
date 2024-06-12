function skillsMember() {
  return {
    restrict: 'E',
    scope: {
      member: '='
    },
    templateUrl: 'member.html',
    link: function(scope, element, attrs) {
      scope.skills = ['HTML', 'CSS', 'JavaScript'];
    }
  };
}