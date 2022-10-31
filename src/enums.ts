// Makes it easier to handle a named sets of constants
//by default numbering starts from zero and each option is assigned an increment by one
// you can assign values to it if its important

enum CompassDirection {
  North,
  East,
  South,
  West,
}

enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
}
// reference is by EnumName.Value
const StartingDirection = CompassDirection.East;
const CurrentStatus = StatusCodes.OK;
//Enums can be of many types = strings is a common type

enum MyNames {
  FirstName = "Melvin",
  LastName = "Lucas",
}
