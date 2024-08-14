//Classes
class Room {
    private family: string[] = [];
    readonly dobShikha: string = '1982-12-12';
    private readonly dobHriday: string = '2013-12-12';
    constructor(public room: string){}

    addFamilyMember(member: string){
        this.family.push(member);
    }

    showFamily(){
        console.log(this.family);
    }

    cleanRoom(soap: string){
        console.log(`Cleaning ${this.room} with ${soap}`)
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