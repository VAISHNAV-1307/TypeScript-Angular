package com.example.hotelInventoryBackend;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.Date;

public class Rooms {
    private String roomType;
    private String aminities;
    private String price;
    private String photo;
    private Date checkInTime;
    private Date checkoutTime;

    public Rooms() {
    }

    public Rooms(String roomType, String aminities, String price, String photo, Date checkInTime, Date checkoutTime) {
        this.roomType = roomType;
        this.aminities = aminities;
        this.price = price;
        this.photo = photo;
        this.checkInTime = checkInTime;
        this.checkoutTime = checkoutTime;

    }

    public String getRoomType() {
        return roomType;
    }

    public void setRoomType(String roomType) {
        this.roomType = roomType;
    }

    public String getAminities() {
        return aminities;
    }

    public void setAminities(String aminities) {
        this.aminities = aminities;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public Date getCheckInTime() {
        return checkInTime;
    }

    public void setCheckInTime(Date checkInTime) {
        this.checkInTime = checkInTime;
    }

    public Date getCheckoutTime() {
        return checkoutTime;
    }

    public void setCheckoutTime(Date checkoutTime) {
        this.checkoutTime = checkoutTime;
    }

    @Override
    public String toString() {
        return "Rooms{" +
                "roomType='" + roomType + '\'' +
                ", aminities='" + aminities + '\'' +
                ", price='" + price + '\'' +
                ", photo='" + photo + '\'' +
                ", checkInTime=" + checkInTime +
                ", checkoutTime=" + checkoutTime +
                '}';
    }
}
