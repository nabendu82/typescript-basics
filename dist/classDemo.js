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
    cleanRoom(soap) {
        console.log(`Cleaning ${this.room} with ${soap}`);
    }
}
const nabs = new Room('Nabendu');
const mous = new Room('Mousam');
const hris = new Room('Hriday');
const shiks = new Room('Shikha');
shiks.dobShikha;
nabs.addFamilyMember('Nabendu');
nabs.addFamilyMember('Mousam');
nabs.addFamilyMember('Hriday');
nabs.addFamilyMember('Shikha');
nabs.showFamily();
mous.cleanRoom('Lizol');
