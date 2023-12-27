import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RoomDetails } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css']
})
export class RoomsListComponent implements OnChanges {


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  @Input() roomsList: RoomDetails[] = [];

  @Output() selectedRooms = new EventEmitter<RoomDetails>();

  selectRooms(room: RoomDetails) {
    this.selectedRooms.emit(room);
  }

}
