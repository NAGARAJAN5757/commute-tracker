interface User {
  id: string;
  username: string;
  password: string;
  role: string;
  phoneNumber: string;
}

interface Driver {
  id: string;
  user: User;
  vehicle: {
    id: string;
    name: string;
  };
  morningRides: any[];
  afternoonRides: any[];
  eveningRides: any[];
}

interface Location {
  id: string;
  name: string;
  distance: number;
}

interface Vehicle {
  id: string;
  name: string;
  seatCount: number;
}

interface Ride {
  id: string;
  passenger: User;
  locationDetails: Location;
  driver: User;
  time: string;
  batch: string;
  date: string;
  from: string;
  to: string;
}

interface Passenger {
  id: string;
  user: User;
  locationDetails: Location;
  ride: any; // In the provided JSON, 'ride' is null, hence it can be of any type
}

interface Assignment {
  date: number;
  time: number;
  assigned: string;
}

interface SchemaData {
  users: User[];
  drivers: Driver[];
  locations: Location[];
  vehicle: Vehicle[];
  rides: Ride[];
  passengers: Passenger[];
  assignment: Assignment[];
}
