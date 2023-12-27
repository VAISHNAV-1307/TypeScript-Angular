export interface Room{
    availableRooms: number;
    bookedRooms: number;
    totalRooms: number;
}

export interface RoomDetails{
    roomType: String;
    aminities: String;
    price: number;
    photo: String;
    checkTime: Date;
    checkoutTime: Date;
}