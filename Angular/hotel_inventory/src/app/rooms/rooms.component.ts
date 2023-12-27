import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Room, RoomDetails } from './rooms';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements AfterViewInit, OnInit{

  roomList: RoomDetails[] = [];

  constructor(private roomsService: RoomsService) {
    
  }
  ngOnInit(): void {
    this.roomsService.getRooms().subscribe(rooms => {
      this.roomList = rooms;
    });
  }


  ngAfterViewInit(): void {
    console.log(this.headerComponent);
  }

  hotelName: String = "BD hotel";
  numberOfRooms = 10;
  hideRooms = false;

  rooms: Room = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room: RoomDetails) {
    console.log(room)
  }

  @ViewChild(HeaderComponent, {static: true}) headerComponent!: HeaderComponent;
}
