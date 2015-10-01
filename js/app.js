
angular.module("MyApp",[])
  .controller('MyController', function (){
	var self = this;

	self.name = {
		first: 'first name',
		last: 'last name',
		email: 'some_name@email.com'
	},
	self.tempUser = {
		first: self.name.first,
		last: self.name.last,
	},
	self.showEditor = false;
	self.showEditChanger = function (){
		self.showEditor = !self.showEditor;
	};

	self.editText = function (name) {
		self.showEditChanger();
		self.name = {
		first: self.tempUser.first,
		last: self.tempUser.last
	}
	};
		self.cancelText = function () {
		self.showEditChanger();
		self.name = {
		first: self.name.first,
		last: self.name.last
	}
	self.tempUser = {
		first: self.name.first,
		last: self.name.last

	}
	};

});




