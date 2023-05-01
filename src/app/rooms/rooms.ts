export interface Room {
    availableRooms: number;
    bookedRooms: number;
    totelRooms: number;


}
export interface RoomsList {
    roomNo: number;
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: Date | string;
    checkoutTime: Date | string;
    rating: number;

}