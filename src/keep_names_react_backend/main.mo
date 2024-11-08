import Buffer "mo:base/Buffer";
import Text "mo:base/Text";

actor {
  var names = Buffer.Buffer<Text>(0);
  
  public func greet(name : Text) : async () {
    names.add(name);
  };

  public query func submittedNames() : async Text {
    var result = "";
    for (name in names.vals()) {
      if (result == "") {
        result := name;
      } else {
        result := result # ", " # name;
      }
    };
    return result;
  };
};