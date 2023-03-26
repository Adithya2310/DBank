import Debug "mo:base/Debug";
import Int "mo:base/Int";
import Time "mo:base/Time";
import Float "mo:base/Float";
actor dbank{
    stable var curVal:Float=100;
    Debug.print("done");
    Debug.print(debug_show("Hello user"));
    stable var startTime=Time.now();
    Debug.print(debug_show(startTime));

    public func topUp(mat: Float){
    curVal+=mat;
    Debug.print(debug_show(curVal));
  };

  public func debit(amt: Float){
    if(curVal-amt:Float>=0){
      curVal-=amt;
      Debug.print(debug_show(curVal));
    }
    else{
      Debug.print("balance insufficent")
    }
  };

  public query func getBalance():async Float{
    return curVal;
  };

  public func compund(){
    let curTime=Time.now();
    let timeElapsed=(curTime-startTime)/10000000000;
    curVal:=curVal*(1.01**Float.fromInt(timeElapsed/153600));
    startTime:=curTime;
  };
};


