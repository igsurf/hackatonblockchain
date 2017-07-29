pragma solidity ^0.4.4;

// Simple Solidity intro/demo contract for BlockGeeks Article
contract Device {

  address DeviceAdmin;

  mapping ( address => Atm ) Atms;   // this allows to look up Users by their ethereum address
  address[] atmsByAddress;  // this is like a whitepages of all users, by ethereum address

//  struct notarizedImage {
//    string imageURL;
//    uint timeStamp;
//  }

  struct Atm {
    string handle;
    bytes32 city;
    bytes32 state;
    bytes32 country;
  }

  function Device() payable {  // this is the CONSTRUCTOR (same name as contract) it gets called ONCE only when contract is first deployed
    DeviceAdmin = msg.sender;  // just set the admin, so they can remove bad users or images if needed, but nobody else can
  }

  modifier onlyAdmin() {
      if (msg.sender != DeviceAdmin)
        throw;
      // Do not forget the "_;"! It will be replaced by the actual function body when the modifier is used.
      _;
  }

  function registerNewDevice(string handle, bytes32 city, bytes32 state, bytes32 country) returns (bool success) {
    address thisNewAddress = msg.sender;
    // don't overwrite existing entries, and make sure handle isn't null
    if(bytes(Atms[msg.sender].handle).length == 0 && bytes(handle).length != 0){
      Atms[thisNewAddress].handle = handle;
      Atms[thisNewAddress].city = city;
      Atms[thisNewAddress].state = state;
      Atms[thisNewAddress].country = country;
      atmsByAddress.push(thisNewAddress);  // adds an entry for this user to the user 'whitepages'
      return true;
    } else {
      return false; // either handle was null, or a user with this handle already existed
    }
  }

  function getDevices() constant returns (address[]) { return atmsByAddress; }

  function getDevice(address userAddress) constant returns (string,bytes32,bytes32,bytes32) {
    return (Atms[userAddress].handle, Atms[userAddress].city, Atms[userAddress].state, Atms[userAddress].country);
  }

  /*function get(address deviceAddress) constant returns (string) {
    return Atms[deviceAddress].handle
  }*/


}