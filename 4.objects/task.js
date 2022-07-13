function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  this.marks = (this.marks || []).concat(mark);
}

Student.prototype.getAverage = function() {
  if (this.marks?.length) {
    return this.marks.reduce((acc, v) => acc + v) / this.marks.length;
  }
  return 0;
}

Student.prototype.exclude = function(reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}
