import { Injectable, OnInit } from '@angular/core';
import { RoomDetails } from '../rooms';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService implements OnInit{

  constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
  }

  getRooms() {
    return this.http.get<RoomDetails[]>("http://localhost:8080/getRooms");
  }

  addRoom(room : RoomDetails) {
    return this.http.post<RoomDetails>("http://localhost:8080/saveRooms", room);
  }


}
