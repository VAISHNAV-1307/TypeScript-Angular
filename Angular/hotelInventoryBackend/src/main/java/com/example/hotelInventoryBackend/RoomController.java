package com.example.hotelInventoryBackend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class RoomController {

    @GetMapping("/getRooms")
    public List<Rooms> getRooms(){
        Rooms room1 = new Rooms("Delux", "Air conditioner", "1000", "photo", new Date(), new Date());
        Rooms room2 = new Rooms("ultraDelux", "ultra Air conditioner", "10000", "ultra hd photo", new Date(), new Date());
        return List.of(room1, room2);
    }
}
