/**
 * Created by yaronlambers on 22/09/16.
 */

var text = '{"employees":[' +
    '{"firstName":"John","lastName":"Doe" },' +
    '{"firstName":"Anna","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" }]}';

obj = JSON.parse(text);
document.getElementById("demo").innerHTML =
    obj.employees[2].firstName + " " + obj.employees[2].lastName;