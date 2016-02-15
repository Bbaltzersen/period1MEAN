/**
 * Created by bbalt on 15/02/2016.
 */

//Creates the clossure that creates the person.

var person = function() {
    var name;
    var age;
    return {
        setAge : function(age2) {
            age = age2;
        },
        setName : function(name2) {
            name = name2;
        },
        getInfo : function() {
            return {'name': name, 'age': age};
        }
    }

}

var person1 = person();

//initiates the methods.
person1.setAge(20);
person1.setName("Mako");
console.log(person1.getInfo());