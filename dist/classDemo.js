"use strict";
//Classes
class Room {
    constructor(room) {
        this.room = room;
        this.family = [];
        this.dobShikha = '1982-12-12';
        this.dobHriday = '2013-12-12';
    }
    addFamilyMember(member) {
        this.family.push(member);
    }
    showFamily() {
        console.log(this.family);
    }
}
class OyoRoom extends Room {
    cleanRoom(soap) {
        console.log(`${this.room} is Oyo Room cleaned with ${soap}`);
    }
    get allReports() {
        return this.reports;
    }
    set newReport(report) {
        this.reports.push(report);
    }
    constructor(room, roomRent) {
        super(room);
        this.roomRent = roomRent;
        this.reports = [];
    }
    static createRoom(room) {
        return { room: room };
    }
    addFamilyMember(member) {
        if (member === 'Kapil')
            return;
        this.family.push(member);
    }
    changeRoomRent(rent) {
        this.roomRent = rent;
    }
    showRoomRent() {
        console.log(`${this.room}'s room rent is ${this.roomRent}`);
    }
}
OyoRoom.currentYear = 2024;
class TreboHotel extends Room {
    constructor(room, roomRent) {
        super(room);
        this.roomRent = roomRent;
    }
    static getInstance() {
        if (!TreboHotel.instance)
            TreboHotel.instance = new TreboHotel("Trebo", 1000);
        return TreboHotel.instance;
    }
    cleanRoom(soap) {
        console.log(`${this.room} is Trebo Room cleaned with ${soap}`);
    }
}
const vijay = TreboHotel.getInstance();
console.log(vijay);
const rohit = OyoRoom.createRoom('Rohit');
console.log(rohit);
console.log(OyoRoom.currentYear);
const shekar = new OyoRoom('Shekar', 1000);
const shobha = new OyoRoom('Shobha', 1000);
const kapil = new OyoRoom('Kapil', 1000);
shekar.newReport = 'Year End Report';
console.log(shekar.allReports);
shekar.addFamilyMember('Shekar');
shekar.addFamilyMember('Shobha');
shekar.addFamilyMember('Kapil');
shekar.showFamily();
shekar.showRoomRent();
shekar.changeRoomRent(2000);
shekar.showRoomRent();
shekar.cleanRoom('Domex');
// const nabs = new Room('Nabendu');
// const mous = new Room('Mousam');
// const hris = new Room('Hriday');
// const shiks = new Room('Shikha');
// shiks.dobShikha;
// nabs.addFamilyMember('Nabendu');
// nabs.addFamilyMember('Mousam');
// nabs.addFamilyMember('Hriday');
// nabs.addFamilyMember('Shikha');
// nabs.showFamily();
// mous.cleanRoom('Lizol');
